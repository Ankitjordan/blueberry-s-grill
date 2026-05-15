Menu

# Observability

Last updated February 26, 2026

The AI Gateway logs spend, model usage, and observability metrics related to your requests, which you can use to monitor and debug.

You can view these details in the [AI Gateway Overview](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=AI+Gateway) section in your Vercel dashboard sidebar:

* Usage: Graphs and metrics to track your AI Gateway usage and cost
* Requests: Summaries by project, API key, and a detailed log of all requests

You can view these metrics in two ways:

* Team level: Stay in your team scope to see aggregated metrics across all projects
* Project level: Use the new dashboard view and select a specific project from the top project dropdown to see project-specific metrics

## [Usage](#usage)

The Usage section displays four metrics to help you monitor your AI Gateway activity. For extended timeframes and further retention, you need [Observability Plus](/docs/observability/observability-plus).

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Fgraphs-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Fgraphs-dark.png&w=3840&q=75)

### [Requests by model](#requests-by-model)

The Requests by Model chart shows the number of requests made to each model over time. This can help you identify which models are being used most frequently and whether there are any spikes in usage.

### [Time to first token (TTFT)](#time-to-first-token-ttft)

The Time to First Token chart shows the average time it takes for the AI Gateway to return the first token of a response. This can help you understand the latency of your requests and identify any performance issues.

### [Input/output token counts](#input/output-token-counts)

The Input/Output Token Counts chart shows the number of input and output tokens for each request. This can help you understand the size of the requests being made and the responses being returned.

### [Spend](#spend)

The Spend chart shows the total amount spent on AI Gateway requests over time. This can help you monitor your spending and identify any unexpected costs.

## [Requests](#requests)

The Requests section displays summaries by project, API key, and a detailed log of all requests. Each summary includes request count, average tokens, P75 duration, P75 TTFT, and cost for the specified time frame.

### [Projects](#projects)

View usage grouped by project. Use this view to associate usage and spend with specific projects. Click into a project for more detailed information.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Fprojects-summary-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Fprojects-summary-dark.png&w=3840&q=75)

### [API keys](#api-keys)

View usage grouped by API key. Use this view to track usage by a specific person or part of your organization. Click into an API key for more detailed information.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Fapikeys-summary-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Fapikeys-summary-dark.png&w=3840&q=75)

### [Logs](#logs)

View a detailed log of all requests made to the AI Gateway, including all token types and the cost for each request. You can sort or export the logs for the selected time frame.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Frequests-log-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fai-gateway%2Foverview-observability%2Frequests-log-dark.png&w=3840&q=75)

## [Team scope](#team-scope)

By default, when you access the AI Gateway Overview tab, you view metrics for all requests made across all projects in your team. This is useful for monitoring the overall usage and performance of the AI Gateway.

## [Project scope](#project-scope)

To view metrics for a specific project, you can access the project scope in two ways:

1. Select the project from the top project dropdown in the dashboard
2. Click into the project from the Projects view in the Requests section

Once in project scope, you'll see the same metrics filtered to show only the activity for that specific project.

---

[Previous

Custom Reporting](/docs/ai-gateway/capabilities/custom-reporting)[Next

Usage & Billing](/docs/ai-gateway/capabilities/usage)

Was this helpful?
