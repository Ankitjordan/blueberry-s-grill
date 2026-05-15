Menu

# vercel flags

Last updated March 17, 2026

The `vercel flags` command manages [Vercel Flags](/docs/flags/vercel-flags) for a project directly from the command line. You can create, list, inspect, open, update, set, enable, disable, roll out, archive, and delete feature flags, as well as manage SDK keys.

## [Usage](#usage)

terminal

```
vercel flags list
```

Using the `vercel flags` command to list all active
feature flags.

terminal

```
vercel flags create [slug]
```

Using the `vercel flags create` command to create a new feature flag.

terminal

```
vercel flags inspect [flag]
```

Using the `vercel flags` command to display information
about a feature flag.

terminal

```
vercel flags open [flag]
```

Opening the project feature flags dashboard, or a specific feature flag, in
the Vercel dashboard.

terminal

```
vercel flags update [flag]
```

Using the `vercel flags` command to update a flag's variants.

terminal

```
vercel flags set [flag]
```

Using the `vercel flags` command to set the served variant in an
environment.

terminal

```
vercel flags rollout [flag]
```

Using the `vercel flags` command to configure a progressive rollout in an
environment.

terminal

```
vercel flags enable [flag]
```

Using the `vercel flags` command to enable a boolean feature flag in an
environment.

terminal

```
vercel flags disable [flag]
```

Using the `vercel flags` command to disable a boolean feature flag in an
environment.

terminal

```
vercel flags archive [flag]
```

Using the `vercel flags` command to archive a feature flag.

terminal

```
vercel flags rm [flag]
```

Using the `vercel flags` command to delete a feature flag.

## [Extended usage](#extended-usage)

### [Adding flags](#adding-flags)

Boolean flags are created by default. The `vercel flags create` command creates
a new feature flag.

terminal

```
vercel flags create welcome-message --kind string --description "Homepage welcome copy" \
  --variant control="Welcome back" --variant treatment="Start for free"
```

Creating a string feature flag with explicit variants.

For string, number, and JSON flags, repeat `--variant VALUE[=LABEL]` to define the exact variants you want to create. If you omit `--variant` in a terminal, the CLI prompts you to add variants interactively. In non-interactive environments, you must pass `--variant`.

For JSON flags, use repeated `--variant '<JSON>'` or `--variant '<JSON>'=Label` values:

terminal

```
vercel flags create layout-config --kind json \
  --variant '{"theme":"light","sidebar":false}'=Light \
  --variant '{"theme":"dark","sidebar":true}'=Dark
```

Creating a JSON feature flag with labeled object variants.

JSON variants accept any valid JSON value, including objects, arrays, booleans, numbers, strings, and `null`.

terminal

```
vercel flags create search-config --kind json \
  --variant '{"mode":"fast","limit":10}' \
  --variant '{"mode":"accurate","limit":50}'
```

Creating JSON variants without labels. The CLI assigns `Variant 1` and
`Variant 2`.

Boolean flags always use the built-in `false` and `true` variants, labelled `Off` and `On`.

New boolean flags serve `true` in development and `false` in preview and production. The create output shows the initial environment behavior for the flag you just created.

### [Opening flags](#opening-flags)

Use `vercel flags open` to jump straight to the Vercel dashboard.

terminal

```
vercel flags open welcome-message
```

Opening a specific feature flag in the Vercel dashboard.

### [Updating variants](#updating-variants)

Use `vercel flags update` to change an existing variant's value, label, or both. If you omit one of the update flags, the CLI can guide you interactively.

terminal

```
vercel flags update welcome-message --variant control --value welcome-back \
  --label "Welcome back" --message "Refresh control copy"
```

Updating a variant and recording a revision message.

`--variant` matches a variant ID or current value. Run `vercel flags inspect` if you want to confirm the available variants before updating them.

For JSON flags, `--variant` can be the variant ID or the current JSON value, and `--value` must be valid JSON:

terminal

```
vercel flags update layout-config \
  --variant '{"theme":"light","sidebar":false}' \
  --value '{"theme":"light","sidebar":true}' \
  --label "Light+"
```

Updating a JSON variant by matching its current value.

JSON variant selection matches the parsed JSON value, not the label. Run `vercel flags inspect` if you want to copy the current variant ID or value before updating it.

For boolean flags, `vercel flags update` can rename the `true` or `false` variant labels, but it cannot change the boolean values themselves.

### [Setting a served variant](#setting-a-served-variant)

Use `vercel flags set` to choose which variant a specific environment serves.

terminal

```
vercel flags set welcome-message --environment preview --variant control \
  --message "Serve the control copy in preview"
```

Setting the variant served in preview for a string flag.

### [Configuring a progressive rollout](#configuring-a-progressive-rollout)

Use `vercel flags rollout` to move traffic from one variant to another over time.

terminal

```
vercel flags rollout redesigned-checkout --environment production --by user.id \
  --stage 5,6h --stage 10,6h --stage 25,12h --stage 50,1d \
  --message "Start redesigned checkout rollout"
```

Configuring a Boolean rollout in production using `user.id` for bucketing.

Each `--stage` defines the percentage of traffic sent to the rollout variant and how long that stage lasts. After the last stage finishes, the environment serves 100% of the target variant indefinitely.

For Boolean flags, `vercel flags rollout` defaults to rolling from `false` to `true` and using the `false` variant as the fallback. For String, Number, and JSON flags, pass `--from-variant`, `--to-variant`, and optionally `--default-variant`. These options accept either a variant ID or a variant value, and using the ID is often easier for JSON variants.

terminal

```
vercel flags rollout welcome-message --environment production --by user.id \
  --from-variant control --to-variant treatment --default-variant control \
  --stage 10,2h --stage 50,12h --start 2026-04-16T09:00:00Z
```

Scheduling a progressive rollout for a non-Boolean flag.

If you rerun `vercel flags rollout` for an environment that already has a rollout, you can update only the stages and keep the current bucketing attribute, start time, and variants.

### [Enabling and disabling flags](#enabling-and-disabling-flags)

The `enable` and `disable` commands are shortcuts for boolean flags. They control whether an environment serves the `true` variant or the `false` variant. If you do not provide the `--environment` option, the CLI prompts you to select one interactively.

terminal

```
vercel flags enable my-feature --environment production --message "Resume rollout"
```

Enabling a boolean flag in production and recording why the change was made.

terminal

```
vercel flags disable my-feature -e production --variant false \
  --message "Pause rollout in production"
```

Disabling a boolean flag and serving the `false` variant in production.

The `enable` and `disable` commands only work with boolean flags. For string
or number flags, use `vercel flags set` to change the served variant in an
environment and `vercel flags update` to change variant values or labels.

### [Archiving and removing flags](#archiving-and-removing-flags)

A flag must be archived before it can be deleted. Archived flags stop evaluating and can be restored from the [dashboard](/docs/flags/vercel-flags/dashboard).

terminal

```
vercel flags archive my-feature --yes
```

Archiving a flag without a confirmation prompt.

terminal

```
vercel flags rm my-feature --yes
```

Deleting an archived flag without a confirmation prompt.

### [SDK keys](#sdk-keys)

The `vercel flags sdk-keys` subcommand manages SDK keys for your project. SDK keys authenticate your application when evaluating flags. You can create keys for different environments and key types.

terminal

```
vercel flags sdk-keys ls
```

Using the `vercel flags sdk-keys ls` command to list
all SDK keys.

terminal

```
vercel flags sdk-keys add --type server --environment production
```

Creating a server SDK key for the production environment.

terminal

```
vercel flags sdk-keys rm [hash-key]
```

Using the `vercel flags sdk-keys rm` command to delete
an SDK key.

When you create an SDK key, the output includes:

* Hash key: A truncated identifier shown in the key list
* SDK key: The full key value, shown only at creation time
* Connection string: A `flags:` URI containing all configuration needed to connect to Vercel Flags

Copy the SDK key from the create output immediately and store it somewhere safe. Vercel returns the full value only once, at creation time. `vercel flags sdk-keys ls` returns a masked preview (for example, `vf_server_abc********`). If you lose the value, delete the key with `vercel flags sdk-keys rm` and create a new one.

If you don't provide the `--environment` option, you'll be prompted to select one interactively.

## [Unique options](#unique-options)

These are options that only apply to the `vercel flags` command.

### [State](#state)

The `--state` option, shorthand `-s`, filters the list of flags by state when using `vercel flags list`. Valid values are `active` and `archived`. Defaults to `active`.

terminal

```
vercel flags ls --state archived
```

Using the `vercel flags ls` command with the
`--state` option to list archived flags.

### [Kind](#kind)

The `--kind` option, shorthand `-k`, specifies the type of a new flag when using `vercel flags create`. Valid values are `boolean`, `string`, `number`, and `json`. Defaults to `boolean`.

terminal

```
vercel flags create layout-config --kind json \
  --variant '{"theme":"light"}'=Light \
  --variant '{"theme":"dark","sidebar":true}'=Dark
```

Using the `vercel flags create` command with the
`--kind` option to create a JSON flag.

### [Description](#description)

The `--description` option, shorthand `-d`, sets a description for a new flag when using `vercel flags create`.

terminal

```
vercel flags create my-feature --description "Controls the new onboarding flow"
```

Using the `vercel flags create` command with the
`--description` option.

### [Environment](#environment)

The `--environment` option, shorthand `-e`, specifies the target environment for `vercel flags set`, `vercel flags rollout`, `vercel flags enable`, `vercel flags disable`, and `vercel flags sdk-keys add`. Valid values are `production`, `preview`, and `development`.

terminal

```
vercel flags set welcome-message --environment production --variant control
```

Using the `vercel flags set` command with the
`--environment` option.

### [Variant](#variant)

The `--variant` option, shorthand `-v`, defines variants on `vercel flags create`, and selects a variant by ID or value on `vercel flags update`, `vercel flags set`, and `vercel flags disable`.

For JSON flags, create variants with `--variant '<JSON>'` or `--variant '<JSON>'=Label`. When you update a JSON flag, the selector can be a variant ID or the current JSON value, but not the label.

terminal

```
vercel flags create welcome-message --kind string \
  --variant control="Welcome back" --variant treatment="Start for free"
```

Using repeated `--variant` options to create a string flag with explicit
variants.

### [By](#by)

The `--by` option selects the entity attribute used for consistent bucketing when using `vercel flags rollout`. Use the format `<entity.attribute>`, such as `user.id`.

terminal

```
vercel flags rollout redesigned-checkout --environment production --by user.id \
  --stage 5,6h --stage 25,12h
```

Using `--by` to bucket the rollout by `user.id`.

### [From variant, to variant, and default variant](#from-variant-to-variant-and-default-variant)

The `--from-variant`, `--to-variant`, and `--default-variant` options control which variants a rollout uses. `--from-variant` is the current variant, `--to-variant` is the rollout target, and `--default-variant` is served when the bucketing attribute is missing.

For Boolean flags, these values default to `false`, `true`, and `false`. For String, Number, and JSON flags, pass them explicitly. Each option accepts either a variant ID or a variant value.

terminal

```
vercel flags rollout welcome-message --environment production --by user.id \
  --from-variant control --to-variant treatment --default-variant control \
  --stage 10,2h --stage 50,12h
```

Selecting explicit rollout variants for a String flag.

### [Value](#value)

The `--value` option sets the new value for a variant when using `vercel flags update`. For JSON flags, `--value` must be valid JSON. Boolean variants can keep their existing `true` or `false` value, but they cannot be changed to a different boolean value.

terminal

```
vercel flags update welcome-message --variant control --value welcome-back
```

Using the `vercel flags update` command with the `--value` option.

### [Label](#label)

The `--label` option, shorthand `-l`, sets a variant label when using `vercel flags update`, or an SDK key label when using `vercel flags sdk-keys add`.

terminal

```
vercel flags update welcome-message --variant control --label "Welcome back"
```

Using the `vercel flags update` command with the `--label` option.

### [Message](#message)

The `--message` option sets an optional revision message when using `vercel flags update`, `vercel flags set`, `vercel flags rollout`, `vercel flags enable`, or `vercel flags disable`.

terminal

```
vercel flags set welcome-message -e preview --variant control \
  --message "Keep preview on control"
```

Using the `vercel flags set` command with the `--message` option.

### [Stage](#stage)

The `--stage` option, shorthand `-s`, adds a rollout stage when using `vercel flags rollout`. Each stage uses the format `PERCENTAGE,DURATION`, for example `5,6h`. Repeat `--stage` to build a longer schedule.

terminal

```
vercel flags rollout redesigned-checkout --environment production --by user.id \
  --stage 5,6h --stage 10,6h --stage 25,12h --stage 50,1d
```

Defining four rollout stages with repeated `--stage` options.

### [Start](#start)

The `--start` option controls when `vercel flags rollout` begins. Use `now`, a future relative duration like `1h`, or an ISO 8601 datetime.

terminal

```
vercel flags rollout welcome-message --environment production --by user.id \
  --from-variant control --to-variant treatment --default-variant control \
  --stage 10,2h --stage 50,12h --start 2026-04-16T09:00:00Z
```

Scheduling a rollout to start at a specific time.

### [Type](#type)

The `--type` option specifies the type of SDK key when using `vercel flags sdk-keys add`.

terminal

```
vercel flags sdk-keys add --type server --environment production
```

Using the `vercel flags sdk-keys add` command with the `--type` option.

### [Yes](#yes)

The `--yes` option, shorthand `-y`, skips the confirmation prompt when archiving or deleting a flag, or when deleting an SDK key.

terminal

```
vercel flags archive my-feature --yes
```

Using the `vercel flags archive` command with the
`--yes` option to skip confirmation.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel flags` command:

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

vercel firewall](/docs/cli/firewall)[Next

vercel git](/docs/cli/git)

Was this helpful?
