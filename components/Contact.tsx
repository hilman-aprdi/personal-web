import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import { SOCIAL_PROFILES as VERIFIED_SOCIAL_PROFILES } from "@/lib/site";

/**
 * Contact section.
 *
 * All contact details are explicitly configurable below.
 * Do NOT invent email addresses, usernames, or social profiles.
 *
 * Add verified profile URLs here before publishing. A null URL is deliberately
 * rendered as an unlinked entry, never as a fake destination.
 */

// Set to a verified email address, or leave as null to omit it.
// TODO: Confirm and set real email address.
const EMAIL: string | null = null;

const SOCIAL_ICONS: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  GitHub: FaGithub,
};

const SOCIAL_PROFILES: Array<{ label: string; url: string | null; icon: IconType }> = VERIFIED_SOCIAL_PROFILES.map((profile) => ({
  ...profile,
  url: profile.url || null,
  icon: SOCIAL_ICONS[profile.label],
}));

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-5 sm:px-8 lg:px-12 border-t border-void-black/8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-void-black/40 mb-6">
            05 — Get in Touch
          </p>

          <h2
            className="font-heading font-bold text-void-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Let&apos;s talk about
            <br />
            something interesting.
          </h2>

          <p className="font-sans text-base leading-relaxed text-void-black/65 mb-10 max-w-md">
            Have a project idea, a question, or something worth discussing? Find me around the
            internet.
          </p>

          <ul className="grid max-w-xl grid-cols-3 border-y border-void-black/15" role="list">
            {SOCIAL_PROFILES.map(({ label, url, icon: Icon }, index) => (
              <li
                key={label}
                className={`min-h-20 p-3 sm:min-h-28 sm:p-5 ${index > 0 ? "border-l border-void-black/15" : ""}`}
              >
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between text-void-black"
                    aria-label={`Visit Hilman Apriadi on ${label}`}
                  >
                    <span className="flex items-center gap-1.5 font-heading text-sm font-semibold underline-offset-4 transition-[text-decoration] group-hover:underline sm:gap-2 sm:text-lg">
                      <Icon className="size-3.5 shrink-0 sm:size-4" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.12em] text-void-black/40 transition-transform group-hover:translate-x-0.5 sm:text-xs sm:tracking-widest">
                      OPEN ↗
                    </span>
                  </a>
                ) : (
                  <div
                    className="flex h-full flex-col justify-between"
                    aria-label={`${label} profile link pending`}
                  >
                    <span className="flex items-center gap-1.5 font-heading text-sm font-semibold text-void-black/55 sm:gap-2 sm:text-lg">
                      <Icon className="size-3.5 shrink-0 sm:size-4" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.08em] text-void-black/35 sm:text-xs sm:tracking-widest">PENDING</span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {EMAIL && (
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-flex items-center gap-3 font-heading text-base font-semibold text-void-black transition-colors hover:text-acid-lime sm:text-lg"
            >
              <span aria-hidden="true">→</span>
              {EMAIL}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
