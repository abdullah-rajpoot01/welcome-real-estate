import TestimonialsPage from '@/components/testimonials/testimonials_page'
import { generatePageMetadata } from '@/services/metadata/seo';


export async function generateMetadata() {
  return generatePageMetadata("testimonials");
}

const Page = () => {
  return (
    <div>
      <TestimonialsPage/>
    </div>
  )
}

export default Page
