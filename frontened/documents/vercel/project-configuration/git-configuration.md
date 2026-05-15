Menu

# Git Configuration

Last updated December 19, 2025

The following configuration options can be used through a `vercel.json` file via [Static Configuration](/docs/project-configuration/vercel-json) or a `vercel.ts` file via [Programmatic Configuration](/docs/project-configuration/vercel-ts).

## [git.deploymentEnabled](#git.deploymentenabled)

Type: `Object` of key branch identifier `String` and value `Boolean`, or `Boolean`.

Default: `true`

Specify branches that should not trigger a deployment upon commits. By default, any unspecified branch is set to `true`.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": {
      "dev": false
    }
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  git: {
    deploymentEnabled: {
      dev: false,
    },
  },
};
```

### [Matching multiple branches](#matching-multiple-branches)

Use [minimatch syntax](https://github.com/isaacs/minimatch) to define behavior for multiple branches.

The example below prevents automated deployments for any branch that starts with `internal-`.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": {
      "internal-*": false
    }
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  git: {
    deploymentEnabled: {
      'internal-*': false,
    },
  },
};
```

### [Branches matching multiple rules](#branches-matching-multiple-rules)

If a branch matches multiple rules and at least one rule is `true`, a deployment will occur.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": {
      "experiment-*": false,
      "*-dev": true
    }
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  git: {
    deploymentEnabled: {
      'experiment-*': false,
      '*-dev': true,
    },
  },
};
```

A branch named `experiment-my-branch-dev` will create a deployment.

### [Turning off all automatic deployments](#turning-off-all-automatic-deployments)

To turn off automatic deployments for all branches, set the property value to `false`.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  git: {
    deploymentEnabled: false,
  },
};
```

## [github.autoAlias](#github.autoalias)

Type: `Boolean`.

When set to `false`, [Vercel for GitHub](/docs/git/vercel-for-github) will create preview deployments upon merge.

Follow the [deploying a staged production
build](/docs/deployments/promoting-a-deployment#staging-and-promoting-a-production-deployment)
workflow instead of this setting.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "github": {
    "autoAlias": false
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  github: {
    autoAlias: false,
  },
};
```

## [github.autoJobCancelation](#github.autojobcancelation)

Type: `Boolean`.

When set to false, [Vercel for GitHub](/docs/git/vercel-for-github) will always build pushes in sequence without cancelling a build for the most recent commit.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "github": {
    "autoJobCancelation": false
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  github: {
    autoJobCancelation: false,
  },
};
```

## [Legacy](#legacy)

### [github.silent](#github.silent)

The `github.silent` property has been deprecated in favor of the new settings in the dashboard, which allow for more fine-grained control over which comments appear on your connected Git repositories. These settings can be found in [the Git section of your project's settings](/docs/git/vercel-for-github#silence-github-comments).

Type: `Boolean`.

When set to `true`, [Vercel for GitHub](/docs/git/vercel-for-github) will stop commenting on pull requests and commits.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "github": {
    "silent": true
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  github: {
    silent: true,
  },
};
```

### [github.enabled](#github.enabled)

The `github.enabled` property has been deprecated in favor of [git.deploymentEnabled](/docs/project-configuration/git-configuration#git.deploymentenabled), which allows you to disable auto-deployments for your project.

Type: `Boolean`.

When set to `false`, [Vercel for GitHub](/docs/git/vercel-for-github) will not deploy the given project regardless of the GitHub app being installed.

vercel.json

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "github": {
    "enabled": false
  }
}
```

vercel.ts

```
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  github: {
    enabled: false,
  },
};
```

---

[Previous

Project Settings](/docs/project-configuration/project-settings)[Next

Git Settings](/docs/project-configuration/git-settings)

Was this helpful?
