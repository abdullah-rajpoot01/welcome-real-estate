import fs from 'fs-extra';
import path from 'path';



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
  const filePath = path.join(process.cwd(), 'content', 'basic', 'cta.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading CTA section:", error);
    return null;
  }
}