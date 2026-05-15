Deployment Protection

# Deployment Protection on Vercel

Last updated March 4, 2026

Deployment Protection lets you control who can access your preview and production URLs. You configure it at the project level, choosing both a protection method (how you protect) and a protection scope (what you protect).

On the Hobby plan, Vercel Authentication with Standard Protection is
available. This protects your preview deployments and deployment URLs, but your
production domain remains publicly accessible. To protect production domains,
you need a Pro or Enterprise plan.

Deployment Protection requires authentication for all requests, including those to Routing Middleware.

### Experience Vercel Pro for free

Unlock the full potential of Vercel Pro during your 14-day trial with $20 in credits. Benefit from 1 TB Fast Data Transfer, 10,000,000 Edge Requests, up to 200 hours of Build Execution, and access to Pro features like team collaboration and enhanced analytics.

[Start your free Pro trial](/upgrade/docs-trial-button)

## [What protection methods are available](#what-protection-methods-are-available)

You can choose from three methods to protect your deployments:

* [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication): Restricts access to only Vercel users with suitable access rights. Available on all plans
* [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection): Restricts access to users with the correct password. Available on the Enterprise plan, or as a paid add-on for Pro plans
* [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips): Restricts access to users with the correct IP address. Available on the Enterprise plan

## [Choose which URLs to protect](#choose-which-urls-to-protect)

The protection scope determines which URLs you protect:

* [Standard Protection](#standard-protection): Protects all deployments except production domains. Available on all plans
* [All Deployments](#all-deployments): Protects all URLs, including production domains. Available on Pro and Enterprise plans
* [(Legacy) Standard Protection](#legacy-standard-protection): Protects all preview URLs and deployment URLs. All up-to-date production URLs remain unprotected.
* [(Legacy) Pre-Production Deployments](#legacy-pre-production-deployments): Protects only preview URLs. Does not protect past production deployments.

To protect [only production URLs](#only-production-deployments), use [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips). This option is only available on the Enterprise plan.

## [Where to find Deployment Protection settings](#where-to-find-deployment-protection-settings)

You manage Deployment Protection through your project settings:

1. From the [dashboard](/dashboard), select the project you want to configure
2. Open Settings in the sidebar and select [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings)

### [How team default settings apply to new projects](#how-team-default-settings-apply-to-new-projects)

You can set a default Deployment Protection configuration for new projects in your team settings. You can override this default on individual projects as needed.

When setting a team default, choose the protection level (All Deployments, Standard Protection, or None) and one of the available protection methods, including Vercel Authentication or Password Protection.

![Team default Deployment Protection](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdeployment-protection%2Fdeployment-protection-team-default-light.png&w=1920&q=75)![Team default Deployment Protection](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdeployment-protection%2Fdeployment-protection-team-default-dark.png&w=1920&q=75)

Team default Deployment Protection

## [Standard Protection](#standard-protection)

Standard Protection is available on [all plans](/docs/plans)

Standard Protection is the recommended option for most projects. It protects all domains except [production domains](/docs/domains/working-with-domains/add-a-domain).

![Selecting Standard Protection in the Vercel Dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fcontentful%2Fimage%2Fe5382hct74si%2F7LHNvuRkcDlKMWswY7c8xd%2F858a8627a82bcec2c456bcd42618b3f5%2FScreenshot_2025-07-09_at_5.05.58%25C3%25A2__pm.png&w=1920&q=75)![Selecting Standard Protection in the Vercel Dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fcontentful%2Fimage%2Fe5382hct74si%2F7LHNvuRkcDlKMWswY7c8xd%2F858a8627a82bcec2c456bcd42618b3f5%2FScreenshot_2025-07-09_at_5.05.58%25C3%25A2__pm.png&w=1920&q=75)

Selecting Standard Protection in the Vercel Dashboard.

You can combine Standard Protection with any of the following methods:

* [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication)
* [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection)
* [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)

### [How to migrate to Standard Protection](#how-to-migrate-to-standard-protection)

When you enable Standard Protection, the production [generated deployment URL](/docs/deployments/generated-urls) becomes restricted. Update any fetch requests that use `VERCEL_URL` or `VERCEL_BRANCH_URL` from [System Environment Variables](/docs/environment-variables/system-environment-variables#system-environment-variables) to target the same domain the user requested, since those variables will no longer be publicly accessible.

The Framework Environment Variable `VERCEL_URL` is prefixed with the name of
the framework. For example, `VERCEL_URL` for Next.js is
`NEXT_PUBLIC_VERCEL_URL`, and `VERCEL_URL` for Nuxt is `NUXT_ENV_VERCEL_URL`.
See the [Framework Environment
Variables](/docs/environment-variables/framework-environment-variables)
documentation for more information.

For client-side requests, use relative paths in the fetch call to target the current domain. This automatically includes the user's authentication cookie for protected URLs:

```
// Before
fetch(`${process.env.VERCEL_URL}/some/path`);

// After
fetch('/some/path');
// Note: For operations requiring fully qualified URLs, such as generating OG images,
// replace '/some/path' with the actual domain (e.g. 'https://yourdomain.com/some/path').
```

For server-side requests, use the origin from the incoming request and manually add request cookies to pass the user's authentication cookie:

```
const headers = { cookie: <incoming request header cookies> };
fetch('<incoming request origin>/some/path', { headers });
```

Bypassing protection using [Protection Bypass for Automation](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) is an option but not required for requests targeting the same domain.

## [All Deployments](#all-deployments)

Protecting all deployments is available on [Enterprise plans](/docs/plans/enterprise) or with the [Advanced Deployment Protection](/docs/security/deployment-protection#advanced-deployment-protection) add-on for [Pro plans](/docs/plans/pro-plan)

Select All Deployments to secure all deployments (both preview and production), restricting public access entirely.

With this configuration, all URLs are protected, including your production domain `example.com` and [generated URLs](/docs/deployments/generated-urls) like `my-project-1234.vercel.app`.

![Selecting All Deployments in the Vercel Dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fall-deployments-light.png&w=1920&q=75)![Selecting All Deployments in the Vercel Dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fall-deployments-dark.png&w=1920&q=75)

Selecting All Deployments in the Vercel Dashboard.

You can combine All Deployments protection with any of the following methods:

* [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication)
* [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection)
* [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)

## [Only Production Deployments](#only-production-deployments)

Protecting production deployments is available on [Enterprise plans](/docs/plans/enterprise)

Use [Trusted IPs](/docs/deployment-protection/methods-to-protect-deployments/trusted-ips) to restrict access to production deployments to a specific list of IPv4 addresses.

Preview deployment URLs remain publicly accessible. This feature is only available on the Enterprise plan.

Want to talk to our team?

This feature is available on the Enterprise plan.

![Selecting Only Production Deployments in the Vercel Dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fprod-deployments-light.png&w=1920&q=75)![Selecting Only Production Deployments in the Vercel Dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fprod-deployments-dark.png&w=1920&q=75)

Selecting Only Production Deployments in the Vercel Dashboard.

## [(Legacy) Standard Protection](#legacy-standard-protection)

(Legacy) Standard Protection protects all preview URLs and [deployment URLs](/docs/deployments/generated-urls). All [up to date production URLs](/docs/deployments/generated-urls) remain unprotected.

## [(Legacy) Pre-Production Deployments](#legacy-pre-production-deployments)

Select (Legacy) Pre-Production Deployments to protect preview URLs while the production environment remains publicly accessible.

For example, Vercel generates a preview URL such as `my-preview-5678.vercel.app`, which will be protected. In contrast, all production URLs, including any past or current generated production branch URLs like `*-main.vercel.app`, remain accessible.

## [Advanced Deployment Protection](#advanced-deployment-protection)

Advanced Deployment Protection features are available to Enterprise customers by default. Pro plan customers can access these features for an additional $150 per month:

* [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection)
* [Private Production Deployments](/docs/security/deployment-protection#all-deployments)
* [Deployment Protection Exceptions](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions)

### [Enabling Advanced Deployment Protection](#enabling-advanced-deployment-protection)

To enable Advanced Deployment Protection on a Pro plan:

1. Navigate to your project's [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) settings
2. Choose one of the above protection features
3. Click Enable and Pay when prompted to upgrade to the Advanced Deployment Protection add-on

When you enable Advanced Deployment Protection, you pay $150 per month for the add-on and gain access to *all* Advanced Deployment Protection features.

### [Disabling Advanced Deployment Protection](#disabling-advanced-deployment-protection)

To disable Advanced Deployment Protection:

1. Navigate to your team's [Billing](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling&title=Go+to+Billing) page
2. Click Edit on the feature you want to disable and follow the instructions

You must have used the feature for a minimum of 30 days before you can disable it. Once cancelled, all Advanced Deployment Protection features are disabled.

## [Related resources](#related-resources)

* [Methods to protect deployments](/docs/deployment-protection/methods-to-protect-deployments): Learn about each protection method in detail
* [Methods to bypass deployment protection](/docs/deployment-protection/methods-to-bypass-deployment-protection): Configure exceptions and shareable links
* [Vercel plans](/docs/plans): Compare plan features and pricing

---

[Previous

Activity Log](/docs/activity-log)[Next

Bypass Deployment Protection](/docs/deployment-protection/methods-to-bypass-deployment-protection)

Was this helpful?
