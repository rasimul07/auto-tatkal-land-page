# Auto Tatkal landing site

Marketing site for the **IRCTC Tatkal Auto Booking** Chrome extension.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing — features, how it works, plans |
| `/privacy-policy` | Privacy policy (Chrome Web Store URL) |
| `/thank-you` | Post-install onboarding steps |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL (e.g. `https://your-domain.com`) |
| `NEXT_PUBLIC_CHROME_STORE_URL` | Chrome Web Store listing URL (leave empty until published) |
| `NEXT_PUBLIC_BMC_URL` | Buy Me a Coffee page (default: `https://buymeacoffee.com/mritools`) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Optional support email shown on privacy page |

## Build

```bash
npm run build
npm start
```

## Chrome Web Store

After deploy, set **Privacy policy URL** to:

```
https://<your-domain>/privacy-policy
```

## Related repo

Extension source: [rail-ticket](../rail-ticket)
# auto-tatkal-land-page
