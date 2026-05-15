Menu

# Pricing for Web Analytics

Last updated February 27, 2026

## [Pricing](#pricing)

The Web Analytics pricing model is based on the number of [collected events](#what-is-an-event-in-vercel-web-analytics) across all projects of your team.
Once you've enabled Vercel Web Analytics, you will have access to various features depending on your plan.

|  | Hobby | Pro | [Pro with Web Analytics Plus](#pro-with-web-analytics-plus) | Enterprise |
| --- | --- | --- | --- | --- |
| Included Events | 50,000 Events | None | N/A | None |
| Additional Events | N/A | $3 / 100,000 Events (prorated) | $3 / 100,000 Events (prorated) | Custom |
| Included Projects | Unlimited | Unlimited | Unlimited | Unlimited |
| Reporting Window | 1 Month | 12 Months | 24 Months | 24 Months |
| [Custom Events](/docs/analytics/custom-events) | - | Included | Included | Included |
| Properties on Custom Events | - | 2 | 8 | 8 |
| [UTM Parameters](/docs/analytics/filtering#using-filters) | - | N/A | Included | Included |

Hobby teams can't purchase additional events. Once you reach the monthly limit, collection pauses until the next billing cycle or until you [upgrade to Pro](/docs/plans/pro-plan).

On every billing cycle (every month for Hobby teams), you will be granted a certain number of events based on your plan.

Once you exceed your included limit, you will be charged for additional events.
If your team is on the Hobby plan, we will [pause](#hobby) the collection, as you cannot be charged for extra events.

Pro teams can also purchase the [Web Analytics Plus add-on](#pro-with-web-analytics-plus) for an additional $10/month per team, which grants access to more features and an extended reporting window.

## [Usage](#usage)

The table below shows the metrics for the [Observability](/docs/pricing/observability) section of the Usage dashboard where you can view your Web Analytics usage.

To view information on managing each resource, select the resource link in the Metric column.
To jump straight to guidance on optimization, select the corresponding resource link in the Optimize column.

Manage and Optimize pricing

| Metric | Description | Priced | Optimize |
| --- | --- | --- | --- |
| [Events](/docs/pricing/observability#managing-web-analytics-events) | The number of page views and custom events tracked | [Yes](/docs/pricing#managed-infrastructure-billable-resources) | [Learn More](/docs/manage-and-optimize-observability#optimizing-web-analytics-events) |

See the [manage and optimize Observability usage](/docs/pricing/observability) section for more information on how to optimize your usage.

Speed Insights and Web Analytics require scripts to do collection of [data
points](/docs/speed-insights/metrics#understanding-data-points). These scripts
are loaded on the client-side and therefore may incur additional usage and
costs for [Data Transfer](/docs/manage-cdn-usage#fast-data-transfer) and [Edge
Requests](/docs/manage-cdn-usage#edge-requests).

## [Billing information](#billing-information)

### [Hobby](#hobby)

Web Analytics are free for Hobby users within the usage limits detailed above.

Vercel will [send you notifications](/docs/notifications#on-demand-usage-notifications) as you are nearing your usage limits.
You will not pay for any additional usage.
However, once you exceed the limits, a three day grace period will start before Vercel will stop capturing events.
In this scenario, you have two options to move forward:

* Wait 7 days before Vercel will start collecting events again
* Upgrade to Pro to capture more events, send custom events, and access an extended reporting window.

You can sign up for Pro and start a trial using the button below.

### Experience Vercel Pro for free

Unlock the full potential of Vercel Pro during your 14-day trial with $20 in credits. Benefit from 1 TB Fast Data Transfer, 10,000,000 Edge Requests, up to 200 hours of Build Execution, and access to Pro features like team collaboration and enhanced analytics.

[Start your free Pro trial](/upgrade/docs-trial-button)

If you're expecting large number of page views, make sure to deploy your project to a Vercel [Team](/docs/accounts/create-a-team) on the [Pro](/docs/plans/pro-plan) plan.

### [Pro](#pro)

For Teams on a Pro trial, the [trial will end](/docs/plans/pro-plan/trials#post-trial-decision) after 14 days.

Note that while you will not be charged during the time of the trial, once the
trial ends, you will be charged for the events collected during the trial

You will be charged $0.00003 per event. These numbers are based on a per-billing cycle basis. Vercel will [send you notifications](/docs/notifications#on-demand-usage-notifications) when you get closer to spending your included credit.

Pro teams can [set up Spend Management](/docs/spend-management#managing-your-spend-amount) to get notified or to automatically take action, such as [using a webhook](/docs/spend-management#configuring-a-webhook) or pausing your projects when your usage hits a set spend amount.

Analytics data is not collected while your project is paused, but becomes accessible again once you upgrade to Pro.

### [Pro with Web Analytics Plus](#pro-with-web-analytics-plus)

Teams on the Pro plan can optionally extend usage and capabilities through the Web Analytics Plus [add-on](/docs/pricing#pro-plan-add-ons) for an additional $10/month per team.

When enabled, all projects within the team have access to additional features.

To upgrade to Web Analytics Plus:

1. Visit the Vercel [dashboard](/dashboard) and open [Settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling&title=Go+to+Billing) in the sidebar
2. From the left-nav, go to [Billing](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling&title=Go+to+Billing) and scroll to the Add-ons section
3. Under Web Analytics Plus, toggle to Enable the switch

## [FAQ](#faq)

### [What is an event in Vercel Web Analytics?](#what-is-an-event-in-vercel-web-analytics)

An event in Vercel Web Analytics is either an automatically tracked page view or a [custom event](/docs/analytics/custom-events).
A page view is a default event that is automatically tracked by our script when a user visits a page on your website.
A custom event is any other action that you want to track on your website, such as a button click or form submission.

### [What happens when you reach the maximum number of events?](#what-happens-when-you-reach-the-maximum-number-of-events)

* Hobby teams won't be billed beyond their allocation. Instead, collection will be paused after the 3 days grace period.
* Pro and Enterprise teams will be billed per collected event.

### [Is usage shared across projects?](#is-usage-shared-across-projects)

Yes, events are shared across all projects under the same Vercel account in Web Analytics.
This means that the events collected by each project count towards the total event limit for your account.
Keep in mind that if you have high-traffic websites or multiple projects with heavy event usage, you may need to upgrade to a higher-tier plan to accommodate your needs.

### [What is the reporting window?](#what-is-the-reporting-window)

The reporting window in Vercel Web Analytics is the length of time that your analytics data is guaranteed to be stored and viewable for analysis.
While only the reporting window is guaranteed to be stored, Vercel may store your data for longer periods to give you the option to upgrade to a bigger plan without losing any data.

---

[Previous

@vercel/analytics](/docs/analytics/package)[Next

Troubleshooting](/docs/analytics/troubleshooting)

Was this helpful?
