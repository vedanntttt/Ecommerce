'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Image */}
            <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center p-8">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {product.title}
                </h1>
                
                {isLoaded && (
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart
                      className={`w-8 h-8 ${
                        isFavorite(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                )}
              </div>

              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{product.rating.rate}</span>
                </div>
                <span className="text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
