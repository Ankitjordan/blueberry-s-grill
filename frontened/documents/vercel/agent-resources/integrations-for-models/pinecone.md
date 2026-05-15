Menu

# Vercel Pinecone Integration Connectable Account

Last updated February 10, 2026

[Pinecone](https://pinecone.io/) is a [vector
database](/kb/guide/vector-databases) service that handles the storage and search
of complex data. With Pinecone, you can use machine-learning models for content
recommendation systems, personalized search, image recognition, and more. The
Vercel Pinecone integration allows you to deploy your models to Vercel and use
them in your applications.

###

A vector database is a database that stores and searches for vectors. In this context, a vector represents a data point mathematically, often termed as an embedding.

An embedding is data that's converted to an array of numbers (a vector). The combination of the numbers that make up the vector form a multi-dimensional map used in comparison to other vectors to determine similarity.

Take the below example of two vectors, one for an image of a cat and one for an image of a dog. In the cat's vector, the first element is `0.1`, and in the dog's vector `0.2`. This similarity and difference in values illustrate how vector comparison works. The closer the values are to each other, the more similar the vectors are.

vectors

```
// Example of a vector for an image of a cat
[0.1, 0.2, 0.3, 0.4, 0.5];
// Example of a vector for an image of a dog
[(0.2, 0.3, 0.4, 0.5, 0.6)];
```

## [Use cases](#use-cases)

You can use the Vercel and Pinecone integration to power a variety of AI applications, including:

* Personalized search: Use Pinecone's vector database to provide personalized search results. By analyzing user behavior and preferences as vectors, search engines can suggest results that are likely to interest the user
* Image and video retrieval: Use Pinecone's vector database in image and video retrieval systems. They can quickly find images or videos similar to a given input by comparing embeddings that represent visual content
* Recommendation systems: Use Pinecone's vector database in e-commerce apps and streaming services to help power recommendation systems. By analyzing user behavior, preferences, and item characteristics as vectors, these systems can suggest products, movies, or articles that are likely to interest the user

## [Getting started](#getting-started)

The Vercel Pinecone integration can be accessed through the AI tab on your [Vercel dashboard](/dashboard).

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
2. Select Pinecone from the list of providers, and press Add
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
   pnpm i @pinecone-database/pinecone
   ```
10. Connect your project using the code below:

    index.ts

    ```
    import { Pinecone } from '@pinecone-database/pinecone';
    const pc = new Pinecone();
    ```

## [Deploy a template](#deploy-a-template)

You can deploy a template to Vercel that includes a pre-trained model and a sample application that uses the model:

## [More resources](#more-resources)

[### Pinecone Website

Learn more about Pinecone by visiting their website.](https://pinecone.io/)[### Pinecone Pricing

Learn more about Pinecone pricing.](https://pinecone.io/pricing)[### Pinecone Documentation

Visit the Pinecone documentation.](https://docs.pinecone.io)

---

[Previous

Perplexity](/docs/agent-resources/integrations-for-models/perplexity)[Next

Replicate](/docs/agent-resources/integrations-for-models/replicate)

Was this helpful?
