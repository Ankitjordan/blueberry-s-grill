Menu

# vercel certs

Last updated March 17, 2026

The `vercel certs` command is used to manage certificates for domains, providing functionality to list, issue, and remove them. Vercel manages certificates for domains automatically.

## [Usage](#usage)

terminal

```
vercel certs ls
```

Using the `vercel certs` command to list all
certificates under the current scope.

## [Extended Usage](#extended-usage)

terminal

```
vercel certs issue [domain1, domain2, domain3]
```

Using the `vercel certs` command to issue certificates
for multiple domains.

terminal

```
vercel certs rm [certificate-id]
```

Using the `vercel certs` command to remove a
certificate by ID.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel certs` command.

### [Challenge Only](#challenge-only)

The `--challenge-only` option can be used to only show the challenges needed to issue a certificate. This is useful when [pre-generating SSL certificates](/docs/domains/pre-generating-ssl-certs).

terminal

```
vercel certs issue foo.com --challenge-only
```

Using the `vercel certs` command with the
`--challenge-only` option.

### [Limit](#limit)

The `--limit` option can be used to specify the maximum number of certs returned when using `ls`. The default value is `20` and the maximum is `100`.

terminal

```
vercel certs ls --limit 100
```

Using the `vercel certs ls` command with the
`--limit` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel certs` command:

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

vercel cache](/docs/cli/cache)[Next

vercel contract](/docs/cli/contract)

Was this helpful?
