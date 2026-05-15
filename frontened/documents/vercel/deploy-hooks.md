Deploy Hooks

# Creating & Triggering Deploy Hooks

Last updated February 17, 2026

Deploy Hooks allow you to create URLs that accept HTTP `POST` requests in order to trigger deployments and re-run the [Build Step](/docs/deployments/configure-a-build). These URLs are uniquely linked to your project, repository, and branch, so there is no need to use any authentication mechanism or provide any payload to the `POST` request.

This feature allows you to integrate Vercel deployments with other systems. For example, you can set up:

* Automatic deployments on content changes from a Headless CMS
* Scheduled deployments by configuring third-party cron job services to trigger the Deploy Hook
* Forced deployments from the command line

## [Creating a Deploy Hook](#creating-a-deploy-hook)

To create a Deploy Hook for your project, make sure your project is [connected to a Git repository](/docs/projects/overview#git).

Once your project is connected, navigate to its Settings page and then select the Git menu item.

In the "Deploy Hooks" section, choose a name for your Deploy Hook and select the branch that will be deployed when the generated URL is requested.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgit%2Fdeploy-hooks-light.png&w=1920&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgit%2Fdeploy-hooks-dark.png&w=1920&q=75)

Creating a new Deploy Hook.

Use a name that clearly identifies the Deploy Hook so you can tell when it
triggers a deployment. Create only one Deploy Hook per branch unless you're
using multiple data sources.

After submitting the form, you will see a URL that you can copy and use.

## [Triggering a Deploy Hook](#triggering-a-deploy-hook)

To trigger a Deploy Hook, send a GET or POST request to the provided URL.

Deploy Hooks will not be triggered if you have the `github.enabled = false`
[configuration](/docs/project-configuration/git-configuration#github.enabled)
present in your `vercel.json` file.

Here's an example request and response you can use for testing:

#### [Example Request](#example-request)

example-request

```
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_98g22o5YUFVHlKOzj9vKPTyN2SDG/tKybBxqhQs
```

#### [Example Response](#example-response)

example-response

```
{
  "job": {
    "id": "okzCd50AIap1O31g0gne",
    "state": "PENDING",
    "createdAt": 1662825789999
  }
}
```

You do not need to add an authorization header. See [Security](#security) to
learn more.

After sending a request, you can see that it triggered a deployment on your project dashboard.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgit%2Fdeploy-hook-deployed-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgit%2Fdeploy-hook-deployed-dark.png&w=3840&q=75)

Deployments triggered by a Deploy Hook are marked in the list.

## [Security](#security)

When you create a Deploy Hook, Vercel generates a unique identifier in the URL. This allows anyone with the URL to deploy your project, so treat it with the same security as you would any other token or password.

If you believe your Deploy Hook URL has been compromised, you can revoke it and create a new one.

## [Build Cache](#build-cache)

Builds triggered by a Deploy Hook are automatically provided with
an appropriate [Build Cache](/docs/deployments/troubleshoot-a-build#what-is-cached) by default, if it exists.

Caching helps speed up the [Build Step](/docs/deployments/configure-a-build), so we encourage you to keep the default behavior.
However, if you explicitly want to opt out of using a Build Cache, you can disable it by
appending `?buildCache=false` to the Deploy Hook URL.

Here is an example request that explicitly disables the Build Cache:

example-request

```
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_98g22o5YUFVHlKOzj9vKPTyN2SDG/tKybBxqhQs?buildCache=false
```

Deploy Hooks created before May 11th, 2021 do not have the Build Cache enabled
by default. To change it, you can either explicitly append `?buildCache=true`
to the Deploy Hook URL, or replace your existing Deploy Hook with a newly
created one.

## [Other Optimizations](#other-optimizations)

If you send multiple requests to deploy the same version of your project,
previous deployments for the same Deploy Hook will be canceled to reduce build times.

## [Limits](#limits)

* Hobby and Pro accounts have a limit of 5 deploy hooks per project. Enterprise accounts have a limit of 10 deploy hooks per project.

## [Troubleshooting](#troubleshooting)

If your deploy hook fails to create a deployment, check the status check on the commit associated with the deploy hook to identify any failures. See [Troubleshooting project collaboration](/docs/deployments/troubleshoot-project-collaboration) for more information.

---

[Previous

Builds](/docs/builds)[Next

Deployment Checks](/docs/deployment-checks)

Was this helpful?
