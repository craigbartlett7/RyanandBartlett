# Ryan & Bartlett website

Next.js (App Router, TypeScript) site for Ryan & Bartlett, estate agents in Aylesbury. Hosted on Vercel, with Supabase storing valuation requests.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

## Set up Supabase (valuation requests)

1. Create a project at supabase.com.
2. Open **SQL Editor**, paste the contents of `supabase/migrations/0001_valuation_requests.sql` and run it.
3. Go to **Project Settings > API** and copy the **Project URL** and the **service_role** key into `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
4. The service_role key is secret. It is only used on the server (the API route) and must never be put in a `NEXT_PUBLIC_` variable.

New enquiries appear in **Table Editor > valuation_requests**. Change the `status` column as you work them (new, contacted, valuation_booked, instructed, lost).

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel choose **Add New > Project**, import the repo and keep the defaults (Framework: Next.js).
3. Add every variable from `.env.example` under **Settings > Environment Variables**.
4. Deploy, then add your domain under **Settings > Domains** and set `NEXT_PUBLIC_SITE_URL` to it (for example `https://www.ryanandbartlett.co.uk`). Redeploy so canonical URLs, the sitemap and schema use the live domain.

## Email alerts (recommended)

Instant alerts matter: responding to a valuation request within minutes wins instructions. Create a free account at resend.com, verify your domain, then set `RESEND_API_KEY`, `NOTIFY_EMAIL` (comma separate several addresses) and `FROM_EMAIL`. If these are blank the form still saves to Supabase, you just get no email.

## Before you go live

- [ ] Fill in the contact and company variables (phone, email, address, company number, redress scheme, ICO number). Anything left blank is hidden.
- [ ] Add real bios for Clodagh and Craig in `app/about/page.tsx`.
- [ ] Have a solicitor check the promise wording, "no sale, no fee" terms and the privacy notice and website terms (`app/privacy`, `app/terms`).
- [ ] Register with the ICO, join a redress scheme (The Property Ombudsman or Property Redress Scheme) and register with HMRC for anti-money-laundering supervision before trading.
- [ ] Test the form end to end on the live site and check the row lands in Supabase.
- [ ] Submit `https://your-domain/sitemap.xml` in Google Search Console.

## Local SEO checklist

The site already includes: a title and description on every page, canonical URLs, `RealEstateAgent` and `FAQPage` structured data, breadcrumbs on area pages, a sitemap and robots file, and a page for each area.

Do these off-site, they matter as much as the code:

1. **Google Business Profile.** Create it with the same name, address and phone as the site. Choose "Real estate agency" as the category, add the service areas, hours and photos, and ask every happy client for a review.
2. **Consistent listings.** Use the identical name, address and phone on Rightmove/Zoopla/OnTheMarket accounts, Facebook, LinkedIn and local directories.
3. **Reviews.** Ask for a Google review at completion. Reply to every review.
4. **Local links.** Get listed with the local chamber of commerce, local business directories and community sites, and link to your area pages.
5. **Add `sameAs`.** Once you have social profiles, add their URLs to the `sameAs` array in `app/layout.tsx`.
6. **Grow the area pages.** Add Land Registry sold-price data and local detail to each area page once you have sourced it. Do not invent statistics.
7. **Publish the scorecard.** When you have completions, replace the "We'll publish our numbers" section on the home page with the real fall-through rate, offer-to-exchange time and asking-versus-achieved figures.

## Project layout

- `app/` pages, the API route (`app/api/valuation`), sitemap, robots and social image
- `components/` header, footer, form, FAQ and shared sections
- `lib/site.ts` business details, the six promises and the how-it-works steps
- `lib/areas.ts` area page content
- `lib/faqs.ts` FAQ content (also used for FAQ structured data)
- `supabase/migrations/` database schema
