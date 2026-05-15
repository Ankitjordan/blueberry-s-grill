Skew Protection

# Skew Protection

Last updated March 16, 2026

Skew Protection is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner, admin, member](/docs/rbac/access-roles#owner, admin, member-role) role can access this feature

[Version skew](https://www.industrialempathy.com/posts/version-skew/) occurs when different versions of your application run on client and server, causing application errors and other unexpected behavior. For example, imagine your newest deployment modifies the data structure by adding a required field to a user's profile. Older clients wouldn't expect this new field, leading to errors when they submit it.

Vercel's Skew Protection resolves this problem at the platform and framework layer by using [version locking](https://www.industrialempathy.com/posts/version-skew/#version-locking), which ensures client and server use the exact same version. In our example, outdated clients continue to communicate with servers that understand the old data structure, while updated clients use the most recent deployment.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fdeployments-basics%2Fnested-layouts-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fdeployments-basics%2Fnested-layouts-dark.png&w=3840&q=75)

By implementing Skew Protection, you can reduce user-facing errors during new rollouts and boost developer productivity, minimizing concerns about API compatibility across versions.

## [How it works](#how-it-works)

When Skew Protection is enabled with a [supported framework](#supported-frameworks), the framework automatically includes the deployment ID in framework-managed requests from the client. These include:

* Static assets: JavaScript bundles, CSS files, and images loaded by the framework
* Client-side navigations: Route transition data fetches and Server Actions
* Prefetches: Route and data prefetch requests triggered by the framework

The framework attaches the deployment ID as a `?dpl=` query parameter or `x-deployment-id` header, ensuring these requests resolve to the same deployment that served the initial page. The framework doesn't automatically pin custom `fetch()` calls you make from client components. To pin those, pass the deployment ID yourself using the methods described in [supported frameworks](#supported-frameworks).

### [Document navigations](#document-navigations)

The framework doesn't pin full-page navigations by default. When the browser makes a top-level document request, such as a hard refresh, entering a URL in the address bar, or opening a link in a new tab, Vercel serves the latest production deployment. If a new deployment went live since the user's last page load, the client detects the version mismatch and triggers a full page reload so the user receives the updated version.

For most applications, this is the ideal behavior. Users get the latest version on their next full-page navigation while their current page stays stable.

However, some applications have long-running sessions where a full page reload would disrupt the user experience. See [Extending Skew Protection for long-lived sessions](#extending-skew-protection-for-long-lived-sessions) for how to handle these cases.

## [Enable Skew Protection](#enable-skew-protection)

Projects created after November 19th 2024 using one of the [supported frameworks](#supported-frameworks) already have Skew Protection enabled by default.

For older projects, you can enable Skew Protection in your project's settings.

1. Ensure your project has the [Enable access to System Environment Variables](/docs/environment-variables/system-environment-variables#enable-system-environment-variables) setting enabled
2. Select the project in the Vercel dashboard
3. Open Settings in the sidebar
4. Select [Advanced](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fadvanced&title=Go+to+Advanced+settings) in the sidebar
5. Scroll down to Skew Protection and enable the switch
6. You can optionally [set a custom maximum age](#configure-maximum-age) (see [limitations](#limitations))
7. [Redeploy](/docs/deployments/managing-deployments#redeploy-a-project) your latest production deployment.

![A screenshot of the Skew Protection section containing an enabled/disabled toggle switch.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fprojects%2Fskew-protection-light.jpg&w=1920&q=75)![A screenshot of the Skew Protection section containing an enabled/disabled toggle switch.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fprojects%2Fskew-protection-dark.jpg&w=1920&q=75)

A screenshot of the Skew Protection section containing an enabled/disabled toggle switch.

## [Allowed domains for cross-site fetch](#allowed-domains-for-cross-site-fetch)

By default, Skew Protection ignores the deployment ID on cross-origin requests. If another site fetches assets from your project with a `?dpl=` parameter or `x-deployment-id` header, Skew Protection does not pin the request to the specified deployment. Instead, the request is routed to the latest production deployment.

This causes problems when your project serves assets that are fetched cross-origin by other domains. For example, if a client application embeds assets from your project at build time, the asset URLs are baked into the HTML with the deployment ID from that build. When your project later redeploys, those pinned asset URLs route to the new deployment where the old assets no longer exist, resulting in 404 errors and broken JavaScript and CSS.

This setting is not needed for [Vercel Microfrontends](/docs/microfrontends) because microfrontend projects share a domain, making all requests same-origin.

The Allowed Domains for Cross-Site Fetch setting solves this by specifying which external domains can make skew-protected requests to your project. Configure this on the project that serves the assets, not the project that consumes them.

### [Configure allowed domains](#configure-allowed-domains)

1. Select the project that serves the cross-site assets in the Vercel dashboard
2. Open Settings in the sidebar
3. Select Advanced in the sidebar
4. Scroll down to Skew Protection and find Allowed Domains for Cross-Site Fetch
5. Click Add Domain and enter a hostname (for example, `app.example.com`), a wildcard (for example, `*.example.com`), or `*` to allow all domains
6. Click Save

You can add up to 12 domains. Each entry accepts:

| Format | Example | What it matches |
| --- | --- | --- |
| Bare hostname | `example.com` | Requests originating from `example.com` only |
| Hostname with subdomain | `app.example.com` | Requests originating from `app.example.com` only |
| Wildcard | `*.example.com` | Requests originating from any direct subdomain of `example.com` |
| All domains | `*` | Requests originating from any domain |

Wildcard entries (`*.example.com`) only match one level of subdomain. For example, `*.example.com` matches `app.example.com` but not `staging.app.example.com`. Use `*` to allow requests from any domain.

Inputs are normalized automatically: full URLs are reduced to their hostname, ports and paths are stripped, and values are lowercased.

When using cross-site Skew Protection, set the maximum age to a value greater than your typical deployment interval. If the serving project redeploys and the pinned deployment ages out of the maximum age window, cross-site requests will fail even with allowed domains configured.

## [Configure Maximum Age](#configure-maximum-age)

The Maximum Age setting controls how long a deployment remains eligible for Skew Protection. If a client requests a deployment that no longer exists or is older than the configured maximum age (via the `?dpl=` query parameter, `x-deployment-id` header, or `__vdpl` cookie), the request returns a 404.

To configure the maximum age:

1. Select the project in the Vercel dashboard
2. Open Settings in the sidebar
3. Select [Advanced](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fadvanced&title=Go+to+Advanced+settings) in the sidebar
4. Scroll down to Skew Protection and adjust the Maximum Age value

The default maximum age is one day from deployment creation. This strikes a good balance between protecting from version skew for frequently deployed projects and preventing old deployments from being accessed. However, if your users keep the website open for extended periods without refreshing, such as dashboards, monitoring tools, or long-running workflows, you may want to increase this value. You can configure a maximum age up to your project's [Deployment Retention](/docs/deployment-retention) limit.

When you set a large maximum age, older deployments stay accessible for longer. If one of those deployments has a bug or security issue, you can either set a [Custom Skew Protection Threshold](#custom-skew-protection-threshold) or [delete the deployment](/docs/deployments/managing-deployments#delete-a-deployment) to stop clients from reaching it.

You can also use [Deployment Retention](/docs/deployment-retention) to delete old deployments automatically. When your retention period is short, you can safely set the maximum age to the same value, since deployments are deleted before they could age out of the protection window. You only need a low maximum age if your deployment retention is long and you want to limit how far back Skew Protection reaches.

## [Custom Skew Protection Threshold](#custom-skew-protection-threshold)

If a deployment has a bug or security issue, you can set a threshold to stop it and any deployments older than it from serving requests to active clients.

Once you deploy a fix, you can set a Skew Protection threshold with the following steps:

1. Select the deployment that fixed the problem in the deployment list
2. Select the button (near the Visit button)
3. Click Skew Protection Threshold
4. Click Set to apply the changes

![A screenshot of the popover menu containing a menu item for Skew Protection Threshold.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fskew-protection%2Fconfigure-skew-protection-light.png&w=640&q=75)![A screenshot of the popover menu containing a menu item for Skew Protection Threshold.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fskew-protection%2Fconfigure-skew-protection-dark.png&w=640&q=75)

A screenshot of the popover menu containing a menu item for Skew Protection Threshold.

## [Monitor Skew Protection](#monitor-skew-protection)

You can observe how many requests are protected from version skew by visiting the [Monitoring](/docs/observability/monitoring) page in the Vercel dashboard.

For example, on the `requests` event, filter where `skew_protection = 'active'`.

You can view Edge Requests that are successfully fulfilled without the need for skew protection by using `skew_protection = 'inactive'`.

![A screenshot of a query of requests filtered by active skew protection.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fprojects%2Fskew-protection-monitoring-query-light-colinUpdate.png&w=1920&q=75)![A screenshot of a query of requests filtered by active skew protection.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fprojects%2Fskew-protection-monitoring-query-dark-colinUpdate.png&w=1920&q=75)

A screenshot of a query of requests filtered by active skew protection.

## [Supported frameworks](#supported-frameworks)

Skew Protection is available with zero configuration when Vercel runs your build. The following frameworks are supported:

* [Next.js](#skew-protection-with-next.js)
* [SvelteKit](#skew-protection-with-sveltekit)
* [Qwik](#skew-protection-with-qwik)
* [Astro](#skew-protection-with-astro)
* [Nuxt](#skew-protection-with-nuxt)

Other frameworks can implement Skew Protection by checking if `VERCEL_SKEW_PROTECTION_ENABLED` has value `1`
and then appending the value of `VERCEL_DEPLOYMENT_ID` to each request using one of the following options.

* `dpl` query string parameter:

  option1.ts

  ```
  const query =
    process.env.VERCEL_SKEW_PROTECTION_ENABLED === '1'
      ? `?dpl=${process.env.VERCEL_DEPLOYMENT_ID}`
      : '';

  const res = await fetch(`/get${query}`);
  ```
* `x-deployment-id` header:

  option2.ts

  ```
  const headers =
    process.env.VERCEL_SKEW_PROTECTION_ENABLED === '1'
      ? { 'x-deployment-id': process.env.VERCEL_DEPLOYMENT_ID }
      : {};

  const res = await fetch('/get', { headers });
  ```
* `__vdpl` cookie:

  option3.ts

  ```
  export default function handler(req, res) {
    if (
      process.env.VERCEL_SKEW_PROTECTION_ENABLED === '1' &&
      req.headers['sec-fetch-dest'] === 'document'
    ) {
      res.setHeader('Set-Cookie', [
        `__vdpl=${process.env.VERCEL_DEPLOYMENT_ID}; HttpOnly`,
      ]);
    }
    res.end('<h1>Hello World</h1>');
  }
  ```

### [Skew Protection with Next.js](#skew-protection-with-next.js)

If you're building outside of Vercel using `vercel build` and then deploying with `vercel deploy --prebuilt`, Skew Protection requires a custom deployment ID so the
build-time ID matches the one Vercel assigns at deploy time.

For more information on prebuilt workflows, see [When not to use --prebuilt](/docs/cli/deploy#when-not-to-use---prebuilt).

If you are using Next.js 14.1.4 or newer and building on Vercel, there is no additional configuration needed to [enable Skew Protection](#enable-skew-protection).

Older versions of Next.js require additional [`next.config.js`](https://nextjs.org/docs/app/api-reference/next-config-js) configuration.

**View config for 13.4.7 to 14.1.3**

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useDeploymentId: true,
    // Optionally, use with Server Actions
    useDeploymentIdServerActions: true,
  },
};

module.exports = nextConfig;
```

The `useDeploymentId` configuration enables Skew Protection for all framework-managed static file requests from your Next.js app such as for JavaScript and CSS files. You can also opt-into Skew Protection for [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) with `useDeploymentIdServerActions`.

### [Skew Protection with SvelteKit](#skew-protection-with-sveltekit)

If you are using SvelteKit, you will need to install `@sveltejs/adapter-vercel` version 5.2.0 or newer in order to [enable Skew Protection](#enable-skew-protection).

Older versions can be upgraded by running `npm i -D @sveltejs/adapter-vercel@latest`.

### [Skew Protection with Qwik](#skew-protection-with-qwik)

If you are using Qwik 1.5.3 or newer, there is no additional configuration needed to [enable Skew Protection](#enable-skew-protection).

Older versions can be upgraded by running `npm i @builder.io/qwik@latest`.

### [Skew Protection with Astro](#skew-protection-with-astro)

If you are using Astro, you will need to install `@astrojs/vercel` version 9.0.0 or newer in order to [enable Skew Protection](#enable-skew-protection).

astro.config.mjs

```
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // ...
  output: 'server',
  adapter: vercel({
    skewProtection: true,
  }),
});
```

Older versions can be upgraded by running `npm i -D @astrojs/vercel@latest`.

### [Skew Protection with Nuxt](#skew-protection-with-nuxt)

If you are using Nuxt, there is no additional configuration needed to [enable Skew Protection](#enable-skew-protection). Simply enable Skew Protection in the Vercel dashboard and Nuxt will automatically handle the deployment ID for framework-managed requests.

## [Extending Skew Protection for long-lived sessions](#extending-skew-protection-for-long-lived-sessions)

The default Skew Protection behavior works well for most applications. However, if your application has long-running client sessions where a full page reload would be disruptive, you can pin document navigations to a specific deployment using the `__vdpl` cookie.

When Vercel receives a request with the `__vdpl` cookie set, it routes that request to the deployment ID stored in the cookie, including document navigations. This prevents the hard refresh that would otherwise occur after a new deployment.

Common use cases include:

* Live assessments and exams: Test-taking platforms where a reload could cause lost progress or disqualification
* Real-time audio or video: Voice AI, telehealth, or streaming applications where a reload breaks the active connection
* Multi-step workflows: Long checkout flows, form wizards, or document editors with unsaved state

### [Setting the cookie in Routing Middleware](#setting-the-cookie-in-routing-middleware)

You can set the `__vdpl` cookie in [Routing Middleware](/docs/routing-middleware) to pin all requests for the duration of a session:

middleware.ts

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const deploymentId = process.env.VERCEL_DEPLOYMENT_ID;

  if (deploymentId && !request.cookies.get('__vdpl')) {
    response.cookies.set('__vdpl', deploymentId, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    });
  }

  return response;
}
```

With this middleware, the first request to your application sets the `__vdpl` cookie. All subsequent requests, including page navigations, route to the same deployment until you clear the cookie.

### [Scoping the pin to specific routes](#scoping-the-pin-to-specific-routes)

If you only need to pin certain parts of your application, add a [matcher](/docs/routing-middleware/api#match-paths-based-on-custom-matcher-config) to the middleware so it only sets the cookie for matching paths:

middleware.ts

```
// ... same middleware function as above

export const config = {
  matcher: ['/exam/:path*', '/session/:path*'],
};
```

### [Clearing the pin](#clearing-the-pin)

When the user's session completes, clear the `__vdpl` cookie so subsequent visits load the latest deployment. You can do this from a [Server Action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations):

app/actions.ts

```
'use server';

import { cookies } from 'next/headers';

export async function clearDeploymentPin() {
  const cookieStore = await cookies();
  cookieStore.delete('__vdpl');
}
```

Then call the action from the client when the session ends:

app/components/session-complete.tsx

```
'use client';

import { clearDeploymentPin } from '../actions';

export function SessionComplete() {
  async function handleComplete() {
    await clearDeploymentPin();
    window.location.href = '/';
  }

  return <button onClick={handleComplete}>Finish session</button>;
}
```

The `__vdpl` cookie pins requests to a specific deployment for as long as that
deployment remains accessible. If your [retention
policy](/docs/deployment-retention) removes a deployment, Vercel can no longer
route to it, even with the cookie set.

## [Limitations](#limitations)

Skew Protection is available for all deployment environments for Pro and Enterprise teams. You can configure a custom maximum age up to, but not exceeding, your project's [retention policy](/docs/deployment-retention).

Vercel automatically adjusts the maximum age to 60 days for requests from Googlebot and Bingbot in order to handle any delay between document crawl and render.

Deployments that have been deleted either manually or automatically using a [retention policy](/docs/deployment-retention) will not be accessible through Skew Protection.

## [More resources](#more-resources)

* [Version Skew Protection blog](/blog/version-skew-protection)
* [Version Skew](https://www.industrialempathy.com/posts/version-skew/)

---

[Previous

Services](/docs/services)[Next

Webhooks](/docs/webhooks)

Was this helpful?
