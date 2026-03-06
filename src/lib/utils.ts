import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Deal, Restaurant } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortByBestDiscount(restaurants: Restaurant[]): Restaurant[] {
  return [...restaurants].sort((a, b) => {
    if (b.bestDeal.discount !== a.bestDeal.discount) {
      return b.bestDeal.discount - a.bestDeal.discount;
    }
    return a.name.localeCompare(b.name);
  });
}

export function filterRestaurants(
  restaurants: Restaurant[],
  query: string,
): Restaurant[] {
  if (!query.trim()) return restaurants;
  const lower = query.toLowerCase().trim();
  return restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(lower) ||
      r.cuisines.some((c) => c.toLowerCase().includes(lower)),
  );
}

export function getDealTimeLabel(deal: Deal): string {
  if (!deal.hasOwnTimeWindow) {
    return "Anytime today";
  }
  return `${deal.timeStart} - ${deal.timeEnd}`;
}

export function getDealBadgeTimeLabel(deal: Deal): string {
  if (!deal.hasOwnTimeWindow) {
    return "Anytime today";
  }
  return `Arrive before ${deal.timeEnd}`;
}
