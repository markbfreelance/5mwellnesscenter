"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../lib/tokens";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section tracking
      const sections = ["home", "about", "services", "herbs", "testimonials", "approach", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#f9f8f4]/90 backdrop-blur-xl border-b border-[#2d6a4f]/10 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 rounded-xl bg-[#1a4731] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.1c0 0 4.18-1.1 8.18-7.1 0 0-1 4 2 6 0 0 4-5 4-10.5C18 6.8 17 8 17 8z" />
            </svg>
            <div className="absolute inset-0 rounded-xl bg-[#40916c]/30 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-left leading-none">
            <span className="font-display text-[1.05rem] font-semibold text-[#1a4731] tracking-tight block">
              5M Wellness
            </span>
            <span className="text-[0.6rem] font-medium tracking-[0.16em] uppercase text-[#6b8f72]">
              Stronger &amp; Better
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`link-underline text-[0.82rem] font-medium tracking-wide transition-colors ${isActive ? "text-[#1a4731]" : "text-[#3d5a47] hover:text-[#1a4731]"
                  }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-[2px] left-0 w-full h-[1.5px] bg-[#f4c430] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNav("#contact")}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#1a4731] text-white text-[0.8rem] font-semibold rounded-full hover:bg-[#2d6a4f] transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
        >
          Book Consultation
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a4731] rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a4731] rounded transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a4731] rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="bg-[#f9f8f4]/98 backdrop-blur-xl border-t border-[#2d6a4f]/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="text-left py-3 text-[0.9rem] font-medium text-[#3d5a47] hover:text-[#1a4731] border-b border-[#2d6a4f]/08 transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-3 w-full py-3 bg-[#1a4731] text-white text-[0.85rem] font-semibold rounded-full"
          >
            Book a Consultation
          </button>
        </nav>
      </div>
    </header>
  );
}
