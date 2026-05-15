Menu

# Managing projects

Last updated February 26, 2026

You can manage your project on Vercel in your project's dashboard. To learn more, see [Project Settings](/docs/project-configuration/project-settings) and [Managing deployments](/docs/deployments/managing-deployments).

## [Creating a project](#creating-a-project)

To create a project, you need an [Owner](/docs/rbac/access-roles#owner-role) or [Member](/docs/rbac/access-roles#member-role) role. If you have a [Developer](/docs/rbac/access-roles#developer-role) role, you'll need the [Create Project](/docs/rbac/access-roles/extended-permissions#create-project) extended permission. For more information, see [Access Roles](/docs/rbac/access-roles).

To create a [new](/new) project:

1. On the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), ensure you have selected the correct team from the team switcher.
2. Click the Add New… drop-down button and select Project:

![ Creating a new project from the Vercel dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fadd-new-project-light.png&w=1920&q=75)![ Creating a new project from the Vercel dashboard.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fadd-new-project-dark.png&w=1920&q=75)

Creating a new project from the Vercel dashboard.

3. You can either [import from an existing Git repository](/docs/git) or use one of our [templates](/templates). For more information, see our [Getting Started with Vercel](/docs/getting-started-with-vercel/projects-deployments).
4. If you choose to import from a Git repository, you'll be prompted to select the repository you want to deploy.
5. Configure your project settings, such as the name, [framework](/docs/frameworks), [environment variables](/docs/environment-variables), and [build and output settings](/docs/deployments/configure-a-build#configuring-a-build).
6. If you're importing from a monorepo, select the Edit button to select the project from the repository you want to deploy. For more information, see [Monorepos](/docs/monorepos#add-a-monorepo-through-the-vercel-dashboard).

To create an Authorization Bearer token, see the [access token](/docs/rest-api/reference/welcome#creating-an-access-token) section of the API documentation.

cURL

```
curl --request POST \
  --url https://api.vercel.com/v11/projects \
  --header "Authorization: Bearer $VERCEL_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "environmentVariables": [
      {
        "key": "<env-key>",
        "target": "production",
        "gitBranch": "<git-branch>",
        "type": "system",
        "value": "<env-value>"
      }
    ],
    "framework": "<framework>",
    "gitRepository": {
      "repo": "<repo-url>",
      "type": "github"
    },
    "installCommand": "<install-command>",
    "name": "<project-name>",
    "rootDirectory": "<root-directory>"
  }'
```

To create an Authorization Bearer token, see the [access token](/docs/rest-api/reference/welcome#creating-an-access-token) section of the API documentation.

createProject

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: '<YOUR_BEARER_TOKEN_HERE>',
});

async function run() {
  const result = await vercel.projects.createProject({
    requestBody: {
      name: '<project-name>',
      environmentVariables: [
        {
          key: '<env-key>',
          target: 'production',
          gitBranch: '<git-branch>',
          type: 'system',
          value: '<env-value>',
        },
      ],
      framework: '<framework>',
      gitRepository: {
        repo: '<repo-url>',
        type: 'github',
      },
      installCommand: '<install-command>',
      name: '<project-name>',
      rootDirectory: '<root-directory>',
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

## [Pausing a project](#pausing-a-project)

You can choose to temporarily pause a project to ensure that you do not incur usage from [metered resources](/docs/limits#additional-resources) on your production deployment.

### [Pausing a project when you reach your spend amount](#pausing-a-project-when-you-reach-your-spend-amount)

To automatically pause your projects when you reach your spend amount:

1. On the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), ensure you have selected the correct team from the team switcher.
2. Open Settings in the sidebar.
3. In the Spend Management section, select the Pause all production deployments option. Then follow the steps to confirm the action.

To learn more, see the [Spend Management documentation](/docs/spend-management#pausing-projects).

### [Pause a project using the REST API](#pause-a-project-using-the-rest-api)

To pause a project manually or with a webhook you can use the [REST API](/docs/rest-api/reference/endpoints/projects/pause-a-project):

1. Ensure you have [access token](/docs/rest-api#creating-an-access-token) scoped to your team to authenticate the API.
2. Create a webhook that calls the pause project [endpoint](/docs/rest-api/reference/endpoints/projects/pause-a-project):
   * You'll need to pass a path parameter of the [Project ID](/docs/projects/overview#project-id) and query string of [Team ID](/docs/accounts#find-your-team-id):

     request

     ```
     https://api.vercel.com/v1/projects/<prj_ID>/pause?teamId=<team_ID>
     ```
   * Use your access token as the bearer token, to enable you to carry out actions through the API on behalf of your team.
   * Ensure that your `Content-Type` header is set to `application/json`.

When you pause your project, any users accessing your production deployment will see a [503 DEPLOYMENT\_PAUSED error](/docs/errors/DEPLOYMENT_PAUSED).

cURL

```
curl --request POST \
  --url "https://api.vercel.com/v1/projects/<project-id>/pause?teamId=<team-id>&slug=<team-slug>" \
  --header "Authorization: Bearer $VERCEL_TOKEN"
```

You can also manually make a POST request to the [pause project
endpoint](/docs/rest-api/reference/endpoints/projects/pause-a-project) without
using webhook.

### [Resuming a project](#resuming-a-project)

Resuming a project can either be done through the [REST API](/docs/rest-api/reference/endpoints/projects/unpause-a-project) or your project settings:

1. Go to your team's [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and select your project. When you select it, you should notice it has a paused icon in the team switcher.
2. Open Settings in the sidebar.
3. You'll be presented with a banner notifying you that your project is paused and your production deployment is unavailable.
4. Select the Resume Service button.
5. In the dialog that appears, confirm that you want to resume service of your project's production deployment by selecting the Resume button.

Your production deployment will resume service within a few minutes. You do not need to redeploy it.

## [Deleting a project](#deleting-a-project)

Deleting your project will also delete the deployments, domains, environment variables, and settings within it. If you have any deployments that are assigned to a custom domain and do not want them to be removed, make sure to deploy and assign them to the custom domain under a different project first.

To delete a project:

1. On the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), ensure you have selected the correct team from the team switcher and select the project you want to delete.
2. Open Settings in the sidebar.
3. At the bottom of the General page, you’ll see the Delete Project section. Click the Delete button.

![The Delete Project section.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fdelete-project-light.png&w=1920&q=75)![The Delete Project section.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fdelete-project-dark.png&w=1920&q=75)

The Delete Project section.

4. In the Delete Project dialog, confirm that you'd like to delete the project by entering the project name and prompt. Then, click the Continue button.

---

[Previous

Deploy from CLI](/docs/projects/deploy-from-cli)[Next

Transferring a project](/docs/projects/transferring-projects)

Was this helpful?
