Title: Managing Edge Configs with Vercel REST API

URL Source: https://vercel.com/docs/edge-config/vercel-api

Markdown Content:
# Managing Edge Configs with Vercel REST API
[Skip to content](https://vercel.com/docs/edge-config/vercel-api#geist-skip-nav)

[](https://vercel.com/home)![Image 1: Vercel](https://vercel.com/vc-ap-vercel-docs/_next/static/media/vercel-light.23p4dw77xj4pk.svg?dpl=dpl_5DfGMJKhYjqrAbKHZE8dD5mremRJ)![Image 2: Vercel](https://vercel.com/vc-ap-vercel-docs/_next/static/media/vercel-dark.05qiau0oi3y6n.svg?dpl=dpl_5DfGMJKhYjqrAbKHZE8dD5mremRJ)

*   Products

    *   ##### [AI Cloud](https://vercel.com/ai)

        *   [AI Gateway One endpoint, all your models](https://vercel.com/ai-gateway)
        *   [Sandbox Isolated, safe code execution](https://vercel.com/sandbox)
        *   [Vercel Agent An agent that knows your stack](https://vercel.com/agent)
        *   [AI SDK The AI Toolkit for TypeScript](https://sdk.vercel.ai/)
        *   [v0 Build applications with AI](https://v0.app/)

    *   ##### Core Platform

        *   [CI/CD Helping teams ship 6× faster](https://vercel.com/products/previews)
        *   [Content Delivery Fast, scalable, and reliable](https://vercel.com/cdn)
        *   [Fluid Compute Servers, in serverless form](https://vercel.com/fluid)
        *   [Workflow Long-running workflows at scale](https://vercel.com/workflows)
        *   [Observability Trace every step](https://vercel.com/products/observability)

    *   ##### [Security](https://vercel.com/security)

        *   [Bot Management Scalable bot protection](https://vercel.com/security/bot-management)
        *   [BotID Invisible CAPTCHA](https://vercel.com/botid)
        *   [Platform Security DDoS Protection, Firewall](https://vercel.com/security)
        *   [Web Application Firewall Granular, custom protection](https://vercel.com/security/web-application-firewall)

*   Resources

    *   ##### Company

        *   [Customers Trusted by the best teams](https://vercel.com/customers)
        *   [Blog The latest posts and changes](https://vercel.com/blog)
        *   [Changelog See what shipped](https://vercel.com/changelog)
        *   [Press Read the latest news](https://vercel.com/press)
        *   [Events Join us at an event](https://vercel.com/events)

    *   ##### Learn

        *   [Docs Vercel documentation](https://vercel.com/docs)
        *   [Academy Linear courses to level up](https://vercel.com/academy)
        *   [Knowledge Base Find help quickly](https://vercel.com/kb)
        *   [Community Join the conversation](https://community.vercel.com/)

    *   ##### Open Source

        *   [Next.js The native Next.js platform](https://vercel.com/frameworks/nextjs)
        *   [Nuxt The progressive web framework](https://nuxt.com/)
        *   [Svelte The web’s efficient UI framework](https://svelte.dev/)
        *   [Turborepo Speed with Enterprise scale](https://vercel.com/solutions/turborepo)

*   Solutions

    *   ##### Use Cases

        *   [AI Apps Deploy at the speed of AI](https://vercel.com/ai)
        *   [Composable Commerce Power storefronts that convert](https://vercel.com/solutions/composable-commerce)
        *   [Marketing Sites Launch campaigns fast](https://vercel.com/solutions/marketing-sites)
        *   [Multi-tenant Platforms Scale apps with one codebase](https://vercel.com/solutions/multi-tenant-saas)
        *   [Web Apps Ship features, not infrastructure](https://vercel.com/solutions/web-apps)

    *   ##### Tools

        *   [Marketplace Extend and automate workflows](https://vercel.com/marketplace)
        *   [Templates Jumpstart app development](https://vercel.com/templates)
        *   [Partner Finder Get help from solution partners](https://vercel.com/partners/solution-partners)

    *   ##### Users

        *   [Platform Engineers Automate away repetition](https://vercel.com/solutions/platform-engineering)
        *   [Design Engineers Deploy for every idea](https://vercel.com/solutions/design-engineering)

*   [Enterprise](https://vercel.com/enterprise)
*   [Pricing](https://vercel.com/pricing)

Search Documentation Search...⌘ K

Ask AI

Search Documentation Search...⌘ K

Ask AI

[Edge Config](https://vercel.com/docs/edge-config)

Edge Configs & REST API

*   [Getting Started](https://vercel.com/docs/getting-started-with-vercel)  
*   [Fundamental Concepts](https://vercel.com/docs/fundamentals) Expand menu 
*   [Supported Frameworks](https://vercel.com/docs/frameworks) Expand menu 
*   [Incremental Migration](https://vercel.com/docs/incremental-migration)  
*   [Production Checklist](https://vercel.com/docs/production-checklist)  
*   [Knowledge Base](https://vercel.com/kb)  
*   APIs & SDKs Expand menu 

* * *

*   Access Expand menu 
*   AI Expand menu 
*   Build & Deploy Expand menu 
*   CDN Expand menu 
*   [CLI](https://vercel.com/docs/cli) Expand menu 
*   Collaboration Expand menu 
*   Compute Expand menu 
*   [Flags](https://vercel.com/docs/flags) Expand menu 
*   Integrations Expand menu 
*   [Multi-tenant](https://vercel.com/docs/multi-tenant) Expand menu 
*   Observability Expand menu 
*   Platform Expand menu 
*   Pricing Expand menu 
*   Security Expand menu 
*   Storage Expand menu 
    *   [Overview](https://vercel.com/docs/storage)  
    *   [Blob](https://vercel.com/docs/vercel-blob) Expand menu 
    *   [Edge Config](https://vercel.com/docs/edge-config) Expand menu 
        *   [Getting Started](https://vercel.com/docs/edge-config/get-started)  
        *   [Using Edge Config](https://vercel.com/docs/edge-config/using-edge-config)  
        *    [Edge Configs & REST API](https://vercel.com/docs/edge-config/vercel-api)  
        *   [Edge Configs & Dashboard](https://vercel.com/docs/edge-config/edge-config-dashboard)  
        *   [Edge Config SDK](https://vercel.com/docs/edge-config/edge-config-sdk)  
        *   [Limits & Pricing](https://vercel.com/docs/edge-config/edge-config-limits)  
        *   [Integrations](https://vercel.com/docs/edge-config/edge-config-integrations) Expand menu 

    *   [Marketplace](https://vercel.com/docs/marketplace-storage)  

[Edge Config](https://vercel.com/docs/edge-config)

Edge Configs & REST API

# Managing Edge Configs with Vercel REST API

Ask AI about this page

Last updated March 17, 2026

We recommend you use the Vercel REST API only for creating and updating an [Edge Config](https://vercel.com/edge-config). For reading data (which you should do more often), we highly recommend using the [SDK](https://vercel.com/docs/edge-config/edge-config-sdk).

Updates to your Edge Config can take up to a few seconds to propagate globally, and therefore might not be available from the Edge Config API endpoint immediately. However, fetching your Edge Config data from the Vercel REST API will always return the latest version of your Config. The request will not have Vercel's optimizations, and the response will not be served through Vercel's [CDN](https://vercel.com/docs/cdn).

You can also request metadata about your Edge Configs through the API.

This section will show you how to update, read metadata about, and read the contents of your Edge Configs with the Vercel REST API. To learn about other Vercel REST API functionality with Edge Configs, [read our API spec reference](https://vercel.com/docs/rest-api/reference/endpoints/edge-config).

## [Create an Edge Config](https://vercel.com/docs/edge-config/vercel-api#create-an-edge-config)[](https://vercel.com/docs/edge-config/vercel-api#create-an-edge-config)

To create an Edge Config with the [Vercel REST API](https://vercel.com/docs/rest-api), make a `POST` request to the `edge-config` path of the API endpoint. Your URL should look like this:

endpoint

`'https://api.vercel.com/v1/edge-config';`

The request body should be a JSON object containing a `"slug"` with the name you would like to call your Edge Config as its value.

The name can only contain alphanumeric letters, "_" and "-". It cannot exceed 32 characters.

See the example below:

cURL fetch

cURL

```
curl  -X 'POST' 'https://api.vercel.com/v1/edge-config' \
      -H 'Authorization: Bearer your_vercel_api_token_here' \
      -H 'Content-Type: application/json; charset=utf-8' \
      -d $'{ "slug": "your_edge_config_name_here" }'
```

fetch

```
try {
  const createEdgeConfig = await fetch(
    'https://api.vercel.com/v1/edge-config',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${your_vercel_api_token_here}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug: 'your_edge_config_name_here',
      }),
    },
  );
  const result = await createEdgeConfig.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

Upon success, you should receive a JSON response similar to the following:

response

```
{
  "createdAt": 1234567890123,
  "updatedAt": 1234567890123,
  "slug": "your_edge_config_slug_here",
  "id": "your_edge_config_id_here",
  "digest": "abc123efg456hij789",
  "sizeInBytes": 2,
  "itemCount": 0,
  "ownerId": "your_id_here"
}
```

The above example will create an Edge Config scoped to your Hobby team. To scope your Edge Config to a Vercel Team:

*   [Generate a Vercel REST API access token](https://vercel.com/docs/rest-api/vercel-api-integrations#create-an-access-token) that is scoped to the appropriate Vercel Team
*   Add the `?teamId` query parameter to your `POST` request. Set its value to [the Team's ID](https://vercel.com/docs/accounts#find-your-team-id), which you can find under the Settings section in the sidebar in the Team's Dashboard on Vercel.

The `"ownerId"` key's value will be your[Vercel Team's ID](https://vercel.com/docs/accounts#find-your-team-id) if you created the Edge Config using the `?teamId` query parameter.

## [Update your Edge Config items](https://vercel.com/docs/edge-config/vercel-api#update-your-edge-config-items)[](https://vercel.com/docs/edge-config/vercel-api#update-your-edge-config-items)

To add an item to or update an item in your Edge Config, send a `PATCH` request to the `edge-config` endpoint, appending `/your_edge_config_id_here/items` to the end.

If you're requesting an Edge Config scoped to a team, add `?teamId=` to the end of the endpoint, pasting [the Vercel Team's ID](https://vercel.com/docs/accounts#find-your-team-id) after the `=` symbol.

Your URL should look like this:

endpoint

`'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items?teamId=your_team_id_here';`

Your request body should be a JSON object containing an `"items"` array. The `"items"` array must contain objects that describe the change you want to make to the Edge Config. The following table outlines valid keys and values for these objects:

| Property | Description | Valid values |
| --- | --- | --- |
| `"operation"` | The change you want to make to your Edge Config. | `"create"`, `"update"`, `"upsert"`, `"delete"` |
| `"key"` | The name of the key you want to add to or update within your Edge Config. | String of alphanumeric characters, "_" and "-" only. Up to 256 characters. |
| `"value"` | The value you want to assign to the key. | Strings, JSON objects, `null` objects, Numbers and arrays of the previous four types |

The following example demonstrates a request body that creates an `"example_key_1"` key with a value of `"example_value_1"`, then updates the `"example_key_2"` key with a new value of `"new_value"`:

body

```
{
  "items": [
    {
      "operation": "create",
      "key": "example_key_1",
      "value": "example_value_1"
    },
    {
      "operation": "update",
      "key": "example_key_2",
      "value": "new_value"
    }
  ]
}
```

The following is an API call that sends the above request body to your Edge Config:

cURL fetch

cURL

```
curl -X 'PATCH' 'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items' \
     -H 'Authorization: Bearer your_vercel_api_token_here' \
     -H 'Content-Type: application/json' \
     -d $'{ "items": [ { "operation": "create", "key": "example_key_1", "value": "example_value_1" }, { "operation": "update", "key": "example_key_2", "value": "new_value" } ] }'
```

fetch

```
try {
  const updateEdgeConfig = await fetch(
    'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items',
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${your_vercel_api_token_here}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'create',
            key: 'example_key_1',
            value: 'example_value_1',
          },
          {
            operation: 'update',
            key: 'example_key_2',
            value: 'new_value',
          },
        ],
      }),
    },
  );
  const result = await updateEdgeConfig.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

Successful requests will receive a response of `{"status":"ok"}`.

### [Failing Edge Config `PATCH` requests](https://vercel.com/docs/edge-config/vercel-api#failing-edge-config-patch-requests)[](https://vercel.com/docs/edge-config/vercel-api#failing-edge-config-patch-requests)

If only one of the operations in the `"items"` array of your `PATCH` request body fails, the entire request will fail. Failed requests will receive a response JSON object containing an `"error"` property with an object that contains information about why the request failed.

For example:

error

```
{
  "error": {
    "code": "forbidden",
    "message": "The request is missing an authentication token",
    "missingToken": true
  }
}
```

## [Read all items](https://vercel.com/docs/edge-config/vercel-api#read-all-items)[](https://vercel.com/docs/edge-config/vercel-api#read-all-items)

Reading items from your Edge Configs with the Vercel REST API is not recommended. Instead, you should [use the SDK](https://vercel.com/docs/edge-config/edge-config-sdk#read-multiple-values) or fetch Edge Config data with [the Edge Config endpoint](https://vercel.com/docs/edge-config/vercel-api#make-requests-to-the-edge-config-endpoint).

However, if you must read your Edge Config with the API, you can do so by making a `GET` request to the `edge-config` endpoint.

Your URL should look like this:

endpoint

`'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items?teamId=your_team_id_here';`

The following is an example of a request that fetches an Edge Config's items with the Vercel REST API:

cURL fetch

request

```
curl "https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items?teamId=your_team_id_here" \
     -H 'Authorization: Bearer your_vercel_api_token_here'
```

fetch

```
try {
  const readItems = await fetch(
    'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items?teamId=your_team_id_here',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${your_vercel_api_token_here}`,
      },
    },
  );
  const result = await readItems.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

## [Read metadata](https://vercel.com/docs/edge-config/vercel-api#read-metadata)[](https://vercel.com/docs/edge-config/vercel-api#read-metadata)

You can read your Edge Config's metadata (but not its key-value pair contents) by making a `GET` request to the `edge-config` API endpoint. Append the Edge Config's id to the endpoint as a path, as demonstrated below. If the Edge Config is associated with a Team, add the `teamId` query param to the end.

The following is an example `GET` request that fetches metadata about an Edge Config associated with a Vercel Team.

cURL fetch

request

```
curl "https://api.vercel.com/v1/edge-config/your_edge_config_id_here?teamId=your_team_id_here" \
     -H 'Authorization: Bearer your_vercel_api_token_here'
```

fetch

```
try {
  const readMetadata = await fetch(
    'https://api.vercel.com/v1/edge-config/your_edge_config_id_here?teamId=your_team_id_here',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${your_vercel_api_token_here}`,
      },
    },
  );
  const result = await readMetadata.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

If the Edge Config exists, the response will be the same JSON object you receive when [creating your Edge Config with the Vercel REST API](https://vercel.com/docs/edge-config/vercel-api#create-an-edge-config):

response

```
{
  "createdAt": 1234567890123,
  "updatedAt": 1234567890123,
  "slug": "your_edge_config_slug_here",
  "id": "your_edge_config_id_here",
  "digest": "abc123efg456hij789",
  "sizeInBytes": 2,
  "itemCount": 0,
  "ownerId": "your_id_here"
}
```

## [List all Edge Configs](https://vercel.com/docs/edge-config/vercel-api#list-all-edge-configs)[](https://vercel.com/docs/edge-config/vercel-api#list-all-edge-configs)

You can list all of your Edge Configs in a specific Hobby team or team with a `GET` request to the `edge-config` API endpoint. For example:

cURL fetch

request

```
curl "https://api.vercel.com/v1/edge-config?teamId=your_team_id_here" \
     -H 'Authorization: Bearer your_vercel_api_token_here'
```

fetch

```
try {
  const listItems = await fetch(
    'https://api.vercel.com/v1/edge-config?teamId=your_team_id_here',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${your_vercel_api_token_here}`,
      },
    },
  );
  const result = await listItems.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

The response should be similar to this:

response

```
[
  {
    "slug": "example_config_1",
    "itemCount": 0,
    "createdAt": 1234567890123,
    "updatedAt": 1234567890123,
    "id": "your_edge_config_id_here",
    "digest": "abc123efg456hij789",
    "sizeInBytes": 2,
    "ownerId": "your_id_here"
  },
  {
    "slug": "example_config_2",
    "itemCount": 0,
    "createdAt": 0123456789012,
    "updatedAt": 0123456789012,
    "id": "your_edge_config_id_here",
    "digest": "123efg456hij789abc",
    "sizeInBytes": 2,
    "ownerId": "your_id_here"
  }
]
```

## [Make requests to the Edge Config endpoint](https://vercel.com/docs/edge-config/vercel-api#make-requests-to-the-edge-config-endpoint)[](https://vercel.com/docs/edge-config/vercel-api#make-requests-to-the-edge-config-endpoint)

We recommend storing your [connection string](https://vercel.com/docs/edge-config/using-edge-config#using-a-connection-string) as an environment variable in your project and [using our SDK](https://vercel.com/docs/edge-config/edge-config-sdk) to read Edge Config data. However, you can make requests to the Edge Config endpoint to read your Edge Config's data as well.

To do so, create an [Edge Config read access token](https://vercel.com/docs/edge-config/using-edge-config#creating-a-read-access-token), which will be used to authenticate requests to the Edge Config endpoint.

The Edge Config endpoint used in the connection string is distinct from a Vercel REST API endpoint. Its root is `https://edge-config.vercel.com`. Making requests to the Edge Config endpoint allows you to take advantage of the optimizations that make Vercel's Edge Config reads hundreds of milliseconds faster than alternative options on the global network.

### [Request all items](https://vercel.com/docs/edge-config/vercel-api#request-all-items)[](https://vercel.com/docs/edge-config/vercel-api#request-all-items)

To read all of your Edge Config's items, send a `GET` request to the appropriate edge config endpoint by adding your Edge Config's ID and Edge Config read access token in the appropriate places in the below URL:

cURL fetch

cURL

`curl 'https://edge-config.vercel.com/your_edge_config_id_here/items?token=your_edge_config_read_access_token_here'`

fetch

```
try {
  const readAllEdgeConfigItems = await fetch(
    'https://edge-config.vercel.com/your_edge_config_id_here/items?token=your_edge_config_read_access_token_here',
  );
  const result = await readAllEdgeConfigItems.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

You can also send your Edge Config read access token in an Authorization header rather than as a query param.

cURL fetch

request

```
curl "https://edge-config.vercel.com/your_edge_config_id_here/items" \
     -H 'Authorization: Bearer your_edge_config_read_access_token_here'
```

fetch

```
try {
  const readAllWithAuth = await fetch(
    'https://edge-config.vercel.com/your_edge_config_id_here/items',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${your_edge_config_read_access_token_here}`,
      },
    },
  );
  const result = await readAllWithAuth.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

The response will be a JSON object containing all key-value pairs in the Edge Config. For example:

response

```
{
  "example_key_1": "example_value_1",
  "example_key_2": "example_value_2",
  "example_key_3": "example_value_3"
}
```

### [Request a single item](https://vercel.com/docs/edge-config/vercel-api#request-a-single-item)[](https://vercel.com/docs/edge-config/vercel-api#request-a-single-item)

To request a single item, you can use the `/item` path instead of `/items`, then add the key of the item you want as the final path as shown below:

cURL fetch

request

`curl "https://edge-config.vercel.com/your_edge_config_id_here/item/example_key_1?token=your_edge_config_read_access_token_here" \`

fetch

```
try {
  const readSingle = await fetch(
    'https://edge-config.vercel.com/your_edge_config_id_here/item/example_key_1?token=your_edge_config_read_access_token_here',
  );
  const result = await readSingle.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

You can also send your Edge Config read access token in an Authorization header rather than as a query param.

cURL fetch

request

```
curl -X 'https://edge-config.vercel.com/your_edge_config_id_here/item/example_key_1' \
     -H 'Authorization: Bearer your_edge_config_read_access_token_here'
```

fetch

```
try {
  const readSingleWithAuth = await fetch(
    'https://edge-config.vercel.com/your_edge_config_id_here/item/example_key_1',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${your_edge_config_read_access_token_here}`,
      },
    },
  );
  const result = await readSingleWithAuth.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

The response will be the raw value at the specified key. For example, if `example_key_1` has a string value of `"example_value"`, the response will be:

response

`"example_value"`

### [Request the digest](https://vercel.com/docs/edge-config/vercel-api#request-the-digest)[](https://vercel.com/docs/edge-config/vercel-api#request-the-digest)

When you create an Edge Config, a hash string called a digest is generated and attached to it. This digest is replaced with a new hash string whenever you update your config. You can check this digest to verify whether your Edge Config has properly updated, and confirm which version of the Config you're working with.

To fetch an Edge Config's digest, send a `GET` request to your edge config endpoint, as shown below:

cURL fetch

request

`curl "https://edge-config.vercel.com/your_edge_config_id_here/digest?teamId=your_team_id_here&token=your_edge_config_read_access_token_here"`

fetch

```
try {
  const readDigest = await fetch(
    'https://edge-config.vercel.com/your_edge_config_id_here/digest?teamId=your_team_id_here&token=your_edge_config_read_access_token_here',
  );
  const result = await readDigest.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

You can also send the Edge Config read access token in the `Authorization` header of your request using the `Bearer token` format:

cURL fetch

request

```
curl  -X 'GET' 'https://edge-config.vercel.com/your_edge_config_id_here/digest?teamId=your_team_id_here' \
      -H 'Authorization: Bearer your_edge_config_read_access_token_here
```

fetch

```
try {
  const readDigestWithAuth = await fetch(
    'https://edge-config.vercel.com/your_edge_config_id_here/digest?teamId=your_team_id_here',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${your_edge_config_read_access_token_here}`,
      },
    },
  );
  const result = await readDigestWithAuth.json();
  console.log(result);
} catch (error) {
  console.log(error);
}
```

## [Up Next](https://vercel.com/docs/edge-config/vercel-api#up-next)[](https://vercel.com/docs/edge-config/vercel-api#up-next)

#### [Limits Data size and request limits based on account plans](https://vercel.com/docs/edge-config/edge-config-limits)

* * *

[Previous Using Edge Config](https://vercel.com/docs/edge-config/using-edge-config)[Next Edge Configs & Dashboard](https://vercel.com/docs/edge-config/edge-config-dashboard)

Was this helpful?

supported.

Send

*   [Create an Edge Config](https://vercel.com/docs/edge-config/vercel-api#create-an-edge-config)
*   [Update your Edge Config items](https://vercel.com/docs/edge-config/vercel-api#update-your-edge-config-items)
*   [Failing Edge Config PATCH requests](https://vercel.com/docs/edge-config/vercel-api#failing-edge-config-patch-requests)
*   [Read all items](https://vercel.com/docs/edge-config/vercel-api#read-all-items)
*   [Read metadata](https://vercel.com/docs/edge-config/vercel-api#read-metadata)
*   [List all Edge Configs](https://vercel.com/docs/edge-config/vercel-api#list-all-edge-configs)
*   [Make requests to the Edge Config endpoint](https://vercel.com/docs/edge-config/vercel-api#make-requests-to-the-edge-config-endpoint)
*   [Request all items](https://vercel.com/docs/edge-config/vercel-api#request-all-items)
*   [Request a single item](https://vercel.com/docs/edge-config/vercel-api#request-a-single-item)
*   [Request the digest](https://vercel.com/docs/edge-config/vercel-api#request-the-digest)
*   [Up Next](https://vercel.com/docs/edge-config/vercel-api#up-next)

Copy as Markdown Install Vercel Plugin Give feedback Ask AI about this page

## Get Started

*   [Templates](https://vercel.com/templates)
*   [Supported frameworks](https://vercel.com/docs/frameworks)
*   [Marketplace](https://vercel.com/marketplace)
*   [Domains](https://vercel.com/domains)

## Build

*   [Next.js on Vercel](https://vercel.com/frameworks/nextjs)
*   [Turborepo](https://vercel.com/solutions/turborepo)
*   [v0](https://v0.app/)

## Scale

*   [Content delivery network](https://vercel.com/cdn)
*   [Fluid compute](https://vercel.com/fluid)
*   [CI/CD](https://vercel.com/products/previews)
*   [Observability](https://vercel.com/products/observability)
*   [AI Gateway New](https://vercel.com/ai-gateway)
*   [Vercel Agent New](https://vercel.com/agent)

## Secure

*   [Platform security](https://vercel.com/security)
*   [Web Application Firewall](https://vercel.com/security/web-application-firewall)
*   [Bot management](https://vercel.com/security/bot-management)
*   [BotID](https://vercel.com/botid)
*   [Sandbox New](https://vercel.com/sandbox)

## Resources

*   [Pricing](https://vercel.com/pricing)
*   [Customers](https://vercel.com/customers)
*   [Enterprise](https://vercel.com/enterprise)
*   [Articles](https://vercel.com/i)
*   [Startups](https://vercel.com/startups)
*   [Solution partners](https://vercel.com/partners/solution-partners)

## Learn

*   [Docs](https://vercel.com/docs)
*   [Blog](https://vercel.com/blog)
*   [Changelog](https://vercel.com/changelog)
*   [Knowledge Base](https://vercel.com/kb)
*   [Academy](https://vercel.com/academy)
*   [Community](https://community.vercel.com/)

## Frameworks

*   [Next.js](https://vercel.com/frameworks/nextjs)
*   [Nuxt](https://vercel.com/docs/frameworks/full-stack/nuxt)
*   [Svelte](https://vercel.com/docs/frameworks/full-stack/sveltekit)
*   [Nitro](https://vercel.com/docs/frameworks/backend/nitro)
*   [Turbo](https://vercel.com/solutions/turborepo)

## SDKs

*   [AI SDK](https://ai-sdk.dev/)
*   [Workflow SDK New](https://workflow-sdk.dev/)
*   [Flags SDK](https://flags-sdk.dev/)
*   [Chat SDK](https://chat-sdk.dev/)
*   [Streamdown AI New](https://streamdown.ai/)

## Use Cases

*   [Composable commerce](https://vercel.com/solutions/composable-commerce)
*   [Multi-tenant platforms](https://vercel.com/solutions/multi-tenant-saas)
*   [Web apps](https://vercel.com/solutions/web-apps)
*   [Marketing sites](https://vercel.com/solutions/marketing-sites)
*   [Platform engineers](https://vercel.com/solutions/platform-engineering)
*   [Design engineers](https://vercel.com/solutions/design-engineering)

## Company

*   [About](https://vercel.com/about)
*   [Careers](https://vercel.com/careers)
*   [Help](https://vercel.com/help)
*   [Press](https://vercel.com/press)
*   [Legal](https://vercel.com/legal)
*   [Privacy Policy](https://vercel.com/legal/privacy-policy)

## Community

*   [Open source program](https://vercel.com/open-source-program)
*   [Events](https://vercel.com/events)
*   [Shipped on Vercel](https://vercel.com/shipped)
*   [GitHub](https://github.com/vercel)
*   [LinkedIn](https://linkedin.com/company/vercel)
*   [X](https://x.com/vercel)
*   [YouTube](https://youtube.com/@VercelHQ)

[](https://vercel.com/home)

[Loading status…](https://vercel-status.com/)Select a display theme:system light dark
