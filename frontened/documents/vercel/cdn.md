Overview

# Vercel CDN overview

Last updated March 5, 2026

Vercel's CDN is a globally distributed network that caches content near your visitors, routes requests, and runs compute close to your data. Every deployment includes it automatically.

Unlike traditional CDNs that only cache static assets, Vercel's CDN is framework-aware. It reads your routing, caching, and rendering configuration at build time, with the following benefits:

* Git-driven and previewable: Every CDN change is scoped to a branch and deployed to a unique [preview URL](/docs/deployments/preview-deployments), so you can test routing, caching, and security rules before they reach production.
* Global network: [126+ PoPs across 51 countries and 20+ Vercel regions](/docs/regions), with built-in request acceleration and high-availability architecture.
* Framework-aware, zero config: CDN configuration and [caching policies](/docs/caching) are an output of the build and deployment process if you are using a supported framework, eliminating the need to define manual cache-control headers.
* Standard CDN directives: When needed, you can override [routing and caching rules](/docs/routing). You can also proxy and cache responses from external backends with [external rewrites](/docs/routing/rewrites#external-rewrites), and [invalidate content by tag](/docs/caching/cdn-cache/purge) across all frameworks and backends.
* Default protections: Unmetered, always-on [DDoS mitigation and network-level security](/docs/vercel-firewall) on every deployment at no extra cost.

## [What you can build](#what-you-can-build)

You can use Vercel's CDN across a range of architectures:

* Static sites and marketing pages: Pre-render pages at build time and serve them from the CDN without invoking your origin.
* E-commerce storefronts: Cache product catalogs with [ISR](/docs/incremental-static-regeneration) and revalidate in the background when inventory or pricing changes.
* Content-driven platforms: Let editors publish CMS changes that propagate globally within seconds, without a redeployment.
* SaaS dashboards: Serve authenticated pages with [Vercel Functions](/docs/functions) while the CDN caches shared assets and API responses.
* AI-powered applications: Stream responses from AI models through [streaming functions](/docs/functions/streaming-functions) and cache deterministic results with [runtime cache](/docs/caching/runtime-cache).
* Multi-region APIs: Set [Cache-Control headers](/docs/caching/cache-control-headers) for per-region caching and use [rewrites](/docs/routing/rewrites) to proxy requests to external backends.
* Hybrid architectures: Mix static, ISR, and dynamic routes in the same project. The CDN applies the right strategy per route from your framework configuration.

### [Get started with templates](#get-started-with-templates)

Deploy a CDN-ready template to see routing, caching, and revalidation in action:

[![On-Demand ISR](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F5TY3yVmUYix5mHgfUjhSD0%2Fe505b67dc1ff11c76e1cff9f680ad74f%2FCleanShot_2022-04-13_at_17.12.05_2x.png&w=3840&q=75)

On-Demand ISR

Instantly update content without redeploying.](https://vercel.com/templates/next.js/on-demand-incremental-static-regeneration)

[![Bulk Redirects via a CMS](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F2HWJJqEWfgcl1I5OrMbOjn%2Fb189f23c39ea4f3ce86c49aae0ada828%2FScreenshot_2025-12-18_at_12.04.02%C3%A2__PM.png&w=3840&q=75)

Bulk Redirects via a CMS

Learn how to create redirects via Contentful, synced at build time to Vercel’s CDN using vercel.ts](https://vercel.com/templates/next.js/bulk-redirects-via-a-cms)

[![Proxy requests to external origins](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F33CmPJXWg57MChUqdPRi2k%2F418ee8ea2a145e11e89cb8301dd41a3e%2FScreenshot_2026-02-27_at_6.00.07%C3%A2__PM.png&w=3840&q=75)

Proxy requests to external origins

Rewrite API traffic to an external backend using vercel.ts.](https://vercel.com/templates/next.js/proxy-requests-to-external-origins)

[View all CDN templates](https://vercel.com/templates/cdn)

## [How Vercel CDN works](#how-vercel-cdn-works)

Every request flows through the CDN's routing, caching, and compute layers before reaching your application code. Each layer can resolve the request or pass it to the next.

* [How a request flows through the CDN](/docs/how-vercel-cdn-works)
* [Compression](/docs/how-vercel-cdn-works/compression)

### [Global network and regions](#global-network-and-regions)

Vercel operates 126 Points of Presence (PoPs) across 51 countries. Behind them, compute-capable regions run your code close to your data. Traffic flows between PoPs and regions over a private, low-latency network.

* [Region list and infrastructure details](/docs/regions)

## [Routing](#routing)

The CDN evaluates routing rules before checking any cache. Redirects return a new URL to the client. Rewrites map a public URL to a different backend path. Header rules modify request and response metadata.

* [Redirects](/docs/routing/redirects)
* [Rewrites](/docs/routing/rewrites)
* [Reverse proxy with external rewrites](/docs/routing/rewrites#external-rewrites)

## [Security](#security)

The CDN enforces security before requests reach your application. Every deployment uses HTTPS with automatically provisioned SSL certificates and TLS 1.2/1.3 support. A platform-wide firewall with DDoS mitigation inspects every request at the CDN level. You can also configure a Web Application Firewall (WAF) with custom rules at the project level.

* [CDN security overview](/docs/cdn-security)
* [Encryption & TLS](/docs/cdn-security/encryption)
* [Security headers](/docs/cdn-security/security-headers)
* [Vercel WAF](/docs/vercel-firewall/vercel-waf)

## [Caching](#caching)

Vercel maintains multiple caching tiers to reduce how often your functions run.

### [Incremental Static Regeneration](#incremental-static-regeneration)

Incremental Static Regeneration (ISR) serves cached pages to visitors while regenerating content in the background. When the cache expires, Vercel re-renders the page and updates all regions so visitors always get a fast response. Vercel manages caching, request collapsing, and purging automatically when you use ISR with Next.js, SvelteKit, Nuxt, or Astro.

* [How ISR works](/docs/incremental-static-regeneration)
* [Getting started with ISR](/docs/incremental-static-regeneration/quickstart)
* [ISR usage and pricing](/docs/incremental-static-regeneration/limits-and-pricing)
* [Request collapsing](/docs/incremental-static-regeneration/request-collapsing)

### [CDN cache and runtime cache](#cdn-cache-and-runtime-cache)

The CDN cache stores responses across Vercel regions, closest to your visitors. The runtime cache stores fetch results, database queries, and computed values inside your functions.

* [CDN cache](/docs/caching/cdn-cache)
* [Cache-Control headers](/docs/caching/cache-control-headers)
* [Runtime cache](/docs/caching/runtime-cache)

## [System headers](#system-headers)

Every deployment includes system-level headers on requests and responses. You can use these headers to inspect routing decisions, caching status, and request identity for debugging and observability.

* [Response headers](/docs/headers/response-headers)
* [Request headers](/docs/headers/request-headers)

## [Image optimization](#image-optimization)

You can resize, crop, and convert images to modern formats like WebP and AVIF. Vercel transforms and caches the results on the CDN, so you don't need a separate image pipeline.

* [Image optimization](/docs/image-optimization)

## [Custom error pages](#custom-error-pages)

You can configure branded error pages for 5xx server errors so visitors see a consistent experience when something goes wrong.

* [Custom error pages](/docs/custom-error-pages)

## [Pricing and usage](#pricing-and-usage)

CDN pricing covers three resources: Fast Data Transfer, Fast Origin Transfer, and CDN Requests. Each plan includes a usage allotment, and pricing varies by the region where requests originate.

* [CDN pricing and usage](/docs/manage-cdn-usage)
* [Networking usage details](/docs/pricing/networking)

---

[Previous

Build & Deploy / Webhooks](/docs/webhooks)[Next

How Vercel CDN works](/docs/how-vercel-cdn-works)

Was this helpful?
