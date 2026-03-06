import { useParams, useNavigate } from "react-router-dom";
import { useRestaurants } from "@/lib/useRestaurants";
import { RestaurantDetail } from "@/components/RestaurantDetail";
import { RestaurantDetailSkeleton } from "@/components/Skeleton/RestaurantDetailSkeleton";
import { WarningCircle, ArrowClockwise } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function RestaurantDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { restaurants, isLoading, error, retry } = useRestaurants();
  const navigate = useNavigate();

  const restaurant = restaurants.find((r) => r.id === id);

  if (isLoading) {
    return <RestaurantDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-3 px-[var(--space-page-x)]">
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
    );
  }

  if (!restaurant) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-3 px-[var(--space-page-x)]">
        <WarningCircle size={48} className="text-muted-foreground" />
        <p className="text-muted-foreground text-sm">Restaurant not found</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/")}
          className="gap-2"
        >
          Back to list
        </Button>
      </div>
    );
  }

  return <RestaurantDetail restaurant={restaurant} />;
}
