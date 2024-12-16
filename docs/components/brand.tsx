import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

interface BrandProps extends ComponentProps<"span"> {}

export function Brand({ className, ...props }: BrandProps) {
  return (
    <span
      {...props}
      className={cn(
        "pointer-events-none border border-title w-6 h-6 p-3.5 rounded-[8px] text-sm text-title text-center flex justify-center items-center",
        className,
      )}
    >
      NV
    </span>
  );
}
