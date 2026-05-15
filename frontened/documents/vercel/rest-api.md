APIs & SDKs

Vercel REST API

# [Using the REST API](#using-the-rest-api)

Interact programmatically with your Vercel account using the SDK or direct HTTP requests. You can deploy new versions of web applications, manage custom domains, retrieve information about deployments, and manage secrets and environment variables for projects.

The API supports any programming language or framework that can send HTTP requests.

## [API basics](#api-basics)

The API is exposed as an HTTP/1 and HTTP/2 service over SSL. All endpoints live under the URL `https://api.vercel.com` and follow the REST architecture.

## [Authentication](#authentication)

Vercel Access Tokens are required to authenticate and use the Vercel API. Include the token in the `Authorization` header:

`Authorization: Bearer <TOKEN>`

Create and manage Access Tokens in your [account settings](https://vercel.com/account/tokens).

## [Accessing team resources](#accessing-team-resources)

By default, you can access resources in your personal account. To access resources owned by a team, append the Team ID as a query string:

`https://api.vercel.com/v6/deployments?teamId=[teamID]`

## [Rate limits](#rate-limits)

The API limits the number of calls you can make over a period of time. Rate limits are specified via response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`. See the [limits documentation](/docs/limits#rate-limits) for details.

## [Endpoints](#endpoints)

Browse all available REST API endpoints grouped by category.

[Access-groups11 endpoints](/docs/rest-api/access-groups/reads-an-access-group)[Aliases6 endpoints](/docs/rest-api/aliases/list-deployment-aliases)[Api-observability2 endpoints](/docs/rest-api/api-observability/lists-disabled-observability-plus-projects)[Artifacts6 endpoints](/docs/rest-api/artifacts/record-an-artifacts-cache-usage-event)[Authentication5 endpoints](/docs/rest-api/authentication/sso-token-exchange)[Billing3 endpoints](/docs/rest-api/billing/list-focus-billing-charges)[Bulk-redirects7 endpoints](/docs/rest-api/bulk-redirects/gets-project-level-redirects)[Certs4 endpoints](/docs/rest-api/certs/get-cert-by-id)[Checks-v210 endpoints](/docs/rest-api/checks-v2/list-all-checks-for-a-project)[Deployments10 endpoints](/docs/rest-api/deployments/get-deployment-events)[DNS4 endpoints](/docs/rest-api/dns/list-existing-dns-records)[Domains6 endpoints](/docs/rest-api/domains/get-a-domain-s-configuration)[Domains-registrar16 endpoints](/docs/rest-api/domains-registrar/get-supported-tlds)[Drains6 endpoints](/docs/rest-api/drains/retrieve-a-list-of-all-drains)[Edge-cache4 endpoints](/docs/rest-api/edge-cache/invalidate-by-tag)[Edge-config17 endpoints](/docs/rest-api/edge-config/get-edge-configs)[Environment11 endpoints](/docs/rest-api/environment/lists-all-shared-environment-variables-for-a-team)[Feature-flags19 endpoints](/docs/rest-api/feature-flags/list-flags)[Integrations10 endpoints](/docs/rest-api/deployments/update-deployment-integration-action)[Logs1 endpoint](/docs/rest-api/logs/get-logs-for-a-deployment)[Marketplace23 endpoints](/docs/rest-api/marketplace/update-installation)[Microfrontends5 endpoints](/docs/rest-api/microfrontends/list-microfrontends-groups)[Networking6 endpoints](/docs/rest-api/networking/list-secure-compute-networks)[Project-routes8 endpoints](/docs/rest-api/project-routes/get-project-routing-rules)[Projectmembers3 endpoints](/docs/rest-api/projectmembers/list-project-members)[Projects28 endpoints](/docs/rest-api/projects/retrieve-a-list-of-projects)[Rolling-release7 endpoints](/docs/rest-api/rolling-release/get-rolling-release-billing-status)[Sandboxes18 endpoints](/docs/rest-api/sandboxes/list-sandboxes)[Sandboxes-v2-beta22 endpoints](/docs/rest-api/sandboxes-v2-beta/list-sandboxes)[Security9 endpoints](/docs/rest-api/security/update-attack-challenge-mode)[Static-ips1 endpoint](/docs/rest-api/networking/configures-static-ips-for-a-project)[Teams16 endpoints](/docs/rest-api/teams/list-team-members)[User4 endpoints](/docs/rest-api/user/list-user-events)[Webhooks4 endpoints](/docs/rest-api/webhooks/get-a-list-of-webhooks)
