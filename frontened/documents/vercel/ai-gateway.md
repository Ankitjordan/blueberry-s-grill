AI Gateway

# AI Gateway

Last updated April 2, 2026

AI Gateway is available on [all plans](/docs/plans) . Your use of each AI provider is subject to their terms listed on each model's page and subject to Vercel's [AI Product Terms](/legal/ai-product-terms).

The [AI Gateway](https://vercel.com/ai-gateway) provides a unified API to access [hundreds of models](https://vercel.com/ai-gateway/models) through a single endpoint.
It gives you the ability to set budgets, monitor usage, load-balance requests, and manage fallbacks.

AI Gateway works with [AI SDK v5 and v6](/docs/ai-gateway/getting-started), [OpenAI Chat Completions](/docs/ai-gateway/sdks-and-apis/openai-chat-completions), [OpenAI Responses](/docs/ai-gateway/sdks-and-apis/responses), [Anthropic Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api), or your [preferred framework](/docs/ai-gateway/ecosystem/framework-integrations).

## [What AI Gateway provides](#what-ai-gateway-provides)

* One key, hundreds of models. Access models from multiple providers with a single API key
* Unified API. Switch between providers and models with minimal code changes
* High reliability. Automatically retries requests to other providers if one fails
* Embeddings support. Generate vector embeddings for search, retrieval, and other tasks
* Spend monitoring. Monitor your spending across different providers
* No markup on tokens. Tokens cost the same as they would from the provider directly, with zero markup, including with [Bring Your Own Key (BYOK)](/docs/ai-gateway/authentication-and-byok/byok)

index.ts

```
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'anthropic/claude-opus-4.7',
  prompt: 'What is the capital of France?',
});
```

index.py

```
import os
from openai import OpenAI

client = OpenAI(
  api_key=os.getenv('AI_GATEWAY_API_KEY'),
  base_url='https://ai-gateway.vercel.sh/v1'
)

response = client.chat.completions.create(
  model='xai/grok-4.3',
  messages=[
    {
      'role': 'user',
      'content': 'Why is the sky blue?'
    }
  ]
)
```

index.sh

```
curl -X POST "https://ai-gateway.vercel.sh/v1/chat/completions" \
-H "Authorization: Bearer $AI_GATEWAY_API_KEY" \
-H "Content-Type: application/json" \
-d '{
  "model": "openai/gpt-5.5",
  "messages": [
    {
      "role": "user",
      "content": "Why is the sky blue?"
    }
  ],
  "stream": false
}'
```

## [Get started and learn more](#get-started-and-learn-more)

* [Getting started with AI Gateway](/docs/ai-gateway/getting-started)
* [Models and providers](/docs/ai-gateway/models-and-providers)
* [Provider options (routing & fallbacks)](/docs/ai-gateway/models-and-providers/provider-options)
* [Web search](/docs/ai-gateway/capabilities/web-search)
* [Observability](/docs/ai-gateway/capabilities/observability)
* [Coding Agents](/docs/ai-gateway/coding-agents)
* [Anthropic compatibility](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api)
* [OpenAI compatibility](/docs/ai-gateway/sdks-and-apis/openai-chat-completions)
* [Disallow prompt training](/docs/ai-gateway/capabilities/disallow-prompt-training)
* [Usage and billing](/docs/ai-gateway/capabilities/usage)
* [Authentication](/docs/ai-gateway/authentication-and-byok/authentication)
* [Bring your own key](/docs/ai-gateway/authentication-and-byok/byok)
* [Framework integrations](/docs/ai-gateway/ecosystem/framework-integrations)
* [App attribution](/docs/ai-gateway/ecosystem/app-attribution)

---

[Previous

AI SDK](/docs/ai-sdk)[Next

Getting Started](/docs/ai-gateway/getting-started)

Was this helpful?
