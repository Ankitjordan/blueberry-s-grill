Menu

# Vercel Together AI Integration Connectable Account

Last updated February 10, 2026

[Together AI](https://www.together.ai/) offers models for interactive
AI experiences, focusing on collaborative and real-time engagement. Integrating
Together AI with Vercel empowers your applications with enhanced user
interaction and co-creative functionalities.

## [Use cases](#use-cases)

You can use the Vercel and Together AI integration to power a variety of AI applications, including:

* Co-creative platforms: Use Together AI in platforms that enable collaborative creative processes, such as design or writing
* Interactive learning environments: Use Together AI in educational tools for interactive and adaptive learning experiences
* Real-time interaction tools: Use Together AI for developing applications that require real-time user interaction and engagement

### [Available models](#available-models)

Together AI offers models that specialize in collaborative and interactive AI experiences. These models are adept at facilitating real-time interaction, enhancing user engagement, and supporting co-creative processes.

###

Nous Hermes 2 - Mixtral 8x7B-DPO

**Type:** Chat

Nous Hermes 2 Mixtral 8x7B DPO is the new flagship Nous Research model trained over the Mixtral 8x7B MoE LLM.

Llama 3.1 70B Instruct Turbo

**Type:** Chat

Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture.

Llama 3.1 8B Instruct Turbo

**Type:** Chat

Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture.

Llama 3.1 405B Instruct Turbo

**Type:** Chat

Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture.

Llama 3.2 3B Instruct Turbo

**Type:** Chat

Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture.

Llama-3.3-70b-Instruct-Turbo

**Type:** Chat

The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out).

Mistral 7B Instruct v0.3

**Type:** Chat

The Mistral 7B Instruct v0.3 Large Language Model (LLM) is an instruct fine-tuned version of the Mistral 7B v0.3.

Mythomax L2 (13B)

**Type:** Chat

A variant of Mythomix proficient at both roleplaying and storywriting.

## [Getting started](#getting-started)

The Vercel Together AI integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select Together AI from the list of providers, and press Add
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
   pnpm i @ai-sdk/togetherai ai
   ```
10. Connect your project using the code below:

    index.ts

    ```
    import { togetherai } from '@ai-sdk/togetherai';import { generateText } from 'ai';
    const { text } = await generateText({  model: togetherai('meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'),  prompt: 'Write a vegetarian lasagna recipe for 4 people.',});
    ```

## [More resources](#more-resources)

[### Together AI Website

Learn more about Together AI by visiting their website.](https://www.together.ai/)[### Together AI Pricing

Learn more about Together AI pricing.](https://www.together.ai/pricing)[### Together AI Documentation

Visit the Together AI documentation.](https://docs.together.ai/)

---

[Previous

Replicate](/docs/agent-resources/integrations-for-models/replicate)[Next

CLI Workflows](/docs/agent-resources/workflows)

Was this helpful?
