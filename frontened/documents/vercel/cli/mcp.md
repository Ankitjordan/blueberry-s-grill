Menu

# vercel mcp

Last updated March 17, 2026

The `vercel mcp` command helps you set up an MCP client to talk to MCP servers you deploy on Vercel. It links your local MCP client configuration to a Vercel Project and generates the connection details so agents and tools can call your MCP endpoints securely.

## [Usage](#usage)

terminal

```
vercel mcp [options]
```

Using the `vercel mcp` command to initialize local MCP
configuration for the currently linked Project.

## [Examples](#examples)

### [Initialize global MCP configuration](#initialize-global-mcp-configuration)

terminal

```
vercel mcp
```

Initializes global MCP client configuration for your Vercel account.

### [Initialize project-specific MCP access](#initialize-project-specific-mcp-access)

terminal

```
vercel mcp --project
```

Sets up project-specific MCP access for the currently linked Vercel Project.

## [Unique options](#unique-options)

These are options that only apply to the `vercel mcp` command.

### [Project](#project)

The `--project` option sets up project-specific MCP access for the currently linked project instead of global configuration.

terminal

```
vercel mcp --project
```

Use the `--project` flag to configure MCP access scoped to your linked project.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel mcp` command:

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

vercel logs](/docs/cli/logs)[Next

vercel metrics](/docs/cli/metrics)

Was this helpful?
