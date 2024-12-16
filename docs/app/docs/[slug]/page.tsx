import { getMDX } from "@/utils/mdx-handlers";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const mdx = await getMDX(slug);

  return <>{mdx.content}</>;
}
