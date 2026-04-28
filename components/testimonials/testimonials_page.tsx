import { IconRenderer } from "@/components/icons_map";
import { readTestimonialsSection } from "@/services/testimonials/testimonial";

export default async function TestimonialsPage() {
  const testimonialsData = await readTestimonialsSection();

  if (!testimonialsData) return null;

  const { heading, subheading, badge,  testimonials } = testimonialsData;

  return (
    <section className="bg-white py-20 px-6" aria-label="Testimonials section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-full">
            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-primary/10 text-primary"
                role="status"
                aria-label="Testimonials badge"
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
              {subheading}
            </p>
          </div>

        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="group relative bg-primary border border-primary/30 rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
              role="listitem"
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.rating} star rating`}
            >
              {/* Gold top bar - visible on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                aria-hidden="true"
              />

              {/* Quote icon */}
              <IconRenderer
                name={testimonial.quoteIcon}
                className="w-8 h-8 text-tertiary/30 transition-colors duration-300 -mb-2"
                aria-hidden="true"
              />

              {/* Feedback */}
              <p className="text-sm text-white/70 leading-relaxed font-light flex-1">
                "{testimonial.feedback}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10" aria-hidden="true" />

              {/* Footer */}
              <div className="flex items-center justify-between gap-3">
                {/* User */}
                <div className="flex items-center gap-3">
                  <IconRenderer
                    name={testimonial.icon}
                    className="w-9 h-9 text-white/30 group-hover:text-white/60 transition-colors duration-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                </div>

                {/* Stars */}
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IconRenderer
                      key={i}
                      name="Star"
                      className="w-3.5 h-3.5 text-tertiary fill-tertiary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}