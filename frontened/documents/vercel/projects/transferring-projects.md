Menu

# Transferring a project

Last updated February 26, 2026

You can transfer projects between your Vercel teams with zero downtime and no workflow interruptions.

You must be an [owner](/docs/rbac/access-roles#owner-role) of the team you're transferring from, and a member of the team you're transferring to. For example, you can transfer a project from your Hobby team to a Pro team, and vice versa if you're an owner on the Pro team.

During the transfer, all of the project's dependencies will be moved or copied over to the new Vercel team namespace. To learn more about what is transferred, see the [What is transferred?](#what-is-transferred) and [What is not transferred?](#what-is-not-transferred).

## [Starting a transfer](#starting-a-transfer)

1. To begin transferring a project, choose a project from the Vercel [dashboard](/dashboard).
2. Then, open Settings in the sidebar from the top menu to go to the project settings.
3. From the left sidebar, click General and scroll down to the bottom of the page, where you'll see the Transfer Project section. Click Transfer to begin the transferring flow:

![The Transfer Project section.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Ftransfer-project-light.png&w=1920&q=75)![The Transfer Project section.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Ftransfer-project-dark.png&w=1920&q=75)

The Transfer Project section.

4. Select the Vercel team you wish to transfer the project to. You can also choose to create a new team:

![Choosing a team to transfer the project to.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Ftransfer-project-model-light.png&w=1080&q=75)![Choosing a team to transfer the project to.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Ftransfer-project-model-dark.png&w=1080&q=75)

Choosing a team to transfer the project to.

If the target Vercel team does not have a valid payment method, you must add
one before transferring your project to avoid any interruption in service.

5. You'll see a list of any domains, aliases, and environment variables that will be transferred. You can also choose a new name for your project. By default, the existing name is re-used. You must provide a new name if the target Vercel team already has a project with the same name:

The original project **will be hidden** when initiating the transfer,
but you will not experience any downtime.

![Reviewing the project data that will be transferred to the target Vercel team, and choosing a new project name.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fproject-transfer-confirm-light.png&w=1080&q=75)![Reviewing the project data that will be transferred to the target Vercel team, and choosing a new project name.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fproject-transfer-confirm-dark.png&w=1080&q=75)

Reviewing the project data that will be transferred to the target Vercel team, and choosing a new project name.

6. After reviewing the information, click Transfer to initiate the project transfer.
7. While the transfer is in progress, Vercel will redirect you to the newly created project on the target Vercel team with in-progress indicators. When a transfer is in progress, you may not create new deployments,
   edit project settings or delete that project.

Transferring a project may take between 10 seconds and 10 minutes, depending on the amount of associated data. When the transfer completes, the transfer's initiator and the target team's owners are notified by email. You can now use your project as normal.

## [What is transferred?](#what-is-transferred)

* [Deployments](/docs/deployments)
* [Environment variables](/docs/environment-variables) are copied to the target team, except for those defined in the [`env`](/docs/project-configuration#env) and [`build.env`](/docs/configuration#project/build-env) configurations of `vercel.json`.
* The project's configuration details
* [Domains and Aliases](#transferring-domains)
* Administrators
* Project name
* Builds
* Git repository link
* Security settings
* [Cron Jobs](/docs/cron-jobs)
* [Preview Comments](/docs/comments)
* [Web Analytics](/docs/analytics)
* [Speed Insights](/docs/speed-insights)
* [Function Region](/docs/regions#compute-defaults)
* [Directory listing setting](/docs/directory-listing)

Once you transfer a project from a Hobby team to a Pro or Enterprise team, you may choose to enable additional paid features on the target team to match the features of the origin team. These include:

* [Concurrent Builds](/docs/deployments/concurrent-builds)
* [Preview Deployment Suffix](/docs/deployments/generated-urls#preview-deployment-suffix)
* [Password Protection](/docs/deployments/deployment-protection#password-protection)

## [What is not transferred?](#what-is-not-transferred)

* [Integrations](/docs/integrations): Those associated with your project must be added again after the transfer is complete. To move the integration installation itself to another team, including its resources and prepayment balances, see [Transferring an Integration](/docs/integrations/install-an-integration/transferring-an-integration).
* [Edge Configs](/docs/edge-config) have [a separate transfer mechanism](/docs/storage#transferring-your-store)
* Usage is reset on transfer
* The Active Branches section under Project will be empty
* Environment variables defined in the [`env`](/docs/project-configuration#env) and [`build.env`](/docs/configuration#project/build-env) configurations of `vercel.json` must be [migrated to Environment Variables](/kb/guide/how-do-i-migrate-away-from-vercel-json-env-and-build-env) in the Project Settings or configured again on the target team after the transfer is complete
* [Monitoring](/docs/observability/monitoring) data is not transferred
* Log data ([Runtime](/docs/runtime-logs) + [build](/docs/deployments/logs) time)
* [Custom Log Drains](/docs/drains) are not transferred
* [Vercel Blob](/docs/storage/vercel-blob) has [a separate transfer mechanism](/docs/storage#transferring-your-store)
* [Secure Compute](/docs/networking/secure-compute) and [Static IPs](/docs/networking/static-ips): You must disconnect your project from all Secure Compute networks or Static IPs and configure them again in the target team

## [Transferring domains](#transferring-domains)

Project [domains](/docs/domains) will automatically be transferred to the target team by delegating access to domains.

For example, if your project uses the domain `example.com`, the domain will be [moved](/docs/projects/custom-domains#moving-domains) to the target team. The target team will be billed as the primary owner of the domain if it was purchased through Vercel.

If your project uses the domain `blog.example.com`, the domain `blog.example.com` will be delegated to the target team, but the root domain `example.com` will remain on the origin Vercel scope. The origin Vercel scope will remain the primary owner of the domain, and will be billed as usual if the domain was purchased through Vercel.

If your project uses a [Wildcard domain](/docs/domains/working-with-domains#wildcard-domain) like `*.example.com`, the Wildcard domain will be delegated to the target team, but the root domain `example.com` will remain on the origin Vercel scope.

## [Additional features](#additional-features)

This only applies when transferring away from a team.

When transferring between teams, you may be asked whether you want to add additional features to the target team to match the origin team's features. This ensures an uninterrupted workflow and a consistent experience between teams.
Adding these features is optional.

---

[Previous

Managing projects](/docs/projects/managing-projects)[Next

Domains](/docs/domains)

Was this helpful?
