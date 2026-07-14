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
  title: { default: "Vignesh Infinity Academy | Tuition & Computer Courses", template: "%s | Vignesh Infinity Academy" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "E. Vignesh" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: ["online 10th maths tuition Tamil Nadu Board", "online 11th maths tuition", "online 12th maths tuition", "offline tuition Rajapalayam", "Tamil Nadu Board tuition", "computer courses Rajapalayam", "Python course", "web design course"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", url: siteConfig.url, siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vignesh Infinity Academy - Tamil Nadu Board tuition and computer courses" }] },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description, images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#020617" };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-full.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: siteConfig.serviceArea,
  address: { "@type": "PostalAddress", addressLocality: "Rajapalayam", addressRegion: "Tamil Nadu", addressCountry: "IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={organizationSchema} />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
