"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Insights", href: "#insights" },
    { label: "About", href: "#how-it-works" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 animate-fade-in ${
        scrolled
          ? "bg-[#F7F7F2]/95 backdrop-blur-md border-b border-[#E5E8E3] shadow-[0_1px_3px_rgba(23,26,23,0.02)]"
          : "bg-[#F7F7F2]/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="fermor-container">
        <div className="flex items-center justify-between h-20">
          {/* Fermor Wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-xl sm:text-[1.375rem] font-bold tracking-tight text-[#171A17] hover:opacity-90 transition-opacity"
            aria-label="Fermor Home"
          >
            <span>FERMOR</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A] inline-block mb-0.5" aria-hidden="true" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.9375rem] font-medium text-[#6B716B] hover:text-[#171A17] transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="#get-started"
              className="btn-primary inline-flex items-center gap-2 group text-sm font-medium px-5 py-2.5 shadow-sm"
            >
              <span>Get Started</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 3.5L10.5 8L6 12.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E8E3] bg-white text-[#171A17] hover:bg-[#F0F2EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#174D3A]/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#F7F7F2] z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fade-in border-t border-[#E5E8E3]">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-xl font-medium text-[#171A17] hover:text-[#174D3A] transition-colors py-3 border-b border-[#E5E8E3]/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-sm text-[#6B716B]">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-8 pb-6 flex flex-col gap-4">
            <a
              href="#get-started"
              onClick={handleLinkClick}
              className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <span>→</span>
            </a>
            <p className="text-center text-xs text-[#6B716B] tracking-wider uppercase font-medium">
              Understand • Act • Grow
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
