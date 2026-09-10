# Saas UI - Next.js - landing page.

This is a free Next.js landing page template based on https://saas-ui.dev.
Feel free to submit any feature requests. If you use this template please share what you've built [on Twitter](https://twitter.com/saas_js) 🚀.

**[View demo](https://saas-ui-nextjs-landing-page.netlify.app/)**

## Tech

- Next.js (App router)
- Chakra UI
- Saas UI
- Typescript

## Features

- Feature blocks
- Testimonials
- Pricing tables
- Log in and Sign up pages
- FAQ

## Getting Started

First, clone this repo and run `pnpm i`

To start the app run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Configuration

Configuration files to edit basic site information, add testimonials, faq and pricing table can be found in `/data`.

## Learn More

Find out more about Saas UI.

- [Saas UI Documentation](https://saas-ui.dev/docs).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

1. Push repo lên GitHub/GitLab/Bitbucket.
2. Trên [Netlify](https://app.netlify.com/): **Add new site → Import an existing project**.
3. Build settings (đã có trong `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node:** `20`
4. Thêm Environment Variables (Site settings → Environment variables) theo `.env.example`, tối thiểu:
   - `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
   - `NEXT_PUBLIC_AES_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL` (URL production, ví dụ `https://ten-mien.netlify.app`)
5. Deploy. Netlify tự nhận Next.js (App Router, API routes, Middleware) qua OpenNext adapter — không cần cài thêm plugin.

Deploy local thử:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --build
```

## Deploy on Vercel

Vẫn dùng được [Vercel](https://vercel.com/new). Headers tương đương nằm trong `vercel.json`.

## License

MIT
"# Code_link_new" 
"# src_new" 
"# src_policy_netlify" 
