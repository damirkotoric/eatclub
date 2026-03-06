import { ForkKnife, MapPin } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-primary border-b border-border-default shadow-header">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-[var(--space-page-x)]">
        <div className="flex items-center gap-2">
          <ForkKnife
            size={24}
            weight="fill"
            className="text-brand-yellow"
          />
          <span className="text-lg font-bold text-text-primary">EatClub</span>
        </div>
        <button
          type="button"
          aria-label="Location"
          className="p-2 rounded-full hover:bg-surface-secondary transition-colors"
        >
          <MapPin size={20} className="text-text-secondary" />
        </button>
      </div>
    </header>
  );
}
