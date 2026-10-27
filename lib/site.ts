export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hilmanapriadi.cv";

export const SITE_NAME = "The Curious Oddity";
export const PERSON_NAME = "Hilman Apriadi";
export const SITE_DESCRIPTION =
  "Personal website of Hilman Apriadi. Building practical digital tools, exploring AI, and documenting the journey.";

export const SOCIAL_PROFILES = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hilman-apriadi/" },
  { label: "GitHub", url: "https://github.com/hilman-aprdi/" },
  { label: "Instagram", url: "https://www.instagram.com/mnaprd_/" },
] as const;
