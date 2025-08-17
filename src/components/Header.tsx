'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const storedUsername = localStorage.getItem('currentUser');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setUsername('');
    router.push('/');
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">Curious Cart BD</Link>
        <div>
          <Link href="/" className="mx-2 text-gray-800 hover:text-gray-600">Home</Link>
          <Link href="/admin" className="mx-2 text-gray-800 hover:text-gray-600">Admin</Link>
          <Link href="/about" className="mx-2 text-gray-800 hover:text-gray-600">About Us</Link>
          <Link href="/cart" className="mx-2 text-gray-800 hover:text-gray-600">Cart</Link>
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="mx-2 text-gray-800 hover:text-gray-600">Profile ({username})</Link>
              <button onClick={handleLogout} className="mx-2 text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="mx-2 text-gray-800 hover:text-gray-600">Login</Link>
              <Link href="/register" className="mx-2 text-gray-800 hover:text-gray-600">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
