Menu

# Vercel Replicate Integration Connectable Account

Last updated February 10, 2026

[Replicate](https://replicate.com) provides a platform for
accessing and deploying a wide range of open-source artificial intelligence
models. These models span various AI applications such as image and video
processing, natural language processing, and audio synthesis. With the Vercel
Replicate integration, you can incorporate these AI capabilities into your
applications, enabling advanced functionalities and enhancing user experiences.

## [Use cases](#use-cases)

You can use the Vercel and Replicate integration to power a variety of AI applications, including:

* Content generation: Use Replicate for generating text, images, and audio content in creative and marketing applications
* Image and video processing: Use Replicate in applications for image enhancement, style transfer, or object detection
* NLP and chat-bots: Use Replicate's language processing models in chat-bots and natural language interfaces

### [Available models](#available-models)

Replicate models cover a broad spectrum of AI applications ranging from image and video processing to natural language processing and audio synthesis.

###

Blip

**Type:** Image

Generate image captions

Flux 1.1 Pro

**Type:** Image

Faster, better FLUX Pro. Text-to-image model with excellent image quality, prompt adherence, and output diversity.

Flux.1 Dev

**Type:** Image

A 12 billion parameter rectified flow transformer capable of generating images from text descriptions

Flux.1 Pro

**Type:** Image

State-of-the-art image generation with top of the line prompt following, visual quality, image detail and output diversity.

Flux.1 Schnell

**Type:** Image

The fastest image generation model tailored for local development and personal use

Ideogram v2

**Type:** Image

An excellent image model with state of the art inpainting, prompt comprehension and text rendering

Ideogram v2 Turbo

**Type:** Image

A fast image model with state of the art inpainting, prompt comprehension and text rendering.

Incredibly Fast Whisper

**Type:** Audio

whisper-large-v3, incredibly fast, powered by Hugging Face Transformers.

Llama 3 70B Instruct

**Type:** Chat

A 70 billion parameter language model from Meta, fine tuned for chat completions

Llama 3 8B Instruct

**Type:** Image

An 8 billion parameter language model from Meta, fine tuned for chat completions

Llama 3.1 405B Instruct

**Type:** Chat

Meta's flagship 405 billion parameter language model, fine-tuned for chat completions

LLaVA 13B

**Type:** Image

Visual instruction tuning towards large language and vision models with GPT-4 level capabilities

Moondream2

**Type:** Image

Moondream2 is a small vision language model designed to run efficiently on edge devices

Recraft V3

**Type:** Image

Recraft V3 (code-named red\_panda) is a text-to-image model with the ability to generate long texts, and images in a wide list of styles. As of today, it is SOTA in image generation, proven by the Text-to-Image Benchmark by Artificial Analysis

Recraft V3 SVG

**Type:** Image

Recraft V3 SVG (code-named red\_panda) is a text-to-image model with the ability to generate high quality SVG images including logotypes, and icons. The model supports a wide list of styles.

Sana

**Type:** Image

A fast image model with wide artistic range and resolutions up to 4096x4096

Stable Diffusion 3.5 Large

**Type:** Image

A text-to-image model that generates high-resolution images with fine details. It supports various artistic styles and produces diverse outputs from the same prompt, thanks to Query-Key Normalization.

Stable Diffusion 3.5 Large Turbo

**Type:** Image

A text-to-image model that generates high-resolution images with fine details. It supports various artistic styles and produces diverse outputs from the same prompt, with a focus on fewer inference steps

Stable Diffusion 3.5 Medium

**Type:** Image

2.5 billion parameter image model with improved MMDiT-X architecture

## [Getting started](#getting-started)

The Vercel Replicate integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select Replicate from the list of providers, and press Add
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
   pnpm i replicate
   ```
10. Connect your project using the code below:

    app/api/predictions/route.ts

    ```
    import { NextResponse } from 'next/server';import Replicate from 'replicate';
    const replicate = new Replicate({  auth: process.env.REPLICATE_API_TOKEN,});
    // In production and preview deployments (on Vercel), the VERCEL_URL environment variable is set.// In development (on your local machine), the NGROK_HOST environment variable is set.const WEBHOOK_HOST = process.env.VERCEL_URL  ? `https://${process.env.VERCEL_URL}`  : process.env.NGROK_HOST;
    export async function POST(request) {  if (!process.env.REPLICATE_API_TOKEN) {    throw new Error(      'The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.',    );  }
      const { prompt } = await request.json();
      const options = {    version: '8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f',    input: { prompt },  };
      if (WEBHOOK_HOST) {    options.webhook = `${WEBHOOK_HOST}/api/webhooks`;    options.webhook_events_filter = ['start', 'completed'];  }
      // A prediction is the result you get when you run a model, including the input, output, and other details  const prediction = await replicate.predictions.create(options);
      if (prediction?.error) {    return NextResponse.json({ detail: prediction.error }, { status: 500 });  }
      return NextResponse.json(prediction, { status: 201 });}
    // app/api/predictions/[id]/route.ts
    import { NextResponse } from 'next/server';import Replicate from 'replicate';
    const replicate = new Replicate({  auth: process.env.REPLICATE_API_TOKEN,});
    // Poll for the prediction's statusexport async function GET(request, { params }) {  const { id } = params;  const prediction = await replicate.predictions.get(id);
      if (prediction?.error) {    return NextResponse.json({ detail: prediction.error }, { status: 500 });  }
      return NextResponse.json(prediction);}
    ```

## [Deploy a template](#deploy-a-template)

You can deploy a template to Vercel that uses a pre-trained model from Replicate:

[![Paint by Text](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4MJWAAgQaFRRb0vVgTg4XL%2F4ef163972253a781ebf9596e60837885%2Fpaintbytext.png&w=3840&q=75)

Paint by Text

Edit your photos by chatting with a generative AI model (InstructPix2Pix), powered by Replicate.](https://vercel.com/templates/next.js/paint-by-text)

## [More resources](#more-resources)

[### Replicate Website

Learn more about Replicate by visiting their website.](https://replicate.com)[### Replicate Pricing

Learn more about Replicate pricing.](https://replicate.com/pricing)[### Replicate Documentation

Visit the Replicate documentation.](https://replicate.com/docs)

---

[Previous

Pinecone](/docs/agent-resources/integrations-for-models/pinecone)[Next

Together AI](/docs/agent-resources/integrations-for-models/togetherai)

Was this helpful?
