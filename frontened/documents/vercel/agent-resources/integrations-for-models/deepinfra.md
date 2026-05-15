Menu

# Vercel Deep Infra Integration Native Integration

Last updated February 10, 2026

[Deep Infra](https://deepinfra.com/) provides scalable and
cost-effective infrastructure for deploying and managing machine learning
models. It's optimized for reduced latency and low costs compared to traditional
cloud providers.

This integration gives you access to the large selection of available AI models and allows you to manage your tokens, billing and usage directly from Vercel.

## [Use cases](#use-cases)

You can use the [Vercel and Deep Infra integration](https://vercel.com/marketplace/deepinfra) to:

* Seamlessly connect AI models such as DeepSeek and Llama with your Vercel projects.
* Deploy and run inference with high-performance AI models optimized for speed and efficiency.

### [Available models](#available-models)

Deep Infra provides a diverse range of AI models designed for high-performance tasks for a variety of applications.

###

DeepSeek R1 Turbo

**Type:** Chat

A generative text model

DeepSeek R1

**Type:** Chat

A generative text model

DeepSeek V3

**Type:** Chat

A generative text model

Llama 3.1 8B Instruct Turbo

**Type:** Chat

Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture.

Llama 3.3 70B Instruct Turbo

**Type:** Chat

Llama 3.3 is an auto-regressive language model that uses an optimized transformer architecture.

DeepSeek R1 Distill Llama 70B

**Type:** Chat

A generative text model

Llama 4 Maverick 17B 128E Instruct

**Type:** Chat

Meta's advanced natively multimodal model with a 17B parameter mixture-of-experts architecture (128 experts) that enables sophisticated text and image understanding, supporting 12 languages.

Llama 4 Scout 17B 16E Instruct

**Type:** Chat

Meta's natively multimodal model with a 17B parameter mixture-of-experts architecture that enables text and image understanding, supporting 12 languages.

## [Getting started](#getting-started)

The Vercel Deep Infra integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select Deep Infra from the list of providers, and press Add
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
   pnpm i @ai-sdk/deepinfra ai
   ```
10. Connect your project using the code below:

    app/api/chat/route.ts

    ```
    import { deepinfra } from '@ai-sdk/deepinfra';import { streamText } from 'ai';
    // Allow streaming responses up to 30 secondsexport const maxDuration = 30;
    export async function POST(req: Request) {  // Extract the `messages` from the body of the request  const { messages } = await req.json();
      // Call the language model  const result = streamText({    model: deepinfra('deepseek-ai/DeepSeek-R1-Distill-Llama-70B'),    messages,  });
      // Respond with the stream  return result.toDataStreamResponse();}
    ```

#### [Using the CLI](#using-the-cli)

1. Add the provider to your project using the [Vercel CLI `install`](/docs/cli/install) command

   terminal

   ```
   vercel install deepinfra
   ```

   During this process, you will be asked to open the dashboard to accept the
   marketplace terms if you have not installed this integration before. You can
   also choose which project(s) the provider will have access to.
2. Install the providers package

   Terminal

   ```
   pnpm i @ai-sdk/deepinfra ai
   ```
3. Connect your project using the code below:

   app/api/chat/route.ts

   ```
   import { deepinfra } from '@ai-sdk/deepinfra';import { streamText } from 'ai';
   // Allow streaming responses up to 30 secondsexport const maxDuration = 30;
   export async function POST(req: Request) {  // Extract the `messages` from the body of the request  const { messages } = await req.json();
     // Call the language model  const result = streamText({    model: deepinfra('deepseek-ai/DeepSeek-R1-Distill-Llama-70B'),    messages,  });
     // Respond with the stream  return result.toDataStreamResponse();}
   ```

## [More resources](#more-resources)

[### Deep Infra Website

Learn more about Deep Infra by visiting their website.](https://deepinfra.com/)[### Deep Infra Pricing

Learn more about Deep Infra pricing.](https://deepinfra.com/pricing)[### Deep Infra Documentation

Visit the Deep Infra documentation.](https://deepinfra.com/docs)[### Deep Infra AI SDK page

Visit the Deep Infra AI SDK reference page.](https://sdk.vercel.ai/providers/ai-sdk-providers/deepinfra)

---

[Previous

fal](/docs/agent-resources/integrations-for-models/fal)[Next

ElevenLabs](/docs/agent-resources/integrations-for-models/elevenlabs)

Was this helpful?
