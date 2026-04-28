import fs from 'fs-extra';
import path from 'path';


interface Badge {
  text: string;
  icon: string; // Icon name from ICONS mapping (e.g., "ShieldCheck")
}

interface Step {
  title: string;
  description: string;
  icon: string; // Icon name for each step (e.g., "MessageSquare", "Search", etc.)
}

interface ProcessData {
  heading: string;
  subheading: string;
  badge: Badge;
  steps: Step[];
}


export async function readProcessSection(): Promise<ProcessData | null> {
  const filePath = path.join(process.cwd(), 'content',"about", 'process.json');
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading team section:", error);
    return null;
  }
}