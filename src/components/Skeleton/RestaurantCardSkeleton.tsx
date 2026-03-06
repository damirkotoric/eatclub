import { Skeleton } from "@/components/ui/skeleton";

export function RestaurantCardSkeleton() {
  return (
    <div>
      <Skeleton className="aspect-video w-full rounded-[var(--radius-card)] shadow-sm" />
      <div className="p-[var(--space-card-padding)] space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-2/5" />
      </div>
    </div>
  );
}
