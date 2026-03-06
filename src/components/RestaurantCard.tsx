import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ForkKnife } from "@phosphor-icons/react";
import type { Restaurant } from "@/types";
import { DealBadge } from "./DealBadge";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [imgError, setImgError] = useState(false);
  const { bestDeal } = restaurant;

  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`${restaurant.name} — ${bestDeal.discount}% off`}
    >
      {/* Hero image */}
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-card)] shadow-md group-hover:shadow-md transition-shadow duration-300">
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-brand-yellow to-brand-orange flex items-center justify-center">
            <ForkKnife size={48} weight="thin" className="text-brand-red" aria-hidden="true" />
          </div>
        ) : (
          <img
            src={restaurant.imageUrl}
            alt={`${restaurant.name} restaurant`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        {/* Badge overlay */}
        <div className="absolute bottom-2 left-2">
          <DealBadge deal={bestDeal} size="sm" hours={`${restaurant.open} - ${restaurant.close}`} />
        </div>
      </div>

      {/* Card body */}
      <div className="py-[var(--space-card-padding)] space-y-0">
        <div className="flex items-start gap-1">
          <div className="flex-1 min-w-0 space-y-1 pt-0.5">
            <h2 className="flex-1 font-heading font-semibold text-foreground text-base leading-snug">
              {restaurant.name}
            </h2>
            <p className="text-muted-foreground text-xs truncate">
              0.5km • {restaurant.cuisines.join(", ")}
            </p>
            <p className="text-muted-foreground text-xs">
              Dine In · Takeaway · Order Online
            </p>
          </div>
          <button
            type="button"
            aria-label="Add to favourites"
            className="-mt-0.5 p-1 rounded-full hover:bg-accent transition-colors cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </Link>
  );
}
