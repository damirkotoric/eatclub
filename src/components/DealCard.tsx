import { Lightning } from "@phosphor-icons/react";
import type { Deal } from "@/types";
import { Button } from "@/components/ui/button";
import { getDealTimeLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const timeLabel = getDealTimeLabel(deal);
  const suffix = deal.dineIn ? " · Dine In" : "";

  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 p-4 rounded-[var(--radius-card)] border",
        deal.lightning
          ? "border-brand-yellow bg-brand-yellow-light"
          : "border-border-default bg-surface-primary",
      )}
    >
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          {deal.lightning && (
            <Lightning
              size={18}
              weight="fill"
              className="text-brand-yellow"
              aria-label="Lightning deal"
            />
          )}
          <span className="text-lg font-bold text-text-deal">
            {deal.discount}% Off
          </span>
        </div>
        <p className="text-sm text-text-secondary">
          {timeLabel}
          {suffix}
        </p>
        <p className="text-xs text-text-tertiary">
          {deal.qtyLeft} Deals Left
        </p>
      </div>

      <Button
        size="sm"
        className="bg-brand-red hover:bg-brand-red-hover text-text-inverse rounded-[var(--radius-button)] font-semibold shrink-0"
      >
        Redeem
      </Button>
    </div>
  );
}
