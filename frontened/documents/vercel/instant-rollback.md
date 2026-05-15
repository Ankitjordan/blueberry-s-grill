Title: Performing an Instant Rollback on a Deployment

URL Source: https://vercel.com/docs/instant-rollback

Markdown Content:
Vercel provides Instant Rollback as a way to quickly revert to a previous production deployment. This can be useful in situations that require a swift recovery from production incidents, like breaking changes or bugs. It's important to keep in mind that during a rollback:

*   Vercel treats the rolled-back deployment as a restored version of a previous deployment
*   The configuration used for the rolled-back deployment may become stale
*   Vercel won't update environment variables if you change them in the project settings and will roll back to a previous build
*   If the project uses [cron jobs](https://vercel.com/docs/cron-jobs), they will be reverted to the state of the rolled back deployment

For teams on a Pro or Enterprise plan, all deployments previously aliased to a production domain are [eligible to roll back](https://vercel.com/docs/instant-rollback#eligible-deployments). Hobby users can roll back to the immediately previous deployment.

To initiate an Instant Rollback from the Vercel dashboard:

1.   On the project's overview page, you will see the Production Deployment tile. From there, click Instant Rollback.

![Image 1: Access Instant Rollback from the production deployment tile.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Finstant-rollback.png&w=3840&q=75)![Image 2: Access Instant Rollback from the production deployment tile.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Finstant-rollback-dark.png&w=3840&q=75)

Access Instant Rollback from the production deployment tile.

2.   After selecting Instant Rollback, you'll see an dialog that displays your current production deployment and the eligible deployments that you can roll back to.

If you're on the Pro or Enterprise plans, you can also click the Choose another deployment button to display a list of all [eligible](https://vercel.com/docs/instant-rollback#eligible-deployments) deployments.

Select the deployment that you'd like to roll back to and click Continue.

![Image 3: Dialog showing the current and previous deployments.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-process.png&w=1080&q=75)![Image 4: Dialog showing the current and previous deployments.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-process-dark.png&w=1080&q=75)

Dialog showing the current and previous deployments.

3.   Once you've selected the deployment to roll back to, verify the roll back information:

    *   The names of the domains and sub-domains that will be rolled back
    *   There are no change in Environment Variables, and they will remain in their original state
    *   A reminder about the changing behavior of external APIs, databases, and CMSes used in the current or previous deployments

4.   Once you have verified the details, click the Confirm Rollback button. At this point, you'll get confirmation details about the successful rollback.

![Image 5: Message for a successful roll back session.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-success.png&w=828&q=75)![Image 6: Message for a successful roll back session.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-success-dark.png&w=828&q=75)

Message for a successful roll back session.

If you have custom aliases, ensure the domains listed above are correct. The rolled-back deployment does not include custom aliases since these are not a part of your project’s domain settings. Custom aliases will only be included if they were present on the previous production deployment. 
5.   The rollback happens instantaneously. Vercel points your domains back to the selected deployment, and the production deployment tile highlights the canceled and rolled-back commits.

After a rollback, Vercel turns off auto-assignment of production domains. This means new pushes to your production branch won't replace the rolled-back deployment. To restore normal deployment behavior, see [Undo a rollback](https://vercel.com/docs/instant-rollback#undo-a-rollback).

![Image 7: Production tile showing details about the rolled-back deployment.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-on-production-tile.png&w=3840&q=75)![Image 8: Production tile showing details about the rolled-back deployment.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-on-production-tile-dark.png&w=3840&q=75)

Production tile showing details about the rolled-back deployment.

*   You cannot run parallel roll backs on the same project
*   Only one deployment can be rolled back at a time for every project. However, a rolled back deployment stays disabled in your deployment list and can be accessed and re-reverted whenever you want

You can also roll back from the main Deployments section in your dashboard. Filtering the deployments list by `main` is recommended to view a list of [eligible roll back deployments](https://vercel.com/docs/instant-rollback#eligible-deployments) as this list all your current and previous deployments promoted to production.

Click the vertical ellipses (⋮) next to the deployment row and select the Instant Rollback option from the context menu.

![Image 9: Perform instant roll back on any of your main branch's deployments.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-from-deploys-list.png&w=3840&q=75)![Image 10: Perform instant roll back on any of your main branch's deployments.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Frollback-from-deploys-list-dark.png&w=3840&q=75)

Perform instant roll back on any of your main branch's deployments.

After a rollback, Vercel turns off [auto-assignment of production domains](https://vercel.com/docs/deployments/promoting-a-deployment#staging-and-promoting-a-production-deployment). This means new pushes to your production branch won't go live automatically. To restore normal deployment behavior, you need to undo the rollback by promoting a different deployment.

When your project is in a rolled-back state, an Undo Rollback button appears on the production deployment tile:

1.   On your project's overview page, click the Undo Rollback button on the production deployment tile
2.   In the dialog, select the deployment you'd like to promote
3.   Click Confirm to promote the selected deployment

This promotes the selected deployment to production and re-enables auto-assignment of production domains. New pushes to your production branch will go live automatically again.

To undo a rollback from the command line, promote a deployment with [`vercel promote`](https://vercel.com/docs/cli/promote):

This has the same effect as undoing from the dashboard: it promotes the specified deployment and restores auto-assignment of production domains.

*   Hobby plan: On the hobby plan you can roll back to the previous deployment
*   Pro and Enterprise plan: Owners and Members on these plans can roll back to any [eligible deployment](https://vercel.com/docs/instant-rollback#eligible-deployments).

Deployments previously aliased to a production domain are eligible for Instant Rollback. Deployments that have never been aliased to production a domain, e.g., most [preview deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production), are not eligible.

To compare the manual promotion options, see [Manually promoting to Production](https://vercel.com/docs/deployments/promoting-a-deployment).
