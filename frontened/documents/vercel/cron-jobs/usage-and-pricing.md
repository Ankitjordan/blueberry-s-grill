Menu

# Usage & Pricing for Cron Jobs

Last updated March 4, 2026

Cron Jobs are available on [all plans](/docs/plans)

Cron jobs invoke [Vercel Functions](/docs/functions). This means the same [usage](/docs/limits) and [pricing](/pricing) limits will apply.

|  | Number of cron jobs per project | Minimum interval | Scheduling precision |
| --- | --- | --- | --- |
| Hobby | 100 cron jobs | Once per day | Hourly (±59 min) |
| Pro | 100 cron jobs | Once per minute | Per-minute |
| Enterprise | 100 cron jobs | Once per minute | Per-minute |

### [Hobby scheduling limits](#hobby-scheduling-limits)

Hobby accounts are limited to cron jobs that run once per day. Cron
expressions that would run more frequently will fail during deployment.

Hobby plans have two restrictions on cron jobs:

1. Daily execution limit: Cron jobs can only run once per day. Expressions like `0 * * * *` (hourly) or `*/30 * * * *` (every 30 minutes) will fail deployment with the error:
   *Hobby accounts are limited to daily cron jobs. This cron expression would run more than once per day.*
2. Timing precision: Vercel cannot assure a timely cron job invocation. For example, a cron job configured as `0 1 * * *` (every day at 1 am) will trigger anywhere between 1:00 am and 1:59 am.

For cron jobs that run more frequently or with precise timing, upgrade to our [Pro](/docs/plans/pro-plan) plan.

### Experience Vercel Pro for free

Unlock the full potential of Vercel Pro during your 14-day trial with $20 in credits. Benefit from 1 TB Fast Data Transfer, 10,000,000 Edge Requests, up to 200 hours of Build Execution, and access to Pro features like team collaboration and enhanced analytics.

[Start your free Pro trial](/upgrade/docs-trial-button)

## [Pricing](#pricing)

Cron jobs are included in all plans.

You use a function to invoke a cron job, and therefore [usage](/docs/limits) and [pricing](/pricing) limits for these functions apply to all cron job executions:

* [Functions limits and pricing](/docs/functions/usage-and-pricing)

---

[Previous

Managing Cron Jobs](/docs/cron-jobs/manage-cron-jobs)[Next

OG Image Generation](/docs/og-image-generation)

Was this helpful?
