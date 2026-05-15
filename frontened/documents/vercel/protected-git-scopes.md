Restricting Git Connections to a single Vercel team

# Restricting Git Connections to a single Vercel team

Last updated February 26, 2026

Protected Git Scopes are available on [Enterprise plans](/docs/plans/enterprise)

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

Teams often need control over who can deploy their repositories to which teams or accounts. For example, a user on your team may accidentally try to deploy your project on their personal Vercel Account. To control this, you can add a Protected Git Scope.

Protected Git Scopes restrict Vercel account and team access to Organization-level Git repositories. This ensures that only authorized Vercel teams can deploy your repositories.

Want to talk to our team?

This feature is available on the Enterprise plan.

## [Managing Protected Git Scopes](#managing-protected-git-scopes)

You can [add](#adding-a-protected-git-scope) up to five Protected Git Scopes to your Vercel Team. Protected Git Scopes are configured at the team level, not per project. Multiple teams can specify the same scope, allowing both teams access.

In order to add a Protected Git Scope to your Vercel Team, you must be an [Owner](/docs/rbac/access-roles#owner-role) of the Vercel Team, and have the required permission in the Git namespace.

For Github you must be an `admin`, for Gitlab you must be an `owner`, and for Bitbucket you must be a `owner`.

## [Adding a Protected Git Scope](#adding-a-protected-git-scope)

To add a Protected Git Scopes:

1. Go to your Team's dashboard and open Settings in the sidebar
2. In the Security & Privacy section, go to Protected Git Scopes

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-light.png&w=1200&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-dark.png&w=1200&q=75)

3. Select Add to add a new Protected Git Scope
4. In the modal, select the Git provider you wish to add:
   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-modal-1-light.png&w=828&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-modal-1-dark.png&w=828&q=75)
5. In the modal, select the Git namespace you wish to add:
   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-modal-2-light.png&w=828&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-modal-2-dark.png&w=828&q=75)
6. Click Save

## [Removing a Protected Git Scope](#removing-a-protected-git-scope)

To remove a Protected Git Scopes:

1. Go to your Team's dashboard and open Settings in the sidebar.
2. In the Security & Privacy section, go to Protected Git Scopes

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-light.png&w=1200&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fsecurity%2Fprotected-git-scopes-dark.png&w=1200&q=75)

3. Select Remove to remove the Protected Git Scope

---

[Previous

Package Managers](/docs/package-managers)[Next

Rolling Releases](/docs/rolling-releases)

Was this helpful?
