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
  ...(SITE_URL ? {
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: "/" },
  } : {}),
  title: {
    default: `${PERSON_NAME} — ${SITE_NAME}`,
    template: "%s — The Curious Oddity",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Hilman Apriadi",
    "personal website",
    "portfolio",
    "developer",
    "AI",
    "digital products",
  ],
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(SITE_URL ? { url: SITE_URL } : {}),
    siteName: SITE_NAME,
    title: `${PERSON_NAME} — ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/img/hilman_apriadi_profile.jpeg",
        width: 1440,
        height: 1440,
        alt: PERSON_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON_NAME} — ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: ["/img/hilman_apriadi_profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
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
    "@id": SITE_URL ? `${SITE_URL}/#person` : undefined,
    name: PERSON_NAME,
    description: SITE_DESCRIPTION,
    knowsAbout: ["Web development", "Digital products", "Artificial intelligence"],
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
    ...(SITE_URL ? { url: SITE_URL } : {}),
  };

  const graph = SITE_URL
    ? [
        person,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          description: SITE_DESCRIPTION,
          publisher: { "@id": `${SITE_URL}/#person` },
        },
      ]
    : [person];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
