Menu

# Pricing and Limits

Last updated February 27, 2026

Vercel Queues is billed per API operation. Every API call counts as one operation, and there are five operation types:

| Operation | Description |
| --- | --- |
| Send | Publishing a message to a topic |
| Receive | Retrieving messages from a consumer group |
| Delete | Acknowledging a message after processing |
| Visibility change | Extending or modifying a message's visibility timeout |
| Notify | Push mode callback delivery to your function |

## [Pricing](#pricing)

Messages are metered in 4 KiB chunks. For example, a 12 KiB message counts as three operations.

Sends with an idempotency key and push deliveries with max concurrency are billed at 2x units for that operation. Other operations on the same message are unaffected.

Operations are [regionally priced](/docs/pricing/regional-pricing) like other Managed Infrastructure resources. See [pricing](/docs/pricing) for plan details and included credits.

Managed Infrastructure hobby and pro resources

| Resource | Hobby Included | On-demand Rates |
| --- | --- | --- |
| [Queue API Operations](/docs/queues/pricing) | First 1,000,000 | [Regional](/docs/pricing/regional-pricing) |

Functions invoked by Queues in push mode continue to be charged at the [existing compute rates](/docs/functions/usage-and-pricing).

## [Limits](#limits)

| Resource | Min | Max | Default |
| --- | --- | --- | --- |
| Message retention (TTL) | 60 seconds | 7 days | 24 hours |
| Delay before visible | Zero seconds | 7 days (capped at TTL) | Zero seconds |
| Visibility timeout | Zero seconds | 60 minutes | 60 seconds |
| Messages per receive | 1 | 10 | 1 |
| Max concurrency per consumer group | 1 | Unlimited | Unlimited |
| Max message size | - | 100 MB | - |
| Topics per project | - | Unlimited | - |
| Consumer groups per topic | - | Unlimited | - |
| Retry behavior (first 32 attempts) | - | - | Configured delay |
| Retry behavior (after 32 attempts) | - | - | Forced backoff |

---

[Previous

Poll Mode](/docs/queues/poll-mode)[Next

Workflows](/docs/workflows)

Was this helpful?
