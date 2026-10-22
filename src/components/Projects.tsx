import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" label="projects">
      <ul className="border-t border-line">
        {projects.map((p) => (
          <li key={p.name} className="grid gap-3 border-b border-line py-6 transition-colors hover:bg-panel md:grid-cols-[1fr_2fr_auto] md:items-baseline md:gap-8 md:px-4">
            <div>
              <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
              <p className="mt-1 font-mono text-xs text-muted">{p.sector}, {p.year}</p>
            </div>
            <p className="text-muted">{p.text}</p>
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {p.stack.map((t) => (
                <li key={t} className="border border-line px-2 py-1 font-mono text-[11px] text-muted">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
