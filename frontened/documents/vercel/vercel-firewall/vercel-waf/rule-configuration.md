Menu

# Rule Configuration Reference

Last updated April 21, 2025

For each custom rule that you create, you can configure one or more conditions with [parameters](#parameters) from the incoming traffic that you compare with specific values using [operators](#operators). For each new condition, you can choose how you combine it with the previous condition using the AND (Both conditions need to be met) or the OR operator (One of the conditions need to be met).

You also specify an [action](#actions) executed when all the conditions are met.

## [Parameters](#parameters)

Custom Rule Parameters

| Parameter | Description | Example | Note |
| --- | --- | --- | --- |
| Request Path | The full request path on the incoming request, always starting with a leading `/` | `/api`, `/signup/new` |  |
| Route | The framework determined `x-matched-path` | `/blog/[slug]` | When matching on the route, the custom rule will run after middleware. If the rule blocks a request, middleware charges could be incurred |
| Server Action Name | The Next.js server action name as defined by your codebase | `app/auth/actions.ts#getUser` | Requires Next.js 15.5. When matching on the server action name, the custom rule will run after middleware. If the rule blocks a request, middleware charges could be incurred |
| Raw Path | The raw request path, ignoring any parsing or normalizing that might be done at the framework level | `/api/`, `/signup/new/` |  |
| Method | The HTTP method used to make the request | `GET`, `POST` |  |
| User Agent | The HTTP user agent used to make the request | `curl` |  |
| Request Header | The request header on the original request. Define both the header key and value you want to match |  | You cannot match headers set by middleware, as the rule runs before middleware is invoked |
| Query | Any incoming query parameter on the original request. Define both the query key and value you want to match |  |  |
| Cookie | Any incoming cookie on the original request. Define both the query key and value you want to match |  |  |
| Hostname | The hostname used for the incoming request |  | This applies to projects with multiple domains such as platforms that assign a domain to each user of the platform |
| IP Address | The original or forwarded IP address on the incoming request | `10.0.0.1`, `10.0.0.1/32` |  |
| Protocol | The HTTP protocol of the original request | `HTTP/1.1`, `HTTP/2.0` |  |
| Environment | The Vercel Environment that received this request |  | Preview or Production |
| Vercel Region | The Vercel region that received this request | [Regions list](/docs/regions#region-list) |  |
| Continent | The continent based on the client IP address |  | A shorthand for the `x-vercel-ip-continent` header |
| State | The state (Country Region) based on the client IP address |  | A shorthand for the `x-vercel-ip-country-region` header |
| Country | The country based on the client IP address |  | A shorthand for the `x-vercel-ip-country` header |
| City | The city based on the client IP address |  | A shorthand for the `x-vercel-ip-city` header |
| AS Number | The Autonomous System Number based on the client IP address | Digits only, e.g. `12345` | Digits only |
| JA3 Digest | The calculated TLS digest of the incoming request |  |  |
| JA4 Digest | The calculated TLS digest of the incoming request |  |  |
| @vercel/firewall | ID for a rate limit instrumented in code via the `@vercel/firewall` package |  |  |

## [Operators](#operators)

All operators are case insensitive.

Operators Rule Parameters

| Parameter | Value | Description |
| --- | --- | --- |
| Equals | `eq` | * An exact string match |
| Does not equal | `neq` | Inverse of **Equals** |
| Is any of | `inc` | * An exact string match, matching any of the provided values * Acts like a `SQL IN` query |
| Is not any of | `ninc` | * Ensures the source is not a match with any of the provided values * Acts like a `SQL NOT IN` query |
| Contains | `sub` | * Includes the provided value |
| Does not contain | `sub` | Inverse of **Contains**. Set the `neg` parameter to `true` |
| Starts with | `pre` | * A string operator matching the start of the string * Optimized for performance. It's preferred to use this over a regex prefix expression |
| Ends with | `suf` | * A string operator matching the end of the string * Optimized for performance. It's preferred to use this over a regex suffix expression |
| Matches expression | `re` | * A PCRE ([Perl Compatible Regular Expression](https://www.pcre.org/)) compliant regular expression * Useful for negative matches like “does not contain” or similar strict matching criteria |
| Does not match expression | `re` | Inverse of **Matches expression**. Set the `neg` parameter to `true` |

## [Actions](#actions)

| Name | Description | Note |
| --- | --- | --- |
| Log | Tracks the matching of this rule without blocking traffic. Requests matching this rule are visible in the Firewall overview page. | * If another rule blocks the traffic **before** a log rule executes, the request is not considered a match for that log rule * If another rule blocks the traffic **after** a log rule executes, the request is tagged to the rule that blocked the traffic and does not appear in the log rule |
| Challenge | Conditionally blocks traffic with [browser challenge](/docs/vercel-firewall/firewall-concepts#challenge). | * If the client fails to solve the challenge, the rule continues to block the traffic * Once the client solves the challenge, the rule is bypassed and remaining rules (if any) are evaluated. The request is allowed if none of the remaining rules block |
| Deny | Blocks the request and no further rules are evaluated. |  |
| Bypass | If matched, it bypasses any remaining custom rules. | WAF bypass rules **do not** bypass system-level mitigations such as [DDoS Mitigation](/docs/security/ddos-mitigation). To do so, you can use the [Bypass System-level Mitigations](/docs/security/ddos-mitigation#bypass-system-level-mitigations) feature. |
| Redirect | If matched, it redirects the client to the target path set in the `to` field. | * Redirects the request and no further rules are evaluated * The target path in the `to` field can be absolute or relative to the project deployment's root * It's a temporary redirect (307) |

---

[Previous

Rate Limiting](/docs/vercel-firewall/vercel-waf/rate-limiting)[Next

System Bypass Rules](/docs/vercel-firewall/vercel-waf/system-bypass-rules)

Was this helpful?
