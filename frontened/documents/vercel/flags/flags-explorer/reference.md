Title: Reference

URL Source: https://vercel.com/docs/flags/flags-explorer/reference

Markdown Content:
The Flags Explorer has five main concepts: the [Discovery Endpoint](https://vercel.com/docs/flags/flags-explorer/reference#discovery-endpoint), the [FLAGS_SECRET environment variable](https://vercel.com/docs/flags/flags-explorer/reference#flags_secret-environment-variable), the [override cookie](https://vercel.com/docs/flags/flags-explorer/reference#override-cookie), [flag definitions](https://vercel.com/docs/flags/flags-explorer/reference#definitions), and [flag values](https://vercel.com/docs/flags/flags-explorer/reference#values).

The Flags Explorer needs to know about your feature flags before it can display them.

Flag definitions are metadata for your feature flags, which communicate:

*   Name
*   URL for where your team can manage the flag
*   Description
*   Possible values and their (optional) labels

A definition can never communicate the value of a flag as they load independently from [flag values](https://vercel.com/docs/flags/flags-explorer/reference#values). See [flag definitions](https://vercel.com/docs/flags/flags-explorer/reference#definitions) for more information.

This is how Vercel Toolbar shows flag definitions:

![Image 1: Flags Explorer showing flag values.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Ffeature-flags%2Fflags-explorer-definitions-light.png&w=1080&q=75)![Image 2: Flags Explorer showing flag values.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Ffeature-flags%2Fflags-explorer-definitions-dark.png&w=1080&q=75)

Flags Explorer showing flag values.

There are two ways to provide your feature flags to the Flags Explorer:

1.   [Returning definitions through the Flags Discovery Endpoint](https://vercel.com/docs/flags/flags-explorer/reference#returning-definitions-through-the-flags-discovery-endpoint)
2.   [Embedding definitions through script tags](https://vercel.com/docs/flags/flags-explorer/reference#embedding-definitions-through-script-tags)

The Flags Discovery Endpoint is the recommended way to provide your feature flags to the Flags Explorer. The Flags Explorer will request your application's [Flags Discovery Endpoint](https://vercel.com/docs/flags/flags-explorer/reference#discovery-endpoint) to fetch the feature flag definitions and other settings.

See [Definitions properties](https://vercel.com/docs/flags/flags-explorer/reference#definitions-properties) for a full list of properties you can return from your Flags Discovery Endpoint.

We strongly recommend communicating your feature flag definitions through the [Flags Discovery Endpoint](https://vercel.com/docs/flags/flags-explorer/reference#discovery-endpoint). In rare cases, it can be useful to communicate feature flag definitions through the HTML response. Vercel Toolbar will pick up any script tags included in the DOM which have a `data-flag-definitions` attribute.

If you are using React or Next.js, use the [`FlagsDefinitions`](https://flags-sdk.dev/docs/api-reference/core/react#flagdefinitions) component. If you are using another framework or no framework at all you can render these script tags manually. The expected shape is:

This example shows how to communicate a feature flag definition through the DOM:

You can also encrypt the definitions before emitting them to prevent leaking your feature flags through the DOM.

Using `JSON.stringify` within script tags leads to [XSS vulnerabilities](https://owasp.org/www-community/attacks/xss/). Use `safeJsonStringify` exported by `flags` to stringify safely.

Your Flags Discovery Endpoint returns your application's feature flag definitions containing information like their key, description, origin, and available options. However the Flags Discovery Endpoint cannot return the value a flag evaluated to, since this value might depend on the request which rendered the page initially.

You can optionally provide the values of your feature flags to Flags Explorer in two ways:

1.   [Emitting values using the React components](https://vercel.com/docs/flags/flags-explorer/reference#emitting-values-using-the-flagvalues-react-component)
2.   [Embedding values through script tags](https://vercel.com/docs/flags/flags-explorer/reference#embedding-values-through-script-tags)

Emitted values will show up in the Flags Explorer, and will be used by [Web Analytics to annotate events](https://vercel.com/docs/flags/observability/web-analytics).

This is how Vercel Toolbar shows flag values:

![Image 3: Default Feature Flag Values in Vercel Toolbar.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Ffeature-flags%2Fflags-explorer-default-value-light.png&w=1080&q=75)![Image 4: Default Feature Flag Values in Vercel Toolbar.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fworkflow-collaboration%2Ffeature-flags%2Fflags-explorer-default-value-dark.png&w=1080&q=75)

Default Feature Flag Values in Vercel Toolbar.

Any JSON-serializable values are supported. Flags Explorer combines these values with any definitions, if they are present.

The `flags` package exposes React components which allow making the Flags Explorer aware of your feature flag's values.

The approaches above will add the names and values of your feature flags to the DOM in plain text. Use the `encrypt` function to keep your feature flags confidential.

The `FlagValues` component will emit a script tag with a `data-flag-values` attribute, which gets picked up by the Flags Explorer. Flags Explorer then combines the flag values with the definitions returned by your Discovery Endpoint. If you are not using React or Next.js you can render these script tags manually as shown in the next section.

Flags Explorer scans the DOM for script tags with the `data-flag-values` attribute. Any changes to content get detected by a mutation observer.

You can emit the values of feature flags to the Flags Explorer by rendering script tags with the `data-flag-values` attribute.

Be careful when creating these script tags. Using `JSON.stringify` within script tags leads to [XSS vulnerabilities](https://owasp.org/www-community/attacks/xss/). Use `safeJsonStringify` exported by `flags` to stringify safely.

The expected shape is:

To prevent disclosing feature flag names and values to the client, the information can be encrypted. This keeps the feature flags confidential. Use the Flags SDK's `encryptFlagValues` function together with the `FLAGS_SECRET` environment variable to encrypt your flag values on the server before rendering them on the client. The Flags Explorer will then read these encrypted values and use the `FLAGS_SECRET` from your project to decrypt them.

This secret gates access to the Flags Discovery Endpoint, and optionally enables signing and encrypting feature flag overrides set by Vercel Toolbar. As described below, you can ensure that the request is authenticated in your [Flags Discovery Endpoint](https://vercel.com/docs/flags/flags-explorer/reference#discovery-endpoint) by using [`verifyAccess`](https://flags-sdk.dev/docs/api-reference/core/core#verifyaccess).

You can create this secret by following the instructions in the [Flags Explorer Quickstart](https://vercel.com/docs/flags/flags-explorer/getting-started#adding-a-flags_secret). Alternatively, you can create the `FLAGS_SECRET` manually by following the instructions below. If using [microfrontends](https://vercel.com/docs/microfrontends), you should use the same `FLAGS_SECRET` as the other projects in the microfrontends group.

Manually creating the `FLAGS_SECRET`

The `FLAGS_SECRET` value must have a specific length (32 random bytes encoded in base64) to work as an encryption key. Generate a unique value for each environment (Development, Preview, and Production) by running the following command once per environment:

Add each value to your project's environment variables in the Vercel dashboard, scoped to the matching environment. When adding the Preview and Production values, mark them as Sensitive to hide the value from the dashboard and CLI after creation.

Then pull your environment variables locally with `vercel env pull` to make them available to your project.

The `FLAGS_SECRET` environment variable must be defined in your project settings on the Vercel dashboard. Defining the environment variable locally is not enough as Flags Explorer reads the environment variable from your project settings.

When you have set the [`FLAGS_SECRET`](https://vercel.com/docs/flags/flags-explorer/reference#flags_secret-environment-variable) environment variable in your project, Flags Explorer will request your application's [Flags Discovery Endpoint](https://vercel.com/docs/flags/flags-explorer/reference#discovery-endpoint). This endpoint should return a configuration for the Flags Explorer that includes the flag definitions.

Your endpoint should call `verifyAccess` to ensure the request to load flags originates from Vercel Toolbar. This prevents your feature flag definitions from being exposed publicly through the Discovery Endpoint. The `Authorization` header sent by Vercel Toolbar contains proof that whoever made this request has access to `FLAGS_SECRET`. The secret itself is not sent over the network.

If the `verifyAccess` check fails, you should return status code `401` and no response body. When the `verifyAccess` check is successful, return the feature flag definitions and other configuration as JSON:

Using the Flags SDK

Using a custom setup

If you are not using the Flags SDK to define feature flags in code, or if you are not using Next.js or SvelteKit, you need to manually return the feature flag definitions from your Discovery Endpoint.

The JSON response must have the following shape

These are your application's feature flags. You can return the following data for each definition:

| Property | Type | Description |
| --- | --- | --- |
| `description` (optional) | string | A description of what this feature flag is for. |
| `origin` (optional) | string | The URL where feature flag is managed. This usually points to the flag details page in your feature flag provider. |
| `options` (optional) | `{ value: any, label?: string }[]` | An array of options. These options will be available as overrides in Vercel Toolbar. |

You can optionally tell Vercel Toolbar about the actual value flags resolved to. The Flags Discovery Endpoint cannot return this as the value might differ for each request. See [Flag values](https://vercel.com/docs/flags/flags-explorer/reference#values) instead.

In some cases you might need to fetch your feature flag definitions from your feature flag provider before you can return them from the Flags Discovery Endpoint.

In case this request fails you can use `hints`. Any hints returned will show up in the UI.

This is useful when you are fetching your feature flags from multiple sources. In case one request fails you might still want to show the remaining flags on a best effort basis, while also displaying a hint that fetching a specific source failed. You can return `definitions` and `hints` simultaneously to do so.

When you create an override, Vercel Toolbar will set a cookie called `vercel-flag-overrides`. You can read this cookie in your applications to make your application respect the overrides set by Vercel Toolbar.

The `overrideEncryptionMode` setting controls the value of the cookie:

*   `plaintext`: The cookie will contain the overrides as plain JSON. Be careful not to trust those overrides as users can manipulate the value easily.
*   `encrypted`: Vercel Toolbar will encrypt overrides using the `FLAGS_SECRET` before storing them in the cookie. This prevents manipulation, but requries decrypting them on your end before usage.

We highly recommend using `encrypted` mode as it protects against manipulation.

The Flags Explorer will set a cookie called `vercel-flag-overrides` containing the overrides.

Using the Flags SDK

If you use the Flags SDK for Next.js or SvelteKit, the SDK will automatically handle the overrides set by the Flags Explorer.

Manual setup

Read this cookie and use the `decrypt` function to decrypt the overrides and use them in your application. The decrypted value is a JSON object containing the name and override value of each overridden flag.

Vercel Toolbar uses a [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver) to find all script tags with `data-flag-values` and `data-flag-definitions` attributes. Any changes to content get detected by the toolbar.

For more information, see the following sections:
