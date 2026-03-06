import { useState, useEffect } from "react";
import type { Restaurant } from "@/types";
import { fetchRestaurants } from "@/lib/api";

interface UseRestaurantsReturn {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export function useRestaurants(): UseRestaurantsReturn {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetchRestaurants()
      .then((data) => {
        if (!cancelled) {
          setRestaurants(data);
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "An error occurred",
          );
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [retryCount]);

  const retry = () => setRetryCount((c) => c + 1);

  return { restaurants, isLoading, error, retry };
}
