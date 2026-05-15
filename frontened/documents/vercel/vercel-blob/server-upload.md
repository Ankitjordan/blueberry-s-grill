Menu

# Server Uploads with Vercel Blob

Last updated February 26, 2026

Vercel Blob is available on [all plans](/docs/plans)

Those with the [owner, member, developer](/docs/rbac/access-roles#owner, member, developer-role) role can access this feature

In this guide, you'll learn how to do the following:

* Use the Vercel dashboard to create a Blob store connected to a project
* Upload a file using the Blob SDK from the server

Vercel has a [4.5 MB request body size
limit](/docs/functions/runtimes#request-body-size) on Vercel Functions. If you
need to upload larger files, use [client
uploads](/docs/storage/vercel-blob/client-upload).

## [Prerequisites](#prerequisites)

Vercel Blob works with any frontend framework. First, install the package:

Terminal

```
pnpm i @vercel/blob
```

```
python -m venv .venv
source .venv/bin/activate
pip install vercel
```

1. ### [Create a Blob store](#create-a-blob-store)

   1. Go to your project's [Storage section in the sidebar](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fstores&title=Go+to+Storage)
   2. Select Create Database, then choose Blob
   3. Select Continue, then set the access to Private or Public
   4. Use the name "Images" and select Create a new Blob store
   5. Select the environments where you would like the read-write token to be included. You can also update the prefix of the Environment Variable in Advanced Options

   Once created, you are taken to the Vercel Blob store page.
2. ### [Prepare your local project](#prepare-your-local-project)

   Since you created the Blob store in a project, we automatically created and added the following Environment Variable to the project for you.

   * `BLOB_READ_WRITE_TOKEN`

   To use this Environment Variable locally, we recommend pulling it with the Vercel CLI:

   ```
   vercel env pull
   ```

Server uploads are perfectly fine as long as you do not need to upload files larger than [4.5 MB on Vercel](/docs/functions/runtimes#request-body-size). If you need to upload larger files, consider using [client uploads](/docs/storage/vercel-blob/client-upload).

## [Upload a file using Server Actions](#upload-a-file-using-server-actions)

The following example shows how to use a [Server Action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) with Next.js App Router to upload a file to Vercel Blob.

app/components/form.tsx

```
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function Form() {
  async function uploadImage(formData: FormData) {
    'use server';
    const imageFile = formData.get('image') as File;
    const blob = await put(imageFile.name, imageFile, {
      access: 'private' /* or 'public' */,
      addRandomSuffix: true,
    });
    revalidatePath('/');
    return blob;
  }

  return (
    <form action={uploadImage}>
      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/jpeg, image/png, image/webp"
        required
      />
      <button>Upload</button>
    </form>
  );
}
```

Read more about [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) and [App Router](https://nextjs.org/docs) on the Next.js documentation.

The following example shows how to upload a file to Vercel Blob from a Python server handler:

```
import os
from dotenv import load_dotenv
from vercel.blob import AsyncBlobClient, UploadProgressEvent

load_dotenv('.env.local') or load_dotenv()

def on_progress(e: UploadProgressEvent) -> None:
    print(f"progress: {e.loaded}/{e.total} bytes ({e.percentage}%)")

async def upload_avatar(form: dict) -> dict:
    client = AsyncBlobClient()

    blob = await client.put(
        f"avatars/{filename}",
        file_bytes,
        access="private",  # or "public",
        add_random_suffix=True,
        on_upload_progress=on_progress,
    )

    return {
        "url": blob.url,
        "pathname": blob.pathname,
    }
```

## [Upload a file using a server upload page and route](#upload-a-file-using-a-server-upload-page-and-route)

You can upload files to Vercel Blob using Route Handlers/API Routes. The following example shows how to upload a file to Vercel Blob using a server upload page and route.

1. ### [Create a server upload page](#create-a-server-upload-page)

   This page will upload files to your server. The files will then be sent to Vercel Blob.

   src/app/avatar/upload/page.tsx

   ```
   'use client';

   import type { PutBlobResult } from '@vercel/blob';
   import { useState, useRef } from 'react';

   export default function AvatarUploadPage() {
     const inputFileRef = useRef<HTMLInputElement>(null);
     const [blob, setBlob] = useState<PutBlobResult | null>(null);
     return (
       <>
         <h1>Upload Your Avatar</h1>

         <form
           onSubmit={async (event) => {
             event.preventDefault();

             if (!inputFileRef.current?.files) {
               throw new Error('No file selected');
             }

             const file = inputFileRef.current.files[0];

             const response = await fetch(
               `/api/avatar/upload?filename=${file.name}`,
               {
                 method: 'POST',
                 body: file,
               },
             );

             const newBlob = (await response.json()) as PutBlobResult;

             setBlob(newBlob);
           }}
         >
           <input
             name="file"
             ref={inputFileRef}
             type="file"
             accept="image/jpeg, image/png, image/webp"
             required
           />
           <button type="submit">Upload</button>
         </form>
         {blob && (
           <div>
             Blob url: <a href={blob.url}>{blob.url}</a>
           </div>
         )}
       </>
     );
   }
   ```

   app/avatar/upload/page.jsx

   ```
   'use client';

   import { useState, useRef } from 'react';

   export default function AvatarUploadPage() {
     const inputFileRef = useRef(null);
     const [blob, setBlob] = useState(null);
     return (
       <>
         <h1>Upload Your Avatar</h1>

         <form
           onSubmit={async (event) => {
             event.preventDefault();

             const file = inputFileRef.current.files[0];

             const response = await fetch(
               `/api/avatar/upload?filename=${file.name}`,
               {
                 method: 'POST',
                 body: file,
               },
             );

             const newBlob = await response.json();

             setBlob(newBlob);
           }}
         >
           <input
             name="file"
             ref={inputFileRef}
             type="file"
             accept="image/jpeg, image/png, image/webp"
             required
           />
           <button type="submit">Upload</button>
         </form>
         {blob && (
           <div>
             Blob url: <a href={blob.url}>{blob.url}</a>
           </div>
         )}
       </>
     );
   }
   ```

   pages/avatar/upload.tsx

   ```
   import type { PutBlobResult } from '@vercel/blob';
   import { useState, useRef } from 'react';

   export default function AvatarUploadPage() {
     const inputFileRef = useRef<HTMLInputElement>(null);
     const [blob, setBlob] = useState<PutBlobResult | null>(null);
     return (
       <>
         <h1>Upload Your Avatar</h1>

         <form
           onSubmit={async (event) => {
             event.preventDefault();

             if (!inputFileRef.current?.files) {
               throw new Error('No file selected');
             }

             const file = inputFileRef.current.files[0];

             const response = await fetch(
               `/api/avatar/upload?filename=${file.name}`,
               {
                 method: 'POST',
                 body: file,
               },
             );

             const newBlob = (await response.json()) as PutBlobResult;

             setBlob(newBlob);
           }}
         >
           <input
             name="file"
             ref={inputFileRef}
             type="file"
             accept="image/jpeg, image/png, image/webp"
             required
           />
           <button type="submit">Upload</button>
         </form>
         {blob && (
           <div>
             Blob url: <a href={blob.url}>{blob.url}</a>
           </div>
         )}
       </>
     );
   }
   ```

   pages/avatar/upload.jsx

   ```
   import { useState, useRef } from 'react';

   export default function AvatarUploadPage() {
     const inputFileRef = useRef(null);
     const [blob, setBlob] = useState(null);
     return (
       <>
         <h1>Upload Your Avatar</h1>

         <form
           onSubmit={async (event) => {
             event.preventDefault();

             const file = inputFileRef.current.files[0];

             const response = await fetch(
               `/api/avatar/upload?filename=${file.name}`,
               {
                 method: 'POST',
                 body: file,
               },
             );

             const newBlob = await response.json();

             setBlob(newBlob);
           }}
         >
           <input
             name="file"
             ref={inputFileRef}
             type="file"
             accept="image/jpeg, image/png, image/webp"
             required
           />
           <button type="submit">Upload</button>
         </form>
         {blob && (
           <div>
             Blob url: <a href={blob.url}>{blob.url}</a>
           </div>
         )}
       </>
     );
   }
   ```

   A minimal HTML upload form you can serve from a Python web framework:

   templates/upload.html

   ```
   <form method="post" enctype="multipart/form-data" action="/upload">
     <input type="file" name="file" />
     <button type="submit">Upload</button>
   </form>
   ```
2. ### [Create a server upload route](#create-a-server-upload-route)

   This route forwards the file to Vercel Blob and returns the URL of the uploaded file to the browser.

   src/app/api/avatar/upload/route.ts

   ```
   import { put } from '@vercel/blob';
   import { NextResponse } from 'next/server';

   export async function POST(request: Request): Promise<NextResponse> {
     const { searchParams } = new URL(request.url);
     const filename = searchParams.get('filename');

     const blob = await put(filename, request.body, {
       access: 'private' /* or 'public' */,
       addRandomSuffix: true,
     });

     return NextResponse.json(blob);
   }
   ```

   src/app/api/avatar/upload/route.js

   ```
   import { put } from '@vercel/blob';
   import { NextResponse } from 'next/server';

   export async function POST(request) {
     const { searchParams } = new URL(request.url);
     const filename = searchParams.get('filename');

     const blob = await put(filename, request.body, {
       access: 'private' /* or 'public' */,
       addRandomSuffix: true,
     });

     return NextResponse.json(blob);
   }
   ```

   pages/api/avatar/upload.ts

   ```
   import { put } from '@vercel/blob';
   import type { NextApiResponse, NextApiRequest, PageConfig } from 'next';

   export default async function handler(
     request: NextApiRequest,
     response: NextApiResponse,
   ) {
     const blob = await put(request.query.filename as string, request, {
       access: 'private' /* or 'public' */,
       addRandomSuffix: true,
     });

     return response.status(200).json(blob);
   }

   export const config: PageConfig = {
     api: {
       bodyParser: false,
     },
   };
   ```

   pages/api/avatar/upload.js

   ```
   import { put } from '@vercel/blob';

   export default async function handler(request, response) {
     const blob = await put(request.query.filename, request, {
       access: 'private' /* or 'public' */,
       addRandomSuffix: true,
     });

     return response.status(200).json(blob);
   }

   export const config = {
     api: {
       bodyParser: false,
     },
   };
   ```

   Example FastAPI route that accepts the upload and stores it in Vercel Blob:

   main.py

   ```
   from fastapi import FastAPI, UploadFile, File
   from vercel.blob import AsyncBlobClient

   app = FastAPI()

   @app.get("/avatar/upload", response_class=HTMLResponse)
   async def upload_page():
       """Serve a simple HTML upload form."""
       return """
       <form method="post" enctype="multipart/form-data" action="/upload">
         <input type="file" name="file" />
         <button type="submit">Upload</button>
       </form>
       """

   @app.post("/upload")
   async def upload_file(file: UploadFile = File(...)):
       """Handle file upload and store in Vercel Blob."""
       if not file:
           return {"error": "missing file"}

       client = AsyncBlobClient()
       data = await file.read()

       blob = await client.put(
           f"avatars/{file.filename}",
           data,
           access="private",  # or "public",
           add_random_suffix=True,
       )

       return {"url": blob.url, "pathname": blob.pathname}
   ```

### [Testing your page](#testing-your-page)

1. ### [Run your application locally](#run-your-application-locally)

   Run your application locally and visit `/avatar/upload` to upload the file to your store. The browser will display the unique URL created for the file.
2. ### [Review the Blob object metadata](#review-the-blob-object-metadata)

   * Go to the Vercel Project where you created the store
   * Open Storage in the sidebar and select your new store
   * Paste the blob object URL returned in the previous step in the Blob URL input box in the Browser section and select Lookup
   * The following blob object metadata will be displayed: file name, path, size, uploaded date, content type and HTTP headers
   * You also have the option to download and delete the file from this page

You have successfully uploaded an object to your Vercel Blob store and are able to review its metadata, download, and delete it from your Vercel Storage Dashboard.

## [Next steps](#next-steps)

* Learn how to [use the methods](/docs/storage/vercel-blob/using-blob-sdk) available with the `@vercel/blob` package

---

[Previous

Public Storage](/docs/vercel-blob/public-storage)[Next

Client Uploads](/docs/vercel-blob/client-upload)

Was this helpful?
