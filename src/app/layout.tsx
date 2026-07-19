import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Vignesh Infinity Academy | Tuition Centre & Computer Courses",
    template: "%s | Vignesh Infinity Academy",
  },

  description:
    "Vignesh Infinity Academy provides offline tuition for Classes 1–12 in Muhavur, Rajapalayam, online Maths tuition for 10th, 11th and 12th Tamil Nadu Board students, and practical computer courses.",

  applicationName: siteConfig.name,

  authors: [
    {
      name: "E. Vignesh",
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  /*
   * Google does not use meta-keywords for ranking.
   * These are retained only as general descriptive metadata.
   */
  keywords: [
    "Vignesh Infinity Academy",
    "tuition centre in Rajapalayam",
    "tuition centre in Muhavur",
    "online Maths tuition Tamil Nadu",
    "10th Maths online tuition",
    "11th Maths online tuition",
    "12th Maths online tuition",
    "Tamil Nadu Board Maths classes",
    "offline tuition Classes 1 to 12",
    "computer courses in Rajapalayam",
    "Python programming course",
    "web development course",
    "full stack development course",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Vignesh Infinity Academy | Tuition Centre & Computer Courses",
    description:
      "Offline tuition in Rajapalayam, online Maths classes for 10th, 11th and 12th Tamil Nadu Board students, and practical computer courses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vignesh Infinity Academy tuition and computer courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vignesh Infinity Academy | Tuition Centre & Computer Courses",
    description:
      "Offline tuition, online Tamil Nadu Board Maths classes and practical computer courses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: "Vignesh Infinity Academy",

      alternateName: [
        "Vignesh Academy",
        "VIA",
        "Vignesh Infinity Academy Tamil Nadu",
        "vigneshinfinityacademy.vercel.app",
      ],

      description: siteConfig.description,
      inLanguage: "en-IN",

      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },

    {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.url}/#organization`,

      name: "Vignesh Infinity Academy",
      alternateName: ["Vignesh Academy", "VIA"],

      url: `${siteConfig.url}/`,

      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-full.png`,
        width: 512,
        height: 512,
      },

      image: `${siteConfig.url}/og-image.png`,

      description: siteConfig.description,

      telephone: siteConfig.phone,
      email: siteConfig.email,

      areaServed: [
        {
          "@type": "City",
          name: "Rajapalayam",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },
      ],

      address: {
        "@type": "PostalAddress",
        streetAddress: "Muhavur",
        addressLocality: "Rajapalayam",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },

      sameAs: [
        siteConfig.socials.instagram,
        siteConfig.socials.facebook,
        siteConfig.socials.youtube,
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <JsonLd data={structuredData} />

        <ScrollProgress />

        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        <FloatingWhatsApp />
      </body>
    </html>
  );
}