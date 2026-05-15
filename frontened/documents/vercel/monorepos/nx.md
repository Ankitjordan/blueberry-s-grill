Title: Deploying Nx to Vercel

URL Source: https://vercel.com/docs/monorepos/nx

Markdown Content:
# Deploying Nx to Vercel
[Skip to content](https://vercel.com/docs/monorepos/nx#geist-skip-nav)

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

[Monorepos](https://vercel.com/docs/monorepos)

Nx

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
    *   [Builds](https://vercel.com/docs/builds) Expand menu 
    *   [Deploy Hooks](https://vercel.com/docs/deploy-hooks)  
    *   [Deployment Checks](https://vercel.com/docs/deployment-checks)  
    *   [Deployment Retention](https://vercel.com/docs/deployment-retention)  
    *   [Deployments](https://vercel.com/docs/deployments) Expand menu 
    *   [Environment Variables](https://vercel.com/docs/environment-variables) Expand menu 
    *   [Git Integrations](https://vercel.com/docs/git) Expand menu 
    *   [Instant Rollback](https://vercel.com/docs/instant-rollback)  
    *   [Microfrontends](https://vercel.com/docs/microfrontends) Expand menu 
    *   [Monorepos](https://vercel.com/docs/monorepos) Expand menu 
        *   [Turborepo](https://vercel.com/docs/monorepos/turborepo)  
        *   [Remote Caching](https://vercel.com/docs/monorepos/remote-caching)  
        *    [Nx](https://vercel.com/docs/monorepos/nx)  
        *   [Monorepos FAQ](https://vercel.com/docs/monorepos/monorepo-faq)  

    *   [Package Managers](https://vercel.com/docs/package-managers)  
    *   [Restricting Git Connections to a single Vercel team](https://vercel.com/docs/protected-git-scopes)  
    *   [Rolling Releases](https://vercel.com/docs/rolling-releases) Expand menu 
    *   [Skew Protection](https://vercel.com/docs/skew-protection)  
    *   [Webhooks](https://vercel.com/docs/webhooks) Expand menu 

*   CDN Expand menu 
*   [CLI](https://vercel.com/docs/cli) Expand menu 
*   Collaboration Expand menu 
*   Compute Expand menu 
*   [Flags](https://vercel.com/docs/flags) Expand menu 
*   Integrations Expand menu 
*   [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
*   Observability Expand menu 
*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 

[Monorepos](https://vercel.com/docs/monorepos)

Nx

# Deploying Nx to Vercel

Ask AI about this page

Last updated March 11, 2026

Nx is an extensible build system with support for monorepos, integrations, and Remote Caching on Vercel.

Read the [Intro to Nx](https://nx.dev/docs/getting-started/intro) docs to learn about the benefits of using Nx to manage your monorepos.

## [Deploy Nx to Vercel](https://vercel.com/docs/monorepos/nx#deploy-nx-to-vercel)[](https://vercel.com/docs/monorepos/nx#deploy-nx-to-vercel)

1.   ### [Ensure your Nx project is configured correctly](https://vercel.com/docs/monorepos/nx#ensure-your-nx-project-is-configured-correctly)[](https://vercel.com/docs/monorepos/nx#ensure-your-nx-project-is-configured-correctly) 
If you haven't already connected your monorepo to Nx, you can follow the [Getting Started](https://nx.dev/docs/guides/adopting-nx/adding-to-monorepo) on the Nx docs to do so.

To ensure the best experience using Nx with Vercel, use `nx` version `17` or later. There are also additional settings if you are [using Remote Caching](https://vercel.com/docs/monorepos/nx#setup-remote-caching-for-nx-on-vercel).

All Nx starters and examples are preconfigured with these settings.  
2.   ### [Import your project](https://vercel.com/docs/monorepos/nx#import-your-project)[](https://vercel.com/docs/monorepos/nx#import-your-project) 
[Create a new Project](https://vercel.com/docs/projects/overview#creating-a-project) on the Vercel dashboard and [import](https://vercel.com/docs/getting-started-with-vercel/import) your monorepo project.

Vercel handles all aspects of configuring your monorepo, including setting [build commands](https://vercel.com/docs/deployments/configure-a-build#build-command), the [Root Directory](https://vercel.com/docs/deployments/configure-a-build#root-directory), the correct directory for npm workspaces, and the [ignored build step](https://vercel.com/docs/project-configuration/project-settings#ignored-build-step).

3.   ### [Next steps](https://vercel.com/docs/monorepos/nx#next-steps)[](https://vercel.com/docs/monorepos/nx#next-steps) 
Your Nx monorepo is now configured and ready to be used with Vercel!

You can now [setup Remote Caching for Nx on Vercel](https://vercel.com/docs/monorepos/nx#setup-remote-caching-for-nx-on-vercel) or configure additional deployment options, such as [environment variables](https://vercel.com/docs/environment-variables).

## [Using `nx-ignore`](https://vercel.com/docs/monorepos/nx#using-nx-ignore)[](https://vercel.com/docs/monorepos/nx#using-nx-ignore)

`nx-ignore` provides a way for you to tell Vercel if a build should continue or not. For more details and information on how to use `nx-ignore`, see the [documentation](https://github.com/nrwl/nx-labs/tree/main/packages/nx-ignore).

## [Setup Remote Caching for Nx on Vercel](https://vercel.com/docs/monorepos/nx#setup-remote-caching-for-nx-on-vercel)[](https://vercel.com/docs/monorepos/nx#setup-remote-caching-for-nx-on-vercel)

Before using remote caching with Nx, ensure the `NX_CACHE_DIRECTORY` environment variable is set to `/tmp/nx-cache`.

To configure Remote Caching for your Nx project on Vercel, use the [`@vercel/remote-nx`](https://github.com/vercel/remote-cache/tree/main/packages/remote-nx) plugin.

`@vercel/remote-nx` uses the custom task runner API, which Nx deprecated in v20 and removed in v21. If you're on Nx 20+, see the [Nx 20+ section below](https://vercel.com/docs/monorepos/nx#nx-20-and-later).

### [Nx 17 to 19](https://vercel.com/docs/monorepos/nx#nx-17-to-19)[](https://vercel.com/docs/monorepos/nx#nx-17-to-19)

1.   #### [Install the `@vercel/remote-nx` plugin](https://vercel.com/docs/monorepos/nx#install-the-@vercel/remote-nx-plugin)[](https://vercel.com/docs/monorepos/nx#install-the-@vercel/remote-nx-plugin)  Terminal ![Image 3](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/topics/icons/pnpm.svg)        `pnpm i @vercel/remote-nx`     `yarn add @vercel/remote-nx`     `npm i @vercel/remote-nx`     `bun add @vercel/remote-nx`   
2.   #### [Configure the `@vercel/remote-nx` runner](https://vercel.com/docs/monorepos/nx#configure-the-@vercel/remote-nx-runner)[](https://vercel.com/docs/monorepos/nx#configure-the-@vercel/remote-nx-runner) 
In your `nx.json` file, add the `@vercel/remote-nx` runner to `tasksRunnerOptions`:

 nx.json      
```
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "@vercel/remote-nx",
      "options": {
        "token": "<token>",
        "teamId": "<teamId>"
      }
    }
  }
}
``` 
You can specify your `token` and `teamId` in your `nx.json` or set them as environment variables.

| Parameter | Description | Environment Variable / .env | `nx.json` |
| --- | --- | --- | --- |
| Vercel Access Token | Vercel access token with access to the provided team | `NX_VERCEL_REMOTE_CACHE_TOKEN` | `token` |
| Vercel [Team ID](https://vercel.com/docs/accounts#find-your-team-id) (optional) | The Vercel Team ID that should share the Remote Cache | `NX_VERCEL_REMOTE_CACHE_TEAM` | `teamId` | When deploying on Vercel, these variables will be automatically set for you.  
3.   #### [Clear cache and run](https://vercel.com/docs/monorepos/nx#clear-cache-and-run)[](https://vercel.com/docs/monorepos/nx#clear-cache-and-run) 
Clear your local cache and rebuild your project.

 Terminal ![Image 4](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/topics/icons/pnpm.svg)        `pnpm dlx nx reset`     `yarn dlx nx reset`     `npx nx reset`     `bunx nx reset`    Terminal ![Image 5](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/topics/icons/pnpm.svg)        `pnpm dlx nx build`     `yarn dlx nx build`     `npx nx build`     `bunx nx build`   

### [Nx 20 and later](https://vercel.com/docs/monorepos/nx#nx-20-and-later)[](https://vercel.com/docs/monorepos/nx#nx-20-and-later)

Nx 20+ deprecated custom task runners. Remote caching now uses an [HTTP-based API](https://nx.dev/docs/guides/tasks--caching/self-hosted-caching) instead of npm packages. The `@vercel/remote-nx` package is not compatible with Nx 20+.

For remote caching on Nx 20+, consider the following options:

*   [Turborepo](https://vercel.com/docs/monorepos/turborepo): Vercel's build system with built-in remote caching support. If you're evaluating build tools, Turborepo offers the most seamless experience on Vercel.
*   [Self-hosted remote cache](https://nx.dev/docs/guides/tasks--caching/self-hosted-caching#self-hosted-cache): Build a custom cache server using the Nx OpenAPI specification (Nx 20.8+)

* * *

[Previous Remote Caching](https://vercel.com/docs/monorepos/remote-caching)[Next Monorepos FAQ](https://vercel.com/docs/monorepos/monorepo-faq)

Was this helpful?

supported.

Send

*   [Deploy Nx to Vercel](https://vercel.com/docs/monorepos/nx#deploy-nx-to-vercel)
*   [Ensure your Nx project is configured correctly](https://vercel.com/docs/monorepos/nx#ensure-your-nx-project-is-configured-correctly)
*   [Import your project](https://vercel.com/docs/monorepos/nx#import-your-project)
*   [Next steps](https://vercel.com/docs/monorepos/nx#next-steps)
*   [Using nx-ignore](https://vercel.com/docs/monorepos/nx#using-nx-ignore)
*   [Setup Remote Caching for Nx on Vercel](https://vercel.com/docs/monorepos/nx#setup-remote-caching-for-nx-on-vercel)
*   [Nx 17 to 19](https://vercel.com/docs/monorepos/nx#nx-17-to-19)
*   [Install the @vercel/remote-nx plugin](https://vercel.com/docs/monorepos/nx#install-the-@vercel/remote-nx-plugin)
*   [Configure the @vercel/remote-nx runner](https://vercel.com/docs/monorepos/nx#configure-the-@vercel/remote-nx-runner)
*   [Clear cache and run](https://vercel.com/docs/monorepos/nx#clear-cache-and-run)
*   [Nx 20 and later](https://vercel.com/docs/monorepos/nx#nx-20-and-later)

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
