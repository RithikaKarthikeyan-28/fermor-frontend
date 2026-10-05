"use client";

import { useState, useEffect, useRef } from "react";

export default function Journey() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F7F7F2] border-t border-[#E5E8E3] overflow-hidden"
    >
      <div className="fermor-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
            <span>YOUR MONEY JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171A17] tracking-tight leading-[1.12] mb-5">
            Three steps. One clearer financial life.
          </h2>

          <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed">
            From understanding where you are today to building where you want to
            be, Fermor helps turn financial information into meaningful action.
          </p>
        </div>

        {/* Connected Journey Stages */}
        <div className="relative flex flex-col gap-16 sm:gap-24 lg:gap-32">
          {/* Desktop Connecting Central Line */}
          <div
            className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#174D3A] via-[#286A51] to-[#388467] opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          {/* ================= STAGE 01: UNDERSTAND ================= */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Narrative (Left on Desktop) */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pr-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#174D3A] text-white flex items-center justify-center text-xs font-bold metric-value shadow-xs transition-transform hover:scale-105">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#174D3A]">
                  UNDERSTAND
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171A17] tracking-tight mb-4">
                See the bigger picture.
              </h3>

              <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed max-w-lg">
                Understand your spending, savings and financial habits without
                spreadsheets, confusion or guesswork.
              </p>
            </div>

            {/* Product Card: Spending Insight (Right on Desktop) */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white border border-[#E5E8E3] rounded-3xl p-6 sm:p-8 shadow-[0_16px_36px_-8px_rgba(23,77,58,0.06),0_2px_8px_rgba(23,26,23,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-6px_rgba(23,77,58,0.09)]">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E8E3] mb-5">
                  <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                    MONTHLY SPENDING
                  </span>
                  <span className="text-xs text-[#174D3A] bg-[#DDEBE3] px-2.5 py-0.5 rounded-full font-medium">
                    Current Cycle
                  </span>
                </div>

                {/* Main Metric & Comparison */}
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                  <div>
                    <span className="text-3xl sm:text-4xl font-bold text-[#171A17] metric-value tracking-tight">
                      ₹32,450
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M6 9V3M6 9L3.5 6.5M6 9L8.5 6.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Compared with last month: ↓ 12%</span>
                  </div>
                </div>

                {/* Segmented Spending Indicator Bar */}
                <div className="mb-6">
                  <div className="h-3 w-full rounded-full bg-[#F0F2EB] flex gap-1 p-0.5 overflow-hidden">
                    <div
                      className="bg-[#174D3A] h-full rounded-l-full transition-all duration-1000 ease-out"
                      style={{ width: prefersReducedMotion || isInView ? "25.3%" : "0%" }}
                      title="Food: 25.3%"
                    />
                    <div
                      className="bg-[#286A51] h-full transition-all duration-1000 delay-150 ease-out"
                      style={{ width: prefersReducedMotion || isInView ? "16.6%" : "0%" }}
                      title="Shopping: 16.6%"
                    />
                    <div
                      className="bg-[#439678] h-full transition-all duration-1000 delay-300 ease-out"
                      style={{ width: prefersReducedMotion || isInView ? "9.9%" : "0%" }}
                      title="Transport: 9.9%"
                    />
                    <div
                      className="bg-[#DDEBE3] h-full rounded-r-full transition-all duration-1000 delay-500 ease-out"
                      style={{ width: prefersReducedMotion || isInView ? "48.2%" : "0%" }}
                      title="Others: 48.2%"
                    />
                  </div>
                </div>

                {/* Categories Breakdown */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F7F2] border border-[#E5E8E3]/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#174D3A]" />
                      <span className="text-xs font-medium text-[#171A17]">
                        Food
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#171A17] metric-value">
                      ₹8,200
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F7F2] border border-[#E5E8E3]/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#286A51]" />
                      <span className="text-xs font-medium text-[#171A17]">
                        Shopping
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#171A17] metric-value">
                      ₹5,400
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F7F2] border border-[#E5E8E3]/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#439678]" />
                      <span className="text-xs font-medium text-[#171A17]">
                        Transport
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#171A17] metric-value">
                      ₹3,200
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F7F2] border border-[#E5E8E3]/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A3BEB1]" />
                      <span className="text-xs font-medium text-[#171A17]">
                        Others
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#171A17] metric-value">
                      ₹15,650
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Flow Indicator (Mobile only) */}
          <div className="flex lg:hidden justify-center -my-8" aria-hidden="true">
            <div className="w-7 h-7 rounded-full bg-white border border-[#E5E8E3] flex items-center justify-center text-[#174D3A] shadow-xs">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M8 3V13M8 13L4 9M8 13L12 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* ================= STAGE 02: ACT ================= */}
          <div id="insights" className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center scroll-mt-24">
            {/* Product Card: Insight / Recommendation (Left on Desktop) */}
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <div className="bg-white border-2 border-[#286A51]/25 rounded-3xl p-6 sm:p-8 shadow-[0_16px_36px_-8px_rgba(23,77,58,0.06),0_2px_8px_rgba(23,26,23,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-6px_rgba(23,77,58,0.09)] relative overflow-hidden">
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#286A51] to-[#388467]" />

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E8E3] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#286A51] animate-pulse-gentle" />
                    <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#286A51]">
                      SMART INSIGHT
                    </span>
                  </div>
                  <span className="text-xs text-[#286A51] bg-[#DDEBE3] px-2.5 py-0.5 rounded-full font-medium">
                    Actionable
                  </span>
                </div>

                {/* Core Finding Statement */}
                <h4 className="text-xl sm:text-2xl font-bold text-[#171A17] tracking-tight leading-snug mb-5">
                  &ldquo;You spent 18% more on dining this month.&rdquo;
                </h4>

                {/* Potential Saving Box */}
                <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-4 sm:p-5 flex items-center justify-between mb-6">
                  <div>
                    <span className="block text-[0.6875rem] sm:text-xs uppercase tracking-wider text-[#6B716B] font-semibold mb-1">
                      Potential saving
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#174D3A] metric-value">
                      ₹2,400
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#DDEBE3] flex items-center justify-center text-[#174D3A]">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* CTA Link */}
                <a
                  href="#product"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#174D3A] bg-[#DDEBE3] hover:bg-[#D1E3DA] px-4 py-2.5 rounded-full transition-colors group"
                  aria-label="Explore financial insights in your product dashboard"
                >
                  <span>Explore insight</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Narrative (Right on Desktop) */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#286A51] text-white flex items-center justify-center text-xs font-bold metric-value shadow-xs transition-transform hover:scale-105">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#286A51]">
                  ACT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171A17] tracking-tight mb-4">
                Know what to do next.
              </h3>

              <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed max-w-lg">
                Turn financial information into simple, meaningful actions that
                help you make better decisions.
              </p>
            </div>
          </div>

          {/* Connecting Flow Indicator (Mobile only) */}
          <div className="flex lg:hidden justify-center -my-8" aria-hidden="true">
            <div className="w-7 h-7 rounded-full bg-white border border-[#E5E8E3] flex items-center justify-center text-[#174D3A] shadow-xs">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M8 3V13M8 13L4 9M8 13L12 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* ================= STAGE 03: GROW ================= */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Narrative (Left on Desktop) */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pr-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#388467] text-white flex items-center justify-center text-xs font-bold metric-value shadow-xs transition-transform hover:scale-105">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#388467]">
                  GROW
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171A17] tracking-tight mb-4">
                Build toward what matters.
              </h3>

              <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed max-w-lg">
                Create financial goals, build better habits and make steady
                progress toward the future you want.
              </p>
            </div>

            {/* Product Card: Goal Card (Right on Desktop) */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white border border-[#E5E8E3] rounded-3xl p-6 sm:p-8 shadow-[0_16px_36px_-8px_rgba(23,77,58,0.06),0_2px_8px_rgba(23,26,23,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-6px_rgba(23,77,58,0.09)]">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E8E3] mb-5">
                  <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                    YOUR GOAL
                  </span>
                  <span className="text-xs text-[#388467] bg-[#DDEBE3] px-2.5 py-0.5 rounded-full font-medium">
                    Active Target
                  </span>
                </div>

                {/* Goal Name */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#171A17] tracking-tight">
                    Emergency Fund
                  </h4>
                  <span className="text-xs sm:text-sm font-bold text-[#174D3A] bg-[#DDEBE3] px-3 py-1 rounded-full metric-value">
                    68% complete
                  </span>
                </div>

                {/* Amount Figures */}
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-[#171A17] metric-value">
                    ₹68,000{" "}
                    <span className="text-base sm:text-lg font-normal text-[#6B716B]">
                      / ₹1,00,000
                    </span>
                  </div>
                </div>

                {/* Polished Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-[#E5E8E3] h-3.5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="bg-gradient-to-r from-[#174D3A] to-[#286A51] h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: prefersReducedMotion || isInView ? "68%" : "0%" }}
                    />
                  </div>
                </div>

                {/* Goal Footer / Remaining Target */}
                <div className="flex items-center justify-between pt-3 border-t border-[#E5E8E3] text-xs sm:text-sm">
                  <div className="font-semibold text-[#171A17] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#388467]" />
                    <span>₹32,000 to go</span>
                  </div>
                  <span className="text-[#6B716B]">
                    Est. completion: 4 months
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
