Menu

# Vercel Speed Insights Privacy & Compliance

Last updated March 11, 2026

Speed Insights is available on [all plans](/docs/plans)

To ensure that the Speed Insights feature can be used despite many different regulatory limitations around the world, we've designed it in such a way that it provides you with information without being tied to, or associated with, any individual visitor or IP address.

## [Data collected](#data-collected)

The recording of data points is anonymous and the Speed Insights feature does not collect or store information that would enable us to reconstruct a browsing session across pages or identify a user.

The following information is stored with every data point:

| Collected Value | Example Value |
| --- | --- |
| Route | /blog/[slug] |
| URL | /blog/nextjs-10 |
| Network Speed | 4g (or slow-2g, 2g, 3g) |
| Browser | Chrome 86 (Blink) |
| Device Type | Mobile (or Desktop/Tablet) |
| Device OS | Android 10 |
| Country (ISO 3166-1 alpha-2) | US |
| Web Vital | FCP 1.0s |
| Web Vital Attribution | html>body img.header |
| SDK Information | @vercel/speed-insights 0.1.0 |
| Server-Received Event Time | 2023-10-29 09:06:30 |

See our [Privacy Notice](/legal/privacy-policy) for more information, including how Vercel Speed Insights complies with the GDPR.

## [How the data points are tracked](#how-the-data-points-are-tracked)

Once you've followed the dashboard's instructions for enabling Speed Insights and installed the `@vercel/speed-insights` package, it will automatically start tracking data points for your project.

The package injects a script that retrieves the visitor's [Web Vitals](/docs/speed-insights/metrics) by invoking native browser APIs and reporting them to Vercel's servers on every page load.

Learn more about the [first-party intake data ingestion method](/docs/speed-insights/migrating-from-legacy#first-party-intake), which enables a faster and more reliable experience.

## [Resilient Intake](#resilient-intake)

In version 2, Vercel generates a random seed at build time and passes it through dynamic configuration. `@vercel/speed-insights` uses this seed to build the injected script URL and intake URLs.

The Resilient Intake does not depend on a single predictable URL path for data collection, enhancing reliability and increasing data collection efficiency.

Resilient Intake requires version 2 of the `@vercel/speed-insights` [package](/docs/speed-insights/package#whats-new-in-version-2).

---

[Previous

Metrics](/docs/speed-insights/metrics)[Next

@vercel/speed-insights](/docs/speed-insights/package)

Was this helpful?
