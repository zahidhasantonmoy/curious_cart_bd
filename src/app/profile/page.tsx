'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const storedUsername = localStorage.getItem('currentUser');

    if (!userToken || !storedUsername) {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      setUsername(storedUsername);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentUser');
    router.push('/'); // Redirect to home after logout
  };

  if (!username) {
    return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">Curious Cart BD</a>
          <div>
            <a href="/" className="mx-2 text-gray-800 hover:text-gray-600">Home</a>
            <a href="/admin" className="mx-2 text-gray-800 hover:text-gray-600">Admin</a>
            <a href="/about" className="mx-2 text-gray-800 hover:text-gray-600">About Us</a>
            <a href="/cart" className="mx-2 text-gray-800 hover:text-gray-600">Cart</a>
            <a href="/profile" className="mx-2 text-gray-800 hover:text-gray-600">Profile</a>
            <button onClick={handleLogout} className="mx-2 text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">Logout</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
          <p className="text-xl mb-4">Welcome, <span className="font-semibold">{username}</span>!</p>
          <p className="text-gray-600">This is your profile page. More details and options will be available here soon.</p>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
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
