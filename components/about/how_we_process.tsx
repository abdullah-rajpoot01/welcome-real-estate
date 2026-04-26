import { readProcessSection } from "@/services/home";
import { IconRenderer } from "@/components/icons_map";

export default async function HowWeProcessSection() {
  const processData = await readProcessSection();

  if (!processData) return null;

  const { heading, subheading, badge, steps } = processData;

  return (
    <section
      className="min-h-screen bg-white flex items-center py-16 px-6"
      aria-label="How we process real estate transactions"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-start mb-12 max-w-full">

          {/* Badge */}
          <div className="mb-4">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240]"
              role="status"
              aria-label="Our process badge"
            >
              <IconRenderer 
                name={badge.icon} 
                className="w-4 h-4" 
                aria-hidden="true" 
              />
              {badge.text}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a2240] leading-tight mb-4 font-serif">
            {heading}
          </h2>

          {/* Divider */}
          <div
            className="w-16 h-0.5 bg-[#0a2240] mb-5 rounded-full"
            aria-hidden="true"
          />

          <p className="text-lg leading-relaxed font-light text-gray-600">
            {subheading}
          </p>
        </div>

        {/* ── Steps ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Process steps"
        >
          {steps && steps.map((step, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl shadow-md p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
                role="listitem"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                {/* Decorative step number — faint background */}
                <span
                  className="absolute top-3 right-4 text-6xl font-bold text-[#0a2240]/5 font-serif select-none pointer-events-none leading-none"
                  aria-hidden="true"
                >
                  {stepNumber}
                </span>

                {/* Icon + step number pill */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0a2240] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:rotate-3 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <IconRenderer 
                      name={step.icon} 
                      className="w-5 h-5 text-white" 
                    />
                  </div>

                  <span className="text-xs font-semibold tracking-widest uppercase text-[#0a2240]/40">
                    Step {stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-[#0a2240] text-sm font-bold leading-tight mb-1.5 font-serif">
                    {step.title}
                  </p>
                  <p className="text-gray-400 text-xs leading-snug">
                    {step.description}
                  </p>
                </div>

                {/* Bottom connector line — visual flow hint */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#0a2240]/15 z-10"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}