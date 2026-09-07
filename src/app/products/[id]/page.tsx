import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';
import productsData from '@/lib/products.json';
import type { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const productId = parseInt(params.id);
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return {
      title: 'প্রোডাক্ট পাওয়া যায়নি | Product Not Found',
    };
  }

  const shortDesc = product.description.slice(0, 160);

  return {
    title: `${product.name} - Curious Cart BD`,
    description: `${product.name} | মূল্য: ৳${product.price} টাকা। ${shortDesc}... সমগ্র বাংলাদেশে ক্যাশ অন ডেলিভারি।`,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} - Curious Cart BD`,
      description: shortDesc,
      url: `https://curiouscart.vercel.app/products/${product.id}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Curious Cart BD`,
      description: shortDesc,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const productId = parseInt(params.id);
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-6 py-20 text-center flex-grow">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">প্রোডাক্টটি পাওয়া যায়নি</h1>
          <p className="text-gray-600 mb-8">অনুগ্রহ করে আমাদের কালেকশন পেজ থেকে অন্যান্য পণ্যসমূহ দেখুন।</p>
          <Link
            href="/products"
            className="bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary-dark transition"
          >
            সকল প্রোডাক্ট দেখুন
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductDetailClient initialProduct={product} />
      <Footer />
    </div>
  );
}