import { Lightning } from "@phosphor-icons/react";
import type { Deal } from "@/types";
import { Button } from "@/components/ui/button";
import { getDealTimeLabel } from "@/lib/utils";

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const timeLabel = getDealTimeLabel(deal);
  const suffix = deal.dineIn ? " · Dine In" : "";

  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-b-0">
      <div className="flex-1 space-y-0.5">
        <div className="flex items-center gap-1.5">
          {deal.lightning && (
            <Lightning
              size={16}
              weight="fill"
              className="text-brand-yellow"
              aria-label="Lightning deal"
            />
          )}
          <span className="text-base font-bold text-destructive">
            {deal.discount}% Off
          </span>
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          {timeLabel}
          {suffix}
        </p>
        <p className="text-xs text-muted-foreground">
          {deal.qtyLeft} Deals Left
        </p>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold shrink-0"
      >
        Redeem
      </Button>
    </div>
  );
}
