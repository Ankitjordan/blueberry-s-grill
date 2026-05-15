Menu

# Web Search

Last updated March 7, 2026

AI Gateway provides built-in web search capabilities that allow AI models to access current information from the web. This is useful when you need up-to-date information that may not be in the model's training data.

AI Gateway supports two types of web search:

* Search for all providers: Use [Perplexity Search](#using-perplexity-search) or [Parallel Search](#using-parallel-search) with any model regardless of provider. This gives you consistent web search behavior across different models.
* Provider-specific search: Use native web search tools from [Anthropic](#anthropic-web-search), [OpenAI](#openai-web-search), or [Google](#google-web-search). These tools are optimized for their respective providers and may offer [additional features](#provider-specific-search).

## [Using Perplexity Search](#using-perplexity-search)

The `perplexitySearch` tool can be used with any model regardless of the model provider or creator. This makes it a flexible option when you want consistent web search behavior across different models, or when you want to use web search with a model whose provider doesn't offer native web search capabilities.

To use Perplexity Search, import `gateway` from `ai` and pass `gateway.tools.perplexitySearch()` to the `tools` parameter. When the model needs current information, it calls the tool and AI Gateway routes the request to [Perplexity's search API](https://docs.perplexity.ai/guides/search-quickstart).

Perplexity web search requests are charged at $5 per 1,000 requests. See
[Perplexity's pricing](https://docs.perplexity.ai/getting-started/pricing) for
more details.

perplexity-web-search.ts

```
import { gateway, streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.5', // Works with any model, not just Perplexity
    prompt,
    tools: {
      perplexity_search: gateway.tools.perplexitySearch(),
    },
  });

  for await (const part of result.fullStream) {
    if (part.type === 'text-delta') {
      process.stdout.write(part.text);
    } else if (part.type === 'tool-call') {
      console.log('Tool call:', part.toolName);
    } else if (part.type === 'tool-result') {
      console.log('Search results received');
    }
  }

  return result.toDataStreamResponse();
}
```

perplexity-web-search.ts

```
import { gateway, generateText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'openai/gpt-5.5', // Works with any model, not just Perplexity
    prompt,
    tools: {
      perplexity_search: gateway.tools.perplexitySearch(),
    },
  });

  return Response.json({ text });
}
```

### [Perplexity parameters](#perplexity-parameters)

You can configure the `perplexitySearch` tool with these parameters:

* `maxResults`: Number of results to return (1-20). Defaults to 10.
* `maxTokens`: Total token budget across all results. Defaults to 25,000, max 1,000,000.
* `maxTokensPerPage`: Tokens extracted per webpage. Defaults to 2,048.
* `country`: ISO 3166-1 alpha-2 country code (e.g., `'US'`, `'GB'`) for regional results.
* `searchLanguageFilter`: ISO 639-1 language codes (e.g., `['en', 'fr']`). Max 10 codes.
* `searchDomainFilter`: Domains to include (e.g., `['reuters.com']`) or exclude with `-` prefix (e.g., `['-reddit.com']`). Max 20 domains. Cannot mix allowlist and denylist.
* `searchRecencyFilter`: Filter by content recency. Values: `'day'`, `'week'`, `'month'`, or `'year'`.

perplexity-web-search-params.ts

```
import { gateway, streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.5',
    prompt,
    tools: {
      perplexity_search: gateway.tools.perplexitySearch({
        maxResults: 5,
        maxTokens: 50000,
        maxTokensPerPage: 2048,
        country: 'US',
        searchLanguageFilter: ['en'],
        searchDomainFilter: ['reuters.com', 'bbc.com', 'nytimes.com'],
        searchRecencyFilter: 'week',
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

perplexity-web-search-params.ts

```
import { gateway, generateText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'openai/gpt-5.5',
    prompt,
    tools: {
      perplexity_search: gateway.tools.perplexitySearch({
        maxResults: 5,
        maxTokens: 50000,
        maxTokensPerPage: 2048,
        country: 'US',
        searchLanguageFilter: ['en'],
        searchDomainFilter: ['reuters.com', 'bbc.com', 'nytimes.com'],
        searchRecencyFilter: 'week',
      }),
    },
  });

  return Response.json({ text });
}
```

## [Using Parallel Search](#using-parallel-search)

The `parallelSearch` tool can be used with any model regardless of the model provider or creator. [Parallel AI](https://parallel.ai/) provides LLM-optimized web search that extracts relevant excerpts from web pages, making it ideal for research tasks and information retrieval.

To use Parallel Search, import `gateway` from `ai` and pass `gateway.tools.parallelSearch()` to the `tools` parameter. When the model needs current information, it calls the tool and AI Gateway routes the request to [Parallel's search API](https://docs.parallel.ai/search/search-quickstart).

Parallel web search requests are charged at $5 per 1,000 requests (includes up
to 10 results per request). Additional results beyond 10 are charged at $1 per
1,000 additional results.

parallel-web-search.ts

```
import { gateway, streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-opus-4.7', // Works with any model
    prompt,
    tools: {
      parallel_search: gateway.tools.parallelSearch(),
    },
  });

  for await (const part of result.fullStream) {
    if (part.type === 'text-delta') {
      process.stdout.write(part.text);
    } else if (part.type === 'tool-call') {
      console.log('Tool call:', part.toolName);
    } else if (part.type === 'tool-result') {
      console.log('Search results received');
    }
  }

  return result.toDataStreamResponse();
}
```

parallel-web-search.ts

```
import { gateway, generateText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'anthropic/claude-opus-4.7', // Works with any model
    prompt,
    tools: {
      parallel_search: gateway.tools.parallelSearch(),
    },
  });

  return Response.json({ text });
}
```

### [Parallel parameters](#parallel-parameters)

You can configure the `parallelSearch` tool with these parameters:

* `mode`: Search mode preset. Values: `'one-shot'` (comprehensive results with longer excerpts, default) or `'agentic'` (concise, token-efficient results for multi-step workflows).
* `maxResults`: Maximum number of results to return (1-20). Defaults to 10.
* `searchQueries`: Optional list of keyword search queries to supplement the objective.
* `sourcePolicy`: Controls which domains and date ranges to include or exclude.
  + `includeDomains`: List of domains to restrict search results to (e.g., `['arxiv.org', 'nature.com']`).
  + `excludeDomains`: List of domains to exclude from search results.
  + `afterDate`: Only return results published after this date (format: `YYYY-MM-DD`).
* `excerpts`: Controls result excerpt length.
  + `maxCharsPerResult`: Maximum characters per result excerpt.
  + `maxCharsTotal`: Maximum total characters across all result excerpts.
* `fetchPolicy`: Controls content freshness.
  + `maxAgeSeconds`: Maximum age of cached content in seconds for time-sensitive queries.

parallel-web-search-params.ts

```
import { gateway, streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    tools: {
      parallel_search: gateway.tools.parallelSearch({
        mode: 'one-shot',
        maxResults: 5,
        sourcePolicy: {
          includeDomains: ['arxiv.org', 'nature.com', 'science.org'],
          afterDate: '2025-01-01',
        },
        excerpts: {
          maxCharsPerResult: 5000,
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

parallel-web-search-params.ts

```
import { gateway, generateText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    tools: {
      parallel_search: gateway.tools.parallelSearch({
        mode: 'one-shot',
        maxResults: 15,
        sourcePolicy: {
          includeDomains: ['arxiv.org', 'nature.com', 'science.org'],
          afterDate: '2025-01-01',
        },
        excerpts: {
          maxCharsPerResult: 5000,
        },
      }),
    },
  });

  return Response.json({ text });
}
```

For more details on search parameters and API options, see the [Parallel AI Search documentation](https://docs.parallel.ai/search/search-quickstart).

## [Provider-specific search](#provider-specific-search)

Use native web search tools from Anthropic, OpenAI, or Google. These tools are optimized for their respective providers and may offer additional features.

Pricing for provider-specific web search tools depends on the model you use.
See the Web Search price column on the [model detail
pages](https://vercel.com/ai-gateway/models) for exact pricing.

### [Anthropic web search](#anthropic-web-search)

For Anthropic models, you can use the native [web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) provided by the `@ai-sdk/anthropic` package. Import `anthropic` from `@ai-sdk/anthropic` and pass `anthropic.tools.webSearch_20250305()` to the `tools` parameter. The tool returns source information including titles and URLs, which you can access through the `source` event type in the stream.

anthropic-web-search.ts

```
import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    tools: {
      web_search: anthropic.tools.webSearch_20250305(),
    },
  });

  return result.toDataStreamResponse();
}
```

anthropic-web-search.ts

```
import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    tools: {
      web_search: anthropic.tools.webSearch_20250305(),
    },
  });

  return Response.json({ text });
}
```

#### [Anthropic parameters](#anthropic-parameters)

The following parameters are supported:

* `maxUses`: Maximum number of web searches Claude can perform during the conversation.
* `allowedDomains`: Optional list of domains Claude is allowed to search. If provided, searches will be restricted to these domains.
* `blockedDomains`: Optional list of domains Claude should avoid when searching.
* `userLocation`: Optional user location information to provide geographically relevant search results.

anthropic-web-search-params.ts

```
import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    tools: {
      web_search: anthropic.tools.webSearch_20250305({
        maxUses: 3,
        allowedDomains: ['techcrunch.com', 'wired.com'],
        blockedDomains: ['example-spam-site.com'],
        userLocation: {
          type: 'approximate',
          country: 'US',
          region: 'California',
          city: 'San Francisco',
          timezone: 'America/Los_Angeles',
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

anthropic-web-search-params.ts

```
import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'anthropic/claude-opus-4.7',
    prompt,
    tools: {
      web_search: anthropic.tools.webSearch_20250305({
        maxUses: 3,
        allowedDomains: ['techcrunch.com', 'wired.com'],
        blockedDomains: ['example-spam-site.com'],
        userLocation: {
          type: 'approximate',
          country: 'US',
          region: 'California',
          city: 'San Francisco',
          timezone: 'America/Los_Angeles',
        },
      }),
    },
  });

  return Response.json({ text });
}
```

For more details on using the Anthropic Messages API directly, see the [Anthropic advanced features](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/advanced#web-search) documentation.

### [OpenAI web search](#openai-web-search)

For OpenAI models, you can use the native [web search tool](https://platform.openai.com/docs/guides/tools-web-search) provided by the `@ai-sdk/openai` package. Import `openai` from `@ai-sdk/openai` and pass `openai.tools.webSearch({})` to the `tools` parameter.

openai-web-search.ts

```
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.5',
    prompt,
    tools: {
      web_search: openai.tools.webSearch({}),
    },
  });

  return result.toDataStreamResponse();
}
```

openai-web-search.ts

```
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'openai/gpt-5.5',
    prompt,
    tools: {
      web_search: openai.tools.webSearch({}),
    },
  });

  return Response.json({ text });
}
```

### [Google web search](#google-web-search)

For Google Gemini models, you can use [Grounding with Google Search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search). Google offers two providers: Google Vertex and Google AI Studio. Choose the one that matches your setup. The Google Search tool returns source information including titles and URLs, which you can access through the `source` event type in the stream.

#### [Google Vertex](#google-vertex)

Import `vertex` from `@ai-sdk/google-vertex` and pass `vertex.tools.googleSearch({})` to the `tools` parameter. For users who need zero data retention, see [Enterprise web search](#enterprise-web-search) below.

google-vertex-web-search.ts

```
import { streamText } from 'ai';
import { vertex } from '@ai-sdk/google-vertex';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'google/gemini-3.1-pro-preview',
    prompt,
    tools: {
      google_search: vertex.tools.googleSearch({}),
    },
  });

  return result.toDataStreamResponse();
}
```

google-vertex-web-search.ts

```
import { generateText } from 'ai';
import { vertex } from '@ai-sdk/google-vertex';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'google/gemini-3.1-pro-preview',
    prompt,
    tools: {
      google_search: vertex.tools.googleSearch({}),
    },
  });

  return Response.json({ text });
}
```

#### [Enterprise web search](#enterprise-web-search)

For users who need zero data retention, you can use [Enterprise Web Grounding](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise) instead. Pass `vertex.tools.enterpriseWebSearch({})` to the `tools` parameter.

Enterprise web search uses indexed content that is a subset of the full web.
Use Google search for more up-to-date and comprehensive results.

enterprise-web-grounding.ts

```
import { streamText } from 'ai';
import { vertex } from '@ai-sdk/google-vertex';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'google/gemini-3.1-pro-preview',
    prompt,
    tools: {
      enterprise_web_search: vertex.tools.enterpriseWebSearch({}),
    },
  });

  return result.toDataStreamResponse();
}
```

enterprise-web-grounding.ts

```
import { generateText } from 'ai';
import { vertex } from '@ai-sdk/google-vertex';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'google/gemini-3.1-pro-preview',
    prompt,
    tools: {
      enterprise_web_search: vertex.tools.enterpriseWebSearch({}),
    },
  });

  return Response.json({ text });
}
```

#### [Google AI Studio](#google-ai-studio)

Import `google` from `@ai-sdk/google` and pass `google.tools.googleSearch({})` to the `tools` parameter.

google-ai-studio-web-search.ts

```
import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'google/gemini-3.1-pro-preview',
    prompt,
    tools: {
      google_search: google.tools.googleSearch({}),
    },
  });

  return result.toDataStreamResponse();
}
```

google-ai-studio-web-search.ts

```
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const { text } = await generateText({
    model: 'google/gemini-3.1-pro-preview',
    prompt,
    tools: {
      google_search: google.tools.googleSearch({}),
    },
  });

  return Response.json({ text });
}
```

---

[Previous

Video Generation](/docs/ai-gateway/capabilities/video-generation)[Next

Embeddings](/docs/ai-gateway/capabilities/embeddings)

Was this helpful?
