Menu

# Managing Builds

Last updated February 26, 2026

When you build your application code, Vercel runs compute to install dependencies, run your build script, and sends the build output to our [Compute](/docs/fluid-compute) and [CDN](/docs/cdn).

By default, we enable [elastic builds](/docs/builds/managing-builds#elastic-build-machines) for paid teams. If you're on a Hobby plan and looking for faster builds, we recommend [upgrading to Pro](/docs/plans/pro-plan).

[Visit Build Diagnostics in the Observability section in the Vercel dashboard sidebar](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability%2Fbuild-diagnostics&title=Visit+Build+Diagnostics) to find your build durations. You can also use this table to quickly identify which solution fits your needs:

| Your situation | Solution | Best for |
| --- | --- | --- |
| Builds are slow or running out of resources | [Elastic/Enhanced/Turbo build machines](#larger-build-machines) | Large apps, complex dependencies |
| Builds are frequently queued | [On-demand Concurrent Builds](#on-demand-concurrent-builds) | Teams with frequent deployments |
| Specific projects are frequently queued | [Project-level on-demand](#project-level-on-demand-concurrent-builds) | Fast-moving projects |
| Occasional urgent deploy stuck in queue | [Force an on-demand build](#force-an-on-demand-build) | Ad-hoc critical fixes |
| Production builds stuck behind preview builds | [Prioritize production builds](#prioritize-production-builds) | All production-heavy workflows |

## [Larger build machines](#larger-build-machines)

Elastic, Enhanced, and Turbo build machines are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

For Pro and Enterprise customers, we offer three higher-tier build machines with more compute resources than Standard. Elastic build machines auto-scale based on your recent build durations. Turbo build machines are enabled by default for new Pro projects.

| Build machine type | Number of vCPUs | Memory (GB) | Disk size (GB) |
| --- | --- | --- | --- |
| Standard | 4 | 8 | 23 |
| Enhanced | 8 | 16 | 56 |
| Turbo | 30 | 60 | 64 |
| Elastic | 4-30 | 8-60 | Auto-scaled |

You can set the build machine type in the Build and Deployment section of your settings [for your team](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbuild-and-deployment%23build-machines&title=Set+team+level+build+machines) or [for individual projects](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment%23build-machine&title=Configure+your+build+machine).

When your team uses Elastic, Enhanced, or Turbo machines, usage contributes to your build usage charges. Elastic build machines are billed by CPU minute, starting at $0.0035 per CPU minute.

Enterprise customers who have Enhanced build machines enabled via contract will always use them by default. You can view if you have this enabled in [the Build Machines section of the Build and Deployment tab in your Team Settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbuild-and-deployment%23build-machines&title=Configure+your+build+machines). To update your build machine preferences, you need to contact your account manager.

## [On-demand concurrent builds](#on-demand-concurrent-builds)

On-demand concurrent builds is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

On-demand concurrent builds allow your builds to skip the queue and run immediately. By default, projects have on-demand concurrent builds enabled with full concurrency. Learn more about [concurrency modes](/docs/builds/build-queues#with-on-demand-concurrent-builds).

You are charged for on-demand concurrent builds based on the number of concurrent builds required to allow the builds to proceed as explained in [usage and limits](#usage-and-limits).

### [Project-level on-demand concurrent builds](#project-level-on-demand-concurrent-builds)

When you enable on-demand build concurrency at the level of a project, any queued builds in that project will automatically be allowed to proceed. You can choose to [run all builds immediately or limit to one active build per branch](/docs/builds/build-queues#with-on-demand-concurrent-builds).

You can configure this on the project's [Build and Deployment Settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment&title=Go+to+Build+and+Deployment+Settings) page:

1. From your Vercel dashboard, select the project you wish to enable it for.
2. Open Settings in the sidebar, and go to the Build and Deployment section of your [Project Settings](/docs/projects/overview#project-settings).
3. Under On-Demand Concurrent Builds, select one of the following:
   * Run all builds immediately: Skip the queue for all builds
   * Run up to one build per branch: Limit to one active build per branch
4. The Turbo option is selected by default with 30 vCPUs and 60 GB of memory. You can switch to [Elastic, Enhanced, or Standard build machines](#larger-build-machines) based on your performance and cost goals.
5. Click Save.

To create an Authorization Bearer token, see the [access token](/docs/rest-api/reference/welcome#creating-an-access-token) section of the API documentation.

cURL

```
curl --request PATCH \
  --url https://api.vercel.com/v9/projects/YOUR_PROJECT_ID?teamId=YOUR_TEAM_ID \
  --header "Authorization: Bearer $VERCEL_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "resourceConfig": {
      "elasticConcurrencyEnabled": true,
      "buildQueue": {
        "configuration": "SKIP_NAMESPACE_QUEUE"
      }
    }
  }'
```

Set `configuration` to one of:

* `SKIP_NAMESPACE_QUEUE`: Run all builds immediately
* `WAIT_FOR_NAMESPACE_QUEUE`: Limit to one active build per branch

To create an Authorization Bearer token, see the [access token](/docs/rest-api/reference/welcome#creating-an-access-token) section of the API documentation.

updateProject

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: '<YOUR_BEARER_TOKEN_HERE>',
});

async function run() {
  const result = await vercel.projects.updateProject({
    idOrName: 'YOUR_PROJECT_ID',
    teamId: 'YOUR_TEAM_ID',
    requestBody: {
      resourceConfig: {
        elasticConcurrencyEnabled: true,
        buildQueue: {
          configuration: 'SKIP_NAMESPACE_QUEUE',
        },
      },
    },
  });

  console.log(result);
}

run();
```

Set `configuration` to one of:

* `SKIP_NAMESPACE_QUEUE`: Run all builds immediately
* `WAIT_FOR_NAMESPACE_QUEUE`: Limit to one active build per branch

### [Force an on-demand build](#force-an-on-demand-build)

For individual deployments, you can force build execution using the Start Building Now button. Regardless of the reason why this build was queued, it will proceed.

1. Select your project from the [dashboard](/dashboard).
2. in the sidebar, open Deployments.
3. Find the queued deployment that you would like to build from the list. You can use the Status filter to help find it. You have 2 options:

   * Select the three dots to the right of the deployment and select Start Building Now.
   * Click on the deployment list item to go to the deployment's detail page and click Start Building Now.
4. Confirm that you would like to build this deployment in the Start Building Now dialog.

## [Elastic build machines](#elastic-build-machines)

Elastic builds is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

With Elastic, Vercel evaluates each project individually and assigns the build machine that best fits its actual workload. The goal is a balance between speed and price: builds that genuinely benefit from more vCPUs and memory get larger machines automatically, while builds that don't get, smaller machines so you aren't paying for compute you won't use.

In practice, this means:

* Optimized bills. Many projects don't fully utilize a Turbo machine's 30 vCPUs. Elastic detects this and assigns a smaller machine, reducing your build minute costs without making builds noticeably slower.
* Faster builds where it matters. Projects that are CPU- or memory-bound (heavy bundling, expensive type checking) are auto-upgraded to a larger machine so they finish sooner.
* No manual tuning. You don't need to benchmark each project or guess the right tier. The assignment is reevaluated as your project changes over time, so it stays right-sized as your codebase grows.

### [When to choose a fixed machine type instead](#when-to-choose-a-fixed-machine-type-instead)

Elastic is the right choice for most projects. You may want to pin a project to a specific build machine type if:

* You want to guarantee a specific machine size on every build.
* A project has unusual resource patterns that you've already manually tuned for.

### [Enabling Elastic build machines](#enabling-elastic-build-machines)

Elastic is the default for new teams.

You can enable Elastic at the team level or per project by navigating to the Build and Deployment section of your settings:

* [Team settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbuild-and-deployment%23build-machines)
* [Project settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment%23build-machine)

Usage is billed under "Build Minutes" at the rate of whichever machine Elastic assigns for a given build.

## [Optimizing builds](#optimizing-builds)

Some other considerations to take into account when optimizing your builds include:

* [Understand](/docs/deployments/troubleshoot-a-build#understanding-build-cache) and [manage](/docs/deployments/troubleshoot-a-build#managing-build-cache) the build cache. By default, Vercel caches the dependencies of your project, based on your framework, to speed up the build process
* You may choose to [Ignore the Build Step](/docs/project-configuration/project-settings#ignored-build-step) on redeployments if you know that the build step is not necessary under certain conditions
* Use the most recent version of your runtime, particularly Node.js, to take advantage of the latest performance improvements. To learn more, see [Node.js](/docs/functions/runtimes/node-js#default-and-available-versions)

## [Prioritize production builds](#prioritize-production-builds)

Prioritize production builds is available on [all plans](/docs/plans)

If a build has to wait for queued preview deployments to finish, it can delay the production release process. When Vercel queues builds, we'll processes them in chronological order (FIFO Order).

To ensure that changes to the [production environment](/docs/deployments/environments#production-environment) are prioritized over [preview deployments](/docs/deployments/environments#preview-environment-pre-production) in the queue, you can enable Prioritize Production Builds:

1. From your Vercel dashboard, select the project you wish to enable it for
2. Open Settings in the sidebar, and go to the [Build and Deployment section](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment&title=Prioritize+Production+Builds+Setting) of your [Project Settings](/docs/projects/overview#project-settings)
3. Under Prioritize Production Builds, toggle the switch to Enabled

## [Usage and limits](#usage-and-limits)

The on-demand build usage is based on the amount of time it took for a deployment to build when using a concurrent build. In Billing, Elastic build machines are billed by CPU minute. Enhanced and Turbo machines are billed by build minute.

### [Pro plan](#pro-plan)

Build machine usage is priced by machine type. Standard build machines are billed only when on-demand concurrency is enabled. Elastic build machines start at $0.0035 per CPU minute.

| Build machine type | Starting price |
| --- | --- |
| Standard (billed **only** when On-Demand Concurrent Builds is enabled) | $0.014 |
| Enhanced (always billed) | $0.030 |
| Turbo (always billed) | $0.126 |
| Elastic (always billed, per CPU minute) | $0.0035 |

### [Enterprise plan](#enterprise-plan)

Elastic build machines start at $0.0035 per CPU minute. Enterprise contract pricing and discounts can vary.

On-demand concurrent builds for Standard, Enhanced, and Turbo build
machines are priced per minute of build time used and the rate depends
on the machine type.

| Machine Type | $s per minute |
| --- | --- |
| Standard | $0.014 |
| Enhanced | $0.028 |
| Turbo | $0.105 |

---

[Previous

Configuring a Build](/docs/builds/configure-a-build)[Next

Deploy Hooks](/docs/deploy-hooks)

Was this helpful?
