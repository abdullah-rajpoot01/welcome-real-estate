import { IconRenderer } from "@/components/icons_map";
import { readTeamSection } from "@/services/team/team";

export default async function TeamPage() {
  const teamData = await readTeamSection();

  if (!teamData) return null;

  const { heading, subheading, badge, viewAllCta, members } = teamData;

  return (
    <section
      className="bg-white py-20 px-6"
      aria-label="Team section"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-full">
            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-primary/10 text-primary"
                role="status"
                aria-label="Team section badge"
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
          aria-label="Team members"
        >
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="group relative bg-primary border border-primary/25 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
              role="listitem"
              aria-label={`Team member: ${member.name}, ${member.role}`}
            >
              {/* Gold top bar - visible on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full z-10"
                aria-hidden="true"
              />

              {/* Avatar */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="relative w-14 h-14 rounded-full bg-primary/20 border-2 border-tertiary/30 flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:border-tertiary"
                  aria-hidden="true"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IconRenderer 
                      name="Users" 
                      className="w-6 h-6 text-white transition-colors duration-300" 
                    />
                  )}
                  {/* Online dot */}
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-tertiary">
                    {member.role}
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Bio */}
              <p className="relative z-10 text-sm text-white/65 leading-relaxed font-light">
                {member.bio}
              </p>

              {/* Social Links - Now using array like footer */}
              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="relative z-10 flex items-center gap-2 mt-auto pt-1">
                  {member.socialLinks.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`Contact ${member.name} on ${social.platform}`}
                      className="w-7 h-7 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/15"
                    >
                      <IconRenderer 
                        name={social.icon} 
                        className="w-3.5 h-3.5 text-tertiary transition-colors duration-300" 
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}