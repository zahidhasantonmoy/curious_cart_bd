
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProducts();
      }
    }
  };

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <Link href="/admin/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add Product
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="py-3 px-6 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {products.map(product => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="py-4 px-6">{product.name}</td>
                  <td className="py-4 px-6">${product.price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-right">
                    <Link href={`/admin/edit/${product.id}`} className="text-blue-500 hover:underline mr-4">Edit</Link>
                    <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
