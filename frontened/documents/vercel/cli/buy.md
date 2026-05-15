Menu

# vercel buy

Last updated March 17, 2026

The `vercel buy` command allows you to purchase Vercel products for your team directly from the CLI. You can buy credits, addons, subscriptions, and domains.

All subcommands except `domain` require a team scope. Use `--scope` to
specify a team if you haven't already.

## [Usage](#usage)

terminal

```
vercel buy [subcommand]
```

Running `vercel buy` without a subcommand displays
the help menu.

## [Subcommands](#subcommands)

### [`credits`](#credits)

Purchase Vercel credits for your team. Supported credit types are `v0`, `gateway` (AI Gateway), and `agent` (Vercel Agent).

The `amount` argument is specified in whole US dollars. The maximum amount per purchase is $1,000.

terminal

```
vercel buy credits [credit-type] [amount]
```

Using the `vercel buy credits` command to purchase
credits for the current team.

| Argument | Required | Description |
| --- | --- | --- |
| `credit-type` | Yes | Type of credits to purchase: `v0`, `gateway`, `agent` |
| `amount` | Yes | Amount in whole US dollars (max $1,000 per purchase) |

#### [Examples](#examples)

terminal

```
vercel buy credits v0 100
```

Purchase $100 of v0 credits.

terminal

```
vercel buy credits gateway 250
```

Purchase $250 of AI Gateway credits.

terminal

```
vercel buy credits agent 50
```

Purchase $50 of Vercel Agent credits.

### [`addon`](#addon)

Purchase a Vercel addon for your team. Your team must be on the Flex plan to purchase addons. Run `vercel buy addon --help` to see all available addon options.

terminal

```
vercel buy addon [addon-name] [quantity]
```

Using the `vercel buy addon` command to purchase an
addon for the current team.

| Argument | Required | Description |
| --- | --- | --- |
| `addon-name` | Yes | Name of the addon to purchase: `siem` |
| `quantity` | Yes | Number of units to purchase |

#### [Example](#example)

terminal

```
vercel buy addon siem 1
```

Purchase one unit of the SIEM addon.

### [`pro`](#pro)

Purchase a Vercel Pro subscription for your team.

terminal

```
vercel buy pro
```

Using the `vercel buy pro` command to upgrade the
current team to Vercel Pro.

### [`v0`](#v0)

Purchase a v0 subscription for your team.

terminal

```
vercel buy v0
```

Using the `vercel buy v0` command to purchase a v0
subscription for the current team.

v0 subscription purchase is not yet available via the CLI.

### [`domain`](#domain)

Purchase a domain name. This delegates to the [`vercel domains buy`](/docs/cli/domains) command.

terminal

```
vercel buy domain [domain]
```

Using the `vercel buy domain` command to purchase a
domain.

| Argument | Required | Description |
| --- | --- | --- |
| `domain` | Yes | The root domain to purchase |

#### [Example](#example)

terminal

```
vercel buy domain example.com
```

Purchase the domain `example.com`.

## [Unique options](#unique-options)

These are options that apply to the `vercel buy credits` and `vercel buy addon` subcommands.

### [Yes](#yes)

The `--yes` option skips the confirmation prompt. This is required when running in non-interactive environments like CI.

terminal

```
vercel buy credits v0 100 --yes
```

Using the `vercel buy credits` command with the
`--yes` option to skip confirmation.

### [JSON output](#json-output)

The `--json` flag returns the purchase result as JSON instead of plain text.

terminal

```
vercel buy credits gateway 250 --json
```

Using the `vercel buy credits` command with the
`--json` option for structured output.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel buy` command:

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

vercel build](/docs/cli/build)[Next

vercel cache](/docs/cli/cache)

Was this helpful?
