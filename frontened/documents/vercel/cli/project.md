Menu

# vercel project

Last updated March 17, 2026

The `vercel project` command is used to manage your Vercel Projects, providing functionality to list, add, inspect, and remove.

## [Usage](#usage)

terminal

```
vercel project ls

# Output as JSON
vercel project ls --json
```

Using the `vercel project` command to list all Vercel
Project.

terminal

```
vercel project ls --update-required

# Output as JSON
vercel project ls --update-required --json
```

Using the `vercel project` command to list all Vercel
Project that are affected by an upcoming Node.js runtime deprecation.

terminal

```
vercel project add
```

Using the `vercel project` command to create a new
Vercel Project.

terminal

```
vercel project inspect
```

Using the `vercel project inspect` command to display
information about the linked project.

terminal

```
vercel project inspect my-project
```

Using the `vercel project inspect` command to display
information about a specific project by name.

terminal

```
vercel project rm
```

Using the `vercel project` command to remove a Vercel
Project.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel project` command:

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

vercel open](/docs/cli/open)[Next

vercel promote](/docs/cli/promote)

Was this helpful?
