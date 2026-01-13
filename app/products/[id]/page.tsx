import { fetchProductById } from '@/lib/api';
import ProductDetails from '@/components/ProductDetails';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id);
  
  if (isNaN(productId)) {
    notFound();
  }

  let product = null;
  let error = null;

  try {
    product = await fetchProductById(productId);
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load product';
    console.error('Error loading product:', e);
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Failed to Load Product</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
