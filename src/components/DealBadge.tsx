import type { Deal } from "@/types";
import { getDealBadgeTimeLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface DealBadgeProps {
  deal: Deal;
  size?: "sm" | "md";
}

export function DealBadge({ deal, size = "md" }: DealBadgeProps) {
  const timeLabel = getDealBadgeTimeLabel(deal);
  const suffix = deal.dineIn ? " - Dine In" : "";

  return (
    <div
      className={cn(
        "inline-flex flex-col items-start bg-brand-red text-text-inverse leading-tight",
        size === "sm"
          ? "px-2 py-1 rounded-[var(--radius-badge)]"
          : "px-2.5 py-1.5 rounded-[var(--radius-badge)]",
      )}
    >
      <span
        className={cn("font-bold", size === "sm" ? "text-xs" : "text-sm")}
      >
        {deal.discount}% off
      </span>
      <span
        className={cn(
          size === "sm" ? "text-[10px]" : "text-xs",
          "opacity-90",
        )}
      >
        {timeLabel}
        {suffix}
      </span>
    </div>
  );
}
