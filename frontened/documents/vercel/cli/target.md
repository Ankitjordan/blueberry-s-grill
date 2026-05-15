Menu

# vercel target

Last updated March 17, 2026

The `vercel target` command (alias: `vercel targets`) manages your Vercel project's targets (custom environments). Targets are custom deployment environments beyond the standard production, preview, and development environments.

## [Usage](#usage)

terminal

```
vercel target list
```

Using `vercel target list` to list all targets for your project.

## [Commands](#commands)

### [list (ls)](#list-ls)

List all targets defined for the current project.

terminal

```
vercel target list
vercel target ls
vercel targets ls
```

List all custom environments configured for your project.

## [Using the --target flag](#using-the---target-flag)

The `--target` flag is available on several commands to specify which environment to target:

terminal

```
# Deploy to a custom environment named "staging"
vercel deploy --target=staging
```

Deploy your project to a custom environment by specifying
`--target=&lt;environment-name&gt;`.

## [Examples](#examples)

### [List all targets](#list-all-targets)

terminal

```
vercel target list
```

### [Deploy to a custom environment](#deploy-to-a-custom-environment)

terminal

```
vercel deploy --target=staging
```

### [Pull environment variables for a custom environment](#pull-environment-variables-for-a-custom-environment)

terminal

```
vercel pull --environment=staging
```

### [Set and use environment variables for a custom environment](#set-and-use-environment-variables-for-a-custom-environment)

terminal

```
vercel env add MY_KEY staging
vercel env ls staging
```

## [Related](#related)

* [Custom environments](/docs/deployments/environments#custom-environments)
* [vercel deploy](/docs/cli/deploy)
* [vercel env](/docs/cli/env)

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel deploy` command:

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

vercel switch](/docs/cli/switch)[Next

vercel teams](/docs/cli/teams)

Was this helpful?
