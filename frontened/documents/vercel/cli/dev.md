Menu

# vercel dev

Last updated March 17, 2026

The `vercel dev` command is used to replicate the Vercel deployment environment locally, allowing you to test your [Vercel Functions](/docs/functions) and [Middleware](/docs/routing-middleware) without requiring you to deploy each time a change is made.

If the [Development Command](/docs/deployments/configure-a-build#development-command) is configured in your Project Settings, it will affect the behavior of `vercel dev` for everyone on that team.

Before running `vercel dev`, make sure to install your
dependencies by running `npm install`.

## [When to Use This Command](#when-to-use-this-command)

If you're using a framework and your framework's [Development Command](/docs/deployments/configure-a-build#development-command) already provides all the features you need, we do not recommend using `vercel dev`.

For example, [Next.js](/docs/frameworks/nextjs)'s Development Command (`next dev`) provides native support for Functions, [redirects](/docs/redirects#configuration-redirects), rewrites, headers and more.

## [Usage](#usage)

terminal

```
vercel dev
```

Using the `vercel dev` command from the root of a
Vercel Project directory.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel dev` command.

### [Listen](#listen)

The `--listen` option, shorthand `-l`, can be used to specify which port `vercel dev` runs on.

terminal

```
vercel dev --listen 5005
```

Using the `vercel dev` command with the
`--listen` option.

### [Yes](#yes)

The `--yes` option can be used to skip questions you are asked when setting up a new Vercel Project.
The questions will be answered with the default scope and current directory for the Vercel Project name and location.

terminal

```
vercel dev --yes
```

Using the `vercel dev` command with the
`--yes` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel dev` command:

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

vercel deploy](/docs/cli/deploy)[Next

vercel dns](/docs/cli/dns)

Was this helpful?
