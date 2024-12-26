import Copy from "@/components/markdown/copy";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2  sm:pb-24">
      <h1 className="text-4xl font-bold mb-4 sm:text-6xl">Native Variants</h1>
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
    </div>
  );
}
