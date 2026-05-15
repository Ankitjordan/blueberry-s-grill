Menu

# Security settings

Last updated March 17, 2026

To adjust your project's security settings:

1. Select your project from your [dashboard](/dashboard)
2. Open Settings in the sidebar and select [Security](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fsecurity&title=Go+to+Security+settings)

From here you can enable or disable [Attack Mode](/docs/attack-mode), [Logs and Source Protection](#build-logs-and-source-protection), [Vercel Support Code Visibility](#vercel-support-code-visibility) and [Git Fork Protection](#git-fork-protection).

## [Build logs and source protection](#build-logs-and-source-protection)

By default, the following paths mentioned below can only be accessed by you and authenticated members of your Vercel team:

* `/_src`: Displays the source code and build output.
* `/_logs`: Displays the build logs.

Disabling Build Logs and Source Protection will make your source code and
logs publicly accessible. Do not edit this setting if you don't want them
to be publicly accessible.

None of your existing deployments will be affected when you toggle this
setting. If you’d like to make the source code or logs private on your
existing deployments, the only option is to delete these deployments.

This setting is overwritten when a deployment is created using Vercel CLI with the [`--public` option](/docs/cli/deploy#public) or the [`public` property](/docs/project-configuration#public) is used in `vercel.json`.

For deployments created before July 9th, 2020 at 7:05 AM (UTC), only the
Project Settings is considered for determining whether the deployment's Logs
and Source are publicly accessible or not. It doesn't matter if the `--public`
flag was passed when creating those Deployments.

## [Vercel Support Code Visibility](#vercel-support-code-visibility)

Vercel Support Code Visibility is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Vercel provides a setting that controls the visibility of your source code to our Vercel Support team. By default, this setting is disabled, ensuring that your code remains confidential and accessible only to you and your team.
Our Vercel Support team might request for this setting to be enabled to troubleshoot specific issues related to your code.

## [Git fork protection](#git-fork-protection)

If you receive a pull request from a fork of your repository, Vercel will require authorization from you or a [Team Member](/docs/rbac/managing-team-members) to deploy the pull request.

This behavior protects you from leaking sensitive project information such as environment variables and the [OIDC Token](/docs/oidc).

You can disable this protection in the Security section of your Project Settings.

Do not disable this setting until you review Environment Variables in your
project as well as `vercel.json` in your source code.

## [Secure Backend Access with OIDC Federation](#secure-backend-access-with-oidc-federation)

This feature allows you to secure access to your backend services by using short-lived, non-persistent tokens that are signed by Vercel's OIDC Identity Provider (IdP).

To learn more, see [Secure Backend Access with OIDC Federation](/docs/oidc).

## [Deployment Retention Policy](#deployment-retention-policy)

Deployment Retention Policy allows you to set a limit on how long older deployments are kept for your project. To learn more, see [Deployment Retention Policy](/docs/security/deployment-retention).

This section also provides information on the recently deleted deployments

---

[Previous

Global Configuration](/docs/project-configuration/global-configuration)[Next

Projects](/docs/projects)

Was this helpful?
