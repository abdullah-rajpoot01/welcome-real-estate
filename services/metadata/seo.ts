import fs from "fs-extra";
import path from "path";

interface SeoPage {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

interface SeoData {
  home: SeoPage;
  projects: SeoPage;
  services: SeoPage;
  about: SeoPage;
  team: SeoPage;
  testimonials: SeoPage;
  contact: SeoPage;
  privacy: SeoPage;
  terms_and_conditions: SeoPage;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/**
 * Convert relative URL to absolute
 */
function absoluteUrl(url: string): string {
  if (!url) return BASE_URL;
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url}`;
}

/**
 * Reads SEO config
 */
export async function readSeoConfig(): Promise<SeoData | null> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "metadata",
    "seo.json"
  );

  try {
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading SEO configuration:", error);
    return null;
  }
}

/**
 * Generate Metadata
 */
export async function generatePageMetadata(page: keyof SeoData) {
  const seo = await readSeoConfig();

  if (!seo || !seo[page]) {
    return {};
  }

  const data = seo[page];

  const imageUrl = absoluteUrl(data.image);
  const pageUrl = absoluteUrl(data.url);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: pageUrl,
      type: data.type,
      images: [
        {
          url: imageUrl
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [imageUrl]
    }
  };
}