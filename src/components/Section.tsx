export default function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="grid scroll-mt-4 border-t border-line lg:grid-cols-[220px_1fr]">
      <div className="px-6 pt-8 font-mono text-xs text-muted lg:border-r lg:border-line lg:py-10">
        <span className="lg:sticky lg:top-8">{`// ${label}`}</span>
      </div>
      <div className="px-6 py-10 lg:px-12 lg:py-14">{children}</div>
    </section>
  );
}
