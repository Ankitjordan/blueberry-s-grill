Menu

# Snapshots

Last updated February 17, 2026

Snapshots capture the state of a running sandbox, including the filesystem and installed packages. Use snapshots to skip setup time on subsequent runs.

## [When to use snapshots](#when-to-use-snapshots)

* Faster startups: Skip dependency installation by snapshotting after setup.
* Checkpointing: Save progress on long-running tasks.
* Sharing environments: Give teammates an identical starting point.

## [Create a snapshot](#create-a-snapshot)

Call `snapshot()` on a running sandbox:

Once you create a snapshot, the sandbox shuts down automatically and becomes unreachable. You don't need to stop it afterwards.

```
# Create a snapshot of a running sandbox
sandbox snapshot sb_abc123 --stop

# Create a snapshot that expires in 14 days
sandbox snapshot sb_1234567890 --stop --expiration 14d

# Create a snapshot that never expires
sandbox snapshot sb_1234567890 --stop --expiration 0
```

The `--stop` flag confirms that the sandbox will be stopped when snapshotting. By default, snapshots expire after 30 days. Use `--expiration` (e.g. `--expiration 14d`) to set a custom expiration time, or `--expiration 0` to never expire the snapshot.

```
import { Sandbox } from '@vercel/sandbox';
import { ms } from 'ms';

const sandbox = await Sandbox.create();

// Install dependencies, configure environment, etc.
await sandbox.runCommand('npm', ['install']);

// Snapshot and get the ID
const snapshot = await sandbox.snapshot({ expiration: ms('14d') });
console.log(snapshot.snapshotId);
```

```
from vercel.sandbox import Sandbox

sandbox = Sandbox.create()

# Install dependencies, configure environment, etc.
sandbox.run_command('npm', ['install'])

# Snapshot and get the ID
snapshot = sandbox.snapshot()
print(snapshot.snapshot_id)
```

## [Create a sandbox from a snapshot](#create-a-sandbox-from-a-snapshot)

Pass the snapshot ID when creating a new sandbox:

```
sandbox create --snapshot snap_abc123
```

```
const sandbox = await Sandbox.create({
  source: { type: 'snapshot', snapshotId: 'snap_abc123' },
});
```

```
sandbox = Sandbox.create(
    source={"type": "snapshot", "snapshot_id": "snap_abc123"}
)
```

## [List snapshots](#list-snapshots)

View all snapshots for your project:

```
# List snapshots for the current project
sandbox snapshots list

# List snapshots for a specific project
sandbox snapshots list --project my-app
```

```
import { Snapshot } from '@vercel/sandbox';

const { json: { snapshots } } = await Snapshot.list();
for (const snapshot of snapshots) {
  console.log(snapshot.snapshotId, snapshot.status);
}
```

```
from vercel.sandbox import Snapshot

result = Snapshot.list()
for snapshot in result.snapshots:
    print(snapshot.snapshot_id, snapshot.status)
```

## [Retrieve an existing snapshot](#retrieve-an-existing-snapshot)

Look up a snapshot by ID:

The CLI doesn't support retrieving a single snapshot by ID. Use `sandbox snapshots list` to view all snapshots for your project:

```
sandbox snapshots list
```

```
import { Snapshot } from '@vercel/sandbox';

const snapshot = await Snapshot.get({ snapshotId: 'snap_abc123' });
console.log(snapshot.status); // "created" | "deleted" | "failed"
```

```
from vercel.sandbox import Snapshot

snapshot = Snapshot.get(snapshot_id="snap_abc123")
print(snapshot.status)
```

## [Delete a snapshot](#delete-a-snapshot)

Remove snapshots you no longer need:

```
# Delete a single snapshot
sandbox snapshots delete snap_abc123

# Delete multiple snapshots
sandbox snapshots delete snap_abc123 snap_def456
```

```
await snapshot.delete();
```

```
snapshot.delete()
```

## [Snapshot limits](#snapshot-limits)

* Snapshots expire after 30 days by default
* You can define a custom expiration time or none at all when creating a snapshot. See the [SDK](/docs/vercel-sandbox/sdk-reference#sandbox.snapshot) and [CLI](/docs/vercel-sandbox/cli-reference#sandbox-snapshot) documentation for more details.
* See [Pricing and Limits](/docs/vercel-sandbox/pricing#snapshot-storage) for storage costs and limits

---

[Previous

Authentication](/docs/vercel-sandbox/concepts/authentication)[Next

Firewall](/docs/vercel-sandbox/concepts/firewall)

Was this helpful?
