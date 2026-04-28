import AboutSection from "@/components/home/about";
import CTASection from "@/components/home/cta";
import HeroSection from "@/components/home/hero_section";
import ProjectsSection from "@/components/home/projects";
import WhatWeOfferSection from "@/components/home/what_we_offer";
import WhyChooseUsSection from "@/components/home/why-choose";
import TeamSection from "@/components/team/team_section";
import TestimonialsSection from "@/components/testimonials/testimonials_section";
import { generatePageMetadata } from "@/services/metadata/seo";


export async function generateMetadata() {
  return generatePageMetadata("home");
}


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
