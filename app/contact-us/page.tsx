import { readContactPage } from "@/services/contact_us/contact";
import { IconRenderer } from "@/components/icons_map";
import { generatePageMetadata } from "@/services/metadata/seo";

export async function generateMetadata() {
  return generatePageMetadata("contact");
}
export default async function ContactPage() {
  const contactData = await readContactPage();

  if (!contactData) return null;

  const {
    badge,
    heading,
    subheading,
    contactCards,
    businessHours,
    socialLinks,
    map,
    bottomCard,
    bottomCTA,
  } = contactData;

  return (
    <section
      className="min-h-screen bg-white flex items-center py-16 px-6"
      aria-label="Contact us section"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-16">
          {/* ── LEFT ── */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl w-full">
            {/* Badge */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-primary/10 text-primary"
                role="status"
                aria-label="Contact us badge"
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
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4 font-serif">
                {heading}
              </h1>
              <div
                className="w-16 h-0.5 bg-primary mb-5 rounded-full"
                aria-hidden="true"
              />
              <p className="text-lg leading-relaxed font-light text-gray-600">
                {subheading}
              </p>
            </div>

            {/* Contact info cards */}
            <div
              className="flex flex-col gap-4 mt-2"
              role="list"
              aria-label="Contact information"
            >
              {contactCards.map((card, index) => {
                const inner = (
                  <div
                    className="bg-white border border-gray-100 rounded-xl shadow-md p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                    role="listitem"
                    aria-label={card.label}
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-tertiary group-hover:rotate-3 group-hover:scale-105"
                      aria-hidden="true"
                    >
                      <IconRenderer
                        name={card.icon}
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <p className="text-primary text-sm font-bold leading-tight mb-0.5 font-serif">
                        {card.label}
                      </p>
                      <p className="text-gray-400 text-xs leading-snug">
                        {card.value}
                      </p>
                    </div>
                    {card.href && (
                      <IconRenderer
                        name="ExternalLink"
                        className="w-3.5 h-3.5 text-gray-300 ml-auto mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );

                return card.href ? (
                  <a
                    key={index}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="no-underline"
                    aria-label={`${card.label}: ${card.value}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={index}>{inner}</div>
                );
              })}
            </div>

            {/* Business hours */}
            <div
              className="bg-white border border-gray-100 rounded-xl shadow-md p-4 flex items-start gap-3"
              role="complementary"
              aria-label="Business hours"
            >
              <div
                className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <IconRenderer
                  name={businessHours.icon}
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-primary text-sm font-bold leading-tight mb-1 font-serif">
                  {businessHours.title}
                </p>
                {businessHours.schedules.map((schedule, idx) => (
                  <p key={idx} className="text-gray-400 text-xs leading-snug">
                    {schedule}
                  </p>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div
              className="flex flex-wrap items-center gap-3 mt-1"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`Follow us on ${social.platform}`}
                    className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md no-underline"
                  >
                    <IconRenderer name={social.icon} className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT — Map ── */}
          <div className="flex-1 flex flex-col w-full max-w-lg">
            <div className="relative w-full max-w-115 mx-auto">
              {/* Decorative frame */}
              <div
                className="absolute -top-3 -right-3 w-full h-full border-2 border-primary/15 rounded-2xl z-0"
                aria-hidden="true"
              />

              {/* Map embed */}
              <div className="relative z-10 rounded-2xl overflow-hidden h-95 shadow-md">
                <iframe
                  src={map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location map"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Bottom cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 w-full max-w-115 mx-auto">
              <div
                className="bg-white border border-gray-100 rounded-xl shadow-md p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                role="complementary"
                aria-label={bottomCard.title}
              >
                <div
                  className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-tertiary group-hover:rotate-3 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <IconRenderer
                    name={bottomCard.icon}
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div>
                  <p className="text-primary text-sm font-bold leading-tight mb-0.5 font-serif">
                    {bottomCard.title}
                  </p>
                  <p className="text-gray-400 text-xs leading-snug">
                    {bottomCard.description}
                  </p>
                </div>
              </div>

              <a
                href={bottomCTA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 no-underline bg-primary text-white border-2 border-primary hover:bg-secondary"
                aria-label={bottomCTA.text}
              >
                <IconRenderer
                  name={bottomCTA.icon}
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                {bottomCTA.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
