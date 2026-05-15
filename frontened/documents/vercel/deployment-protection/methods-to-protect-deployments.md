Menu

# Methods to Protect Deployments

Last updated February 27, 2026

Vercel offers three methods for protecting your deployments. Depending on your use case, you can choose to protect a single environment, or multiple environments. See [Understanding Deployment Protection by environment](/docs/security/deployment-protection#understanding-deployment-protection-by-environment) for more information.

To see an overview of your projects' protections:

1. Open Settings in the sidebar of your [dashboard](/dashboard) and select [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings)

![View your project protections on the Dashboard > Settings > Deployment Protection page.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployments%2Fdeployment-protection-projects-view.png&w=1080&q=75)![View your project protections on the Dashboard > Settings > Deployment Protection page.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployments%2Fdeployment-protection-projects-view-dark.png&w=1080&q=75)

View your project protections on the Dashboard > Settings > Deployment Protection page.

## [Vercel Authentication](#vercel-authentication)

Vercel Authentication is available on [all plans](/docs/plans)

With Vercel Authentication you can restrict access to all deployments (including non-public deployments), meaning only team members with a Vercel account, or users you share a [Sharable Link](/docs/security/deployment-protection/methods-to-bypass-deployment-protection#sharable-links) with, can access non-public URLs, such as `my-project-1234-your-name.vercel.app`.

When a Vercel user visits your protected deployment but doesn't have permission to access it, they can [request access](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication#access-requests) for their Vercel account. This request triggers an email and Vercel notification to the branch authors.

Learn more about [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication) and how to enable it.

## [Password Protection](#password-protection)

Password Protection is available on [Enterprise plans](/docs/plans/enterprise) or with the [Advanced Deployment Protection](/docs/security/deployment-protection#advanced-deployment-protection) add-on for [Pro plans](/docs/plans/pro-plan)

Password Protection on Vercel lets you restrict access to both non-public, and public deployments depending on the type of [environment protection](/docs/security/deployment-protection#understanding-deployment-protection-by-environment) you choose.

Learn more about [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection) and how to enable it.

## [Trusted IPs](#trusted-ips)

Trusted IPs are available on [Enterprise plans](/docs/plans/enterprise)

Trusted IPs restrict deployment access to specified IPv4 addresses and [CIDR ranges](https://www.ipaddressguide.com/cidr), returning a 404 for unauthorized IPs. This protection feature is suitable for limiting access through specific paths like VPNs or external proxies.

Learn more about [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips) and how to enable it.

## [Related resources](#related-resources)

* [Understanding Deployment Protection by environment](/docs/deployment-protection#understanding-deployment-protection-by-environment)
* [Methods to bypass deployment protection](/docs/deployment-protection/methods-to-bypass-deployment-protection)

---

[Previous

Bypass Deployment Protection](/docs/deployment-protection/methods-to-bypass-deployment-protection)[Next

Password Protection](/docs/deployment-protection/methods-to-protect-deployments/password-protection)

Was this helpful?
