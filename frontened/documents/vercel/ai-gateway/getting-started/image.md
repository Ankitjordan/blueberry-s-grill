Menu

# Image Generation Quickstart

Last updated February 26, 2026

This quickstart walks you through generating your first image with AI Gateway.

AI Assistance

Set up AI Gateway for image generation. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Initialize a Node.js project and install the `ai` package, dotenv, @types/node, tsx, and typescript. 2. Save my AI\_GATEWAY\_API\_KEY in .env.local. 3. Create an index.ts that uses the AI SDK with the model 'google/gemini-3.1-flash-image-preview' to generate an image from a text prompt. 4. Save the generated image to a file and run it with tsx.

1. ### [Set up your project](#set-up-your-project)

   Create a new directory and initialize a Node.js project:

   Terminal

   ```
   mkdir ai-image-demo
   cd ai-image-demo
   pnpm init
   ```
2. ### [Install dependencies](#install-dependencies)

   Install the AI SDK and development dependencies:

   Terminal

   ```
   npm install ai dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   yarn add ai dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   pnpm add ai dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   bun add ai dotenv @types/node tsx typescript
   ```
3. ### [Set up your API key](#set-up-your-api-key)

   Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys) in your Vercel dashboard and click Create key to generate a new API key.

   Create a `.env.local` file and save your API key:

   .env.local

   ```
   AI_GATEWAY_API_KEY=your_ai_gateway_api_key
   ```
4. ### [Generate an image](#generate-an-image)

   Create an `index.ts` file. This example uses Nano Banana Pro (`google/gemini-3-pro-image`), a multimodal model that generates high-quality images:

   index.ts

   ```
   import { generateText } from 'ai';
   import fs from 'node:fs';
   import 'dotenv/config';

   async function main() {
     const result = await generateText({
       model: 'google/gemini-3-pro-image',
       prompt: 'A serene mountain landscape at sunset with a calm lake reflection',
     });

     // Nano Banana models return images in result.files with uint8Array
     const imageFiles = result.files.filter((f) =>
       f.mediaType?.startsWith('image/'),
     );

     if (imageFiles.length > 0) {
       const extension = imageFiles[0].mediaType?.split('/')[1] || 'png';
       fs.writeFileSync(`output.${extension}`, imageFiles[0].uint8Array);
       console.log(`Image saved to output.${extension}`);
     }
   }

   main().catch(console.error);
   ```

   Run your script:

   Terminal

   ```
   pnpm tsx index.ts
   ```

   The generated image will be saved in your project directory.
5. ### [Next steps](#next-steps)

   * See [supported image generation models](https://vercel.com/ai-gateway/models?type=image)
   * Learn about [multimodal LLMs](/docs/ai-gateway/capabilities/image-generation/ai-sdk#multimodal-llms) that can generate images alongside text
   * Explore [image editing capabilities](/docs/ai-gateway/capabilities/image-generation/openai#editing-images) with OpenAI models

## [Alternative models](#alternative-models)

### [Nano Banana 2 (`google/gemini-3.1-flash-image-preview`)](#nano-banana-2-google/gemini-3.1-flash-image-preview)

The second-generation Gemini 3.1 Flash image variant. Uses the same `generateText` function and saves images the same way as Nano Banana Pro:

nano-banana-2.ts

```
import { generateText } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateText({
  model: 'google/gemini-3.1-flash-image-preview',
  prompt: 'Create an illustration of a hummingbird at sunrise',
});

// Nano Banana models return images in result.files with uint8Array
const imageFiles = result.files.filter((f) =>
  f.mediaType?.startsWith('image/'),
);

if (imageFiles.length > 0) {
  fs.writeFileSync('output.png', imageFiles[0].uint8Array);
}
```

### [Nano Banana (`google/gemini-2.5-flash-image`)](#nano-banana-google/gemini-2.5-flash-image)

The original Nano Banana model — Gemini 2.5's flash image variant. Still available for workloads on the older generation:

nano-banana.ts

```
import { generateText } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateText({
  model: 'google/gemini-2.5-flash-image',
  prompt: 'Create an illustration of a hummingbird at sunrise',
});

const imageFiles = result.files.filter((f) =>
  f.mediaType?.startsWith('image/'),
);

if (imageFiles.length > 0) {
  fs.writeFileSync('output.png', imageFiles[0].uint8Array);
}
```

### [Flux 2 Flex (`bfl/flux-2-flex`)](#flux-2-flex-bfl/flux-2-flex)

Fast, high-quality image generation from Black Forest Labs. Image-only models use `experimental_generateImage` and return images in `result.images` with base64 encoding:

flux-example.ts

```
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateImage({
  model: 'bfl/flux-2-flex',
  prompt: 'A vibrant coral reef with tropical fish',
  aspectRatio: '4:3',
});

// Image-only models return images in result.images with base64
const image = result.images[0];
const buffer = Buffer.from(image.base64, 'base64');
fs.writeFileSync('output.png', buffer);
```

### [Recraft V3 (`recraft/recraft-v3`)](#recraft-v3-recraft/recraft-v3)

Professional-grade image generation. Same pattern as Flux:

recraft-example.ts

```
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateImage({
  model: 'recraft/recraft-v3',
  prompt: 'A minimalist logo design for a tech startup',
});

const buffer = Buffer.from(result.images[0].base64, 'base64');
fs.writeFileSync('output.png', buffer);
```

### [Imagen (`google/imagen-4.0-generate-001`)](#imagen-google/imagen-4.0-generate-001)

Google's Imagen model for high-fidelity image generation:

imagen-example.ts

```
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateImage({
  model: 'google/imagen-4.0-generate-001',
  prompt: 'A photorealistic image of a mountain landscape at golden hour',
  aspectRatio: '16:9',
});

const buffer = Buffer.from(result.images[0].base64, 'base64');
fs.writeFileSync('output.png', buffer);
```

## [Saving images](#saving-images)

How you save images depends on the model type:

| Model type | Function | Image location | Format |
| --- | --- | --- | --- |
| Nano Banana models | `generateText` | `result.files` | `uint8Array` |
| Image-only models (Flux, Recraft, Imagen) | `experimental_generateImage` | `result.images` | `base64` string |

For more details, see the [Image Generation Capabilities docs](/docs/ai-gateway/capabilities/image-generation).

---

[Previous

Text](/docs/ai-gateway/getting-started/text)[Next

Video](/docs/ai-gateway/getting-started/video)

Was this helpful?
