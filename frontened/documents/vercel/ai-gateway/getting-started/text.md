Menu

# Text Generation Quickstart

Last updated March 7, 2026

This quickstart walks you through making your first text generation request with AI Gateway.

AI Assistance

Set up AI Gateway for text generation. First, make sure the Vercel CLI is installed (`npm i -g vercel`). If I'm using Claude Code or Cursor, install the Vercel Plugin (`npx plugins add vercel/vercel-plugin`). For other agents, install Vercel Skills (`npx skills add vercel-labs/agent-skills`). Then: 1. Initialize a Node.js project and install the `ai` package, dotenv, @types/node, tsx, and typescript. 2. Save my AI\_GATEWAY\_API\_KEY in .env.local. 3. Create an index.ts that uses the AI SDK streamText function with the model 'openai/gpt-5.5' to stream a response and log token usage. 4. Run it with tsx to verify it works.

1. ### [Set up your project](#set-up-your-project)

   Create a new directory and initialize a Node.js project:

   Terminal

   ```
   mkdir ai-text-demo
   cd ai-text-demo
   pnpm init
   ```
2. ### [Install dependencies](#install-dependencies)

   Install the AI SDK and development dependencies:

   Terminal

   ```
   npm install ai dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   yarn add ai dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   pnpm add ai dotenv @types/node tsx typescript
   ```

   Terminal

   ```
   bun add ai dotenv @types/node tsx typescript
   ```
3. ### [Set up your API key](#set-up-your-api-key)

   Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys&title=AI+Gateway+API+Keys) in your Vercel dashboard and click Create key to generate a new API key.

   Create a `.env.local` file and save your API key:

   .env.local

   ```
   AI_GATEWAY_API_KEY=your_ai_gateway_api_key
   ```

   Instead of using an API key, you can use [OIDC
   tokens](/docs/ai-gateway/authentication-and-byok#oidc-token-authentication) to
   authenticate your requests.
4. ### [Create and run your script](#create-and-run-your-script)

   Create an `index.ts` file:

   index.ts

   ```
   import { streamText } from 'ai';
   import 'dotenv/config';

   async function main() {
     const result = streamText({
       model: 'openai/gpt-5.5',
       prompt: 'Invent a new holiday and describe its traditions.',
     });

     for await (const textPart of result.textStream) {
       process.stdout.write(textPart);
     }

     console.log();
     console.log('Token usage:', await result.usage);
     console.log('Finish reason:', await result.finishReason);
   }

   main().catch(console.error);
   ```

   Run your script:

   Terminal

   ```
   pnpm tsx index.ts
   ```

   You should see the AI model's response stream to your terminal.
5. ### [Next steps](#next-steps)

   * Learn about [provider and model routing with fallbacks](/docs/ai-gateway/models-and-providers/provider-options)
   * Explore the [AI SDK documentation](https://ai-sdk.dev/getting-started) for more configuration options
   * Try other APIs: [OpenAI Chat Completions](/docs/ai-gateway/sdks-and-apis/openai-chat-completions), [OpenAI Responses](/docs/ai-gateway/sdks-and-apis/responses), [Anthropic Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api), or [OpenResponses](/docs/ai-gateway/sdks-and-apis/openresponses)

## [Compatible APIs](#compatible-apis)

### [OpenAI Chat Completions API](#openai-chat-completions-api)

Use any OpenAI SDK or HTTP client with AI Gateway:

index.ts

```
import OpenAI from 'openai';
import 'dotenv/config';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'anthropic/claude-opus-4.7',
    messages: [
      {
        role: 'user',
        content: 'Invent a new holiday and describe its traditions.',
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);
```

main.py

```
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1',
)

response = client.chat.completions.create(
    model='anthropic/claude-opus-4.7',
    messages=[
        {
            'role': 'user',
            'content': 'Invent a new holiday and describe its traditions.',
        },
    ],
)

print(response.choices[0].message.content)
```

Learn more in the [OpenAI Chat Completions API docs](/docs/ai-gateway/sdks-and-apis/openai-chat-completions).

### [Anthropic Messages API](#anthropic-messages-api)

Use any Anthropic SDK or HTTP client with AI Gateway:

index.ts

```
import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh',
});

async function main() {
  const message = await client.messages.create({
    model: 'anthropic/claude-opus-4.7',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: 'Invent a new holiday and describe its traditions.',
      },
    ],
  });

  console.log(message.content[0].text);
}

main().catch(console.error);
```

main.py

```
import os
import anthropic
from dotenv import load_dotenv

load_dotenv()

client = anthropic.Anthropic(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh',
)

message = client.messages.create(
    model='anthropic/claude-opus-4.7',
    max_tokens=1024,
    messages=[
        {
            'role': 'user',
            'content': 'Invent a new holiday and describe its traditions.',
        },
    ],
)

print(message.content[0].text)
```

Learn more in the [Anthropic Messages API docs](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api).

### [OpenResponses API](#openresponses-api)

Use the [OpenResponses API](https://openresponses.org), an open standard for AI model interactions:

index.ts

```
import 'dotenv/config';

async function main() {
  const response = await fetch('https://ai-gateway.vercel.sh/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.AI_GATEWAY_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'anthropic/claude-opus-4.7',
      input: [
        {
          type: 'message',
          role: 'user',
          content: 'Invent a new holiday and describe its traditions.',
        },
      ],
    }),
  });

  const result = await response.json();
  console.log(result.output[0].content[0].text);
}

main().catch(console.error);
```

main.py

```
import os
import requests
from dotenv import load_dotenv

load_dotenv()

response = requests.post(
    'https://ai-gateway.vercel.sh/v1/responses',
    headers={
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {os.getenv("AI_GATEWAY_API_KEY")}',
    },
    json={
        'model': 'anthropic/claude-opus-4.7',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': 'Invent a new holiday and describe its traditions.',
            },
        ],
    },
)

result = response.json()
print(result['output'][0]['content'][0]['text'])
```

Terminal

```
curl -X POST "https://ai-gateway.vercel.sh/v1/responses" \
  -H "Authorization: Bearer $AI_GATEWAY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "anthropic/claude-opus-4.7",
    "input": [
      {
        "type": "message",
        "role": "user",
        "content": "Invent a new holiday and describe its traditions."
      }
    ]
  }'
```

Learn more in the [OpenResponses API docs](/docs/ai-gateway/sdks-and-apis/openresponses).

---

[Previous

Getting Started](/docs/ai-gateway/getting-started)[Next

Image](/docs/ai-gateway/getting-started/image)

Was this helpful?
