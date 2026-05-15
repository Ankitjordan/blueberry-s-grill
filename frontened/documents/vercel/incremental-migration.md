Title: Incremental Migration to Vercel

URL Source: https://vercel.com/docs/incremental-migration

Markdown Content:
When migrating to Vercel you should use an incremental migration strategy. This allows your current site and your new site to operate simultaneously, enabling you to move different sections of your site at a pace that suits you.

In this guide, we'll explore incremental migration benefits, strategies, and implementation approaches for a zero-downtime migration to Vercel.

Incremental migrations offer several advantages:

*   Reduced risk due to smaller migration steps
*   A smoother rollback path in case of unexpected issues
*   Earlier technical implementation and business value validation
*   Downtime-free migration without maintenance windows

One-time migration involves developing the new site separately before switching traffic over. This approach has certain drawbacks:

*   Late discovery of expensive product issues
*   Difficulty in assessing migration success upfront
*   Potential for reaching a point of no-return, even with major problem detection
*   Possible business loss due to legacy system downtime during migration

Despite requiring more effort to make the new and legacy sites work concurrently, incremental migration is beneficial if:

*   Risk reduction and time-saving benefits outweigh the effort
*   The extra effort needed for specific increments to interact with legacy data doesn't exceed the time saved

![Image 1](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fincremental-migration%2Fincremental-migration-steps-light.png&w=3840&q=75)![Image 2](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fincremental-migration%2Fincremental-migration-steps-dark.png&w=3840&q=75)
Incremental migration process

With incremental migration, legacy and new systems operate simultaneously. Depending on your strategy, you'll select a system aspect, like a feature or user group, to migrate incrementally.

This strategy targets system features with the following process:

1.   Identify all legacy system features
2.   Choose key features for the initial migration
3.   Repeat until all features have been migrated

Throughout, both systems operate in parallel with migrated features routed to the new system.

This strategy focuses on system users with the following process:

1.   Identify all user groups
2.   Select a user group for initial migration to the new system
3.   Repeat until all users have been migrated

During migration, a subset of users accesses the new system while others continue using the legacy system.

A blend of vertical and horizontal strategies. For each feature subset, migrate by user group before moving to the next feature subset.

Follow these steps to incrementally migrate your website to Vercel. Two possible strategies can be applied:

1.   [Point your domain to Vercel from the beginning](https://vercel.com/docs/incremental-migration#point-your-domain-to-vercel)
2.   [Keep your domain on the legacy server](https://vercel.com/docs/incremental-migration#keep-your-domain-on-the-legacy-server)

In this approach, you make Vercel [the entry point for all your production traffic](https://vercel.com/docs/domains/add-a-domain). When you begin, all traffic will be sent to the legacy server with [rewrites](https://vercel.com/docs/rewrites) and/or fallbacks. As you migrate different aspects of your site to Vercel, you can remove the rewrites/fallbacks to the migrated paths so that they are now served by Vercel.

![Image 3](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fincremental-migration%2Fapproach-1-light.png&w=3840&q=75)![Image 4](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fincremental-migration%2Fapproach-1-dark.png&w=3840&q=75)
Point your domain to Vercel approach

Use the [framework](https://vercel.com/docs/frameworks) of your choice to deploy your application to Vercel

Send all traffic to the legacy server using one of the following 3 methods:

Use rewrites [built-in to the framework](https://vercel.com/docs/rewrites#framework-considerations) such as configuring `next.config.ts` with [fallbacks and rewrites in Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites)

The code example below shows how to configure rewrites with fallback using `next.config.js` to send all traffic to the legacy server:

Use `vercel.json` for frameworks that do not have rewrite support. See the [how do rewrites work](https://vercel.com/docs/rewrites) documentation to learn how to rewrite to an external destination, from a specific path.

Use [Edge Config](https://vercel.com/docs/edge-config) with [Routing Middleware](https://vercel.com/docs/routing-middleware) to rewrite requests on the global network with the following benefits:

*   No need to re-deploy your application when rewrite changes are required
*   Immediately switch back to the legacy server if the new feature implementation is broken

Review this [maintenance page example](https://vercel.com/templates/next.js/maintenance-page) to understand the mechanics of this approach

This is an example middleware code for executing the rewrites on the global network:

In the above example, you use Edge Config to store one key-value pair for each rewrite. In this case, you should consider [Edge Config Limits](https://vercel.com/docs/edge-config/edge-config-limits) (For example, 5000 routes would require around 512KB of storage). You can also rewrite based on [URLPatterns](https://developer.mozilla.org/docs/Web/API/URLPattern) where you would store each URLPattern as a key-value pair in Edge Config and not require one pair for each route.

Connect your [production domain](https://vercel.com/docs/getting-started-with-vercel/domains) to your Vercel Project. All your traffic will now be sent to the legacy server.

Develop and test the first iteration of your application on Vercel on specific paths.

With the fallback approach such as with the `next.config.js` example above, Next.js will automatically serve content from your Vercel project as you add new paths to your application. You will therefore not need to make any rewrite configuration changes as you iterate. For specific rewrite rules, you will need to remove/update them as you iterate.

Repeat this process until all the paths are migrated to Vercel and all rewrites are removed.

In this approach, once you have tested a specific feature on your new Vercel application, you configure your legacy server or proxy to send the traffic on that path to the path on the Vercel deployment where the feature is deployed.

![Image 5](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fincremental-migration%2Fapproach-2-light.png&w=3840&q=75)![Image 6](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fincremental-migration%2Fapproach-2-dark.png&w=3840&q=75)
Keep your domain on the legacy server approach

Use the [framework](https://vercel.com/docs/frameworks) of your choice to deploy your application on Vercel and build the first feature that you would like to migrate.

Once you have tested the first feature fully on Vercel, add a rewrite or reverse proxy to your existing server to send the traffic on the path for that feature to the Vercel deployment.

For example, if you are using [nginx](https://nginx.org/), you can use the [`proxy_pass`](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass) directive to send the traffic to the Vercel deployment.

Let's say you deployed the new feature at the folder `new-feature` of the new Next.js application and set its [`basePath`](https://nextjs.org/docs/app/api-reference/next-config-js/basePath) to `/new-feature`, as shown below:

When deployed, your new feature will be available at `https://my-new-app.vercel.app/`.

You can then use the following nginx configuration to send the traffic for that feature from the legacy server to the new implementation:

Repeat steps 1 and 2 until all the features have been migrated to Vercel. You can then point your domain to Vercel and remove the legacy server.

Vercel has a limit of 1024 routes per deployment for rewrites. If you have more than 1024 routes, you may want to consider creating a custom solution using Middleware. For more information on how to do this in Next.js, see [Managing redirects at scale](https://nextjs.org/docs/app/building-your-application/routing/redirecting#managing-redirects-at-scale-advanced).

If you're facing unexpected outcomes or cannot find an immediate solution for an unexpected behavior with a new feature, you can set up a variable in [Edge Config](https://vercel.com/docs/edge-config) that you can turn on and off at any time without having to make any code changes on your deployment. The value of this variable will determine whether you rewrite to the new version or the legacy server.

For example, with Next.js, you can use the follow [middleware](https://vercel.com/docs/edge-middleware) code example:

[Create an Edge Config](https://vercel.com/docs/edge-config/edge-config-dashboard#creating-an-edge-config) and set it to `{ "isNewVersionActive": true }`. By default, the new feature is active since `isNewVersionActive` is `true`. If you experience any issues, you can fallback to the legacy server by setting `isNewVersionActive` to `false` in the Edge Config from your Vercel dashboard.

When your application is hosted across multiple servers, maintaining [session](https://developer.mozilla.org/docs/Web/HTTP/Session) information consistency can be challenging.

For example, if your legacy application is served on a different domain than your new application, the HTTP session cookies will not be shared between the two. If the data that you need to share is not easily calculable and derivable, you will need a central session store as in the use cases below:

*   Using cookies for storing user specific data such as last login time and recent viewed items
*   Using cookies for tracking the number of items added to the cart

If you are not currently using a central session store for persisting sessions or are considering moving to one, you can use a [Redis database from the Vercel Marketplace](https://vercel.com/marketplace?category=storage&search=redis), such as [Upstash Redis](https://vercel.com/marketplace/upstash).

Learn more about [connecting Redis databases through the Marketplace](https://vercel.com/docs/redis).

Minimize risk and perform A/B testing by combining your migration by feature with a user group strategy. You can use [Edge Config](https://vercel.com/docs/edge-config) to store user group information and [Routing Middleware](https://vercel.com/docs/routing-middleware) to direct traffic appropriately.

*   You can also consult our [guide on A/B Testing on Vercel](https://vercel.com/kb/guide/ab-testing-on-vercel) for implementing this strategy

Consider using [Vercel Functions](https://vercel.com/docs/functions) as you migrate your application.

This allows for the implementation of small, specific, and independent functionality units triggered by events, potentially enhancing future performance and reducing the risk of breaking changes. However, it may require refactoring your existing code to be more modular and reusable.

Prevent the loss of indexed pages, links, and duplicate content when creating rewrites to direct part of your traffic to the new Vercel deployment. Consider the following:

*   Write E2E tests to ensure correct setting of canonical tags and robot indexing at each migration step
*   Account for existing redirects and rewrites on your legacy server, ensuring they are thoroughly tested during migration
*   Maintain the same routes for migrated feature(s) on Vercel
