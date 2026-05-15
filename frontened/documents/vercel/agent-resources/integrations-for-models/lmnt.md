Menu

# Vercel LMNT Integration Connectable Account

Last updated February 10, 2026

[LMNT](https://lmnt.com/) provides data processing and
predictive analytics models, known for their precision and efficiency.
Integrating LMNT with Vercel enables your applications to offer accurate
insights and forecasts, particularly useful in finance and healthcare sectors.

## [Use cases](#use-cases)

You can use the Vercel and LMNT integration to power a variety of AI applications, including:

* High quality text-to-speech: Use LMNT to generate realistic speech that powers chatbots, AI-agents, games, and other digital media
* Studio quality custom voices: Use LMNT to clone voices that will faithfully reproduce the emotional richness and realism of actual speech
* Reliably low latency, full duplex streaming: Use LMNT to enable superior performance for conversational experiences, with consistently low latency and unmatched reliability

## [Getting started](#getting-started)

The Vercel LMNT integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select LMNT from the list of providers, and press Add
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
   pnpm i lmnt-node
   ```
10. Connect your project using the code below:

    index.ts

    ```
    import Speech from 'lmnt-node';
    const speech = new Speech(process.env.LMNT_API_KEY);const voices = await speech.fetchVoices();const firstVoice = voices[0].id;const synthesis = await speech.synthesize('Hello World!', firstVoice, {  format: 'mp3',});writeFileSync('/tmp/output.mp3', synthesis.audio);
    ```

## [More resources](#more-resources)

[### LMNT Website

Learn more about LMNT by visiting their website.](https://lmnt.com/)[### LMNT Pricing

Learn more about LMNT pricing.](https://lmnt.com/pricing)[### LMNT Documentation

Visit the LMNT documentation.](https://docs.lmnt.com)

---

[Previous

ElevenLabs](/docs/agent-resources/integrations-for-models/elevenlabs)[Next

OpenAI](/docs/agent-resources/integrations-for-models/openai)

Was this helpful?
