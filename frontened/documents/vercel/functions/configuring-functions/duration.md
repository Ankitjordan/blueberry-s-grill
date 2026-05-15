Title: Configuring Maximum Duration for Vercel Functions

URL Source: https://vercel.com/docs/functions/configuring-functions/duration

Markdown Content:
# Configuring Maximum Duration for Vercel Functions
[Skip to content](https://vercel.com/docs/functions/configuring-functions/duration#geist-skip-nav)

[](https://vercel.com/home)![Image 1: Vercel](https://vercel.com/vc-ap-vercel-docs/_next/static/media/vercel-light.23p4dw77xj4pk.svg?dpl=dpl_5DfGMJKhYjqrAbKHZE8dD5mremRJ)![Image 2: Vercel](https://vercel.com/vc-ap-vercel-docs/_next/static/media/vercel-dark.05qiau0oi3y6n.svg?dpl=dpl_5DfGMJKhYjqrAbKHZE8dD5mremRJ)

*   Products

    *   ##### [AI Cloud](https://vercel.com/ai)

        *   [AI Gateway One endpoint, all your models](https://vercel.com/ai-gateway)
        *   [Sandbox Isolated, safe code execution](https://vercel.com/sandbox)
        *   [Vercel Agent An agent that knows your stack](https://vercel.com/agent)
        *   [AI SDK The AI Toolkit for TypeScript](https://sdk.vercel.ai/)
        *   [v0 Build applications with AI](https://v0.app/)

    *   ##### Core Platform

        *   [CI/CD Helping teams ship 6× faster](https://vercel.com/products/previews)
        *   [Content Delivery Fast, scalable, and reliable](https://vercel.com/cdn)
        *   [Fluid Compute Servers, in serverless form](https://vercel.com/fluid)
        *   [Workflow Long-running workflows at scale](https://vercel.com/workflows)
        *   [Observability Trace every step](https://vercel.com/products/observability)

    *   ##### [Security](https://vercel.com/security)

        *   [Bot Management Scalable bot protection](https://vercel.com/security/bot-management)
        *   [BotID Invisible CAPTCHA](https://vercel.com/botid)
        *   [Platform Security DDoS Protection, Firewall](https://vercel.com/security)
        *   [Web Application Firewall Granular, custom protection](https://vercel.com/security/web-application-firewall)

*   Resources

    *   ##### Company

        *   [Customers Trusted by the best teams](https://vercel.com/customers)
        *   [Blog The latest posts and changes](https://vercel.com/blog)
        *   [Changelog See what shipped](https://vercel.com/changelog)
        *   [Press Read the latest news](https://vercel.com/press)
        *   [Events Join us at an event](https://vercel.com/events)

    *   ##### Learn

        *   [Docs Vercel documentation](https://vercel.com/docs)
        *   [Academy Linear courses to level up](https://vercel.com/academy)
        *   [Knowledge Base Find help quickly](https://vercel.com/kb)
        *   [Community Join the conversation](https://community.vercel.com/)

    *   ##### Open Source

        *   [Next.js The native Next.js platform](https://vercel.com/frameworks/nextjs)
        *   [Nuxt The progressive web framework](https://nuxt.com/)
        *   [Svelte The web’s efficient UI framework](https://svelte.dev/)
        *   [Turborepo Speed with Enterprise scale](https://vercel.com/solutions/turborepo)

*   Solutions

    *   ##### Use Cases

        *   [AI Apps Deploy at the speed of AI](https://vercel.com/ai)
        *   [Composable Commerce Power storefronts that convert](https://vercel.com/solutions/composable-commerce)
        *   [Marketing Sites Launch campaigns fast](https://vercel.com/solutions/marketing-sites)
        *   [Multi-tenant Platforms Scale apps with one codebase](https://vercel.com/solutions/multi-tenant-saas)
        *   [Web Apps Ship features, not infrastructure](https://vercel.com/solutions/web-apps)

    *   ##### Tools

        *   [Marketplace Extend and automate workflows](https://vercel.com/marketplace)
        *   [Templates Jumpstart app development](https://vercel.com/templates)
        *   [Partner Finder Get help from solution partners](https://vercel.com/partners/solution-partners)

    *   ##### Users

        *   [Platform Engineers Automate away repetition](https://vercel.com/solutions/platform-engineering)
        *   [Design Engineers Deploy for every idea](https://vercel.com/solutions/design-engineering)

*   [Enterprise](https://vercel.com/enterprise)
*   [Pricing](https://vercel.com/pricing)

Search Documentation Search...⌘ K

Ask AI

Search Documentation Search...⌘ K

Ask AI

[Functions](https://vercel.com/docs/functions)

[Configuring Functions](https://vercel.com/docs/functions/configuring-functions)

Duration

Next.js (/app)

Choose a framework to optimize documentation to:

*    Next.js (/app)
*    Next.js (/pages)
*    SvelteKit
*    Nuxt
*    Remix
*    Astro
*    Other frameworks

*   [Getting Started](https://vercel.com/docs/getting-started-with-vercel)  
*   [Fundamental Concepts](https://vercel.com/docs/fundamentals) Expand menu 
*   [Supported Frameworks](https://vercel.com/docs/frameworks) Expand menu 
*   [Incremental Migration](https://vercel.com/docs/incremental-migration)  
*   [Production Checklist](https://vercel.com/docs/production-checklist)  
*   [Knowledge Base](https://vercel.com/kb)  
*   APIs & SDKs Expand menu 

* * *

*   Access Expand menu 
*   AI Expand menu 
*   Build & Deploy Expand menu 
*   CDN Expand menu 
*   [CLI](https://vercel.com/docs/cli) Expand menu 
*   Collaboration Expand menu 
*   Compute Expand menu 
    *   [Fluid Compute](https://vercel.com/docs/fluid-compute)  
    *   [Functions](https://vercel.com/docs/functions) Expand menu 
        *   [Getting Started](https://vercel.com/docs/functions/quickstart)  
        *   [Streaming](https://vercel.com/docs/functions/streaming-functions)  
        *   [Runtimes](https://vercel.com/docs/functions/runtimes) Expand menu 
        *   [Configuring Functions](https://vercel.com/docs/functions/configuring-functions) Expand menu 
            *    [Duration](https://vercel.com/docs/functions/configuring-functions/duration)  
            *   [Memory](https://vercel.com/docs/functions/configuring-functions/memory)  
            *   [Runtime](https://vercel.com/docs/functions/configuring-functions/runtime)  
            *   [Region](https://vercel.com/docs/functions/configuring-functions/region)  
            *   [Advanced Configuration](https://vercel.com/docs/functions/configuring-functions/advanced-configuration)  

        *   [API Reference](https://vercel.com/docs/functions/functions-api-reference) Expand menu 
        *   [Logs](https://vercel.com/docs/functions/logs)  
        *   [Limits](https://vercel.com/docs/functions/limitations)  
        *   [Concurrency Scaling](https://vercel.com/docs/functions/concurrency-scaling)  
        *   [Debug Slow Functions](https://vercel.com/docs/functions/debug-slow-functions)  
        *   [Pricing](https://vercel.com/docs/functions/usage-and-pricing) Expand menu 

    *   [Routing Middleware](https://vercel.com/docs/routing-middleware) Expand menu 
    *   [Cron Jobs](https://vercel.com/docs/cron-jobs) Expand menu 
    *   [OG Image Generation](https://vercel.com/docs/og-image-generation) Expand menu 
    *   [Sandbox](https://vercel.com/docs/vercel-sandbox) Expand menu 
    *   [Queues beta](https://vercel.com/docs/queues) Expand menu 
    *   [Workflows](https://vercel.com/docs/workflows) Expand menu 

*   [Flags](https://vercel.com/docs/flags) Expand menu 
*   Integrations Expand menu 
*   [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
*   Observability Expand menu 
*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 

[Functions](https://vercel.com/docs/functions)

[Configuring Functions](https://vercel.com/docs/functions/configuring-functions)

Duration

# Configuring Maximum Duration for Vercel Functions

Ask AI about this page

Last updated February 27, 2026

The maximum duration configuration determines the longest time that a function can run. This guide will walk you through configuring the maximum duration for your Vercel Functions.

## [Consequences of changing the maximum duration](https://vercel.com/docs/functions/configuring-functions/duration#consequences-of-changing-the-maximum-duration)[](https://vercel.com/docs/functions/configuring-functions/duration#consequences-of-changing-the-maximum-duration)

You are charged based on the amount of time your function has run, also known as its _duration_. It specifically refers to the _actual time_ elapsed during the entire invocation, regardless of whether that time was actively used for processing or spent waiting for a streamed response. To learn more see [Managing function duration](https://vercel.com/docs/functions/usage-and-pricing#managing-function-duration).

For this reason, Vercel has set a [default maximum duration](https://vercel.com/docs/functions/limitations#max-duration) for functions, which can be useful for preventing runaway functions from consuming resources indefinitely.

If a function runs for longer than its set maximum duration, Vercel will terminate it. Therefore, when setting this duration, it's crucial to strike a balance:

1.   Allow sufficient time for your function to complete its normal operations, including any necessary waiting periods (for example, streamed responses).
2.   Set a reasonable limit to prevent abnormally long executions.

## [Maximum duration for different runtimes](https://vercel.com/docs/functions/configuring-functions/duration#maximum-duration-for-different-runtimes)[](https://vercel.com/docs/functions/configuring-functions/duration#maximum-duration-for-different-runtimes)

The method of configuring the maximum duration depends on your framework and runtime:

#### [Node.js, Next.js (>= 13.5 or higher), SvelteKit, Astro, Nuxt, and Remix](https://vercel.com/docs/functions/configuring-functions/duration#node.js-next.js-%3E=-13.5-or-higher-sveltekit-astro-nuxt-and-remix)[](https://vercel.com/docs/functions/configuring-functions/duration#node.js-next.js-%3E=-13.5-or-higher-sveltekit-astro-nuxt-and-remix)

For these runtimes / frameworks, you can configure the number of seconds directly in your function:

app/api/my-function/route.ts

```
export const maxDuration = 5; // This function can run for a maximum of 5 seconds
 
export function GET(request: Request) {
  return new Response('Vercel', {
    status: 200,
  });
}
```

[Open in Open in v0](https://v0.app/chat?q=%20%20Create%20a%20minimal%20example%20app%20for%20this%20code:%20export%20const%20maxDuration%20=%205;%20//%20This%20function%20can%20run%20for%20a%20maximum%20of%205%20seconds%20export%20function%20GET(request:%20Request)%20{%20%20return%20new%20Response(%27Vercel%27,%20{%20%20%20%20status:%20200,%20%20});}%20In%20your%20response:%20%201.%20Keep%20the%20example%20simple%20and%20focused%20on%20demonstrating%20the%20core%20functionality%20of%20the%20code%20%202.%20DO%20NOT%20include%20unnecessary%20features%20or%20complexity,%20aim%20to%20only%20showcase%20the%20essential%20parts%20%203.%20Show%20the%20code%20in%20a%20way%20that%20is%20easy%20to%20understand%20and%20implement%20%204.%20Provide%20clear%20and%20concise%20explanations%20for%20each%20part%20of%20the%20code)

```
export const maxDuration = 5; // This function can run for a maximum of 5 seconds
 
export function GET(request) {
  return new Response('Vercel', {
    status: 200,
  });
}
```

[Open in Open in v0](https://v0.app/chat?q=%20%20Create%20a%20minimal%20example%20app%20for%20this%20code:%20export%20const%20maxDuration%20=%205;%20//%20This%20function%20can%20run%20for%20a%20maximum%20of%205%20seconds%20export%20function%20GET(request)%20{%20%20return%20new%20Response(%27Vercel%27,%20{%20%20%20%20status:%20200,%20%20});}%20In%20your%20response:%20%201.%20Keep%20the%20example%20simple%20and%20focused%20on%20demonstrating%20the%20core%20functionality%20of%20the%20code%20%202.%20DO%20NOT%20include%20unnecessary%20features%20or%20complexity,%20aim%20to%20only%20showcase%20the%20essential%20parts%20%203.%20Show%20the%20code%20in%20a%20way%20that%20is%20easy%20to%20understand%20and%20implement%20%204.%20Provide%20clear%20and%20concise%20explanations%20for%20each%20part%20of%20the%20code)

```
import { NextApiRequest, NextApiResponse } from 'next';
 
// This function can run for a maximum of 5 seconds
export const config = {
  maxDuration: 5,
};
 
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
```

[Open in Open in v0](https://v0.app/chat?q=%20%20Create%20a%20minimal%20example%20app%20for%20this%20code:%20import%20{%20NextApiRequest,%20NextApiResponse%20}%20from%20%27next%27;%20//%20This%20function%20can%20run%20for%20a%20maximum%20of%205%20secondsexport%20const%20config%20=%20{%20%20maxDuration:%205,};%20export%20default%20function%20handler(%20%20request:%20NextApiRequest,%20%20response:%20NextApiResponse,)%20{%20%20response.status(200).json({%20%20%20%20body:%20request.body,%20%20%20%20query:%20request.query,%20%20%20%20cookies:%20request.cookies,%20%20});}%20In%20your%20response:%20%201.%20Keep%20the%20example%20simple%20and%20focused%20on%20demonstrating%20the%20core%20functionality%20of%20the%20code%20%202.%20DO%20NOT%20include%20unnecessary%20features%20or%20complexity,%20aim%20to%20only%20showcase%20the%20essential%20parts%20%203.%20Show%20the%20code%20in%20a%20way%20that%20is%20easy%20to%20understand%20and%20implement%20%204.%20Provide%20clear%20and%20concise%20explanations%20for%20each%20part%20of%20the%20code)

```
// This function can run for a maximum of 5 seconds
export const config = {
  maxDuration: 5,
};
 
export default function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
```

[Open in Open in v0](https://v0.app/chat?q=%20%20Create%20a%20minimal%20example%20app%20for%20this%20code:%20//%20This%20function%20can%20run%20for%20a%20maximum%20of%205%20secondsexport%20const%20config%20=%20{%20%20maxDuration:%205,};%20export%20default%20function%20handler(request,%20response)%20{%20%20response.status(200).json({%20%20%20%20body:%20request.body,%20%20%20%20query:%20request.query,%20%20%20%20cookies:%20request.cookies,%20%20});}%20In%20your%20response:%20%201.%20Keep%20the%20example%20simple%20and%20focused%20on%20demonstrating%20the%20core%20functionality%20of%20the%20code%20%202.%20DO%20NOT%20include%20unnecessary%20features%20or%20complexity,%20aim%20to%20only%20showcase%20the%20essential%20parts%20%203.%20Show%20the%20code%20in%20a%20way%20that%20is%20easy%20to%20understand%20and%20implement%20%204.%20Provide%20clear%20and%20concise%20explanations%20for%20each%20part%20of%20the%20code)

```
// This function can run for a maximum of 5 seconds
export const config = {
  maxDuration: 5,
};
 
export default function Serverless() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Configuring maxDuration</h1>
    </div>
  );
}
```

```
// This function can run for a maximum of 5 seconds
export const config = {
  maxDuration: 5,
};
 
export default function Serverless() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Configuring maxDuration</h1>
    </div>
  );
}
```

```
import adapter from '@sveltejs/adapter-vercel';
 
// This function can run for a maximum of 5 seconds
export default {
  kit: {
    adapter: adapter({
      maxDuration: 5,
    }),
  },
};
```

```
import adapter from '@sveltejs/adapter-vercel';
 
// This function can run for a maximum of 5 seconds
export default {
  kit: {
    adapter: adapter({
      maxDuration: 5,
    }),
  },
};
```

```
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
 
// This function can run for a maximum of 5 seconds
export default defineConfig({
  output: 'server',
  adapter: vercel({
    maxDuration: 5,
  }),
});
```

```
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
 
// This function can run for a maximum of 5 seconds
export default defineConfig({
  output: 'server',
  adapter: vercel({
    maxDuration: 5,
  }),
});
```

```
import { defineNitroConfig } from 'nitropack';
 
// This function can run for a maximum of 5 seconds
export default defineNitroConfig({
  vercel: {
    functions: {
      maxDuration: 5,
    },
  },
});
```

```
import { defineNitroConfig } from 'nitropack';
 
// This function can run for a maximum of 5 seconds
export default defineNitroConfig({
  vercel: {
    functions: {
      maxDuration: 5,
    },
  },
});
```

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "api/test.js": {
      "maxDuration": 30 // This function can run for a maximum of 30 seconds
    },
    "api/*.js": {
      "maxDuration": 15 // These functions can run for a maximum of 15 seconds
    }
  }
}
```

#### [Other Frameworks and runtimes, Next.js versions older than 13.5, Go, Python, or Ruby](https://vercel.com/docs/functions/configuring-functions/duration#other-frameworks-and-runtimes-next.js-versions-older-than-13.5-go-python-or-ruby)[](https://vercel.com/docs/functions/configuring-functions/duration#other-frameworks-and-runtimes-next.js-versions-older-than-13.5-go-python-or-ruby)

For these runtimes and frameworks, configure the `maxDuration` property of the [`functions` object](https://vercel.com/docs/project-configuration#functions) in your `vercel.json` file:

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "api/test.js": {
      "maxDuration": 30 // This function can run for a maximum of 30 seconds
    },
    "api/*.js": {
      "maxDuration": 15 // This function can run for a maximum of 15 seconds
    },
    "src/api/*.js": {
      "maxDuration": 25 // You must prefix functions in the src directory with /src/
    }
  }
}
```

If your Next.js project is configured to use [src directory](https://nextjs.org/docs/app/building-your-application/configuring/src-directory), you will need to prefix your function routes with `/src/` for them to be detected.

The order in which you specify file patterns is important. For more information, see [Glob pattern](https://vercel.com/docs/project-configuration#glob-pattern-order).

## [Setting a default maximum duration](https://vercel.com/docs/functions/configuring-functions/duration#setting-a-default-maximum-duration)[](https://vercel.com/docs/functions/configuring-functions/duration#setting-a-default-maximum-duration)

While Vercel specifies [defaults](https://vercel.com/docs/functions/limitations#max-duration) for the maximum duration of a function, you can also override it in the following ways:

### [Dashboard](https://vercel.com/docs/functions/configuring-functions/duration#dashboard)[](https://vercel.com/docs/functions/configuring-functions/duration#dashboard)

1.   From your [dashboard](https://vercel.com/dashboard), select your project and open Settings in the sidebar.
2.   From the left side, open [Functions](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Ffunctions&title=Go+to+Functions+Settings) in the sidebar and scroll to the Function Max Duration section.
3.   Update the Default Max Duration field value and select Save.

### [`vercel.json` file](https://vercel.com/docs/functions/configuring-functions/duration#vercel.json-file)[](https://vercel.com/docs/functions/configuring-functions/duration#vercel.json-file)

vercel.json

Next.js (/app)

TypeScript

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "app/api/**/*": {
      "maxDuration": 5
    }
  }
}
```

This glob pattern will match _everything_ in the specified path, so you may wish to be more specific by adding a file type, such as `app/api/**/*.ts` instead.

## [Duration limits](https://vercel.com/docs/functions/configuring-functions/duration#duration-limits)[](https://vercel.com/docs/functions/configuring-functions/duration#duration-limits)

Vercel Functions have the following defaults and maximum limits for the duration of a function with [fluid compute](https://vercel.com/docs/fluid-compute) (enabled by default):

|  | Default | Maximum |
| --- | --- | --- |
| Hobby | 300s (5 minutes) | 300s (5 minutes) |
| Pro | 300s (5 minutes) | 800s (13 minutes) |
| Enterprise | 300s (5 minutes) | 800s (13 minutes) |

* * *

[Previous Configuring Functions](https://vercel.com/docs/functions/configuring-functions)[Next Memory](https://vercel.com/docs/functions/configuring-functions/memory)

Was this helpful?

supported.

Send

Next.js (/app)

Choose a framework to optimize documentation to:

*    Next.js (/app)
*    Next.js (/pages)
*    SvelteKit
*    Nuxt
*    Remix
*    Astro
*    Other frameworks

*   [Consequences of changing the maximum duration](https://vercel.com/docs/functions/configuring-functions/duration#consequences-of-changing-the-maximum-duration)
*   [Maximum duration for different runtimes](https://vercel.com/docs/functions/configuring-functions/duration#maximum-duration-for-different-runtimes)
*   [Node.js, Next.js (>= 13.5 or h...](https://vercel.com/docs/functions/configuring-functions/duration#node.js-next.js-%3E=-13.5-or-higher-sveltekit-astro-nuxt-and-remix)
*   [Other Frameworks and runtimes,...](https://vercel.com/docs/functions/configuring-functions/duration#other-frameworks-and-runtimes-next.js-versions-older-than-13.5-go-python-or-ruby)
*   [Setting a default maximum duration](https://vercel.com/docs/functions/configuring-functions/duration#setting-a-default-maximum-duration)
*   [Dashboard](https://vercel.com/docs/functions/configuring-functions/duration#dashboard)
*   [vercel.json file](https://vercel.com/docs/functions/configuring-functions/duration#vercel.json-file)
*   [Duration limits](https://vercel.com/docs/functions/configuring-functions/duration#duration-limits)

Copy as Markdown Install Vercel Plugin Give feedback Ask AI about this page

## Get Started

*   [Templates](https://vercel.com/templates)
*   [Supported frameworks](https://vercel.com/docs/frameworks)
*   [Marketplace](https://vercel.com/marketplace)
*   [Domains](https://vercel.com/domains)

## Build

*   [Next.js on Vercel](https://vercel.com/frameworks/nextjs)
*   [Turborepo](https://vercel.com/solutions/turborepo)
*   [v0](https://v0.app/)

## Scale

*   [Content delivery network](https://vercel.com/cdn)
*   [Fluid compute](https://vercel.com/fluid)
*   [CI/CD](https://vercel.com/products/previews)
*   [Observability](https://vercel.com/products/observability)
*   [AI Gateway New](https://vercel.com/ai-gateway)
*   [Vercel Agent New](https://vercel.com/agent)

## Secure

*   [Platform security](https://vercel.com/security)
*   [Web Application Firewall](https://vercel.com/security/web-application-firewall)
*   [Bot management](https://vercel.com/security/bot-management)
*   [BotID](https://vercel.com/botid)
*   [Sandbox New](https://vercel.com/sandbox)

## Resources

*   [Pricing](https://vercel.com/pricing)
*   [Customers](https://vercel.com/customers)
*   [Enterprise](https://vercel.com/enterprise)
*   [Articles](https://vercel.com/i)
*   [Startups](https://vercel.com/startups)
*   [Solution partners](https://vercel.com/partners/solution-partners)

## Learn

*   [Docs](https://vercel.com/docs)
*   [Blog](https://vercel.com/blog)
*   [Changelog](https://vercel.com/changelog)
*   [Knowledge Base](https://vercel.com/kb)
*   [Academy](https://vercel.com/academy)
*   [Community](https://community.vercel.com/)

## Frameworks

*   [Next.js](https://vercel.com/frameworks/nextjs)
*   [Nuxt](https://vercel.com/docs/frameworks/full-stack/nuxt)
*   [Svelte](https://vercel.com/docs/frameworks/full-stack/sveltekit)
*   [Nitro](https://vercel.com/docs/frameworks/backend/nitro)
*   [Turbo](https://vercel.com/solutions/turborepo)

## SDKs

*   [AI SDK](https://ai-sdk.dev/)
*   [Workflow SDK New](https://workflow-sdk.dev/)
*   [Flags SDK](https://flags-sdk.dev/)
*   [Chat SDK](https://chat-sdk.dev/)
*   [Streamdown AI New](https://streamdown.ai/)

## Use Cases

*   [Composable commerce](https://vercel.com/solutions/composable-commerce)
*   [Multi-tenant platforms](https://vercel.com/solutions/multi-tenant-saas)
*   [Web apps](https://vercel.com/solutions/web-apps)
*   [Marketing sites](https://vercel.com/solutions/marketing-sites)
*   [Platform engineers](https://vercel.com/solutions/platform-engineering)
*   [Design engineers](https://vercel.com/solutions/design-engineering)

## Company

*   [About](https://vercel.com/about)
*   [Careers](https://vercel.com/careers)
*   [Help](https://vercel.com/help)
*   [Press](https://vercel.com/press)
*   [Legal](https://vercel.com/legal)
*   [Privacy Policy](https://vercel.com/legal/privacy-policy)

## Community

*   [Open source program](https://vercel.com/open-source-program)
*   [Events](https://vercel.com/events)
*   [Shipped on Vercel](https://vercel.com/shipped)
*   [GitHub](https://github.com/vercel)
*   [LinkedIn](https://linkedin.com/company/vercel)
*   [X](https://x.com/vercel)
*   [YouTube](https://youtube.com/@VercelHQ)

[](https://vercel.com/home)

[Loading status…](https://vercel-status.com/)Select a display theme:system light dark
