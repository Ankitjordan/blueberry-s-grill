Menu

# Managing Nameservers

Last updated February 27, 2026

[Nameservers](/docs/domains/working-with-nameservers) are used to resolve domain names to IP addresses. For domains with Vercel as the registrar, nameservers can be viewed, edited, and reset by selecting the domain from the [Domains section in your team dashboard sidebar](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fdomains&title=Go+to+team%27s+domains+page).

Sometimes, however, you may need to delegate nameserver management to another host. For domains registered with Vercel, you can [add custom nameservers](#add-custom-nameservers) to your Vercel-hosted domain, directly from the dashboard, allowing for delegation to other DNS providers. You can add up to four nameservers at once, and [revert to your previous settings](#restore-original-nameservers) if necessary.

For domains that are not registered with Vercel, you can change the nameservers directly from the domain registrar's dashboard.

Nameserver changes can take up to 48 hours to complete due to [DNS propagation](https://ns1.com/resources/dns-propagation).

## [Add custom nameservers](#add-custom-nameservers)

1. Ensure your account or team is selected in the team switcher
2. Open [Domains](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fdomains&title=Go+to+Domains) in the sidebar and select the domain
3. On your domain's settings page, under Nameservers, click the Edit button:

![Nameservers section showing the Edit button.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Fnameservers.png&w=3840&q=75)![Nameservers section showing the Edit button.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Fnameservers-dark.png&w=3840&q=75)

Nameservers section showing the Edit button.

4. In the Edit Nameservers modal, add the new nameservers:

![Adding custom nameservers on the Edit Nameservers modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Fedit-nameservers.png&w=1080&q=75)![Adding custom nameservers on the Edit Nameservers modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Fedit-nameservers-dark.png&w=1080&q=75)

Adding custom nameservers on the Edit Nameservers modal.

## [Add Vercel's nameservers](#add-vercel's-nameservers)

Before using Vercel's nameservers, you should ensure that you own the domain.

1. Ensure your account or team is selected in the team switcher
2. Open [Domains](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fdomains&title=Go+to+Domains) in the sidebar and select the domain
3. On your domain's settings page, under DNS Records, click the Enable Vercel DNS button to opt in
4. You then must configure the following nameservers from the domain registrar's dashboard

* `ns1.vercel-dns.com`
* `ns2.vercel-dns.com`

## [Restore original nameservers](#restore-original-nameservers)

1. Ensure your account or team is selected in the team switcher
2. Open [Domains](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fdomains&title=Go+to+Domains) in the sidebar and select the domain
3. Under Nameservers, select the Restore Original Nameservers button
4. On the Restore Original Nameservers modal confirm the nameservers that will be present after the change

Vercel will present a message when you have successfully submitted the nameserver change.

![Restoring original nameservers by clicking the Restore button.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Frestore-original-nameservers.png&w=1080&q=75)![Restoring original nameservers by clicking the Restore button.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Fdocs-assets%2Fstatic%2Fdocs%2Fconcepts%2Fprojects%2Fcustom-domains%2Frestore-original-nameservers-dark.png&w=1080&q=75)

Restoring original nameservers by clicking the Restore button.

---

[Previous

Working with Nameservers](/docs/domains/working-with-nameservers)[Next

Working with SSL](/docs/domains/working-with-ssl)

Was this helpful?
