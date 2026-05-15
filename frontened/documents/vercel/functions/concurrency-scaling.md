Title: Concurrency scaling

URL Source: https://vercel.com/docs/functions/concurrency-scaling

Markdown Content:
# Concurrency scaling
[Skip to content](https://vercel.com/docs/functions/concurrency-scaling#geist-skip-nav)

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

Concurrency Scaling

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
        *    [Concurrency Scaling](https://vercel.com/docs/functions/concurrency-scaling)  
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

Concurrency Scaling

# Concurrency scaling

Ask AI about this page

Last updated September 5, 2025

Vercel automatically scales your functions to handle traffic surges, ensuring optimal performance during increased loads.

## [Automatic concurrency scaling](https://vercel.com/docs/functions/concurrency-scaling#automatic-concurrency-scaling)[](https://vercel.com/docs/functions/concurrency-scaling#automatic-concurrency-scaling)

The concurrency model on Vercel refers to how many instances of your [functions](https://vercel.com/docs/functions) can run simultaneously. All functions on Vercel scale automatically based on demand to manage increased traffic loads.

With automatic concurrency scaling, your Vercel Functions can scale to a maximum of 30,000 on Pro or 100,000 on Enterprise, maintaining optimal performance during traffic surges. The scaling is based on the [burst concurrency limit](https://vercel.com/docs/functions/concurrency-scaling#burst-concurrency-limits) of 1000 concurrent executions per 10 seconds, per region. Additionally, Enterprise customers can purchase extended concurrency.

Vercel's infrastructure monitors your usage and preemptively adjusts the concurrency limit to cater to growing traffic, allowing your applications to scale without your intervention.

Automatic concurrency scaling is available on [all plans](https://vercel.com/docs/plans).

## [Burst concurrency limits](https://vercel.com/docs/functions/concurrency-scaling#burst-concurrency-limits)[](https://vercel.com/docs/functions/concurrency-scaling#burst-concurrency-limits)

Burst concurrency refers to Vercel's ability to temporarily handle a sudden influx of traffic by allowing a higher concurrency limit.

Upon detecting a traffic spike, Vercel temporarily increases the concurrency limit to accommodate the additional load. The initial increase allows for a maximum of 1000 concurrent executions per 10 seconds. After the traffic burst subsides, the concurrency limit gradually returns to its previous state, ensuring a smooth scaling experience.

The scaling process may take several minutes during traffic surges, especially substantial ones. While this delay aligns with natural traffic curves to minimize potential impact on your application's performance, it's advisable to monitor the scaling process for optimal operation.

You can monitor burst concurrency events using [Log Drains](https://vercel.com/docs/drains), or [Runtime Logs](https://vercel.com/docs/runtime-logs) to help you understand and optimize your application's performance.

If you exceed the limit, a [`503 FUNCTION_THROTTLED`](https://vercel.com/docs/errors/FUNCTION_THROTTLED) error will trigger.

* * *

[Previous Limits](https://vercel.com/docs/functions/limitations)[Next Debug Slow Functions](https://vercel.com/docs/functions/debug-slow-functions)

Was this helpful?

supported.

Send

*   [Automatic concurrency scaling](https://vercel.com/docs/functions/concurrency-scaling#automatic-concurrency-scaling)
*   [Burst concurrency limits](https://vercel.com/docs/functions/concurrency-scaling#burst-concurrency-limits)

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
