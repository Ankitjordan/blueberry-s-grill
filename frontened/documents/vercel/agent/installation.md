Menu

# Installation

Last updated February 17, 2026

Agent Installation is available in [Beta](/docs/release-phases#beta) on [all plans](/docs/plans)

Those with the [owner](/docs/rbac/access-roles#owner-role), [member](/docs/rbac/access-roles#member-role) and [developer](/docs/rbac/access-roles#developer-role) roles can use this feature

Vercel Agent Installation helps add [Web Analytics](/docs/analytics) and [Speed Insights](/docs/speed-insights) to your project with AI. After you start the installation, Vercel Agent automatically:

1. Analyzes your project configuration and connected repository
2. Installs the relevant package
3. Writes the code to integrate the package
4. Creates a pull request with all changes

## [Getting started](#getting-started)

Agent Installation currently only supports projects with a GitHub repository connected.

To have Vercel Agent install Web Analytics or Speed Insights to your project:

1. Go to your [Vercel dashboard](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D&title=Open+Project) and select your GitHub-connected project.
2. Navigate to the Analytics or Speed Insights tab.
3. If needed, click Enable to turn on the feature.
4. Click the Implement button to start the agent.
5. Review the pull request and merge when ready.

Once the pull request is merged and deployed, tracking starts automatically. If you need to regenerate the pull request, click Run Again.

## [Pricing](#pricing)

Vercel Agent Installation is free for all teams. There are no additional costs to use the agent itself.

Billing is based on usage of the underlying features. For example, after the agent installs Web Analytics, you will be charged for [Web Analytics usage](/docs/analytics/limits-and-pricing). The same applies to [Speed Insights usage](/docs/speed-insights/limits-and-pricing).

---

[Previous

Investigation](/docs/agent/investigation)[Next

Pricing](/docs/agent/pricing)

Was this helpful?
