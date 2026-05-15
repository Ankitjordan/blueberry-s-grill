Menu

# Accessing Build Logs

Last updated September 24, 2025

When you deploy your website to Vercel, the platform generates build logs that show the deployment progress. The build logs contain information about:

* The version of the build tools
* Warnings or errors encountered during the build process
* Details about the files and dependencies that were installed, compiled, or built during the deployment

Build logs are particularly useful for debugging issues that may arise during deployment. If a deployment fails, these can help you identify the root cause of the issue.

To access build logs, click the Build Logs button from the production deployment tile in the projects overview page.

![View build logs for your Vercel deployments.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Flogs%2Fbuttons-light.png&w=3840&q=75)![View build logs for your Vercel deployments.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Flogs%2Fbuttons-dark.png&w=3840&q=75)

View build logs for your Vercel deployments.

## [How build logs work?](#how-build-logs-work)

Build logs are generated at build time for all [Deployments](/docs/deployments). The logs are similar to your framework's [Build Command](/docs/deployments/configure-a-build#build-command) output, with a few minor additions from the Vercel build system. Once a build is complete, no new logs will be recorded.

In addition to the list of build actions, you can also find errors or warnings. These are highlighted with different colors, such as yellow for warnings and red for errors. This color coding makes it flexible to investigate why your build failed and which part of your website is affected. Build logs are stored indefinitely for each deployment.

Build logs will automatically be truncated, if the total size reaches over
4MB.

### [Link to build logs](#link-to-build-logs)

If you click on the timestamp to the left of the log entry, you get a link to that log entry. This will highlight the selected log and append the line number to the URL as an anchor (`#L6`). You can then share this link with other team members to point them to a specific line in the log.

You can select multiple lines by holding the `Shift` key and clicking the timestamps. This will create a link for the content between the first and last lines (`#L6-L9`).

The log link is only accessible to [team members](/docs/rbac/managing-team-members). Anyone who is not a member or has a valid Vercel account cannot access this link.

![Create a link to a log entry.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Flogs%2Flog-link-light.png&w=3840&q=75)![Create a link to a log entry.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Flogs%2Flog-link-dark.png&w=3840&q=75)

Create a link to a log entry.

The link to build logs feature works for logs that are up to 2000 lines long.

## [Save logs](#save-logs)

You can use [Drains](/docs/drains) to export, store, and analyze your build logs. Log Drains configuration can be accessed through the Vercel dashboard or through one of our [Logging integrations](/integrations#logging).

---

[Previous

Troubleshoot Build Errors](/docs/deployments/troubleshoot-a-build)[Next

Claim Deployments](/docs/deployments/claim-deployments)

Was this helpful?
