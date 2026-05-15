Menu

# vercel git

Last updated March 17, 2026

The `vercel git` command is used to manage a Git provider repository for a Vercel Project,
enabling deployments to Vercel through Git.

When run, Vercel CLI searches for a local `.git` config file containing at least one remote URL.
If found, you can connect it to the Vercel Project linked to your directory.

[Learn more about using Git with Vercel](/docs/git).

## [Usage](#usage)

terminal

```
vercel git connect
```

Using the `vercel git` command to connect a Git
provider repository from your local Git config to a Vercel Project.

terminal

```
vercel git disconnect
```

Using the `vercel git` command to disconnect a
connected Git provider repository from a Vercel Project.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel git` command.

### [Yes](#yes)

The `--yes` option can be used to skip connect confirmation.

terminal

```
vercel git connect --yes
```

Using the `vercel git connect` command with the
`--yes` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel git` command:

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

vercel flags](/docs/cli/flags)[Next

vercel guidance](/docs/cli/guidance)

Was this helpful?
