Firewall

# Vercel Firewall

Last updated February 26, 2026

The Vercel Firewall is a robust, multi-layered security system designed to protect your applications from a wide range of threats. Every incoming request goes through the following firewall layers:

* [Platform-wide firewall](#platform-wide-firewall): With [DDoS mitigation](/docs/security/ddos-mitigation), it protects against large-scale attacks such as DDoS and TCP floods and is available for free for all customers without any configuration required.
* [Web Application Firewall (WAF)](#vercel-waf): A customizable layer for fine-tuning security measures with logic tailored to your needs and [observability](#observability) into your web traffic.

### [Concepts](#concepts)

Understand the fundamentals:

* How [Vercel protects every request](/docs/security/firewall-concepts#how-vercel-secures-requests).
* Why [DDoS](/docs/security/firewall-concepts#understanding-ddos) needs to be mitigated.
* How the firewall decides [which rule to apply first](#rule-execution-order).
* How the firewall uses [JA3 and JA4 TLS fingerprints](/docs/security/firewall-concepts#ja3-and-ja4-tls-fingerprints) to identify and restrict malicious traffic.

## [Rule execution order](#rule-execution-order)

The automatic rules of the platform-wide firewall and the custom rules of the WAF work together in the following execution order:

1. [DDoS mitigation rules](/docs/security/ddos-mitigation)
2. [WAF IP blocking rules](/docs/security/vercel-waf/ip-blocking)
3. [WAF custom rules](/docs/security/vercel-waf/custom-rules)
4. [WAF Managed Rulesets](/docs/security/vercel-waf/managed-rulesets)

When you have more than one custom rule, you can [customize](/docs/security/vercel-waf/custom-rules#custom-rule-configuration) their order in the Firewall section in the sidebar of the project.

## [Platform-wide firewall](#platform-wide-firewall)

DDoS Mitigation is available on [all plans](/docs/plans)

Vercel provides automated [DDoS mitigation](/docs/security/ddos-mitigation) for all deployments, regardless of the plan that you are on. With this automated DDoS mitigation, we block incoming traffic if we identify abnormal or suspicious levels of incoming requests.

## [Vercel WAF](#vercel-waf)

Vercel WAF is available on [all plans](/docs/plans)

Those with the [member](/docs/rbac/access-roles#member-role), [viewer](/docs/rbac/access-roles#viewer-role), [developer](/docs/rbac/access-roles#developer-role) and [administrator](/docs/rbac/access-roles#project-administrators) roles can access this feature

The [Vercel WAF](/docs/security/vercel-waf) complements the platform-wide firewall by allowing you to define custom protection strategies using the following tools:

* [Custom Rules](/docs/security/vercel-waf/custom-rules)
* [IP Blocking](/docs/security/vercel-waf/ip-blocking)
* [WAF Managed Rulesets](/docs/security/vercel-waf/managed-rulesets)
* [Attack Mode](/docs/attack-mode)

## [Observability](#observability)

You can use the following tools to [monitor the internet traffic](/docs/vercel-firewall/firewall-observability) at your team or project level:

* The [Monitoring](/docs/observability/monitoring) feature at the team level allows you to create [queries](/docs/observability/monitoring/monitoring-reference#example-queries) to visualize the traffic across your Vercel projects.
* Firewall in the Vercel dashboard sidebar on every project allows you to monitor the internet traffic to your deployments with a [traffic monitoring view](/docs/vercel-firewall/firewall-observability#traffic) that includes a live traffic window.
* [Firewall alerts](/docs/vercel-firewall/firewall-observability#firewall-alerts) allow you to react quickly to potential security threats.
* Use [Log Drains](/docs/drains/using-drains) to send your application logs to a Security Information and Event Management (SIEM) system.

---

[Previous

Audit Logs](/docs/audit-log)[Next

Firewall Concepts](/docs/vercel-firewall/firewall-concepts)

Was this helpful?
