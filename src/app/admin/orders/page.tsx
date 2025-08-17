'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminOrdersPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!adminLoggedIn) {
      router.push('/admin/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting to login...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <nav>
            <Link href="/admin" className="text-gray-300 hover:text-white mx-2">Dashboard</Link>
            <Link href="/admin/add" className="text-gray-300 hover:text-white mx-2">Add Product</Link>
            <Link href="/admin/orders" className="text-gray-300 hover:text-white mx-2">Orders</Link>
            {/* Logout button will be handled by layout */}
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Order Management</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">This is a placeholder for the order management section.</p>
          <p className="text-gray-700 mt-2">Here, admins would be able to view, update, and manage customer orders.</p>
        </div>
      </main>
    </div>
  );
}
