'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would validate a secure token/session here
    const isLoggedIn = localStorage.getItem('adminLoggedIn');

    if (!isLoggedIn) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <nav>
            <a href="/admin" className="text-gray-300 hover:text-white mx-2">Dashboard</a>
            <a href="/admin/add" className="text-gray-300 hover:text-white mx-2">Add Product</a>
            <a href="/admin/orders" className="text-gray-300 hover:text-white mx-2">Orders</a>
            <button onClick={handleLogout} className="text-gray-300 hover:text-white mx-2 bg-transparent border-none cursor-pointer">Logout</button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}
