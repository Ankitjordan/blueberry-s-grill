Menu

# Getting Started

Last updated March 7, 2026

Choose a quickstart to set up a project and make your first request:

AI Assistance

Help me set up AI Gateway in this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Run `vercel link` and `vercel env pull` to pull AI Gateway credentials (OIDC tokens are provisioned automatically). 2. Install the `ai` package. 3. Create a script that uses the AI SDK streamText function with the model 'openai/gpt-5.5' to stream a text response. 4. Run it to verify the API key and AI Gateway are working.

[### Text Generation

Generate and stream text with GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Llama 4, and 100+ more models.

AI SDK · OpenAI Chat Completions · OpenAI Responses · Anthropic Messages · OpenResponses](/docs/ai-gateway/getting-started/text)[### Image Generation

Create images from text prompts or edit existing images with Flux 2 Flex, Recraft V3, Imagen, and more.

AI SDK · OpenAI Chat Completions](/docs/ai-gateway/getting-started/image)[### Video Generation

Create videos from text prompts, images, or video input with Veo 3.1, KlingAI, Wan, Grok Imagine Video, and more.

AI SDK v6](/docs/ai-gateway/getting-started/video)

---

[Previous

AI Gateway](/docs/ai-gateway)[Next

Text](/docs/ai-gateway/getting-started/text)

Was this helpful?
