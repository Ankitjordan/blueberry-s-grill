Menu

# Git settings

Last updated March 10, 2026

Once you have [connected a Git repository](/docs/git#deploying-a-git-repository), select the Git menu item from your project settings page to edit your project's Git settings. These settings include:

* Managing Git Large File Storage (LFS)
* Creating Deploy Hooks

## [Disconnect your Git repository](#disconnect-your-git-repository)

To disconnect your Git repository from your Vercel project:

1. Choose a project from the [dashboard](/dashboard)
2. Open Settings in the sidebar and select [Git](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fgit&title=Go+to+Git+settings)
3. Under Connected Git Repository, select the Disconnect button.

## [Git Large File Storage (LFS)](#git-large-file-storage-lfs)

If you have [LFS objects](https://git-lfs.com/) in your repository, you can enable or disable support for them from the [project settings](/docs/project-configuration/project-settings).
When support is enabled, Vercel will pull the LFS objects that are used in your repository.

You must [redeploy your
project](/docs/deployments/managing-deployments#redeploy-a-project) after
turning Git LFS on.

## [Deploy Hooks](#deploy-hooks)

Vercel supports deploy hooks, which are unique URLs that accept HTTP POST requests and trigger deployments. Check out [our Deploy Hooks documentation](/docs/deploy-hooks) to learn more.

## [Verified Commits](#verified-commits)

Vercel allows you to require verified commits for deployments. This is only available for GitHub projects. Learn more about [verified commits on GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification).

To enable verified commits:

1. From the Vercel dashboard, select your project
2. Open Settings in the sidebar and select [Git](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fgit&title=Go+to+Git+settings)
3. Under Require Verified Commits, select the Enable checkbox

When enabled, Vercel will only create deployments for commits that have been verified by GitHub. For all other commits, the deployment will be automatically canceled.

---

[Previous

Git Configuration](/docs/project-configuration/git-configuration)[Next

Global Configuration](/docs/project-configuration/global-configuration)

Was this helpful?
