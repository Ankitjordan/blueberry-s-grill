Menu

# Getting started with Edge Config

Last updated February 27, 2026

Edge Config is a distributed key-value store that allows you to store and retrieve data on Vercel's global network, close to your users. It is designed for high performance and low latency, making it ideal for use cases such as feature flags, A/B testing, and dynamic configuration.

This guide will help you create an Edge Config called `hello_world_store` at the project-level, through the Vercel [dashboard](/dashboard). A token and environment variable `EDGE_CONFIG`, that stores the connection string, will be automatically created for you. You'll update the store with a key-value data pair and read the value of `"greeting"` from a local Next.js project.

AI Assistance

Help me set up Edge Config in this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Install @vercel/edge-config. 2. Run `vercel link` and `vercel env pull` to get the Edge Config connection string. 3. Create a route or page that reads a value from Edge Config. 4. Test it locally with `vercel dev`.

## [Prerequisites](#prerequisites)

* Install the Edge Config SDK:

  Terminal

  ```
  pnpm i @vercel/edge-config
  ```
* An existing project. This quickstart uses Next.js, but you can use any supported framework with Edge Config storage
* [Install](/docs/cli#installing-vercel-cli) or [update](/docs/cli#updating-vercel-cli) to the latest version of Vercel CLI

Terminal

```
pnpm i -g vercel@latest
```

1. ### [Create an Edge Config store](#create-an-edge-config-store)

   Navigate to the [Project](/docs/projects/overview) you'd like to add an Edge Config store to. Click on [Storage](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fstores&title=Go+to+Storage), then click the Create Database button. Select Edge Config and click Continue.

   Create a new store by typing `hello_world_store` under Edge Config in the dialog that opens, and click Create.

   The name can only contain alphanumeric letters, "\_" and "-". It cannot exceed
   32 characters.
2. ### [Review what was created](#review-what-was-created)

   Once created, select `hello_world_store` to see a summary of what was created for you. Notice the following:

   * If you select Project, you'll see that your project was connected to the Edge Config by using an environment variable. If you go to your project's Settings > Environment Variables, you'll see the newly created environment variable.
   * If you select Tokens, you'll see a [read access token](/docs/edge-config/using-edge-config#creating-a-read-access-token). This token, along with your EDGE CONFIG ID, is used to create a [connection string](/docs/edge-config/using-edge-config#using-a-connection-string). This connection string is saved as the value of your `EDGE_CONFIG` environment variable. This enables you to use the SDK in your project to read the store's contents.

   If you're creating a project at the account-level, we won't automatically
   create a token, connection string, and environment variable until a project
   has been connected.
3. ### [Add a key-value pair](#add-a-key-value-pair)

   Under Items, add the following key-value pair and click Save Items:

   ```
   {
     "greeting": "hello world"
   }
   ```

   You can see more information about what can be stored in an Edge Config in the [limits](/docs/edge-config/edge-config-limits) documentation.
4. ### [Connect your Vercel project](#connect-your-vercel-project)

   Once you've created the store, you need to set up your project to read the contents of the store. This is detailed under Learn how to use this in code in the dashboard, but is described in the following steps in more detail.

   On your local machine, connect your Vercel Project. If you haven't already, install the Edge Config SDK, as mentioned in [prerequisites](#prerequisites).
5. ### [Pull the latest environment variables](#pull-the-latest-environment-variables)

   Using Vercel CLI, pull the latest environment variables, specifically `EDGE_CONFIG`, so that it's available to your project locally:

   terminal

   ```
   vercel env pull
   ```
6. ### [Create a Middleware](#create-a-middleware)

   Create a [Middleware](/docs/routing-middleware) for your project by creating a new file called `middleware.js` at the root of the project and if using Next.js, add the following code:

   middleware.ts

   ```
   import { NextResponse } from 'next/server';
   import { get } from '@vercel/edge-config';

   export const config = { matcher: '/welcome' };

   export async function middleware() {
     const greeting = await get('greeting');
     return NextResponse.json(greeting);
   }
   ```

   middleware.js

   ```
   import { NextResponse } from 'next/server';
   import { get } from '@vercel/edge-config';

   export const config = { matcher: '/welcome' };

   export async function middleware() {
     const greeting = await get('greeting');
     return NextResponse.json(greeting);
   }
   ```

   `NextResponse.json` requires at least Next v13.1 or enabling
   `experimental.allowMiddlewareResponseBody` in `next.config.js`.
7. ### [Run your application locally](#run-your-application-locally)

   Run your application locally and visit `localhost:3000/welcome` to see your greeting. The middleware intercepts requests to `localhost:3000/welcome` and responds with a greeting, read from your Edge Config store.

Your project is now ready to read more key-value data pairs from the `hello_world_store` Edge Config using the [SDK](/docs/edge-config/edge-config-sdk) or [Vercel REST API](/docs/edge-config/vercel-api).

Your Edge Config uses the public internet for reads when you develop locally.
Therefore, you will see higher response times. However, when you deploy your
application to Vercel, the reads are optimized to happen at ultra low latency
without any network requests.

## [Next steps](#next-steps)

Now that you've created an Edge Config store and read from it, you can explore the following:

* [Creating the Edge Config at the account level](/docs/edge-config/edge-config-dashboard#at-the-account-level)
* [Creating a read access token](/docs/edge-config/using-edge-config#creating-a-read-access-token)
* [Setting up a connection string](/docs/edge-config/using-edge-config#using-a-connection-string)
* [Learn about the `@vercel/edge-config` package](https://github.com/vercel/storage/tree/main/packages/edge-config#readme)
* [Explore the SDK](/docs/edge-config/edge-config-sdk)

---

[Previous

Edge Config](/docs/edge-config)[Next

Using Edge Config](/docs/edge-config/using-edge-config)

Was this helpful?
