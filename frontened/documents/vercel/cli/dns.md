Menu

# vercel dns

Last updated March 17, 2026

The `vercel dns` command is used to manage DNS record for domains, providing functionality to list, add, remove, and import records.

When adding DNS records, please wait up to 24 hours for new records to
propagate.

## [Usage](#usage)

terminal

```
vercel dns ls
```

Using the `vercel dns` command to list all DNS records
under the current scope.

## [Extended Usage](#extended-usage)

terminal

```
vercel dns add [domain] [subdomain] [A || AAAA || ALIAS || CNAME || TXT] [value]
```

Using the `vercel dns` command to add an A record for a
subdomain.

terminal

```
vercel dns add [domain] '@' MX [record-value] [priority]
```

Using the `vercel dns` command to add an MX record for
a domain.

terminal

```
vercel dns add [domain] [name] SRV [priority] [weight] [port] [target]
```

Using the `vercel dns` command to add an SRV record for
a domain.

terminal

```
vercel dns add [domain] [name] CAA '[flags] [tag] "[value]"'
```

Using the `vercel dns` command to add a CAA record for
a domain.

terminal

```
vercel dns rm [record-id]
```

Using the `vercel dns` command to remove a record for a
domain.

terminal

```
vercel dns import [domain] [path-to-zonefile]
```

Using the `vercel dns` command to import a zonefile for
a domain.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel dns` command.

### [Limit](#limit)

The `--limit` option can be used to specify the maximum number of dns records returned when using `ls`. The default value is `20` and the maximum is `100`.

terminal

```
vercel dns ls --limit 100
```

Using the `vercel dns ls` command with the
`--limit` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel dns` command:

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

vercel dev](/docs/cli/dev)[Next

vercel domains](/docs/cli/domains)

Was this helpful?
