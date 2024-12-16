import { promises as fs } from "fs";
import { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export async function generateMetadata(slug: string) {
  const content = await fs.readFile(
    path.join(process.cwd(), "content", `${slug}.mdx`),
    "utf-8",
  );
  const { frontmatter } = await compileMDX<Metadata>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    ...frontmatter,
  };
}
