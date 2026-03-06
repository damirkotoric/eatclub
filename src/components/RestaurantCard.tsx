import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Heart, ForkKnife } from "@phosphor-icons/react";
import type { Restaurant } from "@/types";
import { DealBadge } from "./DealBadge";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [imgError, setImgError] = useState(false);
  const { bestDeal } = restaurant;
  const hasDineIn = restaurant.deals.some((d) => d.dineIn);

  const serviceTypes = [
    ...(hasDineIn ? ["Dine In"] : []),
    "Takeaway",
    "Order Online",
  ];

  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="group block rounded-[var(--radius-card)] bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`${restaurant.name} — ${bestDeal.discount}% off`}
    >
      {/* Hero image */}
      <div className="relative aspect-video overflow-hidden">
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-accent to-muted flex items-center justify-center">
            <ForkKnife size={48} weight="thin" className="text-muted-foreground" aria-hidden="true" />
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
          <DealBadge deal={bestDeal} size="sm" />
        </div>
        {/* Favourite icon */}
        <button
          type="button"
          aria-label="Add to favourites"
          className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={18} className="text-muted-foreground" />
        </button>
      </div>

      {/* Card body */}
      <div className="p-[var(--space-card-padding)] space-y-1">
        <h2 className="font-semibold text-foreground text-base leading-snug">
          {restaurant.name}
        </h2>
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <MapPin size={14} weight="fill" aria-hidden="true" />
          <span>
            0.5km Away, {restaurant.suburb}
          </span>
        </div>
        <p className="text-muted-foreground text-sm truncate">
          {restaurant.cuisines.join(", ")}
        </p>
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <Clock size={14} aria-hidden="true" />
          <span>
            {restaurant.open} - {restaurant.close}
          </span>
        </div>
        <p className="text-muted-foreground text-xs">
          {serviceTypes.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
