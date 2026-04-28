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
  const filePath = path.join(process.cwd(), 'content', 'home', 'hero_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading hero section:", error);
    return null;
  }
}

