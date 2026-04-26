import fs from 'fs-extra';
import path from 'path';

interface QuickLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterData {
  logo: string;
  title: string;
  description: string;
  quickLinks: QuickLink[];
  phone: string;
  email: string;
  address: string;
  socialLinks: SocialLink[];
  copyright: string;
}

export async function readFooterSection(): Promise<FooterData | null> {
  const filePath = path.join(process.cwd(), 'data', 'footer.json');
  
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading footer section:", error);
    return null;
  }
}