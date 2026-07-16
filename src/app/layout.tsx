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
    default: "Vignesh Infinity Academy | Tuition & Computer Courses",
    template: "%s | Vignesh Infinity Academy",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: "E. Vignesh",
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  keywords: [
    "Vignesh Infinity Academy",
    "online 10th maths tuition Tamil Nadu Board",
    "online 11th maths tuition",
    "online 12th maths tuition",
    "online maths classes Tamil Nadu",
    "Tamil Nadu Board online tuition",
    "offline tuition Rajapalayam",
    "offline tuition Muhavur",
    "Classes 1 to 12 tuition",
    "computer courses Rajapalayam",
    "computer courses Muhavur",
    "Python programming course",
    "web design course",
    "React JS course",
    "Django course",
    "Android app development course",
    "full stack development course",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Vignesh Infinity Academy | Tuition & Computer Courses",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vignesh Infinity Academy - Tamil Nadu Board tuition and computer courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vignesh Infinity Academy | Tuition & Computer Courses",
    description: siteConfig.description,
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
      name: siteConfig.name,
      alternateName: [
        "Vignesh Academy",
        "Vignesh Infinity Academy Tamil Nadu",
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

      name: siteConfig.name,
      alternateName: "Vignesh Academy",

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

      areaServed: {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceArea,
      },

      address: {
        "@type": "PostalAddress",
        addressLocality: "Muhavur, Rajapalayam",
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