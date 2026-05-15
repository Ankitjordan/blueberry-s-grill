Menu

# Getting started with Vercel Web Analytics

Last updated March 11, 2026

This guide will help you get started with using Vercel Web Analytics on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

Select your framework to view instructions on using the Vercel Web Analytics in your project.

AI Assistance

Help me add Vercel Web Analytics to this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Install @vercel/analytics. 2. Add the Analytics component to my root layout. 3. Deploy with `vercel --prod` and verify analytics data appears in the Vercel dashboard.

## [Prerequisites](#prerequisites)

* A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
* A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
* The Vercel CLI installed. If you don't have it, you can install it using the following command:

Terminal

```
pnpm i -g vercel
```

Version 2 package updates are available. For details, see [What's new in
version 2](/docs/analytics/package#what's-new-in-version-2.x).

## [Set up your project](#set-up-your-project)

1. ### [Enable Web Analytics in Vercel](#enable-web-analytics-in-vercel)

   On the Vercel dashboard, navigate to Analytics in the sidebar and select a project.
   Or select the button below to go there.

   Then click the Enable button in the header.

   Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*` and `/<unique-path>/*`)
   after your next deployment.
2. ### [Add `@vercel/analytics` to your project](#add-@vercel/analytics-to-your-project)

   Using the package manager of your choice, add the `@vercel/analytics` package to your project:

   Terminal

   ```
   pnpm i @vercel/analytics
   ```
3. ### [Add the `Analytics` component to your app](#add-the-analytics-component-to-your-app)

   pages/\_app.tsx

   ```
   import type { AppProps } from 'next/app';
   import { Analytics } from '@vercel/analytics/next';

   function MyApp({ Component, pageProps }: AppProps) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     );
   }

   export default MyApp;
   ```

   pages/\_app.js

   ```
   import { Analytics } from '@vercel/analytics/next';

   function MyApp({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     );
   }

   export default MyApp;
   ```

   The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.

   Add the following code to the root layout:

   app/layout.tsx

   ```
   import { Analytics } from '@vercel/analytics/next';

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
           <Analytics />
         </body>
       </html>
     );
   }
   ```

   app/layout.jsx

   ```
   import { Analytics } from '@vercel/analytics/next';

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <head>
           <title>Next.js</title>
         </head>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

   app/root.tsx

   ```
   import {
     Links,
     LiveReload,
     Meta,
     Outlet,
     Scripts,
     ScrollRestoration,
   } from '@remix-run/react';
   import { Analytics } from '@vercel/analytics/remix';

   export default function App() {
     return (
       <html lang="en">
         <head>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <Meta />
           <Links />
         </head>
         <body>
           <Analytics />
           <Outlet />
           <ScrollRestoration />
           <Scripts />
           <LiveReload />
         </body>
       </html>
     );
   }
   ```

   app/root.jsx

   ```
   import {
     Links,
     LiveReload,
     Meta,
     Outlet,
     Scripts,
     ScrollRestoration,
   } from '@remix-run/react';
   import { Analytics } from '@vercel/analytics/remix';

   export default function App() {
     return (
       <html lang="en">
         <head>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <Meta />
           <Links />
         </head>
         <body>
           <Analytics />
           <Outlet />
           <ScrollRestoration />
           <Scripts />
           <LiveReload />
         </body>
       </html>
     );
   }
   ```

   nuxt.config.ts

   ```
   export default defineNuxtConfig({
     modules: ['@vercel/analytics'],
   });
   ```

   nuxt.config.js

   ```
   export default defineNuxtConfig({
     modules: ['@vercel/analytics'],
   });
   ```

   src/routes/+layout.ts

   ```
   import { dev } from '$app/environment';
   import { injectAnalytics } from '@vercel/analytics/sveltekit';

   injectAnalytics({ mode: dev ? 'development' : 'production' });
   ```

   src/routes/+layout.js

   ```
   import { dev } from '$app/environment';
   import { injectAnalytics } from '@vercel/analytics/sveltekit';

   injectAnalytics({ mode: dev ? 'development' : 'production' });
   ```

   src/layouts/Base.astro

   ```
   ---
   import Analytics from '@vercel/analytics/astro';
   {/* ... */}
   ---

   <html lang="en">
   	<head>
       <meta charset="utf-8" />
       <!-- ... -->
       <Analytics />
   	</head>
   	<body>
   		<slot />
     </body>
   </html>
   ```

   src/layouts/Base.astro

   ```
   ---
   import Analytics from '@vercel/analytics/astro';
   {/* ... */}
   ---

   <html lang="en">
   	<head>
       <meta charset="utf-8" />
       <!-- ... -->
       <Analytics />
   	</head>
   	<body>
   		<slot />
     </body>
   </html>
   ```

   astro.config.mjs

   ```
   import { defineConfig } from 'astro/config';
   import vercel from '@astrojs/vercel/serverless';

   export default defineConfig({
     output: 'server',
     adapter: vercel({
       webAnalytics: {
         enabled: true, // set to false when using @vercel/analytics@1.4.0
       },
     }),
   });
   ```

   astro.config.mjs

   ```
   import { defineConfig } from 'astro/config';
   import vercel from '@astrojs/vercel/serverless';

   export default defineConfig({
     output: 'server',
     adapter: vercel({
       webAnalytics: {
         enabled: true, // set to false when using @vercel/analytics@1.4.0
       },
     }),
   });
   ```

   index.html

   ```
   <script>
     window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
   </script>
   <script defer src="/<unique-path>/script.js"></script>
   ```

   index.html

   ```
   <script>
     window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
   </script>
   <script defer src="/<unique-path>/script.js"></script>
   ```

   main.ts

   ```
   import { inject } from '@vercel/analytics';

   inject();
   ```

   main.js

   ```
   import { inject } from '@vercel/analytics';

   inject();
   ```

   App.tsx

   ```
   import { Analytics } from '@vercel/analytics/react';

   export default function App() {
     return (
       <div>
         {/* ... */}
         <Analytics />
       </div>
     );
   }
   ```

   App.jsx

   ```
   import { Analytics } from '@vercel/analytics/react';

   export default function App() {
     return (
       <div>
         {/* ... */}
         <Analytics />
       </div>
     );
   }
   ```

   src/App.vue

   ```
   <script setup lang="ts">
   import { Analytics } from '@vercel/analytics/vue';
   </script>

   <template>
     <Analytics />
     <!-- your content -->
   </template>
   ```

   src/App.vue

   ```
   <script setup>
   import { Analytics } from '@vercel/analytics/vue';
   </script>

   <template>
     <Analytics />
     <!-- your content -->
   </template>
   ```
4. ### [Deploy your app to Vercel](#deploy-your-app-to-vercel)

   Deploy your app using the following command:

   terminal

   ```
   vercel deploy
   ```

   If you haven't already, we also recommend [connecting your project's Git repository](/docs/git#deploying-a-git-repository),
   which will enable Vercel to deploy your latest commits to main without terminal commands.

   Once your app is deployed, it will start tracking visitors and page views.

   If everything is set up properly, you should be able to see a Fetch/XHR
   request in your browser's Network tab from `/<unique-path>/view` when you
   visit any page.
5. ### [View your data in the dashboard](#view-your-data-in-the-dashboard)

   Once your app is deployed, and users have visited your site, you can view your data in the dashboard.

   To do so, go to your [dashboard](/dashboard), select your project, and click [Analytics](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fanalytics&title=Go+to+Analytics) in the sidebar.

   After a few days of visitors, you'll be able to start exploring your data by viewing and [filtering](/docs/analytics/filtering) the panels.

   Users on Pro and Enterprise plans can also add [custom events](/docs/analytics/custom-events) to their data to track user interactions such as button clicks, form submissions, or purchases.

Learn more about how Vercel supports [privacy and data compliance standards](/docs/analytics/privacy-policy) with Vercel Web Analytics.

## [Next steps](#next-steps)

Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:

* [Explore your analytics dashboard](/docs/analytics/using-web-analytics)
* [Learn how to set up custom events](/docs/analytics/custom-events)
* [Learn how to redact sensitive data](/docs/analytics/redacting-sensitive-data)
* [Read about privacy and compliance](/docs/analytics/privacy-policy)
* [Learn how to configure your client-side package](/docs/analytics/package)
* [Explore pricing](/docs/analytics/limits-and-pricing)
* [Troubleshooting](/docs/analytics/troubleshooting)

---

[Previous

Web Analytics](/docs/analytics)[Next

Using Web Analytics](/docs/analytics/using-web-analytics)

Was this helpful?
