# Vignesh Infinity Academy Premium Website

> **Windows setup:** Double-click `CLEAN-INSTALL-WINDOWS.cmd`, or run `npm install` normally. This portable package uses the official public npm registry and intentionally does not include a pre-generated `package-lock.json`.

Premium static website built with Next.js 16, TypeScript, Tailwind CSS 4 and Lucide icons.

## Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build static website

```bash
npm run build
```

The exported site will be created in the `out` folder.

## Important customisation

Edit `src/data/site.ts` to change phone, email, location, domain and social links. When a paid domain is purchased, change only `siteConfig.url` and rebuild.

## Deploy to Vercel

1. Upload this project to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Suggested free address: `vigneshinfinityacademy.vercel.app`.

## Logo files

The supplied Vignesh Infinity Academy logo has been prepared for the website:

- `public/logo-full.webp` – full academy logo
- `public/logo-mark.webp` – compact logo mark used in the header and footer
- `public/icon-192.png` and `public/icon-512.png` – app/browser icons
- `public/favicon.ico` – browser tab icon

The contact email is set to `vigneshinfinityacademy@gmail.com` in `src/data/site.ts`.


## School tuition structure

- **Offline only:** All-subject tuition for Classes 1–12 in Rajapalayam.
- **Online only:** Mathematics for 10th, 11th and 12th standards.
- **Syllabus:** Tamil Nadu Board of Secondary Education.
- **Online annual offer fees:** 10th Maths ₹5,999; 11th Maths ₹6,999; 12th Maths ₹6,999.

Edit tuition details in `src/data/courses.ts`.

## Computer courses and fees

The website now includes 12 dedicated computer-course pages grouped as Beginner (₹2,999), Programming (₹3,999), Professional (₹5,999) and Career (₹14,999). Edit course details in `src/data/courses.ts`. See `COURSE-FEES.md` for the full list.

## Pricing configuration

Regular fees and limited-time offer fees are stored in `src/data/courses.ts`. The website displays both prices on course cards, course listings and individual course pages. Offer fees are also used in course structured data for Google.
