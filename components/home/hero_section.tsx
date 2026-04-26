import { CheckCircle2 } from "lucide-react";
import { readHeroSection } from "@/services/home";
import { IconRenderer } from "@/components/icons_map";

export default async function HeroSection() {
  const heroData = await readHeroSection();

  if (!heroData) return null;

  const { badge, title, description, ctas, image, highlights,highlightsIcon, cards } =
    heroData;

  return (
    <section
      className="min-h-screen bg-white flex items-center  py-10 px-6"
      aria-label="Hero section with real estate services information"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">
            {/* Badge */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240]"
                role="status"
                aria-label="Real estate excellence badge"
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
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0a2240] leading-tight mb-4 font-serif">
                {title}
              </h1>
              {/* Divider */}
              <div
                className="w-16 h-0.5 bg-[#0a2240] mb-5 rounded-full"
                aria-hidden="true"
              />
              <p className="text-lg leading-relaxed font-light text-gray-600">
                {description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              {ctas &&
                ctas.map((cta, index) => (
                  <a
                    key={index}
                    href={cta.url}
                    target={cta.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      cta.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 no-underline ${
                      index === 0
                        ? "bg-[#0a2240] text-white border-2 border-[#0a2240] hover:bg-[#0e2f5a]"
                        : "bg-transparent text-[#0a2240] border-2 border-[#0a2240] hover:bg-[#0a2240] hover:text-white"
                    }`}
                    aria-label={cta.text}
                  >
                    <IconRenderer
                      name={cta.icon}
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                    {cta.text}
                  </a>
                ))}
            </div>

            {/* Trust indicators / Highlights */}
            <div
              className="flex flex-wrap items-center gap-5 mt-1"
              role="list"
              aria-label="Property highlights"
            >
              {highlights &&
                highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-1.5"
                    role="listitem"
                  >
                    <IconRenderer
                      name={highlightsIcon}
                      className="w-4 h-4 text-[#0a2240]"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-500">{highlight}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col w-full max-w-lg">
            <div className="relative w-full max-w-115 mx-auto">
              {/* Decorative frame */}
              <div
                className="absolute -top-3 -right-3 w-full h-full border-2 border-[#0a2240]/15 rounded-2xl z-0"
                aria-hidden="true"
              />

              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden h-95">
                <img
                  src={image.src}
                  alt={image.alt || "Real estate property"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block"
                />
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a2240]/30 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Two cards below image */}
            <div className="mt-6 grid grid-cols-1 gap-4 w-full max-w-115 mx-auto">
              {cards &&
                cards.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 rounded-xl shadow-md p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                      role="complementary"
                      aria-label={card.title}
                    >
                      <div
                        className="w-10 h-10 rounded-xl bg-[#0a2240] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:rotate-3 group-hover:scale-105"
                        aria-hidden="true"
                      >
                        <IconRenderer
                          name={card.icon}
                          className="w-5 h-5 text-white"
                        />
                      </div>
                      <div>
                        <p className="text-[#0a2240] text-sm font-bold leading-tight mb-0.5 font-serif">
                          {card.title}
                        </p>
                        <p className="text-gray-400 text-xs leading-snug">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
