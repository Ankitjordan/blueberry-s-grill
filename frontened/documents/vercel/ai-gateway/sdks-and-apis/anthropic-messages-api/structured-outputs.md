Menu

# Structured Outputs

Last updated March 7, 2026

Structured outputs let you constrain model responses to follow a specific JSON Schema, guaranteeing valid, parseable JSON every time. This is useful when you need to extract structured data, build reliable pipelines, or integrate model responses directly into your application.

AI Gateway supports two approaches for structured outputs with Anthropic models:

* GA API (`output_config.format`): The stable, generally available path
* Beta API (`output_format` with the `structured-outputs-2025-11-13` beta header): The original beta path

For full details on structured outputs, see the [Anthropic structured outputs documentation](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

## [Using `output_config.format` (GA)](#using-output_config.format-ga)

The GA API uses the `output_config.format` field to specify a JSON Schema. No beta header is required.

Example request

structured-output.ts

```
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const anthropic = new Anthropic({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh',
});

const personSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
    email: { type: 'string' },
    skills: {
      type: 'array',
      items: { type: 'string' },
    },
  },
  required: ['name', 'age', 'email', 'skills'],
};

const message = await anthropic.messages.create({
  model: 'anthropic/claude-sonnet-4.6',
  max_tokens: 1024,
  messages: [
    {
      role: 'user',
      content: 'Generate a profile for a software engineer in Austin, TX.',
    },
  ],
  // @ts-expect-error -- output_config is not yet in the TS SDK types
  output_config: {
    format: {
      type: 'json_schema',
      schema: personSchema,
    },
  },
});

const textBlock = message.content.find((b) => b.type === 'text');
if (textBlock?.type === 'text') {
  const person = JSON.parse(textBlock.text);
  console.log(person.name, person.skills);
}
```

structured\_output.py

```
import os
import json
import anthropic

api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')

client = anthropic.Anthropic(
    api_key=api_key,
    base_url='https://ai-gateway.vercel.sh'
)

person_schema = {
    'type': 'object',
    'additionalProperties': False,
    'properties': {
        'name': {'type': 'string'},
        'age': {'type': 'number'},
        'email': {'type': 'string'},
        'skills': {
            'type': 'array',
            'items': {'type': 'string'},
        },
    },
    'required': ['name', 'age', 'email', 'skills'],
}

message = client.messages.create(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=1024,
    messages=[
        {
            'role': 'user',
            'content': 'Generate a profile for a software engineer in Austin, TX.'
        }
    ],
    output_config={
        'format': {
            'type': 'json_schema',
            'schema': person_schema,
        },
    },
)

text_block = next(b for b in message.content if b.type == 'text')
person = json.loads(text_block.text)
print(person['name'], person['skills'])
```

You can combine `format` with `effort` in the same `output_config` object:

```
output_config: {
  effort: 'high',
  format: {
    type: 'json_schema',
    schema: personSchema,
  },
},
```

## [Using `output_format` (beta)](#using-output_format-beta)

The beta API uses the `output_format` field along with the `structured-outputs-2025-11-13` beta header.

Example request

structured-output-beta.ts

```
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const anthropic = new Anthropic({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh',
});

const forecastSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    location: { type: 'string' },
    temperature: { type: 'number' },
    conditions: { type: 'string' },
    forecast: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          day: { type: 'string' },
          high: { type: 'number' },
          low: { type: 'number' },
          conditions: { type: 'string' },
        },
        required: ['day', 'high', 'low', 'conditions'],
      },
    },
  },
  required: ['location', 'temperature', 'conditions', 'forecast'],
};

const message = await anthropic.messages.create({
  model: 'anthropic/claude-sonnet-4.6',
  max_tokens: 1024,
  messages: [
    {
      role: 'user',
      content: 'Give me a weather forecast for San Francisco, CA.',
    },
  ],
  // @ts-expect-error -- output_format is not yet in the TS SDK types
  output_format: {
    type: 'json_schema',
    schema: forecastSchema,
  },
  betas: ['structured-outputs-2025-11-13'],
});

const textBlock = message.content.find((b) => b.type === 'text');
if (textBlock?.type === 'text') {
  const forecast = JSON.parse(textBlock.text);
  console.log(forecast.location, forecast.temperature);
}
```

structured\_output\_beta.py

```
import os
import json
import anthropic

api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')

client = anthropic.Anthropic(
    api_key=api_key,
    base_url='https://ai-gateway.vercel.sh'
)

forecast_schema = {
    'type': 'object',
    'additionalProperties': False,
    'properties': {
        'location': {'type': 'string'},
        'temperature': {'type': 'number'},
        'conditions': {'type': 'string'},
        'forecast': {
            'type': 'array',
            'items': {
                'type': 'object',
                'additionalProperties': False,
                'properties': {
                    'day': {'type': 'string'},
                    'high': {'type': 'number'},
                    'low': {'type': 'number'},
                    'conditions': {'type': 'string'},
                },
                'required': ['day', 'high', 'low', 'conditions'],
            },
        },
    },
    'required': ['location', 'temperature', 'conditions', 'forecast'],
}

message = client.messages.create(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=1024,
    messages=[
        {
            'role': 'user',
            'content': 'Give me a weather forecast for San Francisco, CA.'
        }
    ],
    extra_body={
        'output_format': {
            'type': 'json_schema',
            'schema': forecast_schema,
        },
    },
    extra_headers={
        'anthropic-beta': 'structured-outputs-2025-11-13',
    },
)

text_block = next(b for b in message.content if b.type == 'text')
forecast = json.loads(text_block.text)
print(forecast['location'], forecast['temperature'])
```

## [Streaming structured outputs](#streaming-structured-outputs)

Structured outputs work with streaming. The model produces valid JSON incrementally, and each `text_delta` event contains a fragment of the JSON. Accumulate the fragments and parse the complete JSON when the stream ends.

Example request

structured-output-stream.ts

```
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const anthropic = new Anthropic({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh',
});

const recipeSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    cuisine: { type: 'string' },
    difficulty: { type: 'string', enum: ['easy', 'medium', 'hard'] },
    servings: { type: 'number' },
    ingredients: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          amount: { type: 'string' },
        },
        required: ['name', 'amount'],
      },
    },
    steps: { type: 'array', items: { type: 'string' } },
  },
  required: ['name', 'cuisine', 'difficulty', 'servings', 'ingredients', 'steps'],
};

const stream = await anthropic.messages.create({
  model: 'anthropic/claude-sonnet-4.6',
  max_tokens: 2048,
  stream: true,
  messages: [
    {
      role: 'user',
      content: 'Give me a recipe for classic Italian lasagna.',
    },
  ],
  // @ts-expect-error -- output_format is not yet in the TS SDK types
  output_format: {
    type: 'json_schema',
    schema: recipeSchema,
  },
  betas: ['structured-outputs-2025-11-13'],
});

let fullJson = '';

for await (const event of stream) {
  if (
    event.type === 'content_block_delta' &&
    event.delta.type === 'text_delta'
  ) {
    fullJson += event.delta.text;
  }
}

const recipe = JSON.parse(fullJson);
console.log(recipe.name, recipe.cuisine);
```

structured\_output\_stream.py

```
import os
import json
import anthropic

api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')

client = anthropic.Anthropic(
    api_key=api_key,
    base_url='https://ai-gateway.vercel.sh'
)

recipe_schema = {
    'type': 'object',
    'additionalProperties': False,
    'properties': {
        'name': {'type': 'string'},
        'cuisine': {'type': 'string'},
        'difficulty': {'type': 'string', 'enum': ['easy', 'medium', 'hard']},
        'servings': {'type': 'number'},
        'ingredients': {
            'type': 'array',
            'items': {
                'type': 'object',
                'additionalProperties': False,
                'properties': {
                    'name': {'type': 'string'},
                    'amount': {'type': 'string'},
                },
                'required': ['name', 'amount'],
            },
        },
        'steps': {'type': 'array', 'items': {'type': 'string'}},
    },
    'required': ['name', 'cuisine', 'difficulty', 'servings', 'ingredients', 'steps'],
}

full_json = ''

with client.messages.stream(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=2048,
    messages=[
        {
            'role': 'user',
            'content': 'Give me a recipe for classic Italian lasagna.'
        }
    ],
    extra_body={
        'output_format': {
            'type': 'json_schema',
            'schema': recipe_schema,
        },
    },
    extra_headers={
        'anthropic-beta': 'structured-outputs-2025-11-13',
    },
) as stream:
    for text in stream.text_stream:
        full_json += text

recipe = json.loads(full_json)
print(recipe['name'], recipe['cuisine'])
```

## [Response format](#response-format)

When structured outputs are enabled, the model returns valid JSON in a `text` content block:

```
{
  "id": "msg_123",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "{\"name\":\"Alex Chen\",\"age\":29,\"email\":\"alex@example.com\",\"skills\":[\"TypeScript\",\"React\",\"Node.js\"]}"
    }
  ],
  "model": "anthropic/claude-sonnet-4.6",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 25,
    "output_tokens": 80
  }
}
```

## [Schema requirements](#schema-requirements)

* Set `additionalProperties: false` on all object types in your schema
* Include a `required` array listing all properties on each object
* Supported types: `string`, `number`, `boolean`, `array`, `object`, and `enum`

For complete schema requirements and best practices, see the [Anthropic structured outputs documentation](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

---

[Previous

File Attachments](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/file-attachments)[Next

OpenResponses API](/docs/ai-gateway/sdks-and-apis/openresponses)

Was this helpful?
