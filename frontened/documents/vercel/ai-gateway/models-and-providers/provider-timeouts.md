Menu

# Provider Timeouts

Last updated March 24, 2026

You can set per-provider timeouts to trigger fast failover when a provider is slow to respond. If a provider doesn't start responding within the configured timeout, AI Gateway aborts the request and falls back to the next available provider.

Use this for latency-sensitive applications where fast failover beats waiting for a slow provider.

Provider timeouts apply to BYOK (Bring Your Own Key) credentials only. Some
providers don't support stream cancellation, so you may still be charged for
timed-out requests depending on the provider.

## [Set provider timeouts](#set-provider-timeouts)

Use the `providerTimeouts` option in `providerOptions.gateway` to configure timeouts per provider. Values are in milliseconds.

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
        providerTimeouts: {
          byok: { openai: 15000 }, // 15 seconds
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this example, if OpenAI doesn't start responding within 15 seconds using your own API key, AI Gateway aborts the request and tries the next available provider.

## [Timeout limits](#timeout-limits)

| Minimum | Maximum |
| --- | --- |
| 1,000ms (1s) | 789,000ms (~13 min) |

The timeout measures time until the provider starts streaming. Once the first
token arrives (including thinking tokens from reasoning models), the timeout
is cleared and won't fire.

## [Combine with provider routing](#combine-with-provider-routing)

Provider timeouts work with all other [provider options](/docs/ai-gateway/models-and-providers/provider-options). Combine them with `order` to control both the provider sequence and failover speed:

app/api/chat/route.ts

```
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    providerOptions: {
      gateway: {
        order: ['anthropic', 'bedrock', 'vertex'],
        providerTimeouts: {
          byok: {
            anthropic: 10000,
            bedrock: 15000,
            // no timeout for vertex — uses the default gateway timeout
          },
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

This configuration:

1. Tries Anthropic first with a 10-second timeout
2. If Anthropic is slow, falls back to Bedrock with a 15-second timeout
3. If Bedrock is slow, falls back to Vertex with the default gateway timeout

## [Check timeout behavior in response metadata](#check-timeout-behavior-in-response-metadata)

When a provider times out, the attempt metadata includes `providerTimeout` and `configuredTimeoutMs` fields so you can see exactly what happened. Check the `providerAttempts` within each `modelAttempts` entry:

```
"modelAttempts": [
  {
    "modelId": "anthropic:claude-sonnet-4.6",
    "canonicalSlug": "anthropic/claude-sonnet-4.6",
    "success": true,
    "providerAttemptCount": 2,
    "providerAttempts": [
      {
        "provider": "anthropic",
        "credentialType": "byok",
        "success": false,
        "error": "PROVIDER_TIMEOUT",
        "providerTimeout": true,
        "configuredTimeoutMs": 10000
      },
      {
        "provider": "bedrock",
        "credentialType": "byok",
        "success": true,
        "statusCode": 200
      }
    ]
  }
]
```

For more details on reading provider metadata, see [Provider Options](/docs/ai-gateway/models-and-providers/provider-options#example-provider-metadata-output).

---

[Previous

Model Fallbacks](/docs/ai-gateway/models-and-providers/model-fallbacks)[Next

Automatic Caching](/docs/ai-gateway/models-and-providers/automatic-caching)

Was this helpful?
