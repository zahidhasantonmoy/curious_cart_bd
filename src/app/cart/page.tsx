'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          আপনার শপিং কার্ট (Your Cart)
        </h1>
        {cart.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-xl text-gray-600 mb-6">আপনার শপিং কার্ট বর্তমানে খালি আছে।</p>
            <Link
              href="/products"
              className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-xl transition"
            >
              প্রোডাক্ট দেখুন (Browse Products)
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-xl p-4 shadow-sm bg-white gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-100"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                      <p className="text-sm text-gray-500">পরিমাণ (Qty): {item.quantity}</p>
                      <p className="text-base font-bold text-gray-900 mt-1">
                        ৳{(item.price * item.quantity).toFixed(0)} BDT
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition self-end sm:self-center"
                  >
                    মুছে ফেলুন (Remove)
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>সাবটোটাল (Subtotal):</span>
                <span className="font-semibold text-gray-800">৳{total.toFixed(0)} BDT</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>আনুমানিক ডেলিভারি চার্জ:</span>
                <span>ঢাকা: ৳৬০ | ঢাকার বাইরে: ৳১২০</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-xl font-bold text-gray-900">
                <span>সর্বমোট (Total):</span>
                <span className="text-2xl text-brand-primary">৳{total.toFixed(0)} BDT</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
              <button
                onClick={clearCart}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl transition"
              >
                কার্ট খালি করুন (Clear Cart)
              </button>
              <Link
                href="/checkout"
                className="bg-brand-success hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow text-center transition"
              >
                অর্ডার সম্পন্ন করুন (Proceed to Checkout) &rarr;
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
