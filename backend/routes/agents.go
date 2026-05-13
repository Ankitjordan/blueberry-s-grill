package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func AgentCallRouter(r *gin.Engine) {
	ctrl := controllers.NewAgentController()
	agents := r.Group("/agents")
	{
		agents.POST("/chat", ctrl.HandleChat)
	}
}