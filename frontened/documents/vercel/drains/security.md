Menu

# Drains Security

Last updated February 27, 2026

All Drains support transport-level encryption using HTTPS protocol.

When your server starts receiving payloads, a third party could send data to your server if it knows the URL. Therefore, you should verify the request is coming from Vercel.

## [Secure Drains](#secure-drains)

Vercel sends an `x-vercel-signature` header with each drain, which is a hash of the payload body created using your Drain signature secret. You can find or update this secret by clicking Edit in the Drains list.

To verify the request is coming from Vercel, you can generate the hash and compare it with the header value as shown below:

server.js

```
import crypto from 'crypto';

export async function POST(request) {
  // Store the signature secret in environment variables
  const signatureSecret = '<Drain signature secret>';

  const rawBody = await request.text();
  const rawBodyBuffer = Buffer.from(rawBody, 'utf-8');
  const bodySignature = sha1(rawBodyBuffer, signatureSecret);

  if (bodySignature !== request.headers.get('x-vercel-signature')) {
    return Response.json(
      {
        code: 'invalid_signature',
        error: "signature didn't match",
      },
      { status: 403 },
    );
  }

  console.log(rawBody);

  return Response.json({ success: true });
}

function sha1(data, secret) {
  return crypto.createHmac('sha1', secret).update(data).digest('hex');
}
```

server.ts

```
import crypto from 'crypto';

export async function POST(request: Request) {
  // Store the signature secret in environment variables
  const signatureSecret = '<Drain signature secret>';

  const rawBody = await request.text();
  const rawBodyBuffer = Buffer.from(rawBody, 'utf-8');
  const bodySignature = sha1(rawBodyBuffer, signatureSecret);

  if (bodySignature !== request.headers.get('x-vercel-signature')) {
    return Response.json(
      {
        code: 'invalid_signature',
        error: "signature didn't match",
      },
      { status: 403 },
    );
  }

  console.log(rawBody);

  return Response.json({ success: true });
}

function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex');
}
```

server.js

```
import crypto from 'crypto';
import getRawBody from 'raw-body';

export default async function handler(
  request,
  response,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // Store the signature secret in environment variables
  const signatureSecret = '<Drain signature secret>';

  const rawBody = await getRawBody(request);
  const bodySignature = sha1(rawBody, signatureSecret);

  if (bodySignature !== request.headers['x-vercel-signature']) {
    return response.status(403).json({
      code: 'invalid_signature',
      error: "signature didn't match",
    });
  }

  console.log(rawBody);

  response.status(200).json({ success: true });
}

function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex');
}

export const config = {
  api: {
    bodyParser: false,
  },
};
```

server.ts

```
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import getRawBody from 'raw-body';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // Store the signature secret in environment variables
  const signatureSecret = '<Drain signature secret>';

  const rawBody = await getRawBody(request);
  const bodySignature = sha1(rawBody, signatureSecret);

  if (bodySignature !== request.headers['x-vercel-signature']) {
    return response.status(403).json({
      code: 'invalid_signature',
      error: "signature didn't match",
    });
  }

  console.log(rawBody);

  response.status(200).json({ success: true });
}

async function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex');
}

export const config = {
  api: {
    bodyParser: false,
  },
};
```

server.js

```
import crypto from 'crypto';
import getRawBody from 'raw-body';

export default async function handler(
  request,
  response,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // Store the signature secret in environment variables
  const signatureSecret = '<Drain signature secret>';

  const rawBody = await getRawBody(request);
  const bodySignature = sha1(rawBody, signatureSecret);

  if (bodySignature !== request.headers['x-vercel-signature']) {
    return response.status(403).json({
      code: 'invalid_signature',
      error: "signature didn't match",
    });
  }

  console.log(rawBody);

  response.status(200).json({ success: true });
}

function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex');
}

export const config = {
  api: {
    bodyParser: false,
  },
};
```

server.ts

```
import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';
import getRawBody from 'raw-body';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // Store the signature secret in environment variables
  const signatureSecret = '<Drain signature secret>';

  const rawBody = await getRawBody(request);
  const bodySignature = sha1(rawBody, signatureSecret);

  if (bodySignature !== request.headers['x-vercel-signature']) {
    return response.status(403).json({
      code: 'invalid_signature',
      error: "signature didn't match",
    });
  }

  console.log(rawBody);

  response.status(200).json({ success: true });
}

function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex');
}

export const config = {
  api: {
    bodyParser: false,
  },
};
```

For enhanced security against timing attacks, use constant-time comparison when verifying the `x-vercel-signature` header. See [x-vercel-signature in Request Headers](/docs/headers/request-headers#x-vercel-signature).

For additional authentication or identification purposes, you can also add custom headers when [configuring the Drain destination](/docs/drains/using-drains#custom-headers-optional)

## [IP Address Visibility](#ip-address-visibility)

Managing IP address visibility is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Those with the [owner, admin](/docs/rbac/access-roles#owner, admin-role) role can access this feature

Drains can include public IP addresses in the data, which may be considered personal information under certain data protection laws. To hide IP addresses in your drains:

1. Go to the Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and ensure your team is selected in the team switcher
2. Open Settings in the sidebar and navigate to [Security & Privacy](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fsecurity&title=Go+to+Security+settings)
3. Under IP Address Visibility, toggle the switch off so the text reads IP addresses are hidden in your Drains

This setting is applied team-wide across all projects and drains.

## [More resources](#more-resources)

For more information on Drains security and how to use them, check out the following resources:

* [Drains overview](/docs/drains)
* [Configure Drains](/docs/drains/using-drains)
* [Log Drains reference](/docs/drains/reference/logs)

---

[Previous

Using Drains](/docs/drains/using-drains)[Next

Web Analytics](/docs/analytics)

Was this helpful?
