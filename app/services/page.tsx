import CTASection from "@/components/home/cta";
import Services from "@/components/services/services_page";
import { generatePageMetadata } from "@/services/metadata/seo";

export async function generateMetadata() {
  return generatePageMetadata("services");
}

const Page = () => {
  return (
    <div>
      <Services />
      <CTASection />
    </div>
  );
};

export default Page;
