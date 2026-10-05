export default function Footer() {
  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Insights", href: "#insights" },
    { label: "About", href: "#how-it-works" },
  ];

  const legalLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#F7F7F2] border-t border-[#E5E8E3] pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div className="fermor-container">
        {/* Top Row: Brand & Main Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#E5E8E3]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-start gap-2">
            <a
              href="#"
              className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#171A17] hover:opacity-90 transition-opacity"
              aria-label="Fermor Home"
            >
              <span>FERMOR</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A] inline-block mb-0.5" aria-hidden="true" />
            </a>
            <p className="text-sm text-[#6B716B] font-medium tracking-wide">
              Understand. Act. Grow.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 sm:flex sm:items-center gap-x-8 gap-y-3 sm:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6B716B] hover:text-[#174D3A] transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-[#174D3A]/20 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6B716B]">
          <p>© 2026 Fermor. All rights reserved.</p>

          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#171A17] transition-colors uppercase tracking-wider text-[0.6875rem] font-medium py-1 focus:outline-none focus:ring-2 focus:ring-[#174D3A]/20 rounded"
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
