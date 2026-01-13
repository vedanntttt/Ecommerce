export const getFavorites = (): number[] => {
  if (typeof window === 'undefined') return [];
  
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (productId: number): number[] => {
  const favorites = getFavorites();
  const index = favorites.indexOf(productId);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return favorites;
};

export const isFavorite = (productId: number): boolean => {
  return getFavorites().includes(productId);
};
