Menu

# Tags

Sandbox tags are available in [Beta](/docs/release-phases#beta) on [all plans](/docs/plans)

Tags let you categorize sandboxes by environment, team, or any other criteria. Each sandbox supports up to five key-value tags that you can set during creation, update at any time, and filter on when listing sandboxes.

## [Install the beta packages](#install-the-beta-packages)

Sandbox tags are in beta. Use them in a new project for testing and avoid
production workloads until the feature is generally available.

Install the beta SDK and CLI:

Terminal

```
# SDK
npm install @vercel/sandbox@beta

# CLI
npm install -g sandbox@beta
```

Terminal

```
# SDK
yarn add @vercel/sandbox@beta

# CLI
yarn global add sandbox@beta
```

Terminal

```
# SDK
pnpm install @vercel/sandbox@beta

# CLI
pnpm install -g sandbox@beta
```

Terminal

```
# SDK
bun add @vercel/sandbox@beta

# CLI
bun add -g sandbox@beta
```

## [SDK usage](#sdk-usage)

### [Create a sandbox with tags](#create-a-sandbox-with-tags)

Pass the `tags` field when creating a sandbox. You can assign up to five key-value tags:

index.ts

```
import { Sandbox } from '@vercel/sandbox';

const sandbox = await Sandbox.create({
  name: 'my-sandbox',
  tags: { env: 'staging' },
});
```

### [Update tags](#update-tags)

Use `sandbox.update()` to change a sandbox's tags at any time:

index.ts

```
await sandbox.update({
  tags: { env: 'production', team: 'infra' },
});
```

### [Filter sandboxes by tag](#filter-sandboxes-by-tag)

Pass a `tags` object to `Sandbox.list()` to filter results. You can filter by up to one tag at a time:

index.ts

```
const productionSandboxes = await Sandbox.list({
  tags: { env: 'production' },
});

console.log(
  'Production sandboxes:',
  productionSandboxes.sandboxes.map((s) => s.name),
); // my-sandbox
```

## [Limitations](#limitations)

* Each sandbox supports a maximum of five tags.
* `Sandbox.list()` supports filtering by one tag at a time.

## [Next steps](#next-steps)

* [Persistent sandboxes](/docs/vercel-sandbox/concepts/persistent-sandboxes): Learn how persistent sandboxes automatically save and restore state.
* [SDK Reference](/docs/vercel-sandbox/sdk-reference): Full API documentation for the stable SDK.
* [CLI Reference](/docs/vercel-sandbox/cli-reference): Command reference for the stable CLI.

---

Was this helpful?
