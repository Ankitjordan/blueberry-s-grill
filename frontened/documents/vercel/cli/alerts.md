Menu

# vercel alerts

The `vercel alerts` command lists recent [alerts](/docs/alerts) for the linked project, a specific project, or an entire team.

By default, `vercel alerts` reads alerts for the linked project from the last 24 hours. You can change the scope with `--project` or `--all`, filter by alert type, change the time range, and switch between table, AI investigation, or JSON output.

Use this command when you want to inspect alert activity from the terminal without opening the dashboard.

## [Usage](#usage)

terminal

```
# List alerts for the linked project from the last 24 hours
vercel alerts

# List team-wide alerts
vercel alerts --all

# Filter by alert type and time range
vercel alerts --type usage_anomaly --since 2026-03-01T00:00:00.000Z
```

Using the `vercel alerts` command to list recent alerts for a project or team.

## [Unique options](#unique-options)

These options only apply to the `vercel alerts` command.

### [Project](#project)

The `--project` option, shorthand `-p`, lists alerts for a specific project and overrides the linked project.

terminal

```
vercel alerts --project my-app
```

You can't combine `--project` with `--all`.

### [All](#all)

The `--all` option, shorthand `-a`, lists team-wide alerts instead of using the linked project.

terminal

```
vercel alerts --all
```

You must be in team scope to use `--all`.

### [Type](#type)

The `--type` option filters by alert type. You can repeat the flag or pass comma-separated values.

terminal

```
vercel alerts --type usage_anomaly
vercel alerts --type usage_anomaly,error_anomaly
vercel alerts --type usage_anomaly --type error_anomaly
```

### [AI](#ai)

The `--ai` option prints AI investigation sections instead of the default table output.

This view includes the alert title, resolved time, summary, and key findings when that data is available.

terminal

```
vercel alerts --ai
```

### [Since](#since)

The `--since` option sets the start of the time range. Use an ISO 8601 timestamp.

If you don't pass `--since` or `--until`, the command defaults to the last 24 hours.

terminal

```
vercel alerts --since 2026-03-01T00:00:00.000Z
```

### [Until](#until)

The `--until` option sets the end of the time range. Use an ISO 8601 timestamp.

terminal

```
vercel alerts --since 2026-03-01T00:00:00.000Z --until 2026-03-02T00:00:00.000Z
```

`--since` must be earlier than `--until`.

### [Limit](#limit)

The `--limit` option sets the maximum number of alert groups to return.

The supported range is 1 through 100.

terminal

```
vercel alerts --limit 25
```

### [Format](#format)

The `--format` option supports `json` output for scripting and automation.

terminal

```
vercel alerts --format json
```

When you use `--format json`, the command returns a `groups` array with the alert group payload from the API.

## [Examples](#examples)

List alerts for the linked project:

terminal

```
vercel alerts
```

List team-wide alerts:

terminal

```
vercel alerts --all
```

Filter by usage and error anomalies:

terminal

```
vercel alerts --type usage_anomaly --type error_anomaly
```

Print AI investigation summaries for a custom time range:

terminal

```
vercel alerts --ai --since 2026-03-01T00:00:00.000Z --until 2026-03-02T00:00:00.000Z
```

Export alerts as JSON:

terminal

```
vercel alerts --format json
```

## [Related resources](#related-resources)

* To learn how to configure and receive alerts, see [Alerts](/docs/alerts).
* If you want to automatically investigate alerts with AI, see [Agent Investigation](/docs/agent/investigation).

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel alerts` command:

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

Was this helpful?
