Menu

# Chatbox

Last updated February 26, 2026

[Chatbox](https://chatboxai.app) is a cross-platform desktop AI assistant. You can configure it to use AI Gateway for unified model access and spend monitoring.

## [Configuring Chatbox](#configuring-chatbox)

1. ### [Create an API key](#create-an-api-key)

   Go to the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar and click API keys to create a new API key.
2. ### [Install Chatbox](#install-chatbox)

   Download and install [Chatbox](https://chatboxai.app) for your platform (macOS, Windows, or Linux).
3. ### [Configure AI Gateway](#configure-ai-gateway)

   1. Go to Settings, then Model Provider
   2. Click Add and add AI Gateway with the OpenAI API Compatible option
   3. Set the API Host to `https://ai-gateway.vercel.sh/v1`, and leave the API Path field empty
   4. Add your AI Gateway API Key in the API Key field
   5. (Optional) Click Check next to the API Key field to validate your connection
   6. Click Fetch to retrieve all available models from AI Gateway
   7. Select models from the populated list
4. ### [Start using models](#start-using-models)

   Your requests will now be routed through AI Gateway. You can verify this by checking your [AI Gateway Overview](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) in the Vercel dashboard.
5. ### [(Optional) Monitor usage and spend](#optional-monitor-usage-and-spend)

   View your usage, spend, and request activity in the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar. See the [observability documentation](/docs/ai-gateway/capabilities/observability) for more details.

---

[Previous

OpenClaw (Clawdbot)](/docs/ai-gateway/chat-platforms/openclaw)[Next

Open WebUI](/docs/ai-gateway/chat-platforms/open-webui)

Was this helpful?
