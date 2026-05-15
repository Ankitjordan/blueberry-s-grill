Menu

# Interaction Timing Tool

Last updated July 18, 2025

Interaction Timing Tool is available on [all plans](/docs/plans)

As you navigate your site, the interaction timing tool allows you to inspect in detail each interaction's latency and get notified with toasts for interactions taking > 200ms. This can help you ensure your site's [Interaction to Next Paint (INP)](/blog/first-input-delay-vs-interaction-to-next-paint) (a Core Web Vitals) has a good score.

## [Accessing the Interaction Timing Tool](#accessing-the-interaction-timing-tool)

To access the interaction timing tool:

1. [Open the Toolbar Menu](/docs/vercel-toolbar#using-the-toolbar-menu)
2. Select the Interaction Timing option. If any interaction has been detected on the page, a badge will display next to the option. The number inside the badge is the current INP
3. The Interaction Timing popover will open on the right side of the screen. As you navigate your site, each interaction will appear in this panel. Mouse over the interaction timeline to understand how the duration of input delay, processing (event handlers), and rendering are affecting the interaction's latency

## [Interaction Timing Tool Preferences](#interaction-timing-tool-preferences)

To change preferences for the interaction timing tool:

1. [Open the Toolbar Menu](/docs/vercel-toolbar#using-the-toolbar-menu)
2. Select the Preferences option
3. Select your desired setting for Measure Interaction Timing
   * On will show the toasts for interactions taking >200ms
   * On (Silent) will not show toasts, but will still track interaction timing and display it in the interaction timing side panel when opened
   * Off will turn off tracking for interaction timing

## [More resources](#more-resources)

* [Preview deployments overview](/docs/deployments/environments#preview-environment-pre-production)
* [Using comments with preview deployments](/docs/comments/using-comments)
* [Draft mode](/docs/draft-mode)

---

[Previous

Accessibility Audit Tool](/docs/vercel-toolbar/accessibility-audit-tool)[Next

Layout Shift Tool](/docs/vercel-toolbar/layout-shift-tool)

Was this helpful?
