import fs from 'fs-extra';
import path from 'path';


// Add to your existing home services file
interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socialLinks: SocialLink[];
}

interface TeamSection {
  heading: string;
  subheading: string;
  badge: {
    text: string;
    icon: string;
  };
  viewAllCta: {
    text: string;
    url: string;
    icon: string;
    rightIcon: string;
  };
  members: TeamMember[];
}

export async function readTeamSection(): Promise<TeamSection | null> {
  const filePath = path.join(process.cwd(), 'content', 'team', 'team.json');
  
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}

