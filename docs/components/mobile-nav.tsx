import { MDX } from "@/utils/mdx-handlers";
import { NavLink } from "./nav-link";

export function MobileNav({ content }: { content: MDX[] }) {
  return (
    <div className="overflow-hidden overflow-x-scroll pb-2">
      <ol className="whitespace-nowrap flex sm:hidden items-center gap-2.5">
        {content.map((item) => (
          <li key={item.id}>
            <NavLink href={`/docs/${item.slug}`}>{item.title}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
