Menu

# Using Edge Config with Split

Last updated February 26, 2026

This guide will help you get started with using Vercel's Split integration with Edge Config. This integration allows you to use Edge Config as a configuration source for your Split feature flags.

The Split Edge Config integration is available in [Beta](/docs/release-phases#beta) on [all plans](/docs/plans)

Split is a feature flag provider that tracks event data, enabling you to release features, target them to audiences, and measure their impact on customer experience metrics securely.

The Split Edge Config integration enables you to write your [Split rollout plan](https://help.split.io/hc/en-us/articles/9805284145549-Creating-a-rollout-plan) to an Edge Config. Doing so will allow you to evaluate feature flags at ultra-low latency with Vercel's CDN while tracking events and impressions data with Split.

## [Prerequisites](#prerequisites)

Before using this integration, you should have:

1. The latest version of Vercel CLI. To check your version, use `vercel --version`. To [install](/docs/cli#installing-vercel-cli) or update Vercel CLI, use:

   Terminal

   ```
   pnpm i -g vercel@latest
   ```
2. A project. If you don't have one, you can run the following terminal commands to create a Next project:

Terminal

```
pnpm create next-app@latest
```

1. A Vercel project. If you don't have one, see [Creating a Project](/docs/projects/overview#creating-a-project)
2. An Edge Config. If you don't have one, follow [the Edge Config quickstart](/docs/edge-config/get-started)
3. The Edge Config SDK:

   Terminal

   ```
   pnpm i @vercel/edge-config
   ```

To configure this integration, Split Admin access (Split Admin users can add
feature flags and segments, and edit them at will) is required.

1. ### [Set up the Split integration](#set-up-the-split-integration)

   Visit [the Split page in the Vercel Integration Marketplace](/marketplace/split) and select the Add Integration button. From the Integration dialog:

   1. Select a Vercel team and project to connect the integration to
   2. Log into Split
   3. Select the [Split Environment](https://help.split.io/hc/en-us/articles/360019915771-Environments) you want to use
   4. Select an existing Edge Config or create a new one
   5. Copy the Edge Config item key provided on this page. You'll need it to add it to your Environment Variables

   You can also find your Edge Config Split item key in [your dashboard on
   Vercel](/dashboard/integrations). In the **Integrations** section in the sidebar,
   select **Manage**, then select **Configure** on the
   integration page. You should see the item key on the page that opens.
2. ### [Create your feature flags](#create-your-feature-flags)

   If you already have existing feature flags, you can skip this step and use those. In this example, we'll create one called `New_Marketing_Page`. You can set the user targeting to Joe and Bobby.

   To create a feature flag in Split:

   1. Log into your [Split management console](https://app.split.io/login) and select the workspace icon near the top-left of the page
   2. In the sidebar, under Target, select Feature flags. Add the name `New_Marketing_Page`, and set the traffic type to `user`. Select Create to finish
   3. With your feature flag created, select the feature flag and open Definition in the sidebar. Select Initiate Environment to configure your flag
   4. Add valid users to the feature flag
   5. Scroll down to Targeting and select Add new individual target
   6. Under To user, add any username you want to test. This example uses `Joe`.
   7. Select Add new individual target, then set the Description option to `off`. Add another username under To user. This example uses `Bobby`
   8. Select Review Changes, then Create to finish

   Next, you need to add your credentials to your project's local environment to use the Split integration in your code.
3. ### [Get your credentials](#get-your-credentials)

   Next, you'll add the following credentials to your Vercel project:

   * `SPLIT_SDK_CLIENT_API_KEY`
   * `EDGE_CONFIG_SPLIT_ITEM_KEY`
   * `EDGE_CONFIG`

   To add environment variables to your project, visit [your Vercel dashboard](/dashboard) and select the project you want to use the Split integration with. Then select Settings > Environment Variables.

   To get your Split client-side API keys:

   1. Log into your [Split management console](https://app.split.io/login) and select the workspace icon near the top-left of the page
   2. In the list of options that appears, select Admin Settings, then navigate to API Keys -> SDK API Keys
   3. Copy the client-side keys associated with the workspace and environment you're using

   To add your Edge Config Split item key, if you didn't copy it after setting up the integration on Vercel:

   1. Visit [your dashboard on
      Vercel](/dashboard/integrations)
   2. In the Integrations section in the sidebar, select Manage
   3. On the integration page, select Configure
   4. You should see the item key on the page that opens. Copy it

   To add your Edge Config's connection string to your project:

   1. Visit your project's page in [the dashboard](/dashboard)
   2. Open Storage in the sidebar. Select Connect Store and select the Edge Config associated with your Split integration. The `EDGE_CONFIG` environment variable will be set automatically.

   Now you're ready to use the Split Edge Config integration in your code.
4. ### [Use the Split integration in your code](#use-the-split-integration-in-your-code)

   Open your project's code on your local machine and do the following:

   1. Install Split's Browser SDK, Vercel integration utilities, and Vercel's Edge Config SDK:

   Terminal

   ```
   pnpm i @splitsoftware/splitio-browserjs @splitsoftware/vercel-integration-utils @vercel/edge-config
   ```

   2. Create an API route in your project. The following example fetches a treatement based on which user is visiting. You can specify the user by appending `?userKey=Joe` or `?userKey=Bobby` to the URL when visiting the route:

   app/api/marketing-example/route.ts

   ```
   import {
     SplitFactory,
     PluggableStorage,
     ErrorLogger,
   } from '@splitsoftware/splitio-browserjs';
   import { EdgeConfigWrapper } from '@splitsoftware/vercel-integration-utils';
   import { createClient } from '@vercel/edge-config';

   export async function GET(request: Request) {
     const { EDGE_CONFIG_SPLIT_ITEM_KEY, SPLIT_SDK_CLIENT_API_KEY } = process.env;

     if (!SPLIT_SDK_CLIENT_API_KEY || !EDGE_CONFIG_SPLIT_ITEM_KEY)
       return new Response(
         `Failed to find your SDK Key (${SPLIT_SDK_CLIENT_API_KEY})
         or item key ${EDGE_CONFIG_SPLIT_ITEM_KEY}`,
       );

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const { searchParams } = new URL(request.url);
     const userKey = searchParams.get('userKey') || 'anonymous';
     const client = SplitFactory({
       core: {
         authorizationKey: SPLIT_SDK_CLIENT_API_KEY,
         key: userKey,
       },
       mode: 'consumer_partial',
       storage: PluggableStorage({
         wrapper: EdgeConfigWrapper({
           // The Edge Config item key where Split stores
           // feature flag definitions
           edgeConfigItemKey: EDGE_CONFIG_SPLIT_ITEM_KEY,
           // The Edge Config client
           edgeConfig: edgeConfigClient,
         }),
       }),
       // Disable or keep only ERROR log level in production,
       // to minimize performance impact
       debug: ErrorLogger(),
     }).client();

     await new Promise((resolve) => {
       client.on(client.Event.SDK_READY, () => resolve);
       client.on(client.Event.SDK_READY_TIMED_OUT, () => resolve);
     });

     // Replace this with the feature flag you want
     const FEATURE_FLAG = 'New_Marketing_Page';
     const treatment = await client.getTreatment(FEATURE_FLAG);

     // Must await in app-router; waitUntil() is not
     // yet supported
     await client.destroy();

     // treatment will be 'control' if the SDK timed out
     if (treatment == 'control') return new Response('Control marketing page');

     return treatment === 'on'
       ? new Response('New marketing page')
       : new Response('Old marketing page');
   }
   ```

   app/api/marketing-example/route.js

   ```
   import {
     SplitFactory,
     PluggableStorage,
     ErrorLogger,
   } from '@splitsoftware/splitio-browserjs';
   import { EdgeConfigWrapper } from '@splitsoftware/vercel-integration-utils';
   import { createClient } from '@vercel/edge-config';

   export async function GET(request) {
     const { EDGE_CONFIG_SPLIT_ITEM_KEY, SPLIT_SDK_CLIENT_API_KEY } = process.env;

     if (!SPLIT_SDK_CLIENT_API_KEY || !EDGE_CONFIG_SPLIT_ITEM_KEY)
       return new Response(
         `Failed to find your SDK Key (${SPLIT_SDK_CLIENT_API_KEY})
         or item key ${EDGE_CONFIG_SPLIT_ITEM_KEY}`,
       );

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const { searchParams } = new URL(request.url);
     const userKey = searchParams.get('userKey') || 'anonymous';
     const client = SplitFactory({
       core: {
         authorizationKey: SPLIT_SDK_CLIENT_API_KEY,
         key: userKey,
       },
       mode: 'consumer_partial',
       storage: PluggableStorage({
         wrapper: EdgeConfigWrapper({
           // The Edge Config item key where Split stores
           // feature flag definitions
           edgeConfigItemKey: EDGE_CONFIG_SPLIT_ITEM_KEY,
           // The Edge Config client
           edgeConfig: edgeConfigClient,
         }),
       }),
       // Disable or keep only ERROR log level in production,
       // to minimize performance impact
       debug: ErrorLogger(),
     }).client();

     await new Promise((resolve) => {
       client.on(client.Event.SDK_READY, () => resolve);
       client.on(client.Event.SDK_READY_TIMED_OUT, () => resolve);
     });

     // Replace this with the feature flag you want
     const FEATURE_FLAG = 'New_Marketing_Page';
     const treatment = await client.getTreatment(FEATURE_FLAG);

     // Must await in app-router; waitUntil() is not
     // yet supported
     await client.destroy();

     // treatment will be 'control' if the SDK timed out
     if (treatment == 'control') return new Response('Control marketing page');

     return treatment === 'on'
       ? new Response('New marketing page')
       : new Response('Old marketing page');
   }
   ```

   pages/api/marketing-example.ts

   ```
   import {
     SplitFactory,
     PluggableStorage,
     ErrorLogger,
   } from '@splitsoftware/splitio-browserjs';
   import { EdgeConfigWrapper } from '@splitsoftware/vercel-integration-utils';
   import { createClient } from '@vercel/edge-config';
   import { NextFetchEvent } from 'next/server';

   export default async function handler(
     request: Request,
     context: NextFetchEvent,
   ) {
     const { EDGE_CONFIG_SPLIT_ITEM_KEY, SPLIT_SDK_CLIENT_API_KEY } = process.env;

     if (!SPLIT_SDK_CLIENT_API_KEY || !EDGE_CONFIG_SPLIT_ITEM_KEY)
       return new Response(
         `Failed to find your SDK Key (${SPLIT_SDK_CLIENT_API_KEY})
         or item key ${EDGE_CONFIG_SPLIT_ITEM_KEY}`,
       );

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const { searchParams } = new URL(request.url);
     const userKey = searchParams.get('userKey') || 'anonymous';
     const client = SplitFactory({
       core: {
         authorizationKey: SPLIT_SDK_CLIENT_API_KEY,
         key: userKey,
       },
       mode: 'consumer_partial',
       storage: PluggableStorage({
         wrapper: EdgeConfigWrapper({
           // The Edge Config item key where Split stores
           // feature flag definitions
           edgeConfigItemKey: EDGE_CONFIG_SPLIT_ITEM_KEY,
           // The Edge Config client
           edgeConfig: edgeConfigClient,
         }),
       }),
       // Disable or keep only ERROR log level in production,
       // to minimize performance impact
       debug: ErrorLogger(),
     }).client();

     // Wait until
     await new Promise((resolve) => {
       client.on(client.Event.SDK_READY, () => resolve);
       client.on(client.Event.SDK_READY_TIMED_OUT, () => resolve);
     });

     // Replace this with the feature flag you want
     const FEATURE_FLAG = 'New_Marketing_Page';
     const treatment = await client.getTreatment(FEATURE_FLAG);

     // Must await in app-router; waitUntil() is not
     // yet supported

     context.waitUntil(client.destroy());
     // treatment will be 'control' if the SDK timed out
     if (treatment == 'control') return new Response('Control marketing page');

     return treatment === 'on'
       ? new Response('New marketing page')
       : new Response('Old marketing page');
   }
   ```

   pages/api/marketing-example.js

   ```
   import {
     SplitFactory,
     PluggableStorage,
     ErrorLogger,
   } from '@splitsoftware/splitio-browserjs';
   import { EdgeConfigWrapper } from '@splitsoftware/vercel-integration-utils';
   import { createClient } from '@vercel/edge-config';

   export default async function handler(request, context) {
     const { EDGE_CONFIG_SPLIT_ITEM_KEY, SPLIT_SDK_CLIENT_API_KEY } = process.env;

     if (!SPLIT_SDK_CLIENT_API_KEY || !EDGE_CONFIG_SPLIT_ITEM_KEY)
       return new Response(
         `Failed to find your SDK Key (${SPLIT_SDK_CLIENT_API_KEY})
         or item key ${EDGE_CONFIG_SPLIT_ITEM_KEY}`,
       );

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const { searchParams } = new URL(request.url);
     const userKey = searchParams.get('userKey') || 'anonymous';
     const client = SplitFactory({
       core: {
         authorizationKey: SPLIT_SDK_CLIENT_API_KEY,
         key: userKey,
       },
       mode: 'consumer_partial',
       storage: PluggableStorage({
         wrapper: EdgeConfigWrapper({
           // The Edge Config item key where Split stores
           // feature flag definitions
           edgeConfigItemKey: EDGE_CONFIG_SPLIT_ITEM_KEY,
           // The Edge Config client
           edgeConfig: edgeConfigClient,
         }),
       }),
       // Disable or keep only ERROR log level in production,
       // to minimize performance impact
       debug: ErrorLogger(),
     }).client();

     // Wait until
     await new Promise((resolve) => {
       client.on(client.Event.SDK_READY, () => resolve);
       client.on(client.Event.SDK_READY_TIMED_OUT, () => resolve);
     });

     // Replace this with the feature flag you want
     const FEATURE_FLAG = 'New_Marketing_Page';
     const treatment = await client.getTreatment(FEATURE_FLAG);

     // Must await in app-router; waitUntil() is not
     // yet supported

     context.waitUntil(client.destroy());
     // treatment will be 'control' if the SDK timed out
     if (treatment == 'control') return new Response('Control marketing page');

     return treatment === 'on'
       ? new Response('New marketing page')
       : new Response('Old marketing page');
   }
   ```

   /api/marketing-example.ts

   ```
   import {
     SplitFactory,
     PluggableStorage,
     ErrorLogger,
   } from '@splitsoftware/splitio-browserjs';
   import { EdgeConfigWrapper } from '@splitsoftware/vercel-integration-utils';
   import { RequestContext } from '@vercel/edge';
   import { createClient } from '@vercel/edge-config';

   export default async function handler(
     request: Request,
     context: RequestContext,
   ) {
     const { EDGE_CONFIG_SPLIT_ITEM_KEY, SPLIT_SDK_CLIENT_API_KEY } = process.env;

     if (!SPLIT_SDK_CLIENT_API_KEY || !EDGE_CONFIG_SPLIT_ITEM_KEY)
       return new Response(
         `Failed to find your SDK Key (${SPLIT_SDK_CLIENT_API_KEY})
         or item key ${EDGE_CONFIG_SPLIT_ITEM_KEY}`,
       );

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const { searchParams } = new URL(request.url);
     const userKey = searchParams.get('userKey') || 'anonymous';
     const client = SplitFactory({
       core: {
         authorizationKey: SPLIT_SDK_CLIENT_API_KEY,
         key: userKey,
       },
       mode: 'consumer_partial',
       storage: PluggableStorage({
         wrapper: EdgeConfigWrapper({
           // The Edge Config item key where Split stores
           // feature flag definitions
           edgeConfigItemKey: EDGE_CONFIG_SPLIT_ITEM_KEY,
           // The Edge Config client
           edgeConfig: edgeConfigClient,
         }),
       }),
       // Disable or keep only ERROR log level in production,
       // to minimize performance impact
       debug: ErrorLogger(),
     }).client();

     // Wait until
     await new Promise((resolve) => {
       client.on(client.Event.SDK_READY, () => resolve);
       client.on(client.Event.SDK_READY_TIMED_OUT, () => resolve);
     });

     // Replace this with the feature flag you want
     const FEATURE_FLAG = 'New_Marketing_Page';
     const treatment = await client.getTreatment(FEATURE_FLAG);

     // Must await in app-router; waitUntil() is not
     // yet supported

     context.waitUntil(client.destroy());
     // treatment will be 'control' if the SDK timed out
     if (treatment == 'control') return new Response('Control marketing page');

     return treatment === 'on'
       ? new Response('New marketing page')
       : new Response('Old marketing page');
   }
   ```

   pages/api/marketing-example.js

   ```
     SplitFactory,
   import {
     PluggableStorage,
     ErrorLogger,
   } from '@splitsoftware/splitio-browserjs';
   import { EdgeConfigWrapper } from '@splitsoftware/vercel-integration-utils';
   import { createClient } from '@vercel/edge-config';

   export default async function handler(request, context) {
     const { EDGE_CONFIG_SPLIT_ITEM_KEY, SPLIT_SDK_CLIENT_API_KEY } = process.env;

     if (!SPLIT_SDK_CLIENT_API_KEY || !EDGE_CONFIG_SPLIT_ITEM_KEY)
       return new Response(
         `Failed to find your SDK Key (${SPLIT_SDK_CLIENT_API_KEY})
         or item key ${EDGE_CONFIG_SPLIT_ITEM_KEY}`,
       );

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const { searchParams } = new URL(request.url);
     const userKey = searchParams.get('userKey') || 'anonymous';
     const client = SplitFactory({
       core: {
         authorizationKey: SPLIT_SDK_CLIENT_API_KEY,
         key: userKey,
       },
       mode: 'consumer_partial',
       storage: PluggableStorage({
         wrapper: EdgeConfigWrapper({
           // The Edge Config item key where Split stores
           // feature flag definitions
           edgeConfigItemKey: EDGE_CONFIG_SPLIT_ITEM_KEY,
           // The Edge Config client
           edgeConfig: edgeConfigClient,
         }),
       }),
       // Disable or keep only ERROR log level in production,
       // to minimize performance impact
       debug: ErrorLogger(),
     }).client();

     // Wait until
     await new Promise((resolve) => {
       client.on(client.Event.SDK_READY, () => resolve);
       client.on(client.Event.SDK_READY_TIMED_OUT, () => resolve);
     });

     // Replace this with the feature flag you want
     const FEATURE_FLAG = 'New_Marketing_Page';
     const treatment = await client.getTreatment(FEATURE_FLAG);

     // Must await in app-router; waitUntil() is not
     // yet supported

     context.waitUntil(client.destroy());
     // treatment will be 'control' if the SDK timed out
     if (treatment == 'control') return new Response('Control marketing page');

     return treatment === 'on'
       ? new Response('New marketing page')
       : new Response('Old marketing page');
   }
   ```
5. ### [Test your code](#test-your-code)

   1. Start a local development server. If you're using Vercel CLI, enter the following command in the terminal:

   terminal

   ```
   vercel dev
   ```

   1. Navigate to <http://localhost:3000/api/split-example?userKey=Joe>. You should see either `New marketing page` or `Old marketing page` based on how your feature flags are configured in Split
      * Try changing the `userKey` search param's value to `Bobby`, or deleting it altogether, to see different responses when you visit the route

## [Next steps](#next-steps)

Now that you have set up the Split Edge Config integration, you can explore the following topics to learn more:

* [Get started with Edge Config](/docs/edge-config/get-started)
* [Read with the SDK](/docs/edge-config/edge-config-sdk)
* [Use the dashboard](/docs/edge-config/edge-config-dashboard)
* [Edge Config limits](/docs/edge-config/edge-config-limits)

---

[Previous

LaunchDarkly](/docs/edge-config/edge-config-integrations/launchdarkly-edge-config)[Next

Statsig](/docs/edge-config/edge-config-integrations/statsig-edge-config)

Was this helpful?
