
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductForm from '@/components/ProductForm';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export default function EditProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">Curious Cart BD</a>
          <div>
            <a href="/" className="mx-2 text-gray-800 hover:text-gray-600">Home</a>
            <a href="/admin" className="mx-2 text-gray-800 hover:text-gray-600">Admin</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Product</h1>
        <div className="max-w-2xl mx-auto">
          {product ? <ProductForm product={product} /> : <div>Loading...</div>}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Curious Cart BD. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
