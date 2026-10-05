"use client";

import { useState } from "react";

const GOALS = [
  {
    id: "home",
    kicker: "HORIZON: 3–5 YEARS",
    title: "Buying a Home",
    description: "Build toward a place of your own.",
    recommendation:
      "Your next step could be understanding how much you can comfortably set aside each month.",
    metricLabel: "Suggested focus",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    id: "life-goal",
    kicker: "CUSTOM MILESTONE",
    title: "Planning a Life Goal",
    description: "Turn something you've been planning into a clear financial goal.",
    recommendation:
      "Start by turning your goal into a number and a timeline.",
    metricLabel: "Suggested focus",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    id: "freedom",
    kicker: "CONTINUOUS MOMENTUM",
    title: "Building Financial Freedom",
    description: "Create habits that give you more freedom over time.",
    recommendation:
      "Small, consistent financial decisions can create meaningful progress over time.",
    metricLabel: "Suggested focus",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v8" />
        <path d="M4.93 10.93l5.66 5.66" />
        <path d="M2 18h8" />
        <path d="M19.07 10.93l-5.66 5.66" />
        <path d="M22 18h-8" />
        <circle cx="12" cy="18" r="3" />
      </svg>
    ),
  },
];

export default function GoalSelector() {
  const [selectedGoalId, setSelectedGoalId] = useState("home");

  const selectedGoal =
    GOALS.find((g) => g.id === selectedGoalId) || GOALS[0];

  const handleKeyDown = (e, currentIndex) => {
    let nextIndex = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % GOALS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + GOALS.length) % GOALS.length;
    }

    if (nextIndex !== null) {
      setSelectedGoalId(GOALS[nextIndex].id);
      // Focus the newly selected button
      const nextButton = document.getElementById(`goal-card-${GOALS[nextIndex].id}`);
      if (nextButton) {
        nextButton.focus();
      }
    }
  };

  return (
    <section
      id="goals"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F7F7F2] border-t border-[#E5E8E3] overflow-hidden"
    >
      <div className="fermor-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
            <span>CHOOSE WHAT MATTERS TO YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171A17] tracking-tight leading-[1.12] mb-5">
            What are you working toward?
          </h2>

          <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed">
            Your financial journey is personal. Start with what matters most to
            you.
          </p>
        </div>

        {/* Three Selectable Goal Cards */}
        <div
          role="radiogroup"
          aria-label="Select your primary financial focus"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto mb-8"
        >
          {GOALS.map((goal, idx) => {
            const isSelected = goal.id === selectedGoalId;

            return (
              <button
                key={goal.id}
                id={`goal-card-${goal.id}`}
                type="button"
                role="radio"
                tabIndex={isSelected ? 0 : -1}
                aria-checked={isSelected}
                onClick={() => setSelectedGoalId(goal.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`relative text-left p-6 sm:p-7 rounded-2xl sm:rounded-3xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#174D3A] focus-visible:ring-offset-2 ${
                  isSelected
                    ? "bg-white border-2 border-[#174D3A] shadow-[0_16px_36px_-8px_rgba(23,77,58,0.12),0_2px_8px_rgba(23,26,23,0.03)] -translate-y-1"
                    : "bg-white/80 border border-[#E5E8E3] hover:border-[#174D3A]/40 hover:bg-white hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
                }`}
              >
                {/* Active Indicator Badge / Radio */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#174D3A] text-white"
                        : "bg-[#F0F2EB] text-[#174D3A]"
                    }`}
                  >
                    {goal.icon}
                  </div>

                  <span
                    className={`text-[0.6875rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                      isSelected
                        ? "bg-[#DDEBE3] text-[#174D3A]"
                        : "bg-transparent text-[#6B716B]"
                    }`}
                  >
                    {isSelected ? "Active Focus" : goal.kicker}
                  </span>
                </div>

                {/* Card Title & Copy */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#171A17] tracking-tight mb-2">
                  {goal.title}
                </h3>

                <p className="text-sm text-[#6B716B] leading-relaxed mb-6 min-h-[2.5rem]">
                  {goal.description}
                </p>

                {/* Bottom Status / Selection Marker */}
                <div className="pt-4 border-t border-[#E5E8E3] flex items-center justify-between text-xs">
                  <span className="text-[#6B716B] font-medium">
                    {goal.metricLabel}
                  </span>
                  <div className="flex items-center gap-1.5 font-semibold text-[#174D3A]">
                    {isSelected ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-[#174D3A]" />
                        <span>Selected</span>
                      </>
                    ) : (
                      <span className="text-[#6B716B]">
                        Select →
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Contextual Action Panel */}
        <div className="max-w-3xl mx-auto">
          <div
            role="region"
            aria-live="polite"
            aria-label="Contextual next step recommendation"
            className="bg-white border border-[#E5E8E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_8px_24px_-4px_rgba(23,26,23,0.04)] relative overflow-hidden transition-all duration-300"
          >
            {/* Subtle Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#174D3A]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#174D3A]" />
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#174D3A]">
                    NEXT STEP CLARITY
                  </span>
                  <span className="text-xs text-[#6B716B]">
                    · {selectedGoal.title}
                  </span>
                </div>

                <p className="text-base sm:text-lg font-semibold text-[#171A17] leading-snug">
                  &ldquo;{selectedGoal.recommendation}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#6B716B] mt-2">
                  Fermor helps translate this intention into a clear, realistic
                  routine you can stick to.
                </p>
              </div>

              <div className="sm:self-center flex-shrink-0">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#174D3A] text-white hover:bg-[#123C2D] text-sm font-medium transition-all shadow-xs hover:shadow-md"
                >
                  <span>See the 3-step journey</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 3v10M8 13l4-4M8 13L4 9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
