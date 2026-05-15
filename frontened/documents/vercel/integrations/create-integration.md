Title: Create an Integration

URL Source: https://vercel.com/docs/integrations/create-integration

Markdown Content:
Learn the process of creating and managing integrations on Vercel, helping you extend the capabilities of Vercel projects by connecting them with your third-party services. The overall process of creating an integration is as follows:

1.   Submit a [create integration form](https://vercel.com/docs/integrations/create-integration#creating-an-integration) request to Vercel
2.   If you are creating a native integration, submit the [create product form](https://vercel.com/docs/integrations/create-integration#native-integration-product-creation) as well
3.   Once your integration is approved, you can share it for users to install if it's a [connectable account integration](https://vercel.com/docs/integrations#connectable-accounts)
4.   For a [native integration](https://vercel.com/docs/integrations#native-integrations), you need to [create a product](https://vercel.com/docs/integrations/create-integration/marketplace-product#create-your-product) and use the [Integration API to create an integration server](https://vercel.com/docs/integrations/create-integration/marketplace-api) to handle the communication between the integration user and the Vercel platform
5.   [Publish your native integration](https://vercel.com/docs/integrations/create-integration/marketplace-product#publish-your-product) for users to install

Integrations can be created by filling out the Create Integration form. To access the form:

1.   From your Vercel [dashboard](https://vercel.com/d?to=%2Fdashboard&title=Open+Dashboard), select your account/team from the team switcher
2.   Open [Integrations](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fintegrations&title=Go+to+Integrations) in the sidebar to see the Integrations overview
3.   Then, select the [Integrations Console](https://vercel.com/d?to=%2Fdashboard%2Fintegrations%2Fconsole&title=Open+Integrations+Console) button and then select Create
4.   Fill out all the entries in the [Create integration form](https://vercel.com/docs/integrations/create-integration#create-integration-form-details) as necessary
5.   At the end of the form, depending on the type of integration you are creating, you must accept the terms provided by Vercel so that your integration can be published
6.   If you are creating a native integration, continue to the [Native integration product creation](https://vercel.com/docs/integrations/create-integration#native-integration-product-creation) process.

In order to create native integrations, please share your `team_id` and Integration's [URL Slug](https://vercel.com/docs/integrations/create-integration/submit-integration#url-slug) with Vercel in your shared Slack channel (`#shared-mycompanyname`). You can sign up to be a native integration provider [here](https://vercel.com/marketplace/program).

You can create your product(s) using the [Create product form](https://vercel.com/docs/integrations/create-integration#create-product-form-details) after you have submitted the integration form. Review the [storage product creation flow](https://vercel.com/docs/integrations/create-integration/marketplace-flows#create-a-storage-product-flow) to understand the sequence your integration server needs to handle when a Vercel user installs your product.

The Create Integration form must be completed in full before you can submit your integration for review. The form has the following fields:

| Field | Description | Required |
| --- | --- | --- |
| [Name](https://vercel.com/docs/integrations/create-integration/submit-integration#integration-name) | The name of your integration. |  |
| [URL Slug](https://vercel.com/docs/integrations/create-integration/submit-integration#url-slug) | The URL slug for your integration. |  |
| [Developer](https://vercel.com/docs/integrations/create-integration/submit-integration#developer) | The owner of the Integration, generally a legal name. |  |
| [Contact Email](https://vercel.com/docs/integrations/create-integration/submit-integration#email) | The contact email for the owner of the integration. This will not be publicly listed. |  |
| [Support Contact Email](https://vercel.com/docs/integrations/create-integration/submit-integration#email) | The support email for the integration. This will be publicly listed. |  |
| [Short Description](https://vercel.com/docs/integrations/create-integration/submit-integration#short-description) | A short description of your integration. |  |
| [Logo](https://vercel.com/docs/integrations/create-integration/submit-integration#logo) | The logo for your integration. |  |
| [Category](https://vercel.com/docs/integrations/create-integration/submit-integration#category) | The category for your integration. |  |
| [Website](https://vercel.com/docs/integrations/create-integration/submit-integration#urls) | The website for your integration. |  |
| [Documentation URL](https://vercel.com/docs/integrations/create-integration/submit-integration#urls) | The documentation URL for your integration. |  |
| [EULA URL](https://vercel.com/docs/integrations/create-integration/submit-integration#urls) | The URL to your End User License Agreement (EULA) for your integration. |  |
| [Privacy Policy URL](https://vercel.com/docs/integrations/create-integration/submit-integration#urls) | The URL to your Privacy Policy for your integration. |  |
| [Overview](https://vercel.com/docs/integrations/create-integration/submit-integration#overview) | A detailed overview of your integration. |  |
| [Additional Information](https://vercel.com/docs/integrations/create-integration/submit-integration#additional-information) | Additional information about configuring your integration. |  |
| [Feature Media](https://vercel.com/docs/integrations/create-integration/submit-integration#feature-media) | A featured image or video for your integration. You can link up to 5 images or videos for your integration with the aspect ratio of 3:2. |  |
| [Redirect URL](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-url) | The URL the user sees during installation. |  |
| [API Scopes](https://vercel.com/docs/integrations/create-integration/submit-integration#api-scopes) | The API scopes for your integration. |  |
| [Webhook URL](https://vercel.com/docs/integrations/create-integration/submit-integration#webhook-url) | The URL to receive webhooks from Vercel. |  |
| [Configuration URL](https://vercel.com/docs/integrations/create-integration/submit-integration#configuration-url) | The URL to configure your integration. |  |
| [Base URL](https://vercel.com/docs/integrations/create-integration/submit-integration#base-url) (Native integration) | The URL that points to your integration server |  |
| [Redirect Login URL](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url) (Native integration) | The URL where the integration users are redirected to when they open your product's dashboard |  |
| [Installation-level Billing Plans](https://vercel.com/docs/integrations/create-integration/submit-integration#installation-level-billing-plans) (Native integration) | Enable the ability to select billing plans when installing the integration |  |
| [Integrations Agreement](https://vercel.com/docs/integrations/create-integration/submit-integration#integrations-agreement) | Which partner terms apply before publish [depends on native versus connectable account integrations](https://vercel.com/docs/integrations/create-integration/submit-integration#integrations-agreement). |  |

The Create Product form must be completed in full for at least one product before you can submit your product for review. The form has the following fields:

| Field | Description | Required |
| --- | --- | --- |
| [Name](https://vercel.com/docs/integrations/create-integration/submit-integration#product-name) | The name of your product. |  |
| [URL Slug](https://vercel.com/docs/integrations/create-integration/submit-integration#product-url-slug) | The URL slug for your product. |  |
| [Short Description](https://vercel.com/docs/integrations/create-integration/submit-integration#product-short-description) | A short description of your product. |  |
| [Short Billing Plans Description](https://vercel.com/docs/integrations/create-integration/submit-integration#product-short-billing-plans-description) | A short description of your billing plan. |  |
| [Metadata Schema](https://vercel.com/docs/integrations/create-integration/submit-integration#product-metadata-schema) | The metadata your product will receive when a store is created or updated. |  |
| [Logo](https://vercel.com/docs/integrations/create-integration/submit-integration#product-logo) | The logo for your product. |  |
| [Tags](https://vercel.com/docs/integrations/create-integration/submit-integration#product-tags) | Tags for the integrations marketplace categories. |  |
| [Guides](https://vercel.com/docs/integrations/create-integration/submit-integration#product-guides) | Getting started guides for specific frameworks. |  |
| [Resource Links](https://vercel.com/docs/integrations/create-integration/submit-integration#product-resource-links) | Resource links such as documentation. |  |
| [Snippets](https://vercel.com/docs/integrations/create-integration/submit-integration#product-snippets) | Add up to 6 code snippets to help users get started with your product. |  |
| [Edge Config Support](https://vercel.com/docs/integrations/create-integration/submit-integration#edge-config-support) | Enable/Disable Experimentation Edge Config Sync |  |
| [Log Drain Settings](https://vercel.com/docs/integrations/create-integration/submit-integration#log-drain-settings) | Configure a Log Drain |  |
| [Checks API](https://vercel.com/docs/integrations/create-integration/submit-integration#checks-api) | Enable/Disable Checks API |  |

To create a product for your [native integration](https://vercel.com/docs/integrations#native-integrations), follow the steps in [Create a product for a native integration](https://vercel.com/docs/integrations/marketplace-product).

Once you have created your [connectable account integration](https://vercel.com/docs/integrations#connectable-accounts), it will be assigned the [Community badge](https://vercel.com/docs/integrations/create-integration#community-badge) and be available for external users to download. You can share it with users either through your site or through the Vercel [deploy button](https://vercel.com/docs/deploy-button/integrations).

If you are interested in having your integration listed on the public [Integrations](https://vercel.com/integrations) page:

*   The integration must have at least 500 active installations (500 accounts that have the integration installed).
*   The integration follows our [review guidelines](https://vercel.com/docs/integrations/create-integration/approval-checklist).
*   Once you've reached this minimum install requirement, please email [integrations@vercel.com](mailto:integrations@vercel.com) with your request to be reviewed for listing.

You can view all integrations that you have created on the [Integrations Console](https://vercel.com/d?to=%2Fdashboard%2Fintegrations%2Fconsole&title=Open+Integrations+Console).

To preview an integration's live URL, click View Integration. This URL can be shared for installation based on the integration's visibility settings.

The live URL has the following format:

Where, `<slug>` is the name you specified in the URL Slug field during the integration creation process.

To help troubleshoot errors with your integration, select the View Logs button on the Edit Integration page. You will see a list of all requests made to this integration with the most recent at the top. You can use filters on the left column such as selecting only requests with the `error` level. When you select a row, you can view the detailed information for that request in the right column.

In the [Integrations Console](https://vercel.com/d?to=%2Fdashboard%2Fintegrations%2Fconsole&title=Open+Integrations+Console), a Community badge will appear under your new integration's title once you have submitted the integration. While integrations with a Community badge do not appear in the [marketplace](https://vercel.com/integrations), they are available to be installed through your site or through the Vercel [deploy button](https://vercel.com/docs/deploy-button/integrations)

Community integrations are developed by third parties and are supported solely by the developers. Before installing, review the developer's Privacy Policy and End User License Agreement on the integration page.

The installation of the integration is a critical component of the developer experience that must cater to all types of developers. While deciding the installation flow you should consider the following:

*   New user flow: Developers should be able to create an account on your service while installing the integration
*   Existing user flow: With existing accounts, developers should sign in as they install the integration. Also, make sure the forgotten password flow doesn't break the installation flow
*   Strong defaults: The installation flow should have minimal steps and have set defaults whenever possible
*   Advanced settings: Provide developers with the ability to override or expand settings when installing the integration

For the installation flow, you should consider adding the following specs:

| Spec Name | Required | Spec Notes |
| --- | --- | --- |
| Documentation | Yes | Explain the integration and how to use it. Also explain the defaults and how to override them. |
| Deploy Button | No | Create a [Deploy Button](https://vercel.com/docs/deploy-button) for projects based on a Git repository. |

You can view all the integrations that you created for a team on the [Integrations Console](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fintegrations%2Fconsole&title=Go+to+Integrations+Console). There you can manage the settings for each integration which include the fields you completed in the [Create Integration form](https://vercel.com/docs/integrations/create-integration#create-integration-form-details) and product fields you completed in the [Create Product form](https://vercel.com/docs/integrations/create-integration#create-product-form-details) for native integrations.

When you create an integration, you are assigned a client (integration) ID and secret which you will use to authenticate your webhooks as described in [webhook security](https://vercel.com/docs/webhooks/webhooks-api#securing-webhooks). This is found at the bottom of the settings page for your integration. You can rotate the secret for your integration by going to the Credentials section of the integration settings page and clicking the Rotate Secret button.

As an integration creator, you are solely responsible for the support of your integration developed and listed on Vercel. When providing user support, your response times and the scope of support must be the same or exceed the level of [Vercel's support](https://vercel.com/legal/support-terms). For more information, refer to the [Vercel Integrations Marketplace Agreement](https://vercel.com/legal/integrations-marketplace-agreement).

When submitting an integration, you'll enter a [support email](https://vercel.com/docs/integrations/create-integration/submit-integration#email), which will be listed publicly. It's through this email that integration users will be able to reach out to you.

Vercel complies with applicable laws and regulations, including sanctions administered by the Office of Foreign Assets Control (OFAC). Our payment processing is managed by Stripe, which enforces restrictions related to embargoed or sanctioned regions as part of its own compliance program.

Vercel does not perform OFAC checks on behalf of its customers or their end users. As an integration provider, you are solely responsible for ensuring your own compliance with applicable sanctions, export controls, and other relevant laws.
