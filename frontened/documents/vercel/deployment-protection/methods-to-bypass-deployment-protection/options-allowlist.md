Menu

# OPTIONS Allowlist

Last updated February 27, 2026

OPTIONS Allowlist is available on [all plans](/docs/plans)

You can use OPTIONS Allowlist to disable Deployment Protection (including [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication), [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection), and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)) on any incoming CORS preflight `OPTIONS` request for a list of paths.

When you add a path to OPTIONS Allowlist, any incoming request with the method `OPTIONS` that starts with the path will no longer be covered by Deployment Protection. When you remove a path from OPTIONS Allowlist, the path becomes protected again with the project's Deployment Protection settings.

For example, if you specify `/api`, all requests to paths that start with `/api` (such as `/api/v1/users` and `/api/v2/projects`) will be unprotected for any `OPTIONS` request.

![OPTIONS Allowlist.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-light.png&w=3840&q=75)![OPTIONS Allowlist.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-dark.png&w=3840&q=75)

OPTIONS Allowlist.

## [Enabling OPTIONS Allowlist](#enabling-options-allowlist)

1. ### [Go to Project Deployment Protection Settings](#go-to-project-deployment-protection-settings)

   From your Vercel [dashboard](/dashboard):

   1. Select the project that you wish to enable Password Protection for
   2. Go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. ### [Enable OPTIONS Allowlist](#enable-options-allowlist)

   From the OPTIONS Allowlist section, enable the toggle labelled Disabled:

   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-disabled-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-disabled-dark.png&w=3840&q=75)
3. ### [Specify a path](#specify-a-path)

   Specify a path to add to the OPTIONS Allowlist:

   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-add-path-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-add-path-dark.png&w=3840&q=75)
4. ### [Add more paths](#add-more-paths)

   To add more paths, select Add path:

   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-add-another-path-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-add-another-path-dark.png&w=3840&q=75)
5. ### [Save changes](#save-changes)

   Once all the paths are added, select Save

## [Disabling OPTIONS Allowlist](#disabling-options-allowlist)

1. ### [Go to Project Deployment Protection Settings](#go-to-project-deployment-protection-settings)

   From your Vercel [dashboard](/dashboard):

   1. Select the project that you wish to enable Password Protection for
   2. Go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. ### [Disable OPTIONS Allowlist](#disable-options-allowlist)

   From the OPTIONS Allowlist section, select the toggle labelled Enabled:

   ![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Foptions-allowlist-dark.png&w=3840&q=75)
3. ### [Save changes](#save-changes)

   Once all the paths are added, select Save

---

[Previous

Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation)[Next

Exceptions](/docs/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions)

Was this helpful?
