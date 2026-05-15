Menu

# Accessing Deployments through Generated URLs

Last updated September 24, 2025

When you create a new [deployment](/docs/deployments) in either a preview or production [environment](/docs/deployments/environments), Vercel will automatically generate a unique URL in order for you to access that deployment. You can use this URL to access a particular deployment for as long as your set [deployment retention policy](/docs/security/deployment-retention#setting-a-deployment-retention-policy) allows.

This URL is publicly accessible by default, but you can configure it to be private using [deployment protection](/docs/security/deployment-protection).

The make up of the URL depends on how it was created and if it relates to a branch of a specific commit. To learn more, see [URL Components](/docs/deployments/generated-urls#url-components).

## [Viewing generated URLs](#viewing-generated-urls)

You can access these automatically generated URLs in the following ways:

* On the command line when the build has completed.
* When using Git, you can access either a URL for the branch or for each commit. To learn more, see [Generated from Git](#generated-from-git).
* Under the Project's Overview and Deployments tabs, as shown below:

![Generated URL for a production deployment.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgenerated-url-prod-light.png&w=3840&q=75)![Generated URL for a production deployment.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgenerated-url-prod-dark.png&w=3840&q=75)

Generated URL for a production deployment.

## [URL Components](#url-components)

Generated URLs are comprised of several different pieces of data associated with the underlying deployment. Varying combinations of the following information may be used to generate a URL:

| Value | Description | Created when |
| --- | --- | --- |
| `<project-name>` | The name of the [Project](/docs/projects/overview) that contains the deployment | Git branch, Git commit, CLI |
| `<unique-hash>` | 9 randomly generated numbers and letters | Git commit |
| `<scope-slug>` | The slug (not the name) of the account or [team](/docs/accounts/create-a-team) that contains the project/deployment | Git branch, Git commit, CLI |
| `<branch-name>` | The name of the Git branch for which the deployment was created | Git branch |

### [Generated from Git](#generated-from-git)

When are working with Git, Vercel will automatically generate a URL for the following:

* The commit: This URL will always show you a preview of changes from that specific commit. This is useful for sharing a specific version of your project at a point in time.

  url-structure

  ```
  <project-name>-<unique-hash>-<scope-slug>.vercel.app
  ```
* The branch: The URL generated from a Git branch will always show you the most recent changes for the branch and won't change if you push new commits to the branch. For this reason, this format is ideal for sharing with team members during your review process. The URL has the following structure:

  url-structure

  ```
  <project-name>-git-<branch-name>-<scope-slug>.vercel.app
  ```

To access the commit URL, click the View deployment button from your pull request. To access the branch URL, click the Visit Preview button from the pull request comment.

![Viewing deployment URLs in a pull request on GitHub.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgit-link-light.png&w=1920&q=75)![Viewing deployment URLs in a pull request on GitHub.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fgit-link-dark.png&w=1920&q=75)

Viewing deployment URLs in a pull request on GitHub.

### [Generated with Vercel CLI](#generated-with-vercel-cli)

To access the URL for a successful deployment from Vercel CLI, you can save the [standard output of the deploy command](/docs/cli/deploy#standard-output-usage). The generated URL will have the following structure:

url-structure

```
<project-name>-<scope-slug>.vercel.app;
```

Once you deploy to the production environment, the above URL will point to the
production deployment.

If the deployment is created on a [Team](/docs/accounts/create-a-team), you can also use the URL specific to the deployment's author. It will have the following structure:

url-structure

```
<project-name>-<author-name>-<scope-slug>.vercel.app;
```

This allows you to stay on top of the latest change deployed by a particular [member](/docs/accounts/team-members-and-roles) of a team within a specific project.

### [Truncation](#truncation)

If more than 63 characters are present before the `.vercel.app` suffix (or the respective [Preview Deployment Suffix](#preview-deployment-suffix)) for a generated URL, they will be truncated.

### [Anti-phishing protection](#anti-phishing-protection)

If your `<project-name>` resembles a regular web domain, it may be shortened to avoid that resemblance. For example, `www-company-com` would be changed to just `company`. This is done to prevent an accidental trigger of anti-phishing protection built into web browsers that protect the user from visiting domains that look roughly like other domains they visit.

## [Preview Deployment Suffix](#preview-deployment-suffix)

Preview Deployment Suffix is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Preview Deployment Suffixes allow you to customize the URL of a [preview deployment](/docs/deployments/environments#preview-environment-pre-production) by replacing the default `vercel.app` suffix with a [custom domain](/docs/domains/add-a-domain) of your choice.

To learn more, see the [Preview Deployment Suffix](/docs/deployments/preview-deployment-suffix) documentation.

---

[Previous

Environments](/docs/deployments/environments)[Next

Managing Deployments](/docs/deployments/managing-deployments)

Was this helpful?
