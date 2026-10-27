"use client";

import { useState } from "react";
import Link from "next/link";

import { getProjectsByCategory, projectCategories } from "@/lib/projects";
import { ProjectCard } from "@/components/Projects";

export default function WorkExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects = getProjectsByCategory(activeCategory);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <Link
            href="/"
            className="mb-8 inline-flex font-mono text-xs uppercase tracking-widest text-void-black/45 transition-colors hover:text-void-black"
          >
            ← Back home
          </Link>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-void-black/40">
            Project Archive
          </p>
          <h1
            className="font-heading font-bold leading-tight tracking-tight text-void-black"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.25rem)" }}
          >
            Explore the things I&apos;ve made.
          </h1>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-void-black/65">
            A growing collection of products, experiments, and interfaces. Filter by category to
            look around.
          </p>
        </div>

        <div className="mb-12 border-y border-void-black/15 py-4">
          <label htmlFor="project-category" className="mr-4 font-mono text-xs uppercase tracking-widest text-void-black/45">
            Filter projects
          </label>
          <select
            id="project-category"
            value={activeCategory}
            onChange={(event) => setActiveCategory(event.target.value)}
            className="min-h-10 min-w-52 border border-void-black/20 bg-paper-cream px-3 py-2 font-mono text-xs uppercase tracking-wider text-void-black outline-none transition-colors focus:border-void-black"
          >
            {projectCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16" role="list">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
