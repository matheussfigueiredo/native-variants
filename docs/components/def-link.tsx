import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const linkVariants = tv({
  base: "flex items-center transition-all gap-1.5 justify-center text-center px-6 py-1.5 rounded-3xl !text-white",
  variants: {
    variant: {
      primary: "bg-blue-sky hover:bg-blue-700",
      secondary: "bg-neutral-800 hover:bg-neutral-800/90",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface DefLinkProps
  extends LinkProps,
    Omit<ComponentProps<"a">, "href">,
    VariantProps<typeof linkVariants> {}

export function DefLink({
  variant,
  href = "/",
  className,
  ...props
}: DefLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cn(linkVariants({ variant }), className)}
    />
  );
}
