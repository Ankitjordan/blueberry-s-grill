Title: Functions API Reference

URL Source: https://vercel.com/docs/functions/functions-api-reference

Markdown Content:
Functions are defined similar to a [Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) in Next.js. When using Next.js App Router, you can define a function in a file under `app/api/my-route/route.ts` in your project. Vercel will deploy any file under `app/api/` as a function.

Vercel Functions use a Web Handler, which consists of the `request` parameter that is an instance of the web standard [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) API. Next.js [extends](https://nextjs.org/docs/app/api-reference/functions/next-request) the standard `Request` object with additional properties and methods.

| Parameter | Description | Next.js | Other Frameworks |
| --- | --- | --- | --- |
| `request` | An instance of the `Request` object | [`NextRequest`](https://nextjs.org/docs/api-reference/next/server#nextrequest) | [`Request`](https://developer.mozilla.org/docs/Web/API/Request) |
| `context` | Deprecated, use [`@vercel/functions`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil) instead | N/A | [`{ waitUntil }`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil) |

This feature is only available in the Node.js runtime.

Cancelling requests lets you clean up resources or stop long-running tasks when the client disconnects, such as when a user stops an AI chat response or closes a browser tab.

When cancellation is enabled, Vercel notifies your function through the standard [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) on `request.signal`. When the client disconnects, the signal fires and the function is terminated.

This differs from a standalone Node.js server, where your process continues running after a client disconnects. In a serverless environment, the execution context can be reclaimed at any time after cancellation. If you have work that must complete (such as flushing logs, writing to a database, or updating a cache), wrap it in [`waitUntil`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil) or [`after`](https://nextjs.org/docs/app/api-reference/functions/after).

Cancellation is opt-in. In your `vercel.json`, add `"supportsCancellation": true` to the [specific paths](https://vercel.com/docs/project-configuration#key-definition) you want to enable it for:

Termination on disconnect applies to every function matching the glob, whether or not your code listens for the abort signal. Any work not wrapped in `waitUntil` or `after` will be lost on cancellation. This is why cancellation is opt-in. Enabling it means your functions can be terminated early, so you should only enable it for functions that are prepared to handle that.

The `request.signal` is a standard `AbortSignal`. You can pass it directly to any API that accepts one, such as `fetch`:

If you need to perform custom cleanup on abort or coordinate cancellation across multiple operations, you can create your own `AbortController` and wire it to `request.signal`:

To run cleanup work after the client disconnects, combine `waitUntil` with a deferred promise. This keeps the execution context alive until your cleanup finishes. In this example, `abortPendingTask` only runs when the client disconnects. On normal completion, the `pipeTo` promise resolves `cleanup` once all response bytes have been sent:

To configure your function when using the App Router in Next.js, you use [segment options](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config), rather than a `config` object.

The table below shows a highlight of the valid config options. For detailed information on all the config options, see the [Configuring Functions](https://vercel.com/docs/functions/configuring-functions) docs.

| Property | Type | Description |
| --- | --- | --- |
| [`runtime`](https://vercel.com/docs/functions/configuring-functions/runtime) | `string` | This optional property defines the runtime to use, and if not set the runtime will default to `nodejs`. |
| [`preferredRegion`](https://vercel.com/docs/functions/configuring-functions/region) | `string` | This optional property and can be used to specify the [regions](https://vercel.com/docs/regions#region-list) in which your function should execute. This can only be set when the `runtime` is set to `edge` |
| [`maxDuration`](https://vercel.com/docs/functions/configuring-functions/duration) | `int` | This optional property can be used to specify the maximum duration in seconds that your function can run for. This can't be set when the `runtime` is set to `edge` |

This feature is supported on the Node.js and Python runtimes.

A `SIGTERM` signal is sent to a function when it is about to be terminated, such as during scale-down events. This allows you to perform any necessary cleanup operations before the function instance is terminated.

Your code can run for up to 500 milliseconds after receiving a `SIGTERM` signal. After this period, the function instance will be terminated immediately.

The `@vercel/functions` package provides a set of helper methods and utilities for working with Vercel Functions.

*   [`waitUntil()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil): This method allows you to extend the lifetime of a request handler for the duration of a given Promise . It's useful for tasks that can be performed after the response is sent, such as logging or updating a cache.
*   [`getEnv`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getenv): This function retrieves System Environment Variables exposed by Vercel.
*   [`geolocation()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#geolocation): Returns location information for the incoming request, including details like city, country, and coordinates.
*   [`ipAddress()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#ipaddress): Extracts the IP address of the request from the headers.
*   [`invalidateByTag()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebytag): Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.
*   [`dangerouslyDeleteByTag()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebytag): Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request.
*   [`invalidateBySrcImage()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#invalidatebysrcimage): Marks all cached content associated with a source image as stale, causing those cache entries to be revalidated in the background on the next request. This invalidates all cached transformations of the source image.
*   [`dangerouslyDeleteBySrcImage()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#dangerouslydeletebysrcimage): Marks all cached content associated with a source image as deleted, causing those cache entries to be revalidated in the foreground on the next request. Use this method with caution because deleting the cache can cause many concurrent requests to the origin leading to [cache stampede problem](https://en.wikipedia.org/wiki/Cache_stampede).
*   [`getCache()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getcache): Obtain a [`RuntimeCache`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getcache) object to interact with the [Vercel Runtime Cache](https://vercel.com/docs/runtime-cache).

See the [`@vercel/functions`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package) documentation for more information.

The `@vercel/oidc` package was previously provided by `@vercel/functions/oidc`.

The `@vercel/oidc` package provides helper methods and utilities for working with OpenID Connect (OIDC) tokens.

*   [`getVercelOidcToken()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#getverceloidctoken): Retrieves the OIDC token from the request context or environment variable.

See the [`@vercel/oidc`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package) documentation for more information.

The `@vercel/oidc-aws-credentials-provider` package was previously provided by `@vercel/functions/oidc`.

The `@vercel/oidc-aws-credentials-provider` package provides helper methods and utilities for working with OpenID Connect (OIDC) tokens and AWS credentials.

*   [`awsCredentialsProvider()`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#awscredentialsprovider): This function helps in obtaining AWS credentials using Vercel's OIDC token.

See the [`@vercel/oidc-aws-credentials-provider`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package) documentation for more information.
