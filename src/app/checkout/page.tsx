'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState<'dhaka' | 'outside'>('dhaka');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = city === 'dhaka' ? 60 : 120;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('অনুগ্রহ করে নাম, মোবাইল নম্বর এবং সম্পূর্ণ ঠিকানা পূরণ করুন।');
      return;
    }
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          অর্ডার সম্পন্ন করুন (Cash on Delivery)
        </h1>

        {orderPlaced ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!</h2>
            <p className="text-gray-700 mb-6">
              ধন্যবাদ <strong>{name}</strong>! আমাদের প্রতিনিধি শীঘ্রই আপনার মোবাইল নম্বরে (<strong>{phone}</strong>) ফোন করে অর্ডারটি নিশ্চিত করবেন।
            </p>
            <div className="bg-white p-4 rounded-xl border border-green-100 max-w-md mx-auto text-left text-sm text-gray-600 mb-6 space-y-1">
              <p>📍 <strong>ডেলিভারি ঠিকানা:</strong> {address}</p>
              <p>🚚 <strong>ডেলিভারি এরিয়া:</strong> {city === 'dhaka' ? 'ঢাকা সিটি (২-৩ দিন)' : 'ঢাকার বাইরে (৪-৫ দিন)'}</p>
              <p>💵 <strong>পরিশোধযোগ্য টাকা:</strong> ৳{total.toFixed(0)} BDT (ক্যাশ অন ডেলিভারি)</p>
            </div>
            <Link
              href="/"
              className="inline-block bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-xl transition"
            >
              হোমপেজে ফিরে যান
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-xl text-gray-600 mb-6">চেকআউট করার মতো কোনো পণ্য কার্টে নেই।</p>
            <Link
              href="/products"
              className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-xl transition"
            >
              প্রোডাক্ট ব্রাউজ করুন
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">আপনার ডেলিভারি তথ্য</h2>
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    আপনার সম্পূর্ণ নাম *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="যেমন: মোঃ সাকিব হাসান"
                    className="w-full rounded-lg border-gray-300 p-2.5 border focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    সচল মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-lg border-gray-300 p-2.5 border focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
                    ডেলিভারি লোকেশন *
                  </label>
                  <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value as 'dhaka' | 'outside')}
                    className="w-full rounded-lg border-gray-300 p-2.5 border focus:ring-2 focus:ring-brand-primary"
                  >
                    <option value="dhaka">ঢাকা সিটির ভেতরে (চার্জ: ৬০ টাকা)</option>
                    <option value="outside">ঢাকার বাইরে সমগ্র বাংলাদেশ (চার্জ: ১২০ টাকা)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
                    সম্পূর্ণ ডেলিভারি ঠিকানা *
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="বাসা নং, রোড নং, এলাকা/থানা, জেলা..."
                    className="w-full rounded-lg border-gray-300 p-2.5 border focus:ring-2 focus:ring-brand-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-success hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition duration-200 text-lg"
                >
                  অর্ডার নিশ্চিত করুন (৳{total.toFixed(0)} BDT)
                </button>
              </form>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">অর্ডার সামারি</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="line-clamp-1">{item.name} × {item.quantity}</span>
                      <span className="font-semibold text-gray-800">৳{(item.price * item.quantity).toFixed(0)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>সাবটোটাল:</span>
                    <span>৳{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>ডেলিভারি চার্জ:</span>
                    <span>৳{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 border-t pt-2">
                    <span>সর্বমোট:</span>
                    <span className="text-brand-primary font-extrabold text-lg">৳{total.toFixed(0)} BDT</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-800">
                  💵 <strong>ক্যাশ অন ডেলিভারি:</strong> পণ্য হাতে পাওয়ার পর ডেলিভারিম্যানকে টাকা পরিশোধ করবেন।
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
