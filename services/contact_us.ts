import fs from 'fs-extra';
import path from 'path';

interface Badge {
  text: string;
  icon: string;
}



interface BusinessHours {
  icon: string;
  title: string;
  schedules: string[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: string; // "Facebook" | "Instagram" | "LinkedIn" | "YouTube" | "WhatsApp"
}

interface ContactCard {
  label: string;
  value: string;
  href: string | null;
  icon: string;
  external: boolean;
}

interface Map {
  embedUrl: string;
}

interface BottomCard {
  title: string;
  description: string;
  icon: string;
}

interface BottomCTA {
  text: string;
  url: string;
  icon: string;
}

interface ContactPageData {
  badge: Badge;
  heading: string;
  subheading: string;
  businessHours: BusinessHours;
  socialLinks: SocialLink[];
  contactCards: ContactCard[];
  map: Map;
  bottomCard: BottomCard;
  bottomCTA: BottomCTA;
}
export async function readContactPage(): Promise<ContactPageData | null> {
  const filePath = path.join(process.cwd(), 'data', 'contact_us.json');
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}