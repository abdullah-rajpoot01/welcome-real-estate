import Link from "next/link";
import { IconRenderer } from "@/components/icons_map";
import { readAboutSection } from "@/services/about/about_us";

export default async function AboutPageHeader() {
  const aboutData = await readAboutSection();

  if (!aboutData) return null;

  const { heading, subheading, badge, description, stats, cta, highlights } = aboutData;

  return (
    <section 
      className="bg-white py-10 px-6"
      aria-label="About section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 ">

          {/* LEFT — Stats block */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <div className="relative">

              {/* Decorative frame */}
              <div 
                className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/10 rounded-2xl z-0" 
                aria-hidden="true"
              />

              {/* Main card */}
              <div 
                className="relative z-10 bg-primary rounded-2xl p-8 flex flex-col gap-8"
                role="complementary"
                aria-label="Firm statistics and highlights"
              >

                {/* Stats row */}
                <div 
                  className="flex gap-6"
                  role="list"
                  aria-label="Key statistics"
                >
                  {stats.map((stat) => (
                    <div 
                      key={stat.label} 
                      className="flex-1 border-l-2 border-tertiary pl-4"
                      role="listitem"
                    >
                      <p className="text-4xl font-bold text-white font-serif leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/50 font-light">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div 
                  className="w-full h-px bg-white/10" 
                  aria-hidden="true"
                />

                {/* Highlights */}
                <div 
                  className="flex flex-col gap-3"
                  role="list"
                  aria-label="Firm highlights"
                >
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3"
                      role="listitem"
                    >
                      <IconRenderer 
                        name={highlight.icon} 
                        className="w-4 h-4 text-tertiary shrink-0" 
                        aria-hidden="true"
                      />
                      <span className="text-sm text-white/70">{highlight.text}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">

            {/* Badge */}
            <span 
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-primary/10 text-primary self-start"
              role="status"
              aria-label="About section badge"
            >
              <IconRenderer 
                name={badge.icon} 
                className="w-4 h-4" 
                aria-hidden="true" 
              />
              {badge.text}
            </span>

            {/* Heading */}
            <div>
              <h2 className="text-4xl  font-bold text-primary leading-tight mb-4 font-serif">
                {heading}
              </h2>
              <div 
                className="w-16 h-0.5 bg-primary mb-5 rounded-full" 
                aria-hidden="true"
              />
            </div>

            {/* Subheading */}
            <p className="text-lg font-semibold text-primary/80 leading-snug -mt-2">
              {subheading}
            </p>

            {/* Description */}
            <p className="text-base text-gray-500 font-light leading-relaxed">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}