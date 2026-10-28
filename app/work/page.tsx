import type { Metadata } from "next";

import Footer from "@/components/Footer";
import WorkExplorer from "@/components/WorkExplorer";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects and experiments by Hilman Apriadi, featuring practical digital tools built with web technologies and AI.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/work`,
    siteName: SITE_NAME,
    title: "Projects by Hilman Apriadi | Personal Website",
    description:
      "Explore practical digital tools and web projects built by Hilman Apriadi.",
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
    title: "Projects by Hilman Apriadi | Personal Website",
    description:
      "Explore practical digital tools and web projects built by Hilman Apriadi.",
    images: ["/img/hilman_apriadi_profile.jpeg"],
  },
};

export default function WorkPage() {
  return (
    <>
      <main id="main-content" className="bg-paper-cream text-void-black">
        <WorkExplorer />
      </main>
      <Footer />
    </>
  );
}
