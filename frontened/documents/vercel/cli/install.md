Menu

# vercel install

Last updated February 27, 2026

`vercel install` (alias: `vercel i`) is an alias for [`vercel integration add`](/docs/cli/integration#vercel-integration-add). Both commands are fully interchangeable with same flags and same behavior.

See the [`vercel integration add` reference](/docs/cli/integration#vercel-integration-add) for all options and examples.

## [Usage](#usage)

terminal

```
vercel install <integration-name>
```

Install a marketplace integration and provision a resource.

For the `<integration-name>` in commands below, use the integration's [URL slug](/docs/integrations/create-integration/submit-integration#url-slug). You can find the slug in the Marketplace URL. For example, for `https://vercel.com/marketplace/neon`, the slug is `neon`. You can also browse available integrations with the [`integration discover`](/docs/cli/integration#vercel-integration-discover) command.

## [Examples](#examples)

terminal

```
# Install an integration and provision a resource
vercel install neon
```

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel install` command:

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

vercel inspect](/docs/cli/inspect)[Next

vercel integration](/docs/cli/integration)

Was this helpful?
