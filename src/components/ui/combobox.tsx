"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/**
 * Searchable single-select, used for the long Country and Industry lists on the
 * certification application form (matching CertifyDB's registration form).
 */
export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select",
  searchPlaceholder = "Search...",
  id,
}: {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  id?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? options.filter((o) => o.toLowerCase().includes(q)) : options;
  }, [options, query]);

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setQuery("");
      }}
    >
      <PopoverTrigger
        id={id}
        type="button"
        role="combobox"
        aria-expanded={open}
        className="flex h-12 w-full items-center justify-between gap-2 rounded-xl border border-input bg-white/80 px-4 py-2 text-sm outline-none transition-[border-color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30"
      >
        <span className={cn("truncate", !value && "text-muted-foreground")}>
          {value || placeholder}
        </span>
        <ChevronDownIcon className="size-4 shrink-0 opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full border-b border-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <div className="max-h-64 overflow-y-auto p-1">
          {filtered.length === 0 ? (
            <p className="px-3 py-4 text-sm text-muted-foreground">No results found.</p>
          ) : (
            filtered.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-muted"
              >
                <CheckIcon
                  className={cn("size-4 shrink-0", value === option ? "opacity-100" : "opacity-0")}
                />
                <span className="truncate">{option}</span>
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
