'use client';

import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div>
      <Header />

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Curious Cart BD</h1>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">Welcome to Curious Cart BD, your one-stop shop for unique and high-quality products. We are dedicated to bringing you a curated selection of items that spark curiosity and add value to your everyday life.</p>
          <p className="mb-4">Our mission is to provide an exceptional online shopping experience, offering a diverse range of products from various categories. We believe in quality, affordability, and customer satisfaction above all else.</p>
          <p className="mb-4">Founded in 2025, Curious Cart BD started with a passion for discovering interesting goods and sharing them with the world. We constantly strive to expand our collection and improve our services to meet your evolving needs.</p>
          <p>Thank you for choosing Curious Cart BD. We hope you enjoy exploring our offerings!</p>
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
