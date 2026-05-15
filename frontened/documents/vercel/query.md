Query

# Query

Last updated February 26, 2026

Query is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

You can use Query to get deeper visibility into your application when debugging issues, monitoring usage, or optimizing for speed and reliability. Query lets you explore traffic, errors, latency and similar metrics in order to:

* Investigate errors, slow routes, and high-latency functions
* Analyze traffic patterns and request volumes by path, region, or device
* Monitor usage and performance of AI models or API endpoints
* Track build and deployment behavior across your projects
* Save queries to notebooks for reuse and team collaboration
* Customize dashboards and automate reporting or alerts

## [Getting started](#getting-started)

Full Query access requires [Observability Plus](/docs/observability/observability-plus). With free observability, you can open a query. To modify filters or create new queries, enable [Observability Plus](/docs/observability/observability-plus).

Enabling and disabling Observability Plus are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

See [Observability Plus](/docs/observability/observability-plus) for plan details and enablement.

[Enterprise](/docs/plans/enterprise) teams can [contact sales](/contact/sales)
to get a customized plan based on their requirements.

### [Create a new query](#create-a-new-query)

1. ### [Access the Observability dashboard](#access-the-observability-dashboard)

   * At the Team level: Go to the [Vercel dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and click the Observability section in the sidebar
   * At the Project level: Go to the [Vercel dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), select the project you would like to monitor from the team switcher, and click the Observability section in the sidebar
2. ### [Initiate a new query](#initiate-a-new-query)

   * Start a new query: In the Observability section, click the button (New Query) to open the query creation interface.
   * Select a data source: Under "Visualize", select the [metric](/docs/observability/query/query-reference#metric) you want to analyze such as edge requests, serverless function invocations, external API requests, or other events.
3. ### [Define query parameters](#define-query-parameters)

   * Select the data aggregation: Select how you would like the values of your selected metric to be compiled such as sum, percentage, or per second.
   * Set Time Range: Select the time frame for the data you want to query. This can be a predefined range like "Last 24 hours" or a custom range.
   * Filter Data: Apply filters to narrow down the data. You can filter by a list of [fields](/docs/query/reference#group-by-and-where-fields) such as project, path, WAF rule, edge region, etc.
4. ### [Visualize query](#visualize-query)

   * View the results: The graph below the filter updates automatically as you change the filters.
   * Adjust as Needed: Refine your query parameters if needed to get precise insights.
5. ### [Save and share query](#save-and-share-query)

   * Save the query: Once you are satisfied with your query, you can save it by clicking Add to Notebook.
   * Select a notebook: Select an existing [notebook](/docs/notebooks) from the dropdown.
   * Share Query: You can share the saved query from the notebook with team members by clicking on the Share with team button.

## [Using Query](#using-query)

* When building queries, you can select the most appropriate view, and visualize results with:
  + a line or a volume chart
  + a table, if your query has a group by clause
  + a big number (with a time series), if your query has no group by clause
* You can [save your queries](#save-and-share-query) in [notebooks](/docs/notebooks) either for personal use or to share with your team.
* In the dashboard, you can [create a new query](#create-a-new-query) using the query [form fields](/docs/query/reference#group-by-and-where-fields) or the AI assistant at top of the new query form.
* You can export query results as CSV or JSON by clicking the download icon.

## [Manage IP Address visibility for Query](#manage-ip-address-visibility-for-query)

Managing IP Address visibility is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner, admin](/docs/rbac/access-roles#owner, admin-role) role can access this feature

Vercel creates events each time a request is made to your website. These events include unique parameters such as execution time and bandwidth used.

Certain events such as `public_ip` may be considered personal information under certain data protection laws. To hide IP addresses from your query:

1. Go to the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and ensure your team is selected in the team switcher.
2. Open Settings in the sidebar and navigate to Security & Privacy.
3. Under IP Address Visibility, toggle the switch next to "Off" so the text reads IP addresses are currently hidden in the Vercel Dashboard..

For business purposes, such as DDoS mitigation, Vercel will still collect IP
addresses.

## [More resources](#more-resources)

* Learn about available metrics and aggregations and how you can group and filter the data in [Query Reference](/docs/observability/query/query-reference).

---

[Previous

Tracing](/docs/tracing)[Next

Query Reference](/docs/query/reference)

Was this helpful?
