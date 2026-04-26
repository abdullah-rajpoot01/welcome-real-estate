import AboutSection from "@/components/home/about";
import CTASection from "@/components/home/cta";
import HeroSection from "@/components/home/hero_section";
import ProjectsSection from "@/components/home/projects";
import TestimonialsSection from "@/components/home/testimonials";
import WhatWeOfferSection from "@/components/home/what_we_offer";
import WhyChooseUsSection from "@/components/home/why-choose";
import TeamSection from "@/components/team/team";

export default async function Home() {
  return (
    <div className="min-w-full">
      <HeroSection />
      <ProjectsSection />
      <WhatWeOfferSection />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection/>
      <TeamSection/>
      <CTASection/>
    </div>
  );
}
