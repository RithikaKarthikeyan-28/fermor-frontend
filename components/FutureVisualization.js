"use client";

import { useState, useEffect, useRef } from "react";

const MILESTONES = [
  {
    period: "TODAY",
    amount: "₹36,800",
    suffix: "saved",
    status: "Starting baseline",
    description: "Current disciplined reserve balance",
    highlight: false,
    step: "01",
  },
  {
    period: "6 MONTHS",
    amount: "₹58,000",
    suffix: "",
    status: "+₹21,200 momentum",
    description: "Consistent habit formed with zero panic",
    highlight: false,
    step: "02",
  },
  {
    period: "1 YEAR",
    amount: "₹92,000",
    suffix: "",
    status: "+₹34,000 compounded",
    description: "Compounding acceleration takes hold",
    highlight: false,
    step: "03",
  },
  {
    period: "YOUR GOAL",
    amount: "₹1,00,000",
    suffix: "target",
    status: "Milestone reached",
    description: "Target achieved with calm clarity",
    highlight: true,
    step: "04",
  },
];

export default function FutureVisualization() {
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
      { threshold: 0.15 }
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
      id="future"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F7F7F2] border-t border-[#E5E8E3] overflow-hidden"
    >
      <div className="fermor-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
            <span>FINANCIAL PROJECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171A17] tracking-tight leading-[1.12] mb-5">
            Your future, visualized.
          </h2>

          <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed">
            Small decisions look different when you can see where they lead.
          </p>
        </div>

        {/* Main Visualization Canvas Card */}
        <div className="bg-white border border-[#E5E8E3] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_24px_50px_-12px_rgba(23,77,58,0.07),0_4px_16px_rgba(23,26,23,0.02)] relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-[#DDEBE3]/35 to-transparent rounded-full filter blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          {/* Top Visualization Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E5E8E3] mb-8 lg:mb-12 relative z-10">
            <div>
              <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#6B716B] block mb-1">
                ILLUSTRATIVE PROGRESSION PATH
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171A17] tracking-tight">
                From First Step to Final Goal
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto bg-[#F7F7F2] border border-[#E5E8E3] px-3.5 py-1.5 rounded-full text-xs text-[#174D3A] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#174D3A] animate-pulse-gentle" />
              <span>Small decisions → Consistent progress → Future goal</span>
            </div>
          </div>

          {/* ================= DESKTOP / TABLET HORIZONTAL JOURNEY (>= md) ================= */}
          <div className="hidden md:block relative z-10">
            {/* SVG Connecting Journey Curve */}
            <div className="relative w-full h-24 mb-6">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 900 90"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="journeyPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A3BEB1" />
                    <stop offset="35%" stopColor="#286A51" />
                    <stop offset="70%" stopColor="#174D3A" />
                    <stop offset="100%" stopColor="#123C2D" />
                  </linearGradient>
                </defs>

                {/* Baseline Dotted Track */}
                <path
                  d="M 112.5 68 C 225 66, 260 54, 337.5 52 C 415 50, 485 36, 562.5 34 C 640 32, 710 16, 787.5 14"
                  stroke="#E5E8E3"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />

                {/* Active Animated Journey Line */}
                <path
                  d="M 112.5 68 C 225 66, 260 54, 337.5 52 C 415 50, 485 36, 562.5 34 C 640 32, 710 16, 787.5 14"
                  stroke="url(#journeyPathGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="800"
                  strokeDashoffset={prefersReducedMotion || isInView ? 0 : 800}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Milestone Node 1 (Today: x=112.5, y=68) */}
                <circle cx="112.5" cy="68" r="7" fill="#F7F7F2" stroke="#A3BEB1" strokeWidth="3" />
                <circle cx="112.5" cy="68" r="3" fill="#174D3A" />

                {/* Milestone Node 2 (6 Months: x=337.5, y=52) */}
                <circle cx="337.5" cy="52" r="7" fill="#F7F7F2" stroke="#286A51" strokeWidth="3" />
                <circle cx="337.5" cy="52" r="3" fill="#286A51" />

                {/* Milestone Node 3 (1 Year: x=562.5, y=34) */}
                <circle cx="562.5" cy="34" r="7" fill="#F7F7F2" stroke="#174D3A" strokeWidth="3" />
                <circle cx="562.5" cy="34" r="3" fill="#174D3A" />

                {/* Milestone Node 4 (Goal: x=787.5, y=14) */}
                <circle cx="787.5" cy="14" r="11" fill="#DDEBE3" />
                <circle cx="787.5" cy="14" r="7" fill="#174D3A" />
                <circle cx="787.5" cy="14" r="3.5" fill="#FFFFFF" />
              </svg>
            </div>

            {/* 4 Connected Milestone Cards */}
            <div className="grid grid-cols-4 gap-4 lg:gap-6">
              {MILESTONES.map((item, idx) => (
                <div
                  key={item.period}
                  className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    item.highlight
                      ? "bg-[#174D3A] text-white border-[#174D3A] shadow-[0_16px_36px_-8px_rgba(23,77,58,0.25)]"
                      : "bg-[#F7F7F2] text-[#171A17] border-[#E5E8E3] hover:border-[#174D3A]/30 hover:shadow-xs"
                  }`}
                  style={{
                    transitionDelay: prefersReducedMotion ? "0ms" : `${idx * 150}ms`,
                  }}
                >
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[0.6875rem] font-bold uppercase tracking-wider ${
                        item.highlight ? "text-[#DDEBE3]" : "text-[#6B716B]"
                      }`}
                    >
                      {item.period}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        item.highlight
                          ? "bg-white/20 text-white"
                          : "bg-[#DDEBE3] text-[#174D3A]"
                      }`}
                    >
                      Step {item.step}
                    </span>
                  </div>

                  {/* Main Metric Value */}
                  <div className="mb-2">
                    <div
                      className={`text-2xl lg:text-3xl font-bold metric-value tracking-tight ${
                        item.highlight ? "text-white" : "text-[#171A17]"
                      }`}
                    >
                      {item.amount}{" "}
                      {item.suffix && (
                        <span
                          className={`text-xs font-normal ${
                            item.highlight ? "text-[#DDEBE3]" : "text-[#6B716B]"
                          }`}
                        >
                          {item.suffix}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div
                    className={`text-xs font-semibold mb-1 ${
                      item.highlight ? "text-[#DDEBE3]" : "text-[#174D3A]"
                    }`}
                  >
                    {item.status}
                  </div>

                  <p
                    className={`text-xs leading-relaxed ${
                      item.highlight ? "text-[#DDEBE3]/80" : "text-[#6B716B]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MOBILE CLEAN VERTICAL JOURNEY (< md) ================= */}
          <div className="block md:hidden relative z-10">
            <div className="relative pl-6 sm:pl-8 space-y-6">
              {/* Vertical Connecting Line */}
              <div
                className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#A3BEB1] via-[#286A51] to-[#174D3A]"
                aria-hidden="true"
              />

              {MILESTONES.map((item, idx) => (
                <div key={item.period} className="relative">
                  {/* Vertical Node Indicator */}
                  <div
                    className={`absolute -left-6 sm:-left-8 top-5 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                      item.highlight
                        ? "bg-[#174D3A] border-[#DDEBE3] shadow-xs"
                        : "bg-white border-[#286A51]"
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.highlight ? "bg-white" : "bg-[#286A51]"
                      }`}
                    />
                  </div>

                  {/* Mobile Milestone Card */}
                  <div
                    className={`p-5 rounded-2xl border transition-all ${
                      item.highlight
                        ? "bg-[#174D3A] text-white border-[#174D3A] shadow-md"
                        : "bg-[#F7F7F2] text-[#171A17] border-[#E5E8E3]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[0.6875rem] font-bold uppercase tracking-wider ${
                          item.highlight ? "text-[#DDEBE3]" : "text-[#6B716B]"
                        }`}
                      >
                        {item.period}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          item.highlight
                            ? "bg-white/20 text-white"
                            : "bg-[#DDEBE3] text-[#174D3A]"
                        }`}
                      >
                        Step {item.step}
                      </span>
                    </div>

                    <div
                      className={`text-2xl font-bold metric-value tracking-tight mb-1 ${
                        item.highlight ? "text-white" : "text-[#171A17]"
                      }`}
                    >
                      {item.amount}{" "}
                      {item.suffix && (
                        <span
                          className={`text-xs font-normal ${
                            item.highlight ? "text-[#DDEBE3]" : "text-[#6B716B]"
                          }`}
                        >
                          {item.suffix}
                        </span>
                      )}
                    </div>

                    <div
                      className={`text-xs font-semibold mb-1 ${
                        item.highlight ? "text-[#DDEBE3]" : "text-[#174D3A]"
                      }`}
                    >
                      {item.status}
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        item.highlight ? "text-[#DDEBE3]/80" : "text-[#6B716B]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Compounding Takeaway Footnote */}
          <div className="mt-8 lg:mt-12 pt-6 border-t border-[#E5E8E3] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6B716B] relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
              <span>
                Demonstration model based on steady allocation of ₹3,500/month.
              </span>
            </div>
            <div className="text-[#174D3A] font-semibold">
              Compounding advantage: Clarity prevents costly derailments.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
