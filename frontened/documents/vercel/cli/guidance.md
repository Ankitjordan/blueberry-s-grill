Menu

# vercel guidance

Last updated March 17, 2026

The `vercel guidance` command allows you to enable or disable guidance messages. Guidance messages are helpful suggestions shown after certain CLI commands complete, such as recommended next steps after a deployment.

## [Usage](#usage)

terminal

```
vercel guidance <subcommand>
```

Using the `vercel guidance` command to manage guidance
message settings.

## [Subcommands](#subcommands)

### [enable](#enable)

Enable guidance messages to receive command suggestions after operations complete.

terminal

```
vercel guidance enable
```

Using `vercel guidance enable` to turn on guidance
messages.

### [disable](#disable)

Disable guidance messages if you prefer a quieter CLI experience.

terminal

```
vercel guidance disable
```

Using `vercel guidance disable` to turn off guidance
messages.

### [status](#status)

Check whether guidance messages are currently enabled or disabled.

terminal

```
vercel guidance status
```

Using `vercel guidance status` to see the current
guidance setting.

## [Examples](#examples)

### [Enable guidance after deployment](#enable-guidance-after-deployment)

terminal

```
vercel guidance enable
vercel deploy
```

After enabling guidance, deployments will show suggested next steps.

### [Check current status](#check-current-status)

terminal

```
vercel guidance status
```

Shows whether guidance messages are enabled or disabled.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel guidance` command:

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

vercel git](/docs/cli/git)[Next

vercel help](/docs/cli/help)

Was this helpful?
