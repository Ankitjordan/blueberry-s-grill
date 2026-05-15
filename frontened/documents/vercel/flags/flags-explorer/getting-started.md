Title: Getting started with Flags Explorer

URL Source: https://vercel.com/docs/flags/flags-explorer/getting-started

Markdown Content:
This guide walks you through connecting your application to the Flags Explorer, so you can use it to view and override your application's feature flags. This works with any framework, any feature flag provider and even custom setups.

*   Set up the [Vercel Toolbar](https://vercel.com/docs/vercel-toolbar) for development by following [adding the Vercel Toolbar to local and production environments](https://vercel.com/docs/vercel-toolbar/in-production-and-localhost#)
*   You should have the latest version of Vercel CLI installed. To check your version, use `vercel --version`. To [install](https://vercel.com/docs/cli#installing-vercel-cli) or update Vercel CLI, use:
*   Ensure your local directory [links](https://vercel.com/docs/cli/link) to a Vercel project. You can use `vercel link` from root of your project to link it to your Vercel account or use:

1.   Install the `flags` package. This package provides convenience methods, components, and types that allow your application to communicate with the Flags Explorer.

2.   This secret is used to encrypt and sign overrides, and so Flags Explorer can make authenticated requests to the `/.well-known/vercel/flags` Discovery Endpoint we'll create in the next step.

Run your application locally with Vercel Toolbar enabled and open Flags Explorer from the toolbar. Click on "Start setup" to begin the onboarding flow, then click on "Create secret" to automatically generate and add a new `FLAGS_SECRET` environment variable to your project.

This generates a separate value for each environment (Development, Preview, and Production) and marks the Preview and Production values as Sensitive.

Pull your environment variables to make them available to your project locally.

If you prefer to create the secret manually, see the instructions in the [Flags Explorer Reference](https://vercel.com/docs/flags/flags-explorer/reference#flags_secret-environment-variable).

3.   Your application needs to expose an endpoint that Flags Explorer queries to get your feature flags. Flags Explorer will make an authenticated request to this Discovery Endpoint to receive your application's feature flag definitions. This endpoint can communicate the name, origin, description, and available options of your feature flags.

Using the Flags SDK for Next.js

Ensure you completed the setup of the [Flags SDK for Next.js](https://flags-sdk.dev/docs/getting-started/next). You should have installed the `flags` package and have a `flags.ts` file at the root of your project which exposes your feature flags as shown below.

Create your Flags Discovery Endpoint using the snippet below.

This endpoint uses `verifyAccess` to prevent unauthorized requests, and the `getProviderData` function to automatically generate the feature flag definitions based on the feature flags you have defined in code. See the [Flags SDK API Reference](https://flags-sdk.dev/docs/api-reference/frameworks/next#getproviderdata) for more information.

If you are using the Flags SDK with adapters, use the `getProviderData` function exported by your flag provider's adapter to load flag metadata from your flag providers. See the [Flags SDK Adapters API Reference](https://flags-sdk.dev/docs/adapters/supported-providers) for more information, and [mergeProviderData](https://flags-sdk.dev/docs/api-reference/core/core#mergeproviderdata) to combine the feature flags defined in code with the metadata of providers.

Using the Flags SDK for SvelteKit

If you are using the Flags SDK for SvelteKit then the `createHandle` function will automatically create the Discovery Endpoint for you. Learn more about [using the Flags SDK for SvelteKit](https://flags-sdk.dev/docs/getting-started/sveltekit).

Using a custom setup

Learn how to manually return feature flag definitions in the [Flags Explorer Reference](https://vercel.com/docs/flags/flags-explorer/reference#verifying-a-request-to-the-discovery-endpoint).

4.   You can now use the Flags Explorer to create feature flag overrides. When you create an override Flags Explorer will set a cookie containing those overrides. Your application can then read this cookie and respect those overrides. You can optionally check the signature on the overrides cookie to ensure it originated from a trusted source.

Using the Flags SDK for Next.js

Feature flags defined in code using the Flags SDK for Next.js will automatically handle overrides set by the Flags Explorer.

Using the Flags SDK for SvelteKit

Feature flags defined in code using the Flags SDK for SvelteKit will automatically handle overrides set by the Flags Explorer.

Using a custom setup

If you have a custom feature flag setup, or if you are using the SDKs of feature flag providers directly, you need to manually handle the overrides set by the Flags Explorer.

Learn how to read the overrides cookie in the [Flags Explorer Reference](https://vercel.com/docs/flags/flags-explorer/reference#override-cookie).

5.   You can optionally make the Flags Explorer aware of the actual value each feature flag resolved to while rendering the current page by rendering a `<FlagValues />` component. This is useful for debugging. Learn how to emit flag values in the [Flags Explorer Reference](https://vercel.com/docs/flags/flags-explorer/reference#values).

![Image 1: Flags Explorer showing flag values.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Ffeature-flags%2Fflags-explorer-default-value-light.png&w=1080&q=75)![Image 2: Flags Explorer showing flag values.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Ffeature-flags%2Fflags-explorer-default-value-dark.png&w=1080&q=75)

Flags Explorer showing flag values.

If you emit flag values to the client it's further possible to annotate your Web Analytics events with the feature flags you emitted. Learn how to [integrate with Web Analytics](https://vercel.com/docs/flags/observability/web-analytics).

6.   You should now be able to see your feature flags in Flags Explorer. You should also be able to set overrides that your application can respect by using the Flags SDK or reading the `vercel-flag-overrides` cookie manually. If you added the `FlagValues` component, you should be able to see the actual value each flag resolved to while rendering the current page.
