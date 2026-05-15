Menu

# Getting started with Speed Insights

Last updated March 11, 2026

This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

Speed Insights is available on [all plans](/docs/plans)

To view instructions on using the Vercel Speed Insights in your project for your framework, use the Choose a framework dropdown on the right (at the bottom in mobile view).

AI Assistance

Help me add Vercel Speed Insights to this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Install @vercel/speed-insights. 2. Add the SpeedInsights component to my root layout. 3. Deploy with `vercel --prod` and verify Core Web Vitals data appears in the Vercel dashboard.

## [Prerequisites](#prerequisites)

* A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
* A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
* The Vercel CLI installed. If you don't have it, you can install it using the following command:

Terminal

```
pnpm i -g vercel
```

Version 2 package updates are available. For details, see [What's new in
version 2](/docs/speed-insights/package#what's-new-in-version-2.x).

## [Set up your project](#set-up-your-project)

1. ### [Enable Speed Insights in Vercel](#enable-speed-insights-in-vercel)

   On the Vercel dashboard, navigate to Speed Insights in the sidebar and select a project.
   Or select the button below to go there.

   Then click the Enable button in the dialog.

   Enabling Speed Insights will add new routes (scoped
   at `/_vercel/speed-insights/*` and `/<unique-path>/*`) after your next deployment.
2. ### [Add `@vercel/speed-insights` to your project](#add-@vercel/speed-insights-to-your-project)

   Using the package manager of your choice, add the `@vercel/speed-insights` package to your project:

   Terminal

   ```
   pnpm i @vercel/speed-insights
   ```
3. ### [Add the `SpeedInsights` component to your app](#add-the-speedinsights-component-to-your-app)

   The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with Next.js.

   Add the following component to the root layout:

   Add the following component to your main app file:

   app/layout.tsx

   ```
   import { SpeedInsights } from '@vercel/speed-insights/next';

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="en">
         <head>
           <title>Next.js</title>
         </head>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

   app/layout.jsx

   ```
   import { SpeedInsights } from '@vercel/speed-insights/next';

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <head>
           <title>Next.js</title>
         </head>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

   For versions of Next.js older than 13.5, import the `<SpeedInsights>` component from `@vercel/speed-insights/react`.

   Create a dedicated component to avoid opting out from SSR on the layout and pass the pathname of the route to the `SpeedInsights` component:

   app/insights.tsx

   ```
   'use client';

   import { SpeedInsights } from '@vercel/speed-insights/react';
   import { usePathname } from 'next/navigation';

   export function Insights() {
     const pathname = usePathname();

     return <SpeedInsights route={pathname} />;
   }
   ```

   app/insights.jsx

   ```
   'use client';

   import { SpeedInsights } from '@vercel/speed-insights/react';
   import { usePathname } from 'next/navigation';

   export function Insights() {
     const pathname = usePathname();

     return <SpeedInsights route={pathname} />;
   }
   ```

   Then, import the `Insights` component in your layout:

   app/layout.tsx

   ```
   import type { ReactNode } from 'react';
   import { Insights } from './insights';

   export default function RootLayout({ children }: { children: ReactNode }) {
     return (
       <html lang="en">
         <head>
           <title>Next.js</title>
         </head>
         <body>
           {children}
           <Insights />
         </body>
       </html>
     );
   }
   ```

   app/layout.jsx

   ```
   import { Insights } from './insights';

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <head>
           <title>Next.js</title>
         </head>
         <body>
           {children}
           <Insights />
         </body>
       </html>
     );
   }
   ```

   App.tsx

   ```
   import { SpeedInsights } from '@vercel/speed-insights/react';

   export default function App() {
     return (
       <div>
         {/* ... */}
         <SpeedInsights />
       </div>
     );
   }
   ```

   App.jsx

   ```
   import { SpeedInsights } from '@vercel/speed-insights/react';

   export default function App() {
     return (
       <div>
         {/* ... */}
         <SpeedInsights />
       </div>
     );
   }
   ```

   app/root.tsx

   ```
   import { SpeedInsights } from '@vercel/speed-insights/remix';

   export default function App() {
     return (
       <html lang="en">
         <body>
           {/* ... */}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

   app/root.jsx

   ```
   import { SpeedInsights } from '@vercel/speed-insights/remix';

   export default function App() {
     return (
       <html lang="en">
         <body>
           {/* ... */}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

   src/routes/+layout.ts

   ```
   import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

   injectSpeedInsights();
   ```

   src/routes/+layout.js

   ```
   import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

   injectSpeedInsights();
   ```

   index.html

   ```
   <script>
     window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
   </script>
   <script defer src="/<unique-path>/script.js"></script>
   ```

   index.html

   ```
   <script>
     window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
   </script>
   <script defer src="/<unique-path>/script.js"></script>
   ```

   src/App.vue

   ```
   <script setup lang="ts">
   import { SpeedInsights } from '@vercel/speed-insights/vue';
   </script>

   <template>
     <SpeedInsights />
   </template>
   ```

   src/App.vue

   ```
   <script setup>
   import { SpeedInsights } from '@vercel/speed-insights/vue';
   </script>

   <template>
     <SpeedInsights />
   </template>
   ```

   nuxt.config.ts

   ```
   export default defineNuxtConfig({
     modules: ['@vercel/speed-insights'],
   });
   ```

   nuxt.config.js

   ```
   export default defineNuxtConfig({
     modules: ['@vercel/speed-insights'],
   });
   ```

   main.ts

   ```
   import { injectSpeedInsights } from '@vercel/speed-insights';

   injectSpeedInsights();
   ```

   main.js

   ```
   import { injectSpeedInsights } from '@vercel/speed-insights';

   injectSpeedInsights();
   ```
4. ### [Deploy your app to Vercel](#deploy-your-app-to-vercel)

   You can deploy your app to Vercel's global [CDN](/docs/cdn) by running the following command from your terminal:

   terminal

   ```
   vercel deploy
   ```

   Alternatively, you can [connect your project's git repository](/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest pushes and merges to main.

   Once your app is deployed, it's ready to begin tracking performance metrics.

   If everything is set up correctly, you should be able to find the
   `/<unique-path>/script.js` script inside the head tag of your page.
5. ### [View your data in the dashboard](#view-your-data-in-the-dashboard)

   Once your app is deployed, and users have visited your site, you can view the data in the dashboard.

   To do so, go to your [dashboard](/dashboard), select your project, and click [Speed Insights](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fspeed-insights&title=Go+to+Speed+Insights) in the sidebar.

   After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see [Using Speed Insights](/docs/speed-insights/using-speed-insights).

Learn more about how Vercel supports [privacy and data compliance standards](/docs/speed-insights/privacy-policy) with Vercel Speed Insights.

## [Next steps](#next-steps)

Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:

* [Explore your Speed Insights dashboard](/docs/speed-insights/using-speed-insights)
* [Explore collected metrics](/docs/speed-insights/metrics)
* [Read about privacy and compliance](/docs/speed-insights/privacy-policy)
* [Learn how to configure your client-side package](/docs/speed-insights/package)
* [Learn how to sample your events and manage your costs](/docs/speed-insights/managing-usage)
* [Explore pricing](/docs/speed-insights/limits-and-pricing)
* [Troubleshooting](/docs/speed-insights/troubleshooting)

---

[Previous

Speed Insights](/docs/speed-insights)[Next

Using Speed Insights](/docs/speed-insights/using-speed-insights)

Was this helpful?
