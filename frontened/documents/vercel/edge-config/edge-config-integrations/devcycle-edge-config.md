Menu

# Using Edge Config with DevCycle

Last updated February 13, 2026

This guide will help you get started with using Vercel's DevCycle integration with Edge Config. This integration allows you to use Edge Config as a configuration source for your DevCycle feature flags.

The DevCycle Edge Config integration is available in [Beta](/docs/release-phases#beta) on [all plans](/docs/plans)

DevCycle is a feature management platform designed for developers. DevCycle allows you to work with feature flags more naturally, where you write code, so you can deliver better features, faster.

With DevCycle and Vercel Edge Config the decision logic for your features lives with your hosted site, so you can run your feature rollouts or experiments with ultra-low latency.

## [Prerequisites](#prerequisites)

Before using this integration, you should have:

1. The latest version of Vercel CLI. To check your version, use `vercel --version`. To [install](/docs/cli#installing-vercel-cli) or update Vercel CLI, use:

   Terminal

   ```
   pnpm i -g vercel@latest
   ```
2. A project. If you don't have one, you can run the following terminal commands to create a Next.js project:

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

1. ### [Set up the DevCycle integration](#set-up-the-devcycle-integration)

   Visit [the DevCycle page in the Integration Marketplace](/marketplace/devcycle) and select the Add Integration button. From the modal that opens:

   1. Select your Vercel team and project.
   2. Continue and log into DevCycle.
   3. Select the DevCycle Organization and Project you want to use with Vercel Edge Config.
   4. Connect your DevCycle project to an existing or new Edge Config store.
   5. Click Finish Setup.
2. ### [Install the DevCycle Edge Config package](#install-the-devcycle-edge-config-package)

   Terminal

   ```
   pnpm i @devcycle/vercel-edge-config @vercel/edge-config
   ```
3. ### [Use the DevCycle integration in your code](#use-the-devcycle-integration-in-your-code)

   For more information on DevCycle Next.js SDK usage, see the [DevCycle docs](https://docs.devcycle.com/sdk/client-side-sdks/nextjs).

   app/index.tsx

   ```
   import { createClient } from '@vercel/edge-config';
   import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
   import { setupDevCycle } from '@devcycle/nextjs-sdk/server';

   const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
   const edgeConfigSource = new EdgeConfigSource(edgeClient);

   export const { getVariableValue, getClientContext } = setupDevCycle({
     serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
     clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
     userGetter: () => ({ user_id: 'test_user' }),
     options: {
       // pass the configSource option with the instance of EdgeConfigSource
       configSource: edgeConfigSource,
     },
   });
   ```

   app/index.jsx

   ```
   import { createClient } from '@vercel/edge-config';
   import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
   import { setupDevCycle } from '@devcycle/nextjs-sdk/server';

   const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
   const edgeConfigSource = new EdgeConfigSource(edgeClient);

   export const { getVariableValue, getClientContext } = setupDevCycle({
     serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
     clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
     userGetter: () => ({ user_id: 'test_user' }),
     options: {
       // pass the configSource option with the instance of EdgeConfigSource
       configSource: edgeConfigSource,
     },
   });
   ```

   pages/index.tsx

   ```
   import type { GetServerSideProps } from 'next';
   import { createClient } from '@vercel/edge-config';
   import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
   import { getServerSideDevCycle } from '@devcycle/nextjs-sdk/pages';

   const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
   const edgeConfigSource = new EdgeConfigSource(edgeClient);

   export const getServerSideProps: GetServerSideProps = async (context) => {
     const user = {
       user_id: 'server-user',
     };

     return {
       props: {
         ...(await getServerSideDevCycle({
           serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
           clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
           user,
           context,
           options: {
             // pass the configSource option with the instance of EdgeConfigSource
             configSource: edgeConfigSource,
           },
         })),
       },
     };
   };
   ```

   pages/index.jsx

   ```
   import { createClient } from '@vercel/edge-config';
   import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
   import { getServerSideDevCycle } from '@devcycle/nextjs-sdk/pages';

   const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
   const edgeConfigSource = new EdgeConfigSource(edgeClient);

   export const getServerSideProps = async (context) => {
     const user = {
       user_id: 'server-user',
     };

     return {
       props: {
         ...(await getServerSideDevCycle({
           serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
           clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
           user,
           context,
           options: {
             // pass the configSource option with the instance of EdgeConfigSource
             configSource: edgeConfigSource,
           },
         })),
       },
     };
   };
   ```

   index.tsx

   ```
   import { createClient } from '@vercel/edge-config';
   import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
   import { initializeDevCycle } from '@devcycle/nodejs-server-sdk';

   // the EDGE_CONFIG environment variable contains a connection string for a particular edge config. It is set automatically
   // when you connect an edge config to a project in Vercel.
   const edgeClient = createClient(process.env.EDGE_CONFIG);
   const edgeConfigSource = new EdgeConfigSource(edgeClient);

   const devcycleClient = initializeDevCycle(
     process.env.DEVCYCLE_SERVER_SDK_KEY,
     // pass the edgeConfigSource as the "configSource" option during SDK intialization to tell the SDK to use Edge Config
     // for retrieving its configuration
     { configSource: edgeConfigSource },
   );
   ```

   index.jsx

   ```
   import { createClient } from '@vercel/edge-config';
   import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
   import { initializeDevCycle } from '@devcycle/nodejs-server-sdk';

   // the EDGE_CONFIG environment variable contains a connection string for a particular edge config. It is set automatically
   // when you connect an edge config to a project in Vercel.
   const edgeClient = createClient(process.env.EDGE_CONFIG);
   const edgeConfigSource = new EdgeConfigSource(edgeClient);

   const devcycleClient = initializeDevCycle(
     process.env.DEVCYCLE_SERVER_SDK_KEY,
     // pass the edgeConfigSource as the "configSource" option during SDK intialization to tell the SDK to use Edge Config
     // for retrieving its configuration
     { configSource: edgeConfigSource },
   );
   ```

## [Next steps](#next-steps)

Now that you have the DevCycle Edge Config integration set up, you can explore the following topics to learn more:

* [Get started with Edge Config](/docs/edge-config/get-started)
* [Read with the SDK](/docs/edge-config/edge-config-sdk)
* [Use the dashboard](/docs/edge-config/edge-config-dashboard)
* [Edge Config limits](/docs/edge-config/edge-config-limits)

---

[Previous

Integrations](/docs/edge-config/edge-config-integrations)[Next

Hypertune](/docs/edge-config/edge-config-integrations/hypertune-edge-config)

Was this helpful?
