'use client';

import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

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

interface Variant {
  type: string;
  value: string;
  price_modifier: number;
}

interface Review {
  id: number;
  productId: number;
  username: string;
  rating: number;
  comment: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [currentUser, setCurrentUser] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const { addToCart } = useCart();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const storedUsername = localStorage.getItem('currentUser');
    if (storedUsername) {
      setCurrentUser(storedUsername);
    }

    if (id) {
      const fetchProductAndReviews = async () => {
        // Fetch product
        const productRes = await fetch(`/api/products/${id}`);
        if (productRes.ok) {
          const productData = await productRes.json();
          setProduct(productData);
          if (productData.variants && productData.variants.length > 0) {
            setSelectedVariant(productData.variants[0]); // Select first variant by default
          }
        } else {
          setProduct(null);
        }

        // Fetch reviews
        const reviewsRes = await fetch(`/api/products/${id}/reviews`);
        if (reviewsRes.ok) {
          const reviewsData = await reviewsRes.json();
          setReviews(reviewsData);
        } else {
          setReviews([]);
        }
      };
      fetchProductAndReviews();
    }
  }, [id]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please log in to submit a review.');
      return;
    }

    const res = await fetch(`/api/products/${id}/reviews`, {
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
      setReviews(prevReviews => [...prevReviews, newReview]);
      setNewReviewComment('');
      setNewReviewRating(5);
    } else {
      alert('Failed to submit review.');
    }
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const existingItem = wishlist.find((item: Product) => item.id === product.id);
    if (!existingItem) {
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
      alert(`${product.name} added to wishlist!`);
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    alert(`${product.name} ${selectedVariant ? `(${selectedVariant.value})` : ''} added to cart!`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const displayPrice = product.price + (selectedVariant ? selectedVariant.price_modifier : 0);

  return (
    <div>
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">${displayPrice.toFixed(2)}</p>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-4">
                {Object.entries(product.variants.reduce((acc, variant) => {
                  (acc[variant.type] = acc[variant.type] || []).push(variant);
                  return acc;
                }, {} as Record<string, Variant[]>)).map(([type, variantsOfType]) => (
                  <div key={type} className="mb-4">
                    <label htmlFor={type} className="block text-sm font-medium text-gray-700">{type}:</label>
                    <select
                      id={type}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        const selected = variantsOfType.find(v => v.value === e.target.value);
                        if (selected) setSelectedVariant(selected);
                      }}
                      value={selectedVariant?.value || ''}
                    >
                      {variantsOfType.map(variant => (
                        <option key={variant.value} value={variant.value}>
                          {variant.value} {variant.price_modifier > 0 ? `(+${variant.price_modifier.toFixed(2)})` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            )}

            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
            <a href="tel:+8801234567890" className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 ml-4 inline-block hover:bg-green-600">Call Now</a>
            <button
              onClick={handleAddToWishlist}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg mt-4 ml-4 hover:bg-yellow-600"
            >
              Add to Wishlist
            </button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to review!</p>
          ) : (
            <div className="space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="border p-4 rounded-lg shadow-sm">
                  <p className="font-semibold">{review.username} - Rating: {review.rating}/5</p>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          <h3 className="text-xl font-bold mt-8 mb-4">Submit Your Review</h3>
          {currentUser ? (
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
                <select
                  id="rating"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={newReviewRating}
                  onChange={(e) => setNewReviewRating(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment:</label>
                <textarea
                  id="comment"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Submit Review
              </button>
            </form>
          ) : (
            <p className="text-gray-600">Please <Link href="/login" className="text-blue-500 hover:underline">log in</Link> to submit a review.</p>
          )}
        </section>
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