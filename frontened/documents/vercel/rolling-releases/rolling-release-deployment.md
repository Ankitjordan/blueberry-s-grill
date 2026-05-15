Menu

# Performing a rolling release deployment

Last updated February 24, 2026

Use this guide to gradually roll out a new production deployment using rolling releases. You'll configure traffic stages, monitor for errors between stages, and either complete the rollout or abort if problems arise.

This guide requires a [linked Vercel project](/docs/cli/project-linking). Run
`vercel link` in your project directory if you haven't already. Rolling
releases require a Pro or Enterprise plan.

## [Quick reference](#quick-reference)

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

terminal

```
# 1. Configure rolling release stages
vercel rolling-release configure --cfg '{"enabled":true,"advancementType":"automatic","stages":[{"targetPercentage":10,"duration":5},{"targetPercentage":50,"duration":10},{"targetPercentage":100}]}'

# 2. Deploy to production (triggers rolling release automatically)
vercel deploy --prod

# 3. Start the rolling release
vercel rolling-release start --dpl <deployment-url>

# 4. Monitor the rollout
vercel rolling-release fetch
vercel logs --environment production --level error --since 5m

# 5. Advance to the next stage (if manual approval is configured)
vercel rolling-release approve --dpl <deployment-url> --currentStageIndex 0

# IF errors spike during rollout:
vercel rolling-release abort --dpl <deployment-url>

# 6. Complete the rollout (100% traffic)
vercel rolling-release complete --dpl <deployment-url>
```

## [1. Configure rolling release stages](#1.-configure-rolling-release-stages)

Set up the traffic stages for your rolling release. Each stage defines what percentage of traffic goes to the new deployment and how long to wait before advancing:

terminal

```
vercel rolling-release configure --cfg '{"enabled":true,"advancementType":"automatic","stages":[{"targetPercentage":10,"duration":5},{"targetPercentage":50,"duration":10},{"targetPercentage":100}]}'
```

This configuration sends 10% of traffic to the new deployment for five minutes, then 50% for 10 minutes, then 100%. Adjust the percentages and durations based on your traffic volume and risk tolerance.

To disable rolling releases later:

terminal

```
vercel rolling-release configure --cfg 'disable'
```

## [2. Deploy to production](#2.-deploy-to-production)

Create a new production deployment. With rolling releases configured, the deployment won't immediately receive all traffic:

terminal

```
vercel deploy --prod
```

Save the deployment URL from the output for use in the following steps.

## [3. Start the rolling release](#3.-start-the-rolling-release)

Begin the rolling release to start shifting traffic to the new deployment:

terminal

```
vercel rolling-release start --dpl <deployment-url>
```

This starts at the first stage (10% of traffic in the example configuration above).

## [4. Monitor the rollout](#4.-monitor-the-rollout)

Check the current stage, traffic split, and overall progress:

terminal

```
vercel rolling-release fetch
```

While the rollout is in progress, monitor production logs for errors coming from the new deployment:

terminal

```
vercel logs --environment production --level error --since 5m
```

To filter for specific error patterns:

terminal

```
vercel logs --environment production --level error --query "TypeError" --since 5m --expand
```

Run these checks periodically between stage transitions. If your stages have automatic durations, the rollout advances on its own. If you configured manual approval stages, you'll need to explicitly approve each one.

## [5. Advance to the next stage](#5.-advance-to-the-next-stage)

If your configuration includes stages that require manual approval, advance to the next stage after confirming the current stage is healthy:

terminal

```
vercel rolling-release approve --dpl <deployment-url> --currentStageIndex <stage-index>
```

The `--currentStageIndex` flag specifies which stage you're approving. Stage indexes start at 0.

## [6. Complete the rollout](#6.-complete-the-rollout)

After all stages pass, complete the rollout to send 100% of traffic to the new deployment:

terminal

```
vercel rolling-release complete --dpl <deployment-url>
```

Verify that production is healthy after the full rollout:

terminal

```
vercel logs --environment production --level error --since 5m
```

## [When you need to abort](#when-you-need-to-abort)

If you see a spike in errors during any stage, abort the rolling release immediately. This reverts all traffic back to the previous deployment:

terminal

```
vercel rolling-release abort --dpl <deployment-url>
```

After aborting, investigate the errors and fix them before attempting another rollout:

terminal

```
vercel logs --environment production --level error --since 30m --expand
```

## [Related](#related)

* [vercel rolling-release](/docs/cli/rolling-release)
* [vercel deploy](/docs/cli/deploy)
* [vercel logs](/docs/cli/logs)
* [Rolling releases overview](/docs/rolling-releases)
* [Rolling back a production deployment](/docs/deployments/rollback-production-deployment)

---

[Previous

Rolling Releases](/docs/rolling-releases)[Next

Services](/docs/services)

Was this helpful?
