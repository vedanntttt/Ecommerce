import { fetchProducts, fetchCategories } from '@/lib/api';
import ProductList from '@/components/ProductList';

export default async function Home() {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

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
