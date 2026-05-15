Menu

# WAF Custom Rules

Last updated February 27, 2026

You can [configure](#custom-rule-configuration) specific rules to log, deny, challenge, bypass, or [rate limit](/docs/security/vercel-waf/rate-limiting) traffic to your site. You can [describe rules in natural language](#create-a-rule-with-natural-language) or [configure conditions step by step](#get-started). When you apply the configuration, it takes effect immediately and does not require re-deployment.

[Get started](#get-started) by reviewing the [Best practices for applying rules](#best-practices-for-applying-rules) section.

WAF Custom Rules are available on [all plans](/docs/plans)

Those with the [member](/docs/rbac/access-roles#member-role), [viewer](/docs/rbac/access-roles#viewer-role), [developer](/docs/rbac/access-roles#developer-role), [administrator](/docs/rbac/access-roles#project-administrators) and [security](/docs/rbac/access-roles#security-role) roles can access this feature

## [Access roles](#access-roles)

* You need to be a [Developer](/docs/rbac/access-roles#developer-role) or viewer ([Viewer Pro](/docs/rbac/access-roles#viewer-pro-role) or [Viewer Enterprise](/docs/rbac/access-roles#viewer-enterprise-role)) in the team to view the Firewall overview page and list the rules
* You need to be a [Project administrator](/docs/rbac/access-roles#project-administrators), [Team member](/docs/rbac/access-roles#member-role), or [Security](/docs/rbac/access-roles#security-role) to configure, save and apply any rule and configuration

## [Custom Rule configuration](#custom-rule-configuration)

You can create multiple Custom Rules for the same project. Each rule can perform the following actions according to one or more logical condition(s) that you set based on the value of specific [parameters](/docs/security/vercel-waf/rule-configuration) in the incoming request:

* [log](/docs/vercel-firewall/firewall-concepts#log)
* [deny](/docs/vercel-firewall/firewall-concepts#deny)
* [challenge](/docs/vercel-firewall/firewall-concepts#challenge)
* [bypass](/docs/vercel-firewall/firewall-concepts#bypass)
* redirect

You can save, delete, or disable a rule at any time and these actions have immediate effect. You also have the ability to re-order the precedence of each custom rule.

## [Custom Rule execution](#custom-rule-execution)

When a rule denies or challenges the traffic to your site and the client has not previously solved the challenge (in the case of challenge mode), the rule execution stops and blocks or challenges the request.

After a Log rule runs, the rule execution continues. If no other rule matches and acts on the request, the Log rule that is last matched is reported.

When you apply a [rate limiting](/docs/security/vercel-waf/rate-limiting) rule, you need to include a follow up action that will log, deny, challenge, or return a 429 response.

## [Persistent actions](#persistent-actions)

Persistent Actions are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

When a custom rule blocks a client's request, future requests that do not match the rule's condition from the same client, are allowed through. If you want to deny all requests from the client whose first request was blocked, you will need to identify who this client is through [traffic monitoring](/docs/security/vercel-waf#traffic-monitoring) and create an IP Address rule for that purpose.

With persistent actions, you can automatically block potential bad actors by adding a time-based block to the Challenge or Deny action of your custom rule. When you do so, any client whose request is challenged or denied, will be blocked for a period of time that you specify.

Notes about this time-based block:

* It is applied to the IP address of the client that originally triggered the rule to match.
* It happens before the firewall processes the request, so that none of the requests blocked by persistent actions count towards your [CDN](/docs/cdn) and traffic usage.

### [Enable persistent actions](#enable-persistent-actions)

You can enable persistent actions for any challenge, deny or rate limit action when you create or edit a custom rule. From your project's page in the dashboard:

1. Open [Firewall](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Ffirewall&title=Go+to+Firewall) in the sidebar followed by Configure on the top right of the Firewall overview page.
2. Select a Custom Rule you would like to edit from the list or select + New Rule and follow the [steps](#get-started) for configuring a rule.

When you select challenge, deny or rate limit for the [action](/docs/vercel-firewall/vercel-waf/rule-configuration#actions) dropdown (Then) of any condition, you will see an additional dropdown for timeframe (for) that defaults to 1 minute. You have the following options:

3. Select a time value from the available options
4. Remove the timeframe (If you don't want to enable persistent actions)

Once you're happy with the changes:

5. Select Save Rule to apply it
6. Apply the changes with the Review Changes button

## [Best practices for applying rules](#best-practices-for-applying-rules)

To ensure your Custom Rule behaves as intended:

1. Test a Custom Rule by setting it up with a log action
2. Observe the 10-minute live traffic to check the behavior
3. Update the Custom Rule condition if needed. Once you're happy with the behavior, update the rule with a
   challenge, deny, or bypass, or rate limit action

## [Get started](#get-started)

Learn how to create, test, and apply a Custom Rule.

1. From your [dashboard](/dashboard), select the project you'd like to configure, then open [Firewall](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Ffirewall&title=Go+to+Firewall) in the sidebar
2. Select ⋯ > Configure on the top right of the Firewall overview page
3. Select Add New... > Rule to start creating a new rule
4. Type a name to help you identify the purpose of this rule for future reference. You can also [describe your rule in natural language](#create-a-rule-with-natural-language) using the text area at the top of the form
5. In the Configure section, add as many If conditions as needed. For each condition you add, choose how you will combine it with the previous condition using the AND (Both conditions need to be met) or the OR operator (One of the conditions need to be met)

   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fvercel-waf-custom-rule-configure-and-or-light.png&w=2048&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fvercel-waf-custom-rule-configure-and-or-dark.png&w=2048&q=75)
6. Select Log for the Then action

   * For Rate Limit, review [WAF Rate Limiting](/docs/security/vercel-waf/rate-limiting#get-started)
7. Select Save Rule to apply it
8. Apply the changes:

   * When you make any change, you will see a Review Changes button appear or update on the top right with the number of changes requested
   * Select Review Changes and review the changes to be applied
   * Select Publish to apply the changes to your production deployment
9. Go to the Firewall overview page, select your Custom Rule from the traffic grouping drop-down and select the paramater(s) related to the condition(s) of your Custom Rule to observe the traffic:

   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fwaf-overview-custom-rule-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fwaf-overview-custom-rule-dark.png&w=3840&q=75)
10. If you are satisfied with the traffic behavior, select Configure
11. Select the Custom Rule that you created
12. Update the Then action to Challenge, Deny or Bypass as needed
13. Select Save Rule to apply it
14. Apply the changes with the Review Changes button

Review [Common Examples](/docs/security/vercel-waf/examples) for the application of specific rules in common situations.

## [Create a rule with natural language](#create-a-rule-with-natural-language)

You can describe a Custom Rule in natural language and Vercel will generate the rule configuration for you. This is available when creating or editing a rule.

1. From your [dashboard](/dashboard), select the project you'd like to configure, then open [Firewall](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Ffirewall&title=Go+to+Firewall) in the sidebar
2. Select ⋯ > Configure on the top right of the Firewall overview page
3. Select Add New... > Rule to start creating a new rule
4. In the text area at the top of the form, describe the rule you want and select Generate Rule
5. Review and edit the generated name, conditions, and action as needed
6. Select Save Rule to apply it
7. Apply the changes with the Review Changes button

### [Example prompts](#example-prompts)

| Prompt | What it creates |
| --- | --- |
| "Rate limit /api to 100 requests per minute per IP" | Rate limit rule on `/api`: 60-second window, 100 request limit, keyed by IP |
| "Block requests where path ends with .env, .git, or .bak" | Deny rule on paths ending in `.env`, `.git`, `.bak` with OR condition groups |
| "Challenge requests where user agent contains curl or wget" | Challenge rule with OR conditions for each user agent |
| "Allow only GET and HEAD on /api/public, deny everything else" | Deny rule with a negated method condition |
| "Log all POST requests to /api from outside North America" | Log rule with AND conditions: method, path, negated continent |
| "Rate limit POST /auth/login to 10 per minute per IP, deny for 15 minutes" | Rate limit with persistent action for brute force protection |

You can also use natural language to edit an existing rule by describing what you want to change. For example, "change the action to challenge" or "lower the rate limit to 50."

## [Configuration in vercel.json](#configuration-in-vercel.json)

You can configure custom WAF rules directly in your `vercel.json` file using the `routes` property. This allows you to define firewall rules as part of your deployment configuration.

### [Supported actions](#supported-actions)

When configuring WAF rules in `vercel.json`, you can use the following actions:

* challenge: Challenge the request with a security check
* deny: Block the request entirely

This is a subset of the actions available in the dashboard - `log`, `bypass`,
and `redirect` actions are not supported in `vercel.json` configuration.

### [Example configuration](#example-configuration)

The following example shows how to deny requests that contain a specific header:

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "routes": [
    {
      "src": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "x-react-router-prerender-data"
        }
      ],
      "mitigate": {
        "action": "deny"
      }
    }
  ]
}
```

In this example:

* The route matches all paths (`/(.*)`)
* The `has` condition checks for the presence of a specific header
* The `mitigate` property specifies the action to take (deny the request)

### [Route configuration](#route-configuration)

For complete documentation on route configuration options, including `has`, `missing`, and other conditional matching properties, see the [routes documentation](/docs/project-configuration#routes).

---

[Previous

Web Application Firewall](/docs/vercel-firewall/vercel-waf)[Next

Rate Limiting](/docs/vercel-firewall/vercel-waf/rate-limiting)

Was this helpful?
