import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" label="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Tell us what you&apos;re building.</h2>
          <p className="mt-4 max-w-sm text-muted">We reply within one business day with questions or a rough plan.</p>
          <dl className="mt-8 space-y-3 font-mono text-xs text-muted">
            <div><dt className="inline">email: </dt><dd className="inline text-fg"><a href="mailto:hello@thorfin.space">hello@thorfin.space</a></dd></div>
            <div><dt className="inline">base: </dt><dd className="inline text-fg">Abuja, Nigeria. Working worldwide.</dd></div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
