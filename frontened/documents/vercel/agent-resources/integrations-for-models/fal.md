Menu

# Vercel fal Integration Native Integration

Last updated February 10, 2026

[fal](https://fal.ai/) enables the
development of real-time AI applications with a focus on rapid inference speeds,
achieving response times under ~120ms. Specializing in diffusion models, fal has
no cold starts and a pay-for-what-you-use pricing model.

## [Use cases](#use-cases)

You can use the [Vercel and fal integration](https://vercel.com/marketplace/fal) to power a variety of AI applications, including:

* Text-to-image applications: Use fal to integrate real-time text-to-image generation in applications, enabling users to create complex visual content from textual descriptions instantly
* Real-time image processing: Use fal for applications requiring instantaneous image analysis and modification, such as real-time filters, enhancements, or object recognition in streaming video
* Depth maps creation: Use fal's AI models for generating depth maps from images, supporting applications in 3D modeling, augmented reality, or advanced photography editing, where understanding the spatial relationships in images is crucial

### [Available models](#available-models)

fal provides a diverse range of AI models designed for high-performance tasks in image and text processing.

###

Stable Diffusion XL

**Type:** Image

Run SDXL at the speed of light

Creative Upscaler

**Type:** Image

Create creative upscaled images.

FLUX.1 [dev] with LoRAs

**Type:** Image

Super fast endpoint for the FLUX.1 [dev] model with LoRA support, enabling rapid and high-quality image generation using pre-trained LoRA adaptations for personalization, specific styles, brand identities, and product-specific outputs.

Stable Diffusion XL

**Type:** Image

Run SDXL at the speed of light

Veo 2 Text to Video

**Type:** Video

Veo creates videos with realistic motion and high quality output. Explore different styles and find your own with extensive camera controls.

Wan-2.1 Image to Video

**Type:** Video

Wan-2.1 generates high-quality videos with excellent visual quality and motion diversity from still images. Bring your photos to life with natural, fluid movement.

## [Getting started](#getting-started)

The Vercel fal integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select fal from the list of providers, and press Add
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
   pnpm i @fal-ai/client
   ```
10. Connect your project using the code below:

    app/api/fal/proxy/route.ts

    ```
    import { route } from '@fal-ai/serverless-proxy/nextjs';
    export const { GET, POST } = route;
    ```

#### [Using the CLI](#using-the-cli)

1. Add the provider to your project using the [Vercel CLI `install`](/docs/cli/install) command

   terminal

   ```
   vercel install fal
   ```

   During this process, you will be asked to open the dashboard to accept the
   marketplace terms if you have not installed this integration before. You can
   also choose which project(s) the provider will have access to.
2. Install the providers package

   Terminal

   ```
   pnpm i @fal-ai/client
   ```
3. Connect your project using the code below:

   app/api/fal/proxy/route.ts

   ```
   import { route } from '@fal-ai/serverless-proxy/nextjs';
   export const { GET, POST } = route;
   ```

## [More resources](#more-resources)

[### fal Website

Learn more about fal by visiting their website.](https://fal.ai/)[### fal Pricing

Learn more about fal pricing.](https://fal.ai/pricing)[### fal Documentation

Visit the fal documentation.](https://fal.ai/docs)[### fal AI SDK page

Visit the fal AI SDK reference page.](https://sdk.vercel.ai/providers/ai-sdk-providers/fal)

---

[Previous

Groq](/docs/agent-resources/integrations-for-models/groq)[Next

Deep Infra](/docs/agent-resources/integrations-for-models/deepinfra)

Was this helpful?
