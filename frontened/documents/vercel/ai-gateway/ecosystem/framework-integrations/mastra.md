Menu

# Mastra

Last updated February 26, 2026

[Mastra](https://mastra.ai) is a framework for building and deploying AI-powered features
using a modern JavaScript stack powered by the [Vercel AI SDK](/docs/ai-sdk).
Integrating with AI Gateway provides unified model management and routing capabilities.

## [Getting started](#getting-started)

1. ### [Create a new Mastra project](#create-a-new-mastra-project)

   First, create a new Mastra project using the CLI:

   terminal

   ```
   pnpm dlx create-mastra@latest
   ```

   During the setup, the system prompts you to name your project, choose a default provider, and more.
   and more. Feel free to use the default settings.
2. ### [Install dependencies](#install-dependencies)

   To use the AI Gateway provider, install the `@ai-sdk/gateway` package along with Mastra:

   Terminal

   ```
   pnpm i @ai-sdk/gateway mastra @mastra/core @mastra/memory
   ```
3. ### [Configure environment variables](#configure-environment-variables)

   Create or update your `.env` file with
   your [Vercel AI Gateway API key](/docs/ai-gateway#using-the-ai-gateway-with-an-api-key):

   .env

   ```
   AI_GATEWAY_API_KEY=your-api-key-here
   ```
4. ### [Configure your agent to use AI Gateway](#configure-your-agent-to-use-ai-gateway)

   Now, swap out the `@ai-sdk/openai` package (or your existing model provider)
   for the `@ai-sdk/gateway` package.

   Update your agent configuration file, typically `src/mastra/agents/weather-agent.ts` to the following code:

   src/mastra/agents/weather-agent.ts

   ```
   import 'dotenv/config';
   import { gateway } from '@ai-sdk/gateway';
   import { Agent } from '@mastra/core/agent';
   import { Memory } from '@mastra/memory';
   import { LibSQLStore } from '@mastra/libsql';
   import { weatherTool } from '../tools/weather-tool';

   export const weatherAgent = new Agent({
     name: 'Weather Agent',
     instructions: `
         You are a helpful weather assistant that provides accurate weather information and can help planning activities based on the weather.

         Your primary function is to help users get weather details for specific locations. When responding:
         - Always ask for a location if none is provided
         - If the location name isn't in English, please translate it
         - If giving a location with multiple parts (e.g. "New York, NY"), use the most relevant part (e.g. "New York")
         - Include relevant details like humidity, wind conditions, and precipitation
         - Keep responses concise but informative
         - If the user asks for activities and provides the weather forecast, suggest activities based on the weather forecast.
         - If the user asks for activities, respond in the format they request.

         Use the weatherTool to fetch current weather data.
   `,
     model: gateway('google/gemini-3.1-pro-preview'),
     tools: { weatherTool },
     memory: new Memory({
       storage: new LibSQLStore({
         url: 'file:../mastra.db', // path is relative to the .mastra/output directory
       }),
     }),
   });

   (async () => {
     try {
       const response = await weatherAgent.generate(
         "What's the weather in San Francisco today?",
       );
       console.log('Weather Agent Response:', response.text);
     } catch (error) {
       console.error('Error invoking weather agent:', error);
     }
   })();
   ```
5. ### [Running the application](#running-the-application)

   Since your agent is now configured to use AI Gateway,
   run the Mastra development server:

   Terminal

   ```
   pnpm dev
   ```

   Open the [Mastra Playground and Mastra API](https://mastra.ai/en/docs/server-db/local-dev-playground) to test your agents, workflows, and tools.

---

[Previous

LlamaIndex](/docs/ai-gateway/ecosystem/framework-integrations/llamaindex)[Next

Pydantic AI](/docs/ai-gateway/ecosystem/framework-integrations/pydantic-ai)

Was this helpful?
