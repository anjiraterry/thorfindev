const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Team", "#team"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="flex h-[72px] items-stretch justify-between border-b border-line">
      <a href="#" className="flex items-center gap-3 px-6 text-lg font-medium tracking-tight" aria-label="Thorfin Dev home">
   
        thorfin<span className="text-muted">.dev</span>
      </a>
      <nav className="hidden border-x border-line px-8 md:flex md:items-center md:gap-8" aria-label="Primary">
        {links.map(([l, h]) => (
          <a key={h} href={h} className="text-sm text-muted transition-colors hover:text-fg">{l}</a>
        ))}
      </nav>
      <div className="flex items-center px-4">
        <a href="#contact" className="bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white">
          Start a project
        </a>
      </div>
    </header>
  );
}
