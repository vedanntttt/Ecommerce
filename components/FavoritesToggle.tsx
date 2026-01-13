'use client';

import { Heart } from 'lucide-react';

interface FavoritesToggleProps {
  showFavoritesOnly: boolean;
  onToggle: () => void;
  favoritesCount: number;
}

export default function FavoritesToggle({
  showFavoritesOnly,
  onToggle,
  favoritesCount,
}: FavoritesToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        showFavoritesOnly
          ? 'bg-red-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      aria-label={showFavoritesOnly ? 'Show all products' : 'Show favorites only'}
    >
      <Heart
        className={`w-5 h-5 ${showFavoritesOnly ? 'fill-white' : ''}`}
      />
      <span>Favorites</span>
      {favoritesCount > 0 && (
        <span className="ml-1 px-2 py-0.5 text-sm rounded-full bg-white/20">
          {favoritesCount}
        </span>
      )}
    </button>
  );
}
