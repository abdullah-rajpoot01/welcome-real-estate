import type { Metadata } from "next";
import { readSiteConfig } from "./config";

export async function generateDefaultMetadata(): Promise<Metadata> {
  const seo = await readSiteConfig();

  if (!seo) return {};

  return {
    title: {
      default: seo.defaultTitle,
      template: `%s | ${seo.name}`
    },
    description: seo.description,

    metadataBase: new URL(seo.url),

    icons: {
      icon: seo.icons.icon,
      shortcut: seo.icons.shortcut,
      apple: seo.icons.apple,
      other: [
        {
          rel: "android-chrome",
          url: seo.icons.android
        }
      ]
    },

    openGraph: {
      title: seo.defaultTitle,
      description: seo.description,
      url: seo.url,
      siteName: seo.name,
      type: "website"
    },

    twitter: {
      card: "summary_large_image",
      title: seo.defaultTitle,
      description: seo.description
    }
  };
}