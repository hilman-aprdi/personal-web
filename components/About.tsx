import { FiExternalLink, FiMapPin, FiTarget } from "react-icons/fi";

const CV_URL = "/CV-HILMAN.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-5 sm:px-8 lg:px-12 border-t border-void-black/8 bg-void-black text-paper-cream"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* ── Text ──────────────────────────────────────────────── */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-paper-cream/35 mb-6">
              04 — The Person
            </p>

            <h2
              className="font-heading font-bold text-paper-cream leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Still learning.
              <br />
              Always making.
            </h2>

            <div className="space-y-5 font-sans text-base leading-relaxed text-paper-cream/65 max-w-prose">
              <p>
                Hi, I&apos;m <strong className="font-semibold text-paper-cream">Hilman Apriadi</strong>. I&apos;m
                curious about how things work and enjoy figuring out how technology can solve real
                problems.
              </p>
              <p>
                I learn best by building, experimenting, and understanding the tools I use. I&apos;m
                still learning, and that&apos;s part of what keeps me building.
              </p>
            </div>

          </div>

          {/* ── Personal details ─────────────────────────────────── */}
          <aside className="border-t border-paper-cream/15 pt-6 lg:mt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <dl className="space-y-7">
              <div>
                <dt className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-cream/35">
                  <FiMapPin aria-hidden="true" className="size-3.5 text-dream-blue/70" />
                  Location
                </dt>
                <dd className="mt-2 font-heading text-lg font-semibold text-paper-cream">
                  West Java, Indonesia
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-cream/35">
                  <FiTarget aria-hidden="true" className="size-3.5 text-dream-blue/70" />
                  Focus
                </dt>
                <dd className="mt-2 max-w-xs font-sans text-base leading-relaxed text-paper-cream/70">
                  Web Development &amp; Digital Solutions
                </dd>
              </div>
            </dl>

            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-11 items-center gap-2 border border-acid-lime bg-acid-lime px-5 py-3 font-heading text-sm font-semibold text-void-black transition-colors hover:bg-paper-cream focus-visible:outline-acid-lime"
            >
              <FiExternalLink aria-hidden="true" className="size-4" />
              Preview CV
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
