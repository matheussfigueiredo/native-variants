import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

interface ChevronRightProps extends ComponentProps<"svg"> {}

export const ChevronRight = ({ className, ...props }: ChevronRightProps) => {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      className={cn("w-4 h-4 mx-2 text-list-item", className)}
    >
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  );
};
