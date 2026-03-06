import type {
  RawApiResponse,
  RawDeal,
  RawRestaurant,
  Deal,
  Restaurant,
} from "@/types";

const API_URL = "/api/misc/challengedata.json";

function parseBool(value: string): boolean {
  return value.toLowerCase() === "true";
}

function normalizeDeal(raw: RawDeal, restaurant: RawRestaurant): Deal {
  const timeStart = raw.open ?? raw.start;
  const timeEnd = raw.close ?? raw.end;
  const hasOwnTimeWindow = timeStart != null && timeEnd != null;

  return {
    id: raw.objectId,
    discount: parseInt(raw.discount, 10),
    dineIn: parseBool(raw.dineIn),
    lightning: parseBool(raw.lightning),
    qtyLeft: parseInt(raw.qtyLeft, 10),
    timeStart: timeStart ?? restaurant.open,
    timeEnd: timeEnd ?? restaurant.close,
    hasOwnTimeWindow,
  };
}

function normalizeRestaurant(raw: RawRestaurant): Restaurant {
  const deals = raw.deals.map((d) => normalizeDeal(d, raw));
  const bestDeal = deals.reduce((best, deal) =>
    deal.discount > best.discount ? deal : best,
  );

  return {
    id: raw.objectId,
    name: raw.name.trim(),
    address: raw.address1,
    suburb: raw.suburb,
    cuisines: raw.cuisines,
    imageUrl: raw.imageLink,
    open: raw.open,
    close: raw.close,
    deals,
    bestDeal,
  };
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch restaurants: ${response.status}`);
  }
  const data: RawApiResponse = await response.json() as RawApiResponse;
  return data.restaurants.map(normalizeRestaurant);
}
