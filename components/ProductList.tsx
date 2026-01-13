'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import FavoritesToggle from '@/components/FavoritesToggle';
import EmptyState from '@/components/EmptyState';
import { useFavorites } from '@/hooks/useFavorites';

interface ProductListProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductList({ initialProducts, categories }: ProductListProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      
      // Category filter applies regardless of favorites toggle
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      
      const matchesFavorites = !showFavoritesOnly || isFavorite(product.id);
      
      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [products, searchQuery, selectedCategory, showFavoritesOnly, isFavorite]);

  if (!isLoaded) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search products..."
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <FavoritesToggle
          showFavoritesOnly={showFavoritesOnly}
          onToggle={() => setShowFavoritesOnly(!showFavoritesOnly)}
          favoritesCount={favorites.length}
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <EmptyState
          message="No products found"
          description={
            showFavoritesOnly
              ? "You haven't added any favorites yet."
              : "Try adjusting your search or filters."
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
