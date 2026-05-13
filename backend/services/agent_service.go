package services

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/tmc/langchaingo/llms"
	"github.com/tmc/langchaingo/llms/googleai"
)

// ──────────────────────────────────────────────
// Tool definitions
// ──────────────────────────────────────────────

type ToolDef struct {
	Name        string            `json:"name"`
	Description string            `json:"description"`
	Parameters  map[string]string `json:"parameters"`
}

var AvailableTools = []ToolDef{
	{
		Name:        "navigate_to_page",
		Description: "Navigate the user to a specific page on the website. Use this when a user says things like 'show me desserts', 'open the menu', 'take me to desserts', 'go to home page'. Only navigate to EXISTING pages.",
		Parameters: map[string]string{
			"page": "The page path to navigate to. Valid values: '/' (home), '/menu/desserts' (desserts menu), '/menu/desserts/brownie-stack', '/menu/desserts/berry-cream-waffle', '/menu/desserts/chocolate-banana-french-toast', '/menu/desserts/pancake'",
		},
	},
	{
		Name:        "scroll_to_section",
		Description: "Scroll the user's viewport to a specific section on the current home page. Use when user says 'show me the food section', 'scroll to testimonials', 'show me reviews'. Only works on the home page.",
		Parameters: map[string]string{
			"section": "The section to scroll to. Valid values: 'explore-food' (the explore menu section), 'testimonials' (guest reviews section)",
		},
	},
}

// ──────────────────────────────────────────────
// SSE Event types
// ──────────────────────────────────────────────

type SSEEvent struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
}

type AgentStep struct {
	Step   string `json:"step"`
	Status string `json:"status"` // "active", "done", "pending"
}

type ActionPayload struct {
	Tool   string            `json:"tool"`
	Params map[string]string `json:"params"`
}

type TextChunk struct {
	Content string `json:"content"`
}

// ──────────────────────────────────────────────
// Menu Knowledge Base
// ──────────────────────────────────────────────

const restaurantContext = `You are the AI concierge for Blueberry's Grill — a premium, modern grill restaurant.
Your name is "Grill Concierge" and you speak with warm sophistication.

RESTAURANT INFO:
- Name: Blueberry's Grill
- Style: Modern, premium wood-fired dining
- Address: 102 Forest Avenue, Culinary District
- Hours: Tue-Thu 12pm-11pm, Fri-Sat 12pm-2am, Sun 11am-9pm, Mon Closed
- Phone: (555) 123-BLUE

MENU KNOWLEDGE:

DESSERTS (Full pages available):
- Nutella Waffle ($10) — Belgian waffle, Premium Nutella, Organic Strawberries, Chantilly Cream, Gold-dusted Powdered Sugar. Rating: 4.8. Best Seller, Signature, Classic. Page: /menu/desserts
- Brownie Stack ($9) — 70% Dark Chocolate Brownies, Tahitian Vanilla Bean Ice Cream, Artisanal Hot Fudge, Salted Caramel Drizzle, Roasted Walnuts. Rating: 4.9. Best Seller, Signature, Decadent. Page: /menu/desserts/brownie-stack
- Berry Cream Waffle ($11) — Fresh Wild Berries, Velvety Mascarpone Cream, Crisp Belgian Waffle, Organic Honey Drizzle, Mint Garnish. Rating: 4.7. Page: /menu/desserts/berry-cream-waffle
- Chocolate Banana French Toast ($12) — Brioche Bread, Caramelized Bananas, Dark Chocolate Shavings, Maple Bourbon Syrup, Toasted Pecans. Rating: 4.8. Best Seller. Page: /menu/desserts/chocolate-banana-french-toast
- Pancake ($11) — Fluffy Buttermilk Batter, Clarified Butter, Pure Vermont Maple Syrup, Whipped Sea Salt Butter, Seasonal Berry Compote. Rating: 4.6. Classic. Page: /menu/desserts/pancake

STARTERS (No dedicated pages yet):
- Loaded Fries ($9) — Cheese, jalapeños, sour cream drizzle on crispy golden fries
- Crispy Wings ($13) — 6 pcs tossed in signature house sauce
- Nachos Supreme ($11) — Guac, pico de gallo, three-cheese pull
- Onion Rings ($7) — Beer battered rings with tangy aioli

MAINS (No dedicated pages yet):
- The OG Burger ($14) — Triple wagyu smash patty, secret vibe sauce, pickles on brioche
- Club Sandwich ($12) — Grilled chicken, avocado, fresh greens on sourdough toast
- BBQ Platter ($22) — Ribs, wings, corn on the cob, and house slaw
- Pasta Al Forno ($16) — Baked penne in slow-cooked tomato and herb sauce

BEVERAGES (No dedicated pages yet):
- Disco Sour ($12) — Gin, butterfly pea, elderflower and gold glitter edible dust
- Berry Smash ($10) — Muddled fresh berries, soda water, torn mint
- Iced Matcha ($8) — Ceremonial grade matcha over creamy oat milk and crushed ice
- Mango Shake ($7) — Alphonso mango blended with vanilla ice cream

HOME PAGE SECTIONS:
- Explore Food Section (id: "explore-food") — Shows all four menu categories (Beverages, QuickBites, Desserts, Mains) as stacking scroll cards
- Testimonials Section (id: "testimonials") — Guest reviews and ratings

EXISTING WEBSITE PAGES:
- / (Home page with Explore Food + Testimonials)
- /menu/desserts (Desserts page — Nutella Waffle default)
- /menu/desserts/brownie-stack
- /menu/desserts/berry-cream-waffle
- /menu/desserts/chocolate-banana-french-toast
- /menu/desserts/pancake

IMPORTANT RULES:
1. For INFORMATIONAL questions (what do you have, tell me about, what's in, describe, price, etc.) — respond conversationally with rich detail. Do NOT use tools.
2. For ACTION requests (show me, take me to, open, navigate, go to, scroll to, etc.) — use the appropriate tool AND give a brief response.
3. NEVER mention pages or features that don't exist yet (no beverages page, no quickbites page, no mains page, no booking system).
4. When using navigate_to_page, ONLY use valid paths listed above.
5. When using scroll_to_section, ONLY use 'explore-food' or 'testimonials'.
6. Use markdown bold (**text**) for menu item names and prices.
7. Be warm, sophisticated, and concise.
8. If user asks about booking/reservations, mention they can call (555) 123-BLUE but do NOT try to navigate to a booking page.`

// ──────────────────────────────────────────────
// Agent Service
// ──────────────────────────────────────────────

type AgentService struct{}

func NewAgentService() *AgentService {
	return &AgentService{}
}

type AgentResponse struct {
	Steps   []AgentStep    `json:"steps,omitempty"`
	Action  *ActionPayload `json:"action,omitempty"`
	Message string         `json:"message"`
}

func (s *AgentService) ProcessMessage(ctx context.Context, userMessage string, eventCh chan<- SSEEvent) error {
	defer close(eventCh)

	// ── Read API key ─────────────────────────────────────────────
	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey == "" {
		fmt.Println("[AgentService] ERROR: GEMINI_API_KEY is not set")
		eventCh <- SSEEvent{Type: "error", Data: map[string]string{"message": "API key not configured"}}
		return fmt.Errorf("GEMINI_API_KEY not set")
	}
	fmt.Println("[AgentService] GEMINI_API_KEY loaded successfully")

	// Step 1: Understanding request
	eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Understanding your request...", Status: "active"}}

	// ── Initialize Gemini 2.5 Flash via Google AI Studio ─────────
	llm, err := googleai.New(
		ctx,
		googleai.WithAPIKey(apiKey),
		googleai.WithDefaultModel("gemini-2.5-flash"),
	)
	if err != nil {
		fmt.Printf("[AgentService] googleai.New() error: %v\n", err)
		eventCh <- SSEEvent{Type: "error", Data: map[string]string{"message": "Failed to initialize Gemini"}}
		return fmt.Errorf("failed to create LLM: %w", err)
	}

	eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Understanding your request...", Status: "done"}}

	// Step 2: Analyzing intent
	eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Analyzing intent...", Status: "active"}}

	// Build the tool calling prompt
	toolsJSON, _ := json.Marshal(AvailableTools)
	systemPrompt := fmt.Sprintf(`%s

AVAILABLE TOOLS:
%s

RESPONSE FORMAT:
You must respond in valid JSON with this exact structure:
{
  "action": null or {"tool": "tool_name", "params": {"key": "value"}},
  "message": "Your conversational response to the user"
}

If the user wants information only, set action to null and provide a detailed response in message.
If the user wants navigation/action, set action with the appropriate tool and params, and provide a brief contextual message.

IMPORTANT: Respond ONLY with the JSON object. No markdown code blocks, no extra text.`, restaurantContext, string(toolsJSON))

	// Call Gemini
	content := []llms.MessageContent{
		llms.TextParts(llms.ChatMessageTypeSystem, systemPrompt),
		llms.TextParts(llms.ChatMessageTypeHuman, userMessage),
	}

	resp, err := llm.GenerateContent(ctx, content)
	if err != nil {
		eventCh <- SSEEvent{Type: "error", Data: map[string]string{"message": "AI processing failed"}}
		return fmt.Errorf("LLM call failed: %w", err)
	}

	eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Analyzing intent...", Status: "done"}}

	if len(resp.Choices) == 0 {
		eventCh <- SSEEvent{Type: "error", Data: map[string]string{"message": "No response from AI"}}
		return fmt.Errorf("no choices in response")
	}

	rawContent := resp.Choices[0].Content

	// Parse the JSON response
	var agentResp AgentResponse
	cleanContent := strings.TrimSpace(rawContent)
	// Remove markdown code block if present
	cleanContent = strings.TrimPrefix(cleanContent, "```json")
	cleanContent = strings.TrimPrefix(cleanContent, "```")
	cleanContent = strings.TrimSuffix(cleanContent, "```")
	cleanContent = strings.TrimSpace(cleanContent)

	if err := json.Unmarshal([]byte(cleanContent), &agentResp); err != nil {
		// If JSON parsing fails, treat the whole response as a text message
		agentResp = AgentResponse{
			Message: rawContent,
			Action:  nil,
		}
	}

	// Step 3: Handle action if present
	if agentResp.Action != nil && agentResp.Action.Tool != "" {
		eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Preparing action...", Status: "active"}}

		// Validate tool
		if isValidTool(agentResp.Action.Tool) {
			eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Preparing action...", Status: "done"}}

			// Descriptive step
			actionDesc := describeAction(agentResp.Action)
			eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: actionDesc, Status: "active"}}

			// Send action event
			eventCh <- SSEEvent{Type: "action", Data: agentResp.Action}

			eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: actionDesc, Status: "done"}}
		}
	}

	// Step 4: Stream the text message
	eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Composing response...", Status: "active"}}

	// Stream message character by character (in chunks for efficiency)
	message := agentResp.Message
	chunkSize := 3
	for i := 0; i < len(message); i += chunkSize {
		end := i + chunkSize
		if end > len(message) {
			end = len(message)
		}
		chunk := message[i:end]
		eventCh <- SSEEvent{Type: "text", Data: TextChunk{Content: chunk}}
	}

	eventCh <- SSEEvent{Type: "step", Data: AgentStep{Step: "Composing response...", Status: "done"}}
	eventCh <- SSEEvent{Type: "done", Data: nil}

	return nil
}

func isValidTool(toolName string) bool {
	for _, t := range AvailableTools {
		if t.Name == toolName {
			return true
		}
	}
	return false
}

func describeAction(action *ActionPayload) string {
	switch action.Tool {
	case "navigate_to_page":
		page := action.Params["page"]
		switch page {
		case "/":
			return "Navigating to home page..."
		case "/menu/desserts":
			return "Opening desserts menu..."
		default:
			if strings.Contains(page, "/menu/desserts/") {
				name := strings.ReplaceAll(strings.TrimPrefix(page, "/menu/desserts/"), "-", " ")
				return fmt.Sprintf("Opening %s...", name)
			}
			return "Navigating..."
		}
	case "scroll_to_section":
		section := action.Params["section"]
		switch section {
		case "explore-food":
			return "Scrolling to explore menu..."
		case "testimonials":
			return "Scrolling to guest reviews..."
		default:
			return "Scrolling..."
		}
	}
	return "Executing action..."
}
