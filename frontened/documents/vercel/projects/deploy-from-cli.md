Menu

# Deploying a project from the CLI

Last updated February 24, 2026

Use this guide to set up and deploy a Vercel project entirely from the CLI. You'll link your local project, pull environment variables, test locally, deploy a preview, and go live with a custom domain.

## [Quick reference](#quick-reference)

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

terminal

```
# 1. Link your local directory to a Vercel project
vercel link

# 2. Pull environment variables for local development
vercel env pull .env.local

# 3. Develop locally (use your framework's dev command, or vercel dev)
vercel env run -- npm run dev

# 4. Deploy a preview
vercel deploy

# 5. Verify the preview
vercel curl / --deployment <preview-url>
vercel logs --deployment <preview-deployment-id> --level error

# 6. Deploy to production
vercel deploy --prod

# 7. Add a custom domain (if needed)
vercel domains add example.com <project-name>
vercel domains inspect example.com

# 8. Confirm production is live
vercel curl / --deployment <production-url>
vercel logs --environment production --level error --since 5m
```

## [1. Link your project](#1.-link-your-project)

Connect your local directory to an existing Vercel project. If the project doesn't exist yet on Vercel, this command creates it:

terminal

```
vercel link
```

This creates a `.vercel` directory in your project with the project and org configuration. The command is interactive and will prompt you to select your team and project.

For CI/CD or non-interactive environments, use the `--yes` flag:

terminal

```
vercel link --yes
```

## [2. Pull environment variables](#2.-pull-environment-variables)

Download your project's environment variables so you can use them during local development:

terminal

```
vercel env pull .env.local
```

This writes development environment variables to `.env.local`. If you need environment variables for a different target:

terminal

```
vercel env pull --environment=preview
```

If you're using `vercel dev` or `vercel build`, use `vercel pull` instead.
These commands read from the `.vercel/` directory rather than `.env` files.

To list all configured environment variables without downloading them:

terminal

```
vercel env ls
```

## [3. Develop locally](#3.-develop-locally)

Start your local development server. If your framework has its own dev command (like `next dev` or `vite dev`), use that directly since it provides native support for your framework's features.

If you need to test Vercel-specific features like Vercel Functions or Middleware locally:

terminal

```
vercel dev
```

You can also run your framework's dev command with Vercel environment variables injected:

terminal

```
vercel env run -- npm run dev
```

This fetches environment variables from your linked project and passes them to your dev command without writing them to a file.

## [4. Deploy a preview](#4.-deploy-a-preview)

When you're ready to test your changes in a production-like environment, create a preview deployment:

terminal

```
vercel deploy
```

This outputs a preview URL. Preview deployments use your preview environment variables and are useful for testing before going live.

If you want to see the build logs while deploying:

terminal

```
vercel deploy --logs
```

## [5. Verify the preview](#5.-verify-the-preview)

Test the preview deployment to make sure everything works. Use `vercel curl` to hit specific routes through deployment protection:

terminal

```
vercel curl / --deployment <preview-url>
```

Check for errors in the preview deployment's logs:

terminal

```
vercel logs --deployment <preview-deployment-id> --level error
```

## [6. Deploy to production](#6.-deploy-to-production)

Once the preview looks good, deploy to production:

terminal

```
vercel deploy --prod
```

This builds and deploys your project to the production environment, and the deployment gets assigned to your production domain automatically.

## [7. Add a custom domain](#7.-add-a-custom-domain)

If you haven't configured a custom domain yet, add one:

terminal

```
vercel domains add example.com <project-name>
```

To see all domains currently configured:

terminal

```
vercel domains ls
```

After adding a domain, Vercel automatically provisions an SSL certificate. You'll need to update your DNS records to point to Vercel. Use `vercel domains inspect` to see the required DNS configuration:

terminal

```
vercel domains inspect example.com
```

## [8. Confirm production is live](#8.-confirm-production-is-live)

Verify your production deployment is serving traffic correctly:

terminal

```
vercel curl / --deployment <production-url>
```

Check production logs for any unexpected errors:

terminal

```
vercel logs --environment production --level error --since 5m
```

## [Ongoing workflow](#ongoing-workflow)

After the initial setup, your day-to-day workflow simplifies to:

1. Make changes locally
2. Deploy a preview: `vercel deploy`
3. Verify the preview
4. Ship to production: `vercel deploy --prod`

If you connect a Git repository, Vercel also creates preview deployments automatically for every push and pull request.

## [Related](#related)

* [vercel link](/docs/cli/link)
* [vercel env](/docs/cli/env)
* [vercel deploy](/docs/cli/deploy)
* [vercel domains](/docs/cli/domains)
* [Vercel CLI overview](/docs/cli)

---

[Previous

Projects](/docs/projects)[Next

Managing projects](/docs/projects/managing-projects)

Was this helpful?
