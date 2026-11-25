import Image from "next/image";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40">
      <div className="grid items-end gap-12 md:grid-cols-[1fr_260px] md:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
            <span className="size-1.5 rounded-full bg-green animate-pulse" />
            {profile.status}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem] text-ink">
            Halo, saya{" "}
            <span className="text-accent">Dika</span>.
            <br />
            <span className="text-soft">Saya membangun</span> backend{" "}
            <span className="text-soft">&amp;</span> web apps.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#project"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/80"
            >
              Lihat project
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-semibold text-soft hover:text-ink">
              Lihat CV ↗
            </a>
            <a href="#kontak" className="link-underline text-sm font-semibold text-soft hover:text-ink">
              Kontak
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-[260px] md:mx-0">
          <figure className="rotate-[1.5deg] rounded-xl border border-rule bg-card p-3 shadow-[0_1px_0_rgba(255,255,255,0.03),0_18px_40px_-28px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:rotate-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-accent-soft">
              {profile.photo ? (
                <Image src={profile.photo} alt={`Foto ${profile.name}`} fill priority sizes="260px" className="object-cover" />
              ) : (
                <div className="flex size-full items-center justify-center text-6xl font-extrabold text-accent/30">AZ</div>
              )}
            </div>
            <figcaption className="flex items-end justify-between gap-2 px-1 pb-1 pt-3">
              <div>
                <p className="text-sm font-bold text-ink">{profile.name}</p>
                <p className="font-mono text-[11px] text-faint">Informatika · PENS</p>
              </div>
              <span className="font-mono text-[11px] text-faint">SBY</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
