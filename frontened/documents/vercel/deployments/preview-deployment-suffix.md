Menu

# Preview Deployment Suffix

Last updated February 27, 2026

Preview Deployment Suffix is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Preview Deployment Suffixes allow you to customize the URL of a [preview deployment](/docs/deployments/environments#preview-environment-pre-production) by replacing the default `vercel.app` suffix with a [custom domain](/docs/domains/add-a-domain) of your choice.

The entered custom domain must be:

* Available and active within the team that enabled the Preview Deployment Suffix
* Using Vercel's [Nameservers](/docs/domains/add-a-domain#vercel-nameservers)

### [Enabling the Preview Deployment Suffix](#enabling-the-preview-deployment-suffix)

Preview Deployment Suffix is included and enabled by default in Enterprise
plans

To enable Preview Deployment Suffix, and customize the appearance of any of your generated URLs:

1. From your [dashboard](/dashboard), open Settings in the sidebar
2. Open [Billing](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling&title=Go+to+Billing) in the sidebar
3. Under Add-Ons, set the toggle for Preview Deployment Suffix to Enabled
4. Open Settings in the sidebar on the team dashboard
5. Open General in the sidebar and scroll down to the Preview Deployment Suffix section
6. Enter the custom domain of your choice in the input, and push Save

![Selecting a custom value for the Preview Deployment Suffix.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployment-suffix-light.png&w=1920&q=75)![Selecting a custom value for the Preview Deployment Suffix.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployment-suffix-dark.png&w=1920&q=75)

Selecting a custom value for the Preview Deployment Suffix.

If you are not able to use Vercel's Nameservers, see our guide on [how to use a custom domain without Vercel's Nameservers](/kb/guide/preview-deployment-suffix-without-vercel-nameservers).

See the [plans add-ons](/docs/pricing#pro-plan-add-ons) documentation for information on pricing.

### [Disabling the Preview Deployment Suffix](#disabling-the-preview-deployment-suffix)

To disable Preview Deployment Suffix:

1. From your [dashboard](/dashboard), open Settings in the sidebar
2. Open [Billing](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling&title=Go+to+Billing) in the sidebar
3. Under Add-Ons, set the toggle for Preview Deployment Suffix to Disabled

The next preview deployment generated will revert back to the default `vercel.app` suffix.

### [Broken Preview Deployment Suffix error](#broken-preview-deployment-suffix-error)

You may encounter this error if you are using the [Preview Deployment Suffix](#preview-deployment-suffix) in your team. Make sure that the custom domain you configured is:

* Active (not deleted)
* Available within the team that enabled the [Preview Deployment Suffix](#preview-deployment-suffix)
* Backed by an [active wildcard certificate](https://knowledge.digicert.com/generalinformation/INFO900.html)

The best way to satisfy all of these constraints is to ensure the domain is also added to a project located in the same team. In this project, you can include a single `index.html` that displays when someone visits the root of the domain.

---

[Previous

Inspect OG Metadata](/docs/deployments/og-preview)[Next

Promote Preview to Production](/docs/deployments/promote-preview-to-production)

Was this helpful?
