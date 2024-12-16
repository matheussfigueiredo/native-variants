import React from "react";

const SECONDS_TO_ENABLE = 3000;

export default function useClipboard({
  timeout = SECONDS_TO_ENABLE,
  code,
}: {
  timeout?: number;
  code: string;
}) {
  const [message, setMessage] = React.useState("Copy");
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    if (isCopied) return;

    navigator.clipboard.writeText(code).then(
      () => {
        setMessage("Copied!");
        setIsCopied(true);
        setTimeout(() => {
          setMessage("Copy");
          setIsCopied(false);
        }, timeout);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      },
    );
  };

  return { handleCopy, message, isCopied };
}
