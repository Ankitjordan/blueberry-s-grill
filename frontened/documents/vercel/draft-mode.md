Draft Mode

# Draft Mode

Last updated September 24, 2025

Draft Mode lets you view your unpublished headless CMS content on your website rendered with all the normal styling and layout that you would see once published.

Both [Next.js](/docs/frameworks/nextjs#draft-mode) and [SvelteKit](/docs/frameworks/sveltekit#draft-mode) support Draft Mode. Any framework that uses the [Build Output API](/docs/build-output-api/v3) can support Draft Mode by adding the `bypassToken` option to [prerender configuration](/docs/build-output-api/v3/primitives#prerender-functions).

Draft Mode was called Preview Mode before the release of Next.js
[13.4](https://nextjs.org/blog/next-13-4). The name was changed to avoid
confusion with [preview
deployments](/docs/deployments/environments#preview-environment-pre-production),
which is a different product.

You can use Draft Mode if you:

1. Use [Incremental Static Regeneration (ISR)](/docs/incremental-static-regeneration) to fetch and render data from a headless CMS
2. Want to view your unpublished headless CMS content on your site without rebuilding your pages when you make changes
3. Want to protect your unpublished content from being viewed publicly

## [How Draft Mode works](#how-draft-mode-works)

Draft Mode allows you to bypass [ISR](/docs/incremental-static-regeneration) caching to fetch the latest CMS content at request time. This is useful for seeing your draft content on your website without waiting for the cache to refresh, or manually revalidating the page.

The process works like this:

1. Each ISR route has a `bypassToken` configuration option, which is assigned a generated, cryptographically-secure value at build time
2. When someone visits an ISR route with a `bypassToken` configured, the page will check for a `__prerender_bypass` cookie
3. If the `__prerender_bypass` cookie exists and has the same value as the `bypassToken` your project is using, the visitor will view the page in Draft Mode

Only team members will be able to view pages in Draft Mode.

## [Getting started](#getting-started)

To use Draft Mode with Next.js on Vercel, you must:

1. [Enable ISR](/docs/incremental-static-regeneration) on pages that fetch content. Using ISR is required on pages that you want to view in Draft Mode
2. Add code to your ISR pages to detect when Draft Mode is enabled and render the draft content
3. Toggle Draft Mode in the Vercel Toolbar by selecting Draft Mode in [the toolbar menu](/docs/vercel-toolbar#using-the-toolbar-menu) to view your draft content. Once toggled, the toolbar will turn purple, indicating that Draft Mode is enabled

   app/page.tsx

   ```
   import { draftMode } from 'next/headers';

   async function getContent() {
     const { isEnabled } = await draftMode();

     const contentUrl = isEnabled
       ? 'https://draft.example.com'
       : 'https://production.example.com';

     // This line enables ISR, required for draft mode
     const res = await fetch(contentUrl, { next: { revalidate: 120 } });

     return res.json();
   }

   export default async function Page() {
     const { title, desc } = await getContent();

     return (
       <main>
         <h1>{title}</h1>
         <p>{desc}</p>
       </main>
     );
   }
   ```

   app/page.jsx

   ```
   import { draftMode } from 'next/headers';

   async function getContent() {
     const { isEnabled } = await draftMode();

     const contentUrl = isEnabled
       ? 'https://draft.example.com'
       : 'https://production.example.com';

     // This line enables ISR, required for draft mode
     const res = await fetch(contentUrl, { next: { revalidate: 120 } });

     return res.json();
   }

   export default async function Page() {
     const { title, desc } = await getContent();

     return (
       <main>
         <h1>{title}</h1>
         <p>{desc}</p>
       </main>
     );
   }
   ```

   pages/example.tsx

   ```
   export async function getStaticProps(context) {
     const url = context.draftMode
       ? 'https://draft.example.com'
       : 'https://production.example.com';
     const res = await fetch(url);
     return {
       props: {
         posts: await res.json(),
       },
       revalidate: 120,
     };
   }
   ```

   pages/example.jsx

   ```
   export async function getStaticProps(context) {
     const url = context.draftMode
       ? 'https://draft.example.com'
       : 'https://production.example.com';
     const res = await fetch(url);
     return {
       props: {
         posts: await res.json(),
       },
       revalidate: 120,
     };
   }
   ```

See the Next.js docs to learn how to use Draft Mode with self-hosted Next.js projects:

* [App Router](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)
* [Pages Router](https://nextjs.org/docs/pages/building-your-application/configuring/draft-mode)

Once implemented, team members can access Draft Mode from the Vercel Toolbar by selecting the eye icon . Once selected, the toolbar will turn purple to indicate that Draft Mode is enabled.

## [Sharing drafts](#sharing-drafts)

To share a draft URL, it must have the `?__vercel_draft=1` query parameter. For example:

```
https://my-site.com/blog/post-01?__vercel_draft=1
```

Viewers outside your Vercel team cannot enable Draft Mode or see your draft content, even with a draft URL.

---

[Previous

Comments](/docs/comments)[Next

Edit Mode](/docs/edit-mode)

Was this helpful?
