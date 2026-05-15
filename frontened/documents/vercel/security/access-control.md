Menu

# Access Control

Last updated February 18, 2026

Deployments can be protected with [Password protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection) and [SSO protection](/docs/security/deployment-protection#advanced-deployment-protection). Password protection is available for Teams on Pro and Enterprise plans, while SSO protection is only available for Teams on the Enterprise plan. Both methods can be used to protect [Preview](/docs/deployments/environments#preview-environment-pre-production) and [Production](/docs/deployments/environments#production-environment) deployments.

## [Password protection](#password-protection)

Password protection applies to Preview deployments and Production deployments. This feature can be enabled through the Teams Project dashboard. [Read more about it in the documentation here](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection).

## [Vercel Authentication](#vercel-authentication)

Vercel Authentication protection applies to Preview deployments and Production deployments. When enabled, a person with a Personal Account that is a member of a Team, can use their login credentials to access the deployment. This feature can be enabled through the Teams Project dashboard.

Both Password protection, and Vercel Authentication can be enabled at the same time. When this is the case, the person trying to access the deployment will be presented with an option to use either method to access the deployment.

[Read more about it in the documentation here](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication).

---

[Previous

Reverse Proxy Servers and Vercel](/docs/security/reverse-proxy)[Next

Audit Logs](/docs/audit-log)

Was this helpful?
