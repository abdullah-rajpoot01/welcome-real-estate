import { generatePageMetadata } from "@/services/metadata/seo";
import { readPrivacyPolicy } from "@/services/privacy/privacy";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateMetadata() {
  return generatePageMetadata("privacy");
}

const Page = async () => {
  const markdown = await readPrivacyPolicy();
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
