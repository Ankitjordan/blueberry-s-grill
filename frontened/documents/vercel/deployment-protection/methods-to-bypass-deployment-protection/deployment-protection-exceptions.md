Menu

# Deployment Protection Exceptions

Deployment Protection Exceptions are available on [Enterprise plans](/docs/plans/enterprise)  or with the [Advanced Deployment Protection](/docs/security/deployment-protection#advanced-deployment-protection) add-on for [Pro plans](/docs/plans/pro-plan)

Deployment Protection Exceptions let you disable Deployment Protection (including [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication), [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection), and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)) for a list of preview domains.

When you add a domain to Deployment Protection Exceptions, it becomes publicly accessible and is no longer covered by Deployment Protection features. When you remove a domain from Deployment Protection Exceptions, the domain becomes protected again with the project's Deployment Protection settings.

![Deployment Protection Exceptions.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-exception-light.png&w=3840&q=75)![Deployment Protection Exceptions.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-exception-dark.png&w=3840&q=75)

Deployment Protection Exceptions.

Deployment Protection Exceptions is designed for Preview Deployment domains. If you wish to make a Production Deployment domain public, see [Configuring Deployment Protection](/docs/security/deployment-protection#configuring-deployment-protection).

## [Adding a Deployment Protection Exception](#adding-a-deployment-protection-exception)

1. ### [Go to project Deployment Protection settings](#go-to-project-deployment-protection-settings)

   From your Vercel [dashboard](/dashboard):

   1. Select the project that you wish to add an exception for
   2. Go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. ### [Select Add Domain in the Deployment Protection Exceptions section](#select-add-domain-in-the-deployment-protection-exceptions-section)

   From the Deployment Protection Exceptions section, select Add Domain:

   ![Add Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-exception-no-domain-light.png&w=3840&q=75)![Add Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-exception-no-domain-dark.png&w=3840&q=75)

   Add Deployment Protection Exception.
3. ### [Specify the domain to unprotect](#specify-the-domain-to-unprotect)

   From the Unprotect Domain modal:

   1. Enter the domain that you wish to unprotect in the input
   2. Select Continue![Add Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-protection-exceptions-add-domain-light.png&w=828&q=75)![Add Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-protection-exceptions-add-domain-dark.png&w=828&q=75)

   Add Deployment Protection Exception.
4. ### [Confirm the domain to unprotect](#confirm-the-domain-to-unprotect)

   From the Unprotect Domain modal:

   1. Confirm the domain by entering it again in the first input
   2. Enter `unprotect my domain` in the second input
   3. Select Confirm

   All your existing and future deployments for that domain will be unprotected.

   ![Add Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-protection-exceptions-confirm-add-light.png&w=828&q=75)![Add Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-protection-exceptions-confirm-add-dark.png&w=828&q=75)

   Add Deployment Protection Exception.

## [Removing a Deployment Protection Exception](#removing-a-deployment-protection-exception)

1. ### [Go to project Deployment Protection settings](#go-to-project-deployment-protection-settings)

   From your Vercel [dashboard](/dashboard):

   1. Select the project that you wish to remove an exception for
   2. Go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. ### [Select the domain to remove](#select-the-domain-to-remove)

   From the Deployment Protection Exceptions section:

   1. Find the domain row in the Unprotected Domains section
   2. Select the dot menu at the end of the row
   3. From the context menu, select Remove![Removing Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fremove-deployment-exception-light.png&w=3840&q=75)![Removing Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fremove-deployment-exception-dark.png&w=3840&q=75)

   Removing Deployment Protection Exception.
3. ### [Confirm the domain to remove](#confirm-the-domain-to-remove)

   From the Reprotect Domain modal:

   1. Enter the domain in the first input
   2. Enter `reprotect my domain` in the second input
   3. Select Confirm

   All your existing and future deployments for that domain will be protected.

   ![Removing Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-protection-exceptions-remove-light.png&w=828&q=75)![Removing Deployment Protection Exception.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Fsecurity%2Fdeployment-protection-exceptions-remove-dark.png&w=828&q=75)

   Removing Deployment Protection Exception.

## [Managing Deployment Protection Exceptions](#managing-deployment-protection-exceptions)

You can view and manage all the existing Deployment Protection Exceptions for your team in the following way:

1. From your [dashboard](/dashboard), go to [Deployment Protection](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection&title=Go+to+Deployment+Protection+settings) in the sidebar
2. Select the Access section in the sidebar
3. Select the All Access button and choose `Unprotected Previews`

![Dashboard > Settings > Deployment Protection > Access](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployments%2Fdeployment-protection-exceptions-list.png&w=3840&q=75)![Dashboard > Settings > Deployment Protection > Access](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fdeployments%2Fpreview-deployments%2Fdeployment-protection-exceptions-list-dark.png&w=3840&q=75)

Dashboard > Settings > Deployment Protection > Access

---

Was this helpful?
