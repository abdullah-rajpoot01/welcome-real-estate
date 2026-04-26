import fs from 'fs-extra';
import path from 'path';

interface CTA {
  text: string;
  url: string;
  icon: string; // Icon name from ICONS mapping (e.g., "Phone", "MessageCircle")
}

interface Image {
  src: string;
  alt: string;
}

interface Card {
  title: string;
  description: string;
  icon: string; // Icon name from ICONS mapping (e.g., "Home", "TrendingUp")
}

interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "ShieldCheck")
}

interface HeroSection {
  badge: Badge; // Changed from string to Badge object
  title: string;
  description: string;
  ctas: CTA[];
  image: Image;
  highlights: string[];
  highlightsIcon: string;
  cards: Card[];
}
/** 
 * Reads and automatically parses the hero section configuration from a JSON file
 * @returns Promise with the parsed hero section data or null if error occurs
 */
export async function readHeroSection(): Promise<HeroSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'hero_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading hero section:", error);
    return null;
  }
}



interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "Star")
}

interface ViewAllCTA {
  text: string;
  url: string;
  icon: string; // Icon name (e.g., "Building2")
  rightIcon: string; // Icon name (e.g., "ArrowRight")
}

interface Project {
  src: string;
  alt: string;
  title: string;
  location: string;
  icon: string; // Icon name (e.g., "Building2")
}

interface ProjectsSection {
  badge: Badge;
  heading: string;
  description: string;
  viewAllCta: ViewAllCTA;
  projects: Project[];
}
/** 
 * Reads and automatically parses the portfolio section configuration from a JSON file
 * @returns Promise with the parsed portfolio section data or null if error occurs
 */
export async function readProjects(): Promise<ProjectsSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'projects.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading portfolio section:", error);
    return null;
  }
}

interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "ShieldCheck")
}

interface Point {
  title: string;
  description: string;
  icon: string; // Icon name for each point (e.g., "ShieldCheck", "Gavel", etc.)
}

interface WhyChooseUsData {
  heading: string;
  subheading: string;
  badge: Badge;
  points: Point[];
}
/** 
 * Reads and automatically parses the why choose us section configuration from a JSON file
 * @returns Promise with the parsed why choose us section data or null if error occurs
 */
export async function readWhyChooseUsSection(): Promise<WhyChooseUsData | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'why_choose_us_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading why choose us section:", error);
    return null;
  }
}


interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "ShieldCheck")
}

interface Stat {
  label: string;
  value: string;
}

interface CTA {
  label: string;
  link: string;
  icon: string; // Icon name (e.g., "ArrowRight")
}

interface Highlight {
  text: string;
  icon: string; // Icon name (e.g., "CheckCircle2")
}

interface AboutData {
  heading: string;
  subheading: string;
  badge: Badge;
  description: string;
  stats: Stat[];
  cta: CTA;
  highlights: Highlight[];
}
/** 
 * Reads and automatically parses the about section configuration from a JSON file
 * @returns Promise with the parsed about section data or null if error occurs
 */
export async function readAboutSection(): Promise<AboutData | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'about_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading about section:", error);
    return null;
  }
}


interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "Star")
}

interface ViewAllCTA {
  text: string;
  url: string;
  icon: string; // Icon name (e.g., "Building2")
  rightIcon: string; // Icon name (e.g., "ArrowRight")
}

interface Testimonial {
  name: string;
  feedback: string;
  rating: number; // 1-5
  icon: string; // Icon name for user (e.g., "UserCircle")
  quoteIcon: string; // Icon name for quote (e.g., "Quote")
}

interface TestimonialsData {
  heading: string;
  subheading: string;
  badge: Badge;
  viewAllCta: ViewAllCTA;
  testimonials: Testimonial[];
}
/** 
 * Reads and automatically parses the testimonials section configuration from a JSON file
 * @returns Promise with the parsed testimonials section data or null if error occurs
 */
export async function readTestimonialsSection(): Promise<TestimonialsData | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'testimonials_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading testimonials section:", error);
    return null;
  }
}

interface Cta {
  label: string;
  link: string;
}

interface CtaSection {
  heading: string;
  subheading: string;
  cta: Cta;
}

/** 
 * Reads and automatically parses the CTA section configuration from a JSON file
 * @returns Promise with the parsed CTA section data or null if error occurs
 */
export async function readCtaSection(): Promise<CtaSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'cta_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading CTA section:", error);
    return null;
  }
}

// Add to your existing home services file
interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socialLinks: SocialLink[];
}

interface TeamSection {
  heading: string;
  subheading: string;
  badge: {
    text: string;
    icon: string;
  };
  viewAllCta: {
    text: string;
    url: string;
    icon: string;
    rightIcon: string;
  };
  members: TeamMember[];
}

export async function readTeamSection(): Promise<TeamSection | null> {
  const filePath = path.join(process.cwd(), 'data', 'home', 'team_section.json');
  
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}



interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "Home")
}

interface ViewAllCTA {
  text: string;
  url: string;
  icon: string; // Icon name (e.g., "Building2")
  rightIcon: string; // Icon name (e.g., "ArrowRight")
}

interface Service {
  title: string;
  description: string;
  icon: string; // Icon name for the service (e.g., "Home", "TrendingUp")
  ctaText: string; // Text for the call to action button/link
  ctaUrl: string; // URL, phone link, or WhatsApp link
}

interface WhatWeOfferData {
  badge: Badge;
  heading: string;
  description: string;
  viewAllCta: ViewAllCTA;
  services: Service[];
}
export async function readWhatWeOffer(): Promise<WhatWeOfferData | null> {
  const filePath = path.join(process.cwd(), 'data', 'home', 'what_we_offer.json');
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}


interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "ShieldCheck")
}

interface Step {
  title: string;
  description: string;
  icon: string; // Icon name for each step (e.g., "MessageSquare", "Search", etc.)
}

interface ProcessData {
  heading: string;
  subheading: string;
  badge: Badge;
  steps: Step[];
}


export async function readProcessSection(): Promise<ProcessData | null> {
  const filePath = path.join(process.cwd(), 'data', 'how_we_process.json');
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}