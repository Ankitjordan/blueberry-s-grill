Menu

# Embeddings

Last updated March 7, 2026

Generate vector embeddings for semantic search, similarity matching, and retrieval-augmented generation (RAG).

To see which models AI Gateway supports for embeddings, use the Embedding filter at the [AI Gateway Models page](https://vercel.com/ai-gateway/models?capabilities=embedding).

## [Single value](#single-value)

app/api/embed/route.ts

```
import { embed } from 'ai';

export async function GET() {
  const result = await embed({
    model: 'openai/text-embedding-3-small',
    value: 'Sunny day at the beach',
  });

  return Response.json(result);
}
```

## [Multiple values](#multiple-values)

app/api/embed/route.ts

```
import { embedMany } from 'ai';

export async function GET() {
  const result = await embedMany({
    model: 'openai/text-embedding-3-small',
    values: ['Sunny day at the beach', 'Cloudy city skyline'],
  });

  return Response.json(result);
}
```

## [Gateway provider instance](#gateway-provider-instance)

Alternatively, if you're using the Gateway provider instance, specify embedding models with `gateway.textEmbeddingModel(...)`.

app/api/embed/route.ts

```
import { embed } from 'ai';
import { gateway } from '@ai-sdk/gateway';

export async function GET() {
  const result = await embed({
    model: gateway.textEmbeddingModel('openai/text-embedding-3-small'),
    value: 'Sunny day at the beach',
  });

  return Response.json(result);
}
```

---

[Previous

Advanced](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/advanced)[Next

Image Generation](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/image-generation)

Was this helpful?
