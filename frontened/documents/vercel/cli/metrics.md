Menu

# vercel metrics

The `vercel metrics` command lets you query observability data for your teams and projects. You can also inspect the schema to list available metrics, or inspect a metric or metric prefix to discover valid aggregations and dimensions before running a query.

This command requires [Observability Plus](/docs/observability/observability-plus).

Metrics are available on [all plans](/docs/plans) with [Observability Plus](/docs/observability/observability-plus)

## [Usage](#usage)

terminal

```
# Query metrics for the linked project
vercel metrics vercel.request.count

# Query a specific project by name or ID
vercel metrics vercel.request.count --project my-app --group-by route --since 24h

# Query metrics across all projects in the current team
vercel metrics vercel.request.count --all --group-by project_id --since 24h

# Inspect the schema for a metric prefix
vercel metrics schema vercel.request
```

Using the `vercel metrics` command to query observability data or inspect the
available schema for a metric.

## [Query output](#query-output)

By default, `vercel metrics` prints a human-readable table or time series summary. Use `--format json` to output structured JSON for automation or agents.

## [Unique options](#unique-options)

These options only apply to the `vercel metrics` command.

### [Metric](#metric)

The `<metric>` positional argument specifies the metric id to query. This argument is required.

terminal

```
vercel metrics vercel.request.count
```

To list all available metrics, use:

terminal

```
vercel metrics schema
```

To inspect a metric or metric prefix and see its available aggregations and dimensions, use:

terminal

```
vercel metrics schema vercel.request
```

### [Aggregation](#aggregation)

The `--aggregation` option, shorthand `-a`, specifies the aggregation function for the selected metric.

terminal

```
vercel metrics vercel.request.route_cpu_duration_ms --aggregation p95
```

If omitted, the CLI uses the default aggregation from the metric schema.

### [Group-by](#group-by)

The `--group-by` option groups results by one or more dimensions. Repeat it to group by multiple dimensions.

terminal

```
vercel metrics vercel.request.count --group-by route
vercel metrics vercel.request.count --group-by project_id --group-by route
```

### [Filter](#filter)

The `--filter` option, shorthand `-f`, applies an OData filter expression.

terminal

```
vercel metrics vercel.request.count --filter "route eq '/api/logs'"
```

### [Since](#since)

The `--since` option sets the start of the time range. You can use a relative duration like `1h`, `24h`, or `7d`, or an ISO timestamp. If omitted, the CLI defaults to the last hour.

terminal

```
vercel metrics vercel.request.count --since 24h
```

### [Until](#until)

The `--until` option sets the end of the time range. If omitted, the command uses the current time.

terminal

```
vercel metrics vercel.request.count --since 24h --until 2026-03-19T12:00:00Z
```

### [Granularity](#granularity)

The `--granularity` option, shorthand `-g`, controls the time bucket size. If omitted, the CLI computes an appropriate granularity for the selected time range.

terminal

```
vercel metrics vercel.request.count --granularity 1h --since 7d
```

### [Limit](#limit)

The `--limit` option sets the maximum number of grouped results returned per time bucket. The default is `10`.

terminal

```
vercel metrics vercel.request.count --group-by route --limit 50
```

### [Project](#project)

The `--project` option, shorthand `-p`, specifies the project name or project ID to query. It defaults to the linked project when `--all` is not set.

terminal

```
vercel metrics vercel.request.count --project my-app
vercel metrics vercel.request.count --project prj_123456789
```

### [All](#all)

The `--all` option queries across all projects in the current team scope. It cannot be combined with `--project`.

terminal

```
vercel metrics vercel.request.count --all --group-by project_id
```

### [Format](#format)

The `--format` option outputs JSON instead of text. This is useful for automation and agents.

terminal

```
vercel metrics vercel.request.count --format json
vercel metrics schema vercel.request --format json
```

## [Schema subcommand](#schema-subcommand)

Use the `schema` subcommand to:

* list all available metrics with `vercel metrics schema`
* inspect the dimensions and aggregations supported for a specific metric or metric prefix with `vercel metrics schema <metric-id-or-prefix>`

terminal

```
vercel metrics schema
vercel metrics schema vercel.request
vercel metrics schema vercel.request.count --format json
```

This is useful when building queries interactively or scripting queries that need to validate available fields first.

## [Examples](#examples)

Query request volume by route for the last 24 hours:

terminal

```
vercel metrics vercel.request.count --aggregation sum --group-by route --since 24h
```

Query p95 latency by route for a specific project:

terminal

```
vercel metrics vercel.request.route_cpu_duration_ms --project my-app --aggregation p95 --group-by route --since 24h
```

Query team-wide traffic grouped by project:

terminal

```
vercel metrics vercel.request.count --all --aggregation sum --group-by project_id --since 24h
```

Inspect the schema before building a query:

terminal

```
vercel metrics schema vercel.request
```

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel metrics` command:

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
