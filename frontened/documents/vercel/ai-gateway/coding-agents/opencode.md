Menu

# OpenCode

Last updated February 26, 2026

[OpenCode](https://opencode.ai) is a terminal-based AI coding assistant that runs in your development environment. Here's how to use OpenCode with Vercel AI Gateway to access models from OpenAI, Anthropic, Google, xAI, and more through a unified endpoint.

## [Configuring OpenCode](#configuring-opencode)

1. ### [Create an API key](#create-an-api-key)

   Go to the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar and click API keys to create a new API key.
2. ### [Start OpenCode](#start-opencode)

   Run `opencode` in your terminal to start OpenCode:

   Terminal

   ```
   opencode
   ```
3. ### [Connect to AI Gateway](#connect-to-ai-gateway)

   Run the `/connect` command and search for Vercel AI Gateway:

   Terminal

   ```
   /connect
   ```

   Enter your Vercel AI Gateway API key when prompted.
4. ### [Select a model](#select-a-model)

   Run the `/models` command to select a model:

   Terminal

   ```
   /models
   ```

   Your requests will now be routed through Vercel AI Gateway.
5. ### [(Optional) Configure provider routing](#optional-configure-provider-routing)

   You can customize models through your OpenCode config. Here's an example of specifying provider routing order in `opencode.json`:

   opencode.json

   ```
   {
     "$schema": "https://opencode.ai/config.json",
     "provider": {
       "vercel": {
         "models": {
           "anthropic/claude-sonnet-4.6": {
             "options": {
               "order": ["anthropic", "vertex"]
             }
           }
         }
       }
     }
   }
   ```

   See the [provider options documentation](/docs/ai-gateway/models-and-providers/provider-options) for more details on supported routing options.
6. ### [(Optional) Monitor usage and spend](#optional-monitor-usage-and-spend)

   View your usage, spend, and request activity in the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar. See the [observability documentation](/docs/ai-gateway/capabilities/observability) for more details.

---

Was this helpful?
