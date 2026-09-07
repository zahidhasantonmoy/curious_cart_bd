import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import productsData from '@/lib/products.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'সকল প্রোডাক্ট কালেকশন | All Products',
  description: 'Curious Cart BD-এর কিউরেটেড ইসলামিক গিফট ও মানসিক প্রশান্তির উপহার সামগ্রী। প্রশান্তির দোয়া জার ও অনন্য কালেকশন।',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            আমাদের কালেকশন (All Products)
          </h1>
          <p className="text-gray-600 text-lg">
            আপনার দৈনন্দিন জীবনের মানসিক প্রশান্তি এবং প্রিয়জনকে অর্থবহ উপহার দেওয়ার জন্য আমাদের বিশেষ আয়োজন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
