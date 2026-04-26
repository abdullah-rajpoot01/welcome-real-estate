import fs from 'fs-extra';
import path from 'path';

interface MenuItem {
  label: string;
  href: string;
}

interface CTAButton {
  label: string;
  url: string;
  icon: string;
}

export interface NavbarData {
  siteName: string;
  logo: string;
  menu: MenuItem[];
  ctaButton: CTAButton;
  visibleCount: number;
}

/**
 * Reads and automatically parses the navbar configuration from a JSON file
 * @returns Promise with the parsed navbar data or null if error occurs
 */
export async function readNavbarData(): Promise<NavbarData | null> {
  const filePath = path.join(process.cwd(), 'data', 'navbar.json');
  
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading navbar data:", error);
    return null;
  }
}