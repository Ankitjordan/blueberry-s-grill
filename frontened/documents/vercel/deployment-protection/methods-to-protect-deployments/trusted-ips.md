Menu

# Restrict deployment access by IP address

Trusted IPs are available on [Enterprise plans](/docs/plans/enterprise)

Those with the [owner](/docs/rbac/access-roles#owner-role), [member](/docs/rbac/access-roles#member-role) and [admin](/docs/rbac/access-roles#admin-role) roles can manage Trusted IPs

With Trusted IPs [enabled](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips#manage-trusted-ips) at the level of your [project](/docs/project-configuration/project-settings), only visitors from an allowed IP address can access your deployment. The deployment URL will return `404` [No Deployment Found](/docs/errors/platform-error-codes#404:-deployment_not_found) for all other requests. Trusted IPs is configured by specifying a list of IPv4 addresses and IPv4 CIDR ranges.

Trusted IPs works well if you access Vercel deployments through a specific IP address. For example, you can limit preview deployment access to your VPN. You can also enable Trusted IPs in production to restrict incoming access to only requests through your external proxy.

Want to talk to our team?

This feature is available on the Enterprise plan.

![Enabling Trusted IPs.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Ftrusted-ips-dash-light.png&w=1920&q=75)![Enabling Trusted IPs.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Ftrusted-ips-dash-dark.png&w=1920&q=75)

Enabling Trusted IPs.

## [What to know before enabling Trusted IPs](#what-to-know-before-enabling-trusted-ips)

The tables below outline key considerations and security implications when using Trusted IPs for your deployments on Vercel.

### [General considerations](#general-considerations)

| Consideration | Description |
| --- | --- |
| Environment Configuration | Can be enabled for different environments. See [Understanding Deployment Protection by environment](/docs/security/deployment-protection#understanding-deployment-protection-by-environment) |
| Compatibility | Operates as a required layer on top of [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication) and [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection). |
| Bypass Methods | Can be bypassed using [Shareable Links](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/sharable-links) and [Protection Bypass for Automation](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation), or by callers listed in [Trusted Sources](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/trusted-sources) |
| IP Address Support | Supports IPv4 addresses and IPv4 CIDR ranges |

### [Prerequisites](#prerequisites)

| Consideration | Description |
| --- | --- |
| Preview Environment Requirements | Can only be enabled in preview when [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication) is also enabled. |
| External Proxy Configuration | Requires [rulesets](/kb/guide/can-i-use-a-proxy-on-top-of-my-vercel-deployment) configuration to avoid blocking proxy IPs. [Contact our sales team for more information](/contact/sales) |

### [Security implications](#security-implications)

| Consideration | Description |
| --- | --- |
| Firewall Precedence | [Vercel Firewall](/docs/vercel-firewall) takes precedence over Trusted IPs |
| IP Blocking | IPs or CIDRs listed in [IP Blocking](/docs/security/vercel-waf/ip-blocking) will be blocked even if listed in Trusted IPs |
| DDoS Mitigation | Trusted IPs do not bypass [DDoS Mitigation](/docs/security/ddos-mitigation) unless configured |
| Deployment Impact | Changing the Trusted IPs list affects all deployments |
| Disabling Trusted IPs | Disabling makes all existing deployments accessible from any IP |

## [Manage Trusted IPs](#manage-trusted-ips)

You can manage Trusted IPs through the dashboard, API, or Terraform.

### [Manage using the dashboard](#manage-using-the-dashboard)

1. #### [Go to project deployment protection settings](#go-to-project-deployment-protection-settings)

   From your Vercel [dashboard](/dashboard):

   1. Select the project that you wish to enable Trusted IPs for
   2. Go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. #### [Manage Vercel Authentication](#manage-vercel-authentication)

   Ensure Vercel Authentication is enabled. See [Managing Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication#managing-vercel-authentication).
3. #### [Manage Trusted IPs](#manage-trusted-ips)

   From the Trusted IPs section:

   1. Use the toggle to enable the feature
   2. Select the [deployment environment](/docs/security/deployment-protection#understanding-deployment-protection-by-environment) you want to protect
   3. Enter your list of IPv4 addresses and IPv4 CIDR ranges with an optional note describing the address
   4. Finally, select Save

   All your existing and future deployments will be protected with Trusted IPs for that project. Visitors to your project deployments from IP addresses not included in your list will see a [No Deployment Found](/docs/errors/platform-error-codes#404:-deployment_not_found) error page.

### [Manage using the API](#manage-using-the-api)

You can manage Trusted IPs using the Vercel API endpoint to [update an existing project](/docs/rest-api/reference/endpoints/projects/update-an-existing-project) with the following body:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `deploymentType` | string | Yes | The deployment scope. One of `prod_deployment_urls_and_all_previews` (Standard Protection), `all` (All Deployments), `preview` (Only Preview Deployments), or `production` (Only Production Deployments) |
| `addresses` | array | Yes | Array of address objects |
| `addresses[].value` | string | Yes | The IPv4 or IPv4 CIDR address |
| `addresses[].note` | string | No | Optional note about the address |
| `protectionMode` | string | Yes | Set to `additional` so the IP is required along with other enabled protection methods (recommended) |

```
// enable / update trusted ips
{
  "trustedIps": {
      "deploymentType": "all" | "preview" | "production" | "prod_deployment_urls_and_all_previews",
      "addresses": { "value": "<value>"; "note": "<note>" | undefined }[],
      "protectionMode": "additional"
  }
}
// disable trusted ips
{
  "trustedIps": null
}
```

### [Manage using Terraform](#manage-using-terraform)

You can configure Trusted IPs using `trusted_ips` in the `vercel_project` data source in the [Vercel Terraform Provider](https://registry.terraform.io/providers/vercel/vercel/latest/docs/data-sources/project).

---

Was this helpful?
