Menu

# Local Development Behavior

Last updated February 26, 2026

During local development, BotID behaves differently than in production to facilitate testing and development workflows. In development mode, `checkBotId()` always returns `{ isBot: false }`, allowing all requests to pass through. This ensures your development workflow isn't interrupted by bot protection while building and testing features.

### [Using developmentOptions](#using-developmentoptions)

If you need to test BotID's different return values in local development, you can use the `developmentBypass` option:

app/api/sensitive/route.ts

```
import { checkBotId } from 'botid/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const verification = await checkBotId({
    developmentOptions: {
      bypass: 'BAD-BOT', // default: 'HUMAN'
    },
  });

  if (verification.isBot) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  }

  // Your protected logic here
}
```

The `developmentOptions` option only works in development mode and is ignored
in production. In production, BotID always performs real bot detection.

This allows you to:

* Test your bot handling logic without deploying to production
* Verify error messages and fallback behaviors
* Ensure your application correctly handles both human and bot traffic

---

[Previous

Form Submissions](/docs/botid/form-submissions)[Next

Networking](/docs/networking)

Was this helpful?
