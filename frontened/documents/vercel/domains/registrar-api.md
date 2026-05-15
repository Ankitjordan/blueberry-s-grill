Menu

# Programmatic Domain Management

Last updated October 8, 2025

The domains registrar API enables you to programmatically manage your domain lifecycle from search to renewal.

## [Getting started with the API](#getting-started-with-the-api)

You can start using the REST API by:

1. [Creating a token](https://vercel.com/docs/rest-api/reference/welcome#creating-an-access-token)
2. Using the token in either of the following ways:

   * Use the [Vercel SDK](https://vercel.com/docs/rest-api/reference/sdk)

   In the following example, use the Vercel SDK to get the supported TLDs.

   index.ts

   ```
   import { Vercel } from '@vercel/sdk';

   const vercel = new Vercel({
     bearerToken: '<YOUR_BEARER_TOKEN_HERE>',
   });

   const result = await vercel.domainsRegistrar.getSupportedTlds();
   ```

   * Use the language of your choice by calling the endpoints directly and providing your token.

   In the following example, we use `cURL` to get the supported TLDs.

   terminal

   ```
   curl --request GET \
     --url https://api.vercel.com/v1/registrar/tlds/supported \
     --header 'Authorization: Bearer <token>'
   ```

You can use the domains registrar API to do the following:

### [Catalog & pricing](#catalog-&-pricing)

* [List all supported top-level domains (TLDs)](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-supported-tlds)
* [Get pricing for specific TLDs](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-tld-price-data)
* [Retrieve per-domain pricing information](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain)

### [Availability](#availability)

* [Check single domain availability](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-availability-for-a-domain)
* [Perform bulk availability checks for multiple domains](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-availability-for-multiple-domains)

### [Orders & purchases](#orders-&-purchases)

* [Purchase a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-a-domain)
* [Execute bulk domain purchases](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-multiple-domains)
* [Fetch order status by ID](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domain-order)

### [Transfers](#transfers)

* [Retrieve authorization codes for domain transfers](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-the-auth-code-for-a-domain)
* [Initiate domain transfers to Vercel](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain)
* [Track transfer status and completion](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-a-domains-transfer-status)

### [Management](#management)

* [Renew domains before expiration](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/renew-a-domain)
* [Enable or disable automatic renewal](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain)
* [Update nameserver configurations](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain)
* [Fetch TLD-specific contact information schemas](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema)

## [Deprecations and migration](#deprecations-and-migration)

The following legacy domains API endpoints are now deprecated and will be sunset on November 8, 2025:

* [Purchase a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated)
* [Check the price for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-the-price-for-a-domain-deprecated)
* [Check a Domain Availability](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-a-domain-availability-deprecated)
* [Get domain transfer info](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated)

If you are currently using the Vercel CLI for domain purchases, pricing, or availability, upgrade to CLI version `48.2.8` or later.

---

[Previous

Set Up Custom Domain](/docs/domains/set-up-custom-domain)[Next

Notifications](/docs/notifications)

Was this helpful?
