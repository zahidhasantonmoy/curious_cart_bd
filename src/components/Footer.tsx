
'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Curious Cart BD is your destination for unique and thoughtful products that bring joy and peace to your life.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/cart" className="text-gray-400 hover:text-white">Cart</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-white">Login</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Dhaka, Bangladesh</p>
            <p className="text-gray-400">Email: info@curiouscartbd.com</p>
            <p className="text-gray-400">Phone: +880 1234 567890</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and promotions.</p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  className="w-full p-2 rounded-l-md text-gray-800"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-2 px-4 rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 Curious Cart BD. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="https://instagram.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="https://twitter.com/curiouscartbd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
