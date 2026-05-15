Menu

# vercel pull

Last updated March 17, 2026

The `vercel pull` command is used to store [Environment Variables](/docs/environment-variables) and Project Settings in a local cache (under `.vercel/.env.$target.local.`) for offline use of `vercel build` and `vercel dev`. If you aren't using those commands, you don't need to run `vercel pull`.

When environment variables or project settings are updated on Vercel, remember to use `vercel pull` again to update your local environment variable and project settings values under `.vercel/`.

To download [Environment Variables](/docs/environment-variables) to a specific
file (like `.env`), use [`vercel env pull`](/docs/cli/env#exporting-development-environment-variables)
instead.

## [Usage](#usage)

terminal

```
vercel pull
```

Using the `vercel pull` fetches the latest
"development" Environment Variables and Project Settings from the cloud.

terminal

```
vercel pull --environment=preview
```

Using the `vercel pull` fetches the latest "preview"
Environment Variables and Project Settings from the cloud.

terminal

```
vercel pull --environment=preview --git-branch=feature-branch
```

Using the `vercel pull` fetches the "feature-branch"
Environment Variables and Project Settings from the cloud.

terminal

```
vercel pull --environment=production
```

Using the `vercel pull` fetches the latest "production"
Environment Variables and Project Settings from the cloud.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel pull` command.

### [Yes](#yes)

The `--yes` option can be used to skip questions you are asked when setting up a new Vercel Project.
The questions will be answered with the default scope and current directory for the Vercel Project name and location.

terminal

```
vercel pull --yes
```

Using the `vercel pull` command with the
`--yes` option.

### [environment](#environment)

Use the `--environment` option to define the environment you want to pull environment variables from. This could be production, preview, or a [custom environment](/docs/deployments/environments#custom-environments).

terminal

```
vercel pull --environment=staging
```

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel pull` command:

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

vercel promote](/docs/cli/promote)[Next

vercel redeploy](/docs/cli/redeploy)

Was this helpful?
