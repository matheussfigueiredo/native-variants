import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

interface SideNavProps extends ComponentProps<"aside"> {}

export function SideNav({ className, ...props }: SideNavProps) {
  return (
    <aside
      {...props}
      className={cn(
        "sticky top-24 w-full h-full max-w-[275px] px-4",
        className,
      )}
    />
  );
}
