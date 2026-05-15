Menu

# vercel inspect

Last updated March 17, 2026

The `vercel inspect` command is used to retrieve information about a deployment referenced either by its deployment URL or ID.

You can use this command to view either a deployment's information or its [build logs](/docs/cli/inspect#logs).

## [Usage](#usage)

terminal

```
vercel inspect [deployment-id or url]
```

Using the `vercel inspect` command to retrieve
information about a specific deployment.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel inspect` command.

### [Timeout](#timeout)

The `--timeout` option sets the time to wait for deployment completion. It defaults to 3 minutes.

Any valid time string for the [ms](https://www.npmjs.com/package/ms) package can be used.

terminal

```
vercel inspect https://example-app-6vd6bhoqt.vercel.app --timeout=5m
```

Using the `vercel inspect` command with the
`--timeout` option.

### [Wait](#wait)

The `--wait` option will block the CLI until the specified deployment has completed.

terminal

```
vercel inspect https://example-app-6vd6bhoqt.vercel.app --wait
```

Using the `vercel inspect` command with the
`--wait` option.

### [Logs](#logs)

The `--logs` option, shorthand `-l`, prints the build logs instead of the deployment information.

terminal

```
vercel inspect https://example-app-6vd6bhoqt.vercel.app --logs
```

Using the `vercel inspect` command with the
`--logs` option, to view available build logs.

If the deployment is queued or canceled, there will be no logs to display.

If the deployment is building, you may want to specify `--wait` option. The command will wait for build completion, and will display build logs as they are emitted.

terminal

```
vercel inspect https://example-app-6vd6bhoqt.vercel.app --logs --wait
```

Using the `vercel inspect` command with the
`--logs` and `--wait` options,
to view all build logs until the deployement is ready.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel inspect` command:

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

vercel init](/docs/cli/init)[Next

vercel install](/docs/cli/install)

Was this helpful?
