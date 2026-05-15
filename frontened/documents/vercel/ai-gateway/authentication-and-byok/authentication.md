Menu

# Authentication

Last updated February 26, 2026

To use the AI Gateway, you need to authenticate your requests. There are two authentication methods available:

1. API Key Authentication: Create and manage API keys through the Vercel Dashboard
2. OIDC Token Authentication: Use Vercel's automatically generated OIDC tokens

## [API key](#api-key)

API keys provide a secure way to authenticate your requests to the AI Gateway. You can create and manage multiple API keys through the Vercel Dashboard.

When a team member leaves your team, Vercel deactivates any API keys
they created. If you need authentication that isn't tied to a
specific person, use [OIDC tokens](#oidc-token) on Vercel
deployments.

### [Creating an API Key](#creating-an-api-key)

1. ### [Navigate to API key management](#navigate-to-api-key-management)

   Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys) in your Vercel dashboard.
2. ### [Create a new API key](#create-a-new-api-key)

   Click Create key and configure your new API key.
3. ### [Save your API key](#save-your-api-key)

   Once you have the API key, save it to `.env.local` at the root of your project (or in your preferred environment file):

   .env.local

   ```
   AI_GATEWAY_API_KEY=your_api_key_here
   ```

### [Using the API key](#using-the-api-key)

When you specify a model id as a plain string, the AI SDK will automatically use the Vercel AI Gateway provider to route the request. The AI Gateway provider looks for the API key in the `AI_GATEWAY_API_KEY` environment variable by default.

app/api/chat/route.ts

```
import { generateText } from 'ai';

export async function GET() {
  const result = await generateText({
    model: 'xai/grok-4.3',
    prompt: 'Why is the sky blue?',
  });
  return Response.json(result);
}
```

### [Managing API keys](#managing-api-keys)

You can list and revoke API keys from the Vercel dashboard or programmatically using the Vercel CLI.

#### [Dashboard](#dashboard)

View all your API keys on the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys). From there, you can:

* Delete an individual key by clicking the `···` menu next to it
* Delete all keys at once by clicking the `···` menu next to Create Key

#### [CLI](#cli)

You can also list and revoke API keys using the [Vercel CLI's `api` command](/docs/cli/api). The CLI handles authentication automatically using your current session.

The `vercel api` command is currently in [beta](/docs/cli/api) and requires
Vercel CLI version 50.5.0 or later. Features and behavior may change.

To list all AI Gateway API keys for your team:

terminal

```
vercel api "/v1/api-keys?teamId=$VERCEL_TEAM_ID&purpose=ai-gateway"
```

The response includes an `apiKeys` array with details about each key:

Response

```
{
  "apiKeys": [
    {
      "id": "luEE****ha4Y",
      "name": "my-api-key",
      "partialKey": "3qooPB",
      "purpose": "ai-gateway",
      "createdAt": 1776898482597
    }
  ],
  "pagination": {
    "count": 1,
    "next": null,
    "prev": 1776898482597
  }
}
```

To revoke a specific API key, pass its `id` to the delete endpoint:

terminal

```
vercel api "/v1/api-keys/$API_KEY_ID?teamId=$VERCEL_TEAM_ID" -X DELETE
```

The CLI prompts you to confirm the operation before proceeding. A revoked key immediately stops working and any requests using it return `401 Unauthorized`.

You can revoke your own keys as a team member, or any team member's keys as a
team owner.

#### [Reporting a compromised key](#reporting-a-compromised-key)

If you have a raw API key that has been compromised, you can revoke it by reporting it directly using `cURL` from a terminal:

terminal

```
curl -X POST "https://api.vercel.com/external/compromised_secret" \
  -H "Content-Type: application/json" \
  -d '{"secret": {"api_key": "vck_..."}}'
```

You can optionally include audit metadata:

terminal

```
curl -X POST "https://api.vercel.com/external/compromised_secret" \
  -H "Content-Type: application/json" \
  -d '{"secret": {"api_key": "vck_..."}, "reporter_email": "you@example.com", "comment": "Found exposed in CI logs"}'
```

No authentication is required.

## [OIDC token](#oidc-token)

The [Vercel OIDC token](/docs/oidc) is a way to authenticate your requests to the AI Gateway without needing to manage an API key. Vercel automatically generates the OIDC token that it associates with your Vercel project.

Vercel OIDC tokens are only valid for 12 hours, so you will need to refresh
them periodically during local development. You can do this by running `vercel env pull` again.

### [Setting up OIDC authentication](#setting-up-oidc-authentication)

1. ### [Link to a Vercel project](#link-to-a-vercel-project)

   Before you can use the OIDC token during local development, ensure that you link your application to a Vercel project:

   terminal

   ```
   vercel link
   ```
2. ### [Pull environment variables](#pull-environment-variables)

   Pull the environment variables from Vercel to get the OIDC token:

   terminal

   ```
   vercel env pull
   ```
3. ### [Use OIDC authentication in your code](#use-oidc-authentication-in-your-code)

   With OIDC authentication, you can directly use the gateway provider without needing to obtain an API key or set it in an environment variable:

   app/api/chat/route.ts

   ```
   import { generateText } from 'ai';

   export async function GET() {
     const result = await generateText({
       model: 'xai/grok-4.3',
       prompt: 'Why is the sky blue?',
     });
     return Response.json(result);
   }
   ```

---

[Previous

Authentication & BYOK](/docs/ai-gateway/authentication-and-byok)[Next

BYOK](/docs/ai-gateway/authentication-and-byok/byok)

Was this helpful?
