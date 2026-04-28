import AboutPageHeader from "@/components/about/about_page_header";
import CTASection from "@/components/about/cta";
import HowWeProcessSection from "@/components/about/how_we_process";
import { generatePageMetadata } from "@/services/metadata/seo";


export async function generateMetadata() {
  return generatePageMetadata("about");
} 


const Page = () => {
  return (
    <div>
      <AboutPageHeader />
      <HowWeProcessSection />
      <CTASection/>
    </div>
  );
};

export default Page;
