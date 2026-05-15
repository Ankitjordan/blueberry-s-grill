Routing Middleware

# Routing Middleware

Last updated January 28, 2026

Routing Middleware is available on [all plans](/docs/plans)

Routing Middleware executes code *before* a request is processed on a site, and are built on top of [fluid compute](/docs/fluid-compute). Based on the request, you can modify the response.

Because it runs globally before the cache, Routing Middleware is an effective way of providing personalization to statically generated content. Depending on the incoming request, you can execute custom logic, rewrite, redirect, add headers and more, before returning a response.

The default runtime for Routing Middlewares is [Edge](/docs/functions/runtimes/edge). See [runtime options](#runtime-options) for information on how to change the runtime of your Routing Middleware.

Next.js 16 users: Next.js 16 renamed the middleware file from
`middleware.ts` to `proxy.ts` and changed the function export from
`middleware` to `proxy`. When using Next.js 16 or later, use `proxy.ts`
instead of `middleware.ts`. The proxy function runs on Node.js only (Edge
runtime is not supported). See the [Next.js proxy
documentation](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)
for details.

## [Creating a Routing Middleware](#creating-a-routing-middleware)

You can use Routing Middleware with [any framework](/docs/frameworks). To add a Routing Middleware to your app, you need to create a `middleware.ts` file at your project's root directory.

middleware.ts

```
export default function middleware(request: Request) {
  const url = new URL(request.url);

  // Redirect old paths
  if (url.pathname === '/old-page') {
    return new Response(null, {
      status: 302,
      headers: { Location: '/new-page' },
    });
  }

  // Continue to next handler
  return new Response('Hello from your Middleware!');
}
```

middleware.js

```
export default function middleware(request) {
  const url = new URL(request.url);

  // Redirect old paths
  if (url.pathname === '/old-page') {
    return new Response(null, {
      status: 302,
      headers: { Location: '/new-page' },
    });
  }

  // Continue to next handler
  return new Response('Hello from your Middleware!');
}
```

The `middleware.ts` file should be at the same
level as your `app` or `pages` directory (even if you're using a `src`
directory). See the [Quickstart](/docs/routing-middleware/getting-started)
guide for more information.

## [Logging](#logging)

Routing Middleware has full support for the [`console`](https://developer.mozilla.org/docs/Web/API/Console) API, including `time`, `debug`, `timeEnd`. Logs will appear inside your Vercel project by clicking View Functions Logs next to the deployment.

## [Using a database with Routing Middleware](#using-a-database-with-routing-middleware)

If your Routing Middleware depends on a database far away from one of [our supported regions](/docs/regions), the overall latency of API requests could be slower than expected, due to network latency while connecting to the database from an edge region. To avoid this issue, use a global database. Vercel has multiple global storage products, including [Edge Config](/docs/edge-config) and [Vercel Blob](/docs/storage/vercel-blob). You can also explore the storage category of the [Vercel Marketplace](/marketplace?category=storage) to learn which option is best for you.

## [Limits on requests](#limits-on-requests)

The following limits apply to requests processed by Routing Middleware:

| Name | Limit |
| --- | --- |
| Maximum URL length | 14 KB |
| Maximum request body length | 4 MB |
| Maximum number of request headers | 64 |
| Maximum request headers length | 16 KB |

## [Runtime options](#runtime-options)

Routing Middleware is available on the [Node.js](/docs/functions/runtimes/node-js), [Bun](/docs/functions/runtimes/bun), and [Edge](/docs/functions/runtimes/edge) runtimes. The default runtime for Routing Middleware is Edge. You can change the runtime to Node.js by exporting a [`config`](/docs/routing-middleware/api#config-object) object with a `runtime` property in your `middleware.ts` file.

To use the Bun runtime, set [`bunVersion`](/docs/project-configuration#bunversion) in your `vercel.json` file and your runtime config to `nodejs`.

middleware.ts

```
export const config = {
  runtime: 'nodejs', // or 'edge' (default)
};
export default function middleware(request: Request) {
  // Your middleware logic here
  return new Response('Hello from your Middleware!');
}
```

middleware.js

```
export const config = {
  runtime: 'nodejs' // or 'edge' (default)
}
export default function middleware(request: Request) {
  // Your middleware logic here
  return new Response('Hello from your Middleware!');
}
```

middleware.ts

```
export const config = {
  runtime: 'nodejs', // or 'edge' (default)
};
export default function middleware(request: Request) {
  // Your middleware logic here
  return new Response('Hello from your Middleware!');
}
```

middleware.js

```
export const config = {
  runtime: 'nodejs', // or 'edge' (default)
};
export default function middleware(request) {
  // Your middleware logic here
  return new Response('Hello from your Middleware!');
}
```

middleware.ts

```
export const config = {
  runtime: 'nodejs', // or 'edge' (default)
};
export default function middleware(request: Request) {
  // Your middleware logic here
  return new Response('Hello from your Middleware!');
}
```

middleware.js

```
export const config = {
  runtime: 'nodejs' // or 'edge' (default)
}
export default function middleware(request: Request) {
  // Your middleware logic here
  return new Response('Hello from your Middleware!');
}
```

## [Pricing](#pricing)

Routing Middleware is priced using the [fluid compute](/docs/fluid-compute) model, which means you are charged by the amount of compute resources used by your Routing Middleware. See the [fluid compute pricing documentation](/docs/functions/usage-and-pricing) for more information.

## [Observability](#observability)

The [Vercel Observability dashboard](/docs/observability) provides visibility into your routing middleware usage, including invocation counts and performance metrics. You can get more [insights](/docs/observability/insights) with [Observability Plus](/docs/observability/observability-plus):

* Analyze invocations by request path
* Break down actions by type, such as redirects or rewrites
* View rewrite targets and frequency
* Use the query builder for custom insights

## [More resources](#more-resources)

Learn more about Routing Middleware by exploring the following resources:

* [Getting Started with Routing Middleware](/docs/routing-middleware/getting-started)
* [Routing Middleware API Reference](/docs/routing-middleware/api)
* [Fluid compute](/docs/fluid-compute)
* [Runtimes](/docs/functions/runtimes)

---

[Previous

Functions](/docs/functions)[Next

Getting Started](/docs/routing-middleware/getting-started)

Was this helpful?
