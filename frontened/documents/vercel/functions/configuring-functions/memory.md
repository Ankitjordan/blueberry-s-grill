Title: Configuring Memory and CPU for Vercel Functions

URL Source: https://vercel.com/docs/functions/configuring-functions/memory

Markdown Content:
The memory configuration of a function determines how much memory and CPU a function can use while executing. By default, on Pro and Enterprise, functions execute with 2 GB (1 vCPU) of memory. On Hobby, they will always execute with 2 GB (1 vCPU). You can change the [default memory size for all functions](https://vercel.com/docs/functions/configuring-functions/memory#setting-your-default-function-memory-/-cpu-size) in a project.

You should consider the following points when changing the memory size of your functions:

*   Performance: Increasing memory size can improve the performance of your functions, allowing them to run faster
*   Cost: Vercel Functions are billed based on the function duration, which is affected by the memory size. While increasing the function CPU can increase costs if the function duration stays the same, the increase in CPU can also make functions execute faster. If your function executes faster, it is possible for it to incur less overall function duration usage. This is especially important if your function runs CPU-intensive tasks. See [Pricing](https://vercel.com/docs/functions/configuring-functions/memory#pricing) for more information on how function duration is calculated

Those on the Pro or Enterprise plans can configure the default memory size for all functions in a project.

To change the default function memory size:

1.   Choose the appropriate project from your [dashboard](https://vercel.com/dashboard)
2.   Open Settings in the sidebar
3.   Scroll to [Functions](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Ffunctions&title=Go+to+Functions+Settings)
4.   Select Advanced Settings
5.   In the Function CPU section, select your preferred memory size option:

![Image 1: The Function CPU setting in a Vercel project's dashboard](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ffunctions%2Fconfigure-mem-light.png&w=1920&q=75)![Image 2: The Function CPU setting in a Vercel project's dashboard](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ffunctions%2Fconfigure-mem-dark.png&w=1920&q=75)

The Function CPU setting in a Vercel project's dashboard

1.   The change will be applied to all future deployments made by your team. You must create a new deployment for your changes to take effect

You cannot set your memory size using `vercel.json`. If you try to do so, you will receive a warning at build time. Only Pro and Enterprise users can set the default memory size in the dashboard. Hobby users will always use the default memory size of 2 GB (1 vCPU).

The memory size you select will also determine the CPU allocated to your Vercel Functions. The following table shows the memory and CPU allocation for each type.

With [fluid compute enabled](https://vercel.com/docs/fluid-compute) on Pro and Enterprise plans, the default memory size is 2 GB (1 vCPU) and can be upgraded to 4 GB / 2 vCPUs, for Hobby users, Vercel manages the CPU with a minimum of 1 vCPU.

| Type | Memory / CPU | Use |
| --- | --- | --- |
| Standard Default | 2 GB / 1 vCPU | Predictable performance for production workloads. Default for [fluid compute](https://vercel.com/docs/fluid-compute). |
| Performance | 4 GB / 2 vCPUs | Increased performance for latency-sensitive applications and SSR workloads. |

Users on the Hobby plan can only use the default memory size of 2 GB (1 vCPU). Hobby users cannot configure this size. If you are on the Hobby plan, and have enabled fluid compute, the memory size will be managed by Vercel with a minimum of 1 vCPU.

Projects created before 2019-11-08 have the default function memory size set to 1024 MB/0.6 vCPU for Hobby plan, and 3008 MB/1.67 vCPU for Pro and Enterprise plan. Although the dashboard may not have any memory size option selected by default for those projects, you can start using the new memory size options by selecting your preferred memory size in the dashboard.

To check the memory size of your functions in the [dashboard](https://vercel.com/dashboard), follow these steps:

1.   Find the project you want to review and open [Deployments](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fdeployments&title=Go+to+Deployments) in the sidebar
2.   Go to the deployment you want to review
3.   Open Resources in the sidebar
4.   Search for the function by name or find it in the Functions section
5.   Click on the name of the function to open it in Observability
6.   Hover over the information icon next to the function name to view its memory size

To learn more about the maximum size of your function's memory, see [Max memory size](https://vercel.com/docs/functions/limitations#memory-size-limits).

While memory / CPU size is not an explicitly billed metric, it is fundamental in how the billed metric of [Function Duration](https://vercel.com/docs/functions/usage-and-pricing#managing-function-duration) is calculated.

Legacy Billing Model: This describes the legacy Function duration billing model based on wall-clock time. For new projects, we recommend [Fluid Compute](https://vercel.com/docs/functions/usage-and-pricing) which bills separately for active CPU time and provisioned memory time for more cost-effective and transparent pricing.

You are charged based on the duration your Vercel functions have run. This is sometimes called "wall-clock time", which refers to the _actual time_ elapsed during a process, similar to how you would measure time passing on a wall clock. It includes all time spent from start to finish of the process, regardless of whether that time was actively used for processing or spent waiting for a streamed response. Function Duration is calculated in GB-Hours, which is the memory allocated for each Function in GB x the time in hours they were running.

For example, if a function [has](https://vercel.com/docs/functions/configuring-functions/memory) 1.7 GB (1769 MB) of memory and is executed 1 million times at a 1-second duration:

*   Total Seconds: 1M * (1s) = 1,000,000 Seconds
*   Total GB-Seconds: 1769/1024 GB * 1,000,000 Seconds = 1,727,539.06 GB-Seconds
*   Total GB-Hrs: 1,727,539.06 GB-Seconds / 3600 = 479.87 GB-Hrs
*   The total Vercel Function Execution is 479.87 GB-Hrs.

To see your current usage, open Usage in the sidebar on your team's [Dashboard](https://vercel.com/dashboard) and go to Functions>Duration. You can use the Ratio option to see the total amount of execution time across all projects within your team, including the completions, errors, and timeouts.

You can also view [Invocations](https://vercel.com/docs/functions/usage-and-pricing#managing-function-invocations) to see the number of times your Functions have been invoked. To learn more about the cost of Vercel Functions, see [Vercel Function Pricing](https://vercel.com/docs/pricing/serverless-functions).
