export type ProjectStatus = "active" | "experimental" | "archived";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status?: ProjectStatus;
  stack: string[];
  /** A local public asset path. Omit when no verified preview exists. */
  thumbnail?: string;
  /** Only set when a verified, working URL is available. */
  liveUrl?: string;
  /** Only set when a verified repository URL is available. */
  repositoryUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "persync",
    title: "PerSync (Personal Synchronize)",
    tagline: "Alat sinkronisasi data personal berbasis AI",
    description:
      "Persync adalah asisten arah bisnis berbasis AI yang membantu pengguna menemukan peluang usaha mikro dan sampingan (side hustle) yang realistis, disesuaikan dengan modal, waktu, keahlian, preferensi kerja, serta target pendapatan yang dimiliki.",
    category: "Productivity & Utilities",
    status: "active",
    stack: ["Next.js", "Google Gemini API", "Tailwind CSS"],
    thumbnail: "/img/persync.jpg",
    liveUrl: "https://persync.vercel.app",
    repositoryUrl: "https://github.com/hilman-aprdi/persync-personal-synchronize-",
    featured: true,
  },
  {
    slug: "bentang-sukabumi",
    title: "Bentang Sukabumi",
    tagline: "Direktori wisata alam Sukabumi",
    description:
      "Aplikasi web direktori wisata alam untuk wilayah Kabupaten dan Kota Sukabumi. Platform ini menyajikan katalog destinasi seperti air terjun/curug, pantai, gunung, gua, danau, serta kawasan alam lengkap dengan pemetaan lokasi, kategori, dan transparansi sumber data yang terverifikasi.",
    category: "Travel & Local",
    status: "active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/img/bentang_sukabumi.jpeg",
    liveUrl: "https://bentang-sukabumi.vercel.app",
    repositoryUrl: "https://github.com/hilman-aprdi/bentang-sukabumi",
    featured: true,
  },
  {
    slug: "mingfo",
    title: "MINGFO (Movie Info)",
    tagline: "Aplikasi pencarian dan katalog informasi film",
    description:
      "Aplikasi web interaktif untuk menjelajahi katalog film, melihat film populer, detail sinopsis, rating, serta melakukan pencarian film secara cepat yang terintegrasi dengan API data film (seperti TMDB API).",
    category: "Entertainment",
    status: "active",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "TMDB API"],
    thumbnail: "/img/mingfo.jpeg",
    liveUrl: "https://mingfo.vercel.app/",
    repositoryUrl: "https://github.com/hilman-aprdi/movie-ingfo-v2",
    featured: true,
  },
  {
    slug: "o2essentials",
    title: "O2 Essentials",
    tagline: "Platform e-commerce dan katalog produk O2 Essentials",
    description:
      "Website e-commerce modern untuk Brand kaos Oversize O2 Essentials yang dibangun menggunakan Next.js App Router dan Sanity Headless CMS. Mengelola katalog produk, serta menyajikan pengalaman belanja yang cepat, responsif, dan teroptimasi SEO.",
    category: "E-Commerce",
    status: "active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    thumbnail: "/img/o2essentials.jpeg",
    liveUrl: "https://otwo-essentials.vercel.app/",
    repositoryUrl: "https://github.com/hilman-aprdi/otwo-essentials",
    featured: true,
  },
  {
    slug: "qira",
    title: "Qira Quran",
    tagline: "Aplikasi Al-Qur'an digital interaktif",
    description:
      "Aplikasi web Al-Qur'an digital yang dirancang untuk memudahkan pengguna membaca ayat suci, mendengarkan murottal audio, serta mengakses terjemahan dan daftar surah secara terstruktur dan responsif.",
    category: "Education & Religion",
    status: "active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Quran API"],
    thumbnail: "/img/qira.jpeg",
    liveUrl: "https://qiraweb.vercel.app",
    repositoryUrl: "https://github.com/hilman-aprdi/qira-quran",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const homepageProjects = featuredProjects.slice(0, 4);

export const projectCategories = [
  { value: "All", label: "All projects" },
  ...Array.from(new Set(projects.map((project) => project.category))).map((category, index) => ({
    value: category,
    label: `${String(index + 1).padStart(2, "0")} / ${category}`,
  })),
];

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
