import { Skeleton } from "@/components/ui/skeleton";

export function RestaurantDetailSkeleton() {
  return (
    <div>
      <div className="px-[var(--space-page-x)] py-3">
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="aspect-video w-full" />
      <div className="flex justify-around py-3 border-b border-border-default">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-3 w-10" />
          </div>
        ))}
      </div>
      <div className="px-[var(--space-page-x)] py-5 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-7 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-24 w-full rounded-[var(--radius-card)]" />
          <Skeleton className="h-24 w-full rounded-[var(--radius-card)]" />
        </div>
      </div>
    </div>
  );
}
