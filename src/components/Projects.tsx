"use client";

import Image from "next/image";
import { useState } from "react";
import { projectFilters, projects, type Project } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Thumb({ p, index }: { p: Project; index: number }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-rule bg-accent-soft">
      {p.image ? (
        <Image
          src={p.image}
          alt={`Tampilan ${p.title}`}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex size-full flex-col justify-between p-5">
          <span className="font-mono text-xs text-accent/60">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-xl font-bold leading-tight text-accent/30">{p.title.split(" — ")[0]}</span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Semua");
  const shown = filter === "Semua" ? projects : projects.filter((p) => p.filters.includes(filter));

  return (
    <section id="project" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
      <SectionHeader index="03" title="Project" />

      <Reveal className="-mt-4 mb-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {["Semua", ...projectFilters].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`border-b-2 pb-1 transition-colors ${filter === f ? "border-accent font-semibold text-ink" : "border-transparent text-faint hover:text-ink"
              }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <ol className="divide-y divide-rule border-y border-rule">
        {shown.map((p) => (
          <li key={p.title}>
            <Reveal>
              <article className="group grid gap-6 py-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10">
                <Thumb p={p} index={projects.indexOf(p)} />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">{p.title}</h3>
                  {p.note && <p className="mt-1 font-mono text-xs text-faint">{p.note}</p>}
                  <p className="mt-3 leading-relaxed text-soft">{p.description}</p>
                  <p className="mt-4 font-mono text-xs leading-relaxed text-accent">{p.stack.join("  /  ")}</p>
                  {p.links && p.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-sm font-semibold text-accent"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
