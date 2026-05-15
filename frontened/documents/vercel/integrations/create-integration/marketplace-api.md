Title: Using the Integrations REST API

URL Source: https://vercel.com/docs/integrations/create-integration/marketplace-api

Markdown Content:
Learn how to authenticate and use the Integrations REST API to build your native integration with Vercel.

When a customer uses your integration, the following two APIs are used for interaction and communication between the user, Vercel and the provider integration:

*   Vercel calls the provider API: You implement the [Vercel Marketplace Partner API](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/partner) endpoints on your integration server. Vercel calls them to manage resources, handle installations, and process billing.
*   The provider calls the Vercel API: Vercel provides [these endpoints](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel). You call them from your integration server to interact with Vercel's platform.

When building your integration, you'll implement the partner endpoints and call the Vercel endpoints as needed.

See the [Native Integration Flows](https://vercel.com/docs/integrations/create-integration/marketplace-flows) to understand how these endpoints work together.

The authentication method depends on whether Vercel is calling the integration provider's API or the provider is calling Vercel's API.

There are two authentication methods available:

*   User authentication: The user initiates the action. You receive a JWT token that identifies the user making the request.
*   System authentication: Your integration performs the action automatically. You use account-level OpenID Connect (OIDC) credentials to authenticate.

System authentication uses OIDC tokens that represent your integration account, not a specific user. This lets you make API calls to Vercel without requiring user interaction.

*   Automatic balance top-ups for prepayment plans
*   Background synchronization tasks
*   Automated resource management
*   Any operation that should run without user action
*   Installation cleanup operations when the Vercel account is deleted

*   User-initiated actions
*   Operations that require user consent
*   Actions tied to a specific user's context

*   Verify the OIDC token signature and claims: Always validate the token signature using Vercel's [OIDC configuration](https://marketplace.vercel.com/.well-known/openid-configuration). Check the `aud` claim matches your integration ID, and the `sub` claim identifies the authenticated user or account.
*   For user authentication always validate the user's role.

Review the [user authentication](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/partner#user-authentication) and [system authentication](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/partner#system-authentication) specifications to help you implement each method.

When your integration calls Vercel's API, you authenticate using an access token. You receive this token during the installation process when you call the [Upsert Installation API](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/partner/upsert-installation). The response includes a `credentials` object with an `access_token` that you use as a bearer token for subsequent API calls.

You can also use OAuth2 to obtain access tokens for user-specific operations.

Vercel initiates SSO as part of the [Open in Provider flow](https://vercel.com/docs/integrations/marketplace-flows#open-in-provider-button-flow).

1.   Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), with the OAuth authorization `code` and other parameters
2.   The provider calls the [SSO Token Exchange](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel/exchange-sso-token), which validates the SSO request and returns OIDC and access tokens
3.   The user gains authenticated access to the requested resource.

Parameters:

The SSO request to the [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url) will include the following authentication parameters:

*   `mode`. The mode of the OAuth authorization is always set to `sso`.
*   `code`: The OAuth authorization code.
*   `state`: The state parameter that was passed in the OAuth authorization request.

The `code` and `state` parameters will be passed back to Vercel in the [SSO Token Exchange](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel/exchange-sso-token) request.

Additionally, the SSO request to the [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url) may include the following optional context parameters:

*   `product_id`: The ID of the provider's product
*   `resource_id`: The ID of the provider's resource
*   `check_id`: The ID of the deployment check, when the resource is associated with a deployment check. Example: "chk_abc123".
*   `project_id`: The ID of the Vercel project, for instance, when the resource is connected to the Vercel project. Example: "prj_ff7777b9".
*   `experimentation_item_id`: See [Experimentation flow](https://vercel.com/docs/integrations/create-integration/marketplace-flows#experimentation-flow).
*   `invoice_id`: The ID of the provider's invoice
*   `pr`: The URL of the pull request in the Vercel project, when known in the context. Example: `https://github.com/owner1/repo1/pull/123`.
*   `path`: Indicates the area where the user should be redirected to after SSO. The possible values are: "billing", "usage", "onboarding", "secrets", and "support".
*   `url`: The provider-specific URL to redirect the user to after SSO. Must be validated by the provider for validity. The data fields that are allowed to provide `sso:` URLs, such as `Notification.href`, will automatically propagate the provided URL in this parameter.

The provider should match the most appropriate part of their dashboard to the user's context.

Using SSO with API responses:

You can trigger SSO by using `sso:` URLs in your API responses. When users click these links, Vercel initiates the SSO flow before redirecting them to your platform. The `sso:` prefix works in any URL field that supports it, such as [installation notification](https://vercel.com/docs/integrations/create-integration/marketplace-api#sso-enabled-notification-links) links or resource URLs.

Format:

```
sso:https://your-integration.com/resource-page
```

When a user clicks a link with an `sso:` URL:

1.   Vercel initiates the SSO flow
2.   Your provider validates the SSO request via the [SSO Token Exchange](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel/exchange-sso-token)
3.   The user is redirected to the target URL with authenticated access

Example with notifications:

The integration provider can initiate the SSO process from their side. This helps to streamline the authentication process for users coming from the provider's platform and provides security when a user attempts to access a resource managed by a Vercel Marketplace integration.

To initiate SSO, an integration provider needs to construct a URL using the following format:

```
https://vercel.com/sso/integrations/{URLSlug}/{installationId}?{query}
```

*   [`URLSlug`](https://vercel.com/docs/integrations/create-integration/submit-integration#url-slug): The unique identifier for your integration in the Vercel Integrations Marketplace
*   [`installationId`](https://vercel.com/docs/integrations/marketplace-api#installations): The ID of the specific installation for the user
*   `query`: Optional query parameters to include additional information

Example:

Let's say you have an AWS integration with the following details:

*   `URLSlug`: `aws-marketplace-integration-demo`
*   `installationId`: `icfg_PSFtkFqr5djKRtOkNtOHIfSd`
*   Additional parameter: `resource_id=123456`

The constructed URL would look like this:

```
https://vercel.com/sso/integrations/aws-marketplace-integration-demo/icfg_PSFtkFqr5djKRtOkNtOHIfSd?resource_id=123456
```

Flow:

1.   The provider constructs and redirects the user to the SSO URL
2.   Vercel validates the SSO request and confirms user access
3.   After successfully validating the request, Vercel redirects the user back to the provider using the same flow described in the [Vercel Initiated SSO](https://vercel.com/docs/integrations/create-integration/marketplace-api#vercel-initiated-sso)
4.   The user gains authenticated access to the requested resource

Get details about team members who have access to an installation. Use this endpoint to retrieve member information for access control, audit logs, or displaying member details in your integration.

To retrieve information about a specific team member associated with an installation, use the [`/v1/installations/{installationId}/member/{memberId}`](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel/get-member) endpoint.

*   `installationId` - The installation ID
*   `memberId` - The member ID

Members can have the following roles:

*   `ADMIN` - Full access to the installation and its resources
*   `USER` - Limited access, can use resources but can't modify settings

Check the member's role to determine what actions they can perform below.

Installation notifications appear in the Vercel dashboard to alert users about important information or actions needed for their installation. You can set notifications when creating or updating installations.

Update the notification field using the [`PATCH /v1/installations/{installationId}`](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel/update-installation) endpoint as shown below:

Use different notification types to indicate severity:

*   `info` - Informational message (default)
*   `warning` - Warning that requires attention
*   `error` - Error that needs immediate action

The notification `href` field supports special `sso:` URLs that trigger Single Sign-On before redirecting users to your destination. This ensures users are authenticated before accessing resources on your platform.

Format:

```
sso:https://your-integration.com/resource-page
```

When a user clicks a notification link with an `sso:` URL:

1.   Vercel initiates the SSO flow (as described in [Vercel initiated SSO](https://vercel.com/docs/integrations/create-integration/marketplace-api#vercel-initiated-sso))
2.   Your provider validates the SSO request via the [SSO Token Exchange](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/vercel/exchange-sso-token)
3.   The user is redirected to the target URL with authenticated access

Example:

Use `sso:` URLs in notification links when they point to resources that require authentication on your platform. For public pages or general information, use regular HTTPS URLs.

Remove a notification by setting it to `null`:

You can find the value of the notification field by calling the [`/v1/installations/{installationId}`](https://vercel.com/docs/integrations/create-integration/marketplace-api/reference/partner/get-installation) endpoint as shown below:

When you provision a resource or update secrets, you can include an optional `prefix` field for each secret. Vercel prepends this prefix to the secret name when creating environment variables in connected projects. This lets users connect the same resource type to multiple projects, or multiple resources to one project, without name collisions.

For example, to return secrets with a prefix during provisioning:

This creates `ACME_PGHOST` and `ACME_PGPASSWORD` as environment variables in the connected project.

Vercel normalizes hyphens and spaces in prefix values to underscores. For example, a prefix of `MY-DB` becomes `MY_DB`. If a secret name already starts with the prefix (for example, `ACME_PGHOST` with prefix `ACME`), Vercel skips prefixing to avoid duplication.

Users can also set a custom prefix when connecting a resource to a project. Learn more about [how prefixes work](https://vercel.com/docs/integrations/create-integration/native-integration#differentiate-variables-with-prefixes).

When your integration provisions resources with credentials, you should implement secrets rotation to allow users to update credentials securely. Learn how to [implement secrets rotation](https://vercel.com/docs/integrations/create-integration/secrets-rotation) in your integration.

You can receive billing events with [webhooks](https://vercel.com/docs/webhooks) to stay informed about invoice status changes and take appropriate actions. For an overview of the billing process and how to submit invoices, see [Billing and Refunds](https://vercel.com/docs/integrations/create-integration/billing).

You can receive the following events:

*   [`marketplace.invoice.created`](https://vercel.com/docs/webhooks/webhooks-api#marketplace.invoice.created): The invoice was created and sent to the customer
*   [`marketplace.invoice.paid`](https://vercel.com/docs/webhooks/webhooks-api#marketplace.invoice.paid): The invoice was paid
*   [`marketplace.invoice.notpaid`](https://vercel.com/docs/webhooks/webhooks-api#marketplace.invoice.notpaid): A payment for the invoice failed
*   [`marketplace.invoice.overdue`](https://vercel.com/docs/webhooks/webhooks-api#marketplace.invoice.overdue): The invoice was not paid after a grace period
*   [`marketplace.invoice.refunded`](https://vercel.com/docs/webhooks/webhooks-api#marketplace.invoice.refunded): The invoice was refunded

You should verify webhook signatures to ensure requests come from Vercel. Integration webhooks use your Integration Secret (also called Client Secret) from the [Integration Console](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fintegrations%2Fconsole&title=Go+to+Integrations+Console) for signature verification. Follow the [Securing webhooks](https://vercel.com/docs/webhooks/webhooks-api#securing-webhooks) section of the Webhooks API Reference to learn more.

You can implement handlers for each billing event type to manage invoice lifecycle and resource access.

When an invoice is created, you can prepare your systems for billing or send notifications.

Event:`marketplace.invoice.created`

When an invoice is paid, activate resources or update billing status.

Event:`marketplace.invoice.paid`

Fires when an invoice payment fails.

Event:`marketplace.invoice.notpaid`

The current webhook payload doesn't include retry attempt information. You'll need to track retry attempts in your system or query the invoice status directly

When an invoice isn't paid after the grace period, suspend resources or take other actions.

Event:`marketplace.invoice.overdue`

When an invoice is refunded, update records and handle resource access accordingly.

Event:`marketplace.invoice.refunded`
