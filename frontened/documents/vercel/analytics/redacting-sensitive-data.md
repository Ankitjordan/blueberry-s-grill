Menu

# Redacting Sensitive Data from Web Analytics Events

Last updated March 4, 2025

Sometimes, URLs and query parameters may contain sensitive data. This could be a user ID, a token, an order ID, or any other data that you don't want to be sent to Vercel. In this case, you may not want them to be tracked automatically.

To prevent sensitive data from being sent to Vercel, you can pass in the `beforeSend` function that modifies the event before it is sent. To learn more about the `beforeSend` function and how it can be used with other frameworks, see the [@vercel/analytics](/docs/analytics/package) package documentation.

## [Ignoring events or routes](#ignoring-events-or-routes)

To ignore an event or route, you can return `null` from the `beforeSend` function. Returning the event or a modified version of it will track it normally.

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

## [Removing query parameters](#removing-query-parameters)

To apply changes to the event, you can parse the URL and adjust it to your needs before you return the modified event.

In this example the query parameter `secret` is removed on all events.

pages/\_app.jsx

```
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          const url = new URL(event.url);
          url.searchParams.delete('secret');
          return {
            ...event,
            url: url.toString(),
          };
        }}
      />
    </>
  );
}

export default MyApp;
```

pages/\_app.tsx

```
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          const url = new URL(event.url);
          url.searchParams.delete('secret');
          return {
            ...event,
            url: url.toString(),
          };
        }}
      />
    </>
  );
}

export default MyApp;
```

app/layout.jsx

```
'use client';
import { Analytics } from '@vercel/analytics/react';

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
            const url = new URL(event.url);
            url.searchParams.delete('secret');
            return {
              ...event,
              url: url.toString(),
            };
          }}
        />
      </body>
    </html>
  );
}
```

app/layout.tsx

```
'use client';
import { Analytics } from '@vercel/analytics/react';

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
          beforeSend={(event) => {
            const url = new URL(event.url);
            url.searchParams.delete('secret');
            return {
              ...event,
              url: url.toString(),
            };
          }}
        />
      </body>
    </html>
  );
}
```

main.js

```
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    const url = new URL(event.url);
    url.searchParams.delete('secret');
    return {
      ...event,
      url: url.toString(),
    };
  },
});
```

main.ts

```
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    const url = new URL(event.url);
    url.searchParams.delete('secret');
    return {
      ...event,
      url: url.toString(),
    };
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
    const url = new URL(event.url);
    url.searchParams.delete('secret');
    return {
      ...event,
      url: url.toString(),
    }
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
    const url = new URL(event.url);
    url.searchParams.delete('secret');
    return {
      ...event,
      url: url.toString(),
    }
  });
</script>
```

## [Allowing users to opt-out of tracking](#allowing-users-to-opt-out-of-tracking)

You can also use `beforeSend` to allow users to opt-out of all tracking by setting a `localStorage` value (for example `va-disable`).

pages/\_app.jsx

```
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          if (localStorage.getItem('va-disable')) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}

export default MyApp;
```

pages/\_app.tsx

```
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          if (localStorage.getItem('va-disable')) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}

export default MyApp;
```

app/layout.jsx

```
'use client';
import { Analytics } from '@vercel/analytics/react';

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
            if (localStorage.getItem('va-disable')) {
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

app/layout.tsx

```
'use client';
import { Analytics } from '@vercel/analytics/react';

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
          beforeSend={(event) => {
            if (localStorage.getItem('va-disable')) {
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

main.js

```
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    if (localStorage.getItem('va-disable')) {
      return null;
    }
    return event;
  },
});
```

main.ts

```
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    if (localStorage.getItem('va-disable')) {
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
    if (localStorage.getItem('va-disable')) {
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
    if (localStorage.getItem('va-disable')) {
      return null;
    }
    return event;
  });
</script>
```

---

[Previous

Custom Events](/docs/analytics/custom-events)[Next

Privacy](/docs/analytics/privacy-policy)

Was this helpful?
