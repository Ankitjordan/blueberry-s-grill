Menu

# Model Fallbacks

Last updated March 7, 2026

You can configure model failover to specify backups that are tried in order if the primary model fails or is unavailable.

## [Using the `models` option](#using-the-models-option)

Use the `models` array in `providerOptions.gateway` to specify fallback models:

app/api/chat/route.ts

```
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.5', // Primary model
    prompt,
    providerOptions: {
      gateway: {
        models: ['anthropic/claude-opus-4.7', 'google/gemini-3.1-pro-preview'], // Fallback models
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this example:

* The gateway first attempts the primary model (`openai/gpt-5.5`)
* If that fails, it tries `anthropic/claude-opus-4.7`
* If that also fails, it tries `google/gemini-3.1-pro-preview`
* The response comes from the first model that succeeds

## [Combining with provider routing](#combining-with-provider-routing)

You can use `models` together with `order` to control both model failover and provider preference:

app/api/chat/route.ts

```
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.5',
    prompt,
    providerOptions: {
      gateway: {
        models: ['openai/gpt-5.4-nano', 'anthropic/claude-opus-4.7'],
        order: ['azure', 'openai'], // Provider preference for each model
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

This configuration:

1. Tries `openai/gpt-5.5` via Azure, then OpenAI
2. If both fail, tries `openai/gpt-5.4-nano` via Azure first, then OpenAI
3. If those fail, it tries `anthropic/claude-opus-4.7` via available providers

## [How failover works](#how-failover-works)

When processing a request with model fallbacks:

1. The gateway routes the request to the primary model (the `model` parameter)
2. For each model, provider routing rules apply (using `order` or `only` if specified)
3. If all providers for a model fail, the gateway tries the next model in the `models` array
4. The response comes from the first successful model/provider combination

### [Example provider metadata with model fallbacks](#example-provider-metadata-with-model-fallbacks)

When model fallbacks occur, the `modelAttempts` array in the provider metadata shows each model that was tried. Each attempt carries two identifiers: `canonicalSlug` is AI Gateway's normalized model name (always `creator/model-name`), while `modelId` is the provider's own internal ID for that model on that provider (`provider:model`). These look similar but are not the same — the same `canonicalSlug` can be tried via several providers, each reporting its own `modelId`. Failed models include error details in their `providerAttempts`, while the successful model includes its provider attempt details:

```
"modelAttempts": [
  {
    "modelId": "vertex:gemini-3.1-pro-preview",
    "canonicalSlug": "google/gemini-3.1-pro-preview",
    "success": false,
    "providerAttemptCount": 2,
    "providerAttempts": [
      {
        "attemptNumber": 1,
        "provider": "vertex",
        "modelId": "vertex:gemini-3.1-pro-preview",
        "success": false,
        "credentialType": "system",
        "responseTimeMs": 15679.64,
        "error": "Internal error encountered.",
        "statusCode": 500
      },
      {
        "attemptNumber": 2,
        "provider": "google",
        "modelId": "google:gemini-3.1-pro-preview",
        "success": false,
        "credentialType": "system",
        "responseTimeMs": 284.30,
        "error": "Internal error encountered.",
        "statusCode": 500
      }
    ]
  },
  {
    "modelId": "anthropic:claude-opus-4-7",
    "canonicalSlug": "anthropic/claude-opus-4.7",
    "success": true,
    "providerAttemptCount": 1,
    "providerAttempts": [
      {
        "attemptNumber": 1,
        "provider": "anthropic",
        "modelId": "anthropic:claude-opus-4-7",
        "success": true,
        "credentialType": "system",
        "statusCode": 200,
        "responseTimeMs": 4521.78,
        "providerResponseId": "msg_01ABCDEFGhJKLmnOpQrStUv"
      }
    ]
  }
]
```

Failover happens automatically. To see which model and provider served your
request, check the [provider
metadata](/docs/ai-gateway/models-and-providers/provider-options#example-provider-metadata-output).

---

[Previous

Provider Options](/docs/ai-gateway/models-and-providers/provider-options)[Next

Provider Timeouts](/docs/ai-gateway/models-and-providers/provider-timeouts)

Was this helpful?
