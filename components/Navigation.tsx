"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper-cream/90 backdrop-blur-sm border-b border-void-black/8">
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading font-semibold text-void-black tracking-tight text-sm sm:text-base leading-none"
          aria-label="The Curious Oddity — home"
        >
          The Curious Oddity
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-7" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-void-black/60 hover:text-void-black transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 -mr-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid-lime"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-5 bg-void-black transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-void-black transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-void-black transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-64" : "max-h-0"
        }`}
        hidden={!mobileOpen}
        aria-hidden={!mobileOpen}
      >
        <ul
          className="px-5 pb-5 pt-2 flex flex-col gap-4 border-t border-void-black/8"
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClose}
                className="block font-mono text-xs tracking-widest uppercase text-void-black/60 hover:text-void-black py-1 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
