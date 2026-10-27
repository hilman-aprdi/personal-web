import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── Left: Text ─────────────────────────────────────────────── */}
        <div className="order-2 text-center sm:text-left lg:order-1">
          {/* Section label */}
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-void-black/40">
            01 — Identity
          </p>

          {/* Name */}
          <p className="font-heading font-semibold text-sm sm:text-base tracking-tight text-void-black/50 mb-2">
            Hilman Apriadi
          </p>

          {/* Primary headline */}
          <h1 className="font-heading font-bold leading-[0.95] tracking-tight text-void-black mb-6">
            <span
              className="block"
              style={{
                fontSize: "clamp(2.7rem, 10vw, 4.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Not just a
            </span>
            <span
              className="block text-void-black"
              style={{
                fontSize: "clamp(2.7rem, 10vw, 4.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              developer,
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(2.7rem, 10vw, 4.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              but a{" "}
              <em
                className="not-italic"
                style={{ color: "#c6ff00", WebkitTextStroke: "1px #171717" }}
              >
                curious
              </em>
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(2.7rem, 10vw, 4.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              human.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mx-auto mb-8 max-w-md text-center font-sans text-base leading-relaxed text-void-black/65 sm:mx-0 sm:text-left sm:text-lg">
            I&apos;m Hilman, I build practical digital tools to solve problems, using AI to work
            smarter and explore better ways to build.
          </p>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 bg-acid-lime text-void-black font-heading font-semibold text-sm tracking-tight rounded-sm hover:bg-acid-lime/80 transition-colors duration-200 min-h-[48px]"
            >
              View selected work
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 border border-void-black/20 text-void-black font-heading font-semibold text-sm tracking-tight rounded-sm hover:bg-void-black/5 transition-colors duration-200 min-h-[48px]"
            >
              Learn about me
            </a>
          </div>

        </div>

        {/* ── Right: Profile image ──────────────────────────────────── */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative aspect-square w-[72vw] max-w-[18rem] overflow-hidden rounded-full border-[6px] border-acid-lime bg-void-black sm:w-full sm:max-w-sm sm:border-8">
            <Image
              src="/img/hilman_apriadi_profile.jpeg"
              alt="Hilman Apriadi"
              fill
              priority
              sizes="(max-width: 1023px) 80vw, 35vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
