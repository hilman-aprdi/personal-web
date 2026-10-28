import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import {
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site";
import "./globals.css";

// Space Grotesk — used for headings and the wordmark.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Inter — used for body text and UI copy.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// JetBrains Mono — used for small labels, metadata, and annotations.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Hilman Apriadi | Personal Website",
    template: "%s | Hilman Apriadi",
  },
  description: SITE_DESCRIPTION,
  verification: {
    google: "nUvfNKio6IMOYGVD6SUq2s9DavS1usy-IxcSFalneAo",
  },
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Hilman Apriadi | Personal Website",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/img/hilman_apriadi_profile.jpeg",
        width: 1440,
        height: 1440,
        alt: "Hilman Apriadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilman Apriadi | Personal Website",
    description: SITE_DESCRIPTION,
    images: ["/img/hilman_apriadi_profile.jpeg"],
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper-cream text-void-black antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON_NAME,
    description: SITE_DESCRIPTION,
    knowsAbout: ["Web development", "Digital products", "Artificial intelligence"],
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
    url: SITE_URL,
  };

  const graph = [
    person,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
