Menu

# Vercel ElevenLabs Integration Connectable Account

Last updated February 10, 2026

[ElevenLabs](https://elevenlabs.io) specializes in advanced voice
synthesis and audio processing technologies. Its integration with Vercel allows
you to incorporate realistic voice and audio enhancements into your
applications, ideal for creating interactive media experiences.

## [Use cases](#use-cases)

You can use the Vercel and ElevenLabs integration to power a variety of AI applications, including:

* Voice synthesis: Use ElevenLabs for generating natural-sounding synthetic voices in applications such as virtual assistants or audio-books
* Audio enhancement: Use ElevenLabs to enhance audio quality in applications, including noise reduction and sound clarity improvement
* Interactive media: Use ElevenLabs to implement voice synthesis and audio processing in interactive media and gaming for realistic soundscapes

### [Available models](#available-models)

ElevenLabs offers models that specialize in advanced voice synthesis and audio processing, delivering natural-sounding speech and audio enhancements suitable for various interactive media applications.

###

Eleven English v2

**Type:** Audio

The highest quality English text-to-speech model.

Eleven English v1

**Type:** Audio

The original ElevenLabs English text-to-speech model.

Eleven Multilingual v1

**Type:** Audio

A multilingual text-to-speech model. This has been surpassed by the Eleven Multilingual v2 model.

Eleven Multilingual v2

**Type:** Audio

A multilingual text-to-speech model that supports 28 languages.

Eleven Turbo v2

**Type:** Audio

The fastest text-to-speech model. Only English is supported.

Eleven Turbo v2.5

**Type:** Audio

A highly optimized, low-latency text-to-speech model supporting 32 languages.

## [Getting started](#getting-started)

The Vercel ElevenLabs integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select ElevenLabs from the list of providers, and press Add
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
   pnpm i @elevenlabs/elevenlabs-js
   ```
10. Connect your project using the code below:

    index.ts

    ```
    import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
    const elevenlabs = new ElevenLabsClient({  apiKey: 'YOUR_API_KEY', // Defaults to process.env.ELEVENLABS_API_KEY});
    const audio = await elevenlabs.textToSpeech.convert('JBFqnCBsd6RMkjVDRZzb', {  text: 'The first move is what sets everything in motion.',  modelId: 'eleven_multilingual_v2',});
    await play(audio);
    ```

## [More resources](#more-resources)

[### ElevenLabs Website

Learn more about ElevenLabs by visiting their website.](https://elevenlabs.io)[### ElevenLabs Pricing

Learn more about ElevenLabs pricing.](https://elevenlabs.io/pricing)[### ElevenLabs Documentation

Visit the ElevenLabs documentation.](https://elevenlabs.io/docs)

---

[Previous

Deep Infra](/docs/agent-resources/integrations-for-models/deepinfra)[Next

LMNT](/docs/agent-resources/integrations-for-models/lmnt)

Was this helpful?
