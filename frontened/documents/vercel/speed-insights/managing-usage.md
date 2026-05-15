Menu

# Managing Usage & Costs

Last updated February 26, 2026

Speed Insights is available on [all plans](/docs/plans)

This guide covers how to measure and reduce your Speed Insights usage using the [`@vercel/speed-insights`](https://www.npmjs.com/package/@vercel/speed-insights) package.

## [Understanding usage](#understanding-usage)

Your Speed Insights usage over time is displayed under the Speed Insights section of the [Usage](https://vercel.com/d?to=%2F%5Bteam%5D%2F~%2Fusage%23speed-insights&title=Go%20to%20Usage) section in the sidebar on your dashboard.

To learn more about data points and how they are calculated, see [Understanding data points](/docs/speed-insights/metrics#understanding-data-points).

## [Reducing usage](#reducing-usage)

To reduce the number of data points collected, you can configure the `@vercel/speed-insights` package with the following options. First, install the package if you haven't already:

```
npm i @vercel/speed-insights
```

Then configure one or both of the following options:

### [Adjusting `sampleRate`](#adjusting-samplerate)

The [`sampleRate`](/docs/speed-insights/package#samplerate) option determines the percentage of events sent to Vercel. By default, all events are sent. Lowering this value reduces the number of data points collected, which can lower costs while still providing statistically meaningful performance data.

For example, setting `sampleRate` to `0.5` means only 50% of page views will send performance metrics:

```
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights sampleRate={0.5} />
      </body>
    </html>
  );
}
```

```
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights sampleRate={0.5} />
    </>
  );
}
```

```
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <YourApp />
      <SpeedInsights sampleRate={0.5} />
    </>
  );
}
```

```
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights({ sampleRate: 0.5 });
```

Lower sample rates reduce costs but may decrease data accuracy for low-traffic pages.

### [Filtering pages with `beforeSend`](#filtering-pages-with-beforesend)

The [`beforeSend`](/docs/speed-insights/package#beforesend) option lets you filter or modify events before they reach Vercel. You can use this to exclude specific pages from tracking, which reduces the total number of data points collected.

Common use cases include:

* Excluding internal or admin pages that don't need performance monitoring
* Excluding pages that aren't user-facing

#### [Excluding specific pages](#excluding-specific-pages)

To exclude events from specific paths, return `null` from the `beforeSend` function:

```
<SpeedInsights
  beforeSend={(data) => {
    // Exclude admin pages
    if (data.url.includes('/admin')) {
      return null;
    }
    // Exclude internal tools
    if (data.url.includes('/internal')) {
      return null;
    }
    return data;
  }}
/>
```

#### [Including only specific pages](#including-only-specific-pages)

If you want to track only certain pages, you can invert the logic to create an allowlist:

```
<SpeedInsights
  beforeSend={(data) => {
    // Only track the homepage and product pages
    const allowedPaths = ['/', '/products', '/pricing'];
    const currentPath = new URL(data.url).pathname;

    if (allowedPaths.some((path) => currentPath.startsWith(path))) {
      return data;
    }
    return null;
  }}
/>
```

#### [Combining `sampleRate` and `beforeSend`](#combining-samplerate-and-beforesend)

For maximum cost control, you can combine both options. The `sampleRate` determines at page load whether to collect vitals, then `beforeSend` filters events before sending:

```
<SpeedInsights
  sampleRate={0.5}
  beforeSend={(data) => {
    // Exclude admin pages entirely
    if (data.url.includes('/admin')) {
      return null;
    }
    // Of the 50% of page views sampled, admin pages will be excluded
    return data;
  }}
/>
```

## [More resources](#more-resources)

* [@vercel/speed-insights configuration](/docs/speed-insights/package)
* [Migrating from legacy Speed Insights](/docs/speed-insights/migrating-from-legacy)
* [Limits and pricing](/docs/speed-insights/limits-and-pricing)
* [Understanding data points](/docs/speed-insights/metrics#understanding-data-points)

---

[Previous

Limits and Pricing](/docs/speed-insights/limits-and-pricing)[Next

Troubleshooting](/docs/speed-insights/troubleshooting)

Was this helpful?
