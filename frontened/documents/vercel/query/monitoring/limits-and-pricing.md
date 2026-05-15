Menu

# Limits and Pricing for Monitoring

Last updated February 25, 2026

Monitoring is now [deprecated](/docs/query/monitoring#monitoring-sunset). It is no longer available for Pro users or Enterprise customers who subscribed to Observability Plus after June 2025.
[Observability Plus](/docs/observability/observability-plus) includes [Observability Query](/docs/observability/query) for monitoring your project.

## [Pricing](#pricing)

Monitoring has become part of Observability, and is included with Observability Plus at no additional cost. If you are currently paying for Monitoring, you should [migrate](/docs/observability/observability-plus#enabling-observability-plus) to Observability Plus to get access to additional product features with a longer retention period with no base fee.

Even if you choose not to migrate to Observability Plus, Vercel will automatically move you to the new pricing model of **$1.20 per 1 million events**, as shown below. If you do not migrate to Observability Plus, you will not be able to access Observability Plus features on the **Observability** tab.

Manage and Optimize pricing

| Metric | Description | Priced | Optimize |
| --- | --- | --- | --- |
| [Events](/docs/observability#tracked-events) | The number of events collected. One or more events can be incurred for each request made to your site | [Yes](/docs/pricing#managed-infrastructure-billable-resources) | [Learn More](/docs/observability#tracked-events) |

To learn more, see [Limits and Pricing for Observability](/docs/observability/limits-and-pricing).

## [Limitations](#limitations)

| Limit | Pro | Enterprise |
| --- | --- | --- |
| Data retention | 30 days | 90 days |
| Granularity | 1 day, 1 hour | 1 day, 1 hour, 5 minute |

## [How are events counted?](#how-are-events-counted)

Vercel creates an event each time a request is made to your website. These events include unique parameters such as execution time. For a complete list, [see the visualize clause docs](/docs/observability/monitoring/monitoring-reference#visualize).

---

[Previous

Monitoring Reference](/docs/query/monitoring/monitoring-reference)[Next

Notebooks](/docs/notebooks)

Was this helpful?
