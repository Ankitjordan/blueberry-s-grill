Menu

# Vercel Groq Integration Native Integration

Last updated February 10, 2026

[Groq](https://groq.com/) is a high-performance AI inference
service with an ultra-fast Language Processing Unit (LPU) architecture. It
enables fast response times for language model inference, making it ideal for
applications requiring low latency.

## [Use cases](#use-cases)

You can use the [Vercel and Groq integration](https://vercel.com/marketplace/groq) to:

* Connect AI models such as Whisper-large-v3 for audio processing and Llama models for text generation to your Vercel projects.
* Deploy and run inference with optimized performance.

### [Available models](#available-models)

Groq provides a diverse range of AI models designed for high-performance tasks.

###

DeepSeek R1 Distill Llama 70B

**Type:** Chat

A generative text model

Distil Whisper Large V3 English

**Type:** Audio

A distilled, or compressed, version of OpenAI's Whisper model, designed to provide faster, lower cost English speech recognition while maintaining comparable accuracy.

Llama 3.1 8B Instant

**Type:** Chat

A fast and efficient language model for text generation.

Mistral Saba 24B

**Type:** Chat

Mistral Saba 24B is a specialized model trained to excel in Arabic, Farsi, Urdu, Hebrew, and Indic languages. Designed for high-performance multilingual capabilities, it delivers exceptional results across a wide range of tasks in these languages while maintaining strong performance in English. With a 32K token context window and tool use capabilities, it's ideal for complex multilingual applications requiring deep language understanding and regional context.

Qwen QWQ 32B

**Type:** Chat

Qwen QWQ 32B is a powerful large language model with strong reasoning capabilities and versatile applications across various tasks.

Whisper Large V3

**Type:** Audio

A state-of-the-art model for automatic speech recognition (ASR) and speech translation, trained on 1M hours of weakly labeled and 4M hours of pseudo-labeled audio. Supports 99 languages with improved accuracy over previous versions.

Whisper Large V3 Turbo

**Type:** Audio

A faster version of Whisper Large V3 with reduced decoding layers (4 instead of 32), providing significantly improved speed with minimal quality degradation. Supports 99 languages for speech recognition and translation.

Llama 3.3 70B Instruct Turbo

**Type:** Chat

Meta's Llama 3.3 is an auto-regressive language model that uses an optimized transformer architecture. Supports 128K context length and multilingual processing.

Llama 4 Scout 17B 16E Instruct

**Type:** Chat

Meta's natively multimodal model with a 17B parameter mixture-of-experts architecture that enables text and image understanding, supporting 12 languages.

## [Getting started](#getting-started)

The Vercel Groq integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select Groq from the list of providers, and press Add
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
   pnpm i @ai-sdk/groq ai
   ```
10. Connect your project using the code below:

    app/api/chat/route.ts

    ```
    import { groq } from '@ai-sdk/groq';import { streamText } from 'ai';
    // Allow streaming responses up to 30 secondsexport const maxDuration = 30;
    export async function POST(req: Request) {  // Extract the `messages` from the body of the request  const { messages } = await req.json();
      // Call the language model  const result = streamText({    model: groq('llama-3.1-8b-instant'),    messages,  });
      // Respond with the stream  return result.toDataStreamResponse();}
    ```

#### [Using the CLI](#using-the-cli)

1. Add the provider to your project using the [Vercel CLI `install`](/docs/cli/install) command

   terminal

   ```
   vercel install groq
   ```

   During this process, you will be asked to open the dashboard to accept the
   marketplace terms if you have not installed this integration before. You can
   also choose which project(s) the provider will have access to.
2. Install the providers package

   Terminal

   ```
   pnpm i @ai-sdk/groq ai
   ```
3. Connect your project using the code below:

   app/api/chat/route.ts

   ```
   import { groq } from '@ai-sdk/groq';import { streamText } from 'ai';
   // Allow streaming responses up to 30 secondsexport const maxDuration = 30;
   export async function POST(req: Request) {  // Extract the `messages` from the body of the request  const { messages } = await req.json();
     // Call the language model  const result = streamText({    model: groq('llama-3.1-8b-instant'),    messages,  });
     // Respond with the stream  return result.toDataStreamResponse();}
   ```

## [More resources](#more-resources)

[### Groq Website

Learn more about Groq by visiting their website.](https://groq.com/)[### Groq Pricing

Learn more about Groq pricing.](https://groq.com/pricing)[### Groq Documentation

Visit the Groq documentation.](https://console.groq.com/docs/overview)[### Groq AI SDK page

Visit the Groq AI SDK reference page.](https://sdk.vercel.ai/providers/ai-sdk-providers/groq)

---

[Previous

xAI](/docs/agent-resources/integrations-for-models/xai)[Next

fal](/docs/agent-resources/integrations-for-models/fal)

Was this helpful?
