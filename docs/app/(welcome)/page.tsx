import { Brand } from "@/components/brand";
import { Clipboard } from "@/components/clipboard";
import { DefLink } from "@/components/def-link";
import { Redirect } from "@/components/icon/redirect";

export default function Home() {
  return (
    <main className="max-w-8xl mx-auto w-full mt-24 lg:mt-40 flex h-full justify-center items-center py-0 sm:py-10 px-4">
      <div className="flex-1 flex h-full justify-center items-center flex-col gap-3.5">
        <Brand className="size-16 text-2xl" />
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h1 className="!mb-0 !p-0">Native Variants</h1>
          <h4 className="border-b-0 my-0 text-center font-normal text-highlight">
            Simplifying and Streamlining Style Variations with StyleSheet in
            React Native
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          <DefLink href="/docs/introduction">Documentation</DefLink>
          <DefLink
            href="https://github.com/matheussatoshi/native-variants"
            variant="secondary"
          >
            Github <Redirect />
          </DefLink>
        </div>
        <Clipboard className="mt-3.5" code="npm install native-variants" />
      </div>
    </main>
  );
}
