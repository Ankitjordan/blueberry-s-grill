Title: Vercel for Platforms

URL Source: https://vercel.com/docs/multi-tenant

Markdown Content:
# Vercel for Platforms
[Skip to content](https://vercel.com/docs/multi-tenant#geist-skip-nav)

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

Multi-tenant

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
*   [Flags](https://vercel.com/docs/flags) Expand menu 
*   Integrations Expand menu 
*    [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
    *   [Domain Management](https://vercel.com/docs/multi-tenant/domain-management)  
    *   [Limits](https://vercel.com/docs/multi-tenant/limits)  

*   Observability Expand menu 
*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 

Multi-tenant

# Vercel for Platforms

Ask AI about this page

Last updated December 18, 2025

A multi-tenant application serves multiple customers (tenants) from a single codebase.

Each tenant gets its own domain or subdomain, but you only have one Next.js (or similar) deployment running on Vercel. This approach simplifies your infrastructure, scales well, and keeps your branding consistent across all tenant sites.

Get started with our [detailed docs](https://vercel.com/platforms/docs), [multi-tenant Next.js example](https://vercel.com/templates/next.js/platforms-starter-kit), or learn more about customizing domains.

## [Why build multi-tenant apps?](https://vercel.com/docs/multi-tenant#why-build-multi-tenant-apps)[](https://vercel.com/docs/multi-tenant#why-build-multi-tenant-apps)

Some popular multi-tenant apps on Vercel include:

*   Content platforms: [Hashnode](https://townhall.hashnode.com/powerful-and-superfast-hashnode-blogs-now-powered-by-nextjs-11-and-vercel), [Dub](https://dub.co/)
*   Documentation platforms:[Mintlify](https://mintlify.com/), [Fern](https://buildwithfern.com/), [Plain](https://www.plain.com/channels/help-center)
*   Website and ecommerce store builders: [Super](https://vercel.com/blog/super-serves-thousands-of-domains-on-one-project-with-next-js-and-vercel), [Typedream](https://typedream.com/), [Universe](https://univer.se/)
*   B2B SaaS platforms: [Zapier](https://zapier.com/interfaces), [Instatus](https://instatus.com/), [Cal](http://cal.com/)

For example, you might have:

*   A root domain for your platform: `acme.com`
*   Subdomains for tenants: `tenant1.acme.com`, `tenant2.acme.com`
*   Fully custom domains for certain customers: `tenantcustomdomain.com`

Vercel's platform automatically issues [SSL certificates](https://vercel.com/docs/domains/working-with-ssl), handles DNS routing via its Anycast network, and ensures each of your tenants gets low-latency responses from the closest CDN region.

## [Getting started](https://vercel.com/docs/multi-tenant#getting-started)[](https://vercel.com/docs/multi-tenant#getting-started)

The fastest way to get started is with our [multi-tenant Next.js starter kit](https://vercel.com/templates/next.js/platforms-starter-kit). This template includes:

*   Custom subdomain routing with Next.js middleware
*   Tenant-specific content and pages
*   Redis for tenant data storage
*   Admin interface for managing tenants
*   Compatible with Vercel preview deployments

## [Multi-tenant features on Vercel](https://vercel.com/docs/multi-tenant#multi-tenant-features-on-vercel)[](https://vercel.com/docs/multi-tenant#multi-tenant-features-on-vercel)

*   Unlimited custom domains
*   Unlimited `*.yourdomain.com` subdomains
*   Automatic SSL certificate issuance and renewal
*   Domain management through REST API or SDK
*   Low-latency responses globally with the Vercel CDN
*   Preview environment support to test changes
*   Support for 35+ frontend and backend frameworks

## [Next steps](https://vercel.com/docs/multi-tenant#next-steps)[](https://vercel.com/docs/multi-tenant#next-steps)

*   [Full Vercel for Platforms docs](https://vercel.com/platforms/docs)
*   [Learn about limits and features](https://vercel.com/docs/multi-tenant/limits)
*   [Set up domain management](https://vercel.com/docs/multi-tenant/domain-management)
*   [Deploy the starter template](https://vercel.com/templates/next.js/platforms-starter-kit)

* * *

[Previous Integrations /Commerce and Payments](https://vercel.com/docs/integrations/ecommerce)[Next Domain Management](https://vercel.com/docs/multi-tenant/domain-management)

Was this helpful?

supported.

Send

*   [Why build multi-tenant apps?](https://vercel.com/docs/multi-tenant#why-build-multi-tenant-apps)
*   [Getting started](https://vercel.com/docs/multi-tenant#getting-started)
*   [Multi-tenant features on Vercel](https://vercel.com/docs/multi-tenant#multi-tenant-features-on-vercel)
*   [Next steps](https://vercel.com/docs/multi-tenant#next-steps)

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
