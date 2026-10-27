import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiGooglegemini,
  SiJavascript,
  SiNextdotjs,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { homepageProjects, type Project, type ProjectStatus } from "@/lib/projects";

const TECHNOLOGY_ICONS: Record<string, { icon: IconType; label: string }> = {
  Codex: { icon: RiOpenaiFill, label: "Codex CLI" },
  "Google Gemini API": { icon: SiGooglegemini, label: "Google Gemini API" },
  JavaScript: { icon: SiJavascript, label: "JavaScript" },
  "Next.js": { icon: SiNextdotjs, label: "Next.js" },
  "Sanity CMS": { icon: SiSanity, label: "Sanity CMS" },
  "Tailwind CSS": { icon: SiTailwindcss, label: "Tailwind CSS" },
  TypeScript: { icon: SiTypescript, label: "TypeScript" },
};

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-void-black/8 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-void-black/40">
              02 — Selected Work
            </p>
            <h2
              className="font-heading font-bold leading-tight tracking-tight text-void-black"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Things I&apos;ve built
            </h2>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16" role="list">
          {homepageProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </ul>

        <div className="mt-10 flex justify-center border-t border-void-black/8 pt-8">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center border border-void-black/20 px-5 py-3 font-heading text-sm font-semibold text-void-black transition-colors hover:border-void-black hover:bg-void-black hover:text-paper-cream"
          >
            See other projects..
            <span aria-hidden="true" className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li className="group min-w-0 border-t border-void-black/15 pt-5">
      <ProjectThumbnail project={project} />

      <div className="flex flex-col gap-5 pt-6">
        <div>
          <div className="mb-3 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-void-black/35">
                {String(index + 1).padStart(2, "0")} / {project.category}
              </p>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-void-black sm:text-2xl">
                {project.title}
              </h3>
            </div>
            {project.status && <StatusBadge status={project.status} />}
          </div>

          <p className="mb-2 font-heading text-base font-medium text-void-black/75">{project.tagline}</p>
          <p className="max-w-lg font-sans text-base leading-relaxed text-void-black/65">
            {project.description}
          </p>
        </div>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
            {project.stack.map((technology) => {
              const technologyIcon = TECHNOLOGY_ICONS[technology];

              if (!technologyIcon) {
                return (
                  <span
                    key={technology}
                    title={technology}
                    className="inline-flex min-h-9 items-center rounded-sm border border-void-black/15 px-2.5 font-mono text-[10px] uppercase tracking-wider text-void-black/60"
                  >
                    {technology}
                  </span>
                );
              }

              const Icon = technologyIcon.icon;

              return (
                <span
                  key={technology}
                  role="img"
                  aria-label={technologyIcon.label}
                  title={technologyIcon.label}
                  className="flex size-9 items-center justify-center rounded-sm border border-void-black/15 text-void-black/60 transition-colors hover:border-void-black/35 hover:text-void-black"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </span>
              );
            })}
          </div>
        )}

        <ProjectLinks project={project} />
      </div>
    </li>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-sm bg-sky-deep"
      aria-hidden={project.thumbnail ? undefined : true}
    >
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={`Preview of ${project.title}`}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center bg-sky-mid">
          <div className="absolute left-[10%] top-[20%] size-[55%] rounded-full border border-acid-lime/30" />
          <div className="absolute bottom-[18%] right-[12%] size-[30%] rotate-[30deg] border border-dream-blue/25" />
          <span className="relative font-mono text-xs uppercase tracking-widest text-dream-blue/60">
            Preview coming soon
          </span>
        </div>
      )}
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">
        {project.slug}
      </span>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-void-black transition-colors hover:text-acid-lime"
        >
          Visit project <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.repositoryUrl && (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-void-black transition-colors hover:text-acid-lime"
        >
          Repository <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const map: Record<ProjectStatus, { label: string; className: string }> = {
    active: {
      label: "Active",
      className: "border-[#a6d900] bg-[#a6d900] text-void-black",
    },
    experimental: {
      label: "Experiment",
      className: "border-dream-blue/40 bg-dream-blue/8 text-dream-blue",
    },
    archived: {
      label: "Archived",
      className: "border-void-black/15 text-void-black/40",
    },
  };
  const { label, className } = map[status];

  return (
    <span className={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-xs uppercase tracking-wider ${className}`}>
      {label}
    </span>
  );
}
