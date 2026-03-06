import { useRef } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="px-[var(--space-page-x)] py-1 cursor-text border-b border-border md:border-b-0 md:pt-4"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="relative -mx-3">
        <MagnifyingGlass
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          aria-hidden="true"
        />
        <Input
          ref={inputRef}
          variant="ghost"
          type="text"
          placeholder="Search by restaurant or cuisine..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-auto pl-10 pr-10 py-2.5 text-sm"
          aria-label="Search restaurants"
        />
        {value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
