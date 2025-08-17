
'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  variants?: Variant[]; // Added variants field
  stock: number; // Added stock field
}

interface Variant {
  type: string;
  value: string;
  price_modifier: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const uniqueCategories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />

      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Discover Your Next Favorite Product!</h2>
          <p className="text-xl mb-8">Curious Cart BD offers a unique selection of items that spark joy and curiosity.</p>
          <a href="#products" className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Shop Now
          </a>
        </div>
      </section>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {uniqueCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-dark text-white py-6 mt-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Curious Cart BD. All Rights Reserved.</p>
          <div className="mt-4">
            <p>Contact: +880 1234 567890</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://facebook.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary-dark">Facebook</a>
              <a href="https://instagram.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent-dark">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

