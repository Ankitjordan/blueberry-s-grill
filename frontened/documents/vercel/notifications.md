Title: Notifications

URL Source: https://vercel.com/docs/notifications

Markdown Content:
Vercel sends configurable notifications to you through the [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and email. These notifications enable you to view and manage important alerts about your [deployments](https://vercel.com/docs/deployments), [domains](https://vercel.com/docs/domains), [integrations](https://vercel.com/docs/integrations), [account](https://vercel.com/docs/accounts), and [usage](https://vercel.com/docs/limits/usage).

There are a number of places where you can receive notifications:

*   Web: The Vercel dashboard displays a popover, which contains all relevant notifications
*   Email: You'll receive an email when any of the alerts that you set on your team have been triggered
*   Push: You'll receive a push notification when any of the alerts that you set on your team have been triggered
*   SMS: SMS notifications can only be configured on a per-user basis for [Spend Management](https://vercel.com/docs/spend-management#managing-alert-threshold-notifications) notifications.

By default, you will receive both web and email notifications for all [types of alerts](https://vercel.com/docs/notifications#types-of-notifications). Push notifications are opt-in per device and are available on desktop and mobile web. You can [manage these notifications](https://vercel.com/docs/notifications#managing-notifications) from the Settings section in the sidebar, but any changes you make will only affect _your_ notifications.

There are two main ways to interact with web notifications:

*   Read: Unread notifications are displayed with a counter on the bell icon. When you view a notification on the web, it will be marked as read once you close the popover. Because of this, we also will not send an email if you have already read it on the web.
*   Archive: You can manage the list of notifications by archiving them. You can view these archived notifications in the archive tab, where they will be visible for 365 days.

You can manage your own notifications by using the following steps:

1.   Select your team from the team switcher.
2.   Open Settings in the sidebar and under Account, select [My Notifications](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fnotifications&title=Go+to+Notifications+settings).
3.   From here, you can toggle [where](https://vercel.com/docs/notifications#receiving-notifications)_you_ would like to receive notifications for each different [type of notification](https://vercel.com/docs/notifications#types-of-notifications).

Any changes you make will only be reflected for your notifications and not for any other members of the team. You cannot configure notifications for other users.

You can receive feedback on your deployments with the Comments feature. When someone leaves a comment, you'll receive a notification on Vercel. You can see all new comments in the Comments section in your notifications sidebar.

[Learn more in the Comments docs](https://vercel.com/docs/comments/managing-comments#notifications).

You'll receive notifications as you accrue usage past the [included amounts](https://vercel.com/docs/limits#included-usage) for products like Vercel Functions, Image Optimization, and more.

Team owners on the Pro plan can customize which usage categories they want to receive notifications for based on percentage thresholds or absolute dollar values.

Emails are sent out at specific usage thresholds which vary based on the feature and plan you are on.

If you choose to disable notifications, you won't receive alerts for any excessive charges within that category. This may result in unexpected additional costs on your bill. It is recommended that you carefully consider the implications of turning off notifications for any usage thresholds before making changes to your notification settings.

The types of notifications available for you to manage depend on the [role](https://vercel.com/docs/rbac/access-roles/team-level-roles) you are assigned within your team. For example, someone with a [Developer](https://vercel.com/docs/rbac/access-roles#developer-role) role will only be able to be notified of Deployment failures and Integration updates.

It is _not_ possible to disable all notifications for alerts that are critical to your Vercel workflow. You can opt-out of [one specific channel](https://vercel.com/docs/notifications#receiving-notifications), like email, but not both email and web notifications. This is because of the importance of these notifications for using the Vercel platform. The list below provides information on which alerts are critical.

| Notification group | Type of notification | Explanation | [Critical notification?](https://vercel.com/docs/notifications#critical-notifications) |
| --- | --- | --- | --- |
| Account |  |  |  |
|  | Team members added automatically | Team owners will be notified when a new committer is automatically added to their team through auto approval. |  |
|  | Team join requests | Team owners will be notified when a new committer is pending review because manual approval is enabled. They can follow a link from the notification to approve or decline the membership request. |  |
| Alerts |  |  |  |
|  | Usage Anomalies | Triggered when the usage of your project exceeds a certain threshold |  |
|  | Error Anomalies | Triggered when a high rate of failed function invocations (those with a status code of 5xx) in your project exceeds a certain threshold |  |
| Deployment |  |  |  |
|  | Deployment Failures | Deployment owners will be notified about any deployment failures that occur for any Project on your team. |  |
|  | Deployment Promotions | Deployment owners will be notified about any deployment promotions that occur for any Project on your team. |  |
| Domain |  |  |  |
|  | Configuration - Certificate renewal failed | Team owners will be notified if the SSL Certification renewal for any of their team's domains has failed. For more information, see [When is the SSL Certificate on my Vercel Domain renewed?](https://vercel.com/kb/guide/renewal-of-ssl-certificates-with-a-vercel-domain). |  |
|  | Configuration - Domain Configured | Team owners will be notified of any domains that have been added to a project. For more information, see [Add a domain](https://vercel.com/docs/domains/add-a-domain). |  |
|  | Configuration - Domain Misconfigured | Team owners will be notified of any domains that have been added to a project and are misconfigured. These notifications will be batched. For more information, see [Add a domain](https://vercel.com/docs/domains/add-a-domain). |  |
|  | Configuration - Domain no payment source or payment failure | Team owners will be notified if there were any payment issues while [Adding a domain](https://vercel.com/docs/domains/add-a-domain). Ensure a valid payment option is adding to Settings > Billing |  |
|  | Renewals - Domain renewals | Team owners will be notified 17 days and 7 days before [renewal attempts](https://vercel.com/docs/domains/renew-a-domain#auto-renewal-on). |  |
|  | Renewals - Domain expiration | Team owners will be notified 24 and 14 days before a domain is set to expire about, if [auto-renewal is off](https://vercel.com/docs/domains/renew-a-domain#auto-renewal-off). A final email will notify you when the Domain expires. |  |
|  | Transfers - Domain moves requested or completed | Team owners will be notified when a domain has requested to move or successfully moved in or out of their team. For more information see, [Transfer a domain to another Vercel user or team](https://vercel.com/docs/domains/working-with-domains/transfer-your-domain#transfer-a-domain-to-another-vercel-user-or-team) |  |
|  | Transfers - Domain transfers initiated, cancelled, and completed | Team owners will be notified about any information regarding any [domain transfers](https://vercel.com/docs/domains/working-with-domains/transfer-your-domain) in or out of your team. |  |
|  | Transfers - Domain transfers pending approval | Team owners will be notified when a domain is being [transferred into Vercel](https://vercel.com/docs/domains/working-with-domains/transfer-your-domain#transfer-a-domain-to-vercel), but the approval is required from the original registrar. |  |
| Integrations |  |  |  |
|  | Integration configuration disabled | Everyone will be notified about integration updates such as a [disabled Integration](https://vercel.com/docs/integrations/install-an-integration/manage-integrations-reference#disabled-integrations). |  |
|  | Integration scope changed | Team owners will be notified if any of the Integrations used on their team have updated their [scope](https://vercel.com/docs/rest-api/vercel-api-integrations#scopes). |  |
| Usage |  |  |  |
|  | Usage increased | Team owners will be notified about all [usage alerts](https://vercel.com/docs/limits) regarding billing, and other usage warnings. |  |
|  | Usage limit reached | Users will be notified when they reach the limits outlined in the [Fair Usage Policy](https://vercel.com/docs/limits/fair-use-guidelines). |  |
| Non-configurable |  |  |  |
|  | Email changed confirmation | You will be notified when you have successfully updated the email connected to your Hobby team |  |
|  | Email changed verification | You will be notified when you have updated the email connected to your Hobby team. You will need to verify this email to confirm. |  |
|  | User invited | You will be sent this when you have been invited to join a new team. |  |
|  | Invoice payment failed | Users who can manage billing settings will be notified when they have an [outstanding invoice](https://vercel.com/docs/plans/enterprise/billing#why-am-i-overdue). |  |
|  | Project role changed | You will be sent this when your [role](https://vercel.com/docs/rbac/access-roles) has changed |  |
|  | User deleted | You will be sent this when you have chosen to delete their account. This notification is sent by email only. |  |
| Edge Config | Size Limit Alerts | Members will be notified when Edge Config size exceeds its limits for the current plan |  |
|  | Schema Validation Errors | Members will be notified (at most once per hour) if API updates are rejected by [schema protection](https://vercel.com/docs/edge-config/edge-config-dashboard#schema-validation) |  |
