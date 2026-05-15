Menu

# Managing the visibility of the Vercel Toolbar

Last updated July 18, 2025

Vercel Toolbar is available on [all plans](/docs/plans)

## [Viewing the toolbar](#viewing-the-toolbar)

When the toolbar is enabled, you'll be able to view it on any preview or enabled environment. By default, the toolbar will appear as a circle with a menu icon. Clicking activates it, at which point you will see any comments on the page and notifications for issues detected by tools running in the background. When the toolbar has not been activated it will show a small Vercel icon over the menu icon.

Once a tool is used, the toolbar will show a second icon next to the menu, so you can access your most recently used tool.

## [Enable or disable the toolbar team-wide](#enable-or-disable-the-toolbar-team-wide)

To disable the toolbar by default for all projects in your team:

1. Navigate to [your Vercel dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard) and make sure that you have selected your team from the team switcher.
2. From your [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), open Settings in the sidebar.
3. In the General section, find Vercel Toolbar.
4. Under each environment (Preview and Production), select either On or Off from the dropdown to determine the visibility of the Vercel Toolbar for that environment.
5. You can optionally choose to allow the setting to be overridden at the project level.

![The dashboard setting to enable or disable the toolbar at the team level.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fteam-level-toolbar-management-light.png&w=1920&q=75)![The dashboard setting to enable or disable the toolbar at the team level.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fteam-level-toolbar-management-dark.png&w=1920&q=75)

The dashboard setting to enable or disable the toolbar at the team level.

## [Enable or disable the toolbar project-wide](#enable-or-disable-the-toolbar-project-wide)

To disable the toolbar project-wide:

1. From your [dashboard](/dashboard), select the project you want to enable or disable Vercel Toolbar for.
2. Navigate to [General](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fgeneral&title=Go+to+General+settings) in Settings.
3. Find Vercel Toolbar.
4. Under each environment (Preview and Production), select either an option from the dropdown to determine the visibility of Vercel Toolbar for that environment. The options are:
   * Default: Respect team-level visibility settings.
   * On: Enable the toolbar for the environment.
   * Off: Disable the toolbar for the environment.

![The dashboard setting to enable or disable the toolbar in a project.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fproject-level-toolbar-management-light.png&w=1920&q=75)![The dashboard setting to enable or disable the toolbar in a project.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fproject-level-toolbar-management-dark.png&w=1920&q=75)

The dashboard setting to enable or disable the toolbar in a project.

## [Disable toolbar for session](#disable-toolbar-for-session)

To disable the toolbar in the current browser tab:

1. Activate the Vercel Toolbar by clicking on it
2. In the toolbar menu, scroll down the list and select Disable for Session.

To show the toolbar again, open a new browser session.

Alternatively, you can also hide the toolbar in any of the following ways:

* Select the toolbar icon and drag it to the X that appears at the bottom of the screen.
* Click the [browser extension](/docs/vercel-toolbar/browser-extension) icon if you have it pinned to your browser bar.
* Use `.`.

To show the toolbar when it is hidden you can use that same key command or click the browser extension.

Users with the browser extension can set the toolbar to start hidden by toggling on Start Hidden in Preferences from the Toolbar menu.

## [Disable toolbar for automation](#disable-toolbar-for-automation)

You can use the `x-vercel-skip-toolbar` header to prevent interference with automated end-to-end tests:

1. Add the `x-vercel-skip-toolbar` header to the request sent to [the preview deployment URL](/docs/deployments/environments#preview-environment-pre-production#preview-urls)
2. Optionally, you can assign the value `1` to the header. However, presence of the header itself triggers Vercel to disable the toolbar

## [Enable or disable the toolbar for a specific branch](#enable-or-disable-the-toolbar-for-a-specific-branch)

You can use Vercel's [preview environment variables](/docs/environment-variables#preview-environment-variables) to manage the toolbar for specific branches or environments

To enable the toolbar for an individual branch, add the following to the environment variables for the desired preview branch:

.env

```
VERCEL_PREVIEW_FEEDBACK_ENABLED=1
```

To disable the toolbar for an individual branch, set the above environment variable's value to `0`:

.env

```
VERCEL_PREVIEW_FEEDBACK_ENABLED=0
```

## [Using the toolbar with a custom alias domain](#using-the-toolbar-with-a-custom-alias-domain)

To use the toolbar with preview deployments that have [custom alias domains](/docs/domains/add-a-domain), you must opt into the toolbar explicitly in your project settings on [the dashboard](/dashboard).

## [Using a Content Security Policy](#using-a-content-security-policy)

If you have a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP) configured, you may need to adjust the CSP to enable access to the Vercel Toolbar or Comments.

You can make the following adjustments to the `Content-Security-Policy` [response header](/docs/headers/cache-control-headers#custom-response-headers):

* Add the following to `script-src` (Most commonly used):

  ```
    script-src https://vercel.live
  ```
* Add the following to `connect-src`:

  ```
    connect-src https://vercel.live wss://ws-us3.pusher.com
  ```
* Add the following to `img-src`:

  ```
    img-src https://vercel.live https://vercel.com data: blob:
  ```
* Add the following to `frame-src`:

  ```
    frame-src https://vercel.live
  ```
* Add the following to `style-src`:

  ```
    style-src https://vercel.live 'unsafe-inline'
  ```
* Add the following to `font-src`:

  ```
    font-src https://vercel.live https://assets.vercel.com
  ```

---

[Previous

Add to Environments](/docs/vercel-toolbar/in-production-and-localhost)[Next

Browser Extensions](/docs/vercel-toolbar/browser-extension)

Was this helpful?
