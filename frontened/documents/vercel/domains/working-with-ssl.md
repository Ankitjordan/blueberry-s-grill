Menu

# Working with SSL Certificates

Last updated March 5, 2026

An SSL certificate enables encrypted communication between user's browser and your web server to be encrypted. The certificate is installed on the web server and allows for website authentication and data encryption. This is particularly important if you are working with any sort of authentication and personal or financial data.

SSL certificates are issued from a certificate authority (CA) for each domain. While it is possible to [create and upload your own custom certificate](custom-SSL-certificate), Vercel will automatically try to generate a certificate for every domain once it is added to a project, regardless of if it was registered through Vercel or not. However, it will only work once the certificate validation request is successful, which happens once DNS records are added and propagated.

Vercel uses LetsEncrypt for certificates. For all non-wildcard domains, we use the [HTTP-01 challenge method](https://letsencrypt.org/docs/challenge-types/#http-01-challenge) and providing the request can make it to Vercel, then our infrastructure will deal with it.
For wildcard requests, we use the [DNS-01 challenge method](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge). This is why we require nameservers to be with Vercel to use wildcard domains - if the DNS isn't with us, we can't make the DNS record to approve it.

Issuing a certificate happens in the following way:

1. Vercel asks LetsEncrypt for a certificate for that domain and asks how it can prove control of the domain
2. Let's Encrypt reviews the domain and issues Vercel with a [challenge](https://letsencrypt.org/docs/challenge-types/) in order to authorise the certificate to be generated. This is usually in the format of creating a file or DNS record with a particular code.
3. Vercel creates that file with the code on the HTTP-01 or DNS-01 validation path and tells LetsEncrypt it's done
4. LetsEncrypt then check to see if the file is there and if they can see the file, they send us the certificate
5. Vercel then adds the certificate to our infrastructure and it then starts working on HTTPS

For information about when SSL certificate renewals happen, see [When is the SSL Certificate on my Vercel Domain renewed?](/kb/guide/renewal-of-ssl-certificates-with-a-vercel-domain)

The /.well-known path is reserved and cannot be redirected or rewritten. Only
Enterprise teams can configure custom SSL. [Contact sales](/contact/sales) to
learn more.

## [Troubleshooting](#troubleshooting)

To learn more about common SSL issues, see the [troubleshooting](/docs/domains/troubleshooting#common-ssl-certificate-issues) doc.

## [Related](#related)

[#### Domains overview

Learn the concepts behind how domains work](/docs/domains)

[#### Working with Domains

Learn how domains work and the options Vercel provides for managing them.](/docs/domains/working-with-domains)

[#### Working with DNS

Learn how DNS works in order to properly configure your domain.](/docs/domains/working-with-dns)

[#### Working with Nameservers

Learn about nameservers and the benefits Vercel nameservers provide.](/docs/domains/working-with-nameservers)

[#### Troubleshooting Domains

Learn about common reasons for domain misconfigurations and how to
troubleshoot your domain on Vercel.](/docs/domains/troubleshooting)

---

[Previous

Managing Nameservers](/docs/domains/managing-nameservers)[Next

Custom SSL Certificates](/docs/domains/custom-SSL-certificate)

Was this helpful?
