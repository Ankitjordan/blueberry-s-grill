Menu

# Redirects

Last updated March 5, 2026

Redirects are rules that instruct Vercel to send users to a different URL than the one they requested. For example, if you rename a public route in your application, adding a redirect ensures there are no broken links for your users.

With redirects on Vercel, you can define HTTP redirects in your application's configuration, regardless of the [framework](/docs/frameworks) that you are using. Redirects are processed at the Edge across all regions.

## [Use cases](#use-cases)

* Moving to a new domain: Redirects help maintain a seamless user experience when moving a website to a new domain by ensuring that visitors and search engines are aware of the new location.
* Replacing a removed page: If a page has been moved, temporarily or permanently, you can use redirects to send users to a relevant new page, thus avoiding any negative impact on user experience.
* Canonicalization of multiple URLs: If your website can be accessed through several URLs (e.g., `acme.com/home`, `home.acme.com`, or `www.acme.com`), you can choose a canonical URL and use redirects to guide traffic from the other URLs to the chosen one.
* Geolocation-based redirects: Redirects can be configured to consider the source country of requests, enabling tailored experiences for users based on their geographic location.

We recommend using status code `307` or `308` to avoid the ambiguity of non `GET` methods, which is necessary when your application needs to redirect a public API.

## [Implementing redirects](#implementing-redirects)

Review the table below to understand which redirect method best fits your use case:

| Redirect method | Use case | Definition location |
| --- | --- | --- |
| [Configuration redirects](/docs/redirects/configuration-redirects) | Support needed for wildcards, pattern matching, and geolocation-based rules. | Framework config or `vercel.json` |
| [Bulk redirects](/docs/redirects/bulk-redirects) | For large-scale migrations or maintaining extensive redirect lists. It supports many thousands of simple redirects and is performant at scale. | CSV, JSON, or JSONL files |
| [Vercel Functions](#vercel-functions) | For complex custom redirect logic. | Route files (code) |
| [Middleware](#middleware) | Dynamic redirects that need to update without redeploying. | Middleware file and Edge Config |
| [Domain redirects](#domain-redirects) | Domain-level redirects such as www to apex domain. | Dashboard (Domains section) |
| [Firewall redirects](#firewall-redirects) | Emergency redirects that must execute before other redirects. | Firewall rules (dashboard) |

### [Vercel Functions](#vercel-functions)

Use Vercel Functions to implement any redirect logic you need. This may not be optimal depending on the use case.

Any route can redirect requests like so:

pages/api/handler.ts

```
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  // Use 308 for a permanent redirect, 307 for a temporary redirect
  return response.redirect(307, '/new-route');
}
```

pages/api/handler.js

```
export default function handler(request, response) {
  // Use 308 for a permanent redirect, 307 for a temporary redirect
  return response.redirect(307, '/new-route');
}
```

app/api/route.ts

```
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  redirect('https://nextjs.org/');
}
```

app/api/route.js

```
import { redirect } from 'next/navigation';

export async function GET(request) {
  redirect('https://nextjs.org/');
}
```

src/routes/user/+layout.server.ts

```
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ locals }) => {
  if (!locals.user) {
    throw redirect(307, '/login');
  }
}) satisfies LayoutServerLoad;
```

src/routes/user/+layout.server.js

```
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(307, '/login');
  }
}
```

server/api/foo.get.ts

```
export default defineEventHandler((event) => {
  return sendRedirect(event, '/path/redirect/to', 307);
});
```

server/api/foo.get.js

```
export default defineEventHandler((event) => {
  return sendRedirect(event, '/path/redirect/to', 307);
});
```

api/handler.ts

```
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Use 308 for a permanent redirect, 307 for a temporary redirect
  return response.redirect(307, '/new-route');
}
```

api/handler.js

```
export default function handler(request, response) {
  // Use 308 for a permanent redirect, 307 for a temporary redirect
  return response.redirect(307, '/new-route');
}
```

### [Middleware](#middleware)

For dynamic, critical redirects that need to run on every request, you can use [Middleware](/docs/routing-middleware) and [Edge Config](/docs/storage/edge-config).

Redirects can be stored in an Edge Config and instantly read from Middleware. This enables you to update redirect values without having to redeploy your website.

[Deploy a template](https://vercel.com/templates/next.js/maintenance-page) to get started.

### [Domain Redirects](#domain-redirects)

You can redirect a `www` subdomain to an apex domain, or other domain redirects, through the [Domains](/docs/projects/domains/deploying-and-redirecting#redirecting-domains) section of the dashboard.

### [Firewall Redirects](#firewall-redirects)

In emergency situations, you can also define redirects using [Firewall rules](/docs/security/vercel-waf/examples#emergency-redirect) to redirect requests to a new page. Firewall redirects execute before CDN configuration redirects (e.g. `vercel.json` or `next.config.js`) are evaluated.

## [Redirect status codes](#redirect-status-codes)

* 307 Temporary Redirect: Not cached by client, the method and body never changed. This type of redirect does not affect SEO and search engines will treat them as normal redirects.
* 302 Found: Not cached by client, the method may or may not be changed to `GET`.
* 308 Permanent Redirect: Cached by client, the method and body never changed. This type of redirect does not affect SEO and search engines will treat them as normal redirects.
* 301 Moved Permanently: Cached by client, the method may or may not be changed to `GET`.

## [Observing redirects](#observing-redirects)

You can observe your redirect performance using Observability. The Edge Requests tab shows request counts and cache status for your redirected routes, helping you understand traffic patterns and validate that redirects are working as expected. You can filter by redirect location to analyze specific redirect paths.

Learn more in the [Observability Insights](/docs/observability/insights#edge-requests) documentation.

## [Draining redirects](#draining-redirects)

You can export redirect data by draining logs from your application. Redirect events appear in your runtime logs, allowing you to analyze redirect patterns, debug redirect chains, and track how users move through your site.

To get started, configure a [logs drain](/docs/drains/using-drains).

## [Automatic URL normalization](#automatic-url-normalization)

Vercel's CDN automatically normalizes certain URL patterns and redirects with a `308` status code. These normalizations happen before your redirects, rewrites, or application code runs.

### [Consecutive slashes](#consecutive-slashes)

The CDN normalizes URLs containing consecutive slashes (e.g., `//`) to single slashes and redirects with a `308` status code.

For example:

* `/blog//post` redirects to `/blog/post`
* `//about` redirects to `/about`

### [Case sensitivity](#case-sensitivity)

The CDN does not normalize URL paths to lowercase. URLs are case-sensitive, and requests are served exactly as specified.

For example, `/About` and `/about` are treated as different paths. If no content exists at the requested path with the given case, the CDN returns a `404` response.

## [Best practices for implementing redirects](#best-practices-for-implementing-redirects)

There are some best practices to keep in mind when implementing redirects in your application:

1. Test thoroughly: Test your redirects thoroughly to ensure they work as expected. Use a [preview deployment](/docs/deployments/environments#preview-environment-pre-production) to test redirects before deploying them to production
2. Use relative paths: Use relative paths in your `destination` field to avoid hardcoding your domain name
3. Use permanent redirects: Use [permanent redirects](#adding-redirects) for permanent URL changes and [temporary redirects](#adding-redirects) for temporary changes
4. Use wildcards carefully: Wildcards can be powerful but should be used with caution. For example, if you use a wildcard in a source rule that matches any URL path, you could inadvertently redirect all incoming requests to a single destination, effectively breaking your site.
5. Prioritize HTTPS: Use redirects to enforce HTTPS for all requests to your domain

---

[Previous

Routing](/docs/routing)[Next

Configuration Redirects](/docs/routing/redirects/configuration-redirects)

Was this helpful?
