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
  const filePath = path.join(process.cwd(), 'content', 'projects', 'projects.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading portfolio section:", error);
    return null;
  }
}
