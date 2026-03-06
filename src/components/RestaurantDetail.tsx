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
      {/* Back button */}
      <div className="px-[var(--space-page-x)] py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Go back to restaurant list"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      </div>

      {/* Hero image */}
      <div className="relative aspect-video overflow-hidden">
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-surface-secondary to-surface-tertiary" />
        ) : (
          <img
            src={restaurant.imageUrl}
            alt={`${restaurant.name} restaurant`}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Quick actions bar */}
      <div className="flex justify-around py-3 border-b border-border-default bg-surface-primary">
        {quickActions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-primary transition-colors"
            aria-label={label}
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>

      {/* Restaurant info */}
      <div className="px-[var(--space-page-x)] py-5 space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-text-primary">
            {restaurant.name}
          </h1>
          <p className="text-sm text-text-secondary">
            {restaurant.cuisines.join(", ")} · $
          </p>
          <div className="flex items-center gap-1.5 text-sm text-text-secondary">
            <Clock size={16} aria-hidden="true" />
            <span>
              {restaurant.open} - {restaurant.close}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-text-secondary">
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
            className="text-lg font-semibold text-text-primary mb-3"
          >
            Available Deals
          </h2>
          <div className="space-y-3">
            {sortedDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
