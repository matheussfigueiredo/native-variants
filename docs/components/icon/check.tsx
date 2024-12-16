import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

interface CheckProps extends ComponentProps<"svg"> {}

export const Check = ({ className, ...props }: CheckProps) => {
  return (
    <svg
      {...props}
      className={cn("text-emerald-500", className)}
      fill="none"
      height="18"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};
