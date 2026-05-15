Menu

# Tool Calls

Last updated March 7, 2026

The Anthropic Messages API supports function calling, allowing models to call tools and functions.

Example request

tool-calls.ts

```
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const anthropic = new Anthropic({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh',
});

const message = await anthropic.messages.create({
  model: 'anthropic/claude-opus-4.7',
  max_tokens: 1024,
  tools: [
    {
      name: 'get_weather',
      description: 'Get the current weather in a given location',
      input_schema: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA',
          },
          unit: {
            type: 'string',
            enum: ['celsius', 'fahrenheit'],
            description: 'The unit for temperature',
          },
        },
        required: ['location'],
      },
    },
  ],
  messages: [
    {
      role: 'user',
      content: 'What is the weather like in San Francisco?',
    },
  ],
});

console.log('Response:', JSON.stringify(message.content, null, 2));
```

tool-calls.py

```
import os
import anthropic

api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')

client = anthropic.Anthropic(
    api_key=api_key,
    base_url='https://ai-gateway.vercel.sh'
)

message = client.messages.create(
    model='anthropic/claude-opus-4.7',
    max_tokens=1024,
    tools=[
        {
            'name': 'get_weather',
            'description': 'Get the current weather in a given location',
            'input_schema': {
                'type': 'object',
                'properties': {
                    'location': {
                        'type': 'string',
                        'description': 'The city and state, e.g. San Francisco, CA'
                    },
                    'unit': {
                        'type': 'string',
                        'enum': ['celsius', 'fahrenheit'],
                        'description': 'The unit for temperature'
                    }
                },
                'required': ['location']
            }
        }
    ],
    messages=[
        {
            'role': 'user',
            'content': 'What is the weather like in San Francisco?'
        }
    ],
)

print('Response:', message.content)
```

Tool call response format

When the model makes tool calls, the response includes tool use blocks:

```
{
  "id": "msg_123",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "tool_use",
      "id": "toolu_123",
      "name": "get_weather",
      "input": {
        "location": "San Francisco, CA",
        "unit": "fahrenheit"
      }
    }
  ],
  "model": "anthropic/claude-opus-4.7",
  "stop_reason": "tool_use",
  "usage": {
    "input_tokens": 82,
    "output_tokens": 45
  }
}
```

---

[Previous

Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/messages)[Next

Advanced](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/advanced)

Was this helpful?
