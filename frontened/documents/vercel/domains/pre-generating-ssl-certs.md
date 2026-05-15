Menu

# Pre-Generate SSL Certificates

Last updated November 25, 2025

This page is part the domains transfer experience. See [this
page](/docs/domains/working-with-domains/transfer-your-domain#transfer-a-domain-to-vercel)
for the full set of steps to transfer a domain to Vercel.

This article guides you through all the steps necessary to set up SSL certificates for a domain
being migrated to Vercel without downtime. Your domain should be serving content from 3rd party
servers that are unrelated to Vercel, and you need to be prepared to make the necessary
DNS changes.

You can do this using either the Vercel Domains dashboard, or the [Vercel CLI](/docs/cli/certs).

## [Generating a Certificate](#generating-a-certificate)

In order to issue certificates through the dashboard for a domain, first ensure the domain belongs to a team. You can then click into the domain management page,
scroll down to "SSL Certificates" and click "Pre-generate SSL certificates". Please note this option is only available if you do not already
have any SSL certificates issued for the domain.

![Pre-Generate button found under the SSL Certificates section of the Domain configuration page](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdomains%2Fssl-pregen-light.png&w=3840&q=75)![Pre-Generate button found under the SSL Certificates section of the Domain configuration page](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdomains%2Fssl-pregen-dark.png&w=3840&q=75)

Pre-Generate button found under the SSL Certificates section of the Domain configuration page

If you choose to do this through the terminal, you can run the following command to get the challenge records for your domain:

terminal

```
vercel certs issue "*.example.com" example.com --challenge-only
```

Creating the challenge for the certificate that will be used for \*.example.com
and example.com.

## [Setting your DNS records and finalizing](#setting-your-dns-records-and-finalizing)

In order to verify ownership of your domain, copy the TXT records into your DNS on the registrar you are using.

Click "Verify" to verify that the records have been set and issue the certificate. DNS records can take time to propagate,
so if it doesn't work immediately, it's worth waiting for the records to propagate before taking further action.

![Copy certificates modal containing the TXT records to copy into your DNS registrar](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdomains%2Fcopy-challenges-light.png&w=750&q=75)![Copy certificates modal containing the TXT records to copy into your DNS registrar](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fdomains%2Fcopy-challenges-dark.png&w=750&q=75)

Copy certificates modal containing the TXT records to copy into your DNS registrar

To check whether the TXT records have propagated, you can use the following command in a terminal of your choice:

terminal

```
nslookup -type=TXT example.com
```

Looking up the TXT records for example.com

Once TXT records have propagated, you can click "Verify" to issue the SSL certificates.

If you choose to issue SSL certificates through the terminal, you can run the command previously used without the
`--challenge-only` flag:

terminal

```
vercel certs issue "*.example.com" example.com
```

Issuing a certificate that covers both \*.example.com and example.com.

## [Verifying the Certificate](#verifying-the-certificate)

Before you change the DNS records of your domain, you can verify if the certificate is correct and will be accepted by browsers. Run the following command:

terminal

```
curl https://example.com --resolve example.com:443:76.76.21.21 -I
```

curl command that sends a request directly to Vercel, ignoring the DNS
configuration of the domain.

If the request is successful, the certificate is working and you can proceed with the migration.

## [Finishing connecting your domain to Vercel](#finishing-connecting-your-domain-to-vercel)

To migrate your deployment to Vercel, add the provided A or CNAME record from your project’s Domain Settings page to your DNS configuration so your domain points to Vercel webservers.
See [this detailed guide](/kb/guide/a-record-and-caa-with-vercel) on using domains with A records for more information.

For more details on performing a migration, see [this guide](/docs/domains/managing-dns-records#migrating-dns-records-from-an-external-registrar).

---

[Previous

Custom SSL Certificates](/docs/domains/custom-SSL-certificate)[Next

Supported Domains](/docs/domains/supported-domains)

Was this helpful?
