import type { Metadata } from "next";

import Footer from "@/components/Footer";
import WorkExplorer from "@/components/WorkExplorer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore Hilman Apriadi's projects, products, and experiments.",
  ...(SITE_URL ? { alternates: { canonical: "/work" } } : {}),
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
