import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

interface RedirectProps extends ComponentProps<"svg"> {}

export const Redirect = ({ className, ...props }: RedirectProps) => {
  return (
    <svg
      {...props}
      className={cn("ml-1 stroke-white", className)}
      fill="none"
      shapeRendering="geometricPrecision"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
      <path d="M15 3h6v6"></path>
      <path d="M10 14L21 3"></path>
    </svg>
  );
};
