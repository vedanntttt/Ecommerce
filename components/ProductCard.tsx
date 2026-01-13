'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

export default function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="relative h-64 bg-gray-100 flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain w-full h-full"
          priority={false}
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
              {product.title}
            </h3>
          </Link>
          
          <button
            onClick={() => onToggleFavorite(product.id)}
            className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`w-6 h-6 ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
