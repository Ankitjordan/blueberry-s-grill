Title: @vercel/functions API Reference (Node.js)

URL Source: https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package

Markdown Content:
# @vercel/functions API Reference (Node.js)
[Skip to content](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#geist-skip-nav)

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

Node.js

Other frameworks

Choose a framework to optimize documentation to:

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
        *   [API Reference](https://vercel.com/docs/functions/functions-api-reference) Expand menu 
            *    [Node.js](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package)  
            *   [Python](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python)  

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

Node.js

# @vercel/functions API Reference (Node.js)

Ask AI about this page

Last updated January 23, 2026

## [Install and use the package](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#install-and-use-the-package)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#install-and-use-the-package)

1.   Install the `@vercel/functions` package:

Terminal

![Image 3](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/topics/icons/pnpm.svg)

 

`pnpm i @vercel/functions`

`yarn add @vercel/functions`

`npm i @vercel/functions`

`bun add @vercel/functions`

1.   Import the `@vercel/functions` package (non-Next.js frameworks or Next.js versions below 15.1):

Other frameworks

api/hello.ts

TypeScript

```
import { waitUntil, attachDatabasePool } from '@vercel/functions';
 
export default {
  fetch(request: Request) {
    // ...
  },
};
```

For [OIDC](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#oidc-methods) methods, import `@vercel/oidc`

## [Usage with Next.js](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#usage-with-next.js)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#usage-with-next.js)

If you’re using Next.js 15.1 or above, we recommend using the built-in [`after()`](https://nextjs.org/docs/app/api-reference/functions/after) function from `next/server`instead of `waitUntil()`.

`after()` allows you to schedule work that runs after the response has been sent or the prerender has completed. This is especially useful to avoid blocking rendering for side effects such as logging, analytics, or other background tasks.

app/api/hello/route.ts

```
import { after } from 'next/server';
 
export async function GET(request: Request) {
  const country = request.headers.get('x-vercel-ip-country') || 'unknown';
 
  // Returns a response immediately
  const response = new Response(`You're visiting from ${country}`);
 
  // Schedule a side-effect after the response is sent
  after(async () => {
    // For example, log or increment analytics in the background
    await fetch(
      `https://my-analytics-service.example.com/log?country=${country}`,
    );
  });
 
  return response;
}
```

[Open in Open in v0](https://v0.app/chat?q=%20%20Create%20a%20minimal%20example%20app%20for%20this%20code:%20import%20{%20after%20}%20from%20%27next/server%27;%20export%20async%20function%20GET(request:%20Request)%20{%20%20const%20country%20=%20request.headers.get(%27x-vercel-ip-country%27)%20||%20%27unknown%27;%20%20%20//%20Returns%20a%20response%20immediately%20%20const%20response%20=%20new%20Response(`You%27re%20visiting%20from%20${country}`);%20%20%20//%20Schedule%20a%20side-effect%20after%20the%20response%20is%20sent%20%20after(async%20()%20=%3E%20{%20%20%20%20//%20For%20example,%20log%20or%20increment%20analytics%20in%20the%20background%20%20%20%20await%20fetch(%20%20%20%20%20%20`https://my-analytics-service.example.com/log?country=${country}`,%20%20%20%20);%20%20});%20%20%20return%20response;}%20In%20your%20response:%20%201.%20Keep%20the%20example%20simple%20and%20focused%20on%20demonstrating%20the%20core%20functionality%20of%20the%20code%20%202.%20DO%20NOT%20include%20unnecessary%20features%20or%20complexity,%20aim%20to%20only%20showcase%20the%20essential%20parts%20%203.%20Show%20the%20code%20in%20a%20way%20that%20is%20easy%20to%20understand%20and%20implement%20%204.%20Provide%20clear%20and%20concise%20explanations%20for%20each%20part%20of%20the%20code)

*   `after()` does not block the response. The callback runs once rendering or the response is finished.
*   `after()` is not a [Dynamic API](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-apis); calling it does not cause a route to become dynamic.
*   If you need to configure or extend the timeout for tasks, you can use [`maxDuration`](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#maxduration) in Next.js.
*   For more usage examples (including in Server Components, Server Actions, or Middleware), see [after() in the Next.js docs](https://nextjs.org/docs/app/api-reference/functions/after).

## [Helper methods (non-Next.js usage or older Next.js versions)](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#helper-methods-non-next.js-usage-or-older-next.js-versions)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#helper-methods-non-next.js-usage-or-older-next.js-versions)

If you're not using Next.js 15.1 or above (or you are using other frameworks), you can use the methods from `@vercel/functions` below.

### [`waitUntil`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil)

Description: Extends the lifetime of the request handler for the lifetime of the given Promise. The `waitUntil()` method enqueues an asynchronous task to be performed during the lifecycle of the request. You can use it for anything that can be done after the response is sent, such as logging, sending analytics, or updating a cache, without blocking the response. `waitUntil()` is available in Node.js and in the [Edge Runtime](https://vercel.com/docs/functions/runtimes/edge).

Promises passed to `waitUntil()` will have the same timeout as the function itself. If the function times out, the promises will be cancelled.

| Name | Type | Description |
| --- | --- | --- |
| `promise` | [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) | The promise to wait for. |

If you're using Next.js 15.1 or above, use [`after()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#using-after-in-nextjs) from `next/server` instead. Otherwise, see below.

api/hello.ts

```
import { waitUntil } from '@vercel/functions';
 
async function getBlog() {
  const res = await fetch('https://my-analytics-service.example.com/blog/1');
  return res.json();
}
 
export default {
  fetch(request: Request) {
    waitUntil(getBlog().then((json) => console.log({ json })));
    return new Response(`Hello from ${request.url}, I'm a Vercel Function!`);
  },
};
```

[Open in Open in v0](https://v0.app/chat?q=%20%20Create%20a%20minimal%20example%20app%20for%20this%20code:%20import%20{%20waitUntil%20}%20from%20%27@vercel/functions%27;%20async%20function%20getBlog()%20{%20%20const%20res%20=%20await%20fetch(%27https://my-analytics-service.example.com/blog/1%27);%20%20return%20res.json();}%20export%20default%20{%20%20fetch(request:%20Request)%20{%20%20%20%20waitUntil(getBlog().then((json)%20=%3E%20console.log({%20json%20})));%20%20%20%20return%20new%20Response(`Hello%20from%20${request.url},%20I%27m%20a%20Vercel%20Function!`);%20%20},};%20In%20your%20response:%20%201.%20Keep%20the%20example%20simple%20and%20focused%20on%20demonstrating%20the%20core%20functionality%20of%20the%20code%20%202.%20DO%20NOT%20include%20unnecessary%20features%20or%20complexity,%20aim%20to%20only%20showcase%20the%20essential%20parts%20%203.%20Show%20the%20code%20in%20a%20way%20that%20is%20easy%20to%20understand%20and%20implement%20%204.%20Provide%20clear%20and%20concise%20explanations%20for%20each%20part%20of%20the%20code)

### [`getEnv`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getenv)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getenv)

Description: Gets the [System Environment Variables](https://vercel.com/docs/environment-variables/system-environment-variables#system-environment-variables) exposed by Vercel.

api/example.ts

```
import { getEnv } from '@vercel/functions';
 
export default {
  fetch(request) {
    const { VERCEL_REGION } = getEnv();
    return new Response(`Hello from ${VERCEL_REGION}`);
  },
};
```

### [`geolocation`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#geolocation)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#geolocation)

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
| `request` | [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) | The incoming request object which provides the IP |

api/example.ts

```
import { geolocation } from '@vercel/functions';
 
export default {
  fetch(request) {
    const details = geolocation(request);
    return Response.json(details);
  },
};
```

### [`ipAddress`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#ipaddress)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#ipaddress)

Description: Returns the IP address of the request from the headers.

| Name | Type | Description |
| --- | --- | --- |
| `request` | [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) | The incoming request object which provides the IP |

api/example.ts

```
import { ipAddress } from '@vercel/functions';
 
export default {
  fetch(request) {
    const ip = ipAddress(request);
    return new Response(`Your ip is ${ip}`);
  },
};
```

### [`invalidateByTag`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebytag)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebytag)

Description: Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.

| Name | Type | Description |
| --- | --- | --- |
| `tag` | `string` or `string[]` | The cache tag (or multiple tags) to invalidate. |

api/example.ts

```
import { invalidateByTag } from '@vercel/functions';
 
export default {
  async fetch(request) {
    await invalidateByTag('my-tag-name');
    return new Response('Success');
  },
};
```

### [`dangerouslyDeleteByTag`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebytag)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebytag)

Description: Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request. Use this method with caution because one tag can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to [cache stampede problem](https://en.wikipedia.org/wiki/Cache_stampede). This method is for advanced use cases and is not recommended; prefer using `invalidateByTag` instead.

| Name | Type | Description |
| --- | --- | --- |
| `tag` | `string` or `string[]` | The cache tag (or multiple tags) to dangerously delete. |
| `options` | `{ revalidationDeadlineSeconds: number }` | The time in seconds before the delete deadline. If a request is made before the deadline, it will revalidate in the background. Otherwise it will be dangerously deleted and revalidate in the foreground. |

api/example.ts

```
import { dangerouslyDeleteByTag } from '@vercel/functions';
 
export default {
  async fetch(request) {
    await dangerouslyDeleteByTag('my-tag-name', {
      revalidationDeadlineSeconds: 10,
    });
    return new Response('Success');
  },
};
```

### [`invalidateBySrcImage`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebysrcimage)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebysrcimage)

Description: Marks all cached content associated with a source image as stale, causing those cache entries to be revalidated in the background on the next request. This invalidates all cached transformations of the source image.

Learn more about [purging Vercel CDN cache](https://vercel.com/docs/cdn-cache/purge).

| Name | Type | Description |
| --- | --- | --- |
| `srcImage` | `string` | The source image to invalidate. |

api/example.ts

```
import { invalidateBySrcImage } from '@vercel/functions';
 
export default {
  async fetch(request) {
    await invalidateBySrcImage('/api/avatar/1');
    return new Response('Success');
  },
};
```

### [`dangerouslyDeleteBySrcImage`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebysrcimage)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebysrcimage)

Description: Marks all cached content associated with a source image as deleted, causing those cache entries to be revalidated in the foreground on the next request. Use this method with caution because deleting the cache can cause many concurrent requests to the origin leading to [cache stampede problem](https://en.wikipedia.org/wiki/Cache_stampede). This method is for advanced use cases and is not recommended; prefer using `invalidateBySrcImage` instead.

Learn more about [purging Vercel CDN cache](https://vercel.com/docs/cdn-cache/purge).

| Name | Type | Description |
| --- | --- | --- |
| `srcImage` | `string` | The source image to dangerously delete. |
| `options` | `{ revalidationDeadlineSeconds: number }` | The time in seconds before the delete deadline. If a request is made before the deadline, it will revalidate in the background. Otherwise it will be dangerously deleted and revalidate in the foreground. |

api/example.ts

```
import { dangerouslyDeleteBySrcImage } from '@vercel/functions';
 
export default {
  async fetch(request) {
    await dangerouslyDeleteBySrcImage('/api/avatar/1', {
      revalidationDeadlineSeconds: 10,
    });
    return new Response('Success');
  },
};
```

### [`addCacheTag`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#addcachetag)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#addcachetag)

Description: Adds one or more tags to a cached response, so that you can later invalidate the cache associated with these tag(s) using `invalidateByTag()`.

| Name | Type | Description |
| --- | --- | --- |
| `tag` | `string` or `string[]` | One or more tags to add to the cached response. |

api/example.ts

```
import { addCacheTag } from '@vercel/functions';
 
export default {
  async fetch(request) {
    const id = new URL(request.url).searchParams.get('id');
    const res = await fetch(`https://api.example.com/${id}`);
    const product = await res.json();
    await addCacheTag(`product-${id},products`);
    return Response.json(product, {
      headers: {
        'Vercel-CDN-Cache-Control': 'public, max-age=86400',
      },
    });
  },
};
```

Alternatively, you can set the `Vercel-Cache-Tag` response header with a comma-separated list of tags instead of using `addCacheTag()`. See [cache tags](https://vercel.com/docs/cdn-cache/purge#cache-tags) for more details.

#### [Limits](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#limits)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#limits)

*   A cached response can have a maximum of 128 tags.
*   The maximum tag length is 256 bytes (UTF-8 encoded).
*   Tag names cannot contain commas.

### [`getCache`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getcache)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getcache)

Description: Returns a `RuntimeCache` object that allows you to interact with the Vercel Runtime Cache in any Vercel region. Use this for storing and retrieving data across function, routing middleware, and build execution within a Vercel region.

| Name | Type | Description |
| --- | --- | --- |
| `keyHashFunction` | `(key: string) => string` | Optional custom hash function for generating keys. |
| `namespace` | `String` | Optional namespace to prefix cache keys. |
| `namespaceSeparator` | `String` | Optional separator string for the namespace. |

#### [Specification](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#specification)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#specification)

`RuntimeCache` provides the following methods:

| Method | Description | Parameters |
| --- | --- | --- |
| `get` | Retrieves a value from the Vercel Runtime Cache. | `key: string`: The cache key |
| `set` | Stores a value in the Vercel Runtime Cache with optional `ttl` and/or `tags`. The `name` option allows a human-readable label to be associated with the cache entry for observability purposes. | * `key: string`: The cache key * `value: unknown`: The value to store * `options?: { name?: string; tags?: string[]; ttl?: number }` Configuration object (not required) |
| `delete` | Removes a value from the Vercel Runtime Cache by key | `key: string`: The cache key to delete |
| `expireTag` | Expires all cache entries associated with one or more tags | `tag: string | string[]`: Tag or array of tags to expire |

api/example.ts

```
import { getCache } from '@vercel/functions';
 
export default {
  async fetch(request) {
    const cache = getCache();
 
    // Get a value from cache
    const value = await cache.get('somekey');
 
    if (value) {
      return new Response(JSON.stringify(value));
    }
 
    const res = await fetch('https://api.vercel.app/blog');
    const originValue = await res.json();
 
    // Set a value in cache with TTL and tags
    await cache.set('somekey', originValue, {
      ttl: 3600, // 1 hour in seconds
      tags: ['example-tag'],
    });
 
    return new Response(JSON.stringify(originValue));
  },
};
```

After assigning tags to your cached data, use the `expireTag` method to invalidate all cache entries associated with that tag. This operation is propagated globally across all Vercel regions within 300ms.

app/actions.ts

```
'use server';
 
import { getCache } from '@vercel/functions';
 
export default async function action() {
  await getCache().expireTag('blog');
}
```

#### [Limits and usage](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#limits-and-usage)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#limits-and-usage)

The Runtime Cache is isolated per Vercel project and deployment environment (`preview` and `production`). Cached data is persisted across deployments and can be invalidated either through time-based expiration or by calling `expireTag`. However, TTL (time-to-live) and tag updates aren't reconciled between deployments. In those cases, we recommend either purging the runtime cache or modifying the cache key.

The Runtime Cache API does not have first class integration with [Incremental Static Regeneration](https://vercel.com/docs/incremental-static-regeneration). This means that:

*   Runtime Cache entry tags will not apply to ISR pages, so you cannot use expireTag to invalidate both caches.
*   Runtime Cache entry TTLs will have no effect on the ISR revalidation time and
*   Next.js's `revalidatePath` and `revalidateTag`API does not invalidate the Runtime Cache.

The following Runtime Cache limits apply:

*   The maximum size of an item in the cache is 2 MB. Items larger than this will not be cached.
*   A cached item can have a maximum of 128 tags.
*   The maximum tag length is 256 bytes.

Usage of the Vercel Runtime Cache is charged, learn more about pricing in the [regional pricing docs](https://vercel.com/docs/pricing/regional-pricing).

### [Database Connection Pool Management](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#database-connection-pool-management)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#database-connection-pool-management)

#### [`attachDatabasePool`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#attachdatabasepool)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#attachdatabasepool)

Call this function right after creating a database pool to ensure proper connection management in [Fluid Compute](https://vercel.com/docs/fluid-compute). This function ensures that idle pool clients are properly released before functions suspend.

Supports PostgreSQL (pg), MySQL2, MariaDB, MongoDB, Redis (ioredis), Cassandra (cassandra-driver), and other compatible pool types.

| Name | Type | Description |
| --- | --- | --- |
| `dbPool` | `DbPool` | The database pool object. |

api/database.ts

TypeScript

```
import { Pool } from 'pg';
import { attachDatabasePool } from '@vercel/functions';
 
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
 
attachDatabasePool(pool);
 
export default {
  async fetch() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT NOW()');
      return Response.json(result.rows[0]);
    } finally {
      client.release();
    }
  },
};
```

### [OIDC methods](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#oidc-methods)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#oidc-methods)

#### [`awsCredentialsProvider`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#awscredentialsprovider)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#awscredentialsprovider)

This function has moved from `@vercel/functions/oidc` to `@vercel/oidc-aws-credentials-provider`.

Description: Obtains the Vercel OIDC token and creates an AWS credential provider function that gets AWS credentials by calling the STS `AssumeRoleWithWebIdentity` API.

| Name | Type | Description |
| --- | --- | --- |
| `roleArn` | `string` | ARN of the role that the caller is assuming. |
| `clientConfig` | `Object` | Custom STS client configurations overriding the default ones. |
| `clientPlugins` | `Array` | Custom STS client middleware plugin to modify the client default behavior. |
| `roleAssumerWithWebIdentity` | `Function` | A function that assumes a role with web identity and returns a promise fulfilled with credentials for the assumed role. |
| `roleSessionName` | `string` | An identifier for the assumed role session. |
| `providerId` | `string` | The fully qualified host component of the domain name of the identity provider. |
| `policyArns` | `Array` | ARNs of the IAM managed policies that you want to use as managed session policies. |
| `policy` | `string` | An IAM policy in JSON format that you want to use as an inline session policy. |
| `durationSeconds` | `number` | The duration, in seconds, of the role session. Defaults to 3600 seconds. |

api/example.ts

```
import * as s3 from '@aws-sdk/client-s3';
import { awsCredentialsProvider } from '@vercel/oidc-aws-credentials-provider';
 
const s3Client = new s3.S3Client({
  credentials: awsCredentialsProvider({
    roleArn: process.env.AWS_ROLE_ARN,
  }),
});
```

#### [`getVercelOidcToken`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getverceloidctoken)[](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getverceloidctoken)

This function has moved from `@vercel/functions/oidc` to `@vercel/oidc`.

Description: Returns the OIDC token from the request context or the environment variable. This function first checks if the OIDC token is available in the environment variable `VERCEL_OIDC_TOKEN`. If it is not found there, it retrieves the token from the request context headers.

api/example.ts

```
import { ClientAssertionCredential } from '@azure/identity';
import { CosmosClient } from '@azure/cosmos';
import { getVercelOidcToken } from '@vercel/oidc';
 
const credentialsProvider = new ClientAssertionCredential(
  process.env.AZURE_TENANT_ID,
  process.env.AZURE_CLIENT_ID,
  getVercelOidcToken,
);
 
const cosmosClient = new CosmosClient({
  endpoint: process.env.COSMOS_DB_ENDPOINT,
  aadCredentials: credentialsProvider,
});
 
export const GET = () => {
  const container = cosmosClient
    .database(process.env.COSMOS_DB_NAME)
    .container(process.env.COSMOS_DB_CONTAINER);
  const items = await container.items.query('SELECT * FROM f').fetchAll();
  return Response.json({ items: items.resources });
};
```

* * *

[Previous API Reference](https://vercel.com/docs/functions/functions-api-reference)[Next Python](https://vercel.com/docs/functions/functions-api-reference/vercel-sdk-python)

Was this helpful?

supported.

Send

Other frameworks

Choose a framework to optimize documentation to:

*    Other frameworks

*   [Install and use the package](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#install-and-use-the-package)
*   [Usage with Next.js](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#usage-with-next.js)
*   [Helper methods (non-Next.js usage or older Next.js versions)](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#helper-methods-non-next.js-usage-or-older-next.js-versions)
*   [waitUntil](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil)
*   [getEnv](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getenv)
*   [geolocation](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#geolocation)
*   [ipAddress](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#ipaddress)
*   [invalidateByTag](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebytag)
*   [dangerouslyDeleteByTag](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebytag)
*   [invalidateBySrcImage](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebysrcimage)
*   [dangerouslyDeleteBySrcImage](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebysrcimage)
*   [addCacheTag](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#addcachetag)
*   [Limits](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#limits)
*   [getCache](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getcache)
*   [Specification](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#specification)
*   [Limits and usage](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#limits-and-usage)
*   [Database Connection Pool Management](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#database-connection-pool-management)
*   [attachDatabasePool](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#attachdatabasepool)
*   [OIDC methods](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#oidc-methods)
*   [awsCredentialsProvider](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#awscredentialsprovider)
*   [getVercelOidcToken](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getverceloidctoken)

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
