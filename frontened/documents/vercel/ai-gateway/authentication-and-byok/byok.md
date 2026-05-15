Menu

# Bring Your Own Key (BYOK)

Last updated March 7, 2026

Using your own credentials with an external AI provider allows AI Gateway to authenticate requests on your behalf with [no added markup](/docs/ai-gateway/pricing#using-a-custom-api-key).
This approach is useful for using credits provided by the AI provider or executing AI queries that access private cloud data.
If a query using your credentials fails, AI Gateway will retry the query with its system credentials to improve service availability.

Integrating credentials like this with AI Gateway is sometimes referred to as Bring-Your-Own-Key, or BYOK. In the Vercel dashboard this feature is found in the AI Gateway section in the sidebar under the Bring Your Own Key (BYOK) section in the sidebar.

Provider credentials are scoped to be available throughout your Vercel team, so you can use the same credentials across multiple projects.

Your team must have [AI Gateway credits](/docs/ai-gateway/pricing) at all
times, even when using BYOK. If your credentials fail, AI Gateway falls back
to system credentials to keep your requests running. This fallback is charged
against your AI Gateway credits balance.

## [Getting started](#getting-started)

1. ### [Retrieve credentials from your AI provider](#retrieve-credentials-from-your-ai-provider)

   First, retrieve credentials from your AI provider. AI Gateway uses these credentials first to authenticate requests to that provider. If a query made with your credentials fails, AI Gateway will re-attempt with system credentials, aiming to provide improved availability.
2. ### [Add the credentials to your Vercel team](#add-the-credentials-to-your-vercel-team)

   1. Go to the [AI Gateway Bring Your Own Key (BYOK) page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fbyok&title=AI+Gateway+BYOK) in your Vercel dashboard.
   2. Find your provider from the list and click Add.
   3. In the dialog that appears, enter the credentials you retrieved from the provider.
   4. Ensure that the Enabled toggle is turned on so that the credentials are active.
   5. Click Test Key to validate and add your credentials.
3. ### [Use the credentials in your AI Gateway requests](#use-the-credentials-in-your-ai-gateway-requests)

   Once you add credentials, AI Gateway automatically includes them in your requests. You can now use these credentials to authenticate your requests.

## [Request-scoped BYOK](#request-scoped-byok)

In addition to configuring credentials in the dashboard, you can pass provider credentials on a per-request basis using the `byok` option in `providerOptions.gateway`. This is useful when you need to use different credentials for specific requests without changing your team-wide configuration.

When request-scoped BYOK credentials are provided, AI Gateway doesn't consider any cached BYOK credentials configured in the dashboard for that request. Requests may still fall back to system credentials if the provided credentials fail.

### [AI SDK usage](#ai-sdk-usage)

```
import type { GatewayProviderOptions } from '@ai-sdk/gateway';
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'anthropic/claude-opus-4.7',
  prompt: 'Hello, world!',
  providerOptions: {
    gateway: {
      byok: {
        anthropic: [{ apiKey: process.env.ANTHROPIC_API_KEY }],
      },
    } satisfies GatewayProviderOptions,
  },
});
```

### [Credential structure by provider](#credential-structure-by-provider)

Each provider has its own credential structure:

| Provider | Parameters |
| --- | --- |
| Anthropic | `{ apiKey: string }` |
| OpenAI | `{ apiKey: string }` |
| Azure | `{ apiKey: string, resourceName: string }` |
| Google Vertex AI | `{ project: string, location: string, googleCredentials: { privateKey: string, clientEmail: string } }` |
| Amazon Bedrock | `{ accessKeyId: string, secretAccessKey: string, region?: string }` |

For detailed credential parameters for each provider, see the [AI SDK providers documentation](https://ai-sdk.dev/providers/ai-sdk-providers).

### [Multiple credentials](#multiple-credentials)

You can specify multiple credentials per provider (tried in order) and credentials for multiple providers:

```
providerOptions: {
  gateway: {
    byok: {
      // Multiple credentials for the same provider (tried in order)
      vertex: [
        { project: 'proj-1', location: 'us-east5', googleCredentials: { privateKey: '...', clientEmail: '...' } },
        { project: 'proj-2', location: 'us-east5', googleCredentials: { privateKey: '...', clientEmail: '...' } },
      ],
      // Multiple providers
      anthropic: [{ apiKey: 'sk-ant-...' }],
      bedrock: [{ accessKeyId: '...', secretAccessKey: '...', region: 'us-east-1' }],
    },
  } satisfies GatewayProviderOptions,
},
```

For Chat Completions API usage with request-scoped BYOK, see the
[OpenAI Chat Completions API
documentation](/docs/ai-gateway/sdks-and-apis/openai-chat-completions#request-scoped-byok-bring-your-own-key).

### [Model mappings](#model-mappings)

Some providers like Azure let you create deployments with custom names. Model mappings let you map AI Gateway model slugs to your deployment names so requests route to the correct deployment.

For example, your Azure resource might have a deployment named `my-finetuned-gpt5` for the model `openai/gpt-5.4-nano`.

Include a `modelMappings` array in each credential to map AI Gateway model slugs to your custom deployment names:

```
providerOptions: {
  gateway: {
    only: ['azure'],
    byok: {
      azure: [
        {
          apiKey: process.env.AZURE_API_KEY,
          resourceName: process.env.AZURE_RESOURCE_NAME,
          modelMappings: [
            {
              gatewayModelSlug: 'openai/gpt-5.4-nano',
              customModelId: 'my-finetuned-gpt5',
            },
          ],
        },
      ],
    },
  } satisfies GatewayProviderOptions,
},
```

Model mappings are optional. If your deployment names match AI Gateway defaults, skip this step.

You can also configure model mappings in the dashboard when adding or editing BYOK credentials. The dashboard provides a searchable dropdown of available AI Gateway model slugs.

AI Gateway displays pricing based on East US 2 region rates. If your Azure
resource is in a different region, your actual costs may vary. For
region-specific pricing, see [Azure OpenAI
pricing](https://azure.microsoft.com/en-us/pricing/details/azure-openai/).

## [Testing your credentials](#testing-your-credentials)

After successfully adding your credentials for a provider, you can verify that they're working directly from the Bring Your Own Key (BYOK) tab. To test your credentials:

1. In the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2F&title=) tab, navigate to the Bring Your Own Key (BYOK) section.
2. Click the menu for your configured provider.
3. Select Test Key from the dropdown.

This will execute a small test query using a cheap and fast model from the selected provider to verify the health of your credentials. The test is designed to be minimal and cost-effective while ensuring your authentication is working properly.

Once the test completes, you can click on the test result badge to open a detailed test result modal. This modal includes:

* The code used to make the test request
* The raw JSON response returned by the AI Gateway

---

[Previous

Authentication](/docs/ai-gateway/authentication-and-byok/authentication)[Next

Coding Agents](/docs/ai-gateway/coding-agents)

Was this helpful?
