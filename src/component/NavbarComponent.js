"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Tawheed
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            .dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-black transition hover:scale-105 md:block"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="flex flex-col space-y-6 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-center font-semibold text-black"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}