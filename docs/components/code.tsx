"use client";

import useClipboard from "@/hooks/use-clipboard";
import nativeVariantsTheme from "@/utils/native-variants-theme";
import { ComponentProps } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeProps extends ComponentProps<typeof SyntaxHighlighter> {
  code?: string;
}

export function Code({ code, children, ...props }: CodeProps) {
  const { handleCopy, message, isCopied } = useClipboard({
    code: code!,
  });

  return (
    <div className="relative w-full flex flex-col group mb-8">
      <button
        onClick={handleCopy}
        disabled={isCopied}
        className="transition-all group-hover:opacity-100 group-hover:pointer-events-auto group-hover:z-1 -z-0 opacity-0 pointer-events-none absolute right-1 top-2 text-title border border-border text-sd bg-background px-2.5 py-0.5 ml-auto mr-1 rounded-md"
      >
        {message}
      </button>
      <SyntaxHighlighter
        {...props}
        language="typescript"
        style={nativeVariantsTheme as any}
      >
        {children || (code as any)}
      </SyntaxHighlighter>
    </div>
  );
}
