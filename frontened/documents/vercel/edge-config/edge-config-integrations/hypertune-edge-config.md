Menu

# Using Edge Config with Hypertune

Last updated November 19, 2025

Hypertune is a feature flag, A/B testing and app configuration platform with full type-safety and Git version control.

The Hypertune Edge Config integration synchronizes with your Functions for low latency retrieval without fetch requests.

## [Prerequisites](#prerequisites)

Before using this integration, you should have the latest version of Vercel CLI.

To check your version, use `vercel --version`. To install or update Vercel CLI, use:

Terminal

```
pnpm i -g vercel@latest
```

## [Get Started](#get-started)

If you deploy a template like the [Hypertune Flags SDK
Example](https://vercel.com/templates/next.js/flags-sdk-hypertune-nextjs), it
will guide you through most of these steps.

Navigate to your Project and click the Flags tab.

Install a flag provider, select Hypertune and click continue, then toggle Enable Edge Config Syncing on.

1. ### [Set up your local environment](#set-up-your-local-environment)

   Open your project in your development environment and link it to Vercel.

   ```
   vercel link
   ```

   Once linked, you can pull the environment variables that were added to your project.

   ```
   vercel env pull
   ```

   You should have a `.env.local` file with the following environment variables:

   ```
   EXPERIMENTATION_CONFIG="..."
   EXPERIMENTATION_CONFIG_ITEM_KEY="..."
   NEXT_PUBLIC_HYPERTUNE_TOKEN="..."
   ```

   If you don't see these environment variables, ensure your project is linked to
   the Hypertune integration in the Flags tab.
2. ### [Manage your flags in Hypertune](#manage-your-flags-in-hypertune)

   From the Flags tab, click Open in Hypertune to make changes in your Hypertune project.

   When you click save, changes will be synchronized to your Edge Config and ready for use.
3. ### [Generate a type-safe client](#generate-a-type-safe-client)

   Run code generation to produce the type-safe client for use with the Hypertune SDK.

   Terminal

   ```
   pnpm dlx hypertune
   ```

   You should now have a `generated` directory with generated code reflecting your saved changes.
4. ### [Declare flags in your code](#declare-flags-in-your-code)

   You can declare server side flags using the Flags SDK with Hypertune as follows:

   flags.ts

   ```
   import {
     createSource,
     vercelFlagDefinitions as flagDefinitions,
     flagFallbacks,
     type FlagValues,
     type Context,
   } from '@/generated/hypertune';
   import { flag } from 'flags/next';
   import { createHypertuneAdapter } from '@flags-sdk/hypertune';
   import { identify } from './lib/identify';

   // Generate a Flags SDK adapter from generated Hypertune code
   const hypertuneAdapter = createHypertuneAdapter<FlagValues, Context>({
     createSource,
     flagDefinitions,
     flagFallbacks,
     identify,
   });

   // Use generated definitions to declare flags in your framework
   export const exampleFlag = flag(hypertuneAdapter.declarations.exampleFlag);
   ```

   See the [more resources](#more-resources) section for more information about
   the Hypertune and Flags SDK.
5. ### [Use flags in your app](#use-flags-in-your-app)

   app/page.tsx

   ```
   import { exampleFlag } from '@/flags';

   export default async function Home() {
     const isExampleFlagEnabled = await exampleFlag();
     return <div>Example Flag is {isExampleFlagEnabled ? 'enabled' : 'disabled'}</div>;
   }
   ```

## [Next steps](#next-steps)

Learn more about Edge Config:

* [Get started with Edge Config](/docs/edge-config/get-started)
* [Manage Edge Config on the dashboard](/docs/edge-config/edge-config-dashboard)
* [View the Edge Config SDK reference](/docs/edge-config/edge-config-sdk)
* [View Edge Config limits](/docs/edge-config/edge-config-limits)

## [More resources](#more-resources)

Learn more about Hypertune and the Flags SDK adapter:

* [Hypertune App Router Quickstart](https://docs.hypertune.com/getting-started/next.js-app-router-quickstart)
* [Flags SDK Hypertune Provider](https://flags-sdk.dev/providers/hypertune)

---

[Previous

DevCycle](/docs/edge-config/edge-config-integrations/devcycle-edge-config)[Next

LaunchDarkly](/docs/edge-config/edge-config-integrations/launchdarkly-edge-config)

Was this helpful?
