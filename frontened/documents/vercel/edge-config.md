Edge Config

# Vercel Edge Config

Last updated March 17, 2026

Edge Config is available on [all plans](/docs/plans)

An [Edge Config](/edge-config) is a global data store that [enables experimentation with feature flags, A/B testing, critical redirects, and IP blocking](#use-cases). It enables you to read data in the region closest to the user without querying an external database or hitting upstream servers.

With Vercel's optimizations, you can read Edge Config data at negligible latency. The vast majority of your reads will complete within 15ms [at P99](/docs/speed-insights/metrics#how-the-percentages-are-calculated), or often less than 1ms.

You can use an Edge Config in [Middleware](/docs/routing-middleware) and [Vercel Functions](/docs/functions).

Vercel's Edge Config read optimizations are only available on the Edge and
Node.js runtimes. Optimizations can be enabled for other runtimes, [such as
Ruby, Go, and Python](/docs/functions/runtimes) upon request. See [our Edge
Config limits docs](/docs/edge-config/edge-config-limits) to learn more.

## [Use cases](#use-cases)

Edge Configs are great for data that is accessed frequently and updated infrequently. Here are some examples of storage data suitable for Edge Config:

**Critical redirects**: When you need to redirect a URL urgently,
Edge Configs offer a fast solution that doesn't require you to redeploy your
website. With Middleware, you can read from your Edge Config to redirect users
visiting incorrect URLs. For an example, see the [Maintenance Page
template](https://vercel.com/templates/next.js/maintenance-page).

Alternatively, use the Vercel WAF to configure a [Redirect
action](/docs/security/vercel-waf/rule-configuration#actions) based on
specific conditions. For more details, check the [emergency
redirect](/docs/security/vercel-waf/examples#emergency-redirect) example.

**Malicious IP and User Agent blocking**: Store a set of
malicious IPs in your Edge Config, then block them upon detection without
invoking upstream servers

## [Getting started](#getting-started)

You can create and manage your Edge Config from either [Vercel REST API](/docs/edge-config/vercel-api) or [Dashboard](/docs/edge-config/edge-config-dashboard). You can scope your Edge Configs to your Hobby team or [team](/docs/accounts/create-a-team), and connect them to as many projects as you want.

To get started, see [our quickstart](/docs/edge-config/get-started).

Get started in minutes

## Deploy an Edge Config Template

[View All Templates](https://vercel.com/templates/edge-config)

[![Optimizely Feature Experimentation](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3LaP5zEajoLOuxjuhXR4WY%2F0eb9b810d9c23d1e2ad60946068a1701%2Fdemo.png&w=3840&q=75)

Optimizely Feature Experimentation

Fast and safe experimentation with Next.js App Router, Vercel Feature Flags, and Optimizely Feature Experimentation](https://vercel.com/templates/next.js/optimizely-feature-experimentation)

[![LaunchDarkly Flags SDK Example](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3uQqG5yGthvKersRAr1zLR%2Fe73f4f23c1059751c275d072d714dbf0%2FFlags___LaunchDarkly_-_Light.png&w=3840&q=75)

LaunchDarkly Flags SDK Example

Learn how to set up LaunchDarkly, including experimentation alongside Flags SDK and Edge Config.](https://vercel.com/templates/next.js/launchdarkly-flags-sdk)

[![Growthbook Flags SDK Example](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F694UbhBteRVZOjb8tIECco%2Fd837767128c0832fa23c87279ab81b3f%2Fopengraph-image.jpg&w=3840&q=75)

Growthbook Flags SDK Example

Learn how to set up Growthbook flags and experiments using Flags SDK.](https://vercel.com/templates/next.js/growthbook-flags-sdk-example)

[View All Templates](https://vercel.com/templates/edge-config)

## [Using Edge Config in your workflow](#using-edge-config-in-your-workflow)

If you'd like to know whether or not Edge Config can be integrated into your workflow, it's worth knowing the following:

* You can have one or more Edge Configs per Vercel account, depending on your plan as explained in [Limits](/docs/edge-config/edge-config-limits)
* You can use multiple Edge Configs in one Vercel project
* Each Edge Config can be accessed by multiple Vercel projects
* Edge Configs can be scoped to different environments within projects using environment variables
* Edge Config access is secure by default. A [read access token](/docs/edge-config/using-edge-config#creating-a-read-access-token) is required to read from them, and an [API token](/docs/rest-api#creating-an-access-token) is required to write to them

See [our Edge Config limits docs to learn more](/docs/edge-config/edge-config-limits)

## [Why use Edge Config instead of alternatives?](#why-use-edge-config-instead-of-alternatives)

There are alternative solutions to Edge Config for handling A/B testing, feature flags, and IP blocking. The following table lays out how those solutions compare to Edge Config:

| Edge Config vs alternatives | Read latency | Write latency | Redeployment required | Added risk of downtime |
| --- | --- | --- | --- | --- |
| Edge Config | Ultra-low | Varies | No | No |
| Remote JSON files | Varies | Varies | No | Yes |
| Embedded JSON files | Lowest | Highest | Yes | No |
| Environment Variables | Lowest | Highest | Yes | No |

## [Limits](#limits)

To learn about Edge Config limits and pricing, see [our Edge Config limits docs](/docs/edge-config/edge-config-limits).

## [More resources](#more-resources)

* [Quickstart](/docs/edge-config/get-started)
* [Read with the SDK](/docs/edge-config/edge-config-sdk)
* [Use the Dashboard](/docs/edge-config/edge-config-dashboard)
* [Manage with the API](/docs/edge-config/vercel-api)
* [Edge Config Limits](/docs/edge-config/edge-config-limits)

---

[Previous

Blob](/docs/vercel-blob)[Next

Getting Started](/docs/edge-config/get-started)

Was this helpful?
