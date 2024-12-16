"use client";

import { ChevronLeft } from "@/components/icon/chevron-left";
import { ChevronRight } from "@/components/icon/chevron-right";
import { PaginationLink } from "@/components/pagination-link";
import { MDX } from "@/utils/mdx-handlers";
import { usePathname } from "next/navigation";

interface PaginationProps {
  content: MDX[];
}

export function Pagination({ content }: PaginationProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const currentItem = content.find((item) => item.slug === currentSlug);
  const currentIndex = currentItem ? content.indexOf(currentItem) : -1;

  const prevItem = currentIndex > 0 ? content[currentIndex - 1] : null;
  const nextItem =
    currentIndex < content.length - 1 ? content[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between w-full mt-8">
      <PaginationLink
        icon={ChevronLeft}
        href={prevItem ? `/docs/${prevItem.slug}` : ""}
        disabled={!prevItem}
      >
        Voltar
      </PaginationLink>
      <PaginationLink
        reverse
        icon={ChevronRight}
        href={nextItem ? `/docs/${nextItem.slug}` : ""}
        disabled={!nextItem}
      >
        Próximo
      </PaginationLink>
    </div>
  );
}
