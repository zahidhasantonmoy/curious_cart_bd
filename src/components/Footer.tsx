
'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGlobe, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
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

        {/* Developer Credit Block */}
        <div className="mt-6 border-t border-gray-700/60 pt-6 flex flex-col items-center text-center">
          <p className="text-[11px] font-medium tracking-widest text-gray-400 uppercase">
            DEVELOPED BY
          </p>
          <a
            href="https://zahidhasantonmoy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm font-bold text-white hover:text-gray-300 transition-colors"
          >
            Zahid Hasan Tonmoy
          </a>
          <p className="mt-0.5 text-xs text-gray-400">
            MERN Full Stack Developer &amp; AI Agent Developer
          </p>
          <div className="flex items-center space-x-4 mt-2.5">
            <a
              href="https://zahidhasantonmoy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGlobe size={16} />
            </a>
            <a
              href="https://github.com/zahidhasantonmoy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/zahidhasantonmoy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://www.facebook.com/zahidhasantonmoybd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="https://x.com/zahidhasan_bd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
