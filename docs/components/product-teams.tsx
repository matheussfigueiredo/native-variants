import { cn } from "@/lib/utils";
import { registry_enterprises } from "@/registry/registry-enterprises";
import Link from "next/link";
import Image from "./markdown/image";

export function ProductTeams({
  alt,
  href,
  id,
  logo,
  width,
  className,
}: (typeof registry_enterprises)[0]) {
  return (
    <Link
      key={id}
      href={href}
      title={alt}
      className={cn("flex items-end justify-center", className)}
    >
      <Image
        src={logo}
        alt={alt}
        width={width}
        className={cn(id === 2 && "pb-1")}
      />
    </Link>
  );
}
