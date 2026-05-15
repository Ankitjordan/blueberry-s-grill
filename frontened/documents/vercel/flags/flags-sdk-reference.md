Title: Flags SDK Reference

URL Source: https://vercel.com/docs/flags/flags-sdk-reference

Markdown Content:
# Flags SDK Reference
[Skip to content](https://vercel.com/docs/flags/flags-sdk-reference#geist-skip-nav)

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

Menu

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
    *   [Vercel Flags](https://vercel.com/docs/flags/vercel-flags) Expand menu 
    *   [Flags Explorer](https://vercel.com/docs/flags/flags-explorer) Expand menu 
    *   [Marketplace](https://vercel.com/docs/flags/marketplace)  
    *    [Flags SDK](https://vercel.com/docs/flags/flags-sdk-reference)  
    *   [Observability](https://vercel.com/docs/flags/observability) Expand menu 

*   Integrations Expand menu 
*   [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
*   Observability Expand menu 
*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 

Menu

# Flags SDK Reference

Ask AI about this page

Last updated February 25, 2026

The Flags SDK is a free, open-source library that gives you the tools you need to use feature flags in Next.js and SvelteKit applications. It works with any flag provider, custom setups, or no provider at all.

This page provides an overview of key concepts and APIs. For complete API documentation, visit [flags-sdk.dev](https://flags-sdk.dev/), the official source of truth for the Flags SDK.

## [Key features](https://vercel.com/docs/flags/flags-sdk-reference#key-features)[](https://vercel.com/docs/flags/flags-sdk-reference#key-features)

*   Framework-native: Built specifically for Next.js (App Router, Pages Router, Middleware) and SvelteKit
*   Provider-agnostic: Works with any [flag provider](https://flags-sdk.dev/docs/adapters/supported-providers) or [custom adapters](https://flags-sdk.dev/docs/adapters/custom-adapters)
*   Type-safe: Full TypeScript support with type inference
*   Optimized for performance: Uses precompute pattern for static generation
*   Integrated: Works seamlessly with Flags Explorer and Vercel observability features

## [Core concepts](https://vercel.com/docs/flags/flags-sdk-reference#core-concepts)[](https://vercel.com/docs/flags/flags-sdk-reference#core-concepts)

### [Flag definitions](https://vercel.com/docs/flags/flags-sdk-reference#flag-definitions)[](https://vercel.com/docs/flags/flags-sdk-reference#flag-definitions)

Flags are defined using the `flag()` function. Each flag has a key and a `decide` function that returns the flag's value:

flags.ts

```
import { flag } from 'flags/next';
 
export const showNewFeature = flag({
  key: 'show-new-feature',
  decide: () => false,
  description: 'Show the new dashboard feature',
});
```

### [The decide function](https://vercel.com/docs/flags/flags-sdk-reference#the-decide-function)[](https://vercel.com/docs/flags/flags-sdk-reference#the-decide-function)

The `decide` function determines a flag's value. It can be sync or async, and can access request context:

flags.ts

```
export const experimentalUI = flag({
  key: 'experimental-ui',
  decide: async () => {
    const user = await getCurrentUser();
    return user?.betaAccess === true;
  },
});
```

### [Flag options](https://vercel.com/docs/flags/flags-sdk-reference#flag-options)[](https://vercel.com/docs/flags/flags-sdk-reference#flag-options)

Flags can have multiple options for A/B testing and experimentation:

flags.ts

```
export const theme = flag({
  key: 'theme',
  options: [
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'auto', label: 'Auto' },
  ],
  decide: () => 'auto',
});
```

### [Precompute for static pages](https://vercel.com/docs/flags/flags-sdk-reference#precompute-for-static-pages)[](https://vercel.com/docs/flags/flags-sdk-reference#precompute-for-static-pages)

The precompute pattern generates multiple versions of static pages with different flag values:

flags.ts

```
export const layoutVariant = flag({
  key: 'layout-variant',
  options: [
    { value: 'a' },
    { value: 'b' },
  ],
  decide: () => 'a',
});
 
export const precompute = [layoutVariant];
```

Learn more about [precompute on flags-sdk.dev](https://flags-sdk.dev/docs/core-concepts/precompute).

## [Key APIs](https://vercel.com/docs/flags/flags-sdk-reference#key-apis)[](https://vercel.com/docs/flags/flags-sdk-reference#key-apis)

### [Reading flag values](https://vercel.com/docs/flags/flags-sdk-reference#reading-flag-values)[](https://vercel.com/docs/flags/flags-sdk-reference#reading-flag-values)

Call your flag functions to read their values:

```
const isEnabled = await showNewFeature();
const currentTheme = await theme();
```

### [Reporting values](https://vercel.com/docs/flags/flags-sdk-reference#reporting-values)[](https://vercel.com/docs/flags/flags-sdk-reference#reporting-values)

Report flag values for observability (automatic with SDK):

```
import { reportValue } from 'flags';
 
reportValue('my-flag', true);
```

### [Overrides](https://vercel.com/docs/flags/flags-sdk-reference#overrides)[](https://vercel.com/docs/flags/flags-sdk-reference#overrides)

Handle flag overrides from Flags Explorer (automatic with SDK integrations):

```
import { getOverrides } from 'flags/next';
 
const overrides = await getOverrides();
```

### [Flags Explorer integration](https://vercel.com/docs/flags/flags-sdk-reference#flags-explorer-integration)[](https://vercel.com/docs/flags/flags-sdk-reference#flags-explorer-integration)

Create a Flags API endpoint for Flags Explorer:

app/.well-known/vercel/flags/route.ts

```
import { createFlagsDiscoveryEndpoint, getProviderData } from 'flags/next';
import * as flags from '#/flags';
 
export const GET = createFlagsDiscoveryEndpoint(async () => {
  return getProviderData(flags);
});
```

## [Framework-specific guides](https://vercel.com/docs/flags/flags-sdk-reference#framework-specific-guides)[](https://vercel.com/docs/flags/flags-sdk-reference#framework-specific-guides)

*   Next.js: [Getting started with Next.js](https://flags-sdk.dev/docs/getting-started/next)
*   SvelteKit: [Getting started with SvelteKit](https://flags-sdk.dev/docs/getting-started/sveltekit)

## [Provider adapters](https://vercel.com/docs/flags/flags-sdk-reference#provider-adapters)[](https://vercel.com/docs/flags/flags-sdk-reference#provider-adapters)

The Flags SDK works with many providers out of the box:

*   [Vercel](https://flags-sdk.dev/docs/providers/vercel)
*   [LaunchDarkly](https://flags-sdk.dev/docs/adapters/supported-providers#launchdarkly)
*   [Statsig](https://flags-sdk.dev/docs/adapters/supported-providers#statsig)
*   [Hypertune](https://flags-sdk.dev/docs/adapters/supported-providers#hypertune)
*   [ConfigCat](https://flags-sdk.dev/docs/adapters/supported-providers#configcat)
*   [DevCycle](https://flags-sdk.dev/docs/adapters/supported-providers#devcycle)
*   [Flipt](https://flags-sdk.dev/docs/adapters/supported-providers#flipt)
*   [Custom adapters](https://flags-sdk.dev/docs/adapters/custom-adapters)

## [Complete API reference](https://vercel.com/docs/flags/flags-sdk-reference#complete-api-reference)[](https://vercel.com/docs/flags/flags-sdk-reference#complete-api-reference)

For the full API documentation, including all functions, types, and advanced patterns, visit:

*   [Core API reference](https://flags-sdk.dev/docs/api-reference/core/core)
*   [Next.js API reference](https://flags-sdk.dev/docs/api-reference/frameworks/next)
*   [SvelteKit API reference](https://flags-sdk.dev/docs/api-reference/frameworks/sveltekit)
*   [React components](https://flags-sdk.dev/docs/api-reference/core/react)

## [Examples](https://vercel.com/docs/flags/flags-sdk-reference#examples)[](https://vercel.com/docs/flags/flags-sdk-reference#examples)

*   [Next.js Feature Flags Example](https://vercel.com/templates/next.js/shirt-shop-feature-flags)
*   [More examples on flags-sdk.dev](https://flags-sdk.dev/docs/examples)

## [Next steps](https://vercel.com/docs/flags/flags-sdk-reference#next-steps)[](https://vercel.com/docs/flags/flags-sdk-reference#next-steps)

*   [Get started with the quickstart](https://vercel.com/docs/flags/vercel-flags/quickstart)
*   [Set up Flags Explorer](https://vercel.com/docs/flags/flags-explorer/getting-started)
*   [Integrate with observability](https://vercel.com/docs/flags/observability)

* * *

[Previous Marketplace](https://vercel.com/docs/flags/marketplace)[Next Observability](https://vercel.com/docs/flags/observability)

Was this helpful?

supported.

Send

*   [Key features](https://vercel.com/docs/flags/flags-sdk-reference#key-features)
*   [Core concepts](https://vercel.com/docs/flags/flags-sdk-reference#core-concepts)
*   [Flag definitions](https://vercel.com/docs/flags/flags-sdk-reference#flag-definitions)
*   [The decide function](https://vercel.com/docs/flags/flags-sdk-reference#the-decide-function)
*   [Flag options](https://vercel.com/docs/flags/flags-sdk-reference#flag-options)
*   [Precompute for static pages](https://vercel.com/docs/flags/flags-sdk-reference#precompute-for-static-pages)
*   [Key APIs](https://vercel.com/docs/flags/flags-sdk-reference#key-apis)
*   [Reading flag values](https://vercel.com/docs/flags/flags-sdk-reference#reading-flag-values)
*   [Reporting values](https://vercel.com/docs/flags/flags-sdk-reference#reporting-values)
*   [Overrides](https://vercel.com/docs/flags/flags-sdk-reference#overrides)
*   [Flags Explorer integration](https://vercel.com/docs/flags/flags-sdk-reference#flags-explorer-integration)
*   [Framework-specific guides](https://vercel.com/docs/flags/flags-sdk-reference#framework-specific-guides)
*   [Provider adapters](https://vercel.com/docs/flags/flags-sdk-reference#provider-adapters)
*   [Complete API reference](https://vercel.com/docs/flags/flags-sdk-reference#complete-api-reference)
*   [Examples](https://vercel.com/docs/flags/flags-sdk-reference#examples)
*   [Next steps](https://vercel.com/docs/flags/flags-sdk-reference#next-steps)

Copy as Markdown Install Vercel Plugin Give feedback Ask AI about this page

[AI Gateway One endpoint, all your models](https://vercel.com/ai-gateway)

[Sandbox Isolated, safe code execution](https://vercel.com/sandbox)

[Vercel Agent An agent that knows your stack](https://vercel.com/agent)

[AI SDK The AI Toolkit for TypeScript](https://sdk.vercel.ai/)

[v0 Build applications with AI](https://v0.app/)

[CI/CD Helping teams ship 6× faster](https://vercel.com/products/previews)

[Content Delivery Fast, scalable, and reliable](https://vercel.com/cdn)

[Fluid Compute Servers, in serverless form](https://vercel.com/fluid)

[Workflow Long-running workflows at scale](https://vercel.com/workflows)

[Observability Trace every step](https://vercel.com/products/observability)

[Bot Management Scalable bot protection](https://vercel.com/security/bot-management)

[BotID Invisible CAPTCHA](https://vercel.com/botid)

[Platform Security DDoS Protection, Firewall](https://vercel.com/security)

[Web Application Firewall Granular, custom protection](https://vercel.com/security/web-application-firewall)

[Customers Trusted by the best teams](https://vercel.com/customers)

[Blog The latest posts and changes](https://vercel.com/blog)

[Changelog See what shipped](https://vercel.com/changelog)

[Press Read the latest news](https://vercel.com/press)

[Events Join us at an event](https://vercel.com/events)

[Docs Vercel documentation](https://vercel.com/docs)

[Academy Linear courses to level up](https://vercel.com/academy)

[Knowledge Base Find help quickly](https://vercel.com/kb)

[Community Join the conversation](https://community.vercel.com/)

[Next.js The native Next.js platform](https://vercel.com/frameworks/nextjs)

[Nuxt The progressive web framework](https://nuxt.com/)

[Svelte The web’s efficient UI framework](https://svelte.dev/)

[Turborepo Speed with Enterprise scale](https://vercel.com/solutions/turborepo)

[AI Apps Deploy at the speed of AI](https://vercel.com/ai)

[Composable Commerce Power storefronts that convert](https://vercel.com/solutions/composable-commerce)

[Marketing Sites Launch campaigns fast](https://vercel.com/solutions/marketing-sites)

[Multi-tenant Platforms Scale apps with one codebase](https://vercel.com/solutions/multi-tenant-saas)

[Web Apps Ship features, not infrastructure](https://vercel.com/solutions/web-apps)

[Marketplace Extend and automate workflows](https://vercel.com/marketplace)

[Templates Jumpstart app development](https://vercel.com/templates)

[Partner Finder Get help from solution partners](https://vercel.com/partners/solution-partners)

[Platform Engineers Automate away repetition](https://vercel.com/solutions/platform-engineering)

[Design Engineers Deploy for every idea](https://vercel.com/solutions/design-engineering)

Ask AI

Menu

[Flags](https://vercel.com/docs/flags)

Flags SDK

[Flags](https://vercel.com/docs/flags)

Flags SDK

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
