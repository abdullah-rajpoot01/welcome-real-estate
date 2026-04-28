import fs from "fs-extra";
import path from "path";

interface SeoConfig {
  name: string;
  defaultTitle: string;
  description: string;
  url: string;
  themeColor: string;
  favicon: string;
  icons: {
    icon: string;
    shortcut: string;
    apple: string;
    android: string;
  };
}

/**
 * Read main site config from config.json
 */
export async function readSiteConfig(): Promise<SeoConfig | null> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "metadata",
    "config.json"
  );

  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading site configuration:", error);
    return null;
  }
}