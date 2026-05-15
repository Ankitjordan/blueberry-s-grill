Menu

# Quickstart

Last updated February 17, 2026

This guide shows you how to run your first code in a Vercel Sandbox.

AI Assistance

Help me set up Vercel Sandbox in this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Install the @vercel/sandbox SDK. 2. Run `vercel link` and `vercel env pull` to get credentials. 3. Create a script that spins up a sandbox, runs code inside it, and captures the output. 4. Run it to verify the sandbox works.

## [Prerequisites](#prerequisites)

* A [Vercel account](https://vercel.com/signup)
* [Vercel CLI](/docs/cli) installed (`npm i -g vercel`)
* Node.js 22+ or Python 3.10+

1. ### [Set up your environment](#set-up-your-environment)

   Create a new directory and connect it to a Vercel project. This is the recommended way to authenticate because the project handles secure [OIDC token authentication](/docs/vercel-sandbox/concepts/authentication) for you.

   Terminal

   ```
   mkdir my-sandbox-app && cd my-sandbox-app
   pnpm init
   vercel link
   ```

   Terminal

   ```
   mkdir my-sandbox-app && cd my-sandbox-app
   vercel link
   ```

   When prompted, select Create a new project. The project doesn't need any code deployed. It needs to exist so Vercel can generate authentication tokens for you.

   Once linked, pull your environment variables to get an authentication token:

   Terminal

   ```
   vercel env pull
   ```

   This creates a `.env.local` file containing a token that the SDK uses to authenticate your requests. When you deploy to Vercel, token management happens automatically.
2. ### [Install the SDK](#install-the-sdk)

   Terminal

   ```
   npm install @vercel/sandbox dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   yarn add @vercel/sandbox dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   pnpm add @vercel/sandbox dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   bun add @vercel/sandbox dotenv @types/node tsx typescript
   ```

   `dotenv` is used to access environment variables within your application. The `tsx` package is a TypeScript runner that allows you to run your TypeScript code. The `typescript` package is the TypeScript compiler. The `@types/node` package is the TypeScript definitions for the Node.js API.

   Terminal

   ```
   pip install vercel-sandbox python-dotenv
   ```
3. ### [Write your code](#write-your-code)

   Create a file that creates a sandbox and runs a command:

   index.ts

   ```
   import { config } from 'dotenv';
   config({ path: '.env.local' });

   import { Sandbox } from '@vercel/sandbox';

   async function main() {
     const sandbox = await Sandbox.create();

     const result = await sandbox.runCommand('echo', ['Hello from Vercel Sandbox!']);
     console.log(await result.stdout());
   }

   main().catch(console.error);
   ```

   main.py

   ```
   from dotenv import load_dotenv
   from vercel.sandbox import Sandbox

   load_dotenv('.env.local')

   sandbox = Sandbox.create()

   result = sandbox.run_command('echo', ['Hello from Vercel Sandbox!'])
   print(result.stdout())
   ```
4. ### [Run it](#run-it)

   Terminal

   ```
   pnpm tsx index.ts
   ```

   Terminal

   ```
   python main.py
   ```

   You should see: `Hello from Vercel Sandbox!`

   Sandboxes automatically stop after 5 minutes. To adjust this or manage running sandboxes, see [Working with Sandbox](/docs/vercel-sandbox/working-with-sandbox).

## [What you just did](#what-you-just-did)

1. Set up authentication: Connected to a Vercel project and pulled credentials to enable sandbox creation.
2. Created a sandbox: Spun up an isolated Linux microVM.
3. Ran a command: Executed code inside the secure environment.

## [Next steps](#next-steps)

* [SDK Reference](/docs/vercel-sandbox/sdk-reference): Full API documentation for TypeScript and Python.
* [CLI Reference](/docs/vercel-sandbox/cli-reference): Manage sandboxes from the terminal.
* [Snapshots](/docs/vercel-sandbox/concepts/snapshots): Save sandbox state to skip setup on future runs.
* [Examples](/docs/vercel-sandbox/working-with-sandbox#examples): See real-world use cases.

---

[Previous

Sandbox](/docs/vercel-sandbox)[Next

Concepts](/docs/vercel-sandbox/concepts)

Was this helpful?
