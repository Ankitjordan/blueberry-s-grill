Menu

# Sandbox SDK Reference

Last updated March 9, 2026

The Vercel Sandbox Software Development Kit (SDK) lets you create ephemeral Linux microVMs on demand. Use it to evaluate user-generated code, run AI agent output safely, test services without touching production resources, or run reproducible integration tests that need a full Linux environment with sudo access.

## [Prerequisites](#prerequisites)

Install the SDK:

Terminal

```
pnpm i @vercel/sandbox
```

After installation:

* Link your project and pull environment variables with `vercel link` and `vercel env pull` so the SDK can read a Vercel OpenID Connect (OIDC) token.
* Choose a runtime: `node26`, `node24`, `node22`, or `python3.13`.

## [Core classes](#core-classes)

| Class | What it does | Example |
| --- | --- | --- |
| [`Sandbox`](#sandbox-class) | Creates and manages isolated microVM environments | `const sandbox = await Sandbox.create()` |
| [`FileSystem`](#filesystem-class) | Provides a `node:fs/promises`-compatible API | `await sandbox.fs.readFile('/tmp/a.txt')` |
| [`Command`](#command-class) | Handles running commands inside the sandbox | `const cmd = await sandbox.runCommand()` |
| [`CommandFinished`](#commandfinished-class) | Contains the result after a command completes | Access `cmd.exitCode` and `cmd.stdout()` |
| [`NetworkPolicy`](#networkpolicy-class) | Defines firewall rules for sandbox traffic | `Sandbox.create({ networkPolicy: 'deny-all' })` |
| [`Snapshot`](#snapshot-class) | Represents a saved sandbox state for fast restarts | `const snapshot = await sandbox.snapshot()` |

### [Basic workflow](#basic-workflow)

```
// 1. Create a sandbox
const sandbox = await Sandbox.create({ runtime: 'node24' });

// 2. Run a command - it waits for completion and returns the result
const result = await sandbox.runCommand('node', ['--version']);

// 3. Check the result
console.log(result.exitCode); // 0
console.log(await result.stdout()); // v22.x.x
```

## [Sandbox class](#sandbox-class)

The `Sandbox` class gives you full control over isolated Linux microVMs. Use it to create new sandboxes, inspect active ones, stream command output, and shut everything down once your workflow is complete.

### [Sandbox class accessors](#sandbox-class-accessors)

#### [`sandboxId`](#sandboxid)

Use `sandboxId` to identify the current microVM so you can reconnect to it later with `Sandbox.get()` or trace command history. Store this ID whenever your workflow spans multiple processes or retries so you can resume log streaming after a restart.

Returns: `string`.

```
console.log(sandbox.sandboxId);
```

#### [`status`](#status)

The `status` accessor reports the lifecycle state of the sandbox so you can decide when to queue new work or perform cleanup. Poll this value when you need to wait for startup or confirm shutdown, and treat `failed` as a signal to create a new sandbox.

Returns: `"pending" | "running" | "stopping" | "stopped" | "failed"`.

```
console.log(sandbox.status);
```

#### [`timeout`](#timeout)

`timeout` shows how many milliseconds remain before the sandbox stops automatically. Compare the remaining time against upcoming commands and call `sandbox.extendTimeout()` if the window is too short.

Returns: `number`.

```
console.log(sandbox.timeout);
```

#### [`createdAt`](#createdat)

The `createdAt` accessor returns the date and time when the sandbox was created. Use this to track the sandbox age or calculate how long a sandbox has been running.

Returns: `Date`.

```
console.log(sandbox.createdAt);
```

#### [`activeCpuUsageMs`](#activecpuusagems)

The `activeCpuUsageMs` accessor returns the amount of CPU used for this sandbox (in milliseconds). It is only available once the sandbox VM has stopped. Use this to track the billable CPU.

Returns: `number`.

```
console.log(sandbox.activeCpuUsageMs);
```

#### [`networkUsage`](#networkusage)

The `networkUsage` accessor returns the amount of network data used by this sandbox (in bytes). It is only available once the sandbox VM has stopped. Use this to track the billable data usage.

Returns: `{ingress: number, egress: number}`.

```
console.log(sandbox.networkUsage);
```

### [Sandbox class static methods](#sandbox-class-static-methods)

#### [`Sandbox.list()`](#sandbox.list)

Use `Sandbox.list()` to enumerate sandboxes for a project, optionally filtering by time range or page size. Combine `since` and `until` with the pagination cursor and cache the last `pagination.next` value so you can resume after restarts without missing entries.

Returns: `Promise<Parsed<{ sandboxes: SandboxSummary[]; pagination: Pagination; }>>`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `projectId` | `string` | No | Project whose sandboxes you want to list. |
| `limit` | `number` | No | Maximum number of sandboxes to return. |
| `since` | `number | Date` | No | List sandboxes created after this time. |
| `until` | `number | Date` | No | List sandboxes created before this time. |
| `signal` | `AbortSignal` | No | Cancel the request if necessary. |

```
const { json: { sandboxes, pagination } } = await Sandbox.list();
```

#### [`Sandbox.create()`](#sandbox.create)

`Sandbox.create()` launches a new microVM with your chosen runtime, source, and resource settings. Defaults to an empty workspace when no source is provided. Pass `source.depth` when cloning large repositories to shorten setup time.

Returns: `Promise<Sandbox>`.

| Parameter | Type | Required | Details / Values |
| --- | --- | --- | --- |
| `source` | `git` | No | Clone a Git repository.   `url`: string  `username`: string  `password`: string  `depth`?: number  `revision`?: string |
| `source` | `tarball` | No | Mount a tarball.   `url`: string |
| `source` | `snapshot` | No | Create from a snapshot.   `snapshotId`: string |
| `resources.vcpus` | `number` | No | Number of vCPUs to use. Defaults to 2. |
| `runtime` | `string` | No | Runtime image such as `"node26"`, `"node24"`, `"node22"`, or `"python3.13"`. |
| `ports` | `number[]` | No | Ports to expose for `sandbox.domain()`. |
| `timeout` | `number` | No | Initial timeout in milliseconds. |
| `networkPolicy` | `NetworkPolicy` | No | Firewall rules for sandbox egress traffic (defaults to global Internet access). |
| `env` | `Record<string, string>` | No | Default environment variables for commands run in this sandbox. Per-command `runCommand({ env })` values override these defaults. |
| `signal` | `AbortSignal` | No | Cancel sandbox creation. |

```
const sandbox = await Sandbox.create({
  runtime: 'node24',
  networkPolicy: 'deny-all',
  env: { NODE_ENV: 'production' },
});
```

#### [`Sandbox.get()`](#sandbox.get)

`Sandbox.get()` rehydrates an active sandbox by ID so you can resume work or inspect logs. It throws if the sandbox no longer exists, so cache `sandboxId` only while the job is active and clear it once the sandbox stops.

Returns: `Promise<Sandbox>`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `sandboxId` | `string` | Yes | Identifier of the sandbox to retrieve. |
| `signal` | `AbortSignal` | No | Cancel the request if necessary. |

```
const sandbox = await Sandbox.get({ sandboxId });
```

### [Sandbox class instance methods](#sandbox-class-instance-methods)

#### [`sandbox.getCommand()`](#sandbox.getcommand)

Call `sandbox.getCommand()` to retrieve a previously executed command by its ID, which is especially helpful after detached executions when you want to inspect logs later.

Returns: `Promise<Command>`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `cmdId` | `string` | Yes | Identifier of the command to fetch. |
| `opts.signal` | `AbortSignal` | No | Cancel the lookup if it takes too long. |

```
const command = await sandbox.getCommand(cmdId);
```

#### [`sandbox.runCommand()`](#sandbox.runcommand)

`sandbox.runCommand()` executes commands inside the microVM, either blocking until completion or returning immediately in detached mode. Use `detached: true` for long-running servers, stream output to local log handlers, and call `command.wait()` later for results.

Returns: `Promise<CommandFinished>` when `detached` is `false`; `Promise<Command>` when `detached` is `true`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `command` | `string` | Yes | Command to execute (string overload). |
| `args` | `string[]` | No | Arguments for the string overload. |
| `opts.signal` | `AbortSignal` | No | Cancel the command (string overload). |
| `params.cmd` | `string` | Yes | Command to execute when using the object overload. |
| `params.args` | `string[]` | No | Arguments for the object overload. |
| `params.cwd` | `string` | No | Working directory for execution. |
| `params.env` | `Record<string, string>` | No | Additional environment variables. |
| `params.sudo` | `boolean` | No | Run the command with sudo. |
| `params.detached` | `boolean` | No | Return immediately with a live `Command` object. |
| `params.stdout` | `Writable` | No | Stream standard output to a writable. |
| `params.stderr` | `Writable` | No | Stream standard error to a writable. |
| `params.signal` | `AbortSignal` | No | Cancel the command when using the object overload. |

```
const result = await sandbox.runCommand('node', ['--version']);
```

#### [`sandbox.mkDir()`](#sandbox.mkdir)

`sandbox.mkDir()` creates a directory in the sandbox filesystem before you write files or clone repositories. Paths are relative to `/vercel/sandbox` unless you provide an absolute path. Call this before `writeFiles()` when your target directory does not exist yet.

```
await sandbox.mkDir('assets');
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `path` | `string` | Yes | Directory to create. |
| `opts.signal` | `AbortSignal` | No | Cancel the operation. |

Returns: `Promise<void>`.

#### [`sandbox.readFile()`](#sandbox.readfile)

Use `sandbox.readFile()` to pull file contents from the sandbox to a `ReadableStream`. The promise resolves to `null` when the file does not exist. You can use [`sandbox.readFileToBuffer()`](#sandbox.readfiletobuffer) directly if you prefer receiving a `Buffer`.

```
const stream = await sandbox.readFile({ path: 'package.json' });
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `file.path` | `string` | Yes | Path to the file inside the sandbox. |
| `file.cwd` | `string` | No | Base directory for resolving `file.path`. |
| `opts.signal` | `AbortSignal` | No | Cancel the read operation. |

Returns: `Promise<null | ReadableStream>`.

#### [`sandbox.readFileToBuffer()`](#sandbox.readfiletobuffer)

Use `sandbox.readFileToBuffer()` to pull entire file contents from the sandbox to an in-memory buffer. The promise resolves to `null` when the file does not exist.

```
const buffer = await sandbox.readFileToBuffer({ path: 'package.json' });
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `file.path` | `string` | Yes | Path to the file inside the sandbox. |
| `file.cwd` | `string` | No | Base directory for resolving `file.path`. |
| `opts.signal` | `AbortSignal` | No | Cancel the read operation. |

Returns: `Promise<null | Buffer>`.

#### [`sandbox.downloadFile()`](#sandbox.downloadfile)

Use `sandbox.downloadFile()` to pull file contents from the sandbox to a local destination. The promise resolves to the absolute destination path or `null` when the source file does not exist.

```
const dstPath = await sandbox.downloadFile(
  { path: 'package.json', cwd: '/vercel/sandbox' },
  { path: 'local-package.json', cwd: '/tmp' }
);
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `src.path` | `string` | Yes | Path to the file inside the sandbox. |
| `src.cwd` | `string` | No | Base directory for resolving `src.path`. |
| `dst.path` | `string` | Yes | Path to local destination. |
| `dst.cwd` | `string` | No | Base directory for resolving `dst.path`. |
| `opts.signal` | `AbortSignal` | No | Cancel the download operation. |
| `opts.mkdirRecursive` | `boolean` | No | Create destination directories recursively if they do not exist. |

Returns: `Promise<null | string>`.

#### [`sandbox.writeFiles()`](#sandbox.writefiles)

`sandbox.writeFiles()` uploads one or more files into the sandbox filesystem. Paths default to `/vercel/sandbox`; use absolute paths for custom locations and bundle related files into a single call to reduce round trips.

```
await sandbox.writeFiles([{ path: 'hello.txt', content: Buffer.from('hi') }]);
```

You can set Unix file permissions using the optional `mode` property. For example, use `0o755` for executable scripts:

```
await sandbox.writeFiles([
  { path: 'run.sh', content: Buffer.from('#!/bin/bash\necho "Hello"'), mode: 0o755 },
]);
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `files` | `{ path: string; content: Buffer; mode?: number; }[]` | Yes | File descriptors to write. |
| `files.path` | `string` | Yes | Path to the file inside the sandbox. |
| `files.content` | `Buffer` | Yes | File contents as a Buffer. |
| `files.mode` | `number` | No | Unix file permissions in octal (for example, `0o644` for read/write, `0o755` for executable). |
| `opts.signal` | `AbortSignal` | No | Cancel the write operation. |

Returns: `Promise<void>`.

#### [`sandbox.domain()`](#sandbox.domain)

`sandbox.domain()` resolves a publicly accessible URL for a port you exposed during creation. It throws if the port is not registered to a route, so include the port in the `ports` array when creating the sandbox and cache the returned URL so you can share it quickly with collaborators.

```
const previewUrl = sandbox.domain(3000);
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `p` | `number` | Yes | Port number declared in `ports`. |

Returns: `string`.

#### [`sandbox.stop()`](#sandbox.stop)

Call `sandbox.stop()` to terminate the microVM and free resources immediately. It's safe to call multiple times; subsequent calls resolve once the sandbox is already stopped, so invoke it as soon as you collect artifacts to control costs.

```
// Trigger sandbox shutdown asynchronously
await sandbox.stop();

// Trigger sandbox shutdown synchronously.
const stoppedSandbox = await sandbox.stop({ blocking: true });
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `opts.blocking` | `boolean` | No | Wait for the sandbox to be marked stopped. |
| `opts.signal` | `AbortSignal` | No | Cancel the stop operation. |

Returns: `Promise<Sandbox>`.

#### [`sandbox.updateNetworkPolicy()`](#sandbox.updatenetworkpolicy)

Use `sandbox.updateNetworkPolicy()` to update the firewall settings applied to the sandbox egress traffic. The provided configuration fully replaces the pre-existing one. This allows for instance a user to start a sandbox, gather data, then run some untrusted program on it without risking data exfiltration.

```
await sandbox.updateNetworkPolicy('allow-all'); // Allow all egress from the sandbox

await sandbox.updateNetworkPolicy('deny-all'); // Block all egress from the sandbox

await sandbox.updateNetworkPolicy({allow: ["google.com", "ai-gateway.vercel.sh"]}); // Allow traffic to specific websites only

// Allow traffic to specific websites and private network
await sandbox.updateNetworkPolicy({
  allow: ["google.com", "ai-gateway.vercel.sh"],
  subnets: {
    allow: ["10.0.0.0/8"],
  },
});

// Allow traffic to the Internet while blocking private network
await sandbox.updateNetworkPolicy({
  subnets: {
    deny: ["10.0.0.0/8"],
  },
});

// Allow traffic to a specific website with credential brokering
await sandbox.updateNetworkPolicy({
  allow: {
    "ai-gateway.vercel.sh": [{
      transform: [{
        headers: {
          "x-api-key": "secret-key"
        }
      }]
    }]
  }
});
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `networkPolicy` | `NetworkPolicy` | Yes | New firewall setup. Will fully replace the existing one. |
| `opts.signal` | `AbortSignal` | No | Cancel the operation. |

Returns: `Promise<void>`.

#### [`sandbox.extendTimeout()`](#sandbox.extendtimeout)

Use `sandbox.extendTimeout()` to extend the sandbox lifetime by the specified duration. This lets you keep the sandbox running up to the maximum execution timeout for your plan, so check `sandbox.timeout` first and extend only when necessary to avoid premature shutdown.

```
await sandbox.extendTimeout(60000); // Extend by 60 seconds
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `duration` | `number` | Yes | Duration in milliseconds to extend the timeout by. |
| `opts.signal` | `AbortSignal` | No | Cancel the operation. |

Returns: `Promise<void>`.

#### [`sandbox.snapshot()`](#sandbox.snapshot)

Call `sandbox.snapshot()` to capture the current state of the sandbox, including the filesystem and installed packages. Use snapshots to skip lengthy setup steps when creating new sandboxes. To learn more, see [Snapshots](/docs/vercel-sandbox/concepts/snapshots).

The sandbox must be running to create a snapshot. Once you call this method, the sandbox shuts down automatically and becomes unreachable. You do not need to call `stop()` afterwards, and any subsequent commands to the sandbox will fail.

Snapshots expire after 30 days by default. Set `expiration` to `0` to disable expiration,
or choose a custom duration in milliseconds (e.g., `ms('14d')`) to fit your workflow.

index.ts

```
const snapshot = await sandbox.snapshot({ expiration: ms('14d') });
console.log(snapshot.snapshotId);

// Later, create a new sandbox from the snapshot
const newSandbox = await Sandbox.create({
  source: { type: 'snapshot', snapshotId: snapshot.snapshotId },
});
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `opts.expiration` | `number` | No | Optional expiration time in milliseconds. Use 0 for no expiration at all. |
| `opts.signal` | `AbortSignal` | No | Cancel the operation. |

Returns: `Promise<Snapshot>`.

## [FileSystem class](#filesystem-class)

`FileSystem` gives you a `node:fs/promises`-compatible surface for sandbox files and directories. Use it through `sandbox.fs` to keep code portable when you already have utilities that expect familiar Node.js filesystem methods.

```
const sandbox = await Sandbox.create({ runtime: 'node24' });

await sandbox.fs.writeFile('/tmp/hello.txt', 'hello from sandbox');
const text = await sandbox.fs.readFile('/tmp/hello.txt', 'utf8');
console.log(text);
```

`FileSystem` currently implements a focused subset of `node:fs/promises` for sandbox
workflows. APIs such as file handles and watchers are not currently included.

### [FileSystem class methods](#filesystem-class-methods)

All methods support `AbortSignal` through an options object.
Methods throw Node.js-style filesystem errors with fields such as `code`, `syscall`, and `path`.

#### [Read and write file contents](#read-and-write-file-contents)

| Method | Signature summary | Returns |
| --- | --- | --- |
| `sandbox.fs.readFile()` | `path`, optional encoding (`'utf8'` or `{ encoding, signal }`) | `Promise<Buffer | string>` |
| `sandbox.fs.writeFile()` | `path`, `string | Buffer | Uint8Array`, optional `{ encoding, signal }` | `Promise<void>` |
| `sandbox.fs.appendFile()` | `path`, `string | Buffer | Uint8Array`, optional `{ encoding, signal }` | `Promise<void>` |

```
await sandbox.fs.writeFile('/tmp/config.json', JSON.stringify({ mode: 'test' }));
const config = await sandbox.fs.readFile('/tmp/config.json', 'utf8');
await sandbox.fs.appendFile('/tmp/config.json', '\n');
```

#### [Create, inspect, and enumerate paths](#create-inspect-and-enumerate-paths)

| Method | Signature summary | Returns |
| --- | --- | --- |
| `sandbox.fs.mkdir()` | `path`, optional `{ recursive, signal }` | `Promise<string | undefined>` |
| `sandbox.fs.readdir()` | `path`, optional `{ withFileTypes, signal }` | `Promise<string[] | Dirent[]>` |
| `sandbox.fs.stat()` | `path`, optional `{ signal }` | `Promise<Stats>` |
| `sandbox.fs.lstat()` | `path`, optional `{ signal }` | `Promise<Stats>` |
| `sandbox.fs.realpath()` | `path`, optional `{ signal }` | `Promise<string>` |
| `sandbox.fs.mkdtemp()` | `prefix`, optional `{ signal }` | `Promise<string>` |

```
await sandbox.fs.mkdir('/tmp/results', { recursive: true });

const entries = await sandbox.fs.readdir('/tmp', { withFileTypes: true });
for (const entry of entries) {
  if (entry.isDirectory()) console.log(`dir: ${entry.name}`);
}

const stats = await sandbox.fs.stat('/tmp/results');
console.log(stats.isDirectory()); // true
```

#### [Update, copy, or remove files and directories](#update-copy-or-remove-files-and-directories)

| Method | Signature summary | Returns |
| --- | --- | --- |
| `sandbox.fs.unlink()` | `path`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.rm()` | `path`, optional `{ recursive, force, signal }` | `Promise<void>` |
| `sandbox.fs.rmdir()` | `path`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.rename()` | `oldPath`, `newPath`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.copyFile()` | `src`, `dest`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.truncate()` | `path`, optional `len`, optional `{ signal }` | `Promise<void>` |

```
await sandbox.fs.copyFile('/tmp/input.txt', '/tmp/output.txt');
await sandbox.fs.rename('/tmp/output.txt', '/tmp/final.txt');
await sandbox.fs.truncate('/tmp/final.txt', 1024);
await sandbox.fs.rm('/tmp/final.txt');
```

#### [Manage permissions, ownership, and symbolic links](#manage-permissions-ownership-and-symbolic-links)

| Method | Signature summary | Returns |
| --- | --- | --- |
| `sandbox.fs.chmod()` | `path`, mode (`number | string`), optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.chown()` | `path`, `uid`, `gid`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.symlink()` | `target`, `path`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.readlink()` | `path`, optional `{ signal }` | `Promise<string>` |

```
await sandbox.fs.chmod('/tmp/script.sh', 0o755);
await sandbox.fs.symlink('/tmp/script.sh', '/tmp/current-script');
const linkTarget = await sandbox.fs.readlink('/tmp/current-script');
console.log(linkTarget);
```

#### [Check existence and accessibility](#check-existence-and-accessibility)

| Method | Signature summary | Returns |
| --- | --- | --- |
| `sandbox.fs.access()` | `path`, optional `{ signal }` | `Promise<void>` |
| `sandbox.fs.exists()` | `path`, optional `{ signal }` | `Promise<boolean>` |

```
await sandbox.fs.access('/tmp/config.json');
const hasCache = await sandbox.fs.exists('/tmp/cache.db');
```

`sandbox.fs.exists()` is a convenience helper that is not part of the Node.js `node:fs/promises` API.
`sandbox.fs.access()` currently checks path existence.

## [Command class](#command-class)

`Command` instances represent processes that run inside a sandbox. Detached executions created through `sandbox.runCommand({ detached: true, ... })` return a `Command` immediately so that you can stream logs or stop the process later. Blocking executions that do not set `detached` still expose these methods through the `CommandFinished` object they resolve to.

### [Command class properties](#command-class-properties)

#### [`exitCode`](#exitcode)

The `exitCode` property holds the process exit status once the command finishes. For detached commands, this value starts as `null` and gets populated after you await `command.wait()`, so check for `null` to determine if the command is still running.

```
if (command.exitCode !== null) {
  console.log(`Command exited with code: ${command.exitCode}`);
}
```

Returns: `number | null`.

### [Command class accessors](#command-class-accessors)

#### [`cmdId`](#cmdid)

Use `cmdId` to identify the specific command execution so you can look it up later with `sandbox.getCommand()`. Store this value whenever you launch detached commands so you can replay output in dashboards or correlate logs across systems.

```
console.log(command.cmdId);
```

Returns: `string`.

#### [`cwd`](#cwd)

The `cwd` accessor shows the working directory where the command is executing. Compare this value against expected paths when debugging file-related issues or verifying that relative paths resolve correctly.

```
console.log(command.cwd);
```

Returns: `string`.

#### [`startedAt`](#startedat)

`startedAt` returns the Unix timestamp (in milliseconds) when the command started executing. Subtract this from the current time to monitor execution duration or set timeout thresholds for long-running processes.

```
const duration = Date.now() - command.startedAt;
console.log(`Command has been running for ${duration}ms`);
```

Returns: `number`.

### [Command class methods](#command-class-methods)

#### [`logs()`](#logs)

Call `logs()` to stream structured log entries in real time so you can watch command output as it happens. Each entry includes the stream type (`stdout` or `stderr`) and the data chunk, so you can route logs to different destinations or stop iteration when you detect a readiness signal.

```
for await (const log of command.logs()) {
  if (log.stream === 'stdout') {
    process.stdout.write(log.data);
  } else {
    process.stderr.write(log.data);
  }
}
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `opts.signal` | `AbortSignal` | No | Cancel log streaming if needed. |

Returns: `AsyncGenerator<{ stream: "stdout" | "stderr"; data: string; }, void, void>`.

Note: May throw `StreamError` if the sandbox stops while streaming logs.

#### [`wait()`](#wait)

Use `wait()` to block until a detached command finishes and get the resulting `CommandFinished` object with the populated exit code. This method is essential for detached commands where you need to know when execution completes. For non-detached commands, `sandbox.runCommand()` already waits automatically.

```
const detachedCmd = await sandbox.runCommand({
  cmd: 'sleep',
  args: ['5'],
  detached: true,
});
const result = await detachedCmd.wait();
if (result.exitCode !== 0) {
  console.error('Something went wrong...');
}
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `params.signal` | `AbortSignal` | No | Cancel waiting if you need to abort early. |

Returns: `Promise<CommandFinished>`.

#### [`output()`](#output)

Use `output()` to retrieve stdout, stderr, or both as a single string. Choose `"both"` when you want combined output for logging, or specify `"stdout"` or `"stderr"` when you need to process them separately after the command finishes.

```
const combined = await command.output('both');
const stdoutOnly = await command.output('stdout');
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `stream` | `"stdout" | "stderr" | "both"` | Yes | The output stream to read. |
| `opts.signal` | `AbortSignal` | No | Cancel output streaming. |

Returns: `Promise<string>`.

Note: This may throw string conversion errors if the command output contains invalid Unicode.

#### [`stdout()`](#stdout)

`stdout()` collects the entire standard output stream as a string, which is handy when commands print JSON or other structured data that you need to parse after completion.

```
const output = await command.stdout();
const data = JSON.parse(output);
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `opts.signal` | `AbortSignal` | No | Cancel the read while the command runs. |

Returns: `Promise<string>`.

Note: This may throw string conversion errors if the command output contains invalid Unicode.

#### [`stderr()`](#stderr)

`stderr()` gathers all error output produced by the command. Combine this with `exitCode` to build user-friendly error messages or forward failure logs to your monitoring system.

```
const errors = await command.stderr();
if (errors) {
  console.error('Command errors:', errors);
}
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `opts.signal` | `AbortSignal` | No | Cancel the read while collecting error output. |

Returns: `Promise<string>`.

Note: This may throw string conversion errors if the command output contains invalid Unicode.

#### [`kill()`](#kill)

Call `kill()` to terminate a running command using the specified signal. This lets you stop long-running processes without destroying the entire sandbox. Send `SIGTERM` by default for graceful shutdown, or use `SIGKILL` for immediate termination.

```
await command.kill('SIGKILL');
```

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `signal` | `Signal` | No | The signal to send to the process. Defaults to `SIGTERM`. |
| `opts.abortSignal` | `AbortSignal` | No | Cancel the kill operation. |

Returns: `Promise<void>`.

## [CommandFinished class](#commandfinished-class)

`CommandFinished` is the result you receive after a sandbox command exits. It extends the `Command` class, so you keep access to streaming helpers such as `logs()` or `stdout()`, but you also get the final exit metadata immediately. You usually receive this object from `sandbox.runCommand()` or by awaiting `command.wait()` on a detached process.

### [CommandFinished class properties](#commandfinished-class-properties)

#### [`exitCode`](#exitcode)

The `exitCode` property reports the numeric status returned by the command. A value of `0` indicates success; any other value means the process exited with an error, so branch on it before you parse output.

```
if (result.exitCode === 0) {
  console.log('Command succeeded');
}
```

Returns: `number`.

### [CommandFinished class accessors](#commandfinished-class-accessors)

#### [`cmdId`](#cmdid)

Use `cmdId` to identify the specific command execution so you can reference it in logs or retrieve it later with `sandbox.getCommand()`. Store this ID whenever you need to trace command history or correlate output across retries.

```
console.log(result.cmdId);
```

Returns: `string`.

#### [`cwd`](#cwd)

The `cwd` accessor shows the working directory where the command executed. Compare this value against expected paths when debugging file-related failures or relative path issues.

```
console.log(result.cwd);
```

Returns: `string`.

#### [`startedAt`](#startedat)

`startedAt` returns the Unix timestamp (in milliseconds) when the command started executing. Subtract this from the current time or from another timestamp to measure execution duration or schedule follow-up tasks.

```
const duration = Date.now() - result.startedAt;
console.log(`Command took ${duration}ms`);
```

Returns: `number`.

### [CommandFinished class methods](#commandfinished-class-methods)

`CommandFinished` inherits all methods from `Command` including `logs()`, `output()`, `stdout()`, `stderr()`, and `kill()`. See the [Command class](#command-class) section for details on these methods.

## [NetworkPolicy class](#networkpolicy-class)

`NetworkPolicy` instances represent the firewall setup of the sandbox. To learn more, see [network firewall](/docs/vercel-sandbox/concepts/firewall).

### [Base modes](#base-modes)

#### [`allow-all`](#allow-all)

The `allow-all` mode is the default applicable policy for sandboxes. It allows all egress traffic, to the Internet and secure-compute environments.

#### [`deny-all`](#deny-all)

The `deny-all` mode can be set to restrict sandbox network access. It blocks all egress traffic, including DNS resolution.

### [User-defined rules](#user-defined-rules)

#### [`allow`](#allow)

Transformation and forwarding rules are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

The `allow` property allows the user to provide a list of website or API domains to allow access to.
Traffic identification is based on SNI (server-name indicator), hence only TLS traffic is currently supported.
Matching is based on:

* if the domain does not contain any wildcard `*` segment, only exact matches are accepted.
* if the domain includes a wildcard `*` as a middle segment (e.g. `www.*.com`), it only matches this one segment.
* if the domain starts with a wildcard `*` (e.g. `*.google.com`), any subdomain is matched. It will not match the parent domain (e.g. `google.com` here).

Encryption is not intercepted if no transformation or forwarding rules are defined, allowing end-to-end data confidentiality.

The `allow` property can be set as an object providing the websites to allow traffic to, with optional additional transformation or forwarding rules.
When such rules are defined, encryption is intercepted to allow request alteration.

Each rule can define a set of [matchers](/docs/vercel-sandbox/concepts/firewall#matchers) on the path, method, query parameters, and headers. When defined, only requests matching the specified dimensions will be transformed or forwarded. Learn more about transformation rules and forwarding rules in the [firewall documentation](/docs/vercel-sandbox/concepts/firewall).

Forwarding rules and matchers are currently available in beta using the `@vercel/sandbox@beta` SDK.

```
// Allow traffic only to the provided websites.
{
  "allow": ["ai-gateway.vercel.sh", "google.com"]
}

// Allow traffic to all websites and add transformations to specific ones.
{
  "allow": {
    "ai-gateway.vercel.sh": [{
      "transform": [{
        "headers": {
          "x-api-key": "secret-key"
        }
      }]
    }],
    "*.github.com": [{
      "match": {
        "method": {
          "exact": "POST"
        }
      },
      "forwardURL": "https://my-proxy.vercel.app/github"
    }],
    "*.openai.com": [{
      "match": {
        "path": {
          "startsWith": "/v1/chat/completions"
        }
      },
      "transform": [{
        "headers": {
          "x-api-key": "other-secret-key"
        }
      }]
    }],
    // Optionally allow traffic to all other domains.
    "*": []
  }
}
```

#### [`subnets.allow`](#subnets.allow)

`subnets.allow` allows the user to provide a list of address ranges to allow traffic to.
If used in combination with `allow`, traffic to those addresses will also bypass domain matching.

It enables users to enable traffic not using TLS, or towards systems where domains cannot be used.
Beware of virtual hosting providers which can host many websites behind a given address.

#### [`subnets.deny`](#subnets.deny)

`subnets.deny` allows the user to provide a list of address ranges to deny traffic to.
Those ranges will always take precedence over `subnets.allow` and domain-based `allow` entries.

It allows the user to deny access to part of their network for instance while allowing access to the Internet in general.

## [Snapshot class](#snapshot-class)

A `Snapshot` represents a saved state of a sandbox that you can use to create new sandboxes. Snapshots capture the filesystem, installed packages, and environment configuration, letting you skip setup steps and start new sandboxes faster. To learn more, see [Snapshots](/docs/vercel-sandbox/concepts/snapshots).

Create snapshots with `sandbox.snapshot()` or retrieve existing ones with `Snapshot.get()`.

### [Snapshot class accessors](#snapshot-class-accessors)

#### [`snapshotId`](#snapshotid)

Use `snapshotId` to identify the snapshot when creating new sandboxes or retrieving it later. Store this ID to reuse the snapshot across multiple sandbox instances.

Returns: `string`.

index.ts

```
console.log(snapshot.snapshotId);
```

#### [`sourceSandboxId`](#sourcesandboxid)

The `sourceSandboxId` accessor returns the ID of the sandbox that produced this snapshot. Use this to trace the origin of a snapshot or correlate it with sandbox logs.

Returns: `string`.

index.ts

```
console.log(snapshot.sourceSandboxId);
```

#### [`status`](#status)

The `status` accessor reports the current state of the snapshot. Check this value to confirm the snapshot creation succeeded before using it.

Returns: `"created" | "deleted" | "failed"`.

index.ts

```
console.log(snapshot.status);
```

#### [`sizeBytes`](#sizebytes)

The `sizeBytes` accessor returns the size of the snapshot in bytes. Use this to monitor storage usage.

Returns: `number`.

```
console.log(snapshot.sizeBytes);
```

#### [`createdAt`](#createdat)

The `createdAt` accessor returns the date and time when the snapshot was created.

Returns: `Date`.

```
console.log(snapshot.createdAt);
```

#### [`expiresAt`](#expiresat)

The `expiresAt` accessor returns the date and time when the snapshot will automatically expire and be deleted. If the snapshot was created with `expiration: 0`, this value is `null`.

Returns: `Date | null`.

```
if (snapshot.expiresAt) {
  console.log(snapshot.expiresAt.toISOString());
}
```

### [Snapshot class static methods](#snapshot-class-static-methods)

#### [`Snapshot.list()`](#snapshot.list)

Use `Snapshot.list()` to enumerate snapshots for a project, with the option to filter by time range or page size. To resume after restarts without missing entries, combine `since` and `until` with the pagination cursor and cache the last `pagination.next` value.

Returns: `Promise<Parsed<{ snapshots: SnapshotSummary[]; pagination: Pagination; }>>`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `projectId` | `string` | No | Project whose snapshots you want to list. |
| `limit` | `number` | No | Maximum number of snapshots to return. |
| `since` | `number | Date` | No | List snapshots created after this time. |
| `until` | `number | Date` | No | List snapshots created before this time. |
| `signal` | `AbortSignal` | No | Cancel the request if necessary. |

```
const { json: { snapshots, pagination } } = await Snapshot.list();
```

#### [`Snapshot.get()`](#snapshot.get)

Use `Snapshot.get()` to retrieve an existing snapshot by its ID.

Returns: `Promise<Snapshot>`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `snapshotId` | `string` | Yes | Identifier of the snapshot to retrieve. |
| `signal` | `AbortSignal` | No | Cancel the request if necessary. |

index.ts

```
import { Snapshot } from '@vercel/sandbox';

const snapshot = await Snapshot.get({ snapshotId: 'snap_abc123' });
console.log(snapshot.status);
```

### [Snapshot class instance methods](#snapshot-class-instance-methods)

#### [`snapshot.delete()`](#snapshot.delete)

Call `snapshot.delete()` to remove a snapshot you no longer need. Deleting unused snapshots helps manage storage and keeps your snapshot list organized.

Returns: `Promise<void>`.

| Parameter | Type | Required | Details |
| --- | --- | --- | --- |
| `opts.signal` | `AbortSignal` | No | Cancel the operation. |

index.ts

```
await snapshot.delete();
```

## [Example workflows](#example-workflows)

* [Install system packages](/kb/guide/how-to-install-system-packages-in-vercel-sandbox) while keeping sudo-enabled commands isolated.
* [Execute long-running tasks](/docs/vercel-sandbox/working-with-sandbox#execute-long-running-tasks) by extending sandbox timeouts for training or large dependency installs.
* Browse more scenarios in the [Sandbox examples](/docs/vercel-sandbox/working-with-sandbox#examples) catalog.

## [Authentication](#authentication)

Vercel Sandbox supports two authentication methods:

* [Vercel OIDC tokens](/docs/vercel-sandbox/concepts/authentication#vercel-oidc-token-recommended) (recommended): Vercel generates the OIDC token that it associates with your Vercel project. For local development, run `vercel link` and `vercel env pull` to get a development token. In production on Vercel, authentication is automatic.
* [Access tokens](/docs/vercel-sandbox/concepts/authentication#access-tokens): Use access tokens when `VERCEL_OIDC_TOKEN` is unavailable, such as in external CI/CD systems or non-Vercel environments.

To learn more on each method, see [Authentication](/docs/vercel-sandbox/concepts/authentication) for complete setup instructions.

## [Environment defaults](#environment-defaults)

* Operating system: Amazon Linux 2023 with common build tools such as `git`, `tar`, `openssl`, and `dnf`.
* Available runtimes: `node26`, `node24`, `node22`, and `python3.13` images with their respective package managers.
* Resources: Choose the number of virtual CPUs (`vcpus`) per sandbox. Pricing and plan limits appear in the [Sandbox pricing table](/docs/vercel-sandbox/pricing#resource-limits).
* Timeouts: The default timeout is 5 minutes. You can extend it programmatically up to 45 minutes on the Hobby plan and up to 5 hours on Pro and Enterprise plans.
* Sudo: `sudo` commands run as `vercel-sandbox` with the root home directory set to `/root`.

The filesystem is ephemeral. You must export artifacts to durable storage if
you need to keep them after the sandbox stops.

---

[Previous

Examples](/docs/vercel-sandbox/working-with-sandbox)[Next

CLI Reference](/docs/vercel-sandbox/cli-reference)

Was this helpful?
