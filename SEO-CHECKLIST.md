# SEO and Launch Checklist

## Before deployment

1. Open `src/data/site.ts` and verify phone, email, location and WhatsApp message.
2. Review all courses in `src/data/courses.ts` and edit batch details when required.
3. Replace `#` social links in `src/data/site.ts` when social pages are ready.
4. Add real student photos/testimonials only after receiving permission.

## Deploy

1. Upload the project to GitHub.
2. Import it into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables if the final address differs.
4. Deploy and confirm that every navigation link works.

## Google Search Console

1. Add the deployed website as a URL-prefix property.
2. Choose HTML tag verification.
3. Copy only the value inside `content="..."`.
4. Add it in Vercel as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
5. Redeploy the website.
6. Submit: `https://YOUR-DOMAIN/sitemap.xml`.
7. Request indexing for the homepage and main course pages.

## Local SEO

1. Create or complete a Google Business Profile with the same academy name, phone and location.
2. Keep contact information consistent across the website, Google Business Profile and social pages.
3. Add original photos, class details, student results and useful articles regularly.
4. Ask satisfied parents/students for genuine Google reviews. Never buy reviews.

## When moving to a paid domain

Set `NEXT_PUBLIC_SITE_URL=https://your-new-domain.in` in Vercel and redeploy. The canonical URLs, sitemap, structured data and Open Graph URLs will update automatically.
