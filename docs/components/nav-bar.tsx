import { Github } from "@/components/icon/githhub";
import Link from "next/link";
import { Brand } from "./brand";
import { QuickExplorer } from "./quick-explorer";

export function NavBar() {
  return (
    <header className="w-full py-3.5 px-4 z-50 border-b border-border sticky top-0 backdrop-blur-sm bg-background/30">
      <div className="max-w-[1350px] mx-auto w-full px-0 lg:px-4 flex justify-between">
        <Link href="/" className="items-center gap-3 hidden sm:flex">
          <Brand />
          <span className="hidden sm:block text-title whitespace-nowrap font-medium tracking-wide">
            Native Variants
          </span>
        </Link>
        <nav className="flex justify-between sm:justify-normal items-center gap-4">
          <Link
            className="!text-title hover:!text-paragraphy hover:underline"
            href="/docs/introduction"
          >
            Doc
          </Link>
          <QuickExplorer />
          <Link
            className="group !text-title"
            href="https://github.com/matheussatoshi/native-variants"
          >
            <Github />
          </Link>
        </nav>
      </div>
    </header>
  );
}
