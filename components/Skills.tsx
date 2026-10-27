import type { IconType } from "react-icons";
import { FaCss3, FaUbuntu } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type Skill = {
  label: string;
  icon: IconType;
};

const SKILL_GROUPS = [
  {
    label: "Web Development",
    annotation: "01 / Building blocks",
    items: [
      { label: "HTML5", icon: SiHtml5 },
      { label: "CSS3", icon: FaCss3 },
      { label: "JavaScript", icon: SiJavascript },
      { label: "PHP", icon: SiPhp },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Bootstrap", icon: SiBootstrap },
    ] satisfies Skill[],
  },
  {
    label: "Frameworks & Data",
    annotation: "02 / Systems in motion",
    items: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "MySQL", icon: SiMysql },
      { label: "PostgreSQL", icon: SiPostgresql },
    ] satisfies Skill[],
  },
  {
    label: "Tools & Environment",
    annotation: "03 / Daily habitat",
    items: [
      { label: "WSL with Ubuntu", icon: FaUbuntu },
      { label: "Visual Studio Code", icon: VscVscode },
      // Codex CLI is an OpenAI product; this is the official OpenAI mark.
      { label: "Codex CLI", icon: RiOpenaiFill },
      { label: "Git", icon: SiGit },
    ] satisfies Skill[],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-void-black/8 bg-dream-blue/35 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-5 sm:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-void-black/45">
              03 — Tools & Technologies
            </p>
            <h2
              id="skills-heading"
              className="font-heading text-void-black font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Things I work with.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-base leading-relaxed text-void-black/65 lg:justify-self-end">
            A growing toolkit for building, experimenting, and figuring things out.
          </p>
        </div>

        <div className="grid border-y border-void-black/20 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <section
              key={group.label}
              aria-labelledby={`skill-group-${index}`}
              className={`min-w-0 py-7 lg:px-8 lg:py-9 ${index > 0 ? "border-t border-void-black/20 lg:border-l lg:border-t-0" : ""}`}
            >
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-void-black/45">
                {group.annotation}
              </p>
              <h3 id={`skill-group-${index}`} className="mb-6 font-heading text-xl font-semibold tracking-tight text-void-black">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {group.items.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="group flex min-h-8 items-center gap-2 border border-void-black/25 bg-paper-cream/45 px-3 py-1.5 font-mono text-xs tracking-wide text-void-black/75"
                  >
                    <Icon
                      className="size-3.5 shrink-0 text-void-black/65 transition-colors group-hover:text-acid-lime"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-void-black/45">
          A working list, not a claim of mastery.
        </p>
      </div>
    </section>
  );
}
