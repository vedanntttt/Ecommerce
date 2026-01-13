'use client';

import { Package } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  description?: string;
}

export default function EmptyState({ message, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <Package className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{message}</h3>
      {description && <p className="text-gray-600 text-center">{description}</p>}
    </div>
  );
}
