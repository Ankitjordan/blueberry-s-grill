Menu

# Password Protection

Last updated February 27, 2026

Password Protection is available on [Enterprise plans](/docs/plans/enterprise) or with the [Advanced Deployment Protection](/docs/security/deployment-protection#advanced-deployment-protection) add-on for [Pro plans](/docs/plans/pro-plan)

Those with the [owner](/docs/rbac/access-roles#owner-role), [member](/docs/rbac/access-roles#member-role) and [admin](/docs/rbac/access-roles#admin-role) roles can manage Password Protection

Password Protection requires visitors to enter a pre-defined password before they can access your deployment. You can set the desired password from your project settings when enabling the feature, and update it any time.

![Deployment protected with Password Protection authentication screen.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fpassword-protection-screen.png&w=828&q=75)![Deployment protected with Password Protection authentication screen.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fpassword-protection-screen.png&w=828&q=75)

Deployment protected with Password Protection authentication screen.

## [What to know before enabling Password Protection](#what-to-know-before-enabling-password-protection)

The table below outlines key considerations and security implications when using Password Protection for your deployments on Vercel.

| Consideration | Description |
| --- | --- |
| Environment Configuration | Can be enabled for different environments. See [Understanding Deployment Protection by environment](/docs/security/deployment-protection#understanding-deployment-protection-by-environment) |
| Compatibility | Compatible with [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication) and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips) |
| Bypass Methods | Can be bypassed using [Shareable Links](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/sharable-links) and [Protection bypass for Automation](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation), or by callers listed in [Trusted Sources](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/trusted-sources) |
| Password Persistence | Users only need to enter the password once per deployment, or when the password changes, due to cookie set by the feature being invalidated on password change |
| Password Changes | Users must re-enter a new password if you change the existing one |
| Disabling Protection | All existing deployments become unprotected if you disable the feature |
| Token Scope | JWT tokens set as cookies are valid only for the URL they were set for and can't be reused for different URLs, even if those URLs point to the same deployment |

## [How to enable and manage Password Protection](#how-to-enable-and-manage-password-protection)

You can manage Password Protection through the dashboard, API, or Terraform.

1. ### [Go to project deployment protection settings](#go-to-project-deployment-protection-settings)

   From your Vercel [dashboard](/dashboard):

   1. Select the project you want to enable Password Protection for
   2. Go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. ### [Configure Password Protection](#configure-password-protection)

   From the Password Protection section:

   1. Use the toggle to enable the feature
   2. Select the [deployment environment](/docs/security/deployment-protection#understanding-deployment-protection-by-environment) you want to protect
   3. Enter a password of your choice
   4. Finally, select Save

   All your existing and future deployments will be protected with a password for the project. The next time you access a deployment, you'll need to enter the password. After you enter it, a cookie is set in your browser for that deployment URL so you don't need to enter the password again.

   ![Enabling Password Protection.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fpassword-protection-light.png&w=1920&q=75)![Enabling Password Protection.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fpassword-protection-dark.png&w=1920&q=75)

   Enabling Password Protection.

### [Configure Password Protection with the API](#configure-password-protection-with-the-api)

You can manage Password Protection using the Vercel API endpoint to [update an existing project](/docs/rest-api/reference/endpoints/projects/update-an-existing-project) with the following body.

| Parameter | Type | Description |
| --- | --- | --- |
| `deploymentType` | string | The scope of protection. Accepted values are `prod_deployment_urls_and_all_previews` (Standard Protection), `all` (All Deployments), or `preview` (Only Preview Deployments) |
| `password` | string | The password visitors must enter |

To enable or update Password Protection, send the `passwordProtection` object:

```
{
  "passwordProtection": {
    "deploymentType": "prod_deployment_urls_and_all_previews",
    "password": "your_password_here"
  }
}
```

To disable Password Protection, set `passwordProtection` to `null`:

```
{
  "passwordProtection": null
}
```

### [Configure Password Protection with Terraform](#configure-password-protection-with-terraform)

You can configure Password Protection using `password_protection` in the `vercel_project` data source in the [Vercel Terraform Provider](https://registry.terraform.io/providers/vercel/vercel/latest/docs/data-sources/project).

---

[Previous

Protect Deployments](/docs/deployment-protection/methods-to-protect-deployments)[Next

Restrict access to deployments with Vercel Authentication](/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication)

Was this helpful?
