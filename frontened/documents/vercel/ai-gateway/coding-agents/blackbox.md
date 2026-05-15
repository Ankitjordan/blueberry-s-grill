Menu

# Blackbox AI

Last updated February 26, 2026

You can use the [Blackbox AI](https://blackbox.ai) CLI for AI-powered code generation, debugging, and project automation. Configure it to use AI Gateway for unified model access and spend monitoring.

## [Configuring Blackbox AI](#configuring-blackbox-ai)

1. ### [Create an API key](#create-an-api-key)

   Go to the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar and click API keys to create a new API key.
2. ### [Install Blackbox CLI](#install-blackbox-cli)

   Install the Blackbox CLI for your platform:

   Terminal

   ```
   curl -fsSL https://blackbox.ai/install.sh | bash
   ```

   PowerShell

   ```
   Invoke-WebRequest -Uri "https://blackbox.ai/install.ps1" -OutFile "install.ps1"; .\install.ps1
   ```
3. ### [Configure Blackbox CLI](#configure-blackbox-cli)

   Run the configure command to set up AI Gateway:

   Terminal

   ```
   blackbox configure
   ```

   When prompted:

   1. Select Configuration: Choose Configure Providers
   2. Choose Model Provider: Select Vercel AI Gateway
   3. Enter API Key: Paste your AI Gateway API key from the previous step

   You can run `blackbox configure` at any time to update your configuration.
4. ### [Start Blackbox CLI](#start-blackbox-cli)

   Run the CLI to start using it:

   Terminal

   ```
   blackbox
   ```

   Your requests will now be routed through AI Gateway. You can verify this by checking your [AI Gateway Overview](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) in the Vercel dashboard.
5. ### [(Optional) Monitor usage and spend](#optional-monitor-usage-and-spend)

   View your usage, spend, and request activity in the [AI Gateway](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar. See the [observability documentation](/docs/ai-gateway/capabilities/observability) for more details.

---

Was this helpful?
