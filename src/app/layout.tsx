import type { Metadata } from "next";
import "./globals.css";
import { SkipToContent } from "@/components/layout/SkipToContent";

export const metadata: Metadata = {
  title: "Zippatek - Building Africa's Infrastructure for Property Intelligence",
  description: "We leverage AI, satellite data, and modern web infrastructure to solve Africa's biggest market inefficiencies — starting with real estate. Mapping 2M+ properties across Nigeria.",
  keywords: ["PropTech", "AI", "Satellite Data", "Real Estate", "Africa", "Nigeria", "Property Intelligence", "GovTech"],
  authors: [{ name: "Zippatek" }],
  creator: "Zippatek",
  publisher: "Zippatek",
  metadataBase: new URL('https://zippatek.com'),
  openGraph: {
    title: "Zippatek - Building Africa's Infrastructure for Property Intelligence",
    description: "AI-powered property intelligence for Africa. Mapping 2M+ properties across Nigeria.",
    url: 'https://zippatek.com',
    siteName: 'Zippatek',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zippatek - Property Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zippatek - Building Africa's Infrastructure for Property Intelligence",
    description: "AI-powered property intelligence for Africa. Mapping 2M+ properties across Nigeria.",
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="theme-color" content="#F97316" />
            <meta name="color-scheme" content="light" />
            <meta name="facebook-domain-verification" content="oeiepg3raemmondj8wsmsdznh4f33n" />
          </head>
      <body className="font-sans antialiased bg-white">
        <SkipToContent />
        <main id="main-content">
        {children}
        </main>
      </body>
    </html>
  );
}
