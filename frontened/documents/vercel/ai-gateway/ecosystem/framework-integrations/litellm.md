Menu

# LiteLLM

Last updated February 26, 2026

[LiteLLM](https://www.litellm.ai/) is an open-source library that provides a unified interface to call LLMs.
This guide demonstrates how to integrate [Vercel AI Gateway](/docs/ai-gateway)
with LiteLLM to access various AI models and providers.

## [Getting started](#getting-started)

1. ### [Create a new project](#create-a-new-project)

   First, create a new directory for your project:

   terminal

   ```
   mkdir litellm-ai-gateway
   cd litellm-ai-gateway
   ```
2. ### [Install dependencies](#install-dependencies)

   Install the required LiteLLM Python package:

   terminal

   ```
   pip install litellm python-dotenv
   ```
3. ### [Configure environment variables](#configure-environment-variables)

   Create a `.env` file with your [Vercel AI Gateway API key](/docs/ai-gateway#using-the-ai-gateway-with-an-api-key):

   .env

   ```
   VERCEL_AI_GATEWAY_API_KEY=your-api-key-here
   ```

   If you're using the [AI Gateway from within a Vercel
   deployment](/docs/ai-gateway#using-the-ai-gateway-with-a-vercel-oidc-token),
   you can also use the `VERCEL_OIDC_TOKEN` environment variable which will be
   automatically provided.
4. ### [Create your LiteLLM application](#create-your-litellm-application)

   Create a new file called `main.py` with the following code:

   main.py

   ```
   import os
   import litellm
   from dotenv import load_dotenv

   load_dotenv()

   os.environ["VERCEL_AI_GATEWAY_API_KEY"] = os.getenv("VERCEL_AI_GATEWAY_API_KEY")

   # Define messages
   messages = [
       {"role": "system", "content": "You are a helpful assistant."},
       {"role": "user", "content": "Tell me about the food scene in San Francisco."}
   ]

   response = litellm.completion(
       model="vercel_ai_gateway/openai/gpt-5.5",
       messages=messages
   )

   print(response.choices[0].message.content)
   ```

   The following code:

   * Uses LiteLLM's `completion` function to make requests through Vercel AI Gateway
   * Specifies the model using the `vercel_ai_gateway/` prefix
   * Makes a chat completion request and prints the response
5. ### [Running the application](#running-the-application)

   Run your Python application:

   terminal

   ```
   python main.py
   ```

   You should see a response from the AI model in your console.

---

[Previous

LangFuse](/docs/ai-gateway/ecosystem/framework-integrations/langfuse)[Next

LlamaIndex](/docs/ai-gateway/ecosystem/framework-integrations/llamaindex)

Was this helpful?
