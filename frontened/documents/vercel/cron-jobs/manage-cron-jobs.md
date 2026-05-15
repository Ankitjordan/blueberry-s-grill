Menu

# Managing Cron Jobs

Last updated February 27, 2026

Cron Jobs are available on [all plans](/docs/plans)

## [Viewing cron jobs](#viewing-cron-jobs)

To view your active cron jobs:

1. Select your project from the Vercel dashboard
2. Open Settings in the sidebar and select [Cron Jobs](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fcron-jobs&title=Go+to+Cron+Jobs+settings)

## [Cron jobs maintenance](#cron-jobs-maintenance)

* Updating Cron Jobs: Change the [expression](/docs/cron-jobs#cron-expressions) in `vercel.json` file or the function's configuration, and then redeploy
* Deleting Cron Jobs: Remove the configuration from the `vercel.json` file or the function's configuration, and then redeploy
* Disabling Cron Jobs: Click the Disable Cron Jobs button

Disabled cron jobs will still be listed and will count towards your [cron jobs
limits](/docs/cron-jobs/usage-and-pricing)

## [Securing cron jobs](#securing-cron-jobs)

It is possible to secure your cron job invocations by adding an environment variable called `CRON_SECRET` to your Vercel project. We recommend using a random string of at least 16 characters for the value of `CRON_SECRET`. A password generator, like [1Password](https://1password.com/password-generator/), can be used to create one.

The value of the variable will be automatically sent as an `Authorization` header when Vercel invokes your cron job. Your endpoint can then compare both values, the authorization header and the environment variable, to verify the authenticity of the request.

You can use App Router [Route
Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
to secure your cron jobs, even when using the Pages Router.

app/api/cron/route.ts

```
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  return Response.json({ success: true });
}
```

app/api/cron/route.js

```
export function GET(request) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  return Response.json({ success: true });
}
```

app/api/cron/route.ts

```
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  return Response.json({ success: true });
}
```

app/api/cron/route.js

```
export function GET(request) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  return Response.json({ success: true });
}
```

api/cron/route.ts

```
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const authHeader = request.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return response.status(401).json({ success: false });
  }

  response.status(200).json({ success: true });
}
```

api/cron/route.js

```
export default function handler(request, response) {
  const authHeader = request.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return response.status(401).json({ success: false });
  }

  response.status(200).json({ success: true });
}
```

The `authorization` header will have the `Bearer` prefix for the value.

For those using TypeScript versions below 5.2, it's important to adapt the code to `import NextResponse from 'next/server'` and use `NextResponse.json` for the response. This ensures compatibility with earlier TypeScript versions in Next.js applications. In TypeScript 5.2 and above, the standard `new Response` pattern should be used.

## [Cron job duration](#cron-job-duration)

The duration limits for Cron jobs are identical to those of [Vercel Functions](/docs/functions#limits). See the [`maxDuration`](/docs/functions/runtimes#max-duration) documentation for more information.

In most cases, these limits are sufficient. However, if you need more processing time, it's recommended to split your cron jobs into different units or distribute your workload by combining cron jobs with regular HTTP requests with your API.

## [Cron job error handling](#cron-job-error-handling)

Vercel will not retry an invocation if a cron job fails. You can check for error [logs](/docs/runtime-logs) through the View Log button in the Cron Jobs section in the sidebar.

## [Cron jobs with dynamic routes](#cron-jobs-with-dynamic-routes)

Cron jobs can be created for [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes):

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "crons": [
    {
      "path": "/api/sync-slack-team/T0CAQ10TZ",
      "schedule": "0 5 * * *"
    },
    {
      "path": "/api/sync-slack-team/T4BOE34OP",
      "schedule": "0 5 * * *"
    }
  ]
}
```

## [Handling nonexistent paths](#handling-nonexistent-paths)

If you create a cron job for a path that doesn't exist, it generates a [404 error](/docs/errors/platform-error-codes#404:-not_found). However, Vercel still executes your cron job. You can analyze your logs to check if there are any issues.

## [Cron jobs and deployments](#cron-jobs-and-deployments)

Creating a new deployment will not interrupt your running cron jobs; they will continue until they finish.

## [Controlling cron job concurrency](#controlling-cron-job-concurrency)

If your cron job runs longer than the interval between invocations, Vercel can trigger a second instance while the first is still running. This can lead to race conditions, duplicate processing, or data corruption.

To prevent concurrent runs, use a lock mechanism like [Redis distributed locks](https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/) in your cron job. A lock ensures only one instance runs at a time by checking if another instance is already active before starting.

You can also prevent overlapping runs by:

* Reducing execution time: Optimize your job to finish before the next invocation
* Setting timeouts: Use [`maxDuration`](/docs/functions/runtimes#max-duration) to force long-running jobs to stop
* Increasing the interval: Run your cron job less frequently

### [Cron jobs and idempotency](#cron-jobs-and-idempotency)

Vercel's event-driven system can occasionally deliver the same cron event more than once. This means your job might run twice for a single scheduled execution.

Design your operations to be idempotent so they produce the same result even when executed multiple times. For example:

* Good: "Set user status to active" (running twice has the same effect)
* Bad: "Increment user credit by 10" (running twice doubles the credit)

To make operations idempotent:

* Use unique IDs to track which events you've already processed
* Check state before making changes (e.g., "if not already active, then activate")
* Store results with timestamps or version numbers

Use both locks (to prevent concurrent runs) and idempotency (to handle duplicate events safely) together for the most reliable cron jobs

## [Running cron jobs locally](#running-cron-jobs-locally)

Cron jobs are API routes. You can run them locally by making a request to their endpoint. For example, if your cron job is in `/api/cron`, you could visit the following endpoint in your browser: `http://localhost:3000/api/cron`. You should be aware that while your browser may follow redirects, [cron job invocations in production will not](#cron-jobs-and-redirects) follow redirects.

There is currently no support for `vercel dev`, `next dev`, or other framework-native local development servers.

## [Cron jobs and redirects](#cron-jobs-and-redirects)

Cron jobs do not follow redirects. When a cron-triggered endpoint returns a 3xx redirect status code, the job completes without further requests. Redirect responses are treated as final for each invocation.

The view logs button on the cron job overview can be used to verify the response of the invocations and gain further insights.

## [Cron jobs logs](#cron-jobs-logs)

Cron jobs are logged as function invocations from the Logs section in your project dashboard sidebar(/dashboard). You can view the logs for a cron job from the list on the [Cron jobs settings page](/docs/cron-jobs/manage-cron-jobs#viewing-cron-jobs) of the project:

1. From the list of cron jobs, select View Logs.
2. This will take you to the [runtime logs](/docs/runtime-logs#request-path) view with a `requestPath` filter to your cron job such as `requestPath:/api/my-cron-job`.

See [how to view runtime logs](/docs/runtime-logs#view-runtime-logs) for more information.

Note that when cron jobs respond with a redirect or a cached response, they will not be shown in the logs.

## [Cron jobs accuracy](#cron-jobs-accuracy)

Hobby users have two cron job restrictions. First, cron jobs can only run [once per day](/docs/cron-jobs/usage-and-pricing#hobby-scheduling-limits). Expressions that run more frequently will fail deployment. Second, Vercel may invoke these cron jobs at any point within the specified hour to help distribute load across all accounts. For example, an expression like `0 8 * * *` could trigger an invocation anytime between `08:00:00` and `08:59:59`.

For all other teams, cron jobs will be invoked within the minute specified. For instance, the expression `5 8 * * *` would trigger an invocation between `08:05:00` and `08:05:59`.

## [Rollbacks with cron jobs](#rollbacks-with-cron-jobs)

If you [Instant Rollback](/docs/instant-rollback) to a previous deployment, active cron jobs will not be updated. They will continue to run as scheduled until they are manually disabled or updated.

---

[Previous

Getting Started](/docs/cron-jobs/quickstart)[Next

Usage & Pricing](/docs/cron-jobs/usage-and-pricing)

Was this helpful?
