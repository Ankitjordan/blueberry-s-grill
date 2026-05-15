Menu

# Using Speed Insights

Last updated February 27, 2026

## [Accessing Speed Insights](#accessing-speed-insights)

To access Speed Insights:

1. Select a project from your [dashboard](/dashboard) and open [Speed Insights](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fspeed-insights&title=Go+to+Speed+Insights) in the sidebar.
2. Select the [timeframe](/docs/analytics/using-web-analytics#specifying-a-timeframe) and [environment](/docs/analytics/using-web-analytics#viewing-environment-specific-data) you want to view data for.
3. Use the panels to [filter](/docs/analytics/filtering) the page or event data you want to view.

## [Breaking down data in Speed Insights](#breaking-down-data-in-speed-insights)

Speed Insights offers a variety of views to help you analyze your application's performance data. This allows you to identify areas that need improvement and make informed decisions about how to optimize your site.

### [Breakdown by route or path](#breakdown-by-route-or-path)

To view metrics for a specific route or path:

1. Select a project from your [dashboard](/dashboard) and open [Speed Insights](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fspeed-insights&title=Go+to+Speed+Insights) in the sidebar.
2. From the left-hand panel, select the [metric](/docs/speed-insights/metrics) you want to view data for.
3. From the URL view, select the corresponding tab to view by the Route (the actual pages you built), or by Path (the URLs requested by the visitor).
4. The information is organized by performance score and sorted by data points. Scroll the list to view more all paths or routes, or click the View all button to view and filter all data.
5. You can also edit the [timeframe](/docs/analytics/using-web-analytics#specifying-a-timeframe) and [environment](/docs/analytics/using-web-analytics#viewing-environment-specific-data) you want to view data for.

![Speed Insights URL view for routes and paths of your project.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fkanban-light.png&w=3840&q=75)![Speed Insights URL view for routes and paths of your project.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fkanban-dark.png&w=3840&q=75)

Speed Insights URL view for routes and paths of your project.

### [Breakdown by HTML elements](#breakdown-by-html-elements)

To view a detailed breakdown of the performance of individual HTML elements on your site:

1. Select a project from your [dashboard](/dashboard) and open [Speed Insights](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fspeed-insights&title=Go+to+Speed+Insights) in the sidebar.
2. From the left-hand panel, select the [metric](/docs/speed-insights/metrics) you want to view data for. HTML element attribution is only available for the following metrics:
   * Interaction to Next Paint (INP)
   * First Input Delay (FID)
   * Cumulative Layout Shift (CLS)
   * Largest Contentful Paint (LCP)
3. From the URL view, open Selectors in the sidebar.
4. The information is organized by performance score and sorted by data points. Scroll the list to view more all elements, or click the View all button to view and filter all data.
5. You can also edit the [timeframe](/docs/analytics/using-web-analytics#specifying-a-timeframe) and [environment](/docs/analytics/using-web-analytics#viewing-environment-specific-data) you want to view data for.

This view is particularly useful for identifying specific elements that may be causing performance issues.

### [Breakdown by country](#breakdown-by-country)

This view is helpful for identifying regions where your application may be underperforming.

To view a geographical breakdown of your application's performance:

1. Select a project from your [dashboard](/dashboard) and open [Speed Insights](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fspeed-insights&title=Go+to+Speed+Insights) in the sidebar.
2. From the left-hand panel, select the [metric](/docs/speed-insights/metrics) you want to view data for.
3. Scroll down to the Countries section.
4. The map is colored based on the experience metric per country. Click on a country to view more detailed data.

![Geographic map of the P75 score where the color intensity indicates the relative amount of data points per country](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fcountry-map-light.png&w=3840&q=75)![Geographic map of the P75 score where the color intensity indicates the relative amount of data points per country](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fcountry-map-dark.png&w=3840&q=75)

Geographic map of the P75 score where the color intensity indicates the relative amount of data points per country

## [Disabling Speed Insights](#disabling-speed-insights)

You may want to disable Speed Insights in your project if you find you no longer need it. You can disable Speed Insights from within the project settings in the Vercel dashboard. If you are unsure if a project has Speed Insights enabled, see [Identifying if Speed Insights is enabled](#identifying-if-speed-insights-is-enabled).

If you transfer a project with Speed Insights enabled from a Hobby team to a
Pro plan, it will continue to be enabled but with increased limits, as
documented in the [pricing docs](/docs/speed-insights/limits-and-pricing).
This means that Speed Insights will be added to your Pro plan invoice
automatically.

1. Select a project from your [dashboard](/dashboard).
2. Open [Speed Insights](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fspeed-insights&title=Go+to+Speed+Insights) in the sidebar.
3. Click on the ellipsis on the top-right of the Speed Insights page and select Disable Speed Insights.

![Disable Speed Insights option.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fdisable-light.png&w=1920&q=75)![Disable Speed Insights option.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fdisable-dark.png&w=1920&q=75)

Disable Speed Insights option.

When you disable Speed Insights in the middle of your billing cycle, it will not be removed instantly. Instead it will stop collecting new data points but will continue to show already collected data until the end of the cycle, see the [prorating docs](/docs/speed-insights/limits-and-pricing#prorating) for more information.

If you are on an Enterprise plan, check your contract entitlements as you may
have custom limits included. If you have any questions about your
billing/contract regarding Speed Insights you can reach out to your
Vercel account representative for further clarification.

## [Identifying if Speed Insights is enabled](#identifying-if-speed-insights-is-enabled)

If you have many projects on your Vercel account and are not sure which of them has Speed Insights enabled, you can see this from the [dashboard](/dashboard) without needing to check each project separately. The different circles in the right corner of each project card will show the Speed Insights status.

If Speed Insights is not enabled, then the circle will be gray, with the speed insights logo. For example:

![Speed Insights not enabled for a project.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fready-to-enable-light.png&w=828&q=75)![Speed Insights not enabled for a project.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fready-to-enable-dark.png&w=828&q=75)

Speed Insights not enabled for a project.

If Speed Insights is enabled but no data points have been collected yet then it will show an empty circle, like the below:

![Speed Insights enabled for a project but no data points have been collected.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fenabled-no-data-light.png&w=828&q=75)![Speed Insights enabled for a project but no data points have been collected.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fenabled-no-data-dark.png&w=828&q=75)

Speed Insights enabled for a project but no data points have been collected.

If Speed Insights is enabled and data points have been collected then the circle will be colored with a number inside, similar to the below image:

![Speed Insights enabled for a project and has data points.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fenabled-light.png&w=828&q=75)![Speed Insights enabled for a project and has data points.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fspeed-insights%2Fv2%2Fenabled-dark.png&w=828&q=75)

Speed Insights enabled for a project and has data points.

---

[Previous

Getting Started](/docs/speed-insights/quickstart)[Next

Metrics](/docs/speed-insights/metrics)

Was this helpful?
