Menu

# Metrics

AI Gateway tracks throughput and latency for each model and provider, measured from live AI Gateway traffic. For provider availability, see [uptime](/docs/ai-gateway/models-and-providers/uptime).

## [Throughput](#throughput)

Throughput is the rate at which a provider returns output tokens, measured in tokens per second. Higher throughput means a provider returns output tokens faster.

## [Latency](#latency)

Latency is time to first token (TTFT), measured in milliseconds. It's the duration between the request reaching the provider and the first response token arriving. Lower latency means a faster perceived response.

## [Scope](#scope)

Throughput and latency are measured from requests that run directly through AI Gateway. Bring Your Own Key (BYOK) requests aren't included since their performance depends on your own provider credentials, not AI Gateway's.

These numbers reflect what AI Gateway observes when serving live traffic. They may differ from what providers report directly due to factors specific to AI Gateway, like account tiering, regions, or routing decisions.

## [Where to find metrics](#where-to-find-metrics)

### [In the dashboard](#in-the-dashboard)

You can find metrics in the following places:

* The [AI Gateway model catalog](https://vercel.com/ai-gateway/models): each model row shows the best metrics across all providers (highest throughput, lowest latency)
* The [AI Gateway > Models](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fmodels&title=Go+to+AI+Gateway+Models) tab in your project: same view as the catalog, scoped to your team

To see metrics broken down by provider, click any model to open its detail page. The detail page shows for each provider:

* The live values from the last hour
* A chart of how each metric has trended over time

![Latency chart for openai/gpt-oss-120b on the model detail page](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fgpt-oss-120b-latency-light&w=3840&q=75)![Latency chart for openai/gpt-oss-120b on the model detail page](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fgpt-oss-120b-latency-dark&w=3840&q=75)

Latency chart for openai/gpt-oss-120b on the model detail page

The chart has two toggles: one to switch between throughput and latency, and one to switch the time range:

| Toggle | Window | Bucket size |
| --- | --- | --- |
| `1D` | 24 hours | Hourly |
| `1W` | 7 days | Daily |

Each point on the chart represents the p50 across all successful requests for that model and provider in that interval.

### [Via the API](#via-the-api)

Each endpoint returned by the [model endpoints API](/docs/ai-gateway/models-and-providers#get-provider-endpoints-for-a-model) includes rolling one-hour metrics for that provider:

```
curl https://ai-gateway.vercel.sh/v1/models/anthropic/claude-opus-4.7/endpoints
```

Replace `anthropic/claude-opus-4.7` with the model ID you want to inspect. Each endpoint object includes:

| Field | Type | Description |
| --- | --- | --- |
| `throughput_last_1h.p50` | number | Median throughput in tokens per second |
| `throughput_last_1h.p95` | number | 95th-percentile throughput in tokens per second |
| `latency_last_1h.p50` | number | Median time to first token in milliseconds |
| `latency_last_1h.p95` | number | 95th-percentile time to first token in milliseconds |

Example response excerpt:

```
{
  "data": {
    "id": "anthropic/claude-opus-4.7",
    "endpoints": [
      {
        "provider_name": "anthropic",
        "throughput_last_1h": { "p50": 67, "p95": 69.85 },
        "latency_last_1h": { "p50": 2292, "p95": 2685 }
      }
    ]
  }
}
```

---

Was this helpful?
