Menu

# Monitoring Quickstart

Last updated February 27, 2026

Monitoring is now [deprecated](/docs/query/monitoring#monitoring-sunset). It is no longer available for Pro users or Enterprise customers who subscribed to Observability Plus after June 2025.
[Observability Plus](/docs/observability/observability-plus) includes [Observability Query](/docs/observability/query) for monitoring your project.

AI Assistance

Help me set up Vercel Monitoring in this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Run `vercel link` to connect the project. 2. Set up observability by configuring `vercel logs` for runtime logs and adding instrumentation for custom metrics.

## [Prerequisites](#prerequisites)

* Make sure you upgrade to [Pro](/docs/plans/pro-plan) or [Enterprise](/docs/plans/enterprise) plan.
* Pro and Enterprise teams should [Upgrade to Observability Plus](/docs/observability#enabling-observability-plus) to access Monitoring.

## [Create a new query](#create-a-new-query)

In the following guide you will learn how to view the most requested posts on your website.

1. ### [Go to the dashboard](#go-to-the-dashboard)

   1. Open [Observability](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability&title=Go+to+Observability) in the sidebar from your Vercel [dashboard](/dashboard)
   2. Click the Create New Query button to open the query builder
   3. Click the Edit Query button to configure your query with clauses
2. ### [Add Visualize clause](#add-visualize-clause)

   The [Visualize](/docs/observability/monitoring/monitoring-reference#visualize%22) clause specifies which field in your query will be calculated. Set the Visualize clause to `requests` to monitor the most popular posts on your website.

   Click the Run Query button, and the [Monitoring chart](/docs/observability/monitoring#monitoring-chart) will display the total number of requests made.
3. ### [Add Where clause](#add-where-clause)

   To filter the query data, use the [Where](/docs/observability/monitoring/monitoring-reference#where) clause and specify the conditions you want to match against. You can use a combination of [variables and operators](/docs/observability/monitoring/monitoring-reference#where) to fetch the most requested posts. Add the following query statement to the Where clause:

   ```
   host = 'my-site.com' and like(request_path, '/posts%')
   ```

   This query retrieves data with a host field of `my-site.com` and a `request_path` field that starts with /posts.

   The `%` character can be used as a wildcard to match any sequence of characters after `/posts`, allowing you to capture all `request_path` values that start with that substring.
4. ### [Add Group By clause](#add-group-by-clause)

   Define a criteria that groups the data based on the selected attributes. The grouping mechanism is supported through the [Group By](/docs/observability/monitoring/monitoring-reference#group-by) clause.

   Set the Group By clause to `request_path`.

   With Visualize, Where, and Group By fields set, the [Monitoring chart](/docs/observability/monitoring#monitoring-chart) now shows the sum of `requests` that are filtered based on the `request_path`.
5. ### [Add Limit clause](#add-limit-clause)

   To control the number of results returned by the query, use the [Limit](/docs/observability/monitoring/monitoring-reference#limit) clause and specify the desired number of results. You can choose from a few options, such as 5, 10, 25, 50, or 100 query results. For this example, set the limit to 5 query results.
6. ### [Save and Run Query](#save-and-run-query)

   Save your query and click the **Run Query** button to generate the final results. The Monitoring chart will display a comprehensive view of the top 5 most requested posts on your website.

---

[Previous

Monitoring](/docs/query/monitoring)[Next

Monitoring Reference](/docs/query/monitoring/monitoring-reference)

Was this helpful?
