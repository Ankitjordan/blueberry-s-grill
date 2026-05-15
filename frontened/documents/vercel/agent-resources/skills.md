Menu

# Agent Skills

Last updated February 17, 2026

An agent skill is a packaged capability that extends an AI agent with a specific, production ready behavior such as data access, automation, or domain logic. Skills give agents secure, structured ways to take action across your stack, so they can move beyond chat and reliably execute real workflows. They are modular, composable, and built to plug directly into modern web infrastructure.

Below you'll find the official directory of Vercel published skills. Each skill is verified, documented, and ready to integrate, so you can quickly add powerful new capabilities to your agents and ship faster with confidence.

## [Installing skills](#installing-skills)

Install any skill using the skills CLI:

```
npx skills add <owner/repo>
```

To install a specific skill from a repository with multiple skills:

```
npx skills add <owner/repo> --skill <skill-name>
```

Skills work with 18+ AI agents including Claude Code, GitHub Copilot, Cursor, Cline, and many others.

## [React and Next.js](#react-and-next.js)

Skills for building performant React and Next.js applications.

| Skill | Description | Install |
| --- | --- | --- |
| [vercel-react-best-practices](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) | React and Next.js performance optimization guidelines with 40+ rules across 8 categories |  |
| [vercel-composition-patterns](https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns) | React composition patterns that scale, helping avoid boolean prop proliferation |  |
| [vercel-react-native-skills](https://skills.sh/vercel-labs/agent-skills/vercel-react-native-skills) | React Native best practices with 16 rules covering performance, architecture, and platform-specific patterns |  |
| [next-best-practices](https://skills.sh/vercel-labs/next-skills/next-best-practices) | Next.js best practices covering file conventions, RSC boundaries, data patterns, and more |  |
| [next-cache-components](https://skills.sh/vercel-labs/next-skills/next-cache-components) | Next.js 16 Cache Components and PPR for mixing static, cached, and dynamic content |  |
| [next-upgrade](https://skills.sh/vercel-labs/next-skills/next-upgrade) | Upgrade Next.js to the latest version using official migration guides and codemods |  |
| [cra-to-next-migration](https://skills.sh/vercel-labs/migration-skills/cra-to-next-migration) | Comprehensive guide for converting Create React App projects to Next.js |  |
| [turborepo](https://skills.sh/vercel/turborepo/turborepo) | Build system guide for JavaScript and TypeScript monorepos with task caching and parallel execution |  |

## [AI SDK](#ai-sdk)

Skills for building AI-powered applications with the Vercel AI SDK.

| Skill | Description | Install |
| --- | --- | --- |
| [ai-sdk](https://skills.sh/vercel/ai/ai-sdk) | Answer questions about the AI SDK and help build AI-powered features including agents, chatbots, and RAG systems |  |
| [ai-elements](https://skills.sh/vercel/ai-elements/ai-elements) | Component library built on shadcn/ui for AI-native applications |  |
| [streamdown](https://skills.sh/vercel/streamdown/streamdown) | Streaming-optimized React Markdown renderer with built-in security |  |

## [Design and UI](#design-and-ui)

Skills for building accessible, performant user interfaces.

| Skill | Description | Install |
| --- | --- | --- |
| [web-design-guidelines](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines) | Review UI code for Web Interface Guidelines compliance with 100+ rules covering accessibility, performance, and UX |  |
| [building-components](https://skills.sh/vercel/components.build/building-components) | Guidance on building UI components with accessibility, composable APIs, and theming |  |

## [Browser automation](#browser-automation)

Skills for automating browser interactions.

| Skill | Description | Install |
| --- | --- | --- |
| [agent-browser](https://skills.sh/vercel-labs/agent-browser/agent-browser) | Browser automation CLI for AI agents including navigation, form filling, screenshots, and data extraction |  |

## [Deployment](#deployment)

Skills for deploying applications to Vercel.

| Skill | Description | Install |
| --- | --- | --- |
| [vercel-deploy](https://skills.sh/vercel-labs/agent-skills/vercel-deploy) | Deploy applications and websites to Vercel instantly with framework auto-detection for 40+ frameworks |  |
| [vercel-cli](https://skills.sh/vercel/vercel/vercel-cli) | Deploy, manage, and develop projects on Vercel from the command line |  |
| [autoship](https://skills.sh/vercel-labs/autoship/autoship) | Automated releases with repository cloning, AI-powered changeset generation, and npm publishing |  |

## [Commerce](#commerce)

Skills for building commerce and payment experiences.

| Skill | Description | Install |
| --- | --- | --- |
| [ucp](https://skills.sh/vercel-labs/agentic-commerce-skills/ucp) | Universal Commerce Protocol for checkout sessions, payments, and commerce operations |  |

## [Workflow](#workflow)

Skills for building durable, resilient workflows.

| Skill | Description | Install |
| --- | --- | --- |
| [workflow](https://skills.sh/vercel/workflow/workflow) | Durable, resilient async functions with retry logic and step-based orchestration |  |

## [JSON Render](#json-render)

Skills for the [JSON Render](https://github.com/vercel-labs/json-render) generative UI framework.

| Skill | Description | Install |
| --- | --- | --- |
| [json-render-core](https://skills.sh/vercel-labs/json-render/json-render-core) | Core package for schema definition, catalog creation, and spec streaming |  |
| [json-render-react](https://skills.sh/vercel-labs/json-render/json-render-react) | React renderer that converts JSON specs into React component trees |  |
| [json-render-react-native](https://skills.sh/vercel-labs/json-render/json-render-react-native) | React Native renderer for JSON specs with standard components and data binding |  |
| [json-render-remotion](https://skills.sh/vercel-labs/json-render/json-render-remotion) | Remotion renderer that turns JSON timeline specs into videos |  |
| [remotion-best-practices](https://skills.sh/vercel-labs/json-render/remotion-best-practices) | Best practices for Remotion video creation in React with 30+ rule files |  |

## [Utility](#utility)

General-purpose skills for agent workflows.

| Skill | Description | Install |
| --- | --- | --- |
| [find-skills](https://skills.sh/vercel-labs/skills/find-skills) | Discover and install agent skills from the skills.sh directory |  |
| [before-and-after](https://skills.sh/vercel-labs/before-and-after/before-and-after) | Screenshot comparison tool for capturing before/after states of web pages |  |

## [Finding more skills](#finding-more-skills)

Browse the [skills.sh directory](https://skills.sh) to discover skills from Vercel and the community. You can also search for skills using the CLI:

```
npx skills find <query>
```

---

[Previous

CLI Workflows](/docs/agent-resources/workflows)[Next

llms.txt](/llms.txt)

Was this helpful?
