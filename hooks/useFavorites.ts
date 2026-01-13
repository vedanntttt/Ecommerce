'use client';

import { useState, useEffect, useCallback } from 'react';
import { toggleFavorite as toggleFavoriteUtil } from '@/lib/favorites';

export function useFavorites() {
  // Always start with empty array to match SSR
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load favorites only on client after hydration
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
      setIsLoaded(true);
    }
  }, []);

  const toggleFavorite = useCallback((productId: number) => {
    const updatedFavorites = toggleFavoriteUtil(productId);
    setFavorites(updatedFavorites);
  }, []);

  const isFavorite = useCallback((productId: number): boolean => {
    return favorites.includes(productId);
  }, [favorites]);

  return { favorites, toggleFavorite, isFavorite, isLoaded };
}
