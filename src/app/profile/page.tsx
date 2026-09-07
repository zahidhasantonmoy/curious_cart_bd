'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const storedUsername = localStorage.getItem('currentUser');

    if (!userToken || !storedUsername) {
      router.push('/login');
    } else {
      setUsername(storedUsername);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentUser');
    router.push('/');
  };

  if (!username) {
    return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">User Profile</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <p className="text-xl mb-3 text-gray-800">Welcome back, <span className="font-bold text-brand-primary">{username}</span>!</p>
          <p className="text-gray-600 mb-6">আপনার অ্যাকাউন্ট সক্রিয় আছে। শীঘ্রই এখানে আপনার পূর্বের অর্ডার ইতিহাস দেখতে পাবেন।</p>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-4 rounded-xl transition"
          >
            লগআউট (Logout)
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
