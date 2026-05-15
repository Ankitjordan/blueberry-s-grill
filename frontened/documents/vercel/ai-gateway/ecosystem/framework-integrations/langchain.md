Menu

# LangChain

Last updated March 7, 2026

[LangChain](https://js.langchain.com) gives you tools
for every step of the agent development lifecycle.
This guide demonstrates how to integrate [Vercel AI Gateway](/docs/ai-gateway)
with LangChain to access various AI models and providers.

## [Getting started](#getting-started)

1. ### [Create a new project](#create-a-new-project)

   First, create a new directory for your project and initialize it:

   terminal

   ```
   mkdir langchain-ai-gateway
   cd langchain-ai-gateway
   pnpm dlx init -y
   ```
2. ### [Install dependencies](#install-dependencies)

   Install the required LangChain packages along with the `dotenv` and `@types/node` packages:

   Terminal

   ```
   pnpm i langchain @langchain/core @langchain/openai dotenv @types/node
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
4. ### [Create your LangChain application](#create-your-langchain-application)

   Create a new file called `index.ts` with the following code:

   index.ts

   ```
   import 'dotenv/config';
   import { ChatOpenAI } from '@langchain/openai';
   import { HumanMessage } from '@langchain/core/messages';

   async function main() {
     console.log('=== LangChain Chat Completion with AI Gateway ===');

     const apiKey =
       process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

     const chat = new ChatOpenAI({
       apiKey: apiKey,
       modelName: 'openai/gpt-5.5',
       temperature: 0.7,
       configuration: {
         baseURL: 'https://ai-gateway.vercel.sh/v1',
       },
     });

     try {
       const response = await chat.invoke([
         new HumanMessage('Write a one-sentence bedtime story about a unicorn.'),
       ]);

       console.log('Response:', response.content);
     } catch (error) {
       console.error('Error:', error);
     }
   }

   main().catch(console.error);
   ```

   The following code:

   * Initializes a `ChatOpenAI` instance configured to use the AI Gateway
   * Sets the model `temperature` to `0.7`
   * Makes a chat completion request
   * Handles any potential errors
5. ### [Running the application](#running-the-application)

   Run your application using Node.js:

   Terminal

   ```
   pnpm dlx tsx index.ts
   ```

   You should see a response from the AI model in your console.

---

[Previous

Framework Integrations](/docs/ai-gateway/ecosystem/framework-integrations)[Next

LangFuse](/docs/ai-gateway/ecosystem/framework-integrations/langfuse)

Was this helpful?
