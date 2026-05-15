Menu

# Build Features for Customizing Deployments

Last updated March 17, 2026

Turbo build machines are now enabled by default for new Pro projects - [Learn
more](/docs/builds/managing-builds#larger-build-machines)

Vercel provides the following features to customize your deployments:

* [Private npm packages](#private-npm-packages)
* [Ignored files and folders](#ignored-files-and-folders)
* [Special paths](#special-paths)
* [Git submodules](#git-submodules)

## [Private npm packages](#private-npm-packages)

When your project's code is using private `npm` modules that require authentication, you need to perform an additional step to install private modules.

To install private `npm` modules, define `NPM_TOKEN` as an [Environment Variable](/docs/environment-variables) in your project. Alternatively, define `NPM_RC` as an [Environment Variable](/docs/environment-variables) in the contents of the project's npmrc config file that resides at the root of the project folder and is named `~/.npmrc`. This file defines the config settings of `npm` at the level of the project.

To learn more, check out the [guide here](/kb/guide/using-private-dependencies-with-vercel) if you need help configuring private dependencies.

## [Ignored files and folders](#ignored-files-and-folders)

Vercel ignores certain files and folders by default and prevents them from being uploaded during the deployment process for security and performance reasons. Please note that these ignored files are only relevant when using Vercel CLI.

ignored-files

```
.hg
.git
.gitmodules
.svn
.cache
.next
.now
.vercel
.npmignore
.dockerignore
.gitignore
.*.swp
.DS_Store
.wafpicke-*
.lock-wscript
.env.local
.env.*.local
.venv
.yarn/cache
npm-debug.log
config.gypi
node_modules
__pycache__
venv
CVS
```

A complete list of files and folders ignored by Vercel during the Deployment
process.

The `.vercel/output` directory is not ignored when [`vercel deploy --prebuilt`](/docs/cli/deploying-from-cli#deploying-from-local-build-prebuilt) is used to deploy a prebuilt Vercel Project, according to the [Build Output API](/docs/build-output-api/v3) specification.

You do not need to add any of the above files and folders to your
`.vercelignore` file because it is done automatically
by Vercel.

## [Special paths](#special-paths)

Vercel provides special pathnames for accessing deployment source and build logs.

All deployment URLs have two special pathnames to access the source code and the build logs:

* `/_src`
* `/_logs`

By default, these routes are protected so that they can only be accessed by you and the members of your Vercel Team.

![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fbuild-step%2Flogs-and-sources-light.png&w=3840&q=75)![](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fbuild-step%2Flogs-and-sources-dark.png&w=3840&q=75)

Build Logs and Source Protection is enabled by default.

### [Source View](#source-view)

By appending `/_src` to a Deployment URL or [Custom Domain](/docs/domains/add-a-domain) in your web browser, you will be redirected to the Deployment inspector and be able to browse the sources and [build](/docs/deployments/configure-a-build) outputs.

### [Logs View](#logs-view)

By appending `/_logs` to a Deployment URL or [Custom Domain](/docs/domains/add-a-domain) in your web browser, you can see a real-time stream of logs from your deployment build processes by clicking on the Build Logs accordion.

### [Security considerations](#security-considerations)

The pathnames `/_src` and `/_logs` redirect to `https://vercel.com` and require logging into your Vercel account to access any sensitive information. A third-party cannot access your source or build logs anonymously by crafting a deployment URL with one of these paths.

## [Git submodules](#git-submodules)

On Vercel, you can deploy [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) with a [Git provider](/docs/git) as long as the submodule is publicly accessible through the HTTP protocol. Git submodules that are private or requested over SSH will fail during the Build step. However, you can reference private repositories formatted as npm packages in your `package.json` file dependencies. Private repository modules require a special link syntax that varies according to the Git provider. For more information on this syntax, see "[How do I use private dependencies with Vercel?](/kb/guide/using-private-dependencies-with-vercel)".

---

[Previous

Builds](/docs/builds)[Next

Build Image](/docs/builds/build-image)

Was this helpful?
