"use client";

import { useState, useEffect, useRef } from "react";

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="get-started"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-[#F7F7F2] overflow-hidden"
    >
      <div className="fermor-container">
        {/* Contained Deep Forest Green Card */}
        <div
          className={`relative bg-[#174D3A] rounded-[2rem] sm:rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-24 lg:py-28 overflow-hidden text-center shadow-[0_24px_60px_-15px_rgba(23,77,58,0.22)] border border-[#247A57]/30 transition-all duration-700 ${
            prefersReducedMotion || isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#2E8B64]/30 via-[#247A57]/15 to-transparent rounded-full filter blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          {/* Understated Decorative Momentum Curve (CSS/SVG) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 -z-0" aria-hidden="true">
            <svg
              className="w-full h-full max-w-4xl"
              viewBox="0 0 800 300"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 250 C 250 240, 400 180, 550 120 C 650 80, 720 50, 750 40"
                stroke="#DDEBE3"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <circle cx="200" cy="230" r="3" fill="#DDEBE3" />
              <circle cx="450" cy="160" r="3" fill="#DDEBE3" />
              <circle cx="700" cy="60" r="4" fill="#FFFFFF" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Eyebrow Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#205E47]/70 text-[#DDEBE3] text-xs font-bold tracking-wider uppercase mb-6 sm:mb-8 border border-[#DDEBE3]/20 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDEBE3]" />
              <span>A BETTER FINANCIAL FUTURE</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.14] mb-6">
              You don&apos;t need to know everything about money.{" "}
              <span className="block text-[#DDEBE3] font-medium mt-1 sm:mt-2">
                You just need to know what to do next.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#DDEBE3]/90 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12 font-normal">
              Fermor helps you understand where you stand, take the next right
              step, and keep moving toward the future you want.
            </p>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#get-started"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#174D3A] hover:bg-[#F7F7F2] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                aria-label="Start your journey with Fermor"
              >
                <span>Start your journey</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3.5L10.5 8L6 12.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Subtle Journey Step Footer */}
            <div className="flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-[#DDEBE3]/75 font-semibold mt-10">
              <span>Understand</span>
              <span className="w-1 h-1 rounded-full bg-[#DDEBE3]/40" />
              <span>Act</span>
              <span className="w-1 h-1 rounded-full bg-[#DDEBE3]/40" />
              <span>Grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
