Menu

# LlamaIndex

Last updated February 26, 2026

[LlamaIndex](https://www.llamaindex.ai/) makes it simple to
build knowledge assistants using LLMs connected to your enterprise data.
This guide demonstrates how to integrate [Vercel AI Gateway](/docs/ai-gateway)
with LlamaIndex to access various AI models and providers.

## [Getting started](#getting-started)

1. ### [Create a new project](#create-a-new-project)

   First, create a new directory for your project and initialize it:

   terminal

   ```
   mkdir llamaindex-ai-gateway
   cd llamaindex-ai-gateway
   ```
2. ### [Install dependencies](#install-dependencies)

   Install the required LlamaIndex packages along with the `python-dotenv` package:

   terminal

   ```
   pip install llama-index-llms-vercel-ai-gateway llama-index python-dotenv
   ```
3. ### [Configure environment variables](#configure-environment-variables)

   Create a `.env` file with your [Vercel AI Gateway API key](/docs/ai-gateway#using-the-ai-gateway-with-an-api-key):

   .env

   ```
   AI_GATEWAY_API_KEY=your-api-key-here
   ```

   If you're using the [AI Gateway from within a Vercel
   deployment](/docs/ai-gateway#using-the-ai-gateway-with-a-vercel-oidc-token),
   you can also use the `VERCEL_OIDC_TOKEN` environment variable which will be
   automatically provided.
4. ### [Create your LlamaIndex application](#create-your-llamaindex-application)

   Create a new file called `main.py` with the following code:

   main.py

   ```
   from dotenv import load_dotenv
   from llama_index.llms.vercel_ai_gateway import VercelAIGateway
   from llama_index.core.llms import ChatMessage
   import os

   load_dotenv()

   llm = VercelAIGateway(
       api_key=os.getenv("AI_GATEWAY_API_KEY"),
       max_tokens=200000,
       context_window=64000,
       model="anthropic/claude-opus-4.7",
   )

   message = ChatMessage(role="user", content="Tell me a story in 250 words")
   resp = llm.stream_chat([message])
   for r in resp:
       print(r.delta, end="")
   ```

   The following code:

   * Initializes a `VercelAIGateway` LLM instance with your API key
   * Configures the model to use Anthropic's Claude 4 Sonnet via the AI Gateway
   * Creates a chat message and streams the response
5. ### [Running the application](#running-the-application)

   Run your application using Python:

   terminal

   ```
   python main.py
   ```

   You should see a streaming response from the AI model.

---

[Previous

LiteLLM](/docs/ai-gateway/ecosystem/framework-integrations/litellm)[Next

Mastra](/docs/ai-gateway/ecosystem/framework-integrations/mastra)

Was this helpful?
