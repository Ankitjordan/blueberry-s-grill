Title: Nuxt on Vercel

URL Source: https://vercel.com/docs/frameworks/full-stack/nuxt

Markdown Content:
Nuxt is an open-source framework that streamlines the process of creating modern Vue apps. It offers server-side rendering, SEO features, automatic code splitting, prerendering, and more out of the box. It also has [an extensive catalog of community-built modules](https://nuxt.com/modules), which allow you to integrate popular tools with your projects.

You can deploy Nuxt static and server-side rendered sites on Vercel with no configuration required.

To get started with Nuxt on Vercel:

*   If you already have a project with Nuxt, install [Vercel CLI](https://vercel.com/docs/cli) and run the `vercel` command from your project's root directory
*   Clone one of our Nuxt example repos to your favorite git provider and deploy it on Vercel with the button below:

Vercel deployments can [integrate with your git provider](https://vercel.com/docs/git) to [generate preview URLs](https://vercel.com/docs/deployments/environments#preview-environment-pre-production) for each pull request you make to your Nuxt project.

The following table outlines the differences between `nuxt build` and `nuxt generate` on Vercel:

| Feature | `nuxt build` | `nuxt generate` |
| --- | --- | --- |
| Default build command | Yes | No |
| Supports all Vercel features out of the box | Yes | Yes |
| [Supports SSR](https://vercel.com/docs/frameworks/full-stack/nuxt#server-side-rendering-ssr) | Yes | No |
| [Supports SSG](https://vercel.com/docs/frameworks/full-stack/nuxt#static-rendering) | Yes, [with nuxt config](https://vercel.com/docs/frameworks/full-stack/nuxt#static-rendering) | Yes |
| [Supports ISR](https://vercel.com/docs/frameworks/full-stack/nuxt#incremental-static-regeneration-isr) | Yes | No |

In general, `nuxt build` is likely best for most use cases. Consider using `nuxt generate` to build [fully static sites](https://vercel.com/docs/frameworks/full-stack/nuxt#static-rendering).

You can configure your Nuxt deployment by creating a Nuxt config file in your project's root directory. It can be a TypeScript, JavaScript, or MJS file, but [the Nuxt team recommends using TypeScript](https://nuxt.com/docs/getting-started/configuration#nuxt-configuration). Using TypeScript will allow your editor to suggest the correct names for configuration options, which can help mitigate typos.

Your Nuxt config file should default export `defineNuxtConfig` by default, which you can add an options object to.

The following is an example of a Nuxt config file with no options defined:

[See the Nuxt Configuration Reference docs for a list of available options](https://nuxt.com/docs/api/configuration/nuxt-config/#nuxt-configuration-reference).

With the `routeRules` config option, you can:

*   Create redirects
*   Modify a route's response headers
*   Enable ISR
*   Deploy specific routes statically
*   Deploy specific routes with SSR
*   and more

At the moment, there is no way to configure route deployment options within your page components, but development of this feature is in progress.

The following is an example of a Nuxt config that:

*   Creates a redirect
*   Modifies a route's response headers
*   Opts a set of routes into client-side rendering

To learn more about `routeRules`:

[Vercel Functions](https://vercel.com/docs/functions) enable developers to write functions that use resources that scale up and down based on traffic demands. This prevents them from failing during peak hours, but keeps them from running up high costs during periods of low activity.

Nuxt deploys routes defined in `/server/api`, `/server/routes`, and `/server/middleware` as one server-rendered Function by default. Nuxt Pages, APIs, and Middleware routes get bundled into a single Vercel Function.

The following is an example of a basic API Route in Nuxt:

You can test your API Routes with `nuxt dev`.

You can read and write server files with Nuxt on Vercel. One way to do this is by using Nitro with Vercel Functions and a Redis driver such as the [Upstash Redis driver](https://unstorage.unjs.io/drivers/upstash). Use Nitro's [server assets](https://nitro.unjs.io/guide/assets#server-assets) to include files in your project deployment. Assets within `server/assets` get included by default.

To access server assets, you can use Nitro's [storage API](https://nitro.unjs.io/guide/storage):

To write files, mount [Redis storage](https://nitro.unjs.io/guide/storage) with a Redis driver such as the [Upstash Redis driver](https://unstorage.unjs.io/drivers/upstash).

First, [install Upstash Redis from the Vercel Marketplace](https://vercel.com/marketplace/upstash) to get your Redis credentials.

Then update your `nuxt.config.ts` file:

Use with the storage API.

[See an example code repository](https://github.com/pi0/nuxt-server-assets/tree/main).

Middleware is code that executes before a request gets processed. Because Middleware runs before the cache, it's an effective way of providing personalization to statically generated content.

Nuxt has two forms of Middleware:

*   [Server middleware](https://vercel.com/docs/frameworks/full-stack/nuxt#nuxt-server-middleware-on-vercel)
*   [Route middleware](https://vercel.com/docs/frameworks/full-stack/nuxt#nuxt-route-middleware-on-vercel)

In Nuxt, modules defined in `/server/middleware` will get deployed as [server middleware](https://nuxt.com/docs/guide/directory-structure/server#server-middleware). Server middleware should not have a return statement or send a response to the request.

Server middleware is best used to read data from or add data to a request's `context`. Doing so allows you to handle authentication or check a request's params, headers, url, [and more](https://www.w3schools.com/nodejs/obj_http_incomingmessage.asp).

The following example demonstrates Middleware that:

*   Checks for a cookie
*   Tries to fetch user data from a database based on the request
*   Adds the user's data and the cookie data to the request's context

You could then access that data in a page on the frontend with the [`useRequestEvent`](https://nuxt.com/docs/api/composables/use-request-event) hook. This hook is only available in routes deployed with SSR. If your page renders in the browser, `useRequestEvent` will return `undefined`.

The following example demonstrates a page fetching data with `useRequestEvent`:

Nuxt's route middleware runs before navigating to a particular route. While server middleware runs in Nuxt's [Nitro engine](https://nitro.unjs.io/), route middleware runs in Vue.

Route middleware is best used when you want to do things that server middleware can't, such as redirecting users, or preventing them from navigating to a route.

The following example demonstrates route middleware that redirects users to a secret route:

By default, route middleware code will only run on pages that specify them. To do so, within the `<script>` tag for a page, you must call the `definePageMeta` method, passing an object with `middleware: 'middleware-filename'` set as an option.

The following example demonstrates a page that runs the above redirect middleware:

To make a middleware global, add the `.global` suffix before the file extension. The following is an example of a basic global middleware file:

[See a detailed example of route middleware in Nuxt's Middleware example docs](https://nuxt.com/docs/examples/routing/middleware).

Middleware with Nuxt on Vercel enables you to:

*   Redirect users, and prevent navigation to routes
*   Run authentication checks on the server, and pass results to the frontend
*   Scope middleware to specific routes, or run it on all routes

[Learn more about Middleware](https://nuxt.com/docs/guide/directory-structure/middleware)

Server-Side Rendering (SSR) allows you to render pages dynamically on the server. This is useful for pages where the rendered data needs to be unique on every request. For example, checking authentication or looking at the location of an incoming request.

Nuxt allows you to deploy your projects with a strategy called [Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering). In concrete terms, this allows you to deploy your routes with SSR by default and opt specific routes out [in your Nuxt config](https://vercel.com/docs/frameworks/full-stack/nuxt#editing-your-nuxt-config).

When you deploy your app with Universal Rendering, it renders on the server once, then your client-side JavaScript code gets interpreted in the browser again once the page loads.

On Vercel, Nuxt apps are server-rendered by default

SSR with Nuxt on Vercel:

*   Scales to zero when not in use
*   Scales automatically with traffic increases
*   Allows you to opt individual routes out of SSR [with your Nuxt config](https://nuxt.com/docs/getting-started/deployment#client-side-only-rendering)

[Learn more about SSR](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering)

If you deploy with `nuxt build`, you can opt nuxt routes into client-side rendering using `routeRules` by setting `ssr: false` as demonstrated below:

To deploy a fully static site on Vercel, build your project with `nuxt generate`.

Alternatively, you can statically generate some Nuxt routes at build time using the `prerender` route rule in your `nuxt.config.ts`:

To verify that a route is prerendered at build time, check `useNuxtApp().payload.prerenderedAt`.

[Incremental Static Regeneration (ISR)](https://vercel.com/docs/incremental-static-regeneration) allows you to create or update content _without_ redeploying your site. ISR has two main benefits for developers: better performance and faster build times.

To enable ISR in a Nuxt route, add a `routeRules` option to your `nuxt.config.ts`, as shown in the example below:

You should use the `isr` option rather than `swr` to enable ISR in a route. The `isr` option enables Nuxt to use Vercel's Cache.

using ISR with Nuxt on Vercel offers:

*   Better performance with our global [CDN](https://vercel.com/docs/cdn)
*   Zero-downtime rollouts to previously statically generated pages
*   Global content updates in 300ms
*   Generated pages are both cached and persisted to durable storage

[Learn more about ISR with Nuxt](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering).

You can define redirects and response headers with Nuxt on Vercel in your `nuxt.config.ts`:

[Image Optimization](https://vercel.com/docs/image-optimization) helps you achieve faster page loads by reducing the size of images and using modern image formats.

When deploying to Vercel, images are automatically optimized on demand, keeping your build times fast while improving your page load performance and [Core Web Vitals](https://vercel.com/docs/speed-insights).

To use Image Optimization with Nuxt on Vercel, follow [the Image Optimization quickstart](https://vercel.com/docs/image-optimization/quickstart) by selecting Nuxt from the dropdown.

Using Image Optimization with Nuxt on Vercel:

*   Requires zero-configuration for Image Optimization when using `@nuxt/image`
*   Helps your team ensure great performance by default
*   Keeps your builds fast by optimizing images on-demand

[Learn more about Image Optimization](https://vercel.com/docs/image-optimization)

Dynamic social card images allow you to create a unique image for pages of your site. This is great for sharing links on the web through social platforms or text messages.

To generate dynamic social card images for Nuxt projects, you can use [`nuxt-og-image`](https://nuxtseo.com/og-image/getting-started/installation). It uses the main Nuxt/Nitro [Server-side rendering(SSR)](https://vercel.com/docs/frameworks/full-stack/nuxt#server-side-rendering-ssr) function.

The following example demonstrates using Open Graph (OG) image generation with [`nuxt-og-image`](https://nuxtseo.com/og-image/getting-started/installation):

1.   Create a new OG template

1.   Use that OG image in your pages. Props passed get used in your open graph images.

To see your generated image, run your project and use Nuxt DevTools. Or you can visit the image at its URL `/__og-image__/image/og.png`.

[Learn more about OG Image Generation with Nuxt](https://nuxtseo.com/og-image/getting-started/installation).

The Nuxt team [does not recommend deploying legacy versions of Nuxt (such as Nuxt 2) on Vercel](https://github.com/nuxt/vercel-builder#readme), except as static sites. If your project uses a legacy version of Nuxt, you should either:

If you still want to use legacy Nuxt versions with Vercel, you should only do so by building a static site with `nuxt generate`. We do not recommend deploying legacy Nuxt projects with server-side rendering.

See [our Frameworks documentation page](https://vercel.com/docs/frameworks) to learn about the benefits available to all frameworks when you deploy on Vercel.

Learn more about deploying Nuxt projects on Vercel with the following resources:
