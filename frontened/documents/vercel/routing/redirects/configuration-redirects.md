Menu

# Configuration Redirects

Last updated March 5, 2026

Configuration redirects define routing rules that Vercel evaluates at build time. Use them for permanent redirects (`308`), temporary redirects (`307`), and geolocation-based routing.

Define configuration redirects in your framework's config file or in the `vercel.json` file, which is located in the root of your application. The `vercel.json` should contain a `redirects` field, which is an array of redirect rules. For more information on all available properties, see the [project configuration](/docs/projects/project-configuration#redirects) docs.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "redirects": [
    { "source": "/me", "destination": "/profile.html" },
    { "source": "/user", "destination": "/api/user", "permanent": false },
    {
      "source": "/view-source",
      "destination": "https://github.com/vercel/vercel"
    },
    {
      "source": "/:path((?!uk/).*)",
      "has": [
        {
          "type": "header",
          "key": "x-vercel-ip-country",
          "value": "GB"
        }
      ],
      "destination": "/uk/:path*",
      "permanent": false
    }
  ]
}
```

View the full [API reference](/docs/projects/project-configuration#redirects) for the `redirects` property.

Using `has` does not yet work locally while using `vercel dev`, but does work
when deployed.

When using Next.js, you do *not* need to use `vercel.json`. Instead, use the framework-native `next.config.js` to define configuration-based redirects.

next.config.js

```
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/old-blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
      {
        source: '/:path((?!uk/).*)',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'GB',
          },
        ],
        permanent: false,
        destination: '/uk/:path*',
      },
    ];
  },
};
```

Learn more in the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/redirecting).

When deployed, these redirect rules will be deployed to every [region](/docs/regions) in Vercel's CDN.

## [Limits](#limits)

The /.well-known path is reserved and cannot be redirected or rewritten. Only
Enterprise teams can configure custom SSL. [Contact sales](/contact/sales) to
learn more.

If you are exceeding the limits below, we recommend using Middleware and Edge Config to [dynamically read redirect values](/docs/redirects#edge-middleware).

| Limit | Maximum |
| --- | --- |
| Number of redirects in the array | 2,048 |
| String length for `source` and `destination` | 4,096 |

---

[Previous

Redirects](/docs/routing/redirects)[Next

Bulk Redirects](/docs/routing/redirects/bulk-redirects)

Was this helpful?
