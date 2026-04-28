import fs from 'fs-extra';
import path from 'path';



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
  const filePath = path.join(process.cwd(), 'content', 'testimonials', 'testimonials.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading testimonials section:", error);
    return null;
  }
}