"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "./icon/chevron-right";

export function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.replace(/^\//, "").split("/");

  const capitalize = (segment: string) =>
    segment.charAt(0).toUpperCase() + segment.slice(1);

  let currentPath = "";

  return (
    <ol className="flex items-center mb-4 !mt-0 !ml-0">
      {pathSegments.map((segment, index) => {
        currentPath += `/${segment}`;

        const isActive = pathname === currentPath;

        return (
          <li key={index} className="flex items-center">
            <Link
              href={currentPath}
              data-active={isActive}
              className="data-[active=true]:!font-semibold data-[active=true]:!text-blue-sky !text-list-item !text-sl"
            >
              {capitalize(segment)}
            </Link>
            {index < pathSegments.length - 1 && <ChevronRight />}
          </li>
        );
      })}
    </ol>
  );
}
