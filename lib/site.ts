export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hlmn.my.id";

export const SITE_NAME = "Hilman A.";
export const PERSON_NAME = "Hilman Apriadi";
export const SITE_DESCRIPTION =
  "Hilman Apriadi's personal website and portfolio. Building practical digital tools and exploring web development, digital solutions, and AI.";

export const SOCIAL_PROFILES = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hilman-apriadi/" },
  { label: "GitHub", url: "https://github.com/hilman-aprdi/" },
  { label: "Instagram", url: "https://www.instagram.com/mnaprd_/" },
] as const;
