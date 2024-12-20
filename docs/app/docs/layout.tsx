"use server";

import { Breadcrumb } from "@/components/breadcrumb";
import { DocNav } from "@/components/layout/doc-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SectionNav } from "@/components/layout/section-nav";
import { Pagination } from "@/components/pagination";
import { getAllMDX } from "@/utils/mdx-handlers";

export default async function DocLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const mdxs = await getAllMDX();

  return (
    <div className="w-full mt-6 pb-10 mx-auto max-w-8xl h-full justify-center flex gap-4">
      <DocNav content={mdxs} />
      <main className="max-[1100px]:max-w-full py-6 max-w-3xl w-full h-full px-6">
        <Breadcrumb />
        <MobileNav content={mdxs} />
        <section className="border-b h-full w-full border-border pb-6">
          {children}
        </section>
        <Pagination content={mdxs} />
      </main>
      <SectionNav content={mdxs} />
    </div>
  );
}
