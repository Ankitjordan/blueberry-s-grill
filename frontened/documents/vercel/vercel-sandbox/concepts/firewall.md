Menu

# Sandbox firewall

Last updated February 23, 2026

Network firewall allows users to restrict egress traffic from their sandbox. It is a critical tool to prevent data exfiltration.

## [When to use network firewall](#when-to-use-network-firewall)

* Protect user data: Allow untrusted code to touch user-data without a risk of it getting exfiltrated.
* Avoid malware injection: Constrain package sources, or S3 buckets to access.
* Dynamic policies for multi-step work: Start with Internet access, get required data, lock access and start untrusted process.
* Protect your credentials: Untrusted code running within the sandbox cannot be trusted with credentials, but needs to authenticate to external services (e.g. AI Gateway).
* Proxying requests: Forward requests to a proxy you control, for logging, debugging, or transformation purposes.

## [Network policies](#network-policies)

Sandboxes can use three distinct modes, which can be updated at runtime, without restarting the process.

### [`allow-all`](#allow-all)

Default policy. This gives the sandbox unrestricted access to the public Internet.

Have the ability to install software packages, download dependencies and pull any data from external sources with the enhanced security model of sandboxes.

### [`deny-all`](#deny-all)

Most restrictive policy. Denies all outbound network access, including DNS.

This is useful to reduce the chance of data exfiltration when running untrusted code or an agent on private data.

### [User-defined](#user-defined)

Most specific policy, denying all traffic by default, while allowing users to get fine-grain control on their sandbox setup. Users can define:

* a list of domains to allow traffic to. Domain-based policies are easy to use and maintain fine-grain access control for services like S3 (per bucket) or behind virtual hosting (as Vercel). Wildcard support (`*`) allows easier management for complex websites. Each domain can have specific rules attached to it, such as [credentials brokering](/docs/vercel-sandbox/concepts/firewall#credentials-brokering) or [requests proxying](/docs/vercel-sandbox/concepts/firewall#requests-proxying).
* a list of address ranges to allow traffic to. Those ranges will not enforce per-domain rules, supporting non-encrypted traffic. This is recommended when using secure-compute to connect to your private network securely.
* a list of address ranges to deny traffic to. Those range will take precedence to block traffic. This is useful when using secure-compute, allowing Internet access to be granted while blocking internal network.

## [Supported protocols](#supported-protocols)

Domain-based rules identify traffic by the hostname negotiated during the TLS handshake. The following protocols are supported when filtering by domain.

### [HTTP and HTTPS](#http-and-https)

HTTPS traffic is matched using the SNI (server name indication) extension sent at the start of the TLS handshake. Plain-text HTTP cannot be filtered by domain, and must be allowed by [IP range](#user-defined) instead.

### [Postgres](#postgres)

Postgres connections to hosted databases are supported when the database host is added to a sandbox's allowed domains. Because the Postgres wire protocol negotiates TLS after the TCP connection is established, the firewall handles this handshake explicitly and applies the domain policy before forwarding the connection.

The following limitations apply when allowing Postgres traffic:

* TLS is required. Clients must connect with `sslmode=require` or stricter. Plain-text Postgres cannot be filtered by domain, and must be allowed by [IP range](#user-defined) instead.
* GSSAPI-encrypted connections are not supported. Clients using `gssencmode=prefer` will fall back to TLS automatically. `gssencmode=require` will not connect.
* `sslmode=prefer` will not downgrade. If the database does not support TLS, the connection will fail rather than fall back to plain-text.
* [Credentials brokering](#credentials-brokering) and other request transformations are not supported on Postgres connections. Transformation rules on a domain are ignored when the domain is reached over Postgres.

## [Credentials brokering](#credentials-brokering)

Credentials brokering is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Commands running in the sandbox often require authentication with external services, for instance code repositories or AI services. Providing API keys to those commands would risk abuse or exfiltration.
On the other hand, allowing access to a domain can allow data exfiltration if not restricting the permissions or sessions attached to it.

Credentials brokering allows the injection of credentials on egressing traffic, while ensuring those secrets never enter the sandbox scope, preventing exfiltration. Each rule can define a set of [matchers](/docs/vercel-sandbox/concepts/firewall#matchers) on the path, method, query parameters, and headers. When defined, only requests matching the specified dimensions will be transformed.

```
import { Sandbox } from '@vercel/sandbox';

// Sandbox has access to everything, with credential brokering for two specific domains.
const sandbox = await Sandbox.create({
  networkPolicy: {
    allow: {
      "ai-gateway.vercel.sh": [{
        transform: [{ headers: { "Authorization": `Bearer ${process.env.AI_GATEWAY_TOKEN}` } }],
      }],
      "*.github.com": [{
        transform: [{ headers: { "Authorization": `Bearer ${process.env.GITHUB_TOKEN}` } }],
      }],
      // Allow traffic to all other domains. If unset only defined ones are reachable.
      "*": []
    }
  }
});

// Sandbox no longer has Internet or secure-compute access.
// Credential brokering is deactivated.
await sandbox.updateNetworkPolicy('deny-all');

// Reallow traffic only to ai-gateway, and use the same key.
await sandbox.updateNetworkPolicy({
  allow: {
    "ai-gateway.vercel.sh": [{
      transform: [{ headers: { "Authorization": `Bearer ${process.env.AI_GATEWAY_TOKEN}` } }],
    }],
  }
});
```

## [Requests proxying](#requests-proxying)

Requests proxying is available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Requests proxying allows forwarding traffic toward specific domains to a proxy you control, for logging, debugging, or transformation purposes. This is useful when you want to allow access to a domain while ensuring control over the requests and responses.

The `forwardURL` field must be a URL pointing to an HTTP/1.1-capable server and must not include a query string or fragment. Each rule can define a set of [matchers](/docs/vercel-sandbox/concepts/firewall#matchers) on the path, method, query parameters, and headers. When defined, only requests matching the specified dimensions will be forwarded.

The `forwardURL` receives the original request as-is, with the addition of the following headers:

* `vercel-forwarded-host`: The original request's SNI
* `vercel-forwarded-scheme`: The original request's scheme
* `vercel-forwarded-port`: The original request's port
* `vercel-sandbox-oidc-token`: A Vercel-issued OIDC token that the proxy can use to authenticate the request.

  The OIDC token's audience (`aud`) is the configured `forwardURL`. The proxy should verify the token signature, issuer, expiry, and that `aud` exactly matches its expected `forwardURL`; this prevents accepting tokens minted for another forwarding endpoint. The token contains the following additional claims about the sandbox that the request originated from:

  + `team_id`: The [ID of the Vercel team](https://vercel.com/docs/accounts#find-your-team-id) the sandbox belongs to.
  + `project_id`: The [ID of the Vercel project](https://vercel.com/docs/project-configuration/general-settings#project-id) the sandbox belongs to.
  + `sandbox_id`: The sandbox's ID.
  + `sandbox_name`: The sandbox's name, when using [persistent sandboxes](/docs/vercel-sandbox/concepts/persistent-sandboxes).

Forwarding rules are currently available in beta using `@vercel/sandbox@beta`.

```
import { Sandbox } from '@vercel/sandbox';

// Sandbox has access to everything, with a proxy forwarding for *.github.com.
const sandbox = await Sandbox.create({
  networkPolicy: {
    allow: {
      "*.github.com": [{
        forwardURL: "https://my-proxy.vercel.app/github"
      }],
      // Allow traffic to all other domains. If unset only defined ones are reachable.
      "*": []
    }
  }
});
```

## [Matchers](#matchers)

Matchers are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Matchers allow transformation or forwarding rules to be applied to requests that satisfy every specified dimension. When multiple injection rules target the same domain, they are evaluated in order and the first match wins; a rule without `match` matches any request and shadows later rules for the same domain.

Matchers choose which requests get transformed or forwarded for a given allowed domain. When you set `match`, every dimension you include must match the request for the rule to apply. When multiple rules target the same domain, they are evaluated in order and the first match wins; a rule without `match` matches any request and shadows later rules for the same domain.

The following dimensions are supported:

* `path`: Matches on the request path. Comparison is case-sensitive.
* `method`: HTTP methods to match. Any single match succeeds (OR semantics).
* `queryString`: Query-string entry matchers. Multiple entries are ANDed. Query parameter names and values are both compared case-sensitively (RFC 3986). When a request has multiple values for the same key, any matching value satisfies the matcher.
* `headers`: Header matchers. Multiple entries are ANDed. Header names are compared case-insensitively (RFC 9110); header values are compared case-sensitively. When a request has multiple values for the same header, any matching value satisfies the matcher.

Matcher supports exact, prefix, or regex matching:

* `exact`: Match the value exactly. Case-sensitive for paths, header values, and methods; case-insensitive for domains and header keys.
* `startsWith`: Match values that start with the given prefix.
* `regex`: Match values against an RE2 regular expression. Anchor with ^ or $ as needed.

Matchers are currently available in beta using the `@vercel/sandbox@beta` SDK.

```
import { Sandbox } from '@vercel/sandbox';

const sandbox = await Sandbox.create({
  networkPolicy: {
    allow: {
      "ai-gateway.vercel.sh": [{
        match: {
          path: { exact: "/v1/chat/completions" },
          method: ["POST"],
          queryString: [{ key: { exact: "model" }, value: { startsWith: "gpt-" } }],
        },
        transform: [{ headers: { "Authorization": `Bearer ${process.env.AI_GATEWAY_TOKEN}` } }],
      }],
      "*.github.com": [{
        match: {
          headers: [{
            key: { exact: "Content-Type" },
            value: { startsWith: "application/" }
          }],
          method: ["GET", "POST"]
        },
        forwardURL: "https://my-proxy.vercel.app/github"
      }]
    }
  }
});
```

## [TLS termination](#tls-termination)

In order to apply transformation and forwarding rules within requests, the firewall needs to terminate TLS connections. Only connections targeting domains with defined transformation rules are terminated in the proxy.

A unique, per-sandbox CA is added to the system certificates. Standard environment variables are configured automatically to ensure compatibility with most clients.

## [Sandbox creation](#sandbox-creation)

Policies can be defined on sandboxes on creation, ensuring they will never run without them.

```
# Sandbox has full Internet and secure-compute access (default).
sandbox create --network-policy allow-all

# Sandbox has no Internet or secure-compute access.
sandbox create --network-policy deny-all

# Sandbox only gets access to listed websites.
sandbox create --allowed-domain "*.google.com" --allowed-domain ai-gateway.vercel.sh
```

```
import { Sandbox } from '@vercel/sandbox';

// Sandbox has full Internet and secure-compute access (default).
const sandbox = await Sandbox.create({
  networkPolicy: 'allow-all'
});

// Sandbox has no Internet or secure-compute access.
const sandbox = await Sandbox.create({
  networkPolicy: 'deny-all'
});

// Sandbox only gets access to listed websites.
const sandbox = await Sandbox.create({
  networkPolicy: {
    allow: ["*.google.com", "ai-gateway.vercel.sh"]
  }
});
```

## [Live updates](#live-updates)

Policies can be updated on running sandboxes, allowing for incremental restrictions.

For instance start by installing needed packages, downloading data, and then run untrusted code on it.
Without live updates the entire run would have to get Internet access (creating exfiltration risk), or multiple steps and sandboxes would be needed.

```
sandbox create --network-policy allow-all

# Install packages
sandbox exec sb_12345678 npm install
# Download data
sandbox exec sb_12345678 aws s3 cp s3://my-bucket/dataset .

# Lockdown Internet access
sandbox config network-policy --mode deny-all

# Run untrusted workload, without exfiltration risk
sandbox exec sb_12345678 ./agent
```

```
import { Sandbox } from '@vercel/sandbox';

// Start with Internet access (default)
const sandbox = await Sandbox.create();

// Install dependencies, download data, configure environment, etc.
await sandbox.runCommand('npm', ['install']);
await sandbox.runCommand('aws', ['s3', 'cp', 's3://my-bucket/dataset', '.']);

// Lockdown Internet access
await sandbox.updateNetworkPolicy('deny-all')

// Run untrusted workload, without exfiltration risk
await sandbox.runCommand('./agent', []);
```

---

[Previous

Snapshots](/docs/vercel-sandbox/concepts/snapshots)[Next

Persistent Sandboxes](/docs/vercel-sandbox/concepts/persistent-sandboxes)

Was this helpful?
