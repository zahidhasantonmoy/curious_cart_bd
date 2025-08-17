
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  variants?: Variant[]; // Added variants field
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
    <div className="border rounded-lg p-4 shadow-lg">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg cursor-pointer" />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.id}`} className="text-brand-primary hover:underline mt-2 inline-block">
          View Details
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-brand-success text-white py-2 rounded-md hover:bg-green-600"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToWishlist}
          className="mt-2 w-full bg-brand-accent text-white py-2 rounded-md hover:bg-red-600"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
