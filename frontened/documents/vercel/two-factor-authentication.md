Two-factor (2FA)

# Two-factor Authentication

Last updated February 23, 2026

To add an additional layer of security to your Vercel account, you can enable two-factor authentication (2FA).
This feature requires you to provide a second form of verification when logging in to your account. There are two
methods available for 2FA on Vercel:

* Authenticator App: Use an authenticator app like Google Authenticator to generate a time-based one-time password (TOTP).
* Passkey: Authenticate using any WebAuthN compatible device, such as a security key or biometric key.

## [Enabling two-factor authentication](#enabling-two-factor-authentication)

1. Navigate to your [account settings](https://vercel.com/account/settings/authentication#two-factor-authentication) on Vercel
2. Toggle the switch to enable 2FA
3. Set up your 2FA methods
4. Confirm your setup
5. Save your recovery codes

![Two-factor authentication settings.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Ftwo-factor-settings.png&w=2048&q=75)![Two-factor authentication settings.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Ftwo-factor-settings-dark.png&w=2048&q=75)

Two-factor authentication settings.

### [Configuring an authenticator app (TOTP)](#configuring-an-authenticator-app-totp)

Scan the QR code with your authenticator app or manually enter the provided key.
Once added, enter the generated 6-digit code to verify your setup.

![The time-based one-time password (TOTP) setup modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Ftotp.png&w=1080&q=75)![The time-based one-time password (TOTP) setup modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Ftotp-dark.png&w=1080&q=75)

The time-based one-time password (TOTP) setup modal.

### [Configuring a passkey](#configuring-a-passkey)

See the [Login with passkeys](/docs/accounts/create-an-account#login-with-passkeys) for more information on setting up a security key or biometric key.

### [Recovery codes](#recovery-codes)

After setting up two-factor authentication (2FA), you will be prompted to save your recovery codes.
Store these codes in a safe place, as they can be used to access your account if you lose access to your 2FA methods.

Each recovery code can only be used once, and you can generate a new set of codes at any time.

![The recovery codes modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Frecovery-codes.png&w=1080&q=75)![The recovery codes modal.](/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2F7nyt0uhk7sse4zvn.public.blob.vercel-storage.com%2Ffront%2Fdocs%2Ftwo-factor%2Frecovery-codes-dark.png&w=1080&q=75)

The recovery codes modal.

## [Enforcing two-factor authentication](#enforcing-two-factor-authentication)

Teams can enforce two-factor authentication (2FA) for all members. Once enabled, team members must configure 2FA before accessing team resources.
Visit the [Two-Factor Enforcement](/docs/two-factor-enforcement) documentation for more information on how to enforce 2FA for your team.

---

[Previous

SAML SSO](/docs/saml)[Next

AI / Vercel Agent](/docs/agent)

Was this helpful?
