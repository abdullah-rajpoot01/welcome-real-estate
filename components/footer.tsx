import Link from "next/link";
import { IconRenderer } from "@/components/icons_map";
import { FooterData } from "@/services/basic/footer";

export default async function Footer({
  footerData,
}: {
  footerData: FooterData | null;
}) {
  if (!footerData) return null;

  const {
    logo,
    title,
    description,
    quickLinks,
    phone,
    email,
    address,
    socialLinks,
    copyright,
  } = footerData;

  return (
    <footer
      className="bg-primary text-white pt-16 pb-6 px-6"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1 - Logo & Info */}
          <div className="flex flex-col gap-4">
            {logo && (
              <div className="mb-2 ">
                {logo.startsWith("/") ||logo.startsWith("http") ? (
                  <img
                    src={logo}
                    alt={title}
                    className="h-30 w-auto object-contain rounded-xl"
                  />
                ) : (
                  <span className="text-2xl font-bold text-white font-serif">
                    {logo}
                  </span>
                )}
              </div>
            )}
            <h3 className="text-xl font-bold text-white font-serif">{title}</h3>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              {description}
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-white uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-tertiary transition-colors duration-300 no-underline w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-white uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-tertiary transition-colors duration-300 no-underline group"
                  aria-label={`Call us at ${phone}`}
                >
                  <IconRenderer
                    name="Phone"
                    className="w-4 h-4 fleshrink-0 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span>{phone}</span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-tertiary transition-colors duration-300 no-underline group"
                  aria-label={`Email us at ${email}`}
                >
                  <IconRenderer
                    name="Mail"
                    className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span>{email}</span>
                </a>
              )}

              {address && (
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <IconRenderer
                    name="MapPin"
                    className="w-4 h-4 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{address}</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex gap-3 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-tertiary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <IconRenderer name={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 text-center">
          <p className="text-xs text-white/30">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
