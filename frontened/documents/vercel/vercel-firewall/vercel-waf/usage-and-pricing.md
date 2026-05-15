Menu

# Usage & Pricing for Vercel WAF

Last updated September 9, 2025

Vercel Firewall features that are available under all plans, are free to use. This includes [DDoS mitigation](/docs/security/ddos-mitigation), [IP blocking](/docs/security/vercel-waf/ip-blocking), and [custom rules](/docs/security/vercel-waf/custom-rules). Vercel WAF plan-specific features such as [rate limiting](/docs/security/vercel-waf/rate-limiting) and [managed rulesets](/docs/security/vercel-waf/managed-rulesets) are priced as described in [priced features](#priced-features-usage).

## [Free features usage](#free-features-usage)

Although you are not charged for Firewall features available under all plans, you may incur [Edge Requests (ER)](/docs/manage-cdn-usage#edge-requests) and [incoming Fast Data Transfer (FDT)](/docs/manage-cdn-usage#fast-data-transfer) charges as described below.

| Feature | ER | FDT | Note |
| --- | --- | --- | --- |
| [WAF custom rule](/docs/security/vercel-waf/custom-rules) | Charged | Charged | When a custom rule is active, you incur usage for every challenged or denied request. |
| [WAF custom rule with persistent actions](/docs/security/vercel-waf/custom-rules#persistent-actions) | Not charged | Not charged | As the requests are now blocked before being processed by the firewall, they do not count towards usage. |
| [DDoS mitigation](/docs/security/ddos-mitigation) | Not charged | Not charged | Review [Do I get billed for DDoS?](/docs/security/ddos-mitigation#do-i-get-billed-for-ddos) for an explanation. |
| [Attack Mode](/docs/attack-mode) | Not charged | Not charged | When Attack Mode is turned on, requests that do not pass the challenge will not count towards usage. |
| [Account level IP Blocking](/docs/security/vercel-waf/ip-blocking#account-level-ip-blocking) | Not charged | Not charged | Requests originating from these blocked IP addresses do not count towards usage. |
| [Project level IP Blocking](/docs/security/vercel-waf/ip-blocking#project-level-ip-blocking) | Charged | Charged | This falls under custom rules. |

## [Priced features usage](#priced-features-usage)

Enterprise only features are priced as described below.

### [Rate limiting pricing](#rate-limiting-pricing)

Select a Region

Cape Town, South Africa (cpt1)Cleveland, USA (cle1)Dubai, UAE (dxb1)Dublin, Ireland (dub1)Frankfurt, Germany (fra1)Hong Kong (hkg1)London, UK (lhr1)Montréal, Canada (yul1)Mumbai, India (bom1)Osaka, Japan (kix1)Paris, France (cdg1)Portland, USA (pdx1)San Francisco, USA (sfo1)São Paulo, Brazil (gru1)Seoul, South Korea (icn1)Singapore (sin1)Stockholm, Sweden (arn1)Sydney, Australia (syd1)Tokyo, Japan (hnd1)Washington, D.C., USA (iad1)

Managed Infrastructure pricing

| Resource | Measurement Metric | Price |
| --- | --- | --- |
| WAF Rate Limiting | 1,000,000 Allowed Requests | $0.50 |

### [Managed ruleset pricing](#managed-ruleset-pricing)

Select a Region

Cape Town, South Africa (cpt1)Cleveland, USA (cle1)Dubai, UAE (dxb1)Dublin, Ireland (dub1)Frankfurt, Germany (fra1)Hong Kong (hkg1)London, UK (lhr1)Montréal, Canada (yul1)Mumbai, India (bom1)Osaka, Japan (kix1)Paris, France (cdg1)Portland, USA (pdx1)San Francisco, USA (sfo1)São Paulo, Brazil (gru1)Seoul, South Korea (icn1)Singapore (sin1)Stockholm, Sweden (arn1)Sydney, Australia (syd1)Tokyo, Japan (hnd1)Washington, D.C., USA (iad1)

Managed Infrastructure pricing

| Resource | Measurement Metric | Price |
| --- | --- | --- |
| OWASP CRS per request number | 1,000,000 Inspected Requests | $0.80 |
| OWASP CRS per request size | 1 GB of inspected request payload | $0.20 |

---

[Previous

Examples](/docs/vercel-firewall/vercel-waf/examples)[Next

Firewall API](/docs/vercel-firewall/firewall-api)

Was this helpful?
