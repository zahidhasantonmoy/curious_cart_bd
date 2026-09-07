'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface Variant {
  type: string;
  value: string;
  price_modifier: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  variants?: Variant[];
  stock: number;
}

interface Review {
  id: number;
  productId: number;
  username: string;
  rating: number;
  comment: string;
}

export default function ProductDetailClient({ initialProduct }: { initialProduct: Product }) {
  const [product] = useState<Product>(initialProduct);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [currentUser, setCurrentUser] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    initialProduct.variants && initialProduct.variants.length > 0 ? initialProduct.variants[0] : null
  );
  const { addToCart } = useCart();

  useEffect(() => {
    const storedUsername = localStorage.getItem('currentUser');
    if (storedUsername) {
      setCurrentUser(storedUsername);
    }

    const fetchReviews = async () => {
      try {
        const reviewsRes = await fetch(`/api/products/${initialProduct.id}/reviews`);
        if (reviewsRes.ok) {
          const reviewsData = await reviewsRes.json();
          setReviews(reviewsData);
        }
      } catch (err) {
        // silent fail
      }
    };
    fetchReviews();
  }, [initialProduct.id]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please log in to submit a review.');
      return;
    }

    const res = await fetch(`/api/products/${product.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: currentUser,
        rating: newReviewRating,
        comment: newReviewComment,
      }),
    });

    if (res.ok) {
      const newReview = await res.json();
      setReviews(prev => [...prev, newReview]);
      setNewReviewComment('');
      setNewReviewRating(5);
    } else {
      alert('Failed to submit review.');
    }
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const existingItem = wishlist.find((item: Product) => item.id === product.id);
    if (!existingItem) {
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
      alert(`${product.name} wishlist-এ যুক্ত করা হয়েছে!`);
    } else {
      alert(`${product.name} ইতিমধ্যে আপনার wishlist-এ আছে!`);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} ${selectedVariant ? `(${selectedVariant.value})` : ''} কার্টে যোগ করা হয়েছে!`);
  };

  const displayPrice = product.price + (selectedVariant ? selectedVariant.price_modifier : 0);

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/2">
          <div className="sticky top-6">
            <img
              src={product.image}
              alt={`${product.name} - Curious Cart BD`}
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full">
            {product.category || 'Islamic Gift & Emotional Wellness'}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">{product.name}</h1>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-gray-900">৳{displayPrice.toFixed(0)}</span>
            <span className="text-lg font-medium text-gray-500">BDT (টাকা)</span>
            <span className="ml-2 text-sm text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full font-semibold">
              ইন স্টক (In Stock)
            </span>
          </div>

          <p className="text-gray-700 mt-5 text-lg leading-relaxed">{product.description}</p>

          {/* Emotional Wellness Color Guide */}
          <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">চিরকুটের রঙের অনুভূতি নির্দেশিকা:</h3>
            <ul className="text-sm space-y-1.5 text-gray-600">
              <li><span className="inline-block w-3 h-3 rounded-full bg-pink-500 mr-2"></span><strong>গোলাপী:</strong> উদ্বেগ ও দুশ্চিন্তা মুক্তির দোয়া</li>
              <li><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span><strong>সবুজ:</strong> মন খারাপ ও একাকীত্ব কাটানোর দোয়া</li>
              <li><span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span><strong>হলুদ:</strong> কৃতজ্ঞতা ও আনন্দ প্রকাশের দোয়া</li>
              <li><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span><strong>নীল:</strong> ধৈর্য ও সবরের দোয়া</li>
              <li><span className="inline-block w-3 h-3 rounded-full bg-amber-500 mr-2"></span><strong>কমলা:</strong> আল্লাহর কাছে সাহায্য চাওয়ার দোয়া</li>
            </ul>
          </div>

          {product.variants && product.variants.length > 0 && (
            <div className="mt-6">
              {Object.entries(
                product.variants.reduce((acc, variant) => {
                  (acc[variant.type] = acc[variant.type] || []).push(variant);
                  return acc;
                }, {} as Record<string, Variant[]>)
              ).map(([type, variantsOfType]) => (
                <div key={type} className="mb-4">
                  <label htmlFor={type} className="block text-sm font-semibold text-gray-800 mb-1">
                    পছন্দের কালার ভেরিয়েন্ট ({type}):
                  </label>
                  <select
                    id={type}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-base p-2.5 border"
                    onChange={(e) => {
                      const selected = variantsOfType.find((v) => v.value === e.target.value);
                      if (selected) setSelectedVariant(selected);
                    }}
                    value={selectedVariant?.value || ''}
                  >
                    {variantsOfType.map((variant) => (
                      <option key={variant.value} value={variant.value}>
                        {variant.value} {variant.price_modifier > 0 ? `(+৳${variant.price_modifier.toFixed(0)})` : ''}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-brand-success hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow transition duration-200"
            >
              Add to Cart (কার্টে যোগ করুন)
            </button>
            <a
              href="tel:+8801234567890"
              className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-xl shadow transition duration-200"
            >
              কল করুন (Call)
            </a>
            <button
              onClick={handleAddToWishlist}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-5 py-3 rounded-xl transition duration-200"
            >
              Wishlist
            </button>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-600 space-y-1">
            <p>🚚 <strong>ডেলিভারি চার্জ:</strong> ঢাকা সিটিতে ৬০ টাকা (২-৩ দিন) | ঢাকার বাইরে ১২০ টাকা (৪-৫ দিন)</p>
            <p>💵 <strong>পেমেন্ট:</strong> ক্যাশ অন ডেলিভারি (COD) উপলব্ধ</p>
            <p>🛡️ <strong>সুরক্ষিত প্যাকেজিং:</strong> কাঁচের জার অক্ষত পৌঁছানোর নিশ্চয়তা</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <section className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">গ্রাহকদের রিভিউ (Customer Reviews)</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500 italic">এখনও কোনো রিভিউ যুক্ত হয়নি। আপনার মতামত দিয়ে প্রথম রিভিউয়ার হোন!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-200 p-5 rounded-xl bg-white shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800">{review.username}</span>
                  <span className="text-amber-500 font-semibold">★ {review.rating}/5</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 max-w-xl bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">একটি রিভিউ লিখুন</h3>
          {currentUser ? (
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-semibold text-gray-700 mb-1">
                  রেটিং:
                </label>
                <select
                  id="rating"
                  className="w-full rounded-lg border-gray-300 p-2 border shadow-sm"
                  value={newReviewRating}
                  onChange={(e) => setNewReviewRating(parseInt(e.target.value))}
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-1">
                  আপনার মতামত:
                </label>
                <textarea
                  id="comment"
                  rows={3}
                  className="w-full rounded-lg border-gray-300 p-2.5 border shadow-sm"
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="পণ্যটি আপনার কেমন লেগেছে লিখুন..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold px-6 py-2.5 rounded-lg transition-colors"
              >
                রিভিউ জমা দিন
              </button>
            </form>
          ) : (
            <p className="text-gray-600">
              রিভিউ দিতে অনুগ্রহ করে{' '}
              <Link href="/login" className="text-brand-primary font-semibold hover:underline">
                লগইন করুন
              </Link>
              ।
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
