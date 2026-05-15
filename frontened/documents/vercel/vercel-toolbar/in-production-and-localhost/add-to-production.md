Menu

# Add the Vercel Toolbar to your production environment

Last updated March 17, 2026

As a [team owner](/docs/rbac/access-roles#owner-role) or [member](/docs/rbac/access-roles#member-role), you can enable the toolbar in your production environment for sites that your team(s) own, either [through the dashboard](/docs/vercel-toolbar/managing-toolbar#enable-or-disable-the-toolbar-project-wide) or by [adding the `@vercel/toolbar` package](/docs/vercel-toolbar/in-production-and-localhost/add-to-production#adding-the-toolbar-using-the-@vercel/toolbar-package) to your project.

## [Adding the toolbar using the browser extension](#adding-the-toolbar-using-the-browser-extension)

For team members that use supported browsers and want the most straightforward experience, we recommend using the [Vercel Browser Extension](/docs/vercel-toolbar/browser-extension) to get access to the toolbar on your team's production sites.

For team members that use browsers for which a Vercel extension is not available, to allow toolbar access for everyone that accesses your site, or if you have more complex rules for when it shows in production, you'll need to [add the `@vercel/toolbar` package](/docs/vercel-toolbar/in-production-and-localhost/add-to-production#adding-the-toolbar-using-the-@vercel/toolbar-package) to your project.

## [Adding the toolbar using the `@vercel/toolbar` package](#adding-the-toolbar-using-the-@vercel/toolbar-package)

For team members that do not use the browser extension or if you have more complex rules for when the toolbar shows in production, you can add the `@vercel/toolbar` package to your project:

1. ### [Install the `@vercel/toolbar` package and link your project](#install-the-@vercel/toolbar-package-and-link-your-project)

   Install the package in your project using the following command:

   Terminal

   ```
   pnpm i @vercel/toolbar
   ```

   Then link your local project to your Vercel project with the [`vercel link`](/docs/cli/link) command using [Vercel CLI](/docs/cli).

   terminal

   ```
   vercel link [path-to-directory]
   ```
2. ### [Add the toolbar to your project](#add-the-toolbar-to-your-project)

   Before using the Vercel Toolbar in a production deployment Vercel recommends conditionally injecting the toolbar. Otherwise, all visitors will be prompted to log in when visiting your site.

   The following example demonstrates code that will show the Vercel Toolbar to a team member on a production deployment.

   vanilla-example.ts

   ```
   import { mountVercelToolbar } from '@vercel/toolbar';

   // You should inject the toolbar conditionally
   // to avoid showing it to all visitors
   mountVercelToolbar();
   ```

   vanilla-example.js

   ```
   import { mountVercelToolbar } from '@vercel/toolbar';

   // You should inject the toolbar conditionally
   // to avoid showing it to all visitors
   mountVercelToolbar();
   ```

   pages/\_app.tsx

   ```
   import { VercelToolbar } from '@vercel/toolbar/next';
   import type { AppProps } from 'next/app';

   function useIsEmployee() {
     // Replace this stub with your auth library implementation
     return false;
   }

   export default function MyApp({ Component, pageProps }: AppProps) {
     const isEmployee = useIsEmployee();

     return (
       <>
         <Component {...pageProps} />
         {isEmployee ? <VercelToolbar /> : null}
       </>
     );
   }
   ```

   pages/\_app.jsx

   ```
   import { VercelToolbar } from '@vercel/toolbar/next';

   function useIsEmployee() {
     // Replace this stub with your auth library implementation
     return false;
   }

   export default function MyApp({ Component, pageProps }) {
     const isEmployee = useIsEmployee();

     return (
       <>
         <Component {...pageProps} />
         {isEmployee ? <VercelToolbar /> : null}
       </>
     );
   }
   ```

   components/staff-toolbar.tsx

   ```
   'use client';

   import { VercelToolbar } from '@vercel/toolbar/next';

   function useIsEmployee() {
     // Replace this stub with your auth library hook
     return false;
   }

   export function StaffToolbar() {
     const isEmployee = useIsEmployee();
     return isEmployee ? <VercelToolbar /> : null;
   }
   ```

   app/layout.tsx

   ```
   import { Suspense, type ReactNode } from 'react';
   import { StaffToolbar } from '../components/staff-toolbar';

   export default function RootLayout({ children }: { children: ReactNode }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Suspense fallback={null}>
             <StaffToolbar />
           </Suspense>
         </body>
       </html>
     );
   }
   ```

   @components/staff-toolbar

   ```
   'use client';

   import { VercelToolbar } from '@vercel/toolbar/next';

   function useIsEmployee() {
     // Replace this stub with your auth library hook
     return false;
   }

   export function StaffToolbar() {
     const isEmployee = useIsEmployee();
     return isEmployee ? <VercelToolbar /> : null;
   }
   ```

   app/layout.jsx

   ```
   import { Suspense } from 'react';
   import { StaffToolbar } from '../components/staff-toolbar';

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Suspense fallback={null}>
             <StaffToolbar />
           </Suspense>
         </body>
       </html>
     );
   }
   ```

   nuxt.config.js

   ```
   export default defineNuxtConfig({
     modules: ['@vercel/toolbar'],
     vercelToolbar: {
       mode: 'manual',
     },
   });
   ```

   nuxt.config.ts

   ```
   export default defineNuxtConfig({
     modules: ['@vercel/toolbar'],
     vercelToolbar: {
       mode: 'manual',
     },
   });
   ```

   app/plugins/toolbar.client.js

   ```
   import { useAuth } from 'lib/auth'; // Your auth library
   export default defineNuxtPlugin(() => {
     const auth = useAuth();

     onNuxtReady(async () => {
       if (!auth.isEmployee()) return;

       const { mountVercelToolbar } = await import('@vercel/toolbar/vite');
       mountVercelToolbar();
     });
   });
   ```

   app/plugins/toolbar.client.ts

   ```
   import { useAuth } from 'lib/auth'; // Your auth library
   export default defineNuxtPlugin(() => {
     const auth = useAuth();

     onNuxtReady(async () => {
       if (!auth.isEmployee()) return;

       const { mountVercelToolbar } = await import('@vercel/toolbar/vite');
       mountVercelToolbar();
     });
   });
   ```

   vite.config.js

   ```
   import { sveltekit } from '@sveltejs/kit/vite';
   import { vercelToolbar } from '@vercel/toolbar/plugins/vite';
   import { defineConfig } from 'vite';

   export default defineConfig({
     plugins: [sveltekit(), vercelToolbar()],
   });
   ```

   vite.config.ts

   ```
   import { sveltekit } from '@sveltejs/kit/vite';
   import { vercelToolbar } from '@vercel/toolbar/plugins/vite';
   import { defineConfig } from 'vite';

   export default defineConfig({
     plugins: [sveltekit(), vercelToolbar()],
   });
   ```

   src/routes/+layout.svelte

   ```
   <script lang="ts">
     import { mountVercelToolbar } from '@vercel/toolbar/vite';
     import { onMount } from 'svelte';

     // You should inject the toolbar conditionally
     // to avoid showing it to all visitors
     onMount(() => mountVercelToolbar());
   </script>
   ```

   src/routes/+layout.svelte

   ```
   <script>
     import {mountVercelToolbar} from '@vercel/toolbar/vite';
     import {onMount} from 'svelte';
     // You should inject the toolbar conditionally
     // to avoid showing it to all visitors
     onMount(() => mountVercelToolbar());
   </script>
   ```
3. ### [Managing notifications and integrations for Comments on production](#managing-notifications-and-integrations-for-comments-on-production)

   Unlike comments on preview deployments, alerts for new comments won't be sent to a specific user by default. Vercel recommends [linking your project to Slack with the integration](/docs/comments/integrations#use-the-vercel-slack-app), or directly mentioning someone when starting a new comment thread in production to ensure new comments are seen.

## [Enabling the Vercel Toolbar](#enabling-the-vercel-toolbar)

Alternatively to using the package, you can enable access to the Vercel Toolbar for your production environment at the team or project level. Once enabled, team members can access the toolbar using the [Vercel Browser Extension](/docs/vercel-toolbar/browser-extension) or by [enabling it in the toolbar menu](#accessing-the-toolbar-using-the-toolbar-menu).

1. Navigate to [your Vercel dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and make sure that you have selected your team from the team switcher. To manage the toolbar at the project level, ensure that you have selected the project.
2. From your [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), open Settings in the sidebar.
3. In the General section, find Vercel Toolbar.
4. Under each environment (Preview and Production), select either On or Off from the dropdown to determine the visibility of the Vercel Toolbar for that environment.
5. Once set at the team level, you can optionally choose to allow the setting to be overridden at the project level.

![The dashboard setting to enable or disable the toolbar at the team level.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fteam-level-toolbar-management-light.png&w=1920&q=75)![The dashboard setting to enable or disable the toolbar at the team level.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fteam-level-toolbar-management-dark.png&w=1920&q=75)

The dashboard setting to enable or disable the toolbar at the team level.

### [Disabling the toolbar](#disabling-the-toolbar)

If you have noticed that the toolbar is showing up for team members on your production sites, you can disable it at either the team or project level:

1. Navigate to [your Vercel dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and make sure that you have selected your team from the team switcher. To manage the toolbar at the project level, ensure that you have selected the project.
2. From your [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), open Settings in the sidebar.
3. In the General section, find Vercel Toolbar.
4. Under Production select Off from the dropdown.

## [Acessing the toolbar using the Vercel dashboard](#acessing-the-toolbar-using-the-vercel-dashboard)

You can send team members and users a production deployment with the Vercel Toolbar included from the dashboard. To do so:

1. From your dashboard, go to your project and open Projects in the sidebar. Alternatively, you can also use the deployment overview page.
2. Click the dropdown on the Visit button and select Visit with Toolbar. This will take you to your production deployment with the toolbar showing and active.

This will not show for users who have the browser extension installed, as the extension will already show the toolbar whenever you visit your production deployment unless it is disabled in team or project settings.

## [Accessing the toolbar using the Browser extension](#accessing-the-toolbar-using-the-browser-extension)

Provided [the Vercel toolbar is enabled](/docs/vercel-toolbar/managing-toolbar#enable-or-disable-the-toolbar-project-wide) for your project, any team member can use the Vercel Toolbar in your production environment by installing the [Vercel Browser Extension](/docs/vercel-toolbar/browser-extension). The extension allows you to access the toolbar on any website hosted on Vercel that your team(s) own:

1. Install the [Vercel Browser Extension](/docs/vercel-toolbar/browser-extension).
2. Ensure that you are logged in to your Vercel account on vercel.com. You must be signed in for the extension to know which domains you own.
3. Ensure that you have deployed to production. Older deployments do not support injection through the browser extension.
4. Ensure that any team members that need access to the toolbar in production follow these steps to install the domain.

## [Accessing the toolbar using the toolbar menu](#accessing-the-toolbar-using-the-toolbar-menu)

Provided [the Vercel toolbar is enabled](/docs/vercel-toolbar/managing-toolbar#enable-or-disable-the-toolbar-project-wide) for your project, you can enable the toolbar on production environments from the toolbar menu:

1. Open a preview deployment of your project.
2. Select the menu icon in the toolbar.
3. Scroll down to Enable Vercel Toolbar in Production and select it.
4. Choose the domain you want to enable the toolbar on.

---

[Previous

Add to Localhost](/docs/vercel-toolbar/in-production-and-localhost/add-to-localhost)[Next

Managing Toolbar](/docs/vercel-toolbar/managing-toolbar)

Was this helpful?
