"use client";

import { useState } from "react";

export default function NextStep() {
  const [isSaved, setIsSaved] = useState(false);

  const handleToggle = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <section
      id="next-step"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F7F7F2] border-t border-[#E5E8E3] overflow-hidden"
    >
      <div className="fermor-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
            <span>KNOW YOUR NEXT MOVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171A17] tracking-tight leading-[1.12] mb-5">
            If you only do one thing today...
          </h2>

          <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed">
            Financial clarity isn&apos;t about doing fifty things at once. It&apos;s
            about knowing the single next move that creates the highest impact.
          </p>
        </div>

        {/* Premium Insight / Action Card */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`bg-white border rounded-3xl p-6 sm:p-10 transition-all duration-300 relative overflow-hidden ${
              isSaved
                ? "border-[#174D3A] shadow-[0_20px_48px_-10px_rgba(23,77,58,0.14)]"
                : "border-[#E5E8E3] shadow-[0_16px_36px_-8px_rgba(23,77,58,0.06),0_2px_8px_rgba(23,26,23,0.02)]"
            }`}
          >
            {/* Top Accent Strip */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300 ${
                isSaved
                  ? "bg-gradient-to-r from-[#174D3A] via-[#286A51] to-[#388467]"
                  : "bg-[#174D3A]"
              }`}
            />

            {/* Card Header & Category */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E5E8E3] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#174D3A] animate-pulse-gentle" />
                <span className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider text-[#174D3A]">
                  RECOMMENDED ACTION
                </span>
              </div>
              <span className="text-xs font-semibold text-[#174D3A] bg-[#DDEBE3] px-3 py-1 rounded-full">
                High Impact
              </span>
            </div>

            {/* Suggested Action Headline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#171A17] tracking-tight mb-3">
              Move ₹2,000 → Emergency Fund
            </h3>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#6B716B] leading-relaxed mb-8">
              You&apos;re already spending less this month. Moving ₹2,000 toward
              your emergency fund could take you one step closer to your goal.
            </p>

            {/* Goal Progress Indicator */}
            <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-5 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B716B]">
                  Emergency Fund Progress
                </span>
                <span className="text-xs font-bold text-[#174D3A] metric-value">
                  {isSaved ? "70% complete (+2%)" : "68% complete"}
                </span>
              </div>

              {/* Amount Progress */}
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-xl sm:text-2xl font-bold text-[#171A17] metric-value">
                  {isSaved ? "₹70,000" : "₹68,000"}{" "}
                  <span className="text-sm font-normal text-[#6B716B]">
                    / ₹1,00,000 target
                  </span>
                </div>
                <div className="text-xs font-medium text-[#6B716B]">
                  {isSaved ? "₹30,000 to go" : "₹32,000 to go"}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#E5E8E3] h-3 rounded-full overflow-hidden p-0.5 flex">
                <div
                  className="bg-[#174D3A] h-full rounded-l-full transition-all duration-500 ease-out"
                  style={{ width: "68%" }}
                />
                {isSaved && (
                  <div
                    className="bg-[#286A51] h-full rounded-r-full transition-all duration-500 ease-out animate-fade-in"
                    style={{ width: "2%" }}
                    title="+₹2,000 step added"
                  />
                )}
              </div>
            </div>

            {/* Primary Action Button & Confirmation */}
            <div className="space-y-4">
              <button
                type="button"
                aria-pressed={isSaved}
                onClick={handleToggle}
                className={`w-full py-4 px-6 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#174D3A] focus-visible:ring-offset-2 ${
                  isSaved
                    ? "bg-[#DDEBE3] text-[#174D3A] hover:bg-[#D1E3DA]"
                    : "bg-[#174D3A] text-white hover:bg-[#123C2D]"
                }`}
              >
                {isSaved ? (
                  <>
                    <svg
                      className="w-5 h-5 text-[#174D3A]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Next step saved to plan</span>
                  </>
                ) : (
                  <>
                    <span>Make it my next step</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </>
                )}
              </button>

              {/* Contextual Feedback & Demonstration Notice */}
              {isSaved && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 rounded-2xl bg-[#F2F8F5] border border-[#DDEBE3] animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2 text-[#174D3A]">
                    <span className="font-semibold">✓ Next step queued.</span>
                    <span className="text-[#6B716B]">
                      (Demonstration only — no real financial transaction)
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#product"
                      className="font-bold text-[#174D3A] hover:underline"
                    >
                      View in Dashboard ↑
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSaved(false)}
                      className="text-[#6B716B] hover:text-[#171A17] underline cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
