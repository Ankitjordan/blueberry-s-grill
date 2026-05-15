Title: Multi-tenant Limits

URL Source: https://vercel.com/docs/multi-tenant/limits

Markdown Content:
# Multi-tenant Limits
[Skip to content](https://vercel.com/docs/multi-tenant/limits#geist-skip-nav)

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

[Multi-tenant](https://vercel.com/docs/multi-tenant)

Limits

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
*   [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
    *   [Domain Management](https://vercel.com/docs/multi-tenant/domain-management)  
    *    [Limits](https://vercel.com/docs/multi-tenant/limits)  

*   Observability Expand menu 
*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 

[Multi-tenant](https://vercel.com/docs/multi-tenant)

Limits

# Multi-tenant Limits

Ask AI about this page

Last updated November 25, 2025

This page provides an overview of the limits and feature availability for Vercel for Platforms across different plan types.

## [Feature availability](https://vercel.com/docs/multi-tenant/limits#feature-availability)[](https://vercel.com/docs/multi-tenant/limits#feature-availability)

| Feature | Hobby | Pro | Enterprise |
| --- | --- | --- | --- |
| Compute | Included | Included | Included |
| Firewall | Included | Included | Included |
| WAF (Web Application Firewall) | Included | Included | Included |
| Custom Domains | 50 | Unlimited* | Unlimited* |
| Multi-tenant preview URLs | Enterprise only | Enterprise only | Enterprise only |
| Custom SSL certificates | Enterprise only | Enterprise only | Enterprise only |

*   To prevent abuse, Vercel implements soft limits of 100,000 domains per project for the Pro plan and 1,000,000 domains for the Enterprise plan. These limits are flexible and can be increased upon request. If you need more domains, please [contact our support team](https://vercel.com/help) for assistance.

### [Wildcard domains](https://vercel.com/docs/multi-tenant/limits#wildcard-domains)[](https://vercel.com/docs/multi-tenant/limits#wildcard-domains)

*   All plans: Support for wildcard domains (e.g., `*.acme.com`)
*   Requirement: Must use [Vercel's nameservers](https://vercel.com/docs/projects/domains/working-with-nameservers) for wildcard SSL certificate generation

### [Custom domains](https://vercel.com/docs/multi-tenant/limits#custom-domains)[](https://vercel.com/docs/multi-tenant/limits#custom-domains)

*   All plans: Unlimited custom domains per project
*   SSL certificates: Automatically issued for all verified domains
*   Verification: Required for domains already in use on Vercel

## [Multi-tenant preview URLs](https://vercel.com/docs/multi-tenant/limits#multi-tenant-preview-urls)[](https://vercel.com/docs/multi-tenant/limits#multi-tenant-preview-urls)

Multi-tenant preview URLs are available exclusively for Enterprise customers. This feature allows you to:

*   Generate unique preview URLs for each tenant during development
*   Test changes for specific tenants before deploying to production
*   Use dynamic subdomains like `tenant1---project-name-git-branch.yourdomain.dev`

To enable this feature, Enterprise customers should contact their Vercel account representative.

## [Custom SSL certificates](https://vercel.com/docs/multi-tenant/limits#custom-ssl-certificates)[](https://vercel.com/docs/multi-tenant/limits#custom-ssl-certificates)

Custom SSL certificates are available exclusively for Enterprise customers. This feature allows you to:

*   Upload your own SSL certificates for tenant domains
*   Maintain complete control over certificate management
*   Meet specific compliance or security requirements

Learn more about [custom SSL certificates](https://vercel.com/docs/domains/custom-SSL-certificate).

## [Rate limits](https://vercel.com/docs/multi-tenant/limits#rate-limits)[](https://vercel.com/docs/multi-tenant/limits#rate-limits)

Domain management operations through the Vercel API are subject to standard [API rate limits](https://vercel.com/docs/rest-api#rate-limits):

*   Domain addition: 100 requests per hour per team
*   Domain verification: 50 requests per hour per team
*   Domain removal: 100 requests per hour per team

## [DNS propagation](https://vercel.com/docs/multi-tenant/limits#dns-propagation)[](https://vercel.com/docs/multi-tenant/limits#dns-propagation)

After configuring domains or nameservers, DNS typically takes 24-48 hours to propagate globally. Use tools like [WhatsMyDNS](https://www.whatsmydns.net/) to check propagation status.

## [Subdomain length limits](https://vercel.com/docs/multi-tenant/limits#subdomain-length-limits)[](https://vercel.com/docs/multi-tenant/limits#subdomain-length-limits)

Each DNS label has a [63-character limit](https://vercel.com/kb/guide/why-is-my-vercel-deployment-url-being-shortened#rfc-1035). For preview URLs with long branch names and tenant subdomains, keep branch names concise to avoid resolution issues.

* * *

[Previous Domain Management](https://vercel.com/docs/multi-tenant/domain-management)[Next Observability /Overview](https://vercel.com/docs/observability)

Was this helpful?

supported.

Send

*   [Feature availability](https://vercel.com/docs/multi-tenant/limits#feature-availability)
*   [Wildcard domains](https://vercel.com/docs/multi-tenant/limits#wildcard-domains)
*   [Custom domains](https://vercel.com/docs/multi-tenant/limits#custom-domains)
*   [Multi-tenant preview URLs](https://vercel.com/docs/multi-tenant/limits#multi-tenant-preview-urls)
*   [Custom SSL certificates](https://vercel.com/docs/multi-tenant/limits#custom-ssl-certificates)
*   [Rate limits](https://vercel.com/docs/multi-tenant/limits#rate-limits)
*   [DNS propagation](https://vercel.com/docs/multi-tenant/limits#dns-propagation)
*   [Subdomain length limits](https://vercel.com/docs/multi-tenant/limits#subdomain-length-limits)

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
