Menu

# vercel blob

Last updated March 17, 2026

The `vercel blob` command is used to interact with [Vercel Blob](/docs/storage/vercel-blob) storage, providing functionality to upload, download, list, delete, and copy files in [public](/docs/storage/vercel-blob/public-storage) and [private](/docs/storage/vercel-blob/private-storage) stores, as well as manage Blob stores.

For more information about Vercel Blob, see the [Vercel Blob documentation](/docs/storage/vercel-blob) and [Vercel Blob SDK reference](/docs/storage/vercel-blob/using-blob-sdk).

## [Usage](#usage)

The `vercel blob` command supports the following operations:

* [`list`](#list-ls) - List all files in the Blob store
* [`put`](#put) - Upload a file to the Blob store
* [`del`](#del) - Delete a file from the Blob store
* [`copy`](#copy-cp) - Copy a file in the Blob store
* [`get`](#get) - Download a blob from the Blob store
* [`create-store`](#create-store) - Create a new Blob store
* [`delete-store`](#delete-store) - Delete a Blob store
* [`get-store`](#get-store) - Get a Blob store
* [`list-stores`](#list-stores-ls-stores) - List all Blob stores
* [`empty-store`](#empty-store) - Delete all blobs in a Blob store

For authentication, the CLI reads the `BLOB_READ_WRITE_TOKEN` value from your env file or you can use the [`--rw-token` option](#rw-token).

### [list (ls)](#list-ls)

terminal

```
vercel blob list
```

Using the `vercel blob list` command to list all files
in the Blob store.

### [put](#put)

terminal

```
vercel blob put [path-to-file] --access private
```

Using the `vercel blob put` command to upload a file to
the Blob store.

### [del](#del)

terminal

```
vercel blob del [url-or-pathname]
```

Using the `vercel blob del` command to delete a file
from the Blob store.

### [copy (cp)](#copy-cp)

terminal

```
vercel blob copy [from-url-or-pathname] [to-pathname] --access private
```

Using the `vercel blob copy` command to copy a file in
the Blob store.

### [get](#get)

terminal

```
vercel blob get [url-or-pathname] --access private
```

Using the `vercel blob get` command to download a blob.
Works with both [public](/docs/storage/vercel-blob/public-storage) and
[private](/docs/storage/vercel-blob/private-storage) stores.
Content is printed to stdout by default, or saved to a file with
`--output`.

### [create-store](#create-store)

terminal

```
vercel blob create-store [name] --access <access> [--region <region>] [--yes] [--environment <env>]
```

Using the `vercel blob create-store` command to create a new
Blob store. The default region is set to `iad1` when not specified.
Use `--yes` to auto-connect to the linked project (defaults
to all environments). Use `--environment` to specify which environments
to connect (repeatable).

### [delete-store](#delete-store)

terminal

```
vercel blob delete-store [store-id] [--yes]
```

Using the `vercel blob delete-store` command to delete
a Blob store. Use `--yes` to skip the confirmation
prompt in CI environments.

### [get-store](#get-store)

terminal

```
vercel blob get-store [store-id]
```

Using the `vercel blob get-store` command to get a Blob
store.

### [list-stores (ls-stores)](#list-stores-ls-stores)

terminal

```
vercel blob list-stores [--all]
```

Using the `vercel blob list-stores` command to list all
Blob stores. When run in a linked project directory, only stores connected to
that project are shown. Use `--all` to list all team
stores regardless of project. In a terminal, an interactive selector lets you
browse store details.

### [empty-store](#empty-store)

terminal

```
vercel blob empty-store [store-id] [--yes]
```

Using the `vercel blob empty-store` command to delete
all blobs in a Blob store. Use `--yes` to skip the
confirmation prompt in CI environments.

## [Unique Options](#unique-options)

These are options that only apply to the `vercel blob` command.

### [Rw token](#rw-token)

You can use the `--rw-token` option to specify your Blob read-write token.

terminal

```
vercel blob put image.jpg --rw-token [rw-token]
```

Using the `vercel blob put` command with the
`--rw-token` option.

### [Limit](#limit)

You can use the `--limit` option to specify the number of results to return per page when using `list`. The default value is `10` and the maximum is `1000`.

terminal

```
vercel blob list --limit 100
```

Using the `vercel blob list` command with the
`--limit` option.

### [Cursor](#cursor)

You can use the `--cursor` option to specify the cursor from a previous page to start listing from.

terminal

```
vercel blob list --cursor [cursor-value]
```

Using the `vercel blob list` command with the
`--cursor` option.

### [Prefix](#prefix)

You can use the `--prefix` option to filter Blobs by a specific prefix.

terminal

```
vercel blob list --prefix images/
```

Using the `vercel blob list` command with the
`--prefix` option.

### [Mode](#mode)

You can use the `--mode` option to filter Blobs by either folded or expanded mode. The default is `expanded`.

terminal

```
vercel blob list --mode folded
```

Using the `vercel blob list` command with the
`--mode` option.

### [Add Random Suffix](#add-random-suffix)

You can use the `--add-random-suffix` option to add a random suffix to the file name when using `put` or `copy`.

terminal

```
vercel blob put image.jpg --add-random-suffix
```

Using the `vercel blob put` command with the
`--add-random-suffix` option.

### [Pathname](#pathname)

You can use the `--pathname` option to specify the pathname to upload the file to. The default is the filename.

terminal

```
vercel blob put image.jpg --pathname assets/images/hero.jpg
```

Using the `vercel blob put` command with the
`--pathname` option.

### [Content Type](#content-type)

You can use the `--content-type` option to overwrite the content-type when using `put` or `copy`. It will be inferred from the file extension if not provided.

terminal

```
vercel blob put data.txt --content-type application/json
```

Using the `vercel blob put` command with the
`--content-type` option.

### [Cache Control Max Age](#cache-control-max-age)

You can use the `--cache-control-max-age` option to set the `max-age` of the cache-control header directive when using `put` or `copy`. The default is `2592000` (30 days).

terminal

```
vercel blob put image.jpg --cache-control-max-age 86400
```

Using the `vercel blob put` command with the
`--cache-control-max-age` option.

### [Allow Overwrite](#allow-overwrite)

You can use the `--allow-overwrite` option to overwrite the file if it already exists when uploading. The default is `false`.

terminal

```
vercel blob put image.jpg --allow-overwrite
```

Using the `vercel blob put` command with the
`--allow-overwrite` option.

### [Multipart](#multipart)

You can use the `--multipart` option to upload the file in multiple small chunks for performance and reliability. The default is `true`.

terminal

```
vercel blob put large-file.zip --multipart false
```

Using the `vercel blob put` command with the
`--multipart` option.

### [Region](#region)

You can use the `--region` option to specify the region where your Blob store should be created. The default is `iad1`. This option is only applicable when using the `create-store` command.

terminal

```
vercel blob create-store my-store --region sfo1
```

Using the `vercel blob create-store` command with the `--region` option.

### [Access](#access)

The `--access` option is required and specifies whether the store or blob should use [public](/docs/storage/vercel-blob/public-storage) or [private](/docs/storage/vercel-blob/private-storage) storage. This option applies to the `put`, `copy`, `get`, and `create-store` commands.

terminal

```
vercel blob put image.jpg --access private
```

Using the `vercel blob put` command with the
`--access` option.

### [Output](#output)

You can use the `--output` option to save the blob content to a file instead of printing it to stdout. This option only applies to the `get` command.

terminal

```
vercel blob get image.jpg --output ./local-image.jpg
```

Using the `vercel blob get` command with the
`--output` option.

### [If Match](#if-match)

You can use the `--if-match` option to only perform the operation if the blob's ETag matches the provided value. This option applies to the `put`, `del`, and `copy` commands.

terminal

```
vercel blob put image.jpg --if-match "etag-value"
```

Using the `vercel blob put` command with the
`--if-match` option.

### [If None Match](#if-none-match)

You can use the `--if-none-match` option to only return content if the blob's ETag does not match the provided value. If unchanged, the server returns a 304 response. This option applies to the `get` command.

terminal

```
vercel blob get image.jpg --if-none-match "etag-value"
```

Using the `vercel blob get` command with the
`--if-none-match` option.

## [Global Options](#global-options)

The following [global options](/docs/cli/global-options) can be passed when using the `vercel blob` command:

* [`--cwd`](/docs/cli/global-options#current-working-directory)
* [`--debug`](/docs/cli/global-options#debug)
* [`--global-config`](/docs/cli/global-options#global-config)
* [`--help`](/docs/cli/global-options#help)
* [`--local-config`](/docs/cli/global-options#local-config)
* [`--no-color`](/docs/cli/global-options#no-color)
* [`--scope`](/docs/cli/global-options#scope)
* [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

---

[Previous

vercel bisect](/docs/cli/bisect)[Next

vercel build](/docs/cli/build)

Was this helpful?
