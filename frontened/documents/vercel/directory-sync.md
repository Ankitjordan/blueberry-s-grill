Directory Sync

# Directory Sync

Last updated February 26, 2026

Directory Sync is available on [Enterprise plans](/docs/plans/enterprise)

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

Directory Sync helps teams manage their organization membership from a third-party identity provider like Google Directory or Okta. Directory Sync is only available for Enterprise Teams and can only be configured by [Team Owners](/docs/rbac/access-roles#owner-role).

When Directory Sync is configured, changes to your Directory Provider will automatically be synced with your [team members](/docs/rbac/managing-team-members). The previously existing permissions/roles will be overwritten by Directory Sync, including current user performing the sync.

Make sure that you still have the right permissions/role after configuring
Directory Sync, [otherwise you might lock yourself
out.](#preventing-account-lockout)

All team members will receive an email detailing the change. For example, if a new user is added to your Okta directory, that user will automatically be invited to join your Vercel Team. If a user is removed, they will automatically be removed from the Vercel Team.

You can configure a mapping between your Directory Provider's groups and a Vercel Team role. For example, your Engineers group on Okta can be configured with the [member](/docs/rbac/access-roles#member-role) role on Vercel, and your Admin group can use the [owner](/docs/rbac/access-roles#owner-role) role.

## [Configuring Directory Sync](#configuring-directory-sync)

To configure directory sync for your team:

1. Ensure your team is selected in the team switcher
2. From your team's dashboard, open Settings in the sidebar, and then Security & Privacy
3. Under SAML Single Sign-On, select the Configure button. This opens a dialog to guide you through configuring Directory Sync for your Team with your Directory Provider.
4. Once you have completed the configuration walkthrough, configure how Directory Groups should map to Vercel Team roles:

![Setting the Okta Admins group as Vercel owners and the Engineers group as Vercel Members.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fdsync-roles.png&w=1080&q=75)![Setting the Okta Admins group as Vercel owners and the Engineers group as Vercel Members.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fdsync-roles-dark.png&w=1080&q=75)

Setting the Okta Admins group as Vercel owners and the Engineers group as Vercel Members.

5. Finally, an overview of all synced members is shown. Click Confirm and Sync to complete the syncing:

![An overview of Team owners and Members that will be added.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fdsync-confirmation.png&w=1080&q=75)![An overview of Team owners and Members that will be added.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fteams%2Fdsync-confirmation-dark.png&w=1080&q=75)

An overview of Team owners and Members that will be added.

6. Once confirmed, Directory Sync will be successfully configured for your Vercel Team.

   SAML Single Sign-On is optionally available on the Enterprise plan, or as a paid add-on for the Pro plan. To enable,
   Enterprise teams can contact [sales](https://vercel.com/contact/sales), and Pro teams can purchase the add-on
   from their team's [Billing settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fbilling%23paid-add-ons).

### [Supported providers](#supported-providers)

See [SAML Single Sign-On](/docs/saml#saml-providers) for a list of all the SAML providers that Vercel supports.

## [Preventing account lockout](#preventing-account-lockout)

To prevent account lockout ensure that at least one person in your team has the owner role, and that they are not removed from the team.

If access is lost due to removal of team owners, use the following group names to automatically allocate the corresponding roles to individuals in that group:

| Group name | Role |
| --- | --- |
| `vercel-role-owner` | [Owner](/docs/rbac/access-roles#owner-role) |
| `vercel-role-member` | [Member](/docs/rbac/access-roles#member-role) |
| `vercel-role-developer` | [Developer](/docs/rbac/access-roles#developer-role) |
| `vercel-role-billing` | [Billing](/docs/rbac/access-roles#billing-role) |
| `vercel-role-viewer` | [Viewer Pro](/docs/rbac/access-roles#pro-viewer-role) or [Viewer Enterprise](/docs/rbac/access-roles#enterprise-viewer-role) |
| `vercel-role-contributor` | [Contributor](/docs/rbac/access-roles#contributor-role) |

---

[Previous

Deployment Protection](/docs/deployment-protection)[Next

SAML SSO](/docs/saml)

Was this helpful?
