'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
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

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const existingItem = wishlist.find((item: Product) => item.id === product.id);
    if (!existingItem) {
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
      alert(`${product.name} added to wishlist!`);
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
      <div>
        <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={`${product.name} - Curious Cart BD`}
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        <div className="pt-4">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
            {product.category || 'Islamic Gift'}
          </span>
          <h2 className="text-xl font-bold mt-1 text-gray-800 line-clamp-1">{product.name}</h2>
          <p className="text-xl font-bold text-gray-900 mt-2">৳{product.price.toFixed(0)} <span className="text-sm font-normal text-gray-500">BDT</span></p>
        </div>
      </div>

      <div className="pt-4">
        <Link href={`/products/${product.id}`} className="text-brand-primary font-semibold hover:underline block mb-3 text-sm">
          বিস্তারিত দেখুন (View Details) &rarr;
        </Link>
        <div className="space-y-2">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-brand-success hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
