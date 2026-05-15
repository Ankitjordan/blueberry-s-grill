Two-factor Enforcement

# Two-factor enforcement

Last updated February 27, 2026

To enhance the security of your Vercel team, you can enforce two-factor authentication (2FA) for all team members. When enabled, members will be required to configure 2FA before they can access team resources.

What to expect:

* Team members will not be able to access team resources until they have 2FA enabled.
* Team members will continue to occupy a team seat.
* Any CI/CD pipeline tokens associated with users without 2FA will cease to work.
* Managed accounts, like service accounts or bots, will also need to have 2FA enabled.
* Members without 2FA will be prompted to enable it when visiting the team dashboard.
* Builds will fail for members without 2FA.
* Notifications will continue to be sent to members without 2FA.

For more information on how to set up two-factor authentication for your account, see the [two-factor authentication](/docs/two-factor-authentication) documentation.

## [Viewing team members' 2FA status](#viewing-team-members'-2fa-status)

Team owners can view the two-factor authentication status of all team members in the [team members page](/docs/rbac/managing-team-members). Users without 2FA will have a label indicating their state. A filter is available on the same page to show members with two-factor authentication enabled or disabled.

![Two-factor authentication status on the Members page.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Fmembers-2fa-light.png&w=2048&q=75)![Two-factor authentication status on the Members page.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Fmembers-2fa-dark.png&w=2048&q=75)

Two-factor authentication status on the Members page.

## [Enabling team 2FA enforcement](#enabling-team-2fa-enforcement)

Before enabling 2FA enforcement for your team, you must have 2FA enabled on your own account. To prevent workflow disruptions, we recommend notifying your team members about the policy change beforehand.

Steps to follow:

1. Go to Team Settings then [Security & Privacy](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fsecurity&title=Go+to+Security+settings) and scroll to Two-Factor Authentication Enforcement
2. Toggle the switch to enforce 2FA
3. Click the Save button to confirm the action

![Two-factor authentication enforcement team setting.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Fteam-2fa-enforcement-light.png&w=2048&q=75)![Two-factor authentication enforcement team setting.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Fteam-2fa-enforcement-dark.png&w=2048&q=75)

Two-factor authentication enforcement team setting.

---

[Previous

RBAC](/docs/rbac)[Next

Storage / Overview](/docs/storage)

Was this helpful?
