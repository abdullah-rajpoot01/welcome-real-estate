import Link from "next/link";
import { IconRenderer } from "@/components/icons_map";
import { readWhatWeOffer } from "@/services/our_services/services";

export default async function WhatWeOfferSection() {
  const whatWeOfferData = await readWhatWeOffer();

  if (!whatWeOfferData) return null;

  const { badge, heading, description, viewAllCta, services } = whatWeOfferData;
  const displayedServices = services.slice(0, 3);

  return (
    <section className="bg-white py-10 px-6" aria-label="What we offer section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-primary/10 text-primary"
                role="status"
                aria-label="Services badge"
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
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4 font-serif">
              {heading}
            </h2>

            {/* Divider */}
            <div
              className="w-16 h-0.5 bg-primary mb-5 rounded-full"
              aria-hidden="true"
            />

            <p className="text-lg leading-relaxed font-light text-gray-600">
              {description}
            </p>
          </div>

          {/* View All CTA */}
          <Link
            href={viewAllCta.url}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 no-underline bg-primary text-white border-2 border-primary hover:bg-secondary shrink-0"
            aria-label={viewAllCta.text}
          >
            <IconRenderer 
              name={viewAllCta.icon} 
              className="w-4 h-4" 
              aria-hidden="true" 
            />
            {viewAllCta.text}
            <IconRenderer 
              name={viewAllCta.rightIcon} 
              className="w-4 h-4" 
              aria-hidden="true" 
            />
          </Link>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="List of services"
        >
          {displayedServices.map((service, index) => {
            return (
              <a
                key={service.title}
                href={service.ctaUrl}
                target={service.ctaUrl.startsWith("http") || service.ctaUrl.startsWith("https") || service.ctaUrl.startsWith("tel") || service.ctaUrl.startsWith("whatsapp") || service.ctaUrl.startsWith("wa.me") ? "_blank" : undefined}
                rel={
                  service.ctaUrl.startsWith("http") || service.ctaUrl.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative bg-primary border border-primary/30 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 cursor-pointer no-underline"
                role="listitem"
                aria-label={`Service: ${service.title}`}
              >
                {/* Gold accent top bar - visible on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full z-10"
                  aria-hidden="true"
                />

                {/* Icon badge */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl bg-tertiary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <IconRenderer 
                    name={service.icon} 
                    className="w-5 h-5 text-white transition-colors duration-300" 
                  />
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col gap-1.5 flex-1">
                  <h3 className="text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow with CTA text */}
                <div className="relative z-10 flex items-center gap-1.5 mt-1">
                  <span className="text-xs font-semibold text-tertiary transition-all duration-300 group-hover:translate-x-0.5">
                    {service.ctaText}
                  </span>
                  <IconRenderer 
                    name="ArrowRight"
                    className="w-3.5 h-3.5 text-tertiary transition-all duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}