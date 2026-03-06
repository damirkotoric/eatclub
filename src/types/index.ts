/* ---------- RAW API TYPES ---------- */

export interface RawDeal {
  objectId: string;
  discount: string;
  dineIn: string;
  lightning: string;
  qtyLeft: string;
  open?: string;
  close?: string;
  start?: string;
  end?: string;
}

export interface RawRestaurant {
  objectId: string;
  name: string;
  address1: string;
  suburb: string;
  cuisines: string[];
  imageLink: string;
  open: string;
  close: string;
  deals: RawDeal[];
}

export interface RawApiResponse {
  restaurants: RawRestaurant[];
}

/* ---------- NORMALIZED APP TYPES ---------- */

export interface Deal {
  id: string;
  discount: number;
  dineIn: boolean;
  lightning: boolean;
  qtyLeft: number;
  timeStart: string;
  timeEnd: string;
  hasOwnTimeWindow: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  suburb: string;
  cuisines: string[];
  imageUrl: string;
  open: string;
  close: string;
  deals: Deal[];
  bestDeal: Deal;
}
