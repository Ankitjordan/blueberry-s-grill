Menu

# Running commands in a Vercel Sandbox

Last updated February 24, 2026

Use this guide to create isolated sandbox environments for running commands, builds, and tests. You'll create a sandbox, execute commands, copy files in and out, and save snapshots for reuse.

This guide requires the [Sandbox CLI](/docs/vercel-sandbox/cli-reference).
Install it with `npm i -g sandbox` and run `sandbox login` to
authenticate.

## [Quick reference](#quick-reference)

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

terminal

```
# 1. Create a sandbox
sandbox create --runtime node24 --timeout 1h --publish-port 3000

# 2. Copy project files into the sandbox
sandbox cp ./my-app/. <sandbox-id>:/app

# 3. Run commands inside the sandbox
sandbox exec --workdir /app <sandbox-id> "npm install"
sandbox exec --workdir /app <sandbox-id> "npm run build"
sandbox exec --workdir /app --env NODE_ENV=test <sandbox-id> "npm test"

# 4. Save the state as a snapshot for reuse
sandbox snapshot <sandbox-id> --stop

# 5. Create a new sandbox from the snapshot
sandbox create --snapshot <snapshot-id> --timeout 30m

# 6. Clean up
sandbox stop <sandbox-id>
```

## [1. Create a sandbox](#1.-create-a-sandbox)

Create a new sandbox environment with the runtime and configuration you need:

terminal

```
sandbox create --runtime node24 --timeout 1h
```

This creates a Node.js 24 sandbox that auto-stops after one hour. The command outputs the sandbox ID.

To make a port accessible via a public URL (useful for testing web applications):

terminal

```
sandbox create --runtime node24 --timeout 1h --publish-port 3000
```

For Python workloads:

terminal

```
sandbox create --runtime python3.13 --timeout 1h
```

To create a sandbox and immediately connect to an interactive shell:

terminal

```
sandbox create --runtime node24 --timeout 1h --connect
```

## [2. Copy files into the sandbox](#2.-copy-files-into-the-sandbox)

Copy your project files into the sandbox:

terminal

```
sandbox cp ./my-app/. <sandbox-id>:/app
```

You can also copy files out of the sandbox back to your local machine:

terminal

```
sandbox cp <sandbox-id>:/app/output/results.json ./results.json
```

## [3. Run commands](#3.-run-commands)

Execute commands inside the sandbox. Use `--workdir` to set the working directory:

terminal

```
sandbox exec --workdir /app <sandbox-id> "npm install"
```

terminal

```
sandbox exec --workdir /app <sandbox-id> "npm run build"
```

To pass environment variables to the command:

terminal

```
sandbox exec --workdir /app --env NODE_ENV=test <sandbox-id> "npm test"
```

For commands that need elevated permissions:

terminal

```
sandbox exec --sudo <sandbox-id> "apt-get update && apt-get install -y jq"
```

## [4. Connect to an interactive shell](#4.-connect-to-an-interactive-shell)

For exploratory work or debugging, connect to the sandbox interactively:

terminal

```
sandbox connect <sandbox-id>
```

This opens a shell session inside the sandbox. Exit the shell to disconnect.

## [5. Save a snapshot](#5.-save-a-snapshot)

After setting up a sandbox with dependencies installed and configured, save it as a snapshot so you can recreate the same environment later:

terminal

```
sandbox snapshot <sandbox-id> --stop
```

Snapshotting always stops the sandbox automatically. The `--stop` flag confirms you acknowledge this behavior.

To list your saved snapshots:

terminal

```
sandbox snapshots list
```

## [6. Create a sandbox from a snapshot](#6.-create-a-sandbox-from-a-snapshot)

Recreate an environment from a saved snapshot:

terminal

```
sandbox create --snapshot <snapshot-id> --timeout 30m
```

This starts a new sandbox with all the files, dependencies, and configuration from the snapshot already in place.

## [7. Quick one-off commands](#7.-quick-one-off-commands)

For simple tasks where you don't need to manage the sandbox lifecycle, use `sandbox run`. This creates a sandbox, runs a command, and optionally cleans up:

terminal

```
sandbox run --runtime node24 --rm -- node -e 'console.log(process.version)'
```

The `--rm` flag automatically deletes the sandbox after the command finishes.

## [8. Configure network access](#8.-configure-network-access)

Control what network resources the sandbox can reach:

terminal

```
sandbox create --runtime node24 --timeout 1h --network-policy deny-all --allowed-domain "*.npmjs.org" --allowed-domain "registry.npmjs.org"
```

To update the network policy of an existing sandbox:

terminal

```
sandbox config network-policy <sandbox-id> --network-policy deny-all --allowed-domain "api.example.com"
```

## [9. Clean up](#9.-clean-up)

Stop and remove a sandbox when you're done:

terminal

```
sandbox stop <sandbox-id>
```

To stop multiple sandboxes:

terminal

```
sandbox stop <sandbox-id-1> <sandbox-id-2>
```

To see all running sandboxes:

terminal

```
sandbox list
```

To include stopped sandboxes:

terminal

```
sandbox list --all
```

## [When to delete snapshots](#when-to-delete-snapshots)

Remove snapshots you no longer need to keep your environment clean:

terminal

```
sandbox snapshots delete <snapshot-id>
```

## [Related](#related)

* [Sandbox CLI reference](/docs/vercel-sandbox/cli-reference)
* [Vercel Sandbox overview](/docs/vercel-sandbox)

---

[Previous

Pricing and Limits](/docs/vercel-sandbox/pricing)[Next

Queues](/docs/queues)

Was this helpful?
