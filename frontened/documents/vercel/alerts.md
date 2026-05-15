Alerts

# Alerts

Last updated February 27, 2026

Alerts are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans with [Observability Plus](/docs/observability/observability-plus)

Alerts let you know when something's wrong with your Vercel projects, like a spike in failed function invocations or unusual usage patterns. You can get these alerts by email, through Slack, or set up a webhook so you can respond to issues.

By default, you'll be notified about:

* Usage anomaly: When your project's usage exceeds abnormal levels.
* Error anomaly: When your project's error rate of function invocations exceeds abnormal levels.

## [Alert types](#alert-types)

| Alert Type | Triggered when | Grouping |
| --- | --- | --- |
| Error Anomaly | Fires when your 5-minute error rate is more than 4 standard deviations above your 24-hour average and exceeds the minimum threshold. By default, error anomalies track 5xx status codes, but alert rules can be configured for 4xx detections. | Route, Http Group |
| Usage Anomaly | Fires when your 5-minute usage is more than 4 standard deviations above your 24-hour average and exceeds the minimum threshold. | Metric |

### [Usage anomaly metrics](#usage-anomaly-metrics)

Usage anomaly alerts support these metrics:

* [Function CPU duration](/docs/functions/usage-and-pricing#active-cpu)
* [Function duration](/docs/functions/usage-and-pricing)
* [Fast Data Transfer](/docs/manage-cdn-usage#fast-data-transfer)
* [Edge requests](/docs/manage-cdn-usage#cdn-requests)
* [Function invocations](/docs/functions/usage-and-pricing)

## [Configure alerts with alert rules](#configure-alerts-with-alert-rules)

You can configure Alert rules at the team level by going to your [Vercel team's settings Alerts page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Falerts) and clicking Add Rule.

When you create or edit a rule, you can configure:

| Field | Description |
| --- | --- |
| Name | A label for the rule, such as `Production anomaly alerts`. |
| Projects | Apply the rule to all projects, specific projects, or exclude selected projects. |
| Alert types | Apply the rule to all alert types or only specific ones. When you choose specific types, you can add filters for that type. For example, you can narrow an error rule by route or narrow a usage rule by metric. |
| Severity level | Choose what severity level of alerts to trigger the rule for: High (major user impact, data loss, and security issues), Medium (service degradation and failures), or Low (minor issues and controlled problems). |
| Notification options | Subscribe all team owners to the rule. |

Once created, you can configure destinations for that rule from the Alert Rules list:

* Slack: Add one or more Slack channels for the rule.
* Your subscriptions: Configure per-rule delivery preferences, including Email, Inbox, and Push.

### [Configure Slack for a rule](#configure-slack-for-a-rule)

Configure Slack subscriptions per rule from the Alert Rules list.

1. Open [Settings > Alerts](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Falerts) for your team.
2. Create the rule, or select an existing rule.
3. In the Slack column, click Configure.
4. If the Vercel Slack integration is not installed for your team yet, install it first.
5. In Slack, open the channel that should receive alerts and invite the Vercel app:

   ```
   /invite @Vercel
   ```
6. In the same Slack channel, run the subscribe command shown in the modal. For a rule-specific subscription, the command includes the rule ID:

   ```
   /vercel subscribe <team-id> alerts +rule:<rule-id>
   ```
7. Repeat this in any additional Slack channels you want to subscribe this rule to.

After a channel is subscribed, the rule shows the connected Slack channels in the Slack column.

### [Configure 4xx detections](#configure-4xx-detections)

To configure error anomaly detections for 4xx responses, create a new rule instead of modifying an existing one. This makes it easier to keep your default 5xx rule in place while tuning a separate rule for 4xx responses.

1. Open [Settings > Alerts](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Falerts) for your team and click Add Rule.
2. Create a new rule. This is recommended instead of editing an existing rule.
3. Under Alert types, select Error anomaly.
4. In the HTTP group selector, check 4xx. If you want this rule to detect only client errors, uncheck 5xx.

### [Configure webhooks](#configure-webhooks)

Webhooks work outside individual alert rules. In the [Settings > Alerts page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Falerts), click Add Webhook to create a team webhook for alert events.

Webhook configuration applies at the team level. You can choose the endpoint URL and the projects that should send webhook events.

To learn more about the webhook payload, see the [Webhooks API Reference](/docs/webhooks/webhooks-api):

* [Alerts triggered](/docs/webhooks/webhooks-api#alerts.triggered)

## [Investigate alerts with AI](#investigate-alerts-with-ai)

When you get an alert, [Agent Investigation](/docs/agent/investigation) can run on its own to help you debug. Instead of digging through logs and metrics yourself, AI analyzes what's happening and displays highlights of the anomaly in your dashboard.

When you view an alert in the dashboard, you can click Enable Auto Run to trigger an investigation. This takes you to the Agents section in the sidebar, where you can set up investigations to run on new alerts. You can also click Rerun to start a new investigation.

Learn more in the [Agent Investigation docs](/docs/agent/investigation).

## [Error anomaly reference table](#error-anomaly-reference-table)

Error anomaly detection compares current error rates against a 24-hour baseline using statistical confidence intervals. These are the minimum error counts needed to trigger alerts at different traffic volumes:

| Traffic Volume | Avg Error Rate | Minimum Errors | Notes |
| --- | --- | --- | --- |
| Sparse (1 req/hour) | 2% | 51 errors | or 5 with 2 consecutive 5-min intervals |
| Low (10 req/min) | 1% | 51 errors | or 6 with 2 consecutive 5-min intervals |
| Medium (100 req/min) | 0.5% | 51 errors | or 18 with 2 consecutive 5-min intervals |
| High (1k req/min) | 0.5% | 106 errors |  |
| High (10k req/min) | 0.2% | 361 errors |  |
| Zero Error Baseline (1000 req/min) | 0% | 51 errors | or 5 with 2 consecutive 5-min intervals |
| High Error Rate (100 req/min) | 5% | 106 errors |  |

---

[Previous

Overview](/docs/observability)[Next

Logs](/docs/logs)

Was this helpful?
