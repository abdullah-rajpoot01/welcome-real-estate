import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { readCtaSection } from "@/services/home";



export default async function CTASection() {
  const ctaData = await readCtaSection();

  if (!ctaData) return null;

  const { heading, subheading, cta } = ctaData;

  return (
    <section 
      className="bg-white py-20 px-6"
      aria-label="Call to action section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#0a2240] rounded-2xl px-8 py-16 flex flex-col items-center text-center gap-6 overflow-hidden">

          {/* Decorative circles */}
          <div 
            className="absolute -top-16 -left-16 w-56 h-56 rounded-full border border-white/5" 
            aria-hidden="true"
          />
          <div 
            className="absolute -top-8 -left-8 w-36 h-36 rounded-full border border-white/5" 
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border border-white/5" 
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full border border-white/5" 
            aria-hidden="true"
          />

          {/* Gold divider top */}
          <div 
            className="w-16 h-0.5 bg-[#c9a84c] rounded-full" 
            aria-hidden="true"
          />

          {/* Heading */}
          <h2 className="relative text-4xl lg:text-5xl font-bold text-white leading-tight font-serif max-w-2xl">
            {heading}
          </h2>

          {/* Subheading */}
          <p className="relative text-base text-white/50 font-light leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* CTA */}
          <Link
            href={cta.link}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base bg-[#c9a84c] text-[#0a2240] no-underline transition-all duration-300 hover:bg-[#b8963e] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 mt-2"
            aria-label={`${cta.label}: ${subheading}`}
          >
            {cta.label}
            <ArrowRight 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              aria-hidden="true"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}