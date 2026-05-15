Menu

# Add the Vercel Toolbar to your local environment

Last updated February 17, 2026

To enable the toolbar in your local environment, add it to your project using the [`@vercel/toolbar`](https://www.npmjs.com/package/@vercel/toolbar) package, or with an injection script.

1. ### [Install the `@vercel/toolbar` package and link your project](#install-the-@vercel/toolbar-package-and-link-your-project)

   Install the package using the following command:

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

   To use the Vercel Toolbar locally in a Next.js project, define `withVercelToolbar` in your `next.config.js` file and export it, as shown below:

   next.config.js

   ```
   /** @type {import('next').NextConfig} */
   const createWithVercelToolbar = require('@vercel/toolbar/plugins/next');
   const nextConfig = {
     // Config options here
   };

   const withVercelToolbar = createWithVercelToolbar();
   // Instead of module.exports = nextConfig, do this:
   module.exports = withVercelToolbar(nextConfig);
   ```

   next.config.ts

   ```
   import type { NextConfig } from 'next';
   import createWithVercelToolbar from '@vercel/toolbar/plugins/next';

   const nextConfig: NextConfig = {
     // Config options here
   };

   const withVercelToolbar = createWithVercelToolbar();
   // Instead of export default nextConfig, do this:
   export default withVercelToolbar(nextConfig);
   ```

   next.config.js

   ```
   /** @type {import('next').NextConfig} */
   const createWithVercelToolbar = require('@vercel/toolbar/plugins/next');
   const nextConfig = {
     // Config options here
   };

   const withVercelToolbar = createWithVercelToolbar();
   // Instead of module.exports = nextConfig, do this:
   module.exports = withVercelToolbar(nextConfig);
   ```

   next.config.ts

   ```
   import type { NextConfig } from 'next';
   import createWithVercelToolbar from '@vercel/toolbar/plugins/next';

   const nextConfig: NextConfig = {
     // Config options here
   };

   const withVercelToolbar = createWithVercelToolbar();
   // Instead of export default nextConfig, do this:
   export default withVercelToolbar(nextConfig);
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

   index.ts

   ```
   <script
     src="https://vercel.live/_next-live/feedback/feedback.js"
     data-explicit-opt-in="true"
     data-owner-id="user-id-or-team-id-here"
     data-project-id="project-id-here"
     data-branch="branch-name-here"
   ></script>
   ```

   index.js

   ```
   <script
     src="https://vercel.live/_next-live/feedback/feedback.js"
     data-explicit-opt-in="true"
     data-owner-id="user-id-or-team-id-here"
     data-project-id="project-id-here"
     data-branch="branch-name-here"
   ></script>
   ```

   Then add the following code to your `layout.tsx` or `layout.jsx` file:

   app/layout.tsx

   ```
   import { VercelToolbar } from '@vercel/toolbar/next';

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     const shouldInjectToolbar = process.env.NODE_ENV === 'development';
     return (
       <html lang="en">
         <body>
           {children}
           {shouldInjectToolbar && <VercelToolbar />}
         </body>
       </html>
     );
   }
   ```

   app/layout.jsx

   ```
   import { VercelToolbar } from '@vercel/toolbar/next';

   export default function RootLayout(children) {
     const shouldInjectToolbar = process.env.NODE_ENV === 'development';
     return (
       <html lang="en">
         <body>
           {children}
           {shouldInjectToolbar && <VercelToolbar />}
         </body>
       </html>
     );
   }
   ```

---

[Previous

Add to Environments](/docs/vercel-toolbar/in-production-and-localhost)[Next

Add to Production](/docs/vercel-toolbar/in-production-and-localhost/add-to-production)

Was this helpful?
