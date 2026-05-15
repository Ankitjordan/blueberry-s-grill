Menu

# Tracking custom events

Last updated March 11, 2026

Custom Events are available on [Enterprise](/docs/plans/enterprise) and [Pro](/docs/plans/pro) plans

Vercel Web Analytics allows you to track custom events in your application using the `track()` function.
This is useful for tracking user interactions, such as button clicks, form submissions, or purchases.

Make sure you have `@vercel/analytics` version 1.1.0 or later
[installed](/docs/analytics/quickstart#add-@vercel/analytics-to-your-project).

## [Tracking a client-side event](#tracking-a-client-side-event)

To track an event:

1. Make sure you have `@vercel/analytics` version 1.1.0 or later [installed](/docs/analytics/quickstart#add-@vercel/analytics-to-your-project).
2. Import `{ track }` from `@vercel/analytics`.
3. In most cases you will want to track an event when a user performs an action, such as clicking a button or submitting a form, so you should use this on the button handler.
4. Call `track` and pass in a string representing the event name as the first argument. You can also pass [custom data](#tracking-an-event-with-custom-data) as the second argument:

   component.ts

   ```
   import { track } from '@vercel/analytics';

   // Call this function when a user clicks a button or performs an action you want to track
   track('Signup');
   ```

This will track an event named **Signup**.

For example, if you have a button that says Sign Up, you can track an event when the user clicks the button:

components/button.tsx

```
import { track } from '@vercel/analytics';

function SignupButton() {
  return (
    <button
      onClick={() => {
        track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
```

components/button.jsx

```
import { track } from '@vercel/analytics';

function SignupButton() {
  return (
    <button
      onClick={() => {
        track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
```

components/button.tsx

```
import { track } from '@vercel/analytics';

function SignupButton() {
  return (
    <button
      onClick={() => {
        track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
```

components/button.jsx

```
import { track } from '@vercel/analytics';

function SignupButton() {
  return (
    <button
      onClick={() => {
        track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
```

components/button.tsx

```
import { track } from '@vercel/analytics';

function SignupButton() {
  return (
    <button
      onClick={() => {
        track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
```

components/button.jsx

```
import { track } from '@vercel/analytics';

function SignupButton() {
  return (
    <button
      onClick={() => {
        track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  );
}
```

App.svelte

```
<script>
  function handleClick() {
    track('Signup');
    // ... other logic
  }
</script>

<button on:click|once="{handleClick}">Signup</button>
```

App.svelte

```
<script>
  function handleClick() {
    track('Signup');
    // ... other logic
  }
</script>

<button on:click|once="{handleClick}">Signup</button>
```

App.vue

```
<script>
  export default {
    methods: {
      signup(event) {
        track('Signup');
        // ... other logic
      },
    },
  };
</script>

<template>
  <button @click="signup">Sign up</button>
</template>
```

App.vue

```
<script>
  export default {
    methods: {
      signup(event) {
        track('Signup');
        // ... other logic
      },
    },
  };
</script>

<template>
  <button @click="signup">Sign up</button>
</template>
```

## [Tracking an event with custom data](#tracking-an-event-with-custom-data)

You can also pass custom data along with an event. To do so, pass an object
with key-value pairs as the second argument to `track()`:

component.ts

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.js

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.ts

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.js

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.ts

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.js

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.ts

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.js

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.ts

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.js

```
track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.ts

```
import { track } from '@vercel/analytics';

track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

component.js

```
import { track } from '@vercel/analytics';

track('Signup', { location: 'footer' });
track('Purchase', { productName: 'Shoes', price: 49.99 });
```

This tracks a "Signup" event that occurred in the "footer" location. The
second event tracks a "Purchase" event with product name and a price.

## [Tracking a server-side event](#tracking-a-server-side-event)

In scenarios such as when a user signs up or makes a purchase, it's more useful to track an event on the server-side. For this, you can use the `track` function on API routes or server actions.

To set up server-side events:

1. Make sure you have `@vercel/analytics` version 1.1.0 or later [installed](/docs/analytics/quickstart#add-@vercel/analytics-to-your-project).
2. Import `{ track }` from `@vercel/analytics/server`.
3. Use the `track` function in your API routes or server actions.
4. Pass in a string representing the event name as the first argument to the `track` function. You can also pass [custom data](#tracking-an-event-with-custom-data) as the second argument.

For example, if you want to track a purchase event:

pages/api/purchase.ts

```
import type { NextApiRequest, NextApiResponse } from 'next';
import { track } from '@vercel/analytics/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await track('Item purchased', {
    quantity: 1,
  });
}
```

pages/api/purchase.js

```
import { track } from '@vercel/analytics/server';

export default async function handler(req, res) {
  await track('Item purchased', {
    quantity: 1,
  });
}
```

app/actions.ts

```
'use server';
import { track } from '@vercel/analytics/server';

export async function purchase() {
  await track('Item purchased', {
    quantity: 1,
  });
}
```

app/actions.js

```
'use server';
import { track } from '@vercel/analytics/server';

export async function purchase() {
  await track('Item purchased', {
    quantity: 1,
  });
}
```

app/routes/purchase.tsx

```
import { track } from '@vercel/analytics/server';

export async function action() {
  await track('Item purchased', {
    quantity: 1,
  });
}
```

app/routes/purchase.jsx

```
import { track } from '@vercel/analytics/server';

export async function action() {
  await track('Item purchased', {
    quantity: 1,
  });
}
```

routes/+page.server.js

```
import { track } from '@vercel/analytics/server';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async () => {
    await track('Item purchased', {
      quantity: 1,
    });
  },
};
```

routes/+page.server.js

```
import { track } from '@vercel/analytics/server';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async () => {
    await track('Item purchased', {
      quantity: 1,
    });
  },
};
```

server/api/event.ts

```
import { track } from '@vercel/analytics/server';

export default defineEventHandler(async () => {
  await track('Item purchased', {
    quantity: 1,
  });
});
```

server/api/event.js

```
import { track } from '@vercel/analytics/server';

export default defineEventHandler(async () => {
  await track('Item purchased', {
    quantity: 1,
  });
});
```

### [Deployment Protection and server-side events](#deployment-protection-and-server-side-events)

If your project has [Deployment Protection](/docs/deployment-protection) enabled, server-side `track()` calls on protected deployments can fail with `401 Unauthorized` because the request to `/_vercel/insights/event` is blocked. This applies to both [Vercel Authentication](/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication) and [Password Protection](/docs/deployment-protection/methods-to-protect-deployments/password-protection).

To resolve this, create a [Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) secret in your project settings. This sets the `VERCEL_AUTOMATION_BYPASS_SECRET` system environment variable. The `@vercel/analytics/server` module automatically sends this value in the `x-vercel-protection-bypass` header, allowing `track()` requests to succeed on protected deployments.

## [Limitations](#limitations)

The following limitations apply to custom data:

* The number of custom data properties you can pass is limited based on your [plan](/docs/analytics/limits-and-pricing).
* Nested objects are not supported.
* Allowed values are `strings`, `numbers`, `booleans`, and `null`.
* You cannot set event name, key, or values to longer than 255 characters each.

## [Tracking custom events in the dashboard](#tracking-custom-events-in-the-dashboard)

Once you have tracked an event, you can view and filter for it in the dashboard. To view your events:

1. Go to your [dashboard](/dashboard), select your project, and click [Analytics](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fanalytics&title=Go+to+Analytics) in the sidebar.
2. From the Web Analytics page, scroll to the Events panel.
3. The events panel displays a list of all the event names that you have created in your project. Select the event name to drill down into the event data.
4. The event details page displays a list, organized by custom data properties, of all the events that have been tracked.

---

[Previous

Filtering](/docs/analytics/filtering)[Next

Redacting Sensitive Data](/docs/analytics/redacting-sensitive-data)

Was this helpful?
