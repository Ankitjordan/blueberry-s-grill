package controllers

import (
	"backend/services"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

type AgentController struct {
	agentService *services.AgentService
}

func NewAgentController() *AgentController {
	return &AgentController{
		agentService: services.NewAgentService(),
	}
}

type ChatRequest struct {
	Message string `json:"message" binding:"required"`
}

// HandleChat processes a chat message and streams SSE events back
func (ctrl *AgentController) HandleChat(c *gin.Context) {
	var req ChatRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Message is required"})
		return
	}

	if len(req.Message) > 2000 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Message too long"})
		return
	}

	if len(strings.TrimSpace(req.Message)) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Message cannot be empty"})
		return
	}

	// Set SSE headers
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Header("X-Accel-Buffering", "no")

	// Create context with timeout
	ctx, cancel := context.WithTimeout(c.Request.Context(), 60*time.Second)
	defer cancel()

	// Create event channel
	eventCh := make(chan services.SSEEvent, 100)

	// Start processing in background
	go func() {
		if err := ctrl.agentService.ProcessMessage(ctx, req.Message, eventCh); err != nil {
			fmt.Printf("Agent error: %v\n", err)
		}
	}()

	// Stream events
	c.Stream(func(w io.Writer) bool {
		select {
		case event, ok := <-eventCh:
			if !ok {
				return false
			}
			data, err := json.Marshal(event)
			if err != nil {
				return false
			}
			c.SSEvent("message", string(data))
			c.Writer.Flush()
			return true
		case <-ctx.Done():
			return false
		}
	})
}
