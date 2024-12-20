import { cn } from "@/lib/cn";
import { MDX } from "@/utils/mdx-handlers";
import Link from "next/link";

export function QuickList({
  data,
  search,
  onToggle,
}: {
  data: MDX[];
  search: string;
  onToggle: () => void;
}) {
  return (
    <ol className="[&>li]:!mt-0 rounded-md">
      {data.map((item) => {
        const pathname = `/docs/${item.slug}`;

        return (
          <li key={item.id} className="!m-0 !p-0">
            <Link
              onClick={onToggle}
              href={pathname}
              className={cn(
                "inline-flex flex-col items-start px-4 py-2.5 rounded-lg hover:bg-neutral-900/60 w-full",
              )}
            >
              <span className="text-lg">{item.title}</span>
              {!item.slug && <p className="text-list-item">{item.slug}</p>}
            </Link>
            {item.sections?.length > 0 && (
              <div className="flex gap-1.5 py-0 h-full">
                <div className="min-h-full min-w-[1px] ml-6 mr-2 bg-list-item" />
                <ol className="flex flex-col h-full">
                  {item.sections?.map((section) =>
                    section.title
                      .toLowerCase()
                      .includes(search.toLowerCase()) ? (
                      <li key={section.title}>
                        <Link
                          onClick={onToggle}
                          href={`${pathname}#${section.title}`}
                          className="hover:underline"
                        >
                          {section.title}
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ol>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
