Title: Debugging slow Vercel Functions

URL Source: https://vercel.com/docs/functions/debug-slow-functions

Markdown Content:
# Debugging slow Vercel Functions
[Skip to content](https://vercel.com/docs/functions/debug-slow-functions#geist-skip-nav)

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

Debug Slow Functions

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
        *   [API Reference](https://vercel.com/docs/functions/functions-api-reference) Expand menu 
        *   [Logs](https://vercel.com/docs/functions/logs)  
        *   [Limits](https://vercel.com/docs/functions/limitations)  
        *   [Concurrency Scaling](https://vercel.com/docs/functions/concurrency-scaling)  
        *    [Debug Slow Functions](https://vercel.com/docs/functions/debug-slow-functions)  
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

Debug Slow Functions

# Debugging slow Vercel Functions

Ask AI about this page

Last updated February 24, 2026

Use this guide to diagnose and fix slow Vercel Functions. You'll identify which functions are slow, measure where the time is spent, and verify that your optimization works before shipping to production.

This guide requires a linked Vercel project. Run `vercel link` in your project directory if you haven't already.

## [Quick reference](https://vercel.com/docs/functions/debug-slow-functions#quick-reference)[](https://vercel.com/docs/functions/debug-slow-functions#quick-reference)

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

terminal

```
# 1. Identify slow functions from production logs
vercel logs --environment production --source serverless --since 1h --json \
  | jq 'select(.statusCode != null) | {path: .path, statusCode: .statusCode}'
 
# 2. Measure endpoint timing (server processing = time in your function)
vercel httpstat /api/slow-endpoint
 
# 3. Check function configuration (memory, region, max duration)
vercel inspect <deployment-url>
 
# IF server processing time is high, check external API latency:
vercel logs --environment production --query "timeout" --since 1h --expand
vercel logs --environment production --query "ECONNREFUSED" --since 1h --expand
 
# IF first request is slow but subsequent requests are fast, check cold starts:
vercel httpstat /api/slow-endpoint    # first request (potentially cold)
vercel httpstat /api/slow-endpoint    # second request (warm)
vercel httpstat /api/slow-endpoint    # third request (warm)
 
# 4. After optimizing, deploy a preview and measure
vercel deploy
vercel httpstat /api/slow-endpoint --deployment <preview-url>
vercel curl /api/slow-endpoint --deployment <preview-url>
 
# 5. Ship to production and monitor
vercel deploy --prod
vercel logs --environment production --source serverless --since 5m
```

## [1. Identify the slow functions](https://vercel.com/docs/functions/debug-slow-functions#1.-identify-the-slow-functions)[](https://vercel.com/docs/functions/debug-slow-functions#1.-identify-the-slow-functions)

Start by checking your production logs for slow requests. Filter for your function routes and look for high latency:

terminal

```
vercel logs --environment production --source serverless --since 1h --json \
  | jq 'select(.statusCode != null) | {path: .path, statusCode: .statusCode}'
```

To see the full log output with expanded messages:

terminal

`vercel logs --environment production --source serverless --since 1h --expand`

The `--source serverless` filter limits results to Vercel Functions, excluding static assets and edge requests.

For a visual breakdown of slow routes, check the Vercel Functions tab in [Observability](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fobservability&title=Open+Observability) on the Vercel Dashboard. Sort by duration to find your slowest routes.

## [2. Measure endpoint timing](https://vercel.com/docs/functions/debug-slow-functions#2.-measure-endpoint-timing)[](https://vercel.com/docs/functions/debug-slow-functions#2.-measure-endpoint-timing)

Use `vercel httpstat` to get a detailed timing breakdown for a specific endpoint. This shows DNS lookup, TCP connection, TLS handshake, server processing, and content transfer times:

terminal

`vercel httpstat /api/slow-endpoint`

The server processing time is the portion spent inside your function. If this is the largest number, the issue is in your function code or its dependencies (database queries, external API calls).

To test against a specific deployment:

terminal

`vercel httpstat /api/slow-endpoint --deployment <deployment-url>`

## [3. Check function configuration](https://vercel.com/docs/functions/debug-slow-functions#3.-check-function-configuration)[](https://vercel.com/docs/functions/debug-slow-functions#3.-check-function-configuration)

Inspect the current deployment to see what configuration your functions are running with:

terminal

`vercel inspect <deployment-url>`

Key things to check:

*   Memory: Functions with too little memory get CPU-throttled. If your function does heavy computation, increasing memory from the default 1024 MB can reduce execution time
*   Region: If your function is far from your data source, every database query adds latency. Check that your function region matches your database region
*   Max duration: If your function is hitting the maximum duration limit, it may be getting terminated before completing

See [configuring functions](https://vercel.com/docs/functions/configuring-functions) for how to adjust these settings.

## [4. Check for external API latency](https://vercel.com/docs/functions/debug-slow-functions#4.-check-for-external-api-latency)[](https://vercel.com/docs/functions/debug-slow-functions#4.-check-for-external-api-latency)

Slow functions are often caused by slow external API calls rather than slow function code. Check for timeout-related errors:

terminal

`vercel logs --environment production --query "timeout" --since 1h --expand`

terminal

`vercel logs --environment production --query "ECONNREFUSED" --since 1h --expand`

If you find timeout or connection errors, the issue is likely with an upstream dependency rather than your function itself.

The External APIs tab in [Observability](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fobservability&title=Open+Observability) shows latency for all external API calls made by your functions. Sort by P75 latency to find the slowest upstream services.

## [5. Check for cold starts](https://vercel.com/docs/functions/debug-slow-functions#5.-check-for-cold-starts)[](https://vercel.com/docs/functions/debug-slow-functions#5.-check-for-cold-starts)

Cold starts happen when a new function instance needs to be initialized. Look for patterns where the first request after a period of inactivity is slow, but subsequent requests are fast.

Run multiple requests to the same endpoint and compare timing:

terminal

```
vercel httpstat /api/slow-endpoint
vercel httpstat /api/slow-endpoint
vercel httpstat /api/slow-endpoint
```

If the first request is significantly slower than the following ones, cold starts are the issue. Common fixes include:

*   Reducing the function bundle size by removing unused dependencies
*   Moving expensive initialization outside the request handler
*   Increasing the memory allocation (which also increases CPU)

## [6. Make the optimization](https://vercel.com/docs/functions/debug-slow-functions#6.-make-the-optimization)[](https://vercel.com/docs/functions/debug-slow-functions#6.-make-the-optimization)

Based on what you found, apply the fix. Common optimizations for slow functions include:

*   Adding caching for database queries or external API responses
*   Moving the function region closer to the data source
*   Increasing function memory to reduce CPU throttling
*   Reducing bundle size to speed up cold starts
*   Adding connection pooling for database connections
*   Parallelizing independent async operations with `Promise.all`

## [7. Deploy a preview and measure](https://vercel.com/docs/functions/debug-slow-functions#7.-deploy-a-preview-and-measure)[](https://vercel.com/docs/functions/debug-slow-functions#7.-deploy-a-preview-and-measure)

Deploy the optimized code as a preview:

terminal

`vercel deploy`

Run the same timing analysis against the preview to compare before and after:

terminal

`vercel httpstat /api/slow-endpoint --deployment <preview-url>`

Also verify that the function still returns correct responses:

terminal

`vercel curl /api/slow-endpoint --deployment <preview-url>`

## [8. Ship to production](https://vercel.com/docs/functions/debug-slow-functions#8.-ship-to-production)[](https://vercel.com/docs/functions/debug-slow-functions#8.-ship-to-production)

Once you've confirmed the improvement, deploy to production:

terminal

`vercel deploy --prod`

Monitor the production logs after deploying to confirm the latency improvement holds under real traffic:

terminal

`vercel logs --environment production --source serverless --since 5m`

## [Related](https://vercel.com/docs/functions/debug-slow-functions#related)[](https://vercel.com/docs/functions/debug-slow-functions#related)

*   [vercel logs](https://vercel.com/docs/cli/logs)
*   [vercel httpstat](https://vercel.com/docs/cli/httpstat)
*   [vercel inspect](https://vercel.com/docs/cli/inspect)
*   [Configuring functions](https://vercel.com/docs/functions/configuring-functions)
*   [Observability](https://vercel.com/docs/observability)
*   [Debugging production 500 errors](https://vercel.com/docs/observability/debug-production-errors)

* * *

[Previous Concurrency Scaling](https://vercel.com/docs/functions/concurrency-scaling)[Next Pricing](https://vercel.com/docs/functions/usage-and-pricing)

Was this helpful?

supported.

Send

*   [Quick reference](https://vercel.com/docs/functions/debug-slow-functions#quick-reference)
*   [1. Identify the slow functions](https://vercel.com/docs/functions/debug-slow-functions#1.-identify-the-slow-functions)
*   [2. Measure endpoint timing](https://vercel.com/docs/functions/debug-slow-functions#2.-measure-endpoint-timing)
*   [3. Check function configuration](https://vercel.com/docs/functions/debug-slow-functions#3.-check-function-configuration)
*   [4. Check for external API latency](https://vercel.com/docs/functions/debug-slow-functions#4.-check-for-external-api-latency)
*   [5. Check for cold starts](https://vercel.com/docs/functions/debug-slow-functions#5.-check-for-cold-starts)
*   [6. Make the optimization](https://vercel.com/docs/functions/debug-slow-functions#6.-make-the-optimization)
*   [7. Deploy a preview and measure](https://vercel.com/docs/functions/debug-slow-functions#7.-deploy-a-preview-and-measure)
*   [8. Ship to production](https://vercel.com/docs/functions/debug-slow-functions#8.-ship-to-production)
*   [Related](https://vercel.com/docs/functions/debug-slow-functions#related)

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
