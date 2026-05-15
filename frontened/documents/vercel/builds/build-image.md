Menu

# Build image overview

Last updated March 17, 2026

Turbo build machines are now enabled by default for new Pro projects - [Learn
more](/docs/builds/managing-builds#larger-build-machines)

When you initiate a deployment, Vercel will [build your project](/docs/builds) within a container using the build image.
Vercel supports [multiple runtimes](/docs/functions/runtimes).

| Runtime | [Build image](/docs/builds/build-image) |
| --- | --- |
| [Node.js](/docs/functions/runtimes/node-js) | `24.x` `22.x` `20.x` |
| [Edge](/docs/functions/runtimes/edge-runtime) |  |
| [Python](/docs/functions/runtimes/python) | `3.12` |
| [Ruby](/docs/functions/runtimes/ruby) | `3.3.x` |
| [Go RuntimeGo](/docs/functions/runtimes/go) |  |
| [Community Runtimes](/docs/functions/runtimes#community-runtimes) |  |

The build image uses [Amazon Linux 2023](https://aws.amazon.com/linux/amazon-linux-2023/) as its base image.

## [Pre-installed packages](#pre-installed-packages)

The following packages are pre-installed in the build image with `dnf`, the default package manager for Amazon Linux 2023.

|  |  |  |
| --- | --- | --- |
| `alsa-lib` | `at-spi2-atk` | `atk` |
| `autoconf` | `automake` | `brotli` |
| `bsdtar` | `bzip2` | `bzip2-devel` |
| `cups-libs` | `expat-devel` | `gcc` |
| `gcc-c++` | `git` | `glib2-devel` |
| `glibc-devel` | `gtk3` | `gzip` |
| `ImageMagick-devel` | `iproute` | `java-11-amazon-corretto-headless` |
| `libXScrnSaver` | `libXcomposite` | `libXcursor` |
| `libXi` | `libXrandr` | `libXtst` |
| `libffi-devel` | `libglvnd-glx` | `libicu` |
| `libjpeg` | `libjpeg-devel` | `libpng` |
| `libpng-devel` | `libstdc++` | `libtool` |
| `libwebp-tools` | `libzstd-devel` | `make` |
| `nasm` | `ncurses-libs` | `ncurses-compat-libs` |
| `openssl` | `openssl-devel` | `openssl-libs` |
| `pango` | `procps` | `perl` |
| `readline-devel` | `ruby-devel` | `strace` |
| `sysstat` | `tar` | `unzip` |
| `which` | `zlib-devel` | `zstd` |

You can install these packages using the [`dnf`](https://dnf.readthedocs.io/) package manager with the following command:

terminal

```
dnf alsa-lib at-spi2-atk atk autoconf automake brotli bsdtar bzip2 bzip2-devel cups-libs expat-devel gcc gcc-c++ git glib2-devel glibc-devel gtk3 gzip ImageMagick-devel iproute java-11-amazon-corretto-headless libXScrnSaver libXcomposite libXcursor libXi libXrandr libXtst libffi-devel libglvnd-glx libicu libjpeg libjpeg-devel libpng libpng-devel libstdc++ libtool libwebp-tools libzstd-devel make nasm ncurses-libs ncurses-compat-libs openssl openssl-devel openssl-libs pango procps perl readline-devel ruby-devel strace sysstat tar unzip which zlib-devel zstd --yes
```

## [Running the build image locally](#running-the-build-image-locally)

Vercel does not provide the build image itself, but you can use the Amazon Linux 2023 base image to test things locally:

terminal

```
docker run --rm -it amazonlinux:2023.2.20231011.0 sh
```

When you are done, run `exit` to return.

## [Installing additional packages](#installing-additional-packages)

You can install additional packages into the build container by configuring the [Install Command](/docs/deployments/configure-a-build#install-command) within the dashboard or the [`"installCommand"`](/docs/project-configuration#installcommand) in your `vercel.json` to use any of the following commands.

The build image includes access to repositories with stable versions of popular packages. You can list all packages with the following command:

terminal

```
dnf list
```

You can search for a package by name with the following command:

terminal

```
dnf search my-package-here
```

You can install a package by name with the following command:

terminal

```
dnf install -y my-package-here
```

---

[Previous

Build Features](/docs/builds/build-features)[Next

Build Queues](/docs/builds/build-queues)

Was this helpful?
