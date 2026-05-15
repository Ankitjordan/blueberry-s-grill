Title: SvelteKit on Vercel

URL Source: https://vercel.com/docs/frameworks/full-stack/sveltekit

Markdown Content:
SvelteKit is a frontend framework that enables you to build Svelte applications with modern techniques, such as Server-Side Rendering, automatic code splitting, and advanced routing.

You can deploy your SvelteKit projects to Vercel with zero configuration, enabling you to use [Preview Deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production), [Web Analytics](https://vercel.com/docs/frameworks/full-stack/sveltekit#web-analytics), [Vercel functions](https://vercel.com/docs/functions), and more.

To get started with SvelteKit on Vercel:

*   If you already have a project with SvelteKit, install [Vercel CLI](https://vercel.com/docs/cli) and run the `vercel` command from your project's root directory
*   Clone one of our SvelteKit example repos to your favorite git provider and deploy it on Vercel with the button below:

Vercel deployments can [integrate with your git provider](https://vercel.com/docs/git) to [generate preview URLs](https://vercel.com/docs/deployments/environments#preview-environment-pre-production) for each pull request you make to your SvelteKit project.

When you create a new SvelteKit project with `npm create svelte@latest`, it installs `adapter-auto` by default. This adapter detects that you're deploying on Vercel and installs the `@sveltejs/adapter-vercel` plugin for you at build time.

We recommend installing the `@sveltejs/adapter-vercel` package yourself. Doing so will ensure version stability, slightly speed up your CI process, and [allows you to configure default deployment options for all routes in your project](https://vercel.com/docs/frameworks/full-stack/sveltekit#configure-your-sveltekit-deployment).

The following instructions will guide you through adding the Vercel adapter to your SvelteKit project.

1.   You can add [the Vercel adapter](https://kit.svelte.dev/docs/adapter-vercel) to your SvelteKit project by running the following command:

2.   Add the Vercel adapter to your `svelte.config.js` file, [which should be at the root of your project directory](https://kit.svelte.dev/docs/configuration).

In your `svelte.config.js` file, import `adapter` from `@sveltejs/adapter-vercel`, and add your preferred options. The following example shows the default configuration, which uses the Node.js runtime (which run on Vercel functions).

[Learn more about configuring your Vercel deployment in our configuration section below](https://vercel.com/docs/frameworks/full-stack/sveltekit#configure-your-sveltekit-deployment).

You can configure how your SvelteKit project gets deployed to Vercel at the project-level and at the route-level.

Changes to the `config` object you define in `svelte.config.js` will affect the default settings for routes across your whole project. To override this, you can export a `config` object in any route file.

The following is an example of a `svelte.config.js` file that will deploy using server-side rendering in Vercel's Node.js serverless runtime:

You can also configure how individual routes deploy by exporting a `config` object. The following is an example of a route that will deploy on Vercel's Edge runtime:

[Learn about all the config options available in the SvelteKit docs](https://kit.svelte.dev/docs/adapter-vercel#deployment-configuration). You can also see the type definitions for config object properties in [the SvelteKit source code](https://github.com/sveltejs/kit/blob/master/packages/adapter-vercel/index.d.ts#L38).

SvelteKit's docs have [a comprehensive list of all config options available to you](https://kit.svelte.dev/docs/adapter-vercel#deployment-configuration). This section will cover a select few options which may be easier to use with more context.

By default, your SvelteKit routes get bundled into one Function when you deploy your project to Vercel. This configuration typically reduces how often your users encounter [cold starts](https://vercel.com/docs/infrastructure/compute#cold-and-hot-boots).

In most cases, there is no need to modify this option.

Setting `split: true` in your Svelte config will cause your SvelteKit project's routes to get split into separate Vercel Functions.

Splitting your Functions is not typically better than bundling them. You may want to consider setting `split: true` if you're experiencing either of the following issues:

*   You have exceeded the Function size limit for the runtime you're using. Batching too many routes into a single Function could cause you to exceed Function size limits for your Vercel account. See our [Function size limits](https://vercel.com/docs/functions/limitations#bundle-size-limits) to learn more.
*   Your app is experiencing abnormally long cold start times. Batching Vercel functions into one Function will reduce how often users experience cold starts. It can also increase the latency they experience when a cold start is required, since larger functions tend to require more resources. This can result in slower responses to user requests that occur after your Function spins down.

Choosing a region allows you to reduce latency for requests to functions. If you choose a Function region geographically near dependencies, or nearest to your visitor, you can reduce your Functions' latency.

By default, your Vercel Functions will be deployed in _Washington, D.C., USA_, or `iad1`. Adding a region ID to the `regions` array will deploy your Vercel functions there. [See our Vercel Function regions docs to learn how to override this settings](https://vercel.com/docs/functions/regions#select-a-default-serverless-region).

Vercel supports streaming API responses over time with SvelteKit, allowing you to render parts of the UI early, then render the rest as data becomes available. Doing so lets users interact with your app before the full page loads, improving their perception of your app's speed. Here's how it works:

*   SvelteKit enables you to use a `+page.server.ts` file to fetch data on the server, which you can access from a `+page.svelte` file located in the same folder
*   You fetch data in a [`load`](https://kit.svelte.dev/docs/load) function defined in `+page.server.ts`. This function returns an object 
    *   Top-level properties that return a promise will resolve before the page renders
    *   Nested properties that return a promise [will stream](https://kit.svelte.dev/docs/load#streaming-with-promises)

The following example demonstrates a `load` function that will stream its response to the client. To simulate delayed data returned from a promise, it uses a `sleep` method.

You could then display this data by creating the following `+page.svelte` file in the same directory:

To summarize, Streaming with SvelteKit on Vercel:

*   Enables you to stream UI elements as data loads
*   Supports streaming through Vercel Functions
*   Improves perceived speed of your app

[Learn more about Streaming on Vercel](https://vercel.com/docs/functions/streaming-functions).

Server-Side Rendering (SSR) allows you to render pages dynamically on the server. This is useful for pages where the rendered data needs to be unique on every request. For example, verifying authentication or checking the geolocation of an incoming request.

Vercel offers SSR that scales down resource consumption when traffic is low, and scales up with traffic surges. This protects your site from accruing costs during periods of no traffic or losing business during high-traffic periods.

SvelteKit projects are server-side rendered by default. You can configure individual routes to prerender with the `prerender` page option, or use the same option in your app's root `+layout.js` or `+layout.server.js` file to make all your routes prerendered by default.

While server-side rendered SvelteKit apps do support middleware, SvelteKit does not support URL rewrites from middleware.

[See the SvelteKit docs on prerendering to learn more](https://kit.svelte.dev/docs/page-options#prerender).

To summarize, SSR with SvelteKit on Vercel:

*   Scales to zero when not in use
*   Scales automatically with traffic increases
*   Has zero-configuration support for [`Cache-Control` headers](https://vercel.com/docs/cdn-cache), including `stale-while-revalidate`

[Learn more about SSR](https://kit.svelte.dev/docs/page-options#ssr)

Vercel provides a set of System Environment Variables that our platform automatically populates. For example, the `VERCEL_GIT_PROVIDER` variable exposes the Git provider that triggered your project's deployment on Vercel.

These environment variables will be available to your project automatically, and you can enable or disable them in your project settings on Vercel. [See our Environment Variables docs to learn how](https://vercel.com/docs/environment-variables/system-environment-variables).

SvelteKit allows you to import environment variables, but separates them into different modules based on whether they're dynamic or static, and whether they're private or public. For example, the `'$env/static/private'` module exposes environment variables that don't change, and that you should not share publicly.

[System Environment Variables](https://vercel.com/docs/environment-variables/system-environment-variables) are private and you should never expose them to the frontend client. This means you can only import them from `'$env/static/private'` or `'$env/dynamic/private'`.

The example below exposes `VERCEL_COMMIT_REF`, a variable that exposes the name of the branch associated with your project's deployment, to [a `load` function](https://kit.svelte.dev/docs/load) for a Svelte layout:

You could reference that variable in [a corresponding layout](https://kit.svelte.dev/docs/load#layout-data) as shown below:

To summarize, the benefits of using Environment Variables with SvelteKit on Vercel include:

*   Access to vercel deployment information, dynamically or statically, with our preconfigured System Environment Variables
*   Access to automatically-configured environment variables provided by [integrations for your preferred services](https://vercel.com/docs/environment-variables#integration-environment-variables)
*   Searching and filtering environment variables by name and environment in Vercel's dashboard

[Learn more about Environment Variables](https://vercel.com/docs/environment-variables)

Incremental Static Regeneration allows you to create or update content without redeploying your site. When you deploy a route with ISR, Vercel caches the page to serve it to visitors statically, and rebuilds it on a time interval of your choice. ISR has three main benefits for developers: better performance, improved security, and faster build times.

[See our ISR docs to learn more](https://vercel.com/docs/incremental-static-regeneration).

To deploy a SvelteKit route with ISR:

*   Export a `config` object with an `isr` property. Its value will be the number of seconds to wait before revalidating
*   To enable on-demand revalidation, add the `bypassToken` property to the `config` object. Its value gets checked when `GET` or `HEAD` requests get sent to the route. If the request has a `x-prerender-revalidate` header with the same value as `bypassToken`, the cache will be revalidated immediately

The following example demonstrates a SvelteKit route that Vercel will deploy with ISR, revalidating the page every 60 seconds, with on-demand revalidation enabled:

[Learn more about ISR with SvelteKit](https://kit.svelte.dev/docs/adapter-vercel#incremental-static-regeneration).

To summarize, the benefits of using ISR with SvelteKit on Vercel include:

*   Better performance with our global [CDN](https://vercel.com/docs/cdn)
*   Zero-downtime rollouts to previously statically generated pages
*   Framework-aware infrastructure enables global content updates in 300ms
*   Generated pages are both cached and persisted to durable storage

[Learn more about ISR](https://vercel.com/docs/incremental-static-regeneration)

New project deployments can lead to version skew. This can happen when your users are using your app and a new version gets deployed. Their deployment version requests assets from an older version. And those assets from the previous version got replaced. This can cause errors when those active users navigate or interact with your project.

SvelteKit has a skew protection solution. When it detects version skew, it triggers a hard reload of a page to sync to the latest version. This does mean the client-side state gets lost. With Vercel skew protection, client requests get routed to their original deployment. No client-side state gets lost. To enable it, visit the Advanced section of your project settings on Vercel.

[Learn more about skew protection with SvelteKit](https://kit.svelte.dev/docs/adapter-vercel#skew-protection).

To summarize, the benefits of using ISR with SvelteKit on Vercel include:

*   Mitigates the risk of your active users encountering version skew
*   Avoids hard reloads for current active users on your project

[Learn more about skew protection on Vercel](https://vercel.com/docs/skew-protection).

[Image Optimization](https://vercel.com/docs/image-optimization) helps you achieve faster page loads by reducing the size of images and using modern image formats.

When deploying to Vercel, you can optimize your images on demand, keeping your build times fast while improving your page load performance and [Core Web Vitals](https://vercel.com/docs/speed-insights/metrics#core-web-vitals-explained).

To use Image Optimization with SvelteKit on Vercel, use the [`@sveltejs/adapter-vercel`](https://vercel.com/docs/frameworks/full-stack/sveltekit#use-vercel-features-with-svelte) within your `svelte.config.ts` file.

This allows you to specify [configuration options](https://vercel.com/docs/build-output-api/v3/configuration#images) for Vercel's native image optimization API.

To use image optimization with SvelteKit, you have to construct your own `srcset` URLs. You can create a library function that will optimize `srcset` URLs in production for you like this:

Use an `img` or any other image component with an optimized `srcset` generated by the `optimize` function:

To summarize, using Image Optimization with SvelteKit on Vercel:

*   Configure image optimization with `@sveltejs/adapter-vercel`
*   Optimize for production with a function that constructs optimized `srcset` for your images
*   Helps your team ensure great performance by default
*   Keeps your builds fast by optimizing images on-demand

[Learn more about Image Optimization](https://vercel.com/docs/image-optimization)

Vercel's Web Analytics features enable you to visualize and monitor your application's performance over time. Analytics in your project sidebar's dashboard offers detailed insights into your website's visitors, with metrics like top pages, top referrers, and user demographics.

To use Web Analytics, open Analytics in your project sidebar on Vercel and select Enable in the modal that appears.

To track visitors and page views, we recommend first installing our `@vercel/analytics` package by running the terminal command below in the root directory of your SvelteKit project:

In your SvelteKit project's main `+layout.svelte` file, add the following `<script>`:

With the above script added to your project, you'll be able to view detailed user insights in your dashboard on Vercel under Analytics in the sidebar. [See our docs to learn more about the user metrics you can track with Vercel's Web Analytics](https://vercel.com/docs/analytics).

Your project must be deployed on Vercel to take advantage of the Web Analytics feature. Work on making this feature more broadly available is in progress.

To summarize, using Web Analytics with SvelteKit on Vercel:

*   Enables you to track traffic and see your top-performing pages
*   Offers you detailed breakdowns of visitor demographics, including their OS, browser, geolocation, and more

[Learn more about Web Analytics](https://vercel.com/docs/analytics)

You can see data about your project's [Core Web Vitals](https://vercel.com/docs/speed-insights/metrics#core-web-vitals-explained) performance in your dashboard on Vercel. Doing so will allow you to track your web application's loading speed, responsiveness, and visual stability so you can improve the user experience.

[See our Speed Insights docs to learn more](https://vercel.com/docs/speed-insights).

To summarize, using Speed Insights with SvelteKit on Vercel:

*   Enables you to track traffic performance metrics, such as [First Contentful Paint](https://vercel.com/docs/speed-insights/metrics#first-contentful-paint-fcp), or [First Input Delay](https://vercel.com/docs/speed-insights/metrics#first-input-delay-fid)
*   Enables you to view performance metrics by page name and URL for more granular analysis
*   Shows you [a score for your app's performance](https://vercel.com/docs/speed-insights/metrics#how-the-scores-are-determined) on each recorded metric, which you can use to track improvements or regressions

[Learn more about Speed Insights](https://vercel.com/docs/speed-insights)

[Draft Mode](https://vercel.com/docs/draft-mode) enables you to view draft content from your [Headless CMS](https://vercel.com/docs/solutions/cms) immediately, while still statically generating pages in production.

To use a SvelteKit route in Draft Mode, you must:

1.   Export a `config` object [that enables Incremental Static Regeneration](https://kit.svelte.dev/docs/adapter-vercel#incremental-static-regeneration) from the route's `+page.server` file:

1.   Send a `__prerender_bypass` cookie with the same value as `bypassToken` in your config.

To render the draft content, SvelteKit will check for `__prerender_bypass`. If its value matches the value of `bypassToken`, it will render content fetched at request time rather than prebuilt content.

We recommend using a cryptographically secure random number generator at build time as your `bypassToken` value. If a malicious actor guesses your `bypassToken`, they can view your pages in Draft Mode.

Deployments on Vercel automatically secure Draft Mode behind the same authentication used for Preview Comments. In order to enable or disable Draft Mode, the viewer must be logged in as a member of the [Team](https://vercel.com/docs/teams-and-accounts). Once enabled, Vercel's CDN will bypass the ISR cache automatically and invoke the underlying [Vercel Function](https://vercel.com/docs/functions).

You and your team members can toggle Draft Mode in the Vercel Toolbar in [production](https://vercel.com/docs/vercel-toolbar/in-production-and-localhost/add-to-production), [localhost](https://vercel.com/docs/vercel-toolbar/in-production-and-localhost/add-to-localhost), and [Preview Deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production#comments). When you do so, the toolbar will become purple to indicate Draft Mode is active.

![Image 1: The Vercel toolbar when Draft Mode is enabled.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Fdraft-mode%2Fdraft-toolbar1-light.png&w=828&q=75)![Image 2: The Vercel toolbar when Draft Mode is enabled.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Fdraft-mode%2Fdraft-toolbar1-dark.png&w=828&q=75)

The Vercel toolbar when Draft Mode is enabled.

Users outside your Vercel team cannot toggle Draft Mode.

To summarize, the benefits of using Draft Mode with SvelteKit on Vercel include:

*   Easily server-render previews of static pages
*   Adds security measures to prevent malicious usage
*   Integrates with any headless provider of your choice
*   You can enable and disable Draft Mode in [the comments toolbar](https://vercel.com/docs/comments/how-comments-work) on Preview Deployments

[Learn more about Draft Mode](https://vercel.com/docs/draft-mode)

Routing Middleware is useful for modifying responses before they're sent to a user. We recommend [using SvelteKit's server hooks](https://kit.svelte.dev/docs/hooks) to modify responses. Due to SvelteKit's client-side rendering, you cannot use Vercel's Routing Middleware with SvelteKit.

Adding a [`vercel.json`](https://vercel.com/docs/project-configuration) file to the root directory of your project enables you to rewrite your app's routes.

We do not recommend using `vercel.json` rewrites with SvelteKit.

Rewrites from `vercel.json` only apply to the Vercel proxy. At runtime, SvelteKit doesn't have access to the rewritten URL, which means it has no way of rendering the intended rewritten route.

See [our Frameworks documentation page](https://vercel.com/docs/frameworks) to learn about the benefits available to all frameworks when you deploy on Vercel.

Learn more about deploying SvelteKit projects on Vercel with the following resources:
