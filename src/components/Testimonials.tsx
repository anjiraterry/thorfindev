import Section from "./Section";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <Section id="testimonials" label="testimonials">
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col justify-between gap-8 border border-line p-6">
            <blockquote className="leading-relaxed">{t.quote}</blockquote>
            <figcaption className="text-sm">
              {t.name}
              <span className="block font-mono text-xs text-muted">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
