Menu

# Getting started with cron jobs

Last updated March 17, 2026

This guide will help you get started with using cron jobs on Vercel. Cron jobs are scheduled tasks that run at specific times or intervals. They are useful for automating tasks. You will learn how to create a cron job that runs every day at 5 am UTC by creating a Vercel Function and configuring it in your `vercel.json` file.

AI Assistance

Help me set up a Cron Job in this project. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Create a Vercel Function at app/api/cron/route.ts that runs a scheduled task. 2. Add a cron schedule to vercel.json that triggers this function on a recurring schedule. 3. Run `vercel env pull` to sync environment variables locally. 4. Deploy with `vercel --prod` and use `vercel inspect` to verify the cron job is configured.

## [Prerequisites](#prerequisites)

* [A Vercel account](/signup)
* [A project](/docs/projects/overview#creating-a-project) with a [Vercel Function](/docs/functions)

1. ### [Create a function](#create-a-function)

   This function contains the code that will be executed by the cron job. This example uses a simple function that returns the user's region.

   api/hello.ts

   ```
   export function GET(request: Request) {
     return new Response('Hello from Vercel!');
   }
   ```

   api/hello.js

   ```
   export function GET(request) {
     return new Response('Hello from Vercel!');
   }
   ```

   app/api/hello/route.ts

   ```
   export function GET(request: Request) {
     return new Response('Hello from Vercel!');
   }
   ```

   app/api/hello/route.js

   ```
   export function GET(request) {
     return new Response('Hello from Vercel!');
   }
   ```
2. ### [Create or update your `vercel.json` file](#create-or-update-your-vercel.json-file)

   Create or go to your [`vercel.json`](/docs/project-configuration#functions) file and add the following code:

   vercel.json

   ```
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "crons": [
       {
         "path": "/api/hello",
         "schedule": "0 5 * * *"
       }
     ]
   }
   ```

   The `crons` property is an array of cron jobs. Each cron job has two properties:

   * The `path`, which must start with `/`
   * The `schedule` property, which must be a string that represents a [cron expression](/docs/cron-jobs#cron-expressions). In this example, the job is scheduled to execute every day at 5:00 am UTC
3. ### [Deploy your project.](#deploy-your-project.)

   When you deploy your project, Vercel's build process creates the cron job. Vercel invokes cron jobs only for [production](/docs/deployments/environments#production-environment) deployments and not for [preview](/docs/deployments/environments#preview-environment-pre-production) deployments

   You can also deploy to your production domain using the CLI:

   terminal

   ```
   vercel deploy --prod
   ```

Your cron job is now active and will call the `/api/hello` path every day at 5:00 am UTC.

## [Next steps](#next-steps)

Now that you have created a cron job, you can learn more about how to manage and configure them:

* [Learn about managing cron jobs](/docs/cron-jobs/manage-cron-jobs)
* [Explore usage and pricing](/docs/cron-jobs/usage-and-pricing)

---

[Previous

Cron Jobs](/docs/cron-jobs)[Next

Managing Cron Jobs](/docs/cron-jobs/manage-cron-jobs)

Was this helpful?
