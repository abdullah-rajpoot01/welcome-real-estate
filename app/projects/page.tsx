import CTASection from "@/components/home/cta"
import FeaturedProjectsSection from "@/components/projects/recent-projects"
import { generatePageMetadata } from "@/services/metadata/seo";

export async function generateMetadata() {
  return generatePageMetadata("projects");
}
const Page = () => {
  return (
    <div>
      <FeaturedProjectsSection/>
      <CTASection/>
    </div>
  )
}

export default Page
