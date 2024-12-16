import { SideNav } from "@/components/side-nav";
import { MDX } from "@/utils/mdx-handlers";
import { ChasedList } from "./chased-list";

export function SectionNav({ content }: { content: MDX[] }) {
  return (
    <SideNav className="max-[1200px]:hidden block">
      <span className="text-sl">On this page</span>
      <ChasedList data={content} />
    </SideNav>
  );
}
