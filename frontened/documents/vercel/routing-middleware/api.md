Menu

# Routing Middleware API

Last updated January 28, 2026

## [Routing Middleware file location and name](#routing-middleware-file-location-and-name)

The Routing Middleware file should be named `middleware.ts` and placed at the root of your project, at the same level as your `package.json` file. This is where Vercel will look for the Routing Middleware when processing requests.

The Routing Middleware must be a default export, with the function being named anything you like. For example, you can name it `router`, `middleware`, or any other name that makes sense for your application.

middleware.ts

```
export default function middleware() {}
```

Next.js 16 users: Next.js 16 renamed the middleware file from
`middleware.ts` to `proxy.ts` and changed the function export from
`middleware` to `proxy`. When using Next.js 16 or later, use `proxy.ts`
instead of `middleware.ts`. The proxy function runs on Node.js only (Edge
runtime is not supported). See the [Next.js proxy
documentation](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)
for details.

## [`config` object](#config-object)

Routing Middleware will be invoked for every route in your project. If you only want it to be run on specific paths, you can define those either with a [custom matcher config](#match-paths-based-on-custom-matcher-config) or with [conditional statements](/docs/routing-middleware/api#match-paths-based-on-conditional-statements).

You can also use the [`runtime` option](#config-properties) to [specify which runtime](#specify-runtime) you would like to use. The default is `edge`.

While the `config` option is the preferred method, as it does not get invoked on every request, you can also use conditional statements to only run the Routing Middleware when it matches specific paths.

### [Match paths based on custom matcher config](#match-paths-based-on-custom-matcher-config)

To decide which route the Routing Middleware should be run on, you can use a custom matcher config to filter on specific paths. The matcher property can be used to define either a single path, or using an array syntax for multiple paths.

#### [Match a single path](#match-a-single-path)

middleware.ts

```
export const config = {
  matcher: '/about/:path*',
};
```

#### [Match multiple paths](#match-multiple-paths)

middleware.ts

```
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
};
```

#### [Match using regex](#match-using-regex)

The matcher config has full [regex](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) support for cases such as negative lookaheads or character matching.

#### [Match based on a negative lookahead](#match-based-on-a-negative-lookahead)

To match all request paths except for the ones starting with:

* `api` (API routes)
* `_next/static` (static files)
* `favicon.ico` (favicon file)

middleware.ts

```
export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
```

#### [Match based on character matching](#match-based-on-character-matching)

To match `/blog/123` but not `/blog/abc`:

middleware.ts

```
export const config = {
  matcher: ['/blog/:slug(\\d{1,})'],
};
```

For help on writing your own regex path matcher, see [Path to regexp](https://github.com/pillarjs/path-to-regexp#path-to-regexp-1).

### [Match paths based on conditional statements](#match-paths-based-on-conditional-statements)

middleware.ts

```
import { rewrite } from '@vercel/functions';

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith('/about')) {
    return rewrite(new URL('/about-2', request.url));
  }

  if (url.pathname.startsWith('/dashboard')) {
    return rewrite(new URL('/dashboard/user', request.url));
  }
}
```

See the [helper methods](#routing-middleware-helper-methods) below for more information on using the `@vercel/functions` package.

### [Specify runtime](#specify-runtime)

To change the runtime from the `edge` default, update the `runtime` option as follows:

middleware.ts

```
export const config = {
  runtime: 'nodejs', // or 'edge' (default)
};
```

To use the Bun runtime with Routing Middleware, set the [`bunVersion`](/docs/project-configuration#bunversion) property in your `vercel.json` file as well as using the `runtime` config shown above to `nodejs`:

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "bunVersion": "1.x"
}
```

### [`config` properties](#config-properties)

| Property | Type | Description |
| --- | --- | --- |
| `matcher` | `string / string[]` | A string or array of strings that define the paths the Middleware should be run on |
| `runtime` | `string` (`edge` or `nodejs`) | A string that defines the Middleware runtime and defaults to `edge` |

## [Routing Middleware signature](#routing-middleware-signature)

The Routing Middleware signature is made up of two parameters: `request` and `context`. The `request` parameter is an instance of the [Request](/docs/functions/edge-functions/edge-functions-api#request) object, and the `context` parameter is an object containing the [`waitUntil`](/docs/functions/edge-functions/edge-functions-api#waituntil) method. Both parameters are optional.

| Parameter | Description | Next.js (/app) or (/pages) | Other Frameworks |
| --- | --- | --- | --- |
| `request` | An instance of the [Request](/docs/functions/edge-functions/edge-functions-api#request) object | [`Request`](https://developer.mozilla.org/docs/Web/API/Request) or [`NextRequest`](https://nextjs.org/docs/api-reference/next/server#nextrequest) | [`Request`](https://developer.mozilla.org/docs/Web/API/Request) |
| `context` | An extension to the standard [`Request`](https://developer.mozilla.org/docs/Web/API/Request) object | [`NextFetchEvent`](https://nextjs.org/docs/api-reference/next/server#nextfetchevent) | [`RequestContext`](/docs/functions/edge-functions/edge-functions-api#requestcontext) |

Routing Middleware comes with built in helpers that are based on the native [`FetchEvent`](https://developer.mozilla.org/docs/Web/API/FetchEvent), [`Response`](https://developer.mozilla.org/docs/Web/API/Response), and [`Request`](https://developer.mozilla.org/docs/Web/API/Request) objects.

[See the section on Routing Middleware helpers for more information](#routing-middleware-helper-methods).

middleware.ts

```
// config with custom matcher
export const config = {
  matcher: '/about/:path*',
};

export default function middleware(request: Request) {
  return Response.redirect(new URL('/about-2', request.url));
}
```

middleware.js

```
// config with custom matcher
export const config = {
  matcher: '/about/:path*',
};

export default function middleware(request) {
  return Response.redirect(new URL('/about-2', request.url));
}
```

middleware.ts

```
// config with custom matcher
export const config = {
  matcher: '/about/:path*',
};

export default function middleware(request: Request) {
  return Response.redirect(new URL('/about-2', request.url));
}
```

middleware.js

```
// config with custom matcher
export const config = {
  matcher: '/about/:path*',
};

export default function middleware(request) {
  return Response.redirect(new URL('/about-2', request.url));
}
```

middleware.ts

```
// config with custom matcher
export const config = {
  matcher: '/about/:path*',
};

export default function middleware(request: Request) {
  return Response.redirect(new URL('/about-2', request.url));
}
```

middleware.js

```
// config with custom matcher
export const config = {
  matcher: '/about/:path*',
};

export default function middleware(request) {
  return Response.redirect(new URL('/about-2', request.url));
}
```

If you're not using a framework, you must either add
`"type": "module"` to your
`package.json` or change your JavaScript Functions'
file extensions from `.js` to
`.mjs`

### [Request](#request)

The `Request` object represents an HTTP request. It is a wrapper around the [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) `Request` object. When using TypeScript, you do not need to import the `Request` object, as it is already available in the global scope.

#### [Request properties](#request-properties)

| Property | Type | Description |
| --- | --- | --- |
| `url` | `string` | The URL of the request |
| `method` | `string` | The HTTP method of the request |
| `headers` | `Headers` | The headers of the request |
| `body` | [`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream) | The body of the request |
| `bodyUsed` | `boolean` | Whether the body has been read |
| `cache` | `string` | The cache mode of the request |
| `credentials` | `string` | The credentials mode of the request |
| `destination` | `string` | The destination of the request |
| `integrity` | `string` | The integrity of the request |
| `redirect` | `string` | The redirect mode of the request |
| `referrer` | `string` | The referrer of the request |
| `referrerPolicy` | `string` | The referrer policy of the request |
| `mode` | `string` | The mode of the request |
| `signal` | [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal) | The signal of the request |
| `arrayBuffer` | `function` | Returns a promise that resolves with an ArrayBuffer |
| `blob` | `function` | Returns a promise that resolves with a Blob |
| `formData` | `function` | Returns a promise that resolves with a FormData |
| `json` | `function` | Returns a promise that resolves with a JSON object |
| `text` | `function` | Returns a promise that resolves with a string |
| `clone` | `function` | Returns a clone of the request |

To learn more about the [`NextRequest`](https://nextjs.org/docs/api-reference/next/server#nextrequest) object and its properties, visit the [Next.js documentation](https://nextjs.org/docs/api-reference/next/server#nextrequest).

### [`waitUntil()`](#waituntil)

The `waitUntil()` method is from the [`ExtendableEvent`](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) interface. It accepts a [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) as an argument, which will keep the function running until the `Promise` resolves.

It can be used to keep the function running after a response has been sent. This is useful when you have an async task that you want to keep running after returning a response.

The example below will:

* Send a response immediately
* Keep the function running for ten seconds
* Fetch a product and log it to the console

middleware.ts

```
import type { NextFetchEvent } from 'next/server';

export const config = {
  matcher: '/',
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProduct() {
  const res = await fetch('https://api.vercel.app/products/1');
  await wait(10000);
  return res.json();
}

export default function middleware(request: Request, context: NextFetchEvent) {
  context.waitUntil(getProduct().then((json) => console.log({ json })));

  return new Response(JSON.stringify({ hello: 'world' }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
```

middleware.js

```
export const config = {
  matcher: '/',
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProduct() {
  const res = await fetch('https://api.vercel.app/products/1');
  await wait(10000);
  return res.json();
}

export default function middleware(request, context) {
  context.waitUntil(getProduct().then((json) => console.log({ json })));

  return new Response(JSON.stringify({ hello: 'world' }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
```

middleware.ts

```
import type { NextFetchEvent } from 'next/server';

export const config = {
  matcher: '/',
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProduct() {
  const res = await fetch('https://api.vercel.app/products/1');
  await wait(10000);
  return res.json();
}

export default function middleware(request: Request, context: NextFetchEvent) {
  context.waitUntil(getProduct().then((json) => console.log({ json })));

  return new Response(JSON.stringify({ hello: 'world' }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
```

middleware.js

```
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getAlbum() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1');
  await wait(10000);
  return res.json();
}

export default function middleware(request, context) {
  context.waitUntil(getAlbum().then((json) => console.log({ json })));

  return new NextResponse(JSON.stringify({ hello: 'world' }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
```

middleware.ts

```
import type { RequestContext } from '@vercel/functions';

export const config = {
  matcher: '/',
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProduct() {
  const res = await fetch('https://api.vercel.app/products/1');
  await wait(10000);
  return res.json();
}

export default function middleware(request: Request, context: RequestContext) {
  context.waitUntil(getProduct().then((json) => console.log({ json })));

  return Response.json(
    { hello: 'world' },
    {
      status: 200,
      headers: { 'content-type': 'application/json' },
    },
  );
}
```

middleware.js

```
export const config = {
  matcher: '/',
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProduct() {
  const res = await fetch('https://api.vercel.app/products/1');
  await wait(10000);
  return res.json();
}

export default function middleware(request, context) {
  context.waitUntil(getProduct().then((json) => console.log({ json })));

  return Response.json(
    { hello: 'world' },
    {
      status: 200,
      headers: { 'content-type': 'application/json' },
    },
  );
}
```

If you're not using a framework, you must either add
`"type": "module"` to your
`package.json` or change your JavaScript Functions'
file extensions from `.js` to
`.mjs`

#### [Context properties](#context-properties)

| Property | Type | Description |
| --- | --- | --- |
| [`waitUntil`](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) | `(promise: Promise<unknown>): void` | Prolongs the execution of the function until the promise passed to `waitUntil` is resolved |

## [Routing Middleware helper methods](#routing-middleware-helper-methods)

You can use Vercel-specific helper methods to access a request's [geolocation](#geolocation), [IP Address](/docs/functions/functions-api-reference/vercel-functions-package#ipaddress), and more when deploying Middleware on Vercel.

You can access these helper methods with the `request` and `response` objects in your middleware handler method.

These helpers are exclusive to Vercel, and will not work on other providers,
even if your app is built with Next.js.

### [Geolocation](#geolocation)

The `geo` helper object returns geolocation information for the incoming request. It has the following properties:

| Property | Description |
| --- | --- |
| `city` | The city that the request originated from |
| `country` | The country that the request originated from |
| `latitude` | The latitude of the client |
| `longitude` | The longitude of the client |
| `region` | The [CDN region](/docs/regions) that received the request |

Each property returns a `string`, or `undefined`.

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'SE';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/secret-page',
};

export default function middleware(request: NextRequest) {
  const country = request.geo?.country ?? 'US';

  console.log(`Visitor from ${country}`);

  const url = request.nextUrl.clone();
  url.pathname = country === BLOCKED_COUNTRY ? '/login' : '/secret-page';

  return NextResponse.rewrite(url);
}
```

middleware.js

```
import { NextResponse } from 'next/server';
// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'SE';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/secret-page',
};

export default function middleware(request) {
  const country = request.geo?.country ?? 'US';

  console.log(`Visitor from ${country}`);

  const url = request.nextUrl.clone();
  url.pathname = country === BLOCKED_COUNTRY ? '/login' : '/secret-page';

  return NextResponse.rewrite(url);
}
```

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'SE';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/secret-page',
};

export default function middleware(request: NextRequest) {
  const country = request.geo?.country ?? 'US';

  console.log(`Visitor from ${country}`);

  const url = request.nextUrl.clone();
  url.pathname = country === BLOCKED_COUNTRY ? '/login' : '/secret-page';

  return NextResponse.rewrite(url);
}
```

middleware.js

```
import { NextResponse } from 'next/server';
// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'SE';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/secret-page',
};

export default function middleware(request) {
  const country = request.geo?.country ?? 'US';

  console.log(`Visitor from ${country}`);

  const url = request.nextUrl.clone();
  url.pathname = country === BLOCKED_COUNTRY ? '/login' : '/secret-page';

  return NextResponse.rewrite(url);
}
```

middleware.ts

```
import { geolocation } from '@vercel/functions';

const BLOCKED_COUNTRY = 'US';

export const config = {
  // Only run the middleware on the home route
  matcher: '/',
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { country } = geolocation(request);
  // You can also get the country using dot notation on the function
  // const country = geolocation(request).country;
  if (country === BLOCKED_COUNTRY) {
    url.pathname = '/blocked.html';
  } else {
    url.pathname = '/index.html';
  }
  // Return a new redirect response
  return Response.redirect(url);
}
```

middleware.js

```
import { geolocation } from '@vercel/functions';

const BLOCKED_COUNTRY = 'US';

export const config = {
  // Only run the middleware on the home route
  matcher: '/',
};

export default function middleware(request) {
  const url = new URL(request.url);
  const { country } = geolocation(request);
  // You can also get the country using dot notation on the function
  // const country = geolocation(request).country;
  if (country === BLOCKED_COUNTRY) {
    url.pathname = '/blocked.html';
  } else {
    url.pathname = '/index.html';
  }
  // Return a new redirect response
  return Response.redirect(url);
}
```

### [IP Address](#ip-address)

The `ip` object returns the IP address of the request from the headers, or `undefined`.

middleware.ts

```
import { ipAddress } from '@vercel/functions';
import { next } from '@vercel/functions';

export default function middleware(request: Request) {
  const ip = ipAddress(request);
  return next({
    headers: { 'x-your-ip-address': ip || 'unknown' },
  });
}
```

middleware.js

```
import { ipAddress } from '@vercel/functions';
import { next } from '@vercel/functions';

export default function middleware(request) {
  const ip = ipAddress(request);
  return next({
    headers: { 'x-your-ip-address': ip || 'unknown' },
  });
}
```

### [`RequestContext`](#requestcontext)

The `RequestContext` is an extension of the standard `Request` object, which contains the [`waitUntil`](#waitUntil) function. The following example works in middleware for all frameworks:

middleware.ts

```
import type { RequestContext } from '@vercel/functions';

export default function handler(request: Request, context: RequestContext) {
  context.waitUntil(getAlbum().then((json) => console.log({ json })));

  return new Response(
    `Hello there, from ${request.url} I'm an Vercel Function!`,
  );
}

export const config = {
  matcher: '/',
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getAlbum() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1');
  await wait(10000);
  return res.json();
}
```

middleware.js

```
export default function handler(request, context) {
  context.waitUntil(getAlbum().then((json) => console.log({ json })));

  return new Response(
    `Hello there, from ${request.url} I'm an Vercel Function!`,
  );
}

export const config = {
  matcher: '/',
};

const wait = (number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getAlbum() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1');
  await wait(10000);
  return res.json();
}
```

### [Rewrites](#rewrites)

The `NextResponse.rewrite()` helper returns a response that rewrites the request to a different URL.

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// Trigger this middleware to run on the `/about` route
export const config = {
  matcher: '/about',
};

export default function middleware(request: NextRequest) {
  // Rewrite to URL
  return NextResponse.rewrite('/about-2');
}
```

middleware.js

```
import { NextResponse } from 'next/server';
// Trigger this middleware to run on the `/about` route
export const config = {
  matcher: '/about',
};

export default function middleware(request) {
  // Rewrite to URL
  return NextResponse.rewrite('/about-2');
}
```

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// Trigger this middleware to run on the `/about` route
export const config = {
  matcher: '/about',
};

export default function middleware(request: NextRequest) {
  // Rewrite to URL
  return NextResponse.rewrite('/about-2');
}
```

middleware.js

```
import { NextResponse } from 'next/server';
// Trigger this middleware to run on the `/about` route
export const config = {
  matcher: '/about',
};

export default function middleware(request) {
  // Rewrite to URL
  return NextResponse.rewrite('/about-2');
}
```

middleware.ts

```
import { rewrite } from '@vercel/functions';
// Trigger this middleware to run on the `/about` route
export const config = {
  matcher: '/about',
};

export default function middleware(request: Request) {
  return rewrite(new URL('/about-2', request.url));
}
```

middleware.js

```
import { rewrite } from '@vercel/functions';
// Trigger this middleware to run on the `/about` route
export const config = {
  matcher: '/about',
};

export default function middleware(request) {
  return rewrite(new URL('/about-2', request.url));
}
```

### [Continuing the Routing Middleware chain](#continuing-the-routing-middleware-chain)

The `NextResponse.next()` helper returns a Response that instructs the function to continue the middleware chain. It takes the following optional parameters:

| Parameter | type | Description |
| --- | --- | --- |
| `headers` | `Headers[]` or `Headers` | The headers you want to set |
| `status` | `number` | The status code |
| `statusText` | `string` | The status text |

The following example adds a custom header, then continues the Routing Middleware chain:

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}
```

middleware.js

```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}
```

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}
```

middleware.js

```
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}
```

middleware.js

```
import { next } from '@vercel/functions';

export default function middleware(request) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Set a new header `x-hello-from-middleware1`
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // Use the `next()` function to forward the request with modified headers
  return next({
    request: {
      headers: requestHeaders,
    },
    headers: {
      'x-hello-from-middleware2': 'hello',
    },
  });
}
```

middleware.ts

```
import { next } from '@vercel/functions';

export default function middleware(request: Request) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Set a new header `x-hello-from-middleware1`
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // Use the `next()` function to forward the request with modified headers
  return next({
    request: {
      headers: requestHeaders,
    },
    headers: {
      'x-hello-from-middleware2': 'hello',
    },
  });
}
```

#### [`next()` no-op example](#next-no-op-example)

This no-op example will return a `200 OK` response with no further action:

middleware.ts

```
import { NextResponse } from 'next/server';
export default function middleware() {
  return NextResponse.next();
}
```

middleware.js

```
import { NextResponse } from 'next/server';
export default function middleware() {
  return NextResponse.next();
}
```

middleware.ts

```
import { NextResponse } from 'next/server';
export default function middleware() {
  return NextResponse.next();
}
```

middleware.js

```
import { NextResponse } from 'next/server';
export default function middleware() {
  return NextResponse.next();
}
```

middleware.ts

```
import { next } from '@vercel/functions';
export default function middleware() {
  return next();
}
```

middleware.js

```
import { next } from '@vercel/functions';
export default function middleware() {
  return next();
}
```

## [More resources](#more-resources)

* [Redirect with unique tokens](/kb/guide/use-crypto-web-api)

---

[Previous

Getting Started](/docs/routing-middleware/getting-started)[Next

Cron Jobs](/docs/cron-jobs)

Was this helpful?
