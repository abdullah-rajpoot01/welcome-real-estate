import { MapPin, ArrowRight, Building2, Star } from "lucide-react";

const projectsData = {
  heading: "Our Successfully Delivered Projects",
  description:
    "Explore some of our successfully delivered and ongoing real estate projects, showcasing quality construction, prime locations, and modern living standards.",
  images: [
    {
      src: "https://images.pexels.com/photos/14467554/pexels-photo-14467554.jpeg",
      alt: "Luxury villa in DHA",
      title: "Luxury Villas",
      location: "DHA Karachi",
    },
    {
      src: "https://images.pexels.com/photos/32772055/pexels-photo-32772055.jpeg",
      alt: "Modern apartments in Bahria Town",
      title: "Modern Apartments",
      location: "Bahria Town Lahore",
    },
    {
      src: "https://images.pexels.com/photos/34281362/pexels-photo-34281362.jpeg",
      alt: "Commercial plaza in city center",
      title: "City Center Plaza",
      location: "Karachi City Center",
    },
    {
      src: "https://images.pexels.com/photos/37125453/pexels-photo-37125453.jpeg",
      alt: "Gated community housing project",
      title: "Green Valley Housing",
      location: "Islamabad",
    },
    {
      src: "https://images.pexels.com/photos/9136256/pexels-photo-9136256.jpeg",
      alt: "High-rise residential tower",
      title: "Skyline Residency",
      location: "Lahore",
    },
    {
      src: "https://images.pexels.com/photos/33308474/pexels-photo-33308474.jpeg",
      alt: "Elegant interior of furnished apartment",
      title: "Furnished Apartments",
      location: "Clifton Karachi",
    },
  ],
};

export default function FeaturedProjectsSection() {
  const { heading, description, images } = projectsData;

  return (
    <section
      className="min-h-screen bg-white flex items-center py-16 px-6"
      aria-label="Featured real estate projects section"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-full">
            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240]"
                role="status"
                aria-label="Featured projects badge"
              >
                <Star className="w-4 h-4" aria-hidden="true" />
                Our Delivered Projects
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
              {description}
            </p>
          </div>

        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Featured project cards"
        >
          {images.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer"
              role="listitem"
              aria-label={project.title}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a2240]/40 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Decorative top-right frame accent */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/40 rounded-tr-lg"
                  aria-hidden="true"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl bg-[#0a2240] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:rotate-3 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Building2 className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[#0a2240] text-sm font-bold leading-tight mb-1 font-serif truncate">
                    {project.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <MapPin
                      className="w-3.5 h-3.5 text-gray-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-400 text-xs leading-snug truncate">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
