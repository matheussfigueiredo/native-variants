import Copy from "@/components/markdown/copy";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { registry_enterprises } from "@/registry/registry-enterprises";
import { TerminalSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2  sm:pb-24">
      <h1 className="text-4xl font-bold sm:mt-56 mb-4 sm:text-6xl">
        Native Variants
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        Simplifying and Streamlining Style Variations with StyleSheet in React
        Native.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 font-mono text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"npm install native-variants"}
        <Copy
          className="bg-transparent border-none"
          content="npm install native-variants"
        />
      </span>

      <div className=" sm:mt-24 flex flex-col justify-center items-center">
        <h1 className="font-medium mb-1.5">Built for modern product teams.</h1>
        <span className="text-muted-foreground">
          From next-gen startups to established enterprises.
        </span>

        <div className="flex gap-10 mt-6">
          {registry_enterprises.map((item) => (
            <Link key={item.id} href={item.href} title={item.alt}>
              <Image src={item.logo} alt={item.alt} width={40} height={40} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
