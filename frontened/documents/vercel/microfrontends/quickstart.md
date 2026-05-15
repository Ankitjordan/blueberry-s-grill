Title: Getting started with microfrontends

URL Source: https://vercel.com/docs/microfrontends/quickstart

Markdown Content:
This quickstart guide will help you set up microfrontends on Vercel. Microfrontends can be used with different frameworks, and separate frameworks can be combined in a single microfrontends group.

Choose a framework to optimize documentation to:

*   Have at least two [Vercel projects](https://vercel.com/docs/projects/overview#creating-a-project) created on Vercel that will be part of the same microfrontends group.
*   If you're using a coding agent, install the microfrontends skill:

Before diving into implementation, it's helpful to understand these core concepts:

*   Default app: The main application that manages the `microfrontends.json` configuration file and handles routing decisions. The default app will also handle any request not handled by another microfrontend.
*   Shared domain: All microfrontends appear under a single domain, allowing microfrontends to reference relative paths that point to the right environment automatically.
*   Path-based routing: Requests are automatically directed to the appropriate microfrontend based on URL paths.
*   Independent deployments: Teams can deploy their microfrontends without affecting other parts of the application.

1.   You can create a group using the CLI or the dashboard.

Using the CLI:

Run the following command and follow the interactive prompts to name the group, add projects, and choose the default application:

Using the dashboard:

    1.   Navigate to [your Vercel dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and make sure that you have selected your team from the team switcher.
    2.   Visit the Settings section in the sidebar.
    3.   Find the Microfrontends section in the sidebar from the Settings navigation menu.
    4.   Click Create Group in the upper right corner.
    5.   Follow the instructions to add projects to the microfrontends group and choose one of those applications to be the _default application_.

Creating a microfrontends group and adding projects to that group does not change any behavior for those applications until you deploy a `microfrontends.json` file to production.

2.   Once the microfrontends group is created, you can define a `microfrontends.json` file at the root in the default application. This configuration file is only needed in the default application, and it will control the routing for microfrontends. In this example, `web` is the default application.

Production behavior will not be changed until the `microfrontends.json` file is merged and promoted, so you test in the [Preview](https://vercel.com/docs/deployments/environments#preview-environment-pre-production) environment before deploying changes to production.

On the Settings page for the new microfrontends group, click the Add Config button to copy the `microfrontends.json` to your code.

You can also create the configuration manually in code:

Application names in `microfrontends.json` should match the Vercel project names, see the [microfrontends configuration](https://vercel.com/docs/microfrontends/configuration) documentation for more information.

See the [path routing](https://vercel.com/docs/microfrontends/path-routing) documentation for details on how to configure the routing for your microfrontends.

3.   In the directory of the microfrontend application, install the package using the following command:

You need to perform this step for every microfrontend application.

4.   Once the `microfrontends.json` file has been added, Vercel will be able to start routing microfrontend requests to each microfrontend. However, the specifics of each framework, such as JS, CSS, and images, also need to be routed to the correct application.

To handle JavaScript and CSS assets in Next.js, add the `withMicrofrontends` wrapper to your `next.config.js` file.

The `withMicrofrontends` function will automatically add an [asset prefix](https://vercel.com/docs/microfrontends/path-routing#asset-prefix) to the application so that you do not have to worry about that. Next.js applications that use [`basePath`](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath) are not supported right now.

Any static asset not covered by the framework instructions above, such as images or any file in the `public/` directory, will also need to be added to the microfrontends configuration file or be moved to a path prefixed by the application's asset prefix. An asset prefix of `/vc-ap-<hash of application name>` (in `2.0.0`, or `/vc-ap-<application name>` in prior versions) is automatically set up by the Vercel microfrontends support.

5.   Set up the other microfrontends in the group by running through steps [3](https://vercel.com/docs/microfrontends/quickstart#install-the-@vercel/microfrontends-package) and [4](https://vercel.com/docs/microfrontends/quickstart#set-up-microfrontends-with-your-framework) for every application.

6.   To provide a seamless local development experience, `@vercel/microfrontends` provides a microfrontends aware local development proxy to run alongside your development servers. This proxy allows you to only run a single microfrontend locally while making sure that all microfrontend requests still work.

If you are using [Turborepo](https://turborepo.com/), the proxy will automatically run when you [run the development task](https://vercel.com/docs/microfrontends/local-development#starting-local-proxy) for your microfrontend.

If you don't use `turbo`, you can set this up by adding a script to your `package.json` like this:

Next, use the auto-generated port in your `dev` command so that the proxy knows where to route the requests to:

Once you have your application and the local development proxy running (either via `turbo` or manually), visit the "Microfrontends Proxy" URL in your terminal output. Requests will be routed to your local app or your production fallback app. Learn more in the [local development guide](https://vercel.com/docs/microfrontends/local-development).

7.   You can now deploy your code to Vercel. Once live, you can then visit the domain for that deployment and visit any of the paths configured in `microfrontends.json`. These paths will be served by the other microfrontend applications.

In the example above, visiting the `/` page will see the content from the `web` microfrontend while visiting `/docs` will see the content from the `docs` microfrontend.

Microfrontends functionality can be tested in [Preview](https://vercel.com/docs/deployments/environments#preview-environment-pre-production) before deploying the code to production. 

*   Learn how to use the `@vercel/microfrontends` package to manage [local development](https://vercel.com/docs/microfrontends/local-development).
*   For polyrepo setups (separate repositories), see the [polyrepo configuration guide](https://vercel.com/docs/microfrontends/local-development#polyrepo-setup).
*   [Route more paths](https://vercel.com/docs/microfrontends/path-routing) to your microfrontends.
*   To learn about other microfrontends features, visit the [Managing Microfrontends](https://vercel.com/docs/microfrontends/managing-microfrontends) documentation.
*   [Set up the Vercel Toolbar](https://vercel.com/docs/microfrontends/managing-microfrontends/vercel-toolbar) for access to developer tools to debug and manage microfrontends.

Microfrontends changes how paths are routed to your projects. If you encounter any issues, look at the [Testing & Troubleshooting](https://vercel.com/docs/microfrontends/troubleshooting) documentation or [learn how to debug routing on Vercel](https://vercel.com/kb/guide/debug-routing-on-vercel).
