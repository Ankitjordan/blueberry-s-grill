Menu

# OpenAI Codex

Last updated March 16, 2026

[OpenAI Codex](https://github.com/openai/codex) is OpenAI's agentic coding tool. You can configure it to use Vercel AI Gateway, enabling you to:

* Route requests through multiple AI providers
* Monitor traffic and spend in your AI Gateway Overview
* View detailed traces in Vercel Observability under AI
* Use any model available through the gateway

## [Configure OpenAI Codex](#configure-openai-codex)

Configure Codex to use AI Gateway through its configuration file for persistent settings.

1. ### [Install OpenAI Codex CLI](#install-openai-codex-cli)

   Follow the [installation instructions on the OpenAI Codex repository](https://github.com/openai/codex) to install the Codex CLI tool.
2. ### [Configure environment variables](#configure-environment-variables)

   Set your [AI Gateway API key](/docs/ai-gateway/authentication-and-byok/authentication) in your shell configuration file, for example in `~/.zshrc` or `~/.bashrc`:

   ```
   export AI_GATEWAY_API_KEY="your-ai-gateway-api-key"
   ```

   After adding this, reload your shell configuration:

   ```
   source ~/.zshrc  # or source ~/.bashrc
   ```
3. ### [Set up the Codex config file](#set-up-the-codex-config-file)

   Open `~/.codex/config.toml` and add the following:

   ~/.codex/config.toml

   ```
   [model_providers.vercel]
   name = "Vercel AI Gateway"
   base_url = "https://ai-gateway.vercel.sh/v1"
   env_key = "AI_GATEWAY_API_KEY"
   wire_api = "responses"

   [profiles.vercel]
   model_provider = "vercel"
   model = "openai/gpt-5.5"
   ```

   The configuration above:

   * Sets up a model provider named `vercel` that points to the AI Gateway
   * References your `AI_GATEWAY_API_KEY` environment variable
   * Creates a `vercel` profile that uses the Vercel provider
   * Specifies `openai/gpt-5.5` as the default model
   * Uses `wire_api = "responses"` for the OpenAI Responses API format
4. ### [Run Codex](#run-codex)

   Start Codex with the `vercel` profile:

   ```
   codex --profile vercel
   ```

   Vercel AI Gateway routes your requests. To confirm, check your [AI Gateway Overview](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) in the Vercel dashboard.
5. ### [(Optional) Use a different model](#optional-use-a-different-model)

   To use a different model, update the `model` field in your config:

   ~/.codex/config.toml

   ```
   [profiles.vercel]
   model_provider = "vercel"
   model = "anthropic/claude-sonnet-4.6"
   # Or try other models:
   # model = "google/gemini-3.1-flash-lite-preview"
   # model = "openai/gpt-5.5"
   ```

   When using non-OpenAI models through the gateway, you may see warnings about
   model metadata not being found. These warnings are safe to ignore since the
   gateway handles model routing.
6. ### [(Optional) Define multiple profiles](#optional-define-multiple-profiles)

   Add each profile to your config file:

   ~/.codex/config.toml

   ```
   [model_providers.vercel]
   name = "Vercel AI Gateway"
   base_url = "https://ai-gateway.vercel.sh/v1"
   env_key = "AI_GATEWAY_API_KEY"
   wire_api = "responses"

   [profiles.vercel]
   model_provider = "vercel"
   model = "openai/gpt-5.5"

   [profiles.fast]
   model_provider = "vercel"
   model = "openai/gpt-5.4-nano"

   [profiles.reasoning]
   model_provider = "vercel"
   model = "openai/gpt-5.5-pro"

   [profiles.claude]
   model_provider = "vercel"
   model = "anthropic/claude-sonnet-4.6"
   ```

   Switch between profiles using the `--profile` flag:

   ```
   codex --profile vercel
   codex --profile claude
   ```

---

Was this helpful?
