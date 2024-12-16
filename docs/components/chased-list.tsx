"use client";
import { MDX } from "@/utils/mdx-handlers";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface ChasedListProps {
  data: MDX[];
}

export function ChasedList({ data }: ChasedListProps) {
  const pathname = usePathname();

  const filteredItem = data.find((item) => pathname.includes(item.slug));

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - headerHeight - 90,
        behavior: "smooth",
      });
      // Atualizar a URL no histórico
      window.history.pushState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <ol>
      {filteredItem?.sections?.map((item) => (
        <li key={item.title}>
          <a
            href={`#${item.href}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
