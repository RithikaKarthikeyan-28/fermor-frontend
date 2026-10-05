"use client";

import { useState, useEffect, useRef } from "react";

export default function Progress() {
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

  // Health score calculation
  const healthCircumference = 2 * Math.PI * 26; // radius 26 -> ~163.36
  const healthTargetOffset = healthCircumference * (1 - 0.82); // 82% filled

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F7F7F2] border-t border-[#E5E8E3] overflow-hidden"
    >
      <div className="fermor-container">
        {/* Section Intro */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
            <span>YOUR FINANCIAL PICTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171A17] tracking-tight leading-[1.12] mb-5">
            Watch your progress become visible.
          </h2>

          <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed">
            One clear view of the numbers, habits and goals that shape your
            financial journey.
          </p>
        </div>

        {/* ================= MAIN DASHBOARD CONTAINER ================= */}
        <div className="bg-white border border-[#E5E8E3] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_50px_-12px_rgba(23,77,58,0.07),0_4px_16px_rgba(23,26,23,0.02)] relative overflow-hidden">
          {/* Subtle Ambient Background Gradients inside the dashboard */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#DDEBE3]/40 to-transparent rounded-full filter blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          {/* 1. Header & Financial Health Score */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E8E3]">
            <div>
              <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#6B716B] block mb-1">
                YOUR FINANCIAL OVERVIEW
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#171A17] tracking-tight flex items-center gap-2">
                <span>Good morning</span>
                <span className="text-2xl" role="img" aria-label="waving hand">
                  👋
                </span>
              </h3>
            </div>

            {/* Health Score Pill Widget */}
            <div className="flex items-center gap-4 bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-3 sm:px-4 sm:py-3 self-start md:self-auto">
              {/* Circular SVG Gauge */}
              <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 60 60" aria-hidden="true">
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    className="stroke-[#DDEBE3]"
                    strokeWidth="4.5"
                    fill="none"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    className="stroke-[#174D3A] transition-all duration-1000 ease-out"
                    strokeWidth="4.5"
                    strokeDasharray={healthCircumference}
                    strokeDashoffset={
                      prefersReducedMotion || isInView
                        ? healthTargetOffset
                        : healthCircumference
                    }
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="absolute text-sm font-bold text-[#171A17] metric-value">
                  82
                </span>
              </div>

              <div>
                <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#6B716B]">
                  Financial Health
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#171A17] metric-value">
                    82 <span className="text-xs font-normal text-[#6B716B]">/ 100</span>
                  </span>
                  <span className="text-xs font-semibold text-[#174D3A] bg-[#DDEBE3] px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                    <span>↑</span> 8 pts
                  </span>
                </div>
                <div className="text-xs text-[#6B716B] mt-0.5 font-medium">
                  Healthy financial momentum
                </div>
              </div>
            </div>
          </div>

          {/* 2. Three Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 py-8 border-b border-[#E5E8E3] relative z-10">
            {/* Metric 1: NET WORTH */}
            <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                  NET WORTH
                </span>
                <span className="text-xs font-semibold text-[#174D3A] bg-[#DDEBE3] px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                  ↑ 12.4%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#171A17] metric-value tracking-tight mb-1">
                ₹8,42,500
              </div>
              <p className="text-xs text-[#6B716B]">
                Across assets &amp; liquid accounts
              </p>
            </div>

            {/* Metric 2: SAVINGS */}
            <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                  SAVINGS
                </span>
                <span className="text-xs font-semibold text-[#174D3A] bg-[#DDEBE3] px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                  ↑ 8.2%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#171A17] metric-value tracking-tight mb-1">
                ₹36,800
              </div>
              <p className="text-xs text-[#6B716B]">
                Added to high-yield reserve this month
              </p>
            </div>

            {/* Metric 3: MONTHLY SPENDING */}
            <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                  MONTHLY SPENDING
                </span>
                <span className="text-xs font-semibold text-[#174D3A] bg-[#DDEBE3] px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                  ↓ 12%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#171A17] metric-value tracking-tight mb-1">
                ₹32,450
              </div>
              <p className="text-xs text-[#6B716B]">
                Well within projected budget envelope
              </p>
            </div>
          </div>

          {/* 3. Trend Chart + Goals & Insights (Two-column layout on Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10 items-start">
            {/* Left: Financial Trend Chart (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#6B716B] block">
                    FINANCIAL TREND
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#171A17] tracking-tight">
                    6-Month Financial Momentum
                  </h4>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5E8E3] text-xs font-medium text-[#174D3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
                  <span>52 → 82 Score</span>
                </div>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full relative">
                <svg
                  className="w-full h-auto overflow-visible"
                  viewBox="0 0 500 190"
                  role="img"
                  aria-label="6-month financial momentum chart showing score progression from 52 in May to 82 in October"
                >
                  <defs>
                    <linearGradient
                      id="momentumAreaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#174D3A" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#174D3A" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line
                    x1="20"
                    y1="40"
                    x2="480"
                    y2="40"
                    stroke="#E5E8E3"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="95"
                    x2="480"
                    y2="95"
                    stroke="#E5E8E3"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="150"
                    x2="480"
                    y2="150"
                    stroke="#E5E8E3"
                    strokeWidth="1"
                  />

                  {/* Grid labels */}
                  <text x="485" y="44" fill="#6B716B" fontSize="11" fontWeight="500" textAnchor="start">
                    90
                  </text>
                  <text x="485" y="99" fill="#6B716B" fontSize="11" fontWeight="500" textAnchor="start">
                    65
                  </text>
                  <text x="485" y="154" fill="#6B716B" fontSize="11" fontWeight="500" textAnchor="start">
                    40
                  </text>

                  {/* Area Fill */}
                  <path
                    d="M 30 129 C 74 125, 84 118, 118 116 C 152 114, 172 110, 206 109.5 C 240 109, 260 98, 294 96.5 C 328 95, 350 83, 382 81.3 C 414 79.5, 436 66, 470 64 L 470 150 L 30 150 Z"
                    fill="url(#momentumAreaGradient)"
                  />

                  {/* Animated Stroke Line */}
                  <path
                    d="M 30 129 C 74 125, 84 118, 118 116 C 152 114, 172 110, 206 109.5 C 240 109, 260 98, 294 96.5 C 328 95, 350 83, 382 81.3 C 414 79.5, 436 66, 470 64"
                    fill="none"
                    stroke="#174D3A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="520"
                    strokeDashoffset={
                      prefersReducedMotion || isInView ? 0 : 520
                    }
                    className="transition-all duration-1000 ease-out"
                  />

                  {/* Data Points */}
                  <circle cx="30" cy="129" r="4" fill="#FFFFFF" stroke="#174D3A" strokeWidth="2.5" />
                  <circle cx="118" cy="116" r="4" fill="#FFFFFF" stroke="#174D3A" strokeWidth="2.5" />
                  <circle cx="206" cy="109.5" r="4" fill="#FFFFFF" stroke="#174D3A" strokeWidth="2.5" />
                  <circle cx="294" cy="96.5" r="4" fill="#FFFFFF" stroke="#174D3A" strokeWidth="2.5" />
                  <circle cx="382" cy="81.3" r="4" fill="#FFFFFF" stroke="#174D3A" strokeWidth="2.5" />

                  {/* Final Active Peak Point (Oct: 82) */}
                  <circle cx="470" cy="64" r="7" fill="#DDEBE3" />
                  <circle cx="470" cy="64" r="4.5" fill="#174D3A" />

                  {/* Floating Value Tag for latest month */}
                  <g transform="translate(436, 32)">
                    <rect width="52" height="22" rx="11" fill="#174D3A" />
                    <text x="26" y="15" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      82 pts
                    </text>
                  </g>

                  {/* Month X-Axis Labels */}
                  <text x="30" y="172" fill="#6B716B" fontSize="12" fontWeight="600" textAnchor="middle">
                    May
                  </text>
                  <text x="118" y="172" fill="#6B716B" fontSize="12" fontWeight="600" textAnchor="middle">
                    Jun
                  </text>
                  <text x="206" y="172" fill="#6B716B" fontSize="12" fontWeight="600" textAnchor="middle">
                    Jul
                  </text>
                  <text x="294" y="172" fill="#6B716B" fontSize="12" fontWeight="600" textAnchor="middle">
                    Aug
                  </text>
                  <text x="382" y="172" fill="#6B716B" fontSize="12" fontWeight="600" textAnchor="middle">
                    Sep
                  </text>
                  <text x="470" y="172" fill="#171A17" fontSize="12" fontWeight="bold" textAnchor="middle">
                    Oct
                  </text>
                </svg>
              </div>

              <div className="pt-3 mt-1 flex items-center justify-between text-xs text-[#6B716B]">
                <span>Progress baseline: 52 (May)</span>
                <span className="font-medium text-[#174D3A]">
                  Steady upward compounding
                </span>
              </div>
            </div>

            {/* Right: Goals Progress + Recent Insight (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* GOAL PROGRESS CARD */}
              <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                    GOAL PROGRESS
                  </span>
                  <span className="text-xs font-medium text-[#174D3A] bg-[#DDEBE3] px-2.5 py-0.5 rounded-full">
                    2 Active
                  </span>
                </div>

                {/* Goal 1: Emergency Fund */}
                <div className="mb-5 pb-4 border-b border-[#E5E8E3]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-[#171A17]">
                      Emergency Fund
                    </span>
                    <span className="text-xs font-bold text-[#174D3A] metric-value">
                      68%
                    </span>
                  </div>
                  <div className="text-xs text-[#6B716B] mb-2 metric-value">
                    ₹68,000 / ₹1,00,000
                  </div>
                  <div className="w-full bg-[#E5E8E3] h-2.5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="bg-[#174D3A] h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: prefersReducedMotion || isInView ? "68%" : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Goal 2: Travel Fund */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-[#171A17]">
                      Travel Fund
                    </span>
                    <span className="text-xs font-bold text-[#286A51] metric-value">
                      42%
                    </span>
                  </div>
                  <div className="text-xs text-[#6B716B] mb-2 metric-value">
                    ₹42,000 / ₹1,00,000
                  </div>
                  <div className="w-full bg-[#E5E8E3] h-2.5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="bg-[#286A51] h-full rounded-full transition-all duration-1000 delay-200 ease-out"
                      style={{
                        width: prefersReducedMotion || isInView ? "42%" : "0%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* RECENT INSIGHT CARD */}
              <div className="bg-[#FCFDFB] border-2 border-[#174D3A]/20 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#174D3A] animate-pulse-gentle" />
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#174D3A]">
                    RECENT INSIGHT
                  </span>
                </div>

                <h5 className="text-base sm:text-lg font-bold text-[#171A17] tracking-tight mb-2 leading-snug">
                  &ldquo;Your spending is trending lower this month.&rdquo;
                </h5>

                <p className="text-xs sm:text-sm text-[#6B716B] leading-relaxed">
                  You&apos;re currently{" "}
                  <span className="font-bold text-[#171A17] metric-value">
                    ₹4,200
                  </span>{" "}
                  below your average monthly spending.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
