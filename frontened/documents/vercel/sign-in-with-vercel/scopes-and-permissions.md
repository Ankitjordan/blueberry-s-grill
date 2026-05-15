Menu

# Scopes and Permissions

Last updated February 26, 2026

Scopes define what data is included in the [ID Token](/docs/sign-in-with-vercel/tokens#id-token) and whether to issue a [Refresh Token](/docs/sign-in-with-vercel/tokens#refresh-token). Permissions control what APIs and team resource an [Access Token](/docs/sign-in-with-vercel/tokens#access-token) can interact with.

## [Scopes](#scopes)

The following scopes are available:

| Scope | Description |
| --- | --- |
| `openid` | Required permission, needed to issue an [ID Token](/docs/sign-in-with-vercel/tokens#id-token) for user identification. |
| `email` | Enabling this scope grants access to the user's email address in the [ID Token](/docs/sign-in-with-vercel/tokens#id-token). |
| `profile` | Enabling this scope grants access to the user's basic profile information, including name, username, and profile picture, in the [ID Token](/docs/sign-in-with-vercel/tokens#id-token). |
| `offline_access` | Enabling this scope issues a [Refresh Token](/docs/sign-in-with-vercel/tokens#refresh-token). |

## [Permissions](#permissions)

Permissions for issuing API requests and interacting with team resources are
currently in private beta.

---

[Previous

Getting Started](/docs/sign-in-with-vercel/getting-started)[Next

Tokens](/docs/sign-in-with-vercel/tokens)

Was this helpful?
