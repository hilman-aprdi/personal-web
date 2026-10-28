const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-void-black/8 px-5 sm:px-8 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Wordmark + editorial note */}
          <div>
            <p className="font-heading font-semibold text-void-black text-sm tracking-tight mb-1">
              Hilman A.
            </p>
            <p
              className="font-mono text-void-black/30"
              style={{ fontSize: "10px", letterSpacing: "0.06em" }}
            >
              © {CURRENT_YEAR} Hilman Apriadi · Built with curiosity, not a template.
            </p>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-xs tracking-widest uppercase text-void-black/35 hover:text-void-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
