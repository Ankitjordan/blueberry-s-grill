Menu

# Assigning a domain to a Git branch

Last updated February 27, 2026

Every commit pushed to the [Production Branch](/docs/git#production-branch) of your [connected Git repository](/docs/git) will be assigned the domains configured in your project.

To automatically assign a domain to a different branch:

1. From the [dashboard](/dashboard), pick the project to which you would like to assign your domain and open Settings in the sidebar.
2. Click on [Domains](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdomains&title=Go+to+Domains+Settings).
3. Select the Edit dropdown item for the domain to which you would like to assign your branch.
4. Select Preview from the Connect to an environment section
5. In the Git Branch field, enter the branch name to which you would like to assign the domain:

![Assign domain to branch modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdomains%2Fassign-domain-to-git-branch-light.png&w=1200&q=75)![Assign domain to branch modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdomains%2Fassign-domain-to-git-branch-dark.png&w=1200&q=75)

Assign domain to branch modal.

Pro and Enterprise teams can also set branch tracking for their [custom environments](/docs/deployments/environments#custom-environments).

If you prefer to do this using the Vercel REST API instead, you can use the
["Update a project
domain"](/docs/rest-api/reference/endpoints/projects/update-a-project-domain)
PATCH endpoint.

---

[Previous

Adding a Domain to an Environment](/docs/domains/working-with-domains/add-a-domain-to-environment)[Next

Claiming Ownership](/docs/domains/working-with-domains/claim-domain-ownership)

Was this helpful?
