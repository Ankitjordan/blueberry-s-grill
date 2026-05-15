Menu

# vercel remove

Last updated March 17, 2026

The `vercel remove` command, which can be shortened to `vercel rm`, is used to remove deployments either by ID or for a specific Vercel Project.

You can also remove deployments from the Project Overview page on the Vercel
Dashboard.

## [Usage](#usage)

terminal

```
vercel remove [deployment-url]
```

Using the `vercel remove` command to remove a
deployment from the Vercel platform.

## [Extended Usage](#extended-usage)

terminal

```
vercel remove [deployment-url-1 deployment-url-2]
```

Using the `vercel remove` command to remove multiple
deployments from the Vercel platform.

terminal

```
vercel remove [project-name]
```

Using the `vercel remove` command to remove all
deployments for a Vercel Project from the Vercel platform.

By using the [project name](/docs/projects/overview), the entire Vercel
Project will be removed from the current scope unless the
`--safe` is used.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel remove` command.

### [Safe](#safe)

The `--safe` option, shorthand `-s`, can be used to skip the removal of deployments with an active preview URL or production domain when a Vercel Project is provided as the parameter.

terminal

```
vercel remove my-project --safe
```

Using the `vercel remove` command with the
`--safe` option.

### [Yes](#yes)

The `--yes` option, shorthand `-y`, can be used to skip the confirmation step for a deployment or Vercel Project removal.

terminal

```
vercel remove my-deployment.com --yes
```

Using the `vercel remove` command with the
`--yes` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel remove` command:

* [`--cwd`](/docs/cli/global-options#current-working-directory)
* [`--debug`](/docs/cli/global-options#debug)
* [`--global-config`](/docs/cli/global-options#global-config)
* [`--help`](/docs/cli/global-options#help)
* [`--local-config`](/docs/cli/global-options#local-config)
* [`--no-color`](/docs/cli/global-options#no-color)
* [`--scope`](/docs/cli/global-options#scope)
* [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

---

[Previous

vercel redirects](/docs/cli/redirects)[Next

vercel rollback](/docs/cli/rollback)

Was this helpful?
