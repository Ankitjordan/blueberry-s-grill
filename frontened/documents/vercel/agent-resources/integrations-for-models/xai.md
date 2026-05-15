Menu

# Vercel xAI Integration Native Integration

Last updated February 10, 2026

[xAI](https://x.ai/) provides language,
chat and vision AI capabilities with integrated billing through Vercel.

## [Use cases](#use-cases)

You can use the [Vercel and xAI integration](https://vercel.com/marketplace/xai) to:

* Perform text generation, translation and question answering in your Vercel projects.
* Use the language with vision model for advanced language understanding and visual processing.

### [Available models](#available-models)

xAI provides language and language with vision AI models.

###

Grok-2

**Type:** Chat

Grok-2 is a large language model that can be used for a variety of tasks, including text generation, translation, and question answering.

Grok-2 Vision

**Type:** Image

Grok-2 Vision is a multimodal AI model that combines advanced language understanding with powerful visual processing capabilities.

Grok 2 Image

**Type:** Image

A text-to-image model that can generate high-quality images across several domains where other image generation models often struggle. It can render precise visual details of real-world entities, text, logos, and can create realistic portraits of humans.

Grok-3 Beta

**Type:** Chat

xAI's flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.

Grok-3 Fast Beta

**Type:** Chat

xAI's flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science. Fast mode delivers reduced latency and a quicker time-to-first-token.

Grok-3 Mini Beta

**Type:** Chat

xAI's flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science. Fast mode delivers reduced latency and a quicker time-to-first-token. Mini is a lightweight model that thinks before responding. Great for simple or logic-based tasks that do not require deep domain knowledge. The raw thinking traces are accessible.

Grok-3 Mini Fast Beta

**Type:** Chat

xAI's flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science. Fast mode delivers reduced latency and a quicker time-to-first-token. Mini is a lightweight model that thinks before responding. Fast mode delivers reduced latency and a quicker time-to-first-token.

## [Getting started](#getting-started)

The Vercel xAI integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

### [Prerequisites](#prerequisites)

To follow this guide, you'll need the following:

* An existing [Vercel project](/docs/projects/overview#creating-a-project)
* The latest version of [Vercel CLI](/docs/cli#installing-vercel-cli)

  Terminal

  ```
  pnpm i -g vercel@latest
  ```

### [Add the provider to your project](#add-the-provider-to-your-project)

#### [Using the dashboard](#using-the-dashboard)

1. Navigate to the AI tab in your [Vercel dashboard](/dashboard)
2. Select xAI from the list of providers, and press Add
3. Review the provider information, and press Add Provider
4. You can now select which projects the provider will have access to. You can choose from All Projects or Specific Projects
   * If you select Specific Projects, you'll be prompted to select the projects you want to connect to the provider. The list will display projects associated with your scoped team
   * Multiple projects can be selected during this step
5. Select the Connect to Project button
6. You'll be redirected to the provider's website to complete the connection process
7. Once the connection is complete, you'll be redirected back to the Vercel dashboard, and the provider integration dashboard page. From here you can manage your provider settings, view usage, and more
8. Pull the environment variables into your project using [Vercel CLI](/docs/cli/env)

   terminal

   ```
   vercel env pull
   ```
9. Install the providers package

   Terminal

   ```
   pnpm i @ai-sdk/xai ai
   ```
10. Connect your project using the code below:

    app/api/chat/route.ts

    ```
    import { xai } from '@ai-sdk/xai';import { streamText } from 'ai';
    // Allow streaming responses up to 30 secondsexport const maxDuration = 30;
    export async function POST(req: Request) {  // Extract the `messages` from the body of the request  const { messages } = await req.json();
      // Call the language model  const result = streamText({    model: xai('grok-2-1212'),    messages,  });
      // Respond with the stream  return result.toDataStreamResponse();}
    ```

#### [Using the CLI](#using-the-cli)

1. Add the provider to your project using the [Vercel CLI `install`](/docs/cli/install) command

   terminal

   ```
   vercel install xai
   ```

   During this process, you will be asked to open the dashboard to accept the
   marketplace terms if you have not installed this integration before. You can
   also choose which project(s) the provider will have access to.
2. Install the providers package

   Terminal

   ```
   pnpm i @ai-sdk/xai ai
   ```
3. Connect your project using the code below:

   app/api/chat/route.ts

   ```
   import { xai } from '@ai-sdk/xai';import { streamText } from 'ai';
   // Allow streaming responses up to 30 secondsexport const maxDuration = 30;
   export async function POST(req: Request) {  // Extract the `messages` from the body of the request  const { messages } = await req.json();
     // Call the language model  const result = streamText({    model: xai('grok-2-1212'),    messages,  });
     // Respond with the stream  return result.toDataStreamResponse();}
   ```

## [More resources](#more-resources)

[### xAI Website

Learn more about xAI by visiting their website.](https://x.ai/)[### xAI Pricing

Learn more about xAI pricing.](https://docs.x.ai/docs/models)[### xAI Documentation

Visit the xAI documentation.](https://docs.x.ai/docs/overview)[### xAI AI SDK page

Visit the xAI AI SDK reference page.](https://sdk.vercel.ai/providers/ai-sdk-providers/xai)

---

[Previous

Adding a Model](/docs/agent-resources/integrations-for-models/adding-a-model)[Next

Groq](/docs/agent-resources/integrations-for-models/groq)

Was this helpful?
