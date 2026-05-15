Menu

# Video Generation Quickstart

Last updated February 27, 2026

This quickstart walks you through generating your first video with AI Gateway. Supported models include Veo, Kling, Wan, Grok Imagine Video, and Seedance.

AI Assistance

Set up AI Gateway for video generation. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Initialize a Node.js project and install the `ai` package (v6+), dotenv, @types/node, tsx, and typescript. 2. Save my AI\_GATEWAY\_API\_KEY in .env.local. 3. Create an index.ts that uses the AI SDK experimental\_generateVideo function with the model 'google/veo-3.1-generate-001' to generate a video from a text prompt. 4. Save the output and run it with tsx.

Video generation requires the latest version of AI SDK v6. Check your `ai` package version with `npm list ai`.

1. ### [Set up your project](#set-up-your-project)

   Create a new directory and initialize a Node.js project:

   Terminal

   ```
   mkdir ai-video-demo
   cd ai-video-demo
   pnpm init
   ```
2. ### [Install dependencies](#install-dependencies)

   Install AI SDK v6 and development dependencies:

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

   If you already have AI SDK installed, upgrade to the latest version of AI SDK v6:

   Terminal

   ```
   pnpm update ai@latest
   ```

   The `@latest` forces an upgrade even if your package.json has an older version like `^5.0.0`.
3. ### [Set up your API key](#set-up-your-api-key)

   Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys) in your Vercel dashboard and click Create key to generate a new API key.

   Create a `.env.local` file and save your API key:

   .env.local

   ```
   AI_GATEWAY_API_KEY=your_ai_gateway_api_key
   ```
4. ### [Generate a video](#generate-a-video)

   Create an `index.ts` file:

   index.ts

   ```
   import { experimental_generateVideo as generateVideo } from 'ai';
   import fs from 'node:fs';
   import 'dotenv/config';

   async function main() {
     const result = await generateVideo({
       model: 'google/veo-3.1-generate-001',
       prompt: 'A serene mountain landscape at sunset with clouds drifting by',
       aspectRatio: '16:9',
       duration: 8,
     });

     // Save the generated video
     fs.writeFileSync('output.mp4', result.videos[0].uint8Array);

     console.log('Video saved to output.mp4');
   }

   main().catch(console.error);
   ```

   Run your script:

   Terminal

   ```
   pnpm tsx index.ts
   ```

   Video generation can take several minutes.
   If you hit timeout issues, see [extending timeouts for Node.js](/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js).

   The generated video will be saved as `output.mp4` in your project directory.
5. ### [Next steps](#next-steps)

   * See [supported video generation models](https://vercel.com/ai-gateway/models?type=video)
   * Learn about [image-to-video generation](/docs/ai-gateway/capabilities/video-generation/image-to-video) to animate images
   * Explore [KlingAI motion control](/docs/ai-gateway/capabilities/video-generation/motion-control) for character animation

Video models vary in their input formats and required parameters. Some accept buffers while others require URLs. Always check the [Video Generation docs](/docs/ai-gateway/capabilities/video-generation) for model-specific requirements.

## [More ways to generate video](#more-ways-to-generate-video)

### [Image-to-video](#image-to-video)

Transform a single image into a video by adding motion. The image becomes the video content itself.

image-to-video.ts

```
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateVideo({
  model: 'alibaba/wan-v2.6-i2v',
  prompt: {
    image: 'https://example.com/your-image.png',
    text: 'The scene slowly comes to life with gentle movement',
  },
  duration: 5,
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### [First and last frame](#first-and-last-frame)

Generate a video that transitions between a starting and ending image. The model interpolates the motion between them.

first-last-frame.ts

```
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const firstFrame = fs.readFileSync('start.png');
const lastFrame = fs.readFileSync('end.png');

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: firstFrame,
    text: 'Smooth transition between the two scenes',
  },
  providerOptions: {
    klingai: {
      imageTail: lastFrame,
      mode: 'pro',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### [Motion control](#motion-control)

Transfer motion from a reference video onto a character image. The character performs the movements from the reference video.

motion-control.ts

```
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-motion-control',
  prompt: {
    image: fs.readFileSync('./character.png'),
  },
  providerOptions: {
    klingai: {
      videoUrl: 'https://example.com/dance-reference.mp4',
      characterOrientation: 'video',
      mode: 'std',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### [Reference-to-video](#reference-to-video)

Generate a new video scene featuring characters or content from reference media. References can be images or videos that show the model what your characters look like.

reference-to-video.ts

```
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateVideo({
  model: 'alibaba/wan-v2.6-r2v',
  prompt: 'character1 and character2 have a friendly conversation in a cozy cafe',
  resolution: '1920x1080',
  duration: 4,
  providerOptions: {
    alibaba: {
      // References can be images or videos
      referenceUrls: [
        'https://example.com/cat.png',
        'https://example.com/dog.png',
      ],
      shotType: 'single',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

## [Using URLs for input media](#using-urls-for-input-media)

Some video models require URLs instead of raw file data for image or video inputs. You can use [Vercel Blob](/docs/vercel-blob) to host your media files.

### [Set up Vercel Blob](#set-up-vercel-blob)

1. Go to the [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project (or create one)
3. Click Storage in the top navigation
4. Click Create Database and select Blob
5. Follow the prompts to create your blob store
6. Copy the `BLOB_READ_WRITE_TOKEN` to your `.env.local` file

.env.local

```
AI_GATEWAY_API_KEY=your_ai_gateway_api_key
BLOB_READ_WRITE_TOKEN=your_blob_token
```

Install the Vercel Blob package:

Terminal

```
pnpm add @vercel/blob
```

### [Upload and use media URLs](#upload-and-use-media-urls)

url-input.ts

```
import { experimental_generateVideo as generateVideo } from 'ai';
import { put } from '@vercel/blob';
import fs from 'node:fs';
import 'dotenv/config';

// Upload image to Vercel Blob
const imageBuffer = fs.readFileSync('input.png');
const { url: imageUrl } = await put('input.png', imageBuffer, {
  access: 'public',
});

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: imageUrl, // Pass URL instead of buffer
    text: 'The scene slowly comes to life with gentle movement',
  },
  providerOptions: {
    klingai: {
      mode: 'std',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

See the [Vercel Blob docs](/docs/vercel-blob) for more details on uploading and managing files.

For more details, see the [Video Generation Capabilities docs](/docs/ai-gateway/capabilities/video-generation).

---

[Previous

Image](/docs/ai-gateway/getting-started/image)[Next

Models & Providers](/docs/ai-gateway/models-and-providers)

Was this helpful?
