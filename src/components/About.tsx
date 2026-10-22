import Section from "./Section";
import { services } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" label="about">
      <p className="max-w-2xl text-2xl leading-snug tracking-tight sm:text-3xl">
        We are a small senior team that builds the systems behind online stores, payments and financial products, then stays to run them.
      </p>
      <div className="mt-12 grid border border-line md:grid-cols-3 md:divide-x md:divide-line">
        {services.map((s) => (
          <div key={s.name} className="border-b border-line p-6 last:border-b-0 md:border-b-0">
            <h3 className="font-medium">{s.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
