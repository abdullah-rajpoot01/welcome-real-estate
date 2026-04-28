import fs from 'fs-extra';
import path from 'path';

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
  const filePath = path.join(process.cwd(), 'content', 'home', 'why_choose_us.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading why choose us section:", error);
    return null;
  }
}
