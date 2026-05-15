APIs & SDKs

Vercel SDK

# [Using the Vercel SDK](#using-the-vercel-sdk)

The `@vercel/sdk` is a type-safe TypeScript SDK that allows you to access the resources and methods of the Vercel REST API.

## [Installing Vercel SDK](#installing-vercel-sdk)

To download and install Vercel SDK, run the following command:

Terminal

```
pnpm i @vercel/sdk
```

## [Authentication](#authentication)

Vercel Access Tokens are required to authenticate and use the Vercel SDK. Once you have [created a token](https://vercel.com/account/tokens), you can use it to initialize the SDK as follows:

run.ts

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({

bearerToken: '<YOUR_BEARER_TOKEN_HERE>',

});
```

## [Troubleshooting](#troubleshooting)

Make sure that you create a token with the correct Vercel [team](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard). If you face permission (403) errors when you are already sending a token, it can be one of the following problems:

* The token you are using has expired. Check the expiry date of the token in the Vercel dashboard.
* The token does not have access to the correct scope, either not the right team or it does not have account level access.
* The resource or operation you are trying to use is not available for that team. For example, AccessGroups is an Enterprise only feature and you are using a token for a team on the pro plan.

## [Endpoints](#endpoints)

Browse all available SDK methods grouped by category.

[Access-groups11 endpoints](/docs/rest-api/sdk/access-groups/reads-an-access-group)[Aliases6 endpoints](/docs/rest-api/sdk/aliases/list-deployment-aliases)[Api-observability2 endpoints](/docs/rest-api/sdk/api-observability/lists-disabled-observability-plus-projects)[Artifacts6 endpoints](/docs/rest-api/sdk/artifacts/record-an-artifacts-cache-usage-event)[Authentication5 endpoints](/docs/rest-api/sdk/authentication/sso-token-exchange)[Billing3 endpoints](/docs/rest-api/sdk/billing/list-focus-billing-charges)[Bulk-redirects7 endpoints](/docs/rest-api/sdk/bulk-redirects/gets-project-level-redirects)[Certs4 endpoints](/docs/rest-api/sdk/certs/get-cert-by-id)[Checks-v210 endpoints](/docs/rest-api/sdk/checks-v2/list-all-checks-for-a-project)[Deployments10 endpoints](/docs/rest-api/sdk/deployments/get-deployment-events)[DNS4 endpoints](/docs/rest-api/sdk/dns/list-existing-dns-records)[Domains6 endpoints](/docs/rest-api/sdk/domains/get-a-domain-s-configuration)[Domains-registrar16 endpoints](/docs/rest-api/sdk/domains-registrar/get-supported-tlds)[Drains6 endpoints](/docs/rest-api/sdk/drains/retrieve-a-list-of-all-drains)[Edge-cache4 endpoints](/docs/rest-api/sdk/edge-cache/invalidate-by-tag)[Edge-config17 endpoints](/docs/rest-api/sdk/edge-config/get-edge-configs)[Environment11 endpoints](/docs/rest-api/sdk/environment/lists-all-shared-environment-variables-for-a-team)[Feature-flags19 endpoints](/docs/rest-api/sdk/feature-flags/list-flags)[Integrations10 endpoints](/docs/rest-api/sdk/deployments/update-deployment-integration-action)[Logs1 endpoint](/docs/rest-api/sdk/logs/get-logs-for-a-deployment)[Marketplace23 endpoints](/docs/rest-api/sdk/marketplace/update-installation)[Microfrontends5 endpoints](/docs/rest-api/sdk/microfrontends/list-microfrontends-groups)[Networking6 endpoints](/docs/rest-api/sdk/networking/list-secure-compute-networks)[Project-routes8 endpoints](/docs/rest-api/sdk/project-routes/get-project-routing-rules)[Projectmembers3 endpoints](/docs/rest-api/sdk/projectmembers/list-project-members)[Projects28 endpoints](/docs/rest-api/sdk/projects/retrieve-a-list-of-projects)[Rolling-release7 endpoints](/docs/rest-api/sdk/rolling-release/get-rolling-release-billing-status)[Sandboxes18 endpoints](/docs/rest-api/sdk/sandboxes/list-sandboxes)[Sandboxes-v2-beta22 endpoints](/docs/rest-api/sdk/sandboxes-v2-beta/list-sandboxes)[Security9 endpoints](/docs/rest-api/sdk/security/update-attack-challenge-mode)[Static-ips1 endpoint](/docs/rest-api/sdk/networking/configures-static-ips-for-a-project)[Teams16 endpoints](/docs/rest-api/sdk/teams/list-team-members)[User4 endpoints](/docs/rest-api/sdk/user/list-user-events)[Webhooks4 endpoints](/docs/rest-api/sdk/webhooks/get-a-list-of-webhooks)
