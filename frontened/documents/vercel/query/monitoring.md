Menu

# Monitoring

Last updated February 27, 2026

Monitoring is now [deprecated](/docs/query/monitoring#monitoring-sunset). It is no longer available for Pro users or Enterprise customers who subscribed to Observability Plus after June 2025.
[Observability Plus](/docs/observability/observability-plus) includes [Observability Query](/docs/observability/query) for monitoring your project.

Monitoring allows you to visualize and quantify the performance and traffic of your projects on Vercel. You can use [example queries](/docs/observability/monitoring/monitoring-reference#example-queries) or create [custom queries](/docs/observability/monitoring/quickstart#create-a-new-query) to debug and optimize bandwidth, errors, performance, and bot traffic issues in a production or preview deployment.

Monitoring is available on [Enterprise plans](/docs/plans/enterprise)

## [Monitoring chart](#monitoring-chart)

Charts allow you to explore your query results in detail. Use filters to adjust the date, data granularity, and chart type (line or bar).

Hover and move your mouse across the chart to view your data at a specific point in time. For example, if the data granularity is set to 1 hour, each point in time will provide a one-hour summary.

## [Example queries](#example-queries)

To get started with the most common scenarios, use our Example Queries. You cannot edit or add new example queries. For a list of the available options, view our [example queries docs](/docs/observability/monitoring/monitoring-reference#example-queries).

## [Save new queries](#save-new-queries)

You can no longer save new Monitoring queries as the feature has now been sunset.

Instead, use observability queries, which can be saved into [Notebooks](/docs/notebooks).

### [Manage saved queries](#manage-saved-queries)

You can manage your saved personal and team queries from the query console. Select a query from the left navigation bar and click on the vertical ellipsis (⋮) in the upper right-hand corner. You can choose to Duplicate, Rename, or Delete the selected query from the dropdown menu.

Duplicating a query creates a copy of the query in the same folder. You cannot copy queries to another folder. To rename a saved query, use the ellipses (⋮) drop-down menu or directly click its title to edit.

Deleting a saved personal or team query is permanent and irreversible. To delete a saved query, click the Delete button in the confirmation modal.

## [Error messages](#error-messages)

You may encounter errors such as invalid queries when using Monitoring. For example, defining an incorrect location parameter generates an invalid query. In such cases, no data appears.

## [Enable Monitoring](#enable-monitoring)

You can no longer enable Monitoring on [Pro](/docs/plans/pro-plan) plans as the feature has now been sunset.

Get the most comprehensive suite of tools, including queries, by enabling [Observability Plus](/docs/observability/observability-plus).

## [Disable Monitoring](#disable-monitoring)

1. Go to your team Settings > Billing
2. Scroll to the Observability Plus section
3. Set the toggle to the disabled state

## [Manage IP Address visibility for Monitoring](#manage-ip-address-visibility-for-monitoring)

Managing IP Address visibility is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner, admin](/docs/rbac/access-roles#owner, admin-role) role can access this feature

Vercel creates events each time a request is made to your website. These events include unique parameters such as execution time and bandwidth used.

Certain events such as `public_ip` may be considered personal information under certain data protection laws. To hide IP addresses from your Monitoring queries:

1. Go to the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and ensure your team is selected in the team switcher.
2. Open Settings in the sidebar and navigate to [Security & Privacy](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fsecurity&title=Go+to+Security).
3. Under IP Address Visibility, toggle the switch next to off so the text reads IP addresses are hidden in your Monitoring queries..

For business purposes, such as DDoS mitigation, Vercel will still collect IP
addresses.

For a complete list of fields, see the [visualize clause](/docs/observability/monitoring/monitoring-reference#visualize) docs.

## [Monitoring sunset](#monitoring-sunset)

From the end of billing cycle in Nov 2025, Vercel will sunset Monitoring for pro plans. Pro users will no longer see the Monitoring tab. Current enterprise users with monitoring access will keep the deprecated version of monitoring.
If you want to continue using the full Monitoring capabilities or purchase a product similar to Monitoring, consider moving to [Query](/docs/observability/query).

* Enable [Observability Plus](/docs/observability/observability-plus) to continue using query features.
* Save queries in Observability [Notebooks](/docs/observability/query#save-query).

## [More resources](#more-resources)

For more information on what to do next, we recommend the following articles:

* [Quickstart](/docs/observability/monitoring/quickstart): Learn how to create and run a query to understand the top bandwidth images on
  your website
* [Reference](/docs/observability/monitoring/monitoring-reference): Learn about the clauses, fields, and variables used to create a Monitoring
* [Limits and Pricing](/docs/observability/monitoring/limits-and-pricing): Learn about our limits and pricing when using Monitoring. Different limitations are applied depending on your plan.

---

[Previous

Query Reference](/docs/query/reference)[Next

Getting Started](/docs/query/monitoring/quickstart)

Was this helpful?
