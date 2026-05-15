Menu

# Removing a Domain from a Project

Last updated February 27, 2026

When you add a domain to any project, it will be connected to your account until you choose to delete it. This guide demonstrates how to remove a domain from a Project and from your account completely.

1. ### [Navigate to the Domains tab](#navigate-to-the-domains-tab)

   To remove a domain that is assigned to a project, open [Domains](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdomains&title=Go+to+Domains+Settings) in the sidebar from the Project Overview and click the More Options button for the domain you want to remove.
2. ### [Click remove button](#click-remove-button)

   Once the • • • menu button has been clicked, you will be presented with further options. Click the Delete menu button to remove the domain from the project.
3. ### [Remove domain from your account](#remove-domain-from-your-account)

   Optionally, if you wish to remove a domain from all Projects, as well as your Account, navigate to the Domains section of your dashboard. In the list of all the domains under your account, find the domain you wish to remove. Then, from the context menu, click the Delete menu item.

   ![Option to delete domain(s) from the Domains tab.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Fremove-domains.png&w=1920&q=75)![Option to delete domain(s) from the Domains tab.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Fremove-domains-dark.png&w=1920&q=75)

   Option to delete domain(s) from the Domains tab.

   If the domain was purchased through Vercel, you must first wait for the domain
   to expire before you can remove it from your account.

## [Using cURL](#using-curl)

To remove a domain from a project using cURL, you can use the following command. To create an Authorization Bearer token, see the [access token](/docs/rest-api/reference/welcome#creating-an-access-token) section of the API documentation.

cURL

```
curl --request DELETE \
  --url https://api.vercel.com/v9/projects/<project-id-or-name>/domains/<domain-name> \
  --header "Authorization: Bearer $VERCEL_TOKEN"
```

---

[Previous

Deploying & Redirecting Domains](/docs/domains/working-with-domains/deploying-and-redirecting)[Next

Renewing a Domain](/docs/domains/working-with-domains/renew-a-domain)

Was this helpful?
