Title: Debugging production 500 errors

URL Source: https://vercel.com/docs/observability/debug-production-errors

Markdown Content:
# Debugging production 500 errors
[Skip to content](https://vercel.com/docs/observability/debug-production-errors#geist-skip-nav)

[](https://vercel.com/home)![Image 1: Vercel](https://vercel.com/vc-ap-vercel-docs/_next/static/media/vercel-light.23p4dw77xj4pk.svg?dpl=dpl_5DfGMJKhYjqrAbKHZE8dD5mremRJ)![Image 2: Vercel](https://vercel.com/vc-ap-vercel-docs/_next/static/media/vercel-dark.05qiau0oi3y6n.svg?dpl=dpl_5DfGMJKhYjqrAbKHZE8dD5mremRJ)

*   Products

    *   ##### [AI Cloud](https://vercel.com/ai)

        *   [AI Gateway One endpoint, all your models](https://vercel.com/ai-gateway)
        *   [Sandbox Isolated, safe code execution](https://vercel.com/sandbox)
        *   [Vercel Agent An agent that knows your stack](https://vercel.com/agent)
        *   [AI SDK The AI Toolkit for TypeScript](https://sdk.vercel.ai/)
        *   [v0 Build applications with AI](https://v0.app/)

    *   ##### Core Platform

        *   [CI/CD Helping teams ship 6× faster](https://vercel.com/products/previews)
        *   [Content Delivery Fast, scalable, and reliable](https://vercel.com/cdn)
        *   [Fluid Compute Servers, in serverless form](https://vercel.com/fluid)
        *   [Workflow Long-running workflows at scale](https://vercel.com/workflows)
        *   [Observability Trace every step](https://vercel.com/products/observability)

    *   ##### [Security](https://vercel.com/security)

        *   [Bot Management Scalable bot protection](https://vercel.com/security/bot-management)
        *   [BotID Invisible CAPTCHA](https://vercel.com/botid)
        *   [Platform Security DDoS Protection, Firewall](https://vercel.com/security)
        *   [Web Application Firewall Granular, custom protection](https://vercel.com/security/web-application-firewall)

*   Resources

    *   ##### Company

        *   [Customers Trusted by the best teams](https://vercel.com/customers)
        *   [Blog The latest posts and changes](https://vercel.com/blog)
        *   [Changelog See what shipped](https://vercel.com/changelog)
        *   [Press Read the latest news](https://vercel.com/press)
        *   [Events Join us at an event](https://vercel.com/events)

    *   ##### Learn

        *   [Docs Vercel documentation](https://vercel.com/docs)
        *   [Academy Linear courses to level up](https://vercel.com/academy)
        *   [Knowledge Base Find help quickly](https://vercel.com/kb)
        *   [Community Join the conversation](https://community.vercel.com/)

    *   ##### Open Source

        *   [Next.js The native Next.js platform](https://vercel.com/frameworks/nextjs)
        *   [Nuxt The progressive web framework](https://nuxt.com/)
        *   [Svelte The web’s efficient UI framework](https://svelte.dev/)
        *   [Turborepo Speed with Enterprise scale](https://vercel.com/solutions/turborepo)

*   Solutions

    *   ##### Use Cases

        *   [AI Apps Deploy at the speed of AI](https://vercel.com/ai)
        *   [Composable Commerce Power storefronts that convert](https://vercel.com/solutions/composable-commerce)
        *   [Marketing Sites Launch campaigns fast](https://vercel.com/solutions/marketing-sites)
        *   [Multi-tenant Platforms Scale apps with one codebase](https://vercel.com/solutions/multi-tenant-saas)
        *   [Web Apps Ship features, not infrastructure](https://vercel.com/solutions/web-apps)

    *   ##### Tools

        *   [Marketplace Extend and automate workflows](https://vercel.com/marketplace)
        *   [Templates Jumpstart app development](https://vercel.com/templates)
        *   [Partner Finder Get help from solution partners](https://vercel.com/partners/solution-partners)

    *   ##### Users

        *   [Platform Engineers Automate away repetition](https://vercel.com/solutions/platform-engineering)
        *   [Design Engineers Deploy for every idea](https://vercel.com/solutions/design-engineering)

*   [Enterprise](https://vercel.com/enterprise)
*   [Pricing](https://vercel.com/pricing)

Search Documentation Search...⌘ K

Ask AI

Search Documentation Search...⌘ K

Ask AI

[Overview](https://vercel.com/docs/observability)

Debug 500 Errors

*   [Getting Started](https://vercel.com/docs/getting-started-with-vercel)  
*   [Fundamental Concepts](https://vercel.com/docs/fundamentals) Expand menu 
*   [Supported Frameworks](https://vercel.com/docs/frameworks) Expand menu 
*   [Incremental Migration](https://vercel.com/docs/incremental-migration)  
*   [Production Checklist](https://vercel.com/docs/production-checklist)  
*   [Knowledge Base](https://vercel.com/kb)  
*   APIs & SDKs Expand menu 

* * *

*   Access Expand menu 
*   AI Expand menu 
*   Build & Deploy Expand menu 
*   CDN Expand menu 
*   [CLI](https://vercel.com/docs/cli) Expand menu 
*   Collaboration Expand menu 
*   Compute Expand menu 
*   [Flags](https://vercel.com/docs/flags) Expand menu 
*   Integrations Expand menu 
*   [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
*   Observability Expand menu 
    *   [Overview](https://vercel.com/docs/observability) Expand menu 
        *   [Insights](https://vercel.com/docs/observability/insights)  
        *    [Debug 500 Errors](https://vercel.com/docs/observability/debug-production-errors)  
        *   [Observability Plus](https://vercel.com/docs/observability/observability-plus)  

    *   [Alerts](https://vercel.com/docs/alerts)  
    *   [Logs](https://vercel.com/docs/logs) Expand menu 
    *   [Tracing](https://vercel.com/docs/tracing) Expand menu 
    *   [Query](https://vercel.com/docs/query) Expand menu 
    *   [Notebooks](https://vercel.com/docs/notebooks)  
    *   [Speed Insights](https://vercel.com/docs/speed-insights) Expand menu 
    *   [Drains](https://vercel.com/docs/drains) Expand menu 
    *   [Web Analytics](https://vercel.com/docs/analytics) Expand menu 
    *   [Manage & Optimize](https://vercel.com/docs/manage-and-optimize-observability)  
    *   [Debug Cache Issues](https://vercel.com/docs/cdn-cache/debug-cache-issues)  

*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 

[Overview](https://vercel.com/docs/observability)

Debug 500 Errors

# Debugging production 500 errors

Ask AI about this page

Last updated February 24, 2026

Use this guide to debug production 500 errors. You'll identify the problem, trace it to a root cause, and deploy a verified fix.

This guide requires a linked Vercel project. Run `vercel link` in your project directory if you haven't already.

## [Quick reference](https://vercel.com/docs/observability/debug-production-errors#quick-reference)[](https://vercel.com/docs/observability/debug-production-errors#quick-reference)

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

terminal

```
# 1. Find 500 errors in production
vercel logs --environment production --status-code 5xx --since 1h
 
# 2. Get structured data to filter programmatically
vercel logs --environment production --status-code 500 --json --since 1h \
  | jq '{path: .path, message: .message, timestamp: .timestamp}'
 
# 3. Narrow the time range once you know when errors started
vercel logs --environment production --status-code 500 --since 2h --until 1h
 
# 4. Identify the failing deployment
vercel list --prod
vercel inspect <deployment-url>
vercel inspect <deployment-url> --logs    # build logs
 
# 5. Correlate with source code
git log --oneline -10
git show <commit-sha> --stat
 
# 6. Fix locally, then deploy a preview
vercel deploy
 
# 7. Verify the fix against the preview
vercel curl /api/failing-route --deployment <preview-url>
vercel logs --deployment <preview-deployment-id> --level error
 
# 8. Ship to production
vercel deploy --prod
 
# 9. Confirm the fix
vercel logs --environment production --status-code 500 --since 5m
 
# IF you cannot identify the failing deployment from logs:
vercel bisect --good <good-deployment-url> --bad <bad-deployment-url> --path /api/failing-route
 
# IF errors are severe and you need to restore service before debugging:
vercel rollback
vercel rollback status
```

## [1. Find the 500 errors](https://vercel.com/docs/observability/debug-production-errors#1.-find-the-500-errors)[](https://vercel.com/docs/observability/debug-production-errors#1.-find-the-500-errors)

Start by pulling production error logs from the last hour. The `--status-code 5xx` filter catches all server errors, not just 500s, so you get the full picture:

terminal

`vercel logs --environment production --status-code 5xx --since 1h`

If the output is noisy, narrow it down to a specific status code:

terminal

`vercel logs --environment production --status-code 500 --since 1h`

At this point, you're looking for patterns: are the errors concentrated on one route, or spread across many? Is there a common error message?

## [2. Get structured log data](https://vercel.com/docs/observability/debug-production-errors#2.-get-structured-log-data)[](https://vercel.com/docs/observability/debug-production-errors#2.-get-structured-log-data)

Switch to JSON output so you can filter and search programmatically. Pipe through `jq` to extract the fields you need:

terminal

```
vercel logs --environment production --status-code 500 --json --since 1h \
  | jq '{path: .path, message: .message, timestamp: .timestamp}'
```

If you spot a recurring error message, search for it directly:

terminal

`vercel logs --environment production --query "Cannot read properties of undefined" --since 1h --expand`

The `--expand` flag shows full log messages instead of truncating them, which is important when error stack traces get cut off.

## [3. Narrow the time range](https://vercel.com/docs/observability/debug-production-errors#3.-narrow-the-time-range)[](https://vercel.com/docs/observability/debug-production-errors#3.-narrow-the-time-range)

Once you identify when the errors started, use `--since` and `--until` to zoom into that window. This reduces noise and helps you spot the exact trigger:

terminal

`vercel logs --environment production --status-code 500 --since 2h --until 1h`

If you have a specific request ID from an error report or alert, pull the full details for that request:

terminal

`vercel logs --request-id req_xxxxx --expand`

## [4. Identify the failing deployment](https://vercel.com/docs/observability/debug-production-errors#4.-identify-the-failing-deployment)[](https://vercel.com/docs/observability/debug-production-errors#4.-identify-the-failing-deployment)

Check which deployment is currently serving production traffic. If errors started recently, compare the current deployment against earlier ones:

terminal

`vercel list --prod`

To see full details about the current production deployment, including the git commit that triggered it:

terminal

`vercel inspect <deployment-url>`

If you need the build logs to check for warnings or errors during the build:

terminal

`vercel inspect <deployment-url> --logs`

## [5. Correlate with the source code](https://vercel.com/docs/observability/debug-production-errors#5.-correlate-with-the-source-code)[](https://vercel.com/docs/observability/debug-production-errors#5.-correlate-with-the-source-code)

At this point, you know the failing route, the error message, and which deployment introduced the problem. Use the git commit from `vercel inspect` to find the relevant code change:

terminal

```
git log --oneline -10
git show <commit-sha> --stat
```

Read the source code for the failing route and identify the bug. Common causes of 500 errors include:

*   Unhandled null or undefined values from API responses
*   Missing environment variables
*   Database connection failures
*   Type mismatches after a dependency update

## [6. Fix and deploy a preview](https://vercel.com/docs/observability/debug-production-errors#6.-fix-and-deploy-a-preview)[](https://vercel.com/docs/observability/debug-production-errors#6.-fix-and-deploy-a-preview)

After making the fix locally, deploy a preview to test it without affecting production:

terminal

`vercel deploy`

This outputs a preview URL. Save it for the next step.

## [7. Verify the fix](https://vercel.com/docs/observability/debug-production-errors#7.-verify-the-fix)[](https://vercel.com/docs/observability/debug-production-errors#7.-verify-the-fix)

Test the specific route that was failing using `vercel curl`, which automatically handles deployment protection:

terminal

`vercel curl /api/failing-route --deployment <preview-url>`

Check the response status and body. If you need timing details to confirm the fix didn't introduce latency:

terminal

`vercel httpstat /api/failing-route --deployment <preview-url>`

Check the preview deployment's logs to confirm no new errors:

terminal

`vercel logs --deployment <preview-deployment-id> --level error`

## [8. Ship to production](https://vercel.com/docs/observability/debug-production-errors#8.-ship-to-production)[](https://vercel.com/docs/observability/debug-production-errors#8.-ship-to-production)

Once the preview passes verification, deploy to production:

terminal

`vercel deploy --prod`

## [9. Confirm the fix in production](https://vercel.com/docs/observability/debug-production-errors#9.-confirm-the-fix-in-production)[](https://vercel.com/docs/observability/debug-production-errors#9.-confirm-the-fix-in-production)

After the production deployment completes, verify that the errors have stopped:

terminal

`vercel logs --environment production --status-code 500 --since 5m`

If the output is empty, the fix is working.

## [When you can't find the cause](https://vercel.com/docs/observability/debug-production-errors#when-you-can't-find-the-cause)[](https://vercel.com/docs/observability/debug-production-errors#when-you-can't-find-the-cause)

If the error started between two deployments and you can't pinpoint the change, use `vercel bisect` to binary-search through your deployment history:

terminal

`vercel bisect --good <good-deployment-url> --bad <bad-deployment-url> --path /api/failing-route`

This steps through deployments between the good and bad ones, letting you identify exactly which deployment introduced the regression.

## [When you need to restore service immediately](https://vercel.com/docs/observability/debug-production-errors#when-you-need-to-restore-service-immediately)[](https://vercel.com/docs/observability/debug-production-errors#when-you-need-to-restore-service-immediately)

If the errors are severe and you need to restore service while you investigate, roll back to the previous production deployment:

terminal

`vercel rollback`

This instantly points production traffic to your previous deployment. You can then debug at your own pace and deploy the fix when it's ready.

To check the rollback status:

terminal

`vercel rollback status`

## [Related](https://vercel.com/docs/observability/debug-production-errors#related)[](https://vercel.com/docs/observability/debug-production-errors#related)

*   [vercel logs](https://vercel.com/docs/cli/logs)
*   [vercel inspect](https://vercel.com/docs/cli/inspect)
*   [vercel curl](https://vercel.com/docs/cli/curl)
*   [vercel bisect](https://vercel.com/docs/cli/bisect)
*   [vercel rollback](https://vercel.com/docs/cli/rollback)
*   [Observability](https://vercel.com/docs/observability)

* * *

[Previous Insights](https://vercel.com/docs/observability/insights)[Next Observability Plus](https://vercel.com/docs/observability/observability-plus)

Was this helpful?

supported.

Send

*   [Quick reference](https://vercel.com/docs/observability/debug-production-errors#quick-reference)
*   [1. Find the 500 errors](https://vercel.com/docs/observability/debug-production-errors#1.-find-the-500-errors)
*   [2. Get structured log data](https://vercel.com/docs/observability/debug-production-errors#2.-get-structured-log-data)
*   [3. Narrow the time range](https://vercel.com/docs/observability/debug-production-errors#3.-narrow-the-time-range)
*   [4. Identify the failing deployment](https://vercel.com/docs/observability/debug-production-errors#4.-identify-the-failing-deployment)
*   [5. Correlate with the source code](https://vercel.com/docs/observability/debug-production-errors#5.-correlate-with-the-source-code)
*   [6. Fix and deploy a preview](https://vercel.com/docs/observability/debug-production-errors#6.-fix-and-deploy-a-preview)
*   [7. Verify the fix](https://vercel.com/docs/observability/debug-production-errors#7.-verify-the-fix)
*   [8. Ship to production](https://vercel.com/docs/observability/debug-production-errors#8.-ship-to-production)
*   [9. Confirm the fix in production](https://vercel.com/docs/observability/debug-production-errors#9.-confirm-the-fix-in-production)
*   [When you can't find the cause](https://vercel.com/docs/observability/debug-production-errors#when-you-can't-find-the-cause)
*   [When you need to restore service immediately](https://vercel.com/docs/observability/debug-production-errors#when-you-need-to-restore-service-immediately)
*   [Related](https://vercel.com/docs/observability/debug-production-errors#related)

Copy as Markdown Install Vercel Plugin Give feedback Ask AI about this page

## Get Started

*   [Templates](https://vercel.com/templates)
*   [Supported frameworks](https://vercel.com/docs/frameworks)
*   [Marketplace](https://vercel.com/marketplace)
*   [Domains](https://vercel.com/domains)

## Build

*   [Next.js on Vercel](https://vercel.com/frameworks/nextjs)
*   [Turborepo](https://vercel.com/solutions/turborepo)
*   [v0](https://v0.app/)

## Scale

*   [Content delivery network](https://vercel.com/cdn)
*   [Fluid compute](https://vercel.com/fluid)
*   [CI/CD](https://vercel.com/products/previews)
*   [Observability](https://vercel.com/products/observability)
*   [AI Gateway New](https://vercel.com/ai-gateway)
*   [Vercel Agent New](https://vercel.com/agent)

## Secure

*   [Platform security](https://vercel.com/security)
*   [Web Application Firewall](https://vercel.com/security/web-application-firewall)
*   [Bot management](https://vercel.com/security/bot-management)
*   [BotID](https://vercel.com/botid)
*   [Sandbox New](https://vercel.com/sandbox)

## Resources

*   [Pricing](https://vercel.com/pricing)
*   [Customers](https://vercel.com/customers)
*   [Enterprise](https://vercel.com/enterprise)
*   [Articles](https://vercel.com/i)
*   [Startups](https://vercel.com/startups)
*   [Solution partners](https://vercel.com/partners/solution-partners)

## Learn

*   [Docs](https://vercel.com/docs)
*   [Blog](https://vercel.com/blog)
*   [Changelog](https://vercel.com/changelog)
*   [Knowledge Base](https://vercel.com/kb)
*   [Academy](https://vercel.com/academy)
*   [Community](https://community.vercel.com/)

## Frameworks

*   [Next.js](https://vercel.com/frameworks/nextjs)
*   [Nuxt](https://vercel.com/docs/frameworks/full-stack/nuxt)
*   [Svelte](https://vercel.com/docs/frameworks/full-stack/sveltekit)
*   [Nitro](https://vercel.com/docs/frameworks/backend/nitro)
*   [Turbo](https://vercel.com/solutions/turborepo)

## SDKs

*   [AI SDK](https://ai-sdk.dev/)
*   [Workflow SDK New](https://workflow-sdk.dev/)
*   [Flags SDK](https://flags-sdk.dev/)
*   [Chat SDK](https://chat-sdk.dev/)
*   [Streamdown AI New](https://streamdown.ai/)

## Use Cases

*   [Composable commerce](https://vercel.com/solutions/composable-commerce)
*   [Multi-tenant platforms](https://vercel.com/solutions/multi-tenant-saas)
*   [Web apps](https://vercel.com/solutions/web-apps)
*   [Marketing sites](https://vercel.com/solutions/marketing-sites)
*   [Platform engineers](https://vercel.com/solutions/platform-engineering)
*   [Design engineers](https://vercel.com/solutions/design-engineering)

## Company

*   [About](https://vercel.com/about)
*   [Careers](https://vercel.com/careers)
*   [Help](https://vercel.com/help)
*   [Press](https://vercel.com/press)
*   [Legal](https://vercel.com/legal)
*   [Privacy Policy](https://vercel.com/legal/privacy-policy)

## Community

*   [Open source program](https://vercel.com/open-source-program)
*   [Events](https://vercel.com/events)
*   [Shipped on Vercel](https://vercel.com/shipped)
*   [GitHub](https://github.com/vercel)
*   [LinkedIn](https://linkedin.com/company/vercel)
*   [X](https://x.com/vercel)
*   [YouTube](https://youtube.com/@VercelHQ)

[](https://vercel.com/home)

[Loading status…](https://vercel-status.com/)Select a display theme:system light dark
