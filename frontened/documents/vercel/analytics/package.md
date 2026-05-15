Menu

# Advanced Web Analytics Config with @vercel/analytics

Last updated March 11, 2026

## [Getting started](#getting-started)

To get started with analytics, follow our [Quickstart](/docs/analytics/quickstart) guide which will walk you through the process of setting up analytics for your project.

## [What's new in version 2.x](#what's-new-in-version-2.x)

* `@vercel/analytics` is now distributed under the MIT license.
* It can use Vercel's [Resilient Intake](/docs/analytics/privacy-policy#resilient-intake) for script loading and data collection.
* For Nuxt applications: install with the new module system.

## [`mode`](#mode)

Override the automatic environment detection.

This option allows you to force a specific environment for the package.
If not defined, it will use `auto` which tries to set the `development` or `production` mode based on available environment variables such as `NODE_ENV`.

If your used framework does not expose these environment variables, the automatic detection won't work correctly.
In this case, you're able to provide the correct `mode` manually or by other helpers that your framework exposes.

If you're using the `<Analytics />` component, you can pass the `mode` prop to force a specific environment:

pages/\_app.tsx

```
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics mode="production" />
    </>
  );
}

export default MyApp;
```

pages/\_app.jsx

```
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics mode="production" />
    </>
  );
}

export default MyApp;
```

app/layout.tsx

```
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
```

app/layout.jsx

```
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
```

App.tsx

```
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics mode="production" />
    </div>
  );
}
```

App.jsx

```
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics mode="production" />
    </div>
  );
}
```

app/root.tsx

```
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics mode="production" />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

app/root.jsx

```
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics mode="production" />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

src/layouts/Base.astro

```
---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics mode="production"/>
	</head>
	<body>
		<slot />
  </body>
</html>
```

src/layouts/Base.astro

```
---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics mode="production"/>
	</head>
	<body>
		<slot />
  </body>
</html>
```

app.vue

```
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics mode="production"/>
  <NuxtPage />
</template>
```

app.vue

```
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics mode="production"/>
  <NuxtPage />
</template>
```

src/App.vue

```
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics mode="production" />
  <!-- your content -->
</template>
```

src/App.vue

```
<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics mode="production" />
  <!-- your content -->
</template>
```

src/routes/+layout.ts

```
import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });
```

src/routes/+layout.js

```
import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });
```

main.ts

```
import { inject } from '@vercel/analytics';
// import some helper that is exposed by your current framework to determine the right mode manually
import { dev } from '$app/environment';

inject({
  mode: dev ? 'development' : 'production',
});
```

main.js

```
import { inject } from '@vercel/analytics';
// import some helper that is exposed by your current framework to determine the right mode manually
import { dev } from '$app/environment';

inject({
  mode: dev ? 'development' : 'production',
});
```

## [`debug`](#debug)

You'll see all analytics events in the browser's console with the debug mode.
This option is automatically enabled if the `NODE_ENV` environment
variable is available and either `development` or `test`.

You can manually disable it to prevent debug messages in your browsers console.

To disable the debug mode for server-side events, you need to set the
`VERCEL_WEB_ANALYTICS_DISABLE_LOGS` environment variable to `true`.

pages/\_app.tsx

```
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics debug />
    </>
  );
}

export default MyApp;
```

pages/\_app.jsx

```
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics debug />
    </>
  );
}

export default MyApp;
```

app/layout.tsx

```
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics debug />
      </body>
    </html>
  );
}
```

app/layout.jsx

```
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics debug />
      </body>
    </html>
  );
}
```

App.tsx

```
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics debug={true} />
    </div>
  );
}
```

App.jsx

```
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics debug={true} />
    </div>
  );
}
```

app/root.tsx

```
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics debug={true} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

app/root.jsx

```
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics debug={true} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

src/layouts/Base.astro

```
---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics debug="true"/>
	</head>
	<body>
		<slot />
  </body>
</html>
```

src/layouts/Base.astro

```
---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics debug={true}/>
	</head>
	<body>
		<slot />
  </body>
</html>
```

app.vue

```
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics debug="true"/>
  <NuxtPage />
</template>
```

app.vue

```
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics debug="true"/>
  <NuxtPage />
</template>
```

src/App.vue

```
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics debug="true" />
  <!-- your content -->
</template>
```

src/App.vue

```
<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics debug="true" />
  <!-- your content -->
</template>
```

src/routes/+layout.ts

```
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ debug: true });
```

src/routes/+layout.js

```
import { dev } from '$app/environment';

injectAnalytics({ debug: true });
```

main.ts

```
import { inject } from '@vercel/analytics';

inject({
  debug: true,
});
```

main.js

```
import { inject } from '@vercel/analytics';

inject({
  debug: true,
});
```

index.html

```
<script defer src="https://cdn.vercel-insights.com/v1/script.debug.js"></script>
```

index.html

```
<script defer src="https://cdn.vercel-insights.com/v1/script.debug.js"></script>
```

## [`beforeSend`](#beforesend)

With the `beforeSend` option, you can modify the event data before it's sent to Vercel.
Below, you will see an example that ignores all events that have a `/private` inside the URL.

Returning `null` will ignore the event and no data will be sent.
You can also modify the URL and check our docs about [redacting sensitive data](/docs/analytics/redacting-sensitive-data).

pages/\_app.tsx

```
import type { AppProps } from 'next/app';
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event: BeforeSendEvent) => {
          if (event.url.includes('/private')) {
            return null;
          }
          return event;
        }}
      />
      ;
    </>
  );
}

export default MyApp;
```

pages/\_app.jsx

```
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          if (event.url.includes('/private')) {
            return null;
          }
          return event;
        }}
      />
      ;
    </>
  );
}

export default MyApp;
```

app/layout.tsx

```
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics
          beforeSend={(event: BeforeSendEvent) => {
            if (event.url.includes('/private')) {
              return null;
            }
            return event;
          }}
        />
      </body>
    </html>
  );
}
```

app/layout.jsx

```
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics
          beforeSend={(event) => {
            if (event.url.includes('/private')) {
              return null;
            }
            return event;
          }}
        />
      </body>
    </html>
  );
}
```

App.tsx

```
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics
        beforeSend={(event: BeforeSendEvent) => {
          if (event.url.includes('/private')) {
            return null;
          }
          return event;
        }}
      />
    </div>
  );
}
```

App.jsx

```
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics
        beforeSend={(event) => {
          if (event.url.includes('/private')) {
            return null;
          }
          return event;
        }}
      />
    </div>
  );
}
```

app/root.tsx

```
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics
          beforeSend={(event: BeforeSendEvent) => {
            if (event.url.includes('/private')) {
              return null;
            }
            return event;
          }}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

app/root.jsx

```
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics
          beforeSend={(event: BeforeSendEvent) => {
            if (event.url.includes('/private')) {
              return null;
            }
            return event;
          }}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

src/layouts/Base.astro

```
---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<script is:inline>
  function webAnalyticsBeforeSend(event){
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  }
</script>

<html lang="en">
	<head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics />
	</head>
	<body>
		<slot />
  </body>
</html>
```

src/layouts/Base.astro

```
---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<script is:inline>
  function webAnalyticsBeforeSend(event){
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  }
</script>

<html lang="en">
	<head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics />
	</head>
	<body>
		<slot />
  </body>
</html>
```

app.vue

```
<script setup lang="ts">
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/nuxt';

const beforeSend = (event: BeforeSendEvent) => {
  if (event.url.includes('/private')) {
    return null;
  }
  return event
};
</script>

<template>
  <Analytics :before-send="beforeSend"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

app.vue

```
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';

const beforeSend = (event) => {
  if (event.url.includes('/private')) {
    return null;
  }
  return event
};
</script>

<template>
  <Analytics :before-send="beforeSend"/>
  <NuxtPage />
</template>
```

src/App.vue

```
<script setup lang="ts">
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/nuxt';

const beforeSend = (event: BeforeSendEvent) => {
  if (event.url.includes('/private')) {
    return null;
  }
  return event
};
</script>

<template>
  <Analytics :before-send="beforeSend"/>
  <!-- your content -->
</template>
```

src/App.vue

```
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';

const beforeSend = (event) => {
  if (event.url.includes('/private')) {
    return null;
  }
  return event
};
</script>

<template>
  <Analytics :before-send="beforeSend"/>
  <!-- your content -->
</template>
```

src/routes/+layout.ts

```
import {
  injectAnalytics,
  type BeforeSendEvent,
} from '@vercel/analytics/sveltekit';

injectAnalytics({
  beforeSend(event: BeforeSendEvent) {
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  },
});
```

src/routes/+layout.js

```
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({
  beforeSend(event) {
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  },
});
```

main.ts

```
import { inject, type BeforeSendEvent } from '@vercel/analytics';

inject({
  beforeSend: (event: BeforeSendEvent) => {
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  },
});
```

main.js

```
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  },
});
```

index.html

```
<script>
  window.va = function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  window.va('beforeSend', (event) => {
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  });
</script>
```

index.html

```
<script>
  window.va = function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  window.va('beforeSend', (event) => {
    if (event.url.includes('/private')) {
      return null;
    }
    return event;
  });
</script>
```

## [`eventEndpoint`](#eventendpoint)

Use the `eventEndpoint` option to report the collected custom events to a different URL than the default.

This is useful when deploying several projects under the same domain, as it allows you to keep each application isolated.

For example, when `yourdomain.com` is managed outside of Vercel:

1. "alice-app" is deployed under `yourdomain.com/alice/*` and the vercel alias is `alice-app.vercel.sh`
2. "bob-app" is deployed under `yourdomain.com/bob/*` and the vercel alias is `bob-app.vercel.sh`
3. You route `yourdomain.com/<unique-path>/*` to `alice-app.vercel.sh`

Both applications send their analytics to `alice-app.vercel.sh`. To restore the isolation, "bob-app" should use:

```
<Analytics eventEndpoint="https://bob-app.vercel.sh/<unique-path>/event" />
```

## [`viewEndpoint`](#viewendpoint)

Use the `viewEndpoint` option to report the collected page views to a different URL than the default.

```
<Analytics viewEndpoint="https://bob-app.vercel.sh/<unique-path>/view" />
```

## [`scriptSrc`](#scriptsrc)

The `scriptSrc` option allows you to load the Web Analytics script from a different URL than the default one.

```
<Analytics scriptSrc="https://bob-app.vercel.sh/<unique-path>/script.js" />
```

## [`endpoint` (deprecated in 2.x)](#endpoint-deprecated-in-2.x)

The `endpoint` option still works for backward compatibility. In version 2, use `eventEndpoint` and `viewEndpoint` instead.

## [Dynamic configuration](#dynamic-configuration)

In version 2, Vercel passes default client options at build time with a JSON string under an `analytics` key:

```
{
  "analytics": {
    "scriptSrc": "/<unique-path>/script.js",
    "eventEndpoint": "/<unique-path>/event",
    "viewEndpoint": "/<unique-path>/view"
  }
}
```

Vercel configures this for you so you don't need to pass this dynamic configuration.

To change configured values, you can:

* Pass individual properties (for example, `scriptSrc`, `eventEndpoint` or `viewEndpoint`) to your React or Vue `<Analytics />` component.
* Pass individual properties to the `injectAnalytics()` function.
* Provide your own value for the `VERCEL_OBSERVABILITY_CLIENT_CONFIG` build configuration variable.

---

[Previous

Privacy](/docs/analytics/privacy-policy)[Next

Pricing](/docs/analytics/limits-and-pricing)

Was this helpful?
