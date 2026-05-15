Menu

# Claiming Domain Ownership

Last updated February 26, 2026

If a domain is registered with another Vercel account and you need to take ownership of it, Vercel will automatically prompt you to verify DNS ownership when you try to add the domain. This allows you to claim the domain and transfer it to your team.

## [When claiming is required](#when-claiming-is-required)

When you add an existing domain via the Add Existing button on your team's Domains page, Vercel automatically checks if you already registered the domain with another Vercel account. If so, you'll be prompted to verify ownership before you can use it.

Use this flow when:

* You registered a domain with another Vercel account that you no longer have access to
* You need to transfer domain ownership between Vercel teams without access to the source team
* You've lost access to the original Vercel account but control the domain's DNS

If you have access to both Vercel accounts, consider using the [Move
feature](/docs/domains/working-with-domains/transfer-your-domain#transfer-a-domain-to-another-vercel-user-or-team)
instead, which is simpler and doesn't require DNS verification.

## [Getting started](#getting-started)

### [Prerequisites](#prerequisites)

* You must have permission to add domains on the target team
* You must have access to modify DNS records for the domain

### [Claim a domain](#claim-a-domain)

1. ### [Navigate to your team's Domains page](#navigate-to-your-team's-domains-page)

   Go to the [Domains section in your team dashboard sidebar](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fdomains&title=Go+to+team%27s+domains+page) and click Add Existing.
2. ### [Enter the domain name](#enter-the-domain-name)

   In the modal, enter the domain you want to add (for example, `example.com`) and click Continue.

   Vercel will check the domain's ownership status. If you registered the domain with another Vercel account, you'll be shown the claim verification step.
3. ### [Add the TXT record to your DNS](#add-the-txt-record-to-your-dns)

   You'll be shown a TXT record that you need to add to your domain's DNS configuration. The record will look similar to:

   | Type | Name | Value |
   | --- | --- | --- |
   | TXT | `_vercel.example.com` | `vc-domain-verify=...` |

   Add this record with your DNS provider.

   DNS changes can take a few minutes to propagate. If verification fails
   initially, wait a few minutes and try again.
4. ### [Verify and claim](#verify-and-claim)

   Once you've added the TXT record, click Verify & Claim to complete the ownership transfer. Vercel will check for the TXT record and, if found, transfer the domain to your team.

   After successful verification, you'll land on the domain's configuration page where you can manage DNS records and assign it to projects.

## [Troubleshooting](#troubleshooting)

### [TXT record not found](#txt-record-not-found)

If you receive a "TXT record not found" error, ensure that:

1. You've added the TXT record to the correct domain (check the verification domain shown in the modal)
2. The TXT record value matches exactly what was provided
3. Enough time has passed for DNS propagation (typically a few minutes, but can take up to 48 hours in some cases)

You can verify your TXT record has propagated using a DNS lookup tool or by running the following in your terminal:

terminal

```
dig TXT _vercel.example.com
```

---

[Previous

Assigning a Domain to a Git Branch](/docs/domains/working-with-domains/assign-domain-to-a-git-branch)[Next

Deploying & Redirecting Domains](/docs/domains/working-with-domains/deploying-and-redirecting)

Was this helpful?
