Menu

# Handling Verified Bots

Last updated February 26, 2026

Handling verified bots is available in botid@1.5.0 and above.

BotID allows you to identify and handle [verified bots](/docs/bot-management#verified-bots) differently from regular bots. This feature enables you to permit certain trusted bots (like AI assistants) to access your application while blocking others.

Vercel maintains a directory of known and verified bots across the web at [bots.fyi](https://bots.fyi)

### [Checking for Verified Bots](#checking-for-verified-bots)

When using `checkBotId()`, the response includes fields that help you identify verified bots:

```
import { checkBotId } from "botid/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const botResult = await checkBotId();

  const { isBot, verifiedBotName, isVerifiedBot, verifiedBotCategory } = botResult;

  // Check if it's ChatGPT Operator
  const isOperator = isVerifiedBot && verifiedBotName === "chatgpt-operator";

  if (isBot && !isOperator) {
    return Response.json({ error: "Access denied" }, { status: 403 });
  }

  // ... rest of your handler
  return Response.json(botResult);
}
```

### [Verified Bot response fields](#verified-bot-response-fields)

View our directory of verified bot names and categories [here](/docs/bot-management#verified-bots-directory).

The `checkBotId()` function returns the following fields for verified bots:

* `isVerifiedBot`: Boolean indicating whether the bot is verified
* `verifiedBotName`: String identifying the specific verified bot
* `verifiedBotCategory`: String categorizing the type of verified bot

### [Example use cases](#example-use-cases)

Verified bots are useful when you want to:

* Allow AI assistants to interact with your API while blocking other bots
* Provide different responses or functionality for verified bots
* Track usage by specific verified bot services
* Enable AI-powered features while maintaining security

---

[Previous

Get Started with BotID](/docs/botid/get-started)[Next

Advanced BotID Configuration](/docs/botid/advanced-configuration)

Was this helpful?
