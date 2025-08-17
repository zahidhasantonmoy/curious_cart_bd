'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div>
      <Header />

      <main className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-lg text-gray-700 mb-8">This is a placeholder for the checkout process.</p>
        <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Continue Shopping
        </Link>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Curious Cart BD. All Rights Reserved.</p>
          <div className="mt-4">
            <p>Contact: +880 1234 567890</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://facebook.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
              <a href="https://instagram.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
