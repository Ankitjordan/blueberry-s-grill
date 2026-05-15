Title: Observability Plus

URL Source: https://vercel.com/docs/observability/observability-plus

Markdown Content:
Every Vercel team has access to [Observability](https://vercel.com/docs/observability). Observability Plus is available on paid Pro and Enterprise teams and unlocks more granular data exploration, helping you pinpoint when and why issues occurred.

For teams created or upgraded to paid Pro on or after April 3, 2026, Observability Plus is enabled by default. Existing paid Pro and Enterprise teams can [enable it separately](https://vercel.com/docs/observability/observability-plus#enabling-observability-plus). Pro Trial plans require conversion to paid Pro to access Observability Plus.

To learn more about Observability Plus, see [Limitations](https://vercel.com/docs/observability/observability-plus#limitations) or [pricing](https://vercel.com/docs/observability/observability-plus#pricing).

Observability Plus access depends on your plan:

*   Paid Pro: For teams created or upgraded to paid Pro on or after April 3, 2026, Observability Plus is enabled by default. Existing paid Pro teams can enable it using the steps below.
*   Hobby: [Upgrade to a paid Pro plan](https://vercel.com/docs/plans/pro-plan) to access Observability Plus.
*   Pro Trial: Observability Plus is not available during trial. Convert to a paid Pro plan to access it.
*   Enterprise: Enable Observability Plus using the steps below.

To enable Observability Plus on an existing paid Pro or Enterprise team:

1.   From your [dashboard](https://vercel.com/dashboard), navigate to [the Observability section in the sidebar](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fobservability&title=Try+Observability).
2.   Click the more options button () at the top right of the page, then select Upgrade to Observability Plus.
3.   Complete the setup based on your plan:
    *   Existing paid Pro: Click Continue, review charges, then click Confirm and Pay.
    *   Enterprise: Click Confirm to enable.

If your paid Pro team was created or upgraded on or after April 3, 2026, Observability Plus is already enabled. If you turned it off, re-enable it from your [Billing settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings/billing#observability) by toggling Observability Plus back on.

If you don't see Observability Plus in the upgrade flow or in Billing, contact [Vercel Support](https://vercel.com/help) or your Vercel account representative for assistance.

By default, Observability Plus applies to all projects in your team. You can exclude specific projects to control costs. Excluded projects revert to the free-tier observability experience with limited retention and no access to advanced metrics or [Query](https://vercel.com/docs/query).

You can exclude a project from Observability Plus in three ways:

During initial enablement:

When [enabling Observability Plus](https://vercel.com/docs/observability/observability-plus#enabling-observability-plus) for the first time, the setup flow includes a project selection step where you can choose which projects to exclude. This modal shows your top projects by usage. To exclude other projects, use the project-level option described below.

From billing settings:

1.   Navigate to your team's [Billing settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings/billing#observability).
2.   In the Observability Plus section, click Manage projects.
3.   Toggle off the projects you want to exclude.

This modal also shows your top projects by usage. To exclude projects not listed in the modal, use the project-level option below.

From the project observability dashboard:

1.   Navigate to your project's [Observability dashboard](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability&title=Go+to+Observability).
2.   Click the more options button () at the top right of the page, then select Exclude Project from Plus.
3.   Confirm the exclusion in the modal.

Events from excluded projects won't count toward your Observability Plus usage.

To re-enable Observability Plus for an excluded project:

*   From billing settings: Navigate to Billing>Observability Plus>Manage projects and toggle the project back on.
*   From the [project observability dashboard](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability&title=Go+to+Observability): Click the more options button () at the top right of the page, then select Include Project in Plus.

The project immediately regains access to Observability Plus features.

Paid Pro teams can disable Observability Plus at any time. After you disable it, Vercel stops collecting Observability Plus events. To regain access to extended retention data, re-enable it.

1.   From your [dashboard](https://vercel.com/dashboard), navigate to [the Observability section in the sidebar](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fobservability).
2.   Click the more options button () at the top right of the page, then select Configure Observability Plus.
3.   This takes you to the [Observability Plus section of your project's Billing settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings/billing#observability)
    *   Click the toggle button to disable it
    *   Click the Confirm button in the Turn off Observability Plus dialog

Users on all plans can use Observability at no additional cost, with some [limitations](https://vercel.com/docs/observability/observability-plus#limitations). Observability is available for all projects in the team.

Paid Pro and Enterprise teams can use Observability Plus for additional features, higher limits, and increased retention. Vercel bills you based on usage at a per-event rate. See the table below for pricing details:

| Resource | Usage-based pricing |
| --- | --- |
| Observability Plus | $1.20 per 1 million[events](https://vercel.com/docs/observability#tracked-events) |

| Feature | Observability | Observability Plus |
| --- | --- | --- |
| Data Retention | Hobby: 12 hours Pro: 1 day Enterprise: 3 days | 30 days |
| Query | No access | Author queries in the Vercel dashboard and save queries to notebooks |
| Vercel Functions | No Latency (p75) data, no breakdown by path | Latency data, sort by p75, breakdown by path and routes |
| External APIs | No ability to sort by error rate or p75 duration, only request totals for each hostname | Sorting and filtering by requests, p75 duration, and duration. Latency, Requests, API Endpoint and function calls for each hostname |
| Edge Requests | No breakdown by path | Full request data |
| Fast Data Transfer | No breakdown by path | Full request data |
| ISR (Incremental Static Regeneration) | No access to average duration or revalidation data. Limited function data for each route | Access to sorting and filtering by duration and revalidation. Full function data for each route |
| Build Diagnostics | Hobby: 12 hours Pro: 1 day Enterprise: 3 days | Full access |
| In-function Concurrency | Full access when enabled | Full access when enabled |
| Runtime logs | Hobby: 1 hour Pro: 1 day Enterprise: 3 days | 30 days, max selection window of 14 consecutive days |

To access Observability Plus features, [upgrade to a paid Pro plan](https://vercel.com/docs/plans/pro-plan) or [enable Observability Plus](https://vercel.com/docs/observability/observability-plus#enabling-observability-plus) on an existing paid Pro or Enterprise team.

Observability Plus uses usage-based pricing. You're only charged for events your team generates. Usage is prorated within your billing cycle. For example:

*   If you disable Observability Plus before the billing cycle ends, Observability Plus will automatically turn off, Vercel will stop collecting events, and you will lose access to existing data.
*   Once the billing cycle is over, you will be charged for the events collected prior to disabling. You won't be refunded any amounts already paid.
