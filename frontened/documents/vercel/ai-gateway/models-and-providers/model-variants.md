Menu

# Model Variants

Last updated March 7, 2026

Some AI inference providers offer special variants of models. These models can
have different features such as a larger context size. They may incur different
costs associated with requests as well.

When AI Gateway makes these models available they will be highlighted on the
model detail page with a Model Variants section in the relevant provider
card providing an overview of the feature set and linking to more detail.

Model variants sometimes rely on preview or beta features offered by the
inference provider. Their ongoing availability can therefore be less predictable
than that of a stable model feature. Check the provider's site for the latest
information.

### [Anthropic Claude models: 1M token context](#anthropic-claude-models:-1m-token-context)

AI Gateway automatically enables the 1M token context window for Claude Opus 4.7,
Opus 4.6, Sonnet 4.6, Sonnet 4.5, and Sonnet 4 models. No configuration is required.

* Learn more:
  [Announcement](https://www.anthropic.com/news/1m-context),
  [Context windows docs](https://platform.claude.com/docs/en/build-with-claude/context-windows#1-m-token-context-window)
* Pricing: Requests that exceed 200K tokens are charged at premium rates. See
  [pricing details](https://docs.anthropic.com/en/about-claude/pricing#long-context-pricing).

---

[Previous

Filtering, Ordering & Sorting](/docs/ai-gateway/models-and-providers/provider-filtering-and-ordering)[Next

Uptime](/docs/ai-gateway/models-and-providers/uptime)

Was this helpful?
