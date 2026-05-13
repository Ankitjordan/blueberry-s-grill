package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/tmc/langchaingo/llms"
	"github.com/tmc/langchaingo/llms/googleai"
)

func main() {
	// Load .env from backend root (one dir up from tools/)
	if err := godotenv.Load("../.env"); err != nil {
		log.Printf("Warning: could not load .env: %v", err)
	}

	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey == "" {
		log.Fatal("GEMINI_API_KEY is not set")
	}
	fmt.Printf("API key loaded (len=%d)\n", len(apiKey))

	ctx := context.Background()

	llm, err := googleai.New(
		ctx,
		googleai.WithAPIKey(apiKey),
		googleai.WithDefaultModel("gemini-2.5-flash"),
	)
	if err != nil {
		log.Fatalf("googleai.New() failed: %v", err)
	}

	fmt.Println("Sending test prompt to Gemini 2.5 Flash...")

	content := []llms.MessageContent{
		llms.TextParts(llms.ChatMessageTypeHuman, "Reply with just the word: WORKING"),
	}

	resp, err := llm.GenerateContent(ctx, content)
	if err != nil {
		log.Fatalf("GenerateContent() failed: %v", err)
	}

	if len(resp.Choices) == 0 {
		log.Fatal("No choices returned")
	}

	fmt.Printf("Gemini response: %q\n", resp.Choices[0].Content)
	fmt.Println("SUCCESS — Gemini API is working correctly.")
}
