import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="fermor-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start animate-slide-up">
            {/* Eyebrow / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEBE3] text-[#174D3A] text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174D3A]" />
              <span>YOUR FINANCIAL JOURNEY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#171A17] tracking-tight leading-[1.08] mb-6">
              Your money has a story.{" "}
              <span className="text-[#174D3A] block sm:inline lg:block">
                Let&apos;s make it a better one.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#6B716B] leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal">
              Fermor helps you understand where your money goes, make smarter
              decisions, and build toward the future you want.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#get-started"
                className="btn-primary py-3.5 px-7 text-base font-medium flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Start your journey</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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

              <a
                href="#how-it-works"
                className="btn-outline py-3.5 px-6 text-base font-medium flex items-center justify-center text-[#171A17] hover:border-[#174D3A]"
              >
                See how it works
              </a>
            </div>

            {/* Trust / Core Journey Statement */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider text-[#6B716B] uppercase pt-2">
              <span className="text-[#171A17]">Understand</span>
              <span className="w-1 h-1 rounded-full bg-[#174D3A]" />
              <span className="text-[#171A17]">Act</span>
              <span className="w-1 h-1 rounded-full bg-[#174D3A]" />
              <span className="text-[#171A17]">Grow</span>
            </div>
          </div>

          {/* Right Column: Original Financial Visualization */}
          <div className="lg:col-span-6 w-full animate-fade-in [animation-delay:150ms]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
