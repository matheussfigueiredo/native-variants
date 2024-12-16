import { ChangeEvent, ComponentProps } from "react";

interface QuickInput extends ComponentProps<"input"> {
  onToggle: () => void;
  search: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function QuickInput({
  onToggle,
  search,
  onSearch,
  ...props
}: QuickInput) {
  return (
    <div onClick={onToggle} className="relative max-w-full sm:max-w-lg w-full">
      <input
        {...props}
        type="text"
        value={search}
        onChange={onSearch}
        placeholder="Search..."
        className="w-full placeholder:font-extralight bg-transparent text-highlight px-3.5 py-1 border border-border rounded-lg"
      />
      <span className="rounded-lg font-bold absolute right-1 top-[5px] text-background bg-border size-6 text-center">
        /
      </span>
    </div>
  );
}
