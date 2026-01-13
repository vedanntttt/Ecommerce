import { Product } from '@/types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
