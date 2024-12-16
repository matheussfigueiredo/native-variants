"use client";

import { getAllMDX, MDX } from "@/utils/mdx-handlers";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { QuickInput } from "./quick-input";
import { QuickList } from "./quick-list";

export function QuickExplorer() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<MDX[]>([]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onToggle = () => setOpen((prev) => !prev);

  const fetchAllMDX = useCallback(async () => {
    try {
      const response = await getAllMDX();
      setData(response);
    } catch (error) {
      throw new Error("Failure the request content:", error as any);
    }
  }, []);

  useEffect(() => {
    fetchAllMDX();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredData =
    search.length > 0
      ? data.filter((item) => {
          const searchText = search.toLowerCase();
          const matchesSections = item.sections?.some((section) =>
            section.title.toLowerCase().includes(searchText),
          );

          if (matchesSections) return true;

          return (
            item.title.toLowerCase().includes(searchText) ||
            item.slug.toLowerCase().includes(searchText)
          );
        })
      : data;

  return (
    <div className="relative w-full sm:w-auto" ref={ref}>
      <QuickInput onToggle={onToggle} search={search} onSearch={onSearch} />
      <div
        data-active={open}
        className="data-[active=true]:opacity-100 overflow-hidden data-[active=true]:z-10 data-[active=true]:pointer-events-auto data-[active=true]:translate-y-0 pointer-events-none transition-all opacity-0 -z-10 translate-y-2 absolute overflow-y-scroll top-11 right-0 h-full p-2 min-h-64 w-[400px] border border-border rounded-lg bg-background"
      >
        <QuickList onToggle={onToggle} search={search} data={filteredData} />
      </div>
    </div>
  );
}
