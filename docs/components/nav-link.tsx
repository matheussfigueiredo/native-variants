"use client";

import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

interface NavLinkProps extends LinkProps, Omit<ComponentProps<"a">, "href"> {}

export function NavLink({ className, href = "/", ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href={href}
      data-active={pathname.endsWith(href as string)}
      className={cn(
        "data-[active=true]:bg-blue-500/10 data-[active=true]:!text-blue-sky px-4 py-1.5 inline-flex !text-list-item rounded-lg transition-all text-center items-center whitespace-nowrap min-w-full hover:bg-blue-500/10 hover:!text-blue-sky",
        className,
      )}
    />
  );
}
