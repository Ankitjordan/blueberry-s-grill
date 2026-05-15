Menu

# Uptime

Uptime measures whether providers are responding successfully to live AI Gateway traffic.

## [Accessing uptime](#accessing-uptime)

You can find uptime in the following places:

* Visiting [the AI Gateway model catalog](https://vercel.com/ai-gateway/models) and selecting a model
* Opening the [AI Gateway tab](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) in your project, going to Models, and selecting a model
* Querying the [model endpoints API](/docs/ai-gateway/models-and-providers#get-provider-endpoints-for-a-model) for any model (details [below](#accessing-uptime-via-the-api))

The first two options open the AI Gateway model detail page. The Uptime chart plots uptime over time. Below the chart, a status bar for AI Gateway and each provider shows the current uptime percentage. Dithering density indicates which threshold each time bucket falls into.

![Uptime chart for openai/gpt-oss-120b](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fgpt-oss-120b-uptime-light&w=3840&q=75)![Uptime chart for openai/gpt-oss-120b](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fgpt-oss-120b-uptime-dark&w=3840&q=75)

Uptime chart for openai/gpt-oss-120b

| Fill | Range |
| --- | --- |
| Solid | 95–100% |
| Light dither | 80–95% |
| Heavy dither | 50–80% |
| Empty | 0–50% |

Providers without recent activity can't be measured for uptime, so the status bar labels them "No activity" and the line chart shows them at 100%. The 100% line is a placeholder, not a trend. It doesn't mean the provider was fully available.

You can switch the time range using the toggle in the top-right corner. Each window uses a different bucket size:

| Toggle | Window | Bucket size |
| --- | --- | --- |
| `1H` | 1 hour | Per-minute |
| `1D` | 1 day | 15-minute |
| `1W` | 1 week | Per-hour |

## [Accessing uptime via the API](#accessing-uptime-via-the-api)

You can query uptime programmatically through the [model endpoints API](/docs/ai-gateway/models-and-providers#get-provider-endpoints-for-a-model). Each endpoint in the response exposes three rolling uptime windows:

| Field | Window |
| --- | --- |
| `uptime_last_15m` | Last 15 minutes |
| `uptime_last_1h` | Last 1 hour |
| `uptime_last_1d` | Last 1 day |

```
curl https://ai-gateway.vercel.sh/v1/models/anthropic/claude-opus-4.7/endpoints
```

Replace `anthropic/claude-opus-4.7` with the model ID you want to inspect.

## [Scope](#scope)

Uptime measures requests that run directly through AI Gateway. Bring Your Own Key (BYOK) requests aren't included since their success depends on your own provider credentials, not AI Gateway's.

These numbers reflect what AI Gateway observes when serving live traffic, not a provider's overall availability. They may differ from a provider's own reported uptime due to factors specific to AI Gateway, like account tiering, regions, or routing decisions.

## [How success is defined](#how-success-is-defined)

A provider attempt counts as successful when the provider returns a valid response.

The following are excluded from the calculation entirely:

* `4xx` responses, since they don't reflect provider uptime issues. Receiving a `4xx` means the provider was reachable and responded.
* Requests using the [`only` filter](/docs/ai-gateway/models-and-providers/provider-filtering-and-ordering#restrict-providers-with-the-only-filter), for AI Gateway uptime. The `only` filter restricts routing to a subset of providers, which limits how AI Gateway can fall back. These requests still count toward provider uptime.

## [Provider uptime vs. AI Gateway uptime](#provider-uptime-vs.-ai-gateway-uptime)

AI Gateway reports two uptime metrics:

* Provider uptime reflects the success rate of every individual attempt to a given provider.
* AI Gateway uptime only considers the final attempt in each request, capturing the end-to-end outcome after any fallbacks.

Both totals exclude BYOK traffic and `4xx` responses. AI Gateway uptime additionally excludes requests that use the `only` filter.

| Metric | Successes | Total |
| --- | --- | --- |
| Provider uptime | Provider's successful attempts | Provider's total attempts |
| AI Gateway uptime | Successful final attempts | Total requests |

Each metric is calculated as successes divided by total, multiplied by 100.

A request that fails on its first provider but succeeds on a fallback counts as a success for AI Gateway uptime. This is why AI Gateway uptime can be higher than any individual provider's uptime, since fallback logic can recover from single-provider failures.

---

Was this helpful?
