CLI

# Vercel CLI Overview

Last updated March 11, 2026

Vercel gives you multiple ways to interact with and configure your Vercel Projects. With the command-line interface (CLI) you can interact with the Vercel platform using a terminal, or through an automated system, enabling you to [retrieve logs](/docs/cli/logs), manage [certificates](/docs/cli/certs), replicate your deployment environment [locally](/docs/cli/dev), manage Domain Name System (DNS) [records](/docs/cli/dns), and more.

If you'd like to interface with the platform programmatically, check out the [REST API documentation](/docs/rest-api).

## [Installing Vercel CLI](#installing-vercel-cli)

To download and install Vercel CLI, run the following command:

Terminal

```
pnpm i -g vercel
```

## [Updating Vercel CLI](#updating-vercel-cli)

When there is a new release of Vercel CLI, running any command will show you a message letting you know that an update is available.

If you have installed our command-line interface through [npm](http://npmjs.org/) or [Yarn](https://yarnpkg.com), the easiest way to update it is by running the installation command yet again.

Terminal

```
pnpm i -g vercel@latest
```

If you see permission errors, please read npm's [official guide](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally). Yarn depends on the same configuration as npm.

## [Checking the version](#checking-the-version)

The `--version` option can be used to verify the version of Vercel CLI currently being used.

terminal

```
vercel --version
```

Using the `vercel` command with the `--version` option.

## [Using in a CI/CD environment](#using-in-a-ci/cd-environment)

Vercel CLI requires you to log in and authenticate before accessing resources or performing administrative tasks. In a terminal environment, you can use [`vercel login`](/docs/cli/login), which requires manual input. In a CI/CD environment where manual input is not possible, you can create a token on your [tokens page](/account/tokens) and then authenticate using one of these methods:

* Set the `VERCEL_TOKEN` environment variable
* Pass the [`--token` option](/docs/cli/global-options#token) to the command

Using the `VERCEL_TOKEN` environment variable is recommended for CI/CD because it avoids exposing the token in command-line arguments, which can be visible in process lists and logs. If both are provided, the `--token` flag takes precedence over the environment variable.

## [Available Commands](#available-commands)

### [activity](#activity)

View activity events for your Vercel project or team, filtered by type, date range, and project.

```
vercel activity
vercel activity ls --all --since 30d
vercel activity ls --type deployment --since 7d
```

[Learn more about the activity command](/docs/cli/activity)

### [api](#api)

Make authenticated HTTP requests to the Vercel API from your terminal. This is a beta command.

```
vercel api [endpoint]
vercel api /v2/user
vercel api /v9/projects -X POST -F name=my-project
```

[Learn more about the api command](/docs/cli/api)

### [alias](#alias)

Apply custom domain aliases to your Vercel deployments.

```
vercel alias set [deployment-url] [custom-domain]
vercel alias rm [custom-domain]
vercel alias ls
```

[Learn more about the alias command](/docs/cli/alias)

### [alerts](#alerts)

List recent alerts for a linked project, a specific project, or an entire team.

```
vercel alerts
vercel alerts --all
vercel alerts --project [project-name]
```

[Learn more about the alerts command](/docs/cli/alerts)

### [bisect](#bisect)

Perform a binary search on your deployments to help surface issues.

```
vercel bisect
vercel bisect --good [deployment-url] --bad [deployment-url]
```

[Learn more about the bisect command](/docs/cli/bisect)

### [blob](#blob)

Interact with Vercel Blob storage to upload, download, list, delete, and copy files.

```
vercel blob list
vercel blob put [path-to-file]
vercel blob get [url-or-pathname]
vercel blob del [url-or-pathname]
vercel blob copy [from-url] [to-pathname]
```

[Learn more about the blob command](/docs/cli/blob)

### [build](#build)

Build a Vercel Project locally or in your own CI environment.

```
vercel build
vercel build --prod
```

[Learn more about the build command](/docs/cli/build)

### [buy](#buy)

Purchase Vercel products like credits, addons, subscriptions, and domains directly from the CLI.

```
vercel buy credits v0 100
vercel buy addon siem 1
vercel buy pro
vercel buy domain example.com
```

[Learn more about the buy command](/docs/cli/buy)

### [cache](#cache)

Manage cache for your project (CDN cache and Data cache).

```
vercel cache purge
vercel cache purge --type cdn
vercel cache purge --type data
vercel cache invalidate --tag foo
vercel cache dangerously-delete --tag foo
```

[Learn more about the cache command](/docs/cli/cache)

### [certs](#certs)

Manage certificates for your domains.

```
vercel certs ls
vercel certs issue [domain]
vercel certs rm [certificate-id]
```

[Learn more about the certs command](/docs/cli/certs)

### [contract](#contract)

View contract commitment information for your Vercel account.

```
vercel contract
vercel contract --format json
```

[Learn more about the contract command](/docs/cli/contract)

### [curl](#curl)

Make HTTP requests to your Vercel deployments with automatic deployment protection bypass. This is a beta command.

```
vercel curl [path]
vercel curl /api/hello
vercel curl /api/data --deployment [deployment-url]
```

[Learn more about the curl command](/docs/cli/curl)

### [deploy](#deploy)

Deploy your Vercel projects. Default command when no subcommand is specified.

```
vercel
vercel deploy
vercel deploy --prod
```

[Learn more about the deploy command](/docs/cli/deploy)

### [dev](#dev)

Replicate the Vercel deployment environment locally and test your project.

```
vercel dev
vercel dev --port 3000
```

[Learn more about the dev command](/docs/cli/dev)

### [dns](#dns)

Manage your DNS records for your domains.

```
vercel dns ls [domain]
vercel dns add [domain] [name] [type] [value]
vercel dns rm [record-id]
```

[Learn more about the dns command](/docs/cli/dns)

### [domains](#domains)

Buy, sell, transfer, and manage your domains.

```
vercel domains ls
vercel domains add [domain] [project]
vercel domains rm [domain]
vercel domains buy [domain]
```

[Learn more about the domains command](/docs/cli/domains)

### [env](#env)

Manage environment variables in your Vercel Projects.

```
vercel env ls
vercel env add [name] [environment]
vercel env update [name] [environment]
vercel env rm [name] [environment]
vercel env pull [file]
vercel env run -- <command>
```

[Learn more about the env command](/docs/cli/env)

### [flags](#flags)

Manage feature flags for your Vercel Project.

```
vercel flags list
vercel flags create [slug]
vercel flags set [flag] --environment [environment] --variant [variant]
vercel flags open [flag]
```

[Learn more about the flags command](/docs/cli/flags)

### [git](#git)

Manage your Git provider connections.

```
vercel git ls
vercel git connect
vercel git disconnect [provider]
```

[Learn more about the git command](/docs/cli/git)

### [guidance](#guidance)

Enable or disable guidance messages shown after CLI commands.

```
vercel guidance enable
vercel guidance disable
vercel guidance status
```

[Learn more about the guidance command](/docs/cli/guidance)

### [help](#help)

Get information about all available Vercel CLI commands.

```
vercel help
vercel help [command]
```

[Learn more about the help command](/docs/cli/help)

### [httpstat](#httpstat)

Visualize HTTP request timing statistics for your Vercel deployments with automatic deployment protection bypass.

```
vercel httpstat [path]
vercel httpstat /api/hello
vercel httpstat /api/data --deployment [deployment-url]
```

[Learn more about the httpstat command](/docs/cli/httpstat)

### [init](#init)

Initialize example Vercel Projects locally from the examples repository.

```
vercel init
vercel init [project-name]
```

[Learn more about the init command](/docs/cli/init)

### [inspect](#inspect)

Retrieve information about your Vercel deployments.

```
vercel inspect [deployment-id-or-url]
vercel inspect [deployment-id-or-url] --logs
vercel inspect [deployment-id-or-url] --wait
```

[Learn more about the inspect command](/docs/cli/inspect)

### [install](#install)

Install a marketplace integration and provision a resource. Alias for `vercel integration add`.

```
vercel install <integration-name>
```

[Learn more about the install command](/docs/cli/install)

### [integration](#integration)

Manage marketplace integrations: provision resources, discover available integrations, view setup guides, check balances, and more.

```
vercel integration add <integration-name>
vercel integration list [project-name]
vercel integration discover
vercel integration guide <integration-name>
vercel integration balance <integration-name>
vercel integration open <integration-name> [resource-name]
vercel integration remove <integration-name>
```

[Learn more about the integration command](/docs/cli/integration)

### [integration-resource](#integration-resource)

Manage individual resources from marketplace integrations: remove, disconnect from projects, and configure auto-recharge thresholds.

```
vercel integration-resource remove <resource-name>
vercel integration-resource disconnect <resource-name> [project-name]
vercel integration-resource create-threshold <resource-name> <minimum> <spend> <limit>
```

[Learn more about the integration-resource command](/docs/cli/integration-resource)

### [link](#link)

Link a local directory to a Vercel Project.

```
vercel link
vercel link [path-to-directory]
```

[Learn more about the link command](/docs/cli/link)

### [list](#list)

List recent deployments for the current Vercel Project.

```
vercel list
vercel list [project-name]
```

[Learn more about the list command](/docs/cli/list)

### [login](#login)

Login to your Vercel account through CLI.

```
vercel login
vercel login [email]
vercel login --github
```

[Learn more about the login command](/docs/cli/login)

### [logout](#logout)

Logout from your Vercel account through CLI.

```
vercel logout
```

[Learn more about the logout command](/docs/cli/logout)

### [logs](#logs)

List runtime logs for a specific deployment.

```
vercel logs [deployment-url]
vercel logs [deployment-url] --follow
```

[Learn more about the logs command](/docs/cli/logs)

### [mcp](#mcp)

Set up MCP client configuration for your Vercel Project.

```
vercel mcp
vercel mcp --project
```

[Learn more about the mcp command](/docs/cli/mcp)

### [microfrontends](#microfrontends)

Work with microfrontends configuration.

```
vercel microfrontends pull
vercel microfrontends pull --dpl [deployment-id-or-url]
```

[Learn more about the microfrontends command](/docs/cli/microfrontends)

### [metrics](#metrics)

Query observability metrics and inspect available metrics, dimensions, and aggregations.

```
vercel metrics vercel.request.count
vercel metrics schema
vercel metrics schema vercel.request
```

[Learn more about the metrics command](/docs/cli/metrics)

### [open](#open)

Open your current project in the Vercel Dashboard.

```
vercel open
```

[Learn more about the open command](/docs/cli/open)

### [project](#project)

List, add, inspect, remove, and manage your Vercel Projects.

```
vercel project ls
vercel project add
vercel project rm
vercel project inspect [project-name]
```

[Learn more about the project command](/docs/cli/project)

### [promote](#promote)

Promote an existing deployment to be the current deployment.

```
vercel promote [deployment-id-or-url]
vercel promote status [project]
```

[Learn more about the promote command](/docs/cli/promote)

### [pull](#pull)

Update your local project with remote environment variables and project settings.

```
vercel pull
vercel pull --environment=production
```

[Learn more about the pull command](/docs/cli/pull)

### [redeploy](#redeploy)

Rebuild and redeploy an existing deployment.

```
vercel redeploy [deployment-id-or-url]
```

[Learn more about the redeploy command](/docs/cli/redeploy)

### [redirects](#redirects)

Manage project-level redirects.

```
vercel redirects list
vercel redirects add /old /new --status 301
vercel redirects upload redirects.csv --overwrite
vercel redirects promote <version-id>
```

[Learn more about the redirects command](/docs/cli/redirects)

### [remove](#remove)

Remove deployments either by ID or for a specific Vercel Project.

```
vercel remove [deployment-url]
vercel remove [project-name]
```

[Learn more about the remove command](/docs/cli/remove)

### [rollback](#rollback)

Roll back production deployments to previous deployments.

```
vercel rollback
vercel rollback [deployment-id-or-url]
vercel rollback status [project]
```

[Learn more about the rollback command](/docs/cli/rollback)

### [rolling-release](#rolling-release)

Manage your project's rolling releases to gradually roll out new deployments.

```
vercel rolling-release configure --cfg='[config]'
vercel rolling-release start --dpl=[deployment-id]
vercel rolling-release approve --dpl=[deployment-id]
vercel rolling-release complete --dpl=[deployment-id]
```

[Learn more about the rolling-release command](/docs/cli/rolling-release)

### [routes](#routes)

Manage project-level routing rules for your Vercel Project.

```
vercel routes list
vercel routes add --ai "Rewrite /api/* to https://backend.internal/*"
vercel routes edit "API Proxy" --dest "https://new-api.example.com/:path*"
vercel routes publish
```

[Learn more about the routes command](/docs/cli/routes)

### [switch](#switch)

Switch between different team scopes.

```
vercel switch
vercel switch [team-name]
```

[Learn more about the switch command](/docs/cli/switch)

### [teams](#teams)

List, add, remove, and manage your teams.

```
vercel teams list
vercel teams add
vercel teams invite [email]
```

[Learn more about the teams command](/docs/cli/teams)

### [target](#target)

Manage custom environments (targets) and use the `--target` flag on relevant commands.

```
vercel target list
vercel target ls
vercel deploy --target=staging
```

[Learn more about the target command](/docs/cli/target)

### [usage](#usage)

View billing usage and costs for your Vercel account.

```
vercel usage
vercel usage --from 2025-01-01 --to 2025-01-31
vercel usage --breakdown daily
```

[Learn more about the usage command](/docs/cli/usage)

### [telemetry](#telemetry)

Enable or disable telemetry collection.

```
vercel telemetry status
vercel telemetry enable
vercel telemetry disable
```

[Learn more about the telemetry command](/docs/cli/telemetry)

### [webhooks](#webhooks)

Manage webhooks for your account. This command is in beta.

```
vercel webhooks list
vercel webhooks get <id>
vercel webhooks create <url> --event <event>
vercel webhooks rm <id>
```

[Learn more about the webhooks command](/docs/cli/webhooks)

### [whoami](#whoami)

Display the username of the currently logged in user.

```
vercel whoami
```

[Learn more about the whoami command](/docs/cli/whoami)

---

[Previous

CDN / Pricing & Usage](/docs/manage-cdn-usage)[Next

Deploying from CLI](/docs/cli/deploying-from-cli)

Was this helpful?
