import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/basic/whatsapp-button";
import { readNavbarData } from "@/services/basic/navbar";
import { readFooterSection } from "@/services/basic/footer";
import NextTopLoader from "nextjs-toploader";
import { generateDefaultMetadata } from "@/services/metadata/home_metadat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return generateDefaultMetadata();
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navData = await readNavbarData();
  const footerData = await readFooterSection();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader shadow={false} showSpinner={false} />
        <Navbar navData={navData} />
        {children}
        <Footer footerData={footerData} />
        <WhatsAppButton phoneNumber="0344-1243567" />
      </body>
    </html>
  );
}
