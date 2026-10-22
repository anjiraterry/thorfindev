import Section from "./Section";
import { team } from "@/lib/data";

const initials = (n: string) => n.split(" ").map((w) => w[0]).join("");

export default function Team() {
  return (
    <Section id="team" label="team">
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {team.map((m) => (
          <article key={m.name} className="flex flex-col justify-between gap-10 bg-ink p-6">
            <div className="flex h-24 w-24 items-center justify-center border border-line bg-panel font-mono text-xl text-muted">
              {initials(m.name)}
            </div>
            <div>
              <h3 className="font-medium">{m.name}</h3>
              <p className="mt-1 text-sm text-muted">{m.role}</p>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}
                 className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
