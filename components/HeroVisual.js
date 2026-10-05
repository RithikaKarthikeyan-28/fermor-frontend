export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto sm:py-6">
      {/* Ambient background soft glow */}
      <div
        className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-[#DDEBE3]/60 via-[#DDEBE3]/20 to-transparent rounded-[40px] filter blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Card 1: Monthly spending (Floating top-right on sm+) */}
      <div className="sm:absolute sm:-top-3 sm:-right-4 sm:z-20 mb-3 sm:mb-0 animate-float-1">
        <div className="bg-white/95 backdrop-blur-md border border-[#E5E8E3] rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_28px_-6px_rgba(23,26,23,0.07),0_2px_8px_rgba(23,26,23,0.02)] flex items-center justify-between gap-4">
          <div>
            <span className="block text-[0.6875rem] uppercase tracking-wider text-[#6B716B] font-semibold">
              Monthly spending
            </span>
            <span className="text-lg sm:text-xl font-bold text-[#171A17] metric-value">
              ₹32,450
            </span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-semibold">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 9V3M6 9L3.5 6.5M6 9L8.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>-12%</span>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Savings (Floating bottom-left on sm+) */}
      <div className="hidden sm:flex sm:absolute sm:-bottom-5 sm:-left-4 sm:z-20 animate-float-2">
        <div className="bg-white/95 backdrop-blur-md border border-[#E5E8E3] rounded-2xl p-3.5 sm:p-4 shadow-[0_14px_30px_-6px_rgba(23,77,58,0.09),0_2px_8px_rgba(23,26,23,0.02)] flex items-center justify-between gap-4">
          <div>
            <span className="block text-[0.6875rem] uppercase tracking-wider text-[#6B716B] font-semibold">
              Savings
            </span>
            <span className="text-lg sm:text-xl font-bold text-[#171A17] metric-value">
              ₹36,800
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#DDEBE3] flex items-center justify-center text-[#174D3A]">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Card 3: Goal progress (Floating bottom-right on sm+) */}
      <div className="hidden sm:flex sm:absolute sm:-bottom-7 sm:right-6 sm:z-20 animate-float-1 [animation-delay:1.5s]">
        <div className="bg-white/95 backdrop-blur-md border border-[#E5E8E3] rounded-2xl p-3.5 sm:p-4 shadow-[0_14px_30px_-6px_rgba(23,26,23,0.08),0_2px_8px_rgba(23,26,23,0.02)] flex flex-col gap-2 min-w-[190px]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[0.6875rem] uppercase tracking-wider text-[#6B716B] font-semibold">
              Goal progress
            </span>
            <span className="text-sm font-bold text-[#174D3A] metric-value">
              68%
            </span>
          </div>
          <div className="w-full bg-[#E5E8E3] h-2 rounded-full overflow-hidden">
            <div className="bg-[#174D3A] h-full rounded-full w-[68%]" />
          </div>
        </div>
      </div>

      {/* Main Product Canvas Card */}
      <div className="bg-white border border-[#E5E8E3] rounded-3xl p-5 sm:p-7 shadow-[0_20px_45px_-12px_rgba(23,77,58,0.08),0_2px_10px_rgba(23,26,23,0.03)] relative overflow-hidden">
        {/* Top Bar / Header of Product Interface */}
        <div className="flex items-start justify-between pb-5 border-b border-[#E5E8E3] gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DDEBE3] text-[#174D3A] text-[0.6875rem] font-bold tracking-wider uppercase mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A] animate-pulse-gentle"></span>
              YOUR FINANCIAL JOURNEY
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#171A17] tracking-tight">
              Financial Storyboard
            </h3>
          </div>

          {/* Health Score Gauge */}
          <div className="flex items-center gap-3 bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl px-3 py-2">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  className="stroke-[#DDEBE3]"
                  strokeWidth="3.2"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  className="stroke-[#174D3A]"
                  strokeWidth="3.2"
                  strokeDasharray="94.2"
                  strokeDashoffset="16.9"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="absolute text-[0.6875rem] font-bold text-[#174D3A] metric-value">
                82%
              </span>
            </div>
            <div>
              <div className="text-[0.6875rem] text-[#6B716B] uppercase font-semibold tracking-wider">
                Financial Health
              </div>
              <div className="text-sm font-bold text-[#171A17] metric-value">
                82 <span className="text-xs font-normal text-[#6B716B]">/ 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Stages Track: 01 Understand -> 02 Act -> 03 Grow */}
        <div className="pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B716B]">
              Core Progression
            </span>
            <span className="text-xs font-medium text-[#174D3A] bg-[#DDEBE3] px-2.5 py-0.5 rounded-full">
              Phase 02 in Action
            </span>
          </div>

          <div className="relative flex flex-col gap-3.5">
            {/* Stage 01: Understand */}
            <div className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E8E3] hover:border-[#174D3A]/30 transition-all">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#174D3A] text-white flex items-center justify-center text-xs font-bold metric-value">
                01
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#171A17] tracking-tight">
                    Understand
                  </h4>
                  <span className="text-[0.6875rem] text-[#174D3A] font-semibold bg-[#DDEBE3] px-2 py-0.5 rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-xs text-[#6B716B] mt-0.5">
                  Spending patterns revealed & cashflow baseline established.
                </p>
              </div>
            </div>

            {/* Connecting Flow Arrow 1 */}
            <div className="flex justify-center -my-2">
              <div className="w-6 h-6 rounded-full bg-white border border-[#E5E8E3] flex items-center justify-center text-[#174D3A] shadow-xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M8 3V13M8 13L4 9M8 13L12 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Stage 02: Act */}
            <div className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FCFDFB] border-2 border-[#174D3A]/30 shadow-xs transition-all">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#174D3A] text-white flex items-center justify-center text-xs font-bold metric-value ring-4 ring-[#DDEBE3]">
                02
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#171A17] tracking-tight flex items-center gap-2">
                    <span>Act</span>
                    <span className="w-2 h-2 rounded-full bg-[#174D3A] animate-ping" />
                  </h4>
                  <span className="text-[0.6875rem] text-[#174D3A] font-bold bg-[#DDEBE3] px-2 py-0.5 rounded-full">
                    Live Now
                  </span>
                </div>
                <p className="text-xs text-[#6B716B] mt-0.5">
                  Smart savings routing & debt optimization rules applied.
                </p>
              </div>
            </div>

            {/* Connecting Flow Arrow 2 */}
            <div className="flex justify-center -my-2">
              <div className="w-6 h-6 rounded-full bg-white border border-[#E5E8E3] flex items-center justify-center text-[#174D3A] shadow-xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M8 3V13M8 13L4 9M8 13L12 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Stage 03: Grow */}
            <div className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E8E3] hover:border-[#174D3A]/30 transition-all opacity-95">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DDEBE3] text-[#174D3A] flex items-center justify-center text-xs font-bold metric-value">
                03
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#171A17] tracking-tight">
                    Grow
                  </h4>
                  <span className="text-[0.6875rem] text-[#6B716B] font-medium bg-white px-2 py-0.5 rounded-full border border-[#E5E8E3]">
                    Milestone Ahead
                  </span>
                </div>
                <p className="text-xs text-[#6B716B] mt-0.5">
                  Automated compounding & long-term goal accumulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only Bottom Metrics Bar: Savings + Goal Progress (on sm+ they float around the card) */}
        <div className="grid grid-cols-1 sm:hidden gap-3 pt-3 border-t border-[#E5E8E3]">
          {/* Card: Savings */}
          <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-3 flex items-center justify-between">
            <div>
              <span className="block text-[0.6875rem] uppercase tracking-wider text-[#6B716B] font-semibold">
                Savings
              </span>
              <span className="text-base font-bold text-[#171A17] metric-value">
                ₹36,800
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-[#E5E8E3] flex items-center justify-center text-[#174D3A]">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Card: Goal progress */}
          <div className="bg-[#F7F7F2] border border-[#E5E8E3] rounded-2xl p-3 flex flex-col justify-between gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[0.6875rem] uppercase tracking-wider text-[#6B716B] font-semibold">
                Goal progress
              </span>
              <span className="text-sm font-bold text-[#174D3A] metric-value">
                68%
              </span>
            </div>
            <div className="w-full bg-[#E5E8E3] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#174D3A] h-full rounded-full transition-all duration-700"
                style={{ width: "68%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
