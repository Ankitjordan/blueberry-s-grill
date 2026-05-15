Menu

# vercel promote

Last updated March 17, 2026

The `vercel promote` command is used to promote an existing deployment to be the current deployment.

Deployments built for the Production environment are the typical promote
target. You can promote Deployments built for the Preview environment, but you
will be asked to confirm that action and will result in a new production
deployment. You can bypass this prompt by using the `--yes` option.

## [Usage](#usage)

terminal

```
vercel promote [deployment-id or url]
```

Using `vercel promote` will promote an existing
deployment to be current.

## [Commands](#commands)

### [`status`](#status)

Show the status of any current pending promotions.

terminal

```
vercel promote status [project]
```

Using `vercel promote status` to check the status of
pending promotions.

Examples:

terminal

```
# Check status for the linked project
vercel promote status

# Check status for a specific project
vercel promote status my-project

# Check status with a custom timeout
vercel promote status --timeout 30s
```

## [Unique Options](#unique-options)

These are options that only apply to the `vercel promote` command.

### [Timeout](#timeout)

The `--timeout` option is the time that the `vercel promote` command will wait for the promotion to complete. When a timeout occurs, it does not affect the actual promotion which will continue to proceed.

When promoting a deployment, a timeout of `0` will immediately exit after requesting the promotion. The default timeout is `3m`.

terminal

```
vercel promote https://example-app-6vd6bhoqt.vercel.app --timeout=5m
```

Using the `vercel promote` command with the
`--timeout` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel promote` command:

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

vercel project](/docs/cli/project)[Next

vercel pull](/docs/cli/pull)

Was this helpful?
