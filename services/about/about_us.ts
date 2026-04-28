import fs from 'fs-extra';
import path from 'path';


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
  const filePath = path.join(process.cwd(), 'content', 'about', 'about_us.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading about section:", error);
    return null;
  }
}
