Menu

# vercel logs

Last updated February 10, 2026

The `vercel logs` command displays request logs for your project or streams live runtime logs from a specific deployment.

By default, running `vercel logs` shows request logs from the last 24 hours for the linked project and branch. You can filter logs by environment, log level, status code, source, and more.

To stream live logs, use the `--follow` flag. Live streaming continues for up to 5 minutes unless interrupted.

You can find more detailed logs on the [Logs](/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Flogs&title=Open+Logs) page in the Vercel Dashboard.

## [Usage](#usage)

terminal

```
# Display recent request logs for the linked project
vercel logs

# Stream live logs for the current git branch
vercel logs --follow

# Filter logs by level and time range
vercel logs --level error --since 1h
```

Using the `vercel logs` command to view request logs or stream runtime logs.

## [Unique options](#unique-options)

These options only apply to the `vercel logs` command.

### [Project](#project)

The `--project` option, shorthand `-p`, specifies the project ID or name. Defaults to the linked project.

terminal

```
vercel logs --project my-app
```

### [Deployment](#deployment)

The `--deployment` option, shorthand `-d`, specifies a deployment ID or URL to filter logs.

terminal

```
vercel logs --deployment dpl_xxxxx
```

### [Follow](#follow)

The `--follow` option, shorthand `-f`, streams live runtime logs instead of showing request logs.

When using `--follow`, the command finds the latest deployment for your current git branch. You can combine it with `--deployment` to stream logs for a specific deployment.

terminal

```
# Stream logs for the current branch's latest deployment
vercel logs --follow

# Stream logs for a specific deployment
vercel logs --follow --deployment dpl_xxxxx
```

Use `--no-follow` to disable auto-following when a deployment ID or URL is given as the first argument.

### [JSON](#json)

The `--json` option, shorthand `-j`, outputs logs in JSON Lines format. This makes it easier to pipe the output to other command-line tools such as [jq](https://jqlang.github.io/jq/).

terminal

```
vercel logs --json | jq 'select(.level == "error")'
```

### [Expand](#expand)

The `--expand` option, shorthand `-x`, displays the full log message below each request line instead of truncating it.

terminal

```
vercel logs --expand
```

### [Limit](#limit)

The `--limit` option, shorthand `-n`, specifies the maximum number of log entries to return. The default is 100.

terminal

```
vercel logs --limit 50
```

### [Environment](#environment)

The `--environment` option filters logs by deployment environment. Valid values are `production` and `preview`.

terminal

```
vercel logs --environment production
```

### [Level](#level)

The `--level` option filters logs by log level. You can specify multiple levels. Valid values are `error`, `warning`, `info`, and `fatal`.

terminal

```
vercel logs --level error --level warning
```

### [Status-code](#status-code)

The `--status-code` option filters logs by HTTP status code. You can use specific codes or wildcards like `4xx` or `5xx`.

terminal

```
vercel logs --status-code 500
vercel logs --status-code 5xx
```

### [Source](#source)

The `--source` option filters logs by request source. You can specify multiple sources. Valid values are `serverless`, `edge-function`, `edge-middleware`, and `static`.

terminal

```
vercel logs --source edge-function --source serverless
```

### [Query](#query)

The `--query` option, shorthand `-q`, performs a full-text search across log messages.

terminal

```
vercel logs --query "timeout"
```

### [Request-id](#request-id)

The `--request-id` option filters logs by a specific request ID.

terminal

```
vercel logs --request-id req_xxxxx
```

### [Since](#since)

The `--since` option returns logs from after a specific time. You can use ISO 8601 format or relative values like `1h` or `30m`. The default is 24 hours ago.

terminal

```
vercel logs --since 1h
vercel logs --since 2026-01-15T10:00:00Z
```

### [Until](#until)

The `--until` option returns logs up until a specific time. You can use ISO 8601 format or relative values. The default is now.

terminal

```
vercel logs --since 2h --until 1h
```

### [Branch](#branch)

The `--branch` option, shorthand `-b`, filters logs by git branch. By default, the command detects your current git branch and filters to matching deployments.

terminal

```
vercel logs --branch feature-x
```

Use `--no-branch` to disable automatic git branch detection and show logs from all branches.

## [Examples](#examples)

Display error logs from the last hour:

terminal

```
vercel logs --level error --since 1h
```

Display production logs with 500 errors and output as JSON:

terminal

```
vercel logs --environment production --status-code 500 --json
```

Search logs and pipe to jq:

terminal

```
vercel logs --query "timeout" --json | jq '.message'
```

Display logs with full message details:

terminal

```
vercel logs --expand --limit 20
```

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel logs` command:

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

vercel logout](/docs/cli/logout)[Next

vercel mcp](/docs/cli/mcp)

Was this helpful?
