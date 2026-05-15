Menu

# Sandbox Authentication

Last updated January 30, 2026

The Sandbox SDK supports two authentication methods: Vercel OIDC tokens (recommended) and access tokens.

## [Vercel OIDC token (recommended)](#vercel-oidc-token-recommended)

The SDK uses Vercel OpenID Connect (OIDC) tokens when available.

Local development: Download a development token by connecting to a Vercel project:

```
vercel link
vercel env pull
```

This creates a `.env.local` file with a `VERCEL_OIDC_TOKEN`. The token expires after 12 hours, so run `vercel env pull` again if you see authentication errors.

Production: Vercel manages token expiration automatically when your code runs on Vercel.

## [Access tokens](#access-tokens)

Use access tokens when `VERCEL_OIDC_TOKEN` is unavailable, such as in external CI/CD systems or non-Vercel environments.

You need:

* Your [Vercel team ID](/docs/accounts#find-your-team-id)
* Your [Vercel project ID](/docs/project-configuration/general-settings#project-id)
* A [Vercel access token](/docs/rest-api#creating-an-access-token) with access to the team

Set these as environment variables:

```
VERCEL_TEAM_ID=team_xxx
VERCEL_PROJECT_ID=prj_xxx
VERCEL_TOKEN=your_access_token
```

Then pass them to `Sandbox.create()`:

```
import { Sandbox } from '@vercel/sandbox';

const sandbox = await Sandbox.create({
  teamId: process.env.VERCEL_TEAM_ID!,
  projectId: process.env.VERCEL_PROJECT_ID!,
  token: process.env.VERCEL_TOKEN!,
});
```

```
import os
from vercel.sandbox import Sandbox

sandbox = Sandbox.create(
    team_id=os.environ.get("VERCEL_TEAM_ID"),
    project_id=os.environ.get("VERCEL_PROJECT_ID"),
    token=os.environ.get("VERCEL_TOKEN"),
)
```

For async operations, import `AsyncSandbox` instead of `Sandbox` and use `await` with all methods.

## [Which method to use](#which-method-to-use)

| Scenario | Recommended method |
| --- | --- |
| Local development | OIDC token via `vercel env pull` |
| Deployed on Vercel | OIDC token (automatic) |
| External CI/CD | Access token |
| Non-Vercel hosting | Access token |

---

[Previous

Concepts](/docs/vercel-sandbox/concepts)[Next

Snapshots](/docs/vercel-sandbox/concepts/snapshots)

Was this helpful?
