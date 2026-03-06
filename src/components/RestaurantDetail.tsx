import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  NavigationArrow,
  BookOpen,
  Heart,
  ForkKnife,
} from "@phosphor-icons/react";
import type { Restaurant } from "@/types";
import { DealCard } from "./DealCard";

interface RestaurantDetailProps {
  restaurant: Restaurant;
}

export function RestaurantDetail({ restaurant }: RestaurantDetailProps) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const sortedDeals = [...restaurant.deals].sort(
    (a, b) => b.discount - a.discount,
  );

  const quickActions = [
    { icon: BookOpen, label: "Menu" },
    { icon: Phone, label: "Call us" },
    { icon: NavigationArrow, label: "Location" },
    { icon: Heart, label: "Favourite" },
  ] as const;

  return (
    <article>
      {/* Hero image */}
      <div className="relative aspect-video overflow-hidden">
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-brand-yellow to-brand-orange flex items-center justify-center">
            <ForkKnife size={64} weight="thin" className="text-brand-red" aria-hidden="true" />
          </div>
        ) : (
          <img
            src={restaurant.imageUrl}
            alt={`${restaurant.name} restaurant`}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Quick actions bar */}
      <div className="flex justify-around py-3 border-b border-border bg-background">
        {quickActions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={label}
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>

      {/* Restaurant info */}
      <div className="px-[var(--space-page-x)] py-5 space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            {restaurant.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            {restaurant.cuisines.join(", ")} · $
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock size={16} aria-hidden="true" />
            <span>
              {restaurant.open} - {restaurant.close}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={16} weight="fill" aria-hidden="true" />
            <span>
              {restaurant.address}, {restaurant.suburb} · 1.0km Away
            </span>
          </div>
        </div>

        {/* Deal cards */}
        <section aria-labelledby="deals-heading">
          <h2
            id="deals-heading"
            className="text-lg font-heading font-semibold text-foreground"
          >
            Available Deals
          </h2>
          <div>
            {sortedDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
