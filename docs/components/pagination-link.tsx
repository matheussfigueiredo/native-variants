import { cn } from "@/lib/cn";
import Link from "next/link";

interface PaginationLinkProps {
  icon: React.ElementType;
  children: React.ReactNode;
  reverse?: boolean;
  href?: string;
  disabled?: boolean;
}

export function PaginationLink({
  icon: Icon,
  children,
  reverse,
  href = "/",
  disabled = false,
}: PaginationLinkProps) {
  return !disabled ? (
    <Link
      className={cn(
        reverse && "flex-row-reverse !ml-auto !mr-0",
        "group select-none !text-title flex items-center ml-0 mr-auto gap-0.5",
      )}
      href={href}
    >
      <Icon className="transition-all size-6 mx-0.5 !text-title group-hover:!text-highlight" />
      <span className="transition-all !text-base group-hover:!text-highlight">
        {children}
      </span>
    </Link>
  ) : null;
}
