Menu

# Reranking

Rerank documents by relevance to a search query. Reranking is useful for improving search results in retrieval-augmented generation (RAG) pipelines by re-scoring candidate documents after an initial retrieval step.

To see which models AI Gateway supports for reranking, use the Reranking filter at the [AI Gateway Models page](https://vercel.com/ai-gateway/models?capabilities=reranking).

## [Basic usage](#basic-usage)

app/api/rerank/route.ts

```
import { rerank } from 'ai';

export async function GET() {
  const result = await rerank({
    model: 'cohere/rerank-v3.5',
    query: 'What is the capital of France?',
    documents: [
      'Paris is the capital of France.',
      'Berlin is the capital of Germany.',
      'Madrid is the capital of Spain.',
    ],
    topN: 2,
  });

  return Response.json(result.ranking);
}
```

The `rerank` function returns a `ranking` array sorted by relevance score, along with the `rerankedDocuments` in order:

```
// result.ranking
[
  { originalIndex: 0, score: 0.89, document: 'Paris is the capital of France.' },
  { originalIndex: 2, score: 0.15, document: 'Madrid is the capital of Spain.' },
]

// result.rerankedDocuments
['Paris is the capital of France.', 'Madrid is the capital of Spain.']
```

## [Gateway provider instance](#gateway-provider-instance)

If you're using the Gateway provider instance, specify reranking models with `gateway.rerankingModel(...)`.

app/api/rerank/route.ts

```
import { rerank } from 'ai';
import { gateway } from '@ai-sdk/gateway';

export async function GET() {
  const result = await rerank({
    model: gateway.rerankingModel('cohere/rerank-v3.5'),
    query: 'What is the capital of France?',
    documents: [
      'Paris is the capital of France.',
      'Berlin is the capital of Germany.',
      'Madrid is the capital of Spain.',
    ],
    topN: 2,
  });

  return Response.json(result.ranking);
}
```

Reranking models are available through the AI SDK only. They are not supported
through the OpenAI-compatible or Anthropic-compatible endpoints.

---

Was this helpful?
