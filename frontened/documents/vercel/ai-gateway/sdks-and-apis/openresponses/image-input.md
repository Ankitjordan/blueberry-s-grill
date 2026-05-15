Menu

# Image Input

Last updated February 26, 2026

The [OpenResponses API](/docs/ai-gateway/sdks-and-apis/openresponses) supports sending images alongside text for vision-capable models to analyze. Include an `image_url` object in your message content array with either a public URL or a base64-encoded data URI. The `detail` parameter controls the resolution used for analysis.

image-input.ts

```
const apiKey = process.env.AI_GATEWAY_API_KEY;

const response = await fetch('https://ai-gateway.vercel.sh/v1/responses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: 'zai/glm-4.7',
    input: [
      {
        type: 'message',
        role: 'user',
        content: [
          { type: 'text', text: 'Describe this image in detail.' },
          {
            type: 'image_url',
            image_url: { url: 'https://example.com/image.jpg', detail: 'auto' },
          },
        ],
      },
    ],
  }),
});
```

## [Base64-encoded images](#base64-encoded-images)

You can also use base64-encoded images:

```
{
  type: 'image_url',
  image_url: {
    url: `data:image/png;base64,${imageBase64}`,
    detail: 'high',
  },
}
```

## [Detail parameter](#detail-parameter)

The `detail` parameter controls image resolution:

* `auto` - Let the model decide the appropriate resolution
* `low` - Use lower resolution for faster processing
* `high` - Use higher resolution for more detailed analysis

---

[Previous

Streaming](/docs/ai-gateway/sdks-and-apis/openresponses/streaming)[Next

Tool Calling](/docs/ai-gateway/sdks-and-apis/openresponses/tool-calling)

Was this helpful?
