const cols = [
  ["Company", [["About", "#about"], ["Projects", "#projects"], ["Team", "#team"]]],
  ["Connect", [["LinkedIn", "https://www.linkedin.com/company/your-handle"], ["GitHub", "https://github.com/your-handle"], ["Email", "mailto:hello@thorfin.space"]]],
] as const;

export default function Footer() {
  return (
    <footer className="grid gap-10 border-t border-line px-6 py-10 sm:grid-cols-[1fr_auto_auto] sm:gap-20 lg:px-12">
      <div>
        <p className="text-lg font-medium tracking-tight">thorfin<span className="text-muted">.dev</span></p>
        <p className="mt-2 max-w-xs text-sm text-muted">Software for commerce and finance.</p>
        <p className="mt-8 font-mono text-xs text-muted">© {new Date().getFullYear()} Thorfin Dev</p>
      </div>
      {cols.map(([title, items]) => (
        <nav key={title} aria-label={title}>
          <p className="font-mono text-xs text-muted">{title}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {items.map(([l, h]) => (
              <li key={l}><a href={h} className="transition-colors hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </nav>
      ))}
    </footer>
  );
}
