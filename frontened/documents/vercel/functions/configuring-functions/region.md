Title: Configuring regions for Vercel Functions

URL Source: https://vercel.com/docs/functions/configuring-functions/region

Markdown Content:
The Vercel platform caches all static content in [the CDN](https://vercel.com/docs/cdn-cache) by default. This means your users will always get static files like HTML, CSS, and JavaScript served from the region that is closest to them. See the [regions](https://vercel.com/docs/regions) page for a full list of our regions.

In a globally distributed application, the physical distance between your function and its data source can impact latency and response times. Therefore, Vercel allows you to specify the region in which your functions execute, ideally close to your data source (such as your [database](https://vercel.com/marketplace/category/database)).

*   By default, Vercel Functions execute in [_Washington, D.C., USA_ (`iad1`)](https://vercel.com/docs/pricing/regional-pricing/iad1)for all new projects to ensure they are located close to most external data sources, which are hosted on the East Coast of the USA. You can set a new default region through your [project's settings on Vercel](https://vercel.com/docs/functions/configuring-functions/region#setting-your-default-region)
*   You can define the region in your `vercel.json` using the [`regions` setting](https://vercel.com/docs/functions/configuring-functions/region#project-configuration)
*   You can set your region in the [Vercel CLI](https://vercel.com/docs/functions/configuring-functions/region#vercel-cli)
*   You can override regions for individual functions using the [`functions` property](https://vercel.com/docs/functions/configuring-functions/region#per-function-configuration) in your project configuration

The default Function region is [_Washington, D.C., USA_ (`iad1`)](https://vercel.com/docs/pricing/regional-pricing/iad1)for all new projects.

To change the default regions in the dashboard:

1.   Choose the appropriate project from your [dashboard](https://vercel.com/dashboard) on Vercel
2.   Open Settings in the sidebar
3.   From the left side, select [Functions](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Ffunctions&title=Go+to+Functions+Settings)
4.   Use the Function Regions accordion to select your project's default regions:

![Image 1: The Function Regions setting in a Vercel project's dashboard](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fedge-network%2Fregions%2Ffunction-regions-selection-light.png&w=1920&q=75)![Image 2: The Function Regions setting in a Vercel project's dashboard](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fedge-network%2Fregions%2Ffunction-regions-selection-dark.png&w=1920&q=75)

The Function Regions setting in a Vercel project's dashboard

To change the default region in your `vercel.json`[configuration file](https://vercel.com/docs/project-configuration#regions), add the region code(s) to the `"regions"` key:

Additionally, Pro and Enterprise users can deploy Vercel Functions to multiple regions: Pro users can deploy to up to three regions, and Enterprise users can deploy to unlimited regions. To learn more, see [location limits](https://vercel.com/docs/functions/runtimes#location).

Enterprise users can also use [`functionFailoverRegions`](https://vercel.com/docs/project-configuration#functionfailoverregions) to specify regions that a Vercel Function should failover to if the default region is out of service.

You can override the project-level `regions` and `functionFailoverRegions` settings for individual functions using the [`functions`](https://vercel.com/docs/project-configuration#functions) property in your project configuration. This is useful when different functions access different data sources in different regions.

In this example:

*   `api/eu-data.js` runs in Paris (`cdg1`) and fails over to London (`lhr1`)
*   `api/us-west.js` runs in San Francisco (`sfo1`) and fails over to Portland (`pdx1`)
*   All other functions use the project-level defaults: Washington, D.C. (`iad1`) with Cleveland (`cle1`) as failover

Per-function `regions` accepts an array of [region identifiers](https://vercel.com/docs/regions#region-list). Per-function `functionFailoverRegions` is Enterprise only and accepts up to 4 region identifiers. When set on a function, these values completely override the corresponding project-level setting for that function.

Use the `vercel --regions` command in your project's root directory to set a region. Learn more about setting regions with the `vercel --regions` command in the [CLI docs](https://vercel.com/docs/cli/deploy#regions).

To learn more about the regions that you can set for your Functions, see the [region list](https://vercel.com/docs/regions#region-list).

Vercel Functions have multiple availability zone redundancy by default. Multi-region redundancy is available depending on your runtime.

Enterprise teams can enable multi-region redundancy for Vercel Functions using Node.js.

To automatically failover to the closest region in the event of an outage:

1.   Select your project from your team's [dashboard](https://vercel.com/dashboard)

2.   Open Settings in the sidebar and select [Functions](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Ffunctions&title=Go+to+Functions+Settings)

3.   Enable the Function Failover toggle:

![Image 3](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Ffunctions%2Ffunction-failover-light.png&w=1920&q=75)![Image 4](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Ffunctions%2Ffunction-failover-dark.png&w=1920&q=75)

To manually specify the fallback region, you can pass one or more regions to the [`functionFailoverRegions`](https://vercel.com/docs/project-configuration#functionfailoverregions) property in your `vercel.json` file:

You can also set `functionFailoverRegions` on a per-function basis using the [`functions`](https://vercel.com/docs/project-configuration#functions) property. See [per-function configuration](https://vercel.com/docs/functions/configuring-functions/region#per-function-configuration) above.

The region(s) set in the `functionFailoverRegions` property must be different from the default region(s) specified in the [`regions`](https://vercel.com/docs/project-configuration#regions) property.

During an automatic failover, Vercel will reroute application traffic to the next closest region, meaning the order of the regions in `functionFailoverRegions` does not matter. For more information on how failover routing works, see [`functionFailoverRegions`](https://vercel.com/docs/project-configuration#functionfailoverregions).

You can view your default and failover regions through the [deployment summary](https://vercel.com/docs/deployments#resources-tab-and-deployment-summary):

![Image 5: Failover regions for your Vercel functions shown in the deployment summary.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Ffunctions%2Ffunction-failover-region-light.png&w=3840&q=75)![Image 6: Failover regions for your Vercel functions shown in the deployment summary.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Ffunctions%2Ffunction-failover-region-dark.png&w=3840&q=75)

Failover regions for your Vercel functions shown in the deployment summary.

Region failover is supported with Secure Compute. See [Region Failover](https://vercel.com/docs/networking/secure-compute#region-failover) to learn more.
