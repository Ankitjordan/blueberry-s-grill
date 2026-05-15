SAML SSO

# SAML Single Sign-On

Last updated February 27, 2026

SAML is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

To manage the [members](/docs/rbac/managing-team-members) of your team through a third-party identity provider like [Okta](https://www.okta.com/) or [Auth0](https://auth0.com/), you can set up the Security Assertion Markup Language (SAML) [feature](#configuring-saml-sso) from your team's settings.

Once enabled, all team members will be able to log in or access [Preview](/docs/deployments/preview-deployments) and Production Deployments using your [selected identity provider](/docs/saml#saml-providers). Any new users signing up with SAML will automatically be added to your team.

For Enterprise customers, you can also automatically manage team member roles and provisioning by setting up [Directory Sync](/docs/directory-sync).

![The SAML SSO settings for a Team.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fsaml-options.png&w=3840&q=75)![The SAML SSO settings for a Team.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fsaml-options-dark.png&w=3840&q=75)

The SAML SSO settings for a Team.

## [Configuring SAML SSO](#configuring-saml-sso)

1. To configure SAML SSO for your team, you must be an [owner](/docs/rbac/access-roles/team-level-roles) of the team
2. From your [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), ensure your team is selected in the team switcher
3. Open Settings in the sidebar and select [Security & Privacy](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fsecurity&title=Go+to+Security+settings)
4. Navigate to the SAML Single Sign-On section. Click Configure and follow the walkthrough to configure SAML SSO for your team with your identity provider of choice
5. As a further step, you may want to [enforce SAML SSO](#enforcing-saml) for your team

Pro teams will first need to purchase the SAML SSO add-on from their [Billing settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling%23paid-add-ons) before it can be configured.

## [Enforcing SAML](#enforcing-saml)

For additional security, SAML SSO can be enforced for a team so that all [team members](/docs/rbac/managing-team-members) cannot access any team information unless their current session was authenticated with SAML SSO.

1. To enforce SAML SSO for your team, you must be an [owner](/docs/rbac/access-roles/team-level-roles) and currently be authenticated with SAML SSO. This ensures that your configuration is working properly before tightening access to your team information
2. From your [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), open Settings in the sidebar and select [Security & Privacy](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fsecurity&title=Go+to+Security+settings). Then go to the SAML Single Sign-On section
3. Toggle the Require Team Members to login with SAML switch to Enabled

![SAML SSO configured and enforced.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fsaml-enforced.png&w=3840&q=75)![SAML SSO configured and enforced.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fsaml-enforced-dark.png&w=3840&q=75)

SAML SSO configured and enforced.

When modifying your SAML configuration, the option for enforcing will
automatically be turned off. Please verify your new configuration is working
correctly by re-authenticating with SAML SSO before re-enabling the option.

## [Authenticating with SAML SSO](#authenticating-with-saml-sso)

Once you have configured SAML, your [team members](/docs/rbac/managing-team-members) can use SAML SSO to log in or sign up to Vercel. To login:

1. Select the Continue with SAML SSO button on the authentication page, then enter your team's URL.
   Your team slug is the identifier in the URLs for your team. For example, the identifier for vercel.com/acme is `acme`.
2. Select Continue with SAML SSO again to be redirected to the third-party authentication provider to finish authenticating. Once completed, you will be logged into Vercel.

SAML SSO sessions last for 24 hours before users must re-authenticate with the third-party SAML provider.

### [Customizing the login page](#customizing-the-login-page)

You can choose to share a Vercel login page that only shows the option to log in with SAML SSO. This prevents your team members from logging in with an account that's not managed by your identity provider.

To use this page, you can set the `saml` query param to your team URL. For example:

```
https://vercel.com/login?saml=team_id
```

![Vercel's login page showing only the SAML SSO login button.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fsaml-login-custom-light.png&w=1080&q=75)![Vercel's login page showing only the SAML SSO login button.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fsaml-login-custom-dark.png&w=1080&q=75)

Vercel's login page showing only the SAML SSO login button.

## [Managing team members](#managing-team-members)

When using SAML SSO, team members can authenticate through your identity provider, but team membership must be managed manually through the Vercel dashboard.

For automatic provisioning and de-provisioning of team members based on your identity provider, consider upgrading to [Directory Sync](/docs/directory-sync), which is available on Enterprise plans.

## [SAML providers](#saml-providers)

Vercel supports the following third-party SAML providers:

* [Okta](https://www.okta.com/)
* [Auth0](https://auth0.com/)
* [Google](https://accounts.google.com/)
* [Microsoft Entra (formerly Azure Active Directory)](https://www.microsoft.com/en-in/security/business/identity-access/microsoft-entra-single-sign-on)
* [Microsoft ADFS](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services)
* [OneLogin](https://onelogin.com/)
* [Duo](https://duo.com/product/single-sign-on-sso/)
* [JumpCloud](https://jumpcloud.com/)
* [PingFederate](https://www.pingidentity.com/en/platform/capabilities/single-sign-on.html)
* [ADP](https://apps.adp.com/en-US/home)
* [Keycloak](https://www.keycloak.org/)
* [Cyberark](https://www.cyberark.com/products/single-sign-on/)
* [OpenID](https://openid.net/)
* [VMware](https://kb.vmware.com/s/article/2034918)
* [LastPass](https://www.lastpass.com/)
* [miniOrange](https://www.miniorange.com/products/single-sign-on-sso)
* [NetIQ](https://www.microfocus.com/en-us/cyberres/identity-access-management/secure-login)
* [Oracle Cloud](https://docs.oracle.com/en/cloud/paas/content-cloud/administer/enable-single-sign-sso.html)
* [Salesforce](https://help.salesforce.com/s/articleView?id=sf.sso_about.htm&type=5)
* [CAS](https://www.apereo.org/projects/cas)
* [ClassLink](https://www.classlink.com/)
* [Cloudflare](https://developers.cloudflare.com/cloudflare-one/applications/configure-apps/dash-sso-apps/)
* [SimpleSAMLphp](https://simplesamlphp.org/)

---

[Previous

Directory Sync](/docs/directory-sync)[Next

Two-factor (2FA)](/docs/two-factor-authentication)

Was this helpful?
