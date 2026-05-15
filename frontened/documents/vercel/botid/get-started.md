Menu

# Get Started with BotID

Last updated February 26, 2026

This guide shows you how to add BotID protection to your Vercel project. BotID blocks automated bots while allowing real users through, protecting your APIs, forms, and sensitive endpoints from abuse.

The setup involves three main components:

* Client-side component to run challenges.
* Server-side verification to classify sessions.
* Route configuration to ensure requests are routed through BotID.

## [Step by step guide](#step-by-step-guide)

Before setting up BotID, ensure you have a JavaScript [project deployed](/docs/projects/managing-projects#creating-a-project) on Vercel.

1. ### [Install the package](#install-the-package)

   Add BotID to your project:

   Terminal

   ```
   pnpm i botid
   ```
2. ### [Configure redirects](#configure-redirects)

   Use the appropriate configuration method for your framework to set up proxy rewrites. This ensures that ad-blockers, third party scripts, and more won't make BotID any less effective.

   next.config.ts

   ```
   import { withBotId } from 'botid/next/config';

   const nextConfig = {
     // Your existing Next.js config
   };

   export default withBotId(nextConfig);
   ```

   next.config.js

   ```
   import { withBotId } from 'botid/next/config';

   const nextConfig = {
     // Your existing Next.js config
   };

   export default withBotId(nextConfig);
   ```

   nuxt.config.ts

   ```
   export default defineNuxtConfig({
     modules: ['botid/nuxt'],
   });
   ```

   nuxt.config.js

   ```
   export default defineNuxtConfig({
     modules: ['botid/nuxt'],
   });
   ```
3. ### [Add client-side protection](#add-client-side-protection)

   Choose the appropriate method for your framework:

   * Next.js 15.3+: Use `initBotId()` in `instrumentation-client.ts` for optimal performance
   * Other Next.js: Mount the `<BotIdClient/>` component in your layout `head`
   * Other frameworks: Call `initBotId()` during application initialization

   Next.js 15.3+ (Recommended)

   We recommend using `initBotId()` in
   [`instrumentation-client.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client)
   for better performance in Next.js 15.3+. For earlier versions, use the React
   component approach.

   instrumentation-client.ts

   ```
   import { initBotId } from 'botid/client/core';

   // Define the paths that need bot protection.
   // These are paths that are routed to by your app.
   // These can be:
   // - API endpoints (e.g., '/api/checkout')
   // - Server actions invoked from a page (e.g., '/dashboard')
   // - Dynamic routes (e.g., '/api/create/*')

   initBotId({
     protect: [
       {
         path: '/api/checkout',
         method: 'POST',
       },
       {
         // Wildcards can be used to expand multiple segments
         // /team/*/activate will match
         // /team/a/activate
         // /team/a/b/activate
         // /team/a/b/c/activate
         // ...
         path: '/team/*/activate',
         method: 'POST',
       },
       {
         // Wildcards can also be used at the end for dynamic routes
         path: '/api/user/*',
         method: 'POST',
       },
     ],
   });
   ```

   instrumentation-client.js

   ```
   import { initBotId } from 'botid/client/core';

   // Define the paths that need bot protection.
   // These are paths that are routed to by your app.
   // These can be:
   // - API endpoints (e.g., '/api/checkout')
   // - Server actions invoked from a page (e.g., '/dashboard')
   // - Dynamic routes (e.g., '/api/create/*')

   initBotId({
     protect: [
       {
         path: '/api/checkout',
         method: 'POST',
       },
       {
         // Wildcards can be used to expand multiple segments
         // /team/*/activate will match
         // /team/a/activate
         // /team/a/b/activate
         // /team/a/b/c/activate
         // ...
         path: '/team/*/activate',
         method: 'POST',
       },
       {
         // Wildcards can also be used at the end for dynamic routes
         path: '/api/user/*',
         method: 'POST',
       },
     ],
   });
   ```

   Next.js < 15.3

   app/layout.tsx

   ```
   import { BotIdClient } from 'botid/client';
   import { ReactNode } from 'react';

   const protectedRoutes = [
     {
       path: '/api/checkout',
       method: 'POST',
     },
   ];

   type RootLayoutProps = {
     children: ReactNode;
   };

   export default function RootLayout({ children }: RootLayoutProps) {
     return (
       <html lang="en">
         <head>
           <BotIdClient protect={protectedRoutes} />
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

   app/layout.js

   ```
   import { BotIdClient } from 'botid/client';
   import { ReactNode } from 'react';

   const protectedRoutes = [
     {
       path: '/api/checkout',
       method: 'POST',
     },
   ];

   type RootLayoutProps = {
     children: ReactNode;
   };

   export default function RootLayout({ children }: RootLayoutProps) {
     return (
       <html lang="en">
         <head>
           <BotIdClient protect={protectedRoutes} />
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

   app/layout.js

   ```
   import { BotIdClient } from 'botid/client';
   import { ReactNode } from 'react';

   const protectedRoutes = [
     {
       path: '/api/checkout',
       method: 'POST',
     },
   ];

   type RootLayoutProps = {
     children: ReactNode;
   };

   export default function RootLayout({ children }: RootLayoutProps) {
     return (
       <html lang="en">
         <head>
           <BotIdClient protect={protectedRoutes} />
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

   plugins/botid.client.ts

   ```
   import { initBotId } from 'botid/client/core';

   export default defineNuxtPlugin({
     enforce: 'pre',
     setup() {
       initBotId({
         protect: [{ path: '/api/post-data', method: 'POST' }],
       });
     },
   });
   ```

   plugins/botid.client.js

   ```
   import { initBotId } from 'botid/client/core';

   export default defineNuxtPlugin({
     enforce: 'pre',
     setup() {
       initBotId({
         protect: [{ path: '/api/post-data', method: 'POST' }],
       });
     },
   });
   ```

   src/hooks.client.ts

   ```
   import { initBotId } from 'botid/client/core';

   export function init() {
     initBotId({
       protect: [
         {
           path: '/api/post-data',
           method: 'POST',
         },
       ],
     });
   }
   ```

   src/hooks.client.js

   ```
   import { initBotId } from 'botid/client/core';

   export function init() {
     initBotId({
       protect: [
         {
           path: '/api/post-data',
           method: 'POST',
         },
       ],
     });
   }
   ```

   client.ts

   ```
   import { initBotId } from 'botid/client/core';

   export function init() {
     initBotId({
       protect: [
         {
           path: '/api/post-data',
           method: 'POST',
         },
       ],
     });
   }
   ```

   client.js

   ```
   import { initBotId } from 'botid/client/core';

   export function init() {
     initBotId({
       protect: [
         {
           path: '/api/post-data',
           method: 'POST',
         },
       ],
     });
   }
   ```
4. ### [Perform BotID checks on the server](#perform-botid-checks-on-the-server)

   Use `checkBotId()` on the routes configured in the `<BotIdClient/>` component.

   Important configuration requirements: - Not adding the protected route to
   `<BotIdClient />` will result in `checkBotId()` failing. The client side
   component dictates which requests to attach special headers to for
   classification purposes. - Local development always returns `isBot: false`
   unless you configure the `developmentOptions` option on `checkBotId()`. [Learn
   more about local development
   behavior](/docs/botid/local-development-behavior).

   Using API routes

   app/api/sensitive/route.ts

   ```
   import { checkBotId } from 'botid/server';
   import { NextRequest, NextResponse } from 'next/server';

   export async function POST(request: NextRequest) {
     const verification = await checkBotId();

     if (verification.isBot) {
       return NextResponse.json({ error: 'Access denied' }, { status: 403 });
     }

     const data = await processUserRequest(request);

     return NextResponse.json({ data });
   }

   async function processUserRequest(request: NextRequest) {
     // Your business logic here
     const body = await request.json();
     // Process the request...
     return { success: true };
   }
   ```

   app/api/sensitive/route.js

   ```
   import { checkBotId } from 'botid/server';
   import { NextResponse } from 'next/server';

   export async function POST(request) {
     const verification = await checkBotId();

     if (verification.isBot) {
       return NextResponse.json({ error: 'Access denied' }, { status: 403 });
     }

     const data = await processUserRequest(request);

     return NextResponse.json({ data });
   }

   async function processUserRequest(request) {
     // Your business logic here
     const body = await request.json();
     // Process the request...
     return { success: true };
   }
   ```

   Using Server Actions

   app/actions/create-user.ts

   ```
   'use server';

   import { checkBotId } from 'botid/server';

   export async function createUser(formData: FormData) {
     const verification = await checkBotId();

     if (verification.isBot) {
       throw new Error('Access denied');
     }

     const userData = {
       name: formData.get('name') as string,
       email: formData.get('email') as string,
     };

     const user = await saveUser(userData);
     return { success: true, user };
   }

   async function saveUser(userData: { name: string; email: string }) {
     // Your database logic here
     console.log('Saving user:', userData);
     return { id: '123', ...userData };
   }
   ```

   app/actions/create-user.js

   ```
   'use server';

   import { checkBotId } from 'botid/server';

   export async function createUser(formData) {
     const verification = await checkBotId();

     if (verification.isBot) {
       throw new Error('Access denied');
     }

     const userData = {
       name: formData.get('name'),
       email: formData.get('email'),
     };

     const user = await saveUser(userData);
     return { success: true, user };
   }

   async function saveUser(userData) {
     // Your database logic here
     console.log('Saving user:', userData);
     return { id: '123', ...userData };
   }
   ```

   sensitive.posts.ts

   ```
   import { checkBotId } from 'botid/server';

   export default defineEventHandler(async (event) => {
     const verification = await checkBotId();

     if (verification.isBot) {
       throw createError({
         statusCode: 403,
         statusMessage: 'Access denied',
       });
     }

     const data = await processUserRequest(event);

     return { data };
   });

   async function processUserRequest(event: any) {
     // Your business logic here
     const body = await readBody(event);
     // Process the request...
     return { success: true };
   }
   ```

   sensitive.posts.js

   ```
   import { checkBotId } from 'botid/server';

   export default defineEventHandler(async (event) => {
     const verification = await checkBotId();

     if (verification.isBot) {
       throw createError({
         statusCode: 403,
         statusMessage: 'Access denied',
       });
     }

     const data = await processUserRequest(event);

     return { data };
   });

   async function processUserRequest(event) {
     // Your business logic here
     const body = await readBody(event);
     // Process the request...
     return { success: true };
   }
   ```

   +server.ts

   ```
   import { checkBotId } from 'botid/server';
   import { json, error } from '@sveltejs/kit';
   import type { RequestHandler } from './$types';

   export const POST: RequestHandler = async ({ request }) => {
     const verification = await checkBotId();

     if (verification.isBot) {
       throw error(403, 'Access denied');
     }

     const data = await processUserRequest(request);

     return json({ data });
   };

   async function processUserRequest(request: Request) {
     // Your business logic here
     const body = await request.json();
     // Process the request...
     return { success: true };
   }
   ```

   +server.js

   ```
   import { checkBotId } from 'botid/server';
   import { json, error } from '@sveltejs/kit';
   import type { RequestHandler } from './$types';

   export const POST: RequestHandler = async ({ request }) => {
     const verification = await checkBotId();

     if (verification.isBot) {
       throw error(403, 'Access denied');
     }

     const data = await processUserRequest(request);

     return json({ data });
   };

   async function processUserRequest(request) {
     // Your business logic here
     const body = await request.json();
     // Process the request...
     return { success: true };
   }
   ```

   api/sensitive.ts

   ```
   import { checkBotId } from 'botid/server';

   export async function POST(request: Request) {
     const verification = await checkBotId();

     if (verification.isBot) {
       return Response.json({ error: 'Access denied' }, { status: 403 });
     }

     const data = await processUserRequest(request);

     return Response.json({ data });
   }

   async function processUserRequest(request: Request) {
     // Your business logic here
     const body = await request.json();
     // Process the request...
     return { success: true };
   }
   ```

   api/sensitive.js

   ```
   import { checkBotId } from 'botid/server';

   export async function POST(request) {
     const verification = await checkBotId();

     if (verification.isBot) {
       return Response.json({ error: 'Access denied' }, { status: 403 });
     }

     const data = await processUserRequest(request);

     return Response.json({ data });
   }

   async function processUserRequest(request) {
     // Your business logic here
     const body = await request.json();
     // Process the request...
     return { success: true };
   }
   ```

   BotID actively runs JavaScript on page sessions and sends headers to the
   server. If you test with `curl` or visit a protected route directly, BotID
   will block you in production. To effectively test, make a `fetch` request from
   a page in your application to the protected route.
5. ### [Enable BotID deep analysis in Vercel (Recommended)](#enable-botid-deep-analysis-in-vercel-recommended)

   BotID Deep Analysis are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

   From the [Vercel dashboard](/dashboard)

   * Select your Project
   * Click the Firewall tab
   * Click Rules
   * Enable Vercel BotID Deep Analysis

## [Complete examples](#complete-examples)

### [Next.js App Router example](#next.js-app-router-example)

Client-side code for the BotID Next.js implementation:

app/checkout/page.tsx

```
'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({
          product: formData.get('product'),
          quantity: formData.get('quantity'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      const data = await response.json();
      setMessage('Checkout successful!');
    } catch (error) {
      setMessage('Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleCheckout}>
      <input name="product" placeholder="Product ID" required />
      <input name="quantity" type="number" placeholder="Quantity" required />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Checkout'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

Server-side code for the BotID Next.js implementation:

app/api/checkout/route.ts

```
import { checkBotId } from 'botid/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Check if the request is from a bot
  const verification = await checkBotId();

  if (verification.isBot) {
    return NextResponse.json(
      { error: 'Bot detected. Access denied.' },
      { status: 403 },
    );
  }

  // Process the legitimate checkout request
  const body = await request.json();

  // Your checkout logic here
  const order = await processCheckout(body);

  return NextResponse.json({
    success: true,
    orderId: order.id,
  });
}

async function processCheckout(data: any) {
  // Implement your checkout logic
  return { id: 'order-123' };
}
```

---

[Previous

BotID](/docs/botid)[Next

Handling Verified Bots](/docs/botid/verified-bots)

Was this helpful?
