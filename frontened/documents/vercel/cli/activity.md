Menu

# vercel activity

Last updated March 17, 2026

The `vercel activity` command displays [activity events](/docs/activity-log) for your linked project. You can filter events by type, date range, and project, or view all events across your team.

By default, running `vercel activity` shows events scoped to the linked project. Use `--all` to see all events across your team, or `--project` to target a specific project.

## [Usage](#usage)

terminal

```
# List events for the linked project
vercel activity
vercel activity ls

# List all team events from the last 30 days
vercel activity ls --all --since 30d

# Filter by event type
vercel activity ls --type deployment --since 7d
```

Using the `vercel activity` command to view activity events.

## [Unique options](#unique-options)

These options only apply to the `vercel activity` command.

### [Type](#type)

The `--type` option filters events by event type. You can repeat the flag or use comma-separated values. Run `vercel activity types` to see all available event types.

terminal

```
# Single type
vercel activity --type deployment

# Multiple types with repeated flags
vercel activity --type deployment --type project-created

# Comma-separated types
vercel activity --type deployment,project-created
```

### [Since](#since)

The `--since` option shows events after a specific date. You can use ISO 8601 format or relative values like `1d`, `7d`, or `30d`.

terminal

```
vercel activity --since 7d
vercel activity --since 2026-01-01T00:00:00Z
```

### [Until](#until)

The `--until` option shows events before a specific date. Accepts the same formats as `--since`.

terminal

```
vercel activity --since 30d --until 7d
```

### [Project](#project)

The `--project` option, shorthand `-p`, filters events by a specific project name or ID. This overrides the auto-detected linked project.

terminal

```
vercel activity --project my-app
```

### [All](#all)

The `--all` option, shorthand `-a`, shows all events across your team instead of scoping to the linked project.

terminal

```
vercel activity --all --since 30d
```

You can't use `--all` and `--project` together.

### [Limit](#limit)

The `--limit` option specifies the maximum number of events to return. The default is 20, and the maximum is 100.

terminal

```
vercel activity --limit 50
```

### [Next](#next)

The `--next` option paginates through results. After each page, the command prints the value to pass to `--next` for the following page.

terminal

```
vercel activity --next 1706140800000
```

### [Format](#format)

The `--format` option controls the output format. Set it to `json` to output structured JSON, which makes it easier to pipe to other tools like [jq](https://jqlang.github.io/jq/).

terminal

```
vercel activity --format json | jq '.events[]'
```

## [Subcommands](#subcommands)

### [`vercel activity ls`](#vercel-activity-ls)

Lists activity events. This is the default subcommand when running `vercel activity` without arguments.

terminal

```
vercel activity ls
vercel activity ls --all
vercel activity ls --project my-app
```

The output includes a scope header showing whether you're viewing team-wide events (via `--all`) or project-specific events (via `--project`).

When using `--format json`, the response includes a `scope` object with `teamSlug` and `projectIds` to indicate the scope of the results:

terminal

```
vercel activity ls --format json | jq '.scope'
```

### [`vercel activity types`](#vercel-activity-types)

Lists all available event types with descriptions. Use this to find valid values for the `--type` filter.

terminal

```
vercel activity types
vercel activity types --format json
```

## [Examples](#examples)

List deployment events from the last week:

terminal

```
vercel activity --type deployment --since 7d
```

List all team events and output as JSON:

terminal

```
vercel activity --all --format json | jq '.events[] | {type, text: .text}'
```

Paginate through results:

terminal

```
vercel activity --limit 10
# Use the --next value from the output to get the next page
vercel activity --limit 10 --next 1706140800000
```

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel activity` command:

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

Global Options](/docs/cli/global-options)[Next

vercel alerts](/docs/cli/alerts)

Was this helpful?
