import { SideNav } from "@/components/layout/side-nav";
import { NavLink } from "@/components/nav-link";
import { MDX } from "@/utils/mdx-handlers";

export function DocNav({ content }: { content: MDX[] }) {
  return (
    <SideNav className="max-[1100px]:hidden block">
      <ol>
        {content.map((item) => (
          <li key={item.title}>
            <NavLink href={`/docs/${item.slug}`}>{item.title}</NavLink>
          </li>
        ))}
      </ol>
    </SideNav>
  );
}
