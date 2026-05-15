Menu

# Checks API Reference

Last updated March 17, 2026

API endpoints allow integrations to interact with the Vercel platform. Integrations can run checks every time you create a deployment.

The `post` and `patch` endpoints
must be called with an OAuth2, or it will produce a
`400` error.

### [Create a new check](#using-the-checks-api/endpoints/create-a-new-check)

Allows the integration to create and register checks. When the "deployment" event triggers, the endpoint registers new checks. It runs until the "deployment.succeeded" event. The endpoint will then set the check "status" to "running".

| Action | Endpoint |
| --- | --- |
| Read/Write | POST  [/v1/deployments/{deploymentId}/checks](/docs/rest-api#endpoints/checks/creates-a-new-check) |

### [Update a check](#using-the-checks-api/endpoints/update-a-check)

Allows the integration to update existing checks with a new status or conclusion. This endpoint sets the status to “completed”. The value for the conclusion can be "canceled", "failed", "neutral", "succeeded", or "skipped".

| Action | Endpoint |
| --- | --- |
| Read/Write | PATCH  [/v1/deployments/{deploymentId}/checks/{checkId}](/docs/rest-api#endpoints/checks/update-a-check) |

### [Get all checks](#using-the-checks-api/endpoints/get-all-checks)

Allows integration to fetch all existing checks with all their attributes. For comparison purposes, you can use it to get information from a previous deployment.

| Action | Endpoint |
| --- | --- |
| Read | GET  [/v1/deployments/{deploymentId}/checks](/docs/rest-api#endpoints/checks/retrieve-a-list-of-all-checks) |

### [Get one check](#using-the-checks-api/endpoints/get-one-check)

Allows integration to fetch only a single check with all the attributes. For comparison purposes, you can use it to get information from a previous deployment.

| Action | Endpoint |
| --- | --- |
| Read | GET  [/v1/deployments/{deploymentId}/checks/{checkId}](/docs/rest-api#endpoints/checks/get-a-single-check) |

### [Rerequest a failed check](#using-the-checks-api/endpoints/rerequest-a-failed-check)

Allows integration to return a new outcome or rewrite an existing check result. This endpoint is used for check reruns.

| Action | Endpoint |
| --- | --- |
| Read/Write | POST  [/v1/deployments/{deploymentId}/checks/{checkId}/rerequest](/docs/rest-api#endpoints/checks/rerequest-a-check) |

---

[Previous

Checks](/docs/checks)[Next

Checks Reference](/docs/checks/creating-checks)

Was this helpful?
