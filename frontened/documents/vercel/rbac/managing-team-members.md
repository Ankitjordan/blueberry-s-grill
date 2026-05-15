Menu

# Managing Team Members

Last updated February 27, 2026

As the team owner, you have the ability to manage your team's composition and the roles of its members, controlling the actions they can perform. These role assignments, governed by Role-Based Access Control (RBAC) permissions, define the access level each member has across all projects within the team's scope. Details on the various roles and the permissions they entail can be found in the [Access Roles section](/docs/rbac/access-roles).

## [Adding team members and assigning roles](#adding-team-members-and-assigning-roles)

Inviting new team members is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

1. From the dashboard, select your team from the team switcher
2. Open Settings in the sidebar and go to [Members](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fmembers&title=Go+to+Members+settings)
3. Enter the email address of the person you would like to invite, assign their [role](/docs/rbac/access-roles), and select the Invite button. You can invite multiple people at once using the Add more button:

![Inviting new members to your team.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Frbac-settings-members-light.png&w=1920&q=75)![Inviting new members to your team.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Frbac-settings-members-dark.png&w=1920&q=75)

Inviting new members to your team.

4. By default only the team level roles are visible in the dropdown. If you choose to assign the [contributor role](/docs/rbac/access-roles#contributor-role) to the new member, a second dropdown will be accessible by selecting the Assign Project Roles button. You can then select the project, and their role on that project you want to assign the contributor to:

Assigning project roles is available on [Enterprise plans](/docs/plans/enterprise)

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

![Assigning a contributor role to a new member.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Frbac-settings-assign-contributor-light.png&w=1920&q=75)![Assigning a contributor role to a new member.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Frbac-settings-assign-contributor-dark.png&w=1920&q=75)

Assigning a contributor role to a new member.

5. You can view all pending invites in the Pending Invitations section in the sidebar. When you issue an invite the recipient is not automatically added to the team. They have 7 days to accept the invite (30 days for SAML enforced teams) and join the team. After 7 days (or 30 days for SAML enforced teams), the invite will show as expired in the Pending Invitations section in the sidebar. Once a member has accepted an invitation to the team, they'll be displayed as team members with their assigned role.
6. Once a member has been accepted onto the team, you can edit their role using the Manage Role button located alongside their assigned role in the Team Members section in the sidebar.

![Changing a member's role.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Fproject-rbac-settings-manage-team-role-light.png&w=1080&q=75)![Changing a member's role.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Fproject-rbac-settings-manage-team-role-dark.png&w=1080&q=75)

Changing a member's role.

## [Assigning project roles](#assigning-project-roles)

Assigning project roles is available on [Enterprise plans](/docs/plans/enterprise)

Those with the [owner](/docs/rbac/access-roles#owner-role) role can access this feature

Team [owners](/docs/rbac/access-roles#owner-role) can assign project roles to team members with the [contributor role](/docs/rbac/access-roles#contributor-role), enabling control over their project-related actions. You can assign these roles during team invitations or to existing members.

1. Ensure you have selected your team from the team switcher
2. Select the project you want to assign a member to
3. Select Access from the left navigation, then inside the Project Access section select the team members email from the dropdown
4. Select the role you want to assign to the member on the project

![Assigning a project role to a member.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Frbac-project-settings-assign-role-light.png&w=3840&q=75)![Assigning a project role to a member.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Frbac%2Frbac-project-settings-assign-role-dark.png&w=3840&q=75)

Assigning a project role to a member.

## [Delete a member](#delete-a-member)

Team owners can delete members from a team. You can also remove yourself from a team.

1. Ensure you have selected your team from the team switcher
2. Open Settings in the sidebar and go to [Members](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fmembers&title=Go+to+Members+settings)
3. Next to the name of the person you'd like to remove, select the ellipses (…) and then select Remove from Team from the menu

Vercel is also SCIM compliant. This means that if you are using SAML SSO, de-provisioning from the third-party provider will also remove the member from Vercel.

---

[Previous

Access Groups](/docs/rbac/access-groups)[Next

Two-factor Enforcement](/docs/two-factor-enforcement)

Was this helpful?
