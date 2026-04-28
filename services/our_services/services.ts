import fs from 'fs-extra';
import path from 'path';



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
  const filePath = path.join(process.cwd(), 'content', 'services', 'services.json');
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}
