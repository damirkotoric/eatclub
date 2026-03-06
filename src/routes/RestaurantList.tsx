import { useState, useMemo } from "react";
import { useRestaurants } from "@/lib/useRestaurants";
import { sortByBestDiscount, filterRestaurants } from "@/lib/utils";
import { SearchInput } from "@/components/SearchInput";
import { RestaurantCard } from "@/components/RestaurantCard";
import { RestaurantCardSkeleton } from "@/components/Skeleton/RestaurantCardSkeleton";
import { WarningCircle, ArrowClockwise } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function RestaurantList() {
  const { restaurants, isLoading, error, retry } = useRestaurants();
  const [search, setSearch] = useState("");

  const displayed = useMemo(() => {
    const filtered = filterRestaurants(restaurants, search);
    return sortByBestDiscount(filtered);
  }, [restaurants, search]);

  return (
    <div>
      <SearchInput value={search} onChange={setSearch} />

      <div className="px-[var(--space-page-x)] py-5 space-y-5">

      {error && (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
          <WarningCircle size={48} className="text-muted-foreground" />
          <p className="text-muted-foreground text-sm">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={retry}
            className="gap-2"
          >
            <ArrowClockwise size={16} />
            Try Again
          </Button>
        </div>
      )}

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-[var(--space-card-gap)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <RestaurantCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && !error && (
        <>
          {displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-muted-foreground text-sm">
                No restaurants match &ldquo;{search}&rdquo;
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-[var(--space-card-gap)]">
              {displayed.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </div>
          )}
        </>
      )}
      </div>
    </div>
  );
}
