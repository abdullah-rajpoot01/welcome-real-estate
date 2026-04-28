import CTASection from '@/components/home/cta'
import TeamPage from '@/components/team/team_page'
import { generatePageMetadata } from '@/services/metadata/seo';

export async function generateMetadata() {
  return generatePageMetadata("team");
}

const Page = () => {
  return (
    <div>
      <TeamPage/>
      <CTASection/>
    </div>
  )
}

export default Page
