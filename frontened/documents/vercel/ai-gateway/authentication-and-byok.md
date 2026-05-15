Menu

# Authentication & BYOK

Last updated February 26, 2026

Every request to AI Gateway requires authentication. Vercel provides two methods: API keys and OIDC tokens. You can also bring your own provider credentials to use existing agreements or access private features.

## [Quick start](#quick-start)

Get authenticated in under a minute:

1. Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys) in your Vercel dashboard
2. Click Create key and follow the steps to generate a new API key.
3. Copy the API key and add it to your environment:

```
export AI_GATEWAY_API_KEY="your_api_key_here"
```

The [AI SDK](https://ai-sdk.dev/) automatically uses this environment variable for authentication.
If you are using a different SDK, you may need to pass the API key manually.

## [Authentication methods](#authentication-methods)

### [API keys](#api-keys)

API keys work anywhere, whether it's local development, external servers, or CI pipelines. Create them in the [AI Gateway page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=AI+Gateway) and they never expire unless you revoke them.

When a team member leaves your team, Vercel deactivates any API keys
they created. If you need authentication that isn't tied to a
specific person, use [OIDC tokens](/docs/ai-gateway/authentication-and-byok/authentication#oidc-token)
on Vercel deployments.

### [OIDC tokens](#oidc-tokens)

For applications deployed on Vercel, OIDC tokens are automatically available as `VERCEL_OIDC_TOKEN`. No secrets to manage, no keys to rotate. It just works.

```
// Automatically uses OIDC on Vercel, falls back to API key locally
const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;
```

## [Bring Your Own Key (BYOK)](#bring-your-own-key-byok)

BYOK lets you use your own provider credentials. This is useful when you:

* Have existing agreements: Use enterprise pricing or credits from providers
* Need zero markup: BYOK requests have no additional fee
* Require private access: Access provider features that need your own credentials
* Want automatic fallback: If your credentials fail, requests can retry with system credentials

BYOK credentials are configured at the team level and work across all projects. See the [BYOK documentation](/docs/ai-gateway/authentication-and-byok/byok) for setup instructions.

## [Next steps](#next-steps)

* [Create your first API key](/docs/ai-gateway/authentication-and-byok/authentication#api-key) in the dashboard
* [Set up BYOK](/docs/ai-gateway/authentication-and-byok/byok) to use your provider credentials
* [Learn about OIDC](/docs/oidc) for zero-configuration authentication on Vercel

---

[Previous

SDKs & APIs](/docs/ai-gateway/sdks-and-apis)[Next

Authentication](/docs/ai-gateway/authentication-and-byok/authentication)

Was this helpful?
