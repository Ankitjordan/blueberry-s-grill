Menu

# WAF System Bypass Rules

Last updated February 27, 2026

WAF System Bypass Rules are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

While Vercel's system-level mitigations (such as [DDoS protection](/docs/security/ddos-mitigation)) safeguard your websites and applications, it can happen that they block traffic from legitimate sources like proxies or shared networks in situations where traffic from these sources was identified as malicious.

You can ensure that specific IP addresses or CIDR ranges are never blocked by the Vercel Firewall's system mitigations with System Bypass Rules.

If you need to allow requests blocked by your own [WAF Custom
Rules](/docs/vercel-waf/custom-rules), use another [custom rule with a bypass
action](/docs/vercel-firewall/vercel-waf/managed-rulesets#bypassing-custom-rules).

## [Get started](#get-started)

To add an IP address that should bypass system mitigations, open [Firewall](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Ffirewall&title=Go+to+Firewall) in the sidebar of your project and follow these steps:

1. On the top right, click Add New and select System Bypass
2. Complete the following fields in the Configure New System Bypass modal:
   * IP Address Or CIDR (required)
   * Domain (required): The domain connected to the project or use `*` to specify all domains connected to a project
   * Note: For future reference
3. Select the Create System Bypass button

You'll see a success message on the bottom right confirming that the rule was added.

## [Limits](#limits)

System Bypass Rules have limits based on your [account plan](/docs/plans).

| Resource | [Hobby](/docs/plans/hobby) | [Pro](/docs/plans/pro) | [Enterprise](/docs/plans/enterprise) |
| --- | --- | --- | --- |
| Number of system bypass rules per project | N/A | 25 | 100 |

---

[Previous

Rule Configuration](/docs/vercel-firewall/vercel-waf/rule-configuration)[Next

Rate Limiting SDK](/docs/vercel-firewall/vercel-waf/rate-limiting-sdk)

Was this helpful?
