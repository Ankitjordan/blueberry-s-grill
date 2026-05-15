Menu

# Image Generation with AI SDK

Last updated February 26, 2026

AI Gateway supports image generation using the [AI SDK](https://ai-sdk.dev/docs/ai-sdk-core/image-generation) for the models listed under the Image Gen filter at the [AI Gateway Models
page](https://vercel.com/ai-gateway/models?type=image), including multimodal LLMs and image-only models.

## [Multimodal LLMs](#multimodal-llms)

These models can generate both text and images in their responses. They use `generateText` or `streamText` functions with special configuration to enable image outputs.

### [Nano Banana Pro (`google/gemini-3-pro-image`)](#nano-banana-pro-google/gemini-3-pro-image)

Google's Nano Banana Pro model offers state-of-the-art image generation and editing capabilities with higher quality outputs. Images are returned as content parts in `result.files`.

generate-nanobanana-pro.ts

```
import { generateText } from 'ai';
import 'dotenv/config';

async function main() {
  const result = await generateText({
    model: 'google/gemini-3-pro-image',
    prompt: `Create a detailed illustration of a turquoise-throated puffleg hummingbird resting on a branch covered with dew at sunrise`,
  });

  // Print any text response from the model
  if (result.text) {
    console.log(result.text);
  }

  // Images are available in result.files
  console.log(`Generated ${result.files.length} image(s)`);
  console.log('Usage:', JSON.stringify(result.usage, null, 2));
}

main().catch(console.error);
```

stream-nanobanana-pro.ts

```
import { streamText } from 'ai';
import 'dotenv/config';

async function main() {
  const result = streamText({
    model: 'google/gemini-3-pro-image',
    prompt: `Generate an artistic rendering of a pond tortoise sleeping on a log in a misty lake at sunset`,
  });

  // Stream text output as it arrives
  for await (const delta of result.fullStream) {
    if (delta.type === 'text-delta') {
      process.stdout.write(delta.text);
    }
  }

  // Access generated images after streaming completes
  const finalResult = await result;
  console.log(`\nGenerated ${finalResult.files.length} image(s)`);
  console.log('Usage:', JSON.stringify(finalResult.usage, null, 2));
}

main().catch(console.error);
```

### [Nano Banana 2 (`google/gemini-3.1-flash-image-preview`)](#nano-banana-2-google/gemini-3.1-flash-image-preview)

Google's Nano Banana 2 model is the second-generation fast image variant. It offers efficient image generation alongside text responses with improved quality over the original Nano Banana. Images are returned as content parts in `result.files`.

generate-nanobanana-2.ts

```
import { generateText } from 'ai';
import 'dotenv/config';

async function main() {
  const result = await generateText({
    model: 'google/gemini-3.1-flash-image-preview',
    prompt: `Render two different images of a snowy plover at dusk looking out at San Francisco Bay`,
  });

  // Print any text response from the model
  if (result.text) {
    console.log(result.text);
  }

  // Images are available in result.files
  console.log(`Generated ${result.files.length} image(s)`);
  console.log('Usage:', JSON.stringify(result.usage, null, 2));
}

main().catch(console.error);
```

stream-nanobanana-2.ts

```
import { streamText } from 'ai';
import 'dotenv/config';

async function main() {
  const result = streamText({
    model: 'google/gemini-3.1-flash-image-preview',
    prompt: `Render two images of a golden-crowned kinglet perched on a frost-covered pine branch`,
  });

  // Stream text output as it arrives
  for await (const delta of result.fullStream) {
    if (delta.type === 'text-delta') {
      process.stdout.write(delta.text);
    }
  }

  // Access generated images after streaming completes
  const finalResult = await result;
  console.log(`\nGenerated ${finalResult.files.length} image(s)`);
  console.log('Usage:', JSON.stringify(finalResult.usage, null, 2));
}

main().catch(console.error);
```

### [Nano Banana (`google/gemini-2.5-flash-image`)](#nano-banana-google/gemini-2.5-flash-image)

The original Nano Banana model — Gemini 2.5's flash image variant. Still available for workloads on the older generation. Images are returned as content parts in `result.files`.

generate-nanobanana.ts

```
import { generateText } from 'ai';
import 'dotenv/config';

const result = await generateText({
  model: 'google/gemini-2.5-flash-image',
  prompt: `Render two different images of a snowy plover at dusk looking out at San Francisco Bay`,
});

console.log(`Generated ${result.files.length} image(s)`);
```

#### [Save images from Nano Banana models](#save-images-from-nano-banana-models)

Nano Banana models (`google/gemini-2.5-flash-image`, `google/gemini-3.1-flash-image-preview`, and `google/gemini-3-pro-image`) return images as content parts in `result.files`. These include a `uint8Array` property that you can write directly to disk:

save-nanobanana-images.ts

```
import fs from 'node:fs';
import path from 'node:path';

// Filter for image files from result.files
const imageFiles = result.files.filter((f) =>
  f.mediaType?.startsWith('image/'),
);

if (imageFiles.length > 0) {
  const outputDir = 'output';
  fs.mkdirSync(outputDir, { recursive: true });

  const timestamp = Date.now();

  for (const [index, file] of imageFiles.entries()) {
    const extension = file.mediaType?.split('/')[1] || 'png';
    const filename = `image-${timestamp}-${index}.${extension}`;
    const filepath = path.join(outputDir, filename);

    // Save to file (uint8Array can be written directly)
    await fs.promises.writeFile(filepath, file.uint8Array);
    console.log(`Saved image to ${filepath}`);
  }
}
```

### [OpenAI models with image generation tool](#openai-models-with-image-generation-tool)

You can generate images through OpenAI in two ways:

* Through a multimodal LLM: [GPT-5 variants](https://vercel.com/ai-gateway/models/gpt-5.5) and a few other OpenAI models accept a provider-defined `image_generation` tool alongside regular text prompts. The tool uses an OpenAI image model (for example, `openai/gpt-image-1` or `openai/gpt-image-2`) behind the scenes, and images are returned as tool results in `result.staticToolResults` (for `generateText`) or as `tool-result` events (for `streamText`).
* Through the image-only model: Call `openai/gpt-image-2` directly with `experimental_generateImage`. See [OpenAI GPT Image 2](#openai-gpt-image-2) under image-only models.

Learn more about the [OpenAI Image Generation Tool](https://ai-sdk.dev/providers/ai-sdk-providers/openai#image-generation-tool) in the AI SDK documentation.

generate-openai-image.ts

```
import { generateText } from 'ai';
import 'dotenv/config';
import { openai } from '@ai-sdk/openai';

async function main() {
  const result = await generateText({
    model: 'openai/gpt-5.1-instant',
    prompt: `Generate an image of a black shiba inu dog eating a cake in a green grass field`,
    tools: {
      image_generation: openai.tools.imageGeneration({
        outputFormat: 'webp',
        quality: 'high',
      }),
    },
  });

  // Extract generated images from tool results
  for (const toolResult of result.staticToolResults) {
    if (toolResult.toolName === 'image_generation') {
      const base64Image = toolResult.output.result;
      console.log(
        'Generated image (base64):',
        base64Image.substring(0, 50) + '...',
      );
    }
  }

  console.log('Usage:', JSON.stringify(result.usage, null, 2));
}

main().catch(console.error);
```

stream-openai-image.ts

```
import { streamText } from 'ai';
import 'dotenv/config';
import { openai } from '@ai-sdk/openai';

async function main() {
  const result = streamText({
    model: 'openai/gpt-5.1-instant',
    prompt: `Generate an image of a corgi puppy playing with colorful balloons in a sunny garden`,
    tools: {
      image_generation: openai.tools.imageGeneration({
        outputFormat: 'webp',
        quality: 'high',
      }),
    },
  });

  for await (const part of result.fullStream) {
    if (part.type === 'tool-result' && !part.dynamic) {
      if (part.toolName === 'image_generation') {
        const base64Image = part.output.result;
        console.log(
          'Generated image (base64):',
          base64Image.substring(0, 50) + '...',
        );
      }
    }
  }

  console.log('Usage:', JSON.stringify(await result.usage, null, 2));
}

main().catch(console.error);
```

#### [Save images from OpenAI tool results](#save-images-from-openai-tool-results)

OpenAI models return images as base64-encoded strings in tool results. The approach differs depending on whether you use `generateText` or `streamText`.

With `generateText`, images are available in `result.staticToolResults` after the call completes:

save-openai-images.ts

```
import fs from 'node:fs';
import path from 'node:path';

const outputDir = 'output';
fs.mkdirSync(outputDir, { recursive: true });

const timestamp = Date.now();

// Extract images from staticToolResults and save to file
for (const [index, toolResult] of result.staticToolResults.entries()) {
  if (toolResult.toolName === 'image_generation') {
    // Decode base64 image from tool result
    const base64Image = toolResult.output.result;
    const buffer = Buffer.from(base64Image, 'base64');

    const filename = `image-${timestamp}-${index}.webp`;
    const filepath = path.join(outputDir, filename);

    // Save to file
    await fs.promises.writeFile(filepath, buffer);
    console.log(`Saved image to ${filepath}`);
  }
}
```

With `streamText`, images arrive as `tool-result` events in the stream. Save them as they come in:

save-openai-images-stream.ts

```
import fs from 'node:fs';
import path from 'node:path';

const outputDir = 'output';
fs.mkdirSync(outputDir, { recursive: true });

const timestamp = Date.now();
let imageIndex = 0;

// Extract images from tool-result events and save to file
for await (const part of result.fullStream) {
  if (part.type === 'tool-result' && !part.dynamic) {
    if (part.toolName === 'image_generation') {
      // Decode base64 image from tool result
      const base64Image = part.output.result;
      const buffer = Buffer.from(base64Image, 'base64');

      const filename = `image-${timestamp}-${imageIndex}.webp`;
      const filepath = path.join(outputDir, filename);

      // Save to file
      await fs.promises.writeFile(filepath, buffer);
      console.log(`Saved image to ${filepath}`);
      imageIndex++;
    }
  }
}
```

## [Image-only models](#image-only-models)

These models are specialized for image generation and use the `experimental_generateImage` function.

### [OpenAI GPT Image 2](#openai-gpt-image-2)

OpenAI's `openai/gpt-image-2` is an image-only model you can call directly with `experimental_generateImage`. This is the same model the OpenAI [image generation tool](#openai-models-with-image-generation-tool) invokes behind the scenes, but calling it directly skips the multimodal LLM and returns images without an intermediate tool call.

generate-gpt-image-2.ts

```
import { experimental_generateImage as generateImage } from 'ai';

const result = await generateImage({
  model: 'openai/gpt-image-2',
  prompt: `A Devon Rex peering into a koi pond in the style of ukiyo-e`,
});

console.log(`Generated ${result.images.length} image(s)`);
```

### [Google Vertex Imagen](#google-vertex-imagen)

Google's Imagen models provide high-quality image generation with fine-grained control over output parameters. Multiple Imagen models are available, including but not limited to:

* `google/imagen-4.0-ultra-generate-001`
* `google/imagen-4.0-generate-001`

generate-imagen.ts

```
import { experimental_generateImage as generateImage } from 'ai';
import 'dotenv/config';

async function main() {
  const result = await generateImage({
    model: 'google/imagen-4.0-ultra-generate-001',
    prompt: `A majestic Bengal tiger drinking water from a crystal-clear mountain stream at golden hour`,
    n: 2,
    aspectRatio: '16:9',
  });

  console.log(`Generated ${result.images.length} image(s)`);
}

main().catch(console.error);
```

### [Black Forest Labs](#black-forest-labs)

Black Forest Labs' Flux models offer advanced image generation with support for various aspect ratios and capabilities. Multiple Flux models are available, including but not limited to:

* `bfl/flux-2-pro`
* `bfl/flux-2-flex`
* `bfl/flux-kontext-max`
* `bfl/flux-kontext-pro`
* `bfl/flux-pro-1.0-fill`
* `bfl/flux-pro-1.1`

generate-bfl.ts

```
import { experimental_generateImage as generateImage } from 'ai';
import 'dotenv/config';

async function main() {
  const result = await generateImage({
    model: 'bfl/flux-2-pro',
    prompt: `A vibrant coral reef ecosystem with tropical fish swimming around colorful sea anemones`,
    aspectRatio: '4:3',
  });

  console.log(`Generated ${result.images.length} image(s)`);
}

main().catch(console.error);
```

### [xAI Grok Imagine](#xai-grok-imagine)

xAI's Grok Imagine models generate high-quality images from text prompts with support for various aspect ratios and image editing. Multiple models are available, including but not limited to:

* `xai/grok-imagine-image`
* `xai/grok-imagine-image-pro`

xAI image models do not support the `size` parameter. Use `aspectRatio`
instead.

generate-xai.ts

```
import { experimental_generateImage as generateImage } from 'ai';
import 'dotenv/config';

async function main() {
  const result = await generateImage({
    model: 'xai/grok-imagine-image-pro',
    prompt: `A serene Japanese garden with a koi pond, stone lanterns, and cherry blossoms in full bloom`,
    aspectRatio: '16:9',
  });

  console.log(`Generated ${result.images.length} image(s)`);
}

main().catch(console.error);
```

### [Save generated images from image-only models](#save-generated-images-from-image-only-models)

All generated images from image-only models are returned in `result.images` as objects containing:

* `base64`: The image as a base64-encoded string
* `mediaType`: The MIME type (e.g., `image/png`, `image/jpeg`, `image/webp`)

save-image-only-models.ts

```
import fs from 'node:fs';
import path from 'node:path';

const outputDir = 'output';
fs.mkdirSync(outputDir, { recursive: true });

const timestamp = Date.now();

// Extract images from result.images and save to file
for (const [index, image] of result.images.entries()) {
  // Decode base64 image
  const buffer = Buffer.from(image.base64, 'base64');

  const extension = image.mediaType?.split('/')[1] || 'png';
  const filename = `image-${timestamp}-${index}.${extension}`;
  const filepath = path.join(outputDir, filename);

  // Save to file
  await fs.promises.writeFile(filepath, buffer);
  console.log(`Saved image to ${filepath}`);
}
```

For more information on generating images with the AI SDK, see the [AI SDK documentation](https://ai-sdk.dev/docs/ai-sdk-core/image-generation).

---

[Previous

Image Generation](/docs/ai-gateway/capabilities/image-generation)[Next

Using Chat Completions API](/docs/ai-gateway/capabilities/image-generation/openai)

Was this helpful?
