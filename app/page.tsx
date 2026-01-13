import { fetchProducts, fetchCategories } from '@/lib/api';
import ProductList from '@/components/ProductList';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  let products = [];
  let categories = [];
  let error = null;

  try {
    const results = await Promise.all([
      fetchProducts(),
      fetchCategories(),
    ]);
    products = results[0];
    categories = results[1];
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load data';
    console.error('Error loading data:', e);
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Failed to Load Products</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <p className="text-sm text-gray-500">Please try refreshing the page</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Product Explorer
          </h1>
          <p className="text-gray-600">
            Discover and explore our curated collection of products
          </p>
        </header>

        <ProductList initialProducts={products} categories={categories} />
      </div>
    </main>
  );
}
