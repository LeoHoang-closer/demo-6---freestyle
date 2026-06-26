This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

For production deployment and QA testing, use:

```bash
npm run build
npm start
```

**Important**: QA testing should be performed on production builds (`next build` + `next start`), not development builds (`next dev`). Development builds include HMR scripts and other dev-only code that should not be present in production.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is optimized for Cloudflare Pages using static export.

1. **Build and Export**:
   ```bash
   npm run pages:build
   ```
   This generates a production-ready static site in the `out/` directory.

2. **Preview Locally**:
   ```bash
   npm run pages:preview
   ```
   Uses Wrangler to preview the static site locally.

3. **Deploy from CLI**:
   ```bash
   npm run pages:deploy
   ```
   Deploys the site directly to Cloudflare Pages.

For automated deployments, connect your repository to Cloudflare Pages and set:
- **Framework Preset**: `None` or `Static`
- **Build Command**: `npm run build`
- **Build Output Directory**: `out`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

