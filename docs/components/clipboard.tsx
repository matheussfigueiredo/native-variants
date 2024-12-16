"use client";

import useClipboard from "@/hooks/use-clipboard";
import { cn } from "@/lib/cn";
import { ComponentProps } from "react";
import { Check } from "./icon/check";
import { Copy } from "./icon/copy";

interface ClipboardProps extends ComponentProps<"div"> {
  code: string;
}

export function Clipboard({ className, code, ...props }: ClipboardProps) {
  const { handleCopy, isCopied } = useClipboard({
    code,
  });

  return (
    <div
      {...props}
      className={cn(
        "relative bg-neutral-800 max-w-[360px] !text-title w-full flex items-center justify-between mx-auto rounded-3xl px-4 py-2",
        className,
      )}
    >
      <span className="font-mono mr-2">$</span>
      <span className="font-mono font-medium w-full">{code}</span>
      <button onClick={handleCopy}>{isCopied ? <Check /> : <Copy />}</button>
    </div>
  );
}
