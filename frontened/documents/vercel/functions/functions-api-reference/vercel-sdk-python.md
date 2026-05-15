Title: vercel.functions API Reference (Python)

URL Source: https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python

Markdown Content:
# vercel.functions API Reference (Python)
[Skip to content](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#geist-skip-nav)

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

[API Reference](https://vercel.com/docs/functions/functions-api-reference)

Python

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
            *   [Node.js](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package)  
            *    [Python](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python)  

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

[API Reference](https://vercel.com/docs/functions/functions-api-reference)

Python

# vercel.functions API Reference (Python)

Ask AI about this page

Last updated October 23, 2025

## [Install and use the package](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#install-and-use-the-package)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#install-and-use-the-package)

1.   Install the `vercel` package:

   `pip install vercel` 
2.   Import the `vercel.functions` package:

   `from vercel.functions import get_env` 

## [Helper methods](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#helper-methods)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#helper-methods)

### [`get_env`](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#get_env)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#get_env)

Description: Gets the [System Environment Variables](https://vercel.com/docs/environment-variables/system-environment-variables#system-environment-variables) exposed by Vercel.

src/example.py

```
from vercel.functions import get_env
 
print(get_env().VERCEL_REGION)
```

### [`geolocation`](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#geolocation)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#geolocation)

Description: Returns the location information for the incoming request, in the following way:

```
{
  "city": "New York",
  "country": "US",
  "flag": "🇺🇸",
  "countryRegion": "NY",
  "region": "iad1",
  "latitude": "40.7128",
  "longitude": "-74.0060",
  "postalCode": "10001"
}
```

| Name | Type | Description |
| --- | --- | --- |
| `request_or_headers` | `RequestLike | HeadersLike` | The incoming request object which provides the IP |

src/main.py

```
from fastapi import FastAPI, Request
from vercel.functions import geolocation
 
app = FastAPI()
 
@app.get("/api/geo")
async def geo_info(request: Request):
    info = geolocation(request)
    return info
```

### [`ip_address`](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#ip_address)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#ip_address)

Description: Returns the IP address of the request from the headers.

| Name | Type | Description |
| --- | --- | --- |
| `request_or_headers` | `RequestLike | HeadersLike` | The incoming request object which provides the IP |

src/main.py

```
from fastapi import FastAPI, Request
from vercel.functions import ip_address
 
app = FastAPI()
 
@app.get("/api/ip")
async def get_ip_address(request: Request):
    ip = ip_address(request)  # you can also pass request.headers
    return {"ip": ip}
```

### [`RuntimeCache`](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#runtimecache)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#runtimecache)

Description: Allows you to interact with the Vercel Runtime Cache in any Vercel region. Use this for storing and retrieving data across function, routing middleware, and build execution within a Vercel region.

| Name | Type | Description |
| --- | --- | --- |
| `key_hash_function` | `Callable[[str], str]` | Optional custom hash function for generating keys. |
| `namespace` | `str` | Optional namespace to prefix cache keys. |
| `namespace_separator` | `str` | Optional separator string for the namespace. |

#### [Specification](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#specification)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#specification)

`RuntimeCache | AsyncRuntimeCache` provide the following methods:

| Method | Description | Parameters |
| --- | --- | --- |
| `get` | Retrieves a value from the Vercel Runtime Cache. | `key: str`: The cache key |
| `set` | Stores a value in the Vercel Runtime Cache with optional `ttl` and/or `tags`. The `name` option allows a human-readable label to be associated with the cache entry for observability purposes. | * `key: str`: The cache key * `value: object`: The value to store * `options?: { name?: str; tags?: list[str]; ttl?: int }` Configuration object (not required) |
| `delete` | Removes a value from the Vercel Runtime Cache by key | `key: str`: The cache key to delete |
| `expire_tag` | Expires all cache entries associated with one or more tags | `tag: str | Sequence[str]`: Tag or sequence of tags to expire |

Use `AsyncRuntimeCache` in async code. It has the same API and uses the same underlying cache as `RuntimeCache`, and exposes awaitable methods.

src/main.py

```
import requests
import httpx
from fastapi import FastAPI, Request
from vercel.functions import RuntimeCache, AsyncRuntimeCache
 
app = FastAPI()
cache = RuntimeCache()
acache = AsyncRuntimeCache()
 
@app.get("/blog")
def get_blog(request: Request):
    key = "blog"
    value = cache.get(key)
    if value is not None:
        return value
 
    res = requests.get("https://api.vercel.app/blog")
    origin_value = res.json()
    cache.set(key, origin_value, {"ttl": 3600, "tags": ["blog"]})
 
    return origin_value
 
@app.get("/blog-async")
async def get_blog_async(request: Request):
    key = "blog"
    value = await acache.get(key)
    if value is not None:
        return value
 
    async with httpx.AsyncClient() as client:
        res = await client.get("https://api.vercel.app/blog")
        origin_value = res.json()
    await acache.set(key, origin_value, {"ttl": 3600, "tags": ["blog"]})
    return origin_value
```

After assigning tags to your cached data, use the `expire_tag` method to invalidate all cache entries associated with that tag. This operation is propagated globally across all Vercel regions within 300ms.

src/main.py

```
from fastapi import FastAPI, Request
from vercel.functions import RuntimeCache
 
app = FastAPI()
cache = RuntimeCache()
 
@app.get("/expire-blog")
def expire_blog(request: Request):
    cache.expire_tag("blog")
    return {"ok": True}
```

#### [Limits and usage](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#limits-and-usage)[](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#limits-and-usage)

The Runtime Cache is isolated per Vercel project and deployment environment (`preview` and `production`). Cached data is persisted across deployments and can be invalidated either through time-based expiration or by calling `expire_tag`. However, TTL (time-to-live) and tag updates aren't reconciled between deployments. In those cases, we recommend either purging the runtime cache or modifying the cache key.

The Runtime Cache API does not have first class integration with [Incremental Static Regeneration](https://vercel.com/docs/incremental-static-regeneration). This means that:

*   Runtime Cache entry tags will not apply to ISR pages, so you cannot use `expire_tag` to invalidate both caches.
*   Runtime Cache entry TTLs will have no effect on the ISR revalidation time and

The following Runtime Cache limits apply:

*   The maximum size of an item in the cache is 2 MB. Items larger than this will not be cached.
*   A cached item can have a maximum of 128 tags.
*   The maximum tag length is 256 bytes.

Usage of the Vercel Runtime Cache is charged, learn more about pricing in the [regional pricing docs](https://vercel.com/docs/pricing/regional-pricing).

* * *

[Previous Node.js](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package)[Next Logs](https://vercel.com/docs/functions/logs)

Was this helpful?

supported.

Send

*   [Install and use the package](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#install-and-use-the-package)
*   [Helper methods](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#helper-methods)
*   [get_env](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#get_env)
*   [geolocation](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#geolocation)
*   [ip_address](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#ip_address)
*   [RuntimeCache](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#runtimecache)
*   [Specification](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#specification)
*   [Limits and usage](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python#limits-and-usage)

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
