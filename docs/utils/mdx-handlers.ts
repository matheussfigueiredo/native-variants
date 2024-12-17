"use server";

import { Brand } from "@/components/brand";
import { Code } from "@/components/code";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

interface Content {
  title: string;
  id: number;
  sections: Section[];
}

export type MDX = {
  title: string;
  filename: string;
  slug: string;
  id: number;
  sections: Section[];
};

export type Section = {
  title: string;
  href: string;
};

export const getMDX = async (slug: string) => {
  const content = await fs.readFile(
    path.join(process.cwd(), "content", `${slug}.mdx`),
    "utf-8",
  );

  const mdx = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Code,
      Brand
    },
  });

  return mdx;
};

export const getAllMDX = async () => {
  const filenames = await fs.readdir(path.join(process.cwd(), "content"));

  const mdxs = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "content", filename),
        "utf-8",
      );
      const { frontmatter } = await compileMDX<Content>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    }),
  );

  return mdxs.sort((a, b) => a.id - b.id);
};
