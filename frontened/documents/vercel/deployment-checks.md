Deployment Checks

# Deployment Checks

Last updated March 10, 2026

Deployment Checks are conditions that must be met before promoting a production build to your production environment.

When you add Deployment Checks to a project, Vercel will hold each production deployment until all required checks pass before assigning it to your custom production domains.

## [Understanding Deployment Checks](#understanding-deployment-checks)

Decoupling production builds and releases allows teams to move faster with higher confidence at scale.

* Feature branches are worked on in isolation and merged to the default branch once the code passes required checks for merging.
* Production deployments are created after new code is merged, but must pass a set of required checks before being released to end users.

By default, Vercel automatically promotes your most recent, successful production build to your custom production domains. This creates the following release workflow:

1. Push or merge code to your default branch.
2. Vercel creates a production build.
3. Once the build is ready, release the build to production.

At scale, this can mean the set of code that is tested before merging is not the same as the code that would be released to end users. We want to maintain the safety of releases, while allowing developers and [agents](/docs/agents) to continue authoring and merging code at high velocity.

With Deployment Checks, you introduce a new step that ensures the safety of the production deployment before it's released, with the following workflow:

1. Push or merge code to your default branch.
2. Vercel creates a production deployment.
3. Run safety checks to ensure that the build is safe for release.
4. Once Deployment Checks are passing, release the build to production.

## [Types of Deployment Checks](#types-of-deployment-checks)

You can add Deployment Checks from multiple sources:

* Native Deployment Checks (Vercel): Vercel runs lint and typecheck jobs directly on your code. No external CI setup required.

* GitHub Checks: Import GitHub Actions workflow results as Deployment Checks. Vercel reads commit statuses and check run results to determine if a deployment should be promoted.
* Integration Checks: Third-party integrations from the [Vercel Marketplace](/marketplace) can provide checks for testing, monitoring, and observability.

## [Native Deployment Checks](#native-deployment-checks)

Native Deployment Checks let Vercel run linting and type checking jobs directly on your code after each deployment, without requiring external CI configuration. Vercel clones your repository, installs dependencies, and runs the corresponding script from your `package.json`.

### [Available checks](#available-checks)

| Check | Script | Description |
| --- | --- | --- |
| Lint | `lint` | Catches code style issues and potential errors |
| Typecheck | `typecheck`, `type-check`, or `check-types` | Verifies type safety across your codebase |

### [Requirements](#requirements)

* Your project must have a `package.json` with a matching script for each check you enable. If no matching script is found, the check is automatically skipped.
* Supported package managers: npm, pnpm, yarn, and bun (detected from your lock file).

### [Adding Native Deployment Checks](#adding-native-deployment-checks)

1. ### [Navigate to Deployment Checks settings](#navigate-to-deployment-checks-settings)

   Visit [your project's Deployment Checks settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment%23deployment-checks) and select Add Checks.
2. ### [Select Vercel as the provider](#select-vercel-as-the-provider)

   In the provider selection step, choose Vercel, then select Next.
3. ### [Choose which checks to enable](#choose-which-checks-to-enable)

   Select Lint, Typecheck, or both. Each check corresponds to a script in your `package.json`. Then select Add.
4. ### [Checks run on your next deployment](#checks-run-on-your-next-deployment)

   After adding, the selected checks will run on each new deployment. You can view check status, logs, and results directly in the deployment detail view.

### [Configuring environments](#configuring-environments)

By default, Native Deployment Checks run on all deployment environments. You can configure which environments each check runs on (for example, production only, or both production and preview) from the check's settings in the Deployment Checks list.

### [Viewing logs](#viewing-logs)

When a Native Deployment Check runs, you can view its real-time logs directly in the deployment detail view by selecting the Logs button next to the check. This streams output from the lint or typecheck command as it runs.

## [GitHub Checks](#github-checks)

When a project is connected to GitHub using [Vercel for GitHub](/docs/git/vercel-for-github), Vercel can read the statuses of your commits and selected GitHub Action results. Using these statuses, Vercel can prevent production deployments from [promoting to production](/docs/deployments/promoting-a-deployment) until your checks have passed.

### [Adding GitHub Checks](#adding-github-checks)

1. ### [Ensure prerequisites are met](#ensure-prerequisites-are-met)

   1. Link your project to a GitHub repository using [Vercel for GitHub](/docs/git/vercel-for-github). You can verify this in your [project's Git settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fgit).
   2. Visit [your project's production environment settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fenvironments%2Fproduction) and ensure automatic aliasing for production is turned on.
2. ### [Select your Deployment Checks](#select-your-deployment-checks)

   Visit [your project's Deployment Checks settings](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment%23deployment-checks) and select Add Checks. Choose GitHub as the provider, then search for and select the GitHub Actions checks you want to require.
3. ### [Update workflows (if necessary)](#update-workflows-if-necessary)

   If using GitHub Actions with a [`repository_dispatch`](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#repository_dispatch) trigger, update your workflows to set a status for Vercel using the [`vercel/repository-dispatch/actions/status@v1`](https://github.com/vercel/repository-dispatch/actions/status) action. This ensures the commit that triggered the deployment is the one used to determine if the Deployment Checks are met.

   ```
   - name: 'Notify Vercel'
     uses: 'vercel/repository-dispatch/actions/status@v1'
     with:
       # The name of the check will be used to identify the check in the Deployment Checks settings and must be unique
       name: "Vercel - my-project: e2e-tests"
   ```

   If you are not using [`repository_dispatch`](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#repository_dispatch), you can still use the [`vercel/repository-dispatch/actions/status@v1`](https://github.com/vercel/repository-dispatch/actions/status), but it is not required and you can depend on the check directly.
4. ### [Create a new production deployment](#create-a-new-production-deployment)

   Deployment Checks appear as part of a production deployment's lifecycle. Production deployments will still be created, but will not be automatically assigned to your custom domains until all Deployment Checks are met.
5. ### [Run GitHub Actions to fulfill all Deployment Checks](#run-github-actions-to-fulfill-all-deployment-checks)

   To meet Deployment Checks, run their corresponding GitHub Actions.

   If you're using [`repository_dispatch`](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#repository_dispatch) to trigger a workflow in response to Vercel deployments, you must use the [`vercel.deployment.ready` event](/docs/git/vercel-for-github#repository-dispatch-events). This event triggers after the deployment is created, and before checks are run.
6. ### [Promote to production once all Deployment Checks are met](#promote-to-production-once-all-deployment-checks-are-met)

   Once all of the Deployment Checks have passed, the deployment is aliased to your production domain(s) automatically.

   For additional release protection, enable [Rolling Releases](/docs/rolling-releases) to ensure your deployment is fractionally released before promoting to everyone.

## [Bypassing Deployment Checks](#bypassing-deployment-checks)

You can bypass Deployment Checks by selecting [Force Promote](/docs/deployments/promoting-a-deployment) from the deployment details page.

## [Limitations](#limitations)

### [Native Deployment Checks](#native-deployment-checks)

* Native Deployment Checks only run if your project has a compatible script in `package.json`. If no matching script is found, the check is automatically skipped.
* The supported scripts are `lint` for lint checks, and `typecheck`, `type-check`, or `check-types` for typecheck.

### [GitHub Checks](#github-checks)

GitHub and GitHub Actions have edge cases with status reporting. These behaviors are matched in GitHub-backed Deployment Checks.

* To trigger a workflow in response to Vercel deployments using [`repository_dispatch`](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#repository_dispatch), use the [`vercel/repository-dispatch/actions/status@v1`](https://github.com/vercel/repository-dispatch/actions/status) action to set a status on the commit for Vercel Deployment Checks. This ensures the commit that triggered the deployment is the one used to determine if the Deployment Checks are met.
* GitHub uses the names of jobs to identify which checks are the same across instances. This means that:
  + Changing the name of a job requires updating your Deployment Checks to align with the names.
  + Each run of a GitHub Workflow should result in only one commit status. For example, when using [`repository_dispatch`](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#repository_dispatch), ensure the commit status includes the environment name to avoid writing to the same status for each of the triggered workflow runs.
* Avoid using the same name for actions across multiple workflows. Due to GitHub's implementation of Check Runs, these will collide and introduce race conditions when used with GitHub branch protection rules, GitHub rulesets, and Vercel Deployment Checks.

---

[Previous

Deploy Hooks](/docs/deploy-hooks)[Next

Deployment Retention](/docs/deployment-retention)

Was this helpful?
