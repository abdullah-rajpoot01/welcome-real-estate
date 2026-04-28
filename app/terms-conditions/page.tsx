import { generatePageMetadata } from "@/services/metadata/seo";
import { readTermsAndConditions } from "@/services/terms/terms";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateMetadata() {
  return generatePageMetadata("terms_and_conditions");
}

const Page = async () => {
  const markdown = await readTermsAndConditions();
  if (!markdown) {
    notFound();
  }
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none px-10 py-10">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
};

export default Page;
