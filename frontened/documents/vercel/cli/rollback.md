Menu

# vercel rollback

Last updated March 17, 2026

The `vercel rollback` command is used to [roll back production deployments](/docs/instant-rollback) to previous deployments.

## [Usage](#usage)

terminal

```
vercel rollback [deployment-id or url]
```

Using `vercel rollback` rolls back to a previous
deployment.

On the hobby plan, you can only [roll
back](/docs/instant-rollback#who-can-roll-back-deployments) to the previous
production deployment. If you attempt to pass in a deployment id or url from
an earlier deployment, you will be given an error:
`To roll back further than the previous production deployment, upgrade to pro`.

## [Commands](#commands)

### [`status`](#status)

Show the status of any current pending rollbacks.

terminal

```
vercel rollback status [project]
```

Using `vercel rollback status` to check the status of
pending rollbacks.

Examples:

terminal

```
# Check status for the linked project
vercel rollback status

# Check status for a specific project
vercel rollback status my-project

# Check status with a custom timeout
vercel rollback status --timeout 30s
```

## [Unique Options](#unique-options)

These are options that only apply to the `vercel rollback` command.

### [Timeout](#timeout)

The `--timeout` option is the time that the `vercel rollback` command will wait for the rollback to complete. It does not affect the actual rollback which will continue to proceed.

When rolling back a deployment, a timeout of `0` will immediately exit after requesting the rollback.

terminal

```
vercel rollback https://example-app-6vd6bhoqt.vercel.app
```

Using the `vercel rollback` command to the
`https://example-app-6vd6bhoqt.vercel.app` deployment.

## [Undo a rollback](#undo-a-rollback)

To undo a rollback, promote a deployment using [`vercel promote`](/docs/cli/promote):

terminal

```
vercel promote [deployment-id or url]
```

This promotes the specified deployment to production and re-enables auto-assignment of production domains. For more details, see [Undo a rollback](/docs/instant-rollback#undo-a-rollback).

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel rollback` command:

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

vercel remove](/docs/cli/remove)[Next

vercel rolling-release](/docs/cli/rolling-release)

Was this helpful?
