'use client';

import Header from '@/components/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';

const slideImages = [
  {
    url: '/images/gallery/Gemini_Generated_Image_3tcidv3tcidv3tci.png',
    caption: 'Slide 1'
  },
  {
    url: '/images/gallery/Gemini_Generated_Image_ma6xtnma6xtnma6x.png',
    caption: 'Slide 2'
  },
  {
    url: '/images/gallery/Gemini_Generated_Image_xndrqjxndrqjxndr.png',
    caption: 'Slide 3'
  },
];

import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: 'প্রশান্তির দোয়া জার',
    price: 500, // Please update the price
    image: '/images/dua-jar.png',
    stock: 100, // Please update the stock
  };
  return (
    <div>
      <Header />

      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            প্রশান্তির দোয়া জার — প্রতিটি অনুভূতির জন্য একটি দোয়া
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            জীবনের প্রতিটি মুহূর্তে আল্লাহর সাথে থাকুন। ৫০+ কুরআন ও হাদিসের নির্বাচিত দোয়া নিয়ে Curious Cart BD-এর পক্ষ থেকে একটি ভালোবাসার উপহার।
          </p>
          <a href="#buy-now" className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-md">
            এখনই অর্ডার করুন (৳৫০০)
          </a>
        </div>
      </section>

      <main className="container mx-auto px-6 py-8">
        <section id="product-info" className="my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">কেন এই দোয়া জার আপনার প্রয়োজন?</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            ঢাকা শহরের ট্র্যাফিক জ্যামে আটকে আছেন? পরীক্ষার ফলাফলের জন্য দুশ্চিন্তা হচ্ছে? অথবা কোনো খুশির সংবাদে মনটা আনন্দে ভরে উঠেছে? আমাদের দৈনন্দিন জীবন হাজারো ছোট-বড় অনুভূতি দিয়ে গড়া। কিন্তু এই ব্যস্ততার মাঝে আমরা প্রায়ই ভুলে যাই আমাদের সবচেয়ে বড় আশ্রয়দাতা মহান আল্লাহকে ডাকতে।এই চিন্তা থেকেই আমরা বানিয়েছি "প্রশান্তির দোয়া জার"। এটি শুধু একটি সুন্দর কাঁচের জার নয়, এটি আপনার প্রতিদিনের সঙ্গী, যা আপনাকে প্রতিটি পরিস্থিতিতে আল্লাহর কথা স্মরণ করিয়ে দেবে।
            </p>
          </div>
        </section>

        <section id="gallery" className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">ছবি গ্যালারি</h2>
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index)=> (
                <div className="each-slide-effect" key={index}>
                  <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                    
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </section>

        <section id="product-details" className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">এর ভেতরে কী আছে?</h2>
          <div className="flex flex-wrap justify-center items-start">
            <div className="w-full md:w-1/2 p-4">
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                <li><b>৫০+ হাতে রোল করা রঙিন চিরকুট:</b> প্রতিটি চিরকুটে স্পষ্ট অক্ষরে লেখা আছে কুরআনুল কারিম ও নির্ভরযোগ্য সহীহ হাদিস (বুখারী, মুসলিম, তিরমিযী, আবু দাউদ ও হিসনুল মুসলিম) থেকে সংকলিত অর্থসহ দোয়া।</li>
                <li><b>অনুভূতি অনুযায়ী ৫টি ভিন্ন রঙের ব্যবহার:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                    <li><span className="font-semibold text-pink-600">গোলাপী:</span> যখন মন উদ্বিগ্ন, অস্থির বা চিন্তিত।</li>
                    <li><span className="font-semibold text-green-600">সবুজ:</span> যখন মন খারাপ, হতাশ বা একাকী লাগে।</li>
                    <li><span className="font-semibold text-yellow-600">হলুদ:</span> যখন আপনি কৃতজ্ঞ, আনন্দিত বা শুকরিয়া জানাতে চান।</li>
                    <li><span className="font-semibold text-blue-600">নীল:</span> যখন আপনি ধৈর্য (সবর) ধারণ করতে চান।</li>
                    <li><span className="font-semibold text-amber-600">কমলা:</span> যখন আপনি আল্লাহর সরাসরি সাহায্য ও রহমত চান।</li>
                  </ul>
                </li>
                <li><b>একটি সুন্দর ও মজবুত কাঁচের জার:</b> যা আপনার পড়ার টেবিল, অফিস ডেস্ক কিংবা ঘরের সৌন্দর্য বাড়িয়ে তুলবে এবং ভেতরের চিরকুটগুলোকে সুরক্ষিত রাখবে।</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-4 text-center">
              <img
                src="/images/dua-jar.png"
                alt="প্রশান্তির দোয়া জার - কাঁচের জারে ৫০+ রঙিন দোয়ার চিরকুট"
                className="mx-auto rounded-xl shadow-lg max-w-sm w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="videos" className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">ভিডিও দেখুন</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 p-4">
              <video controls className="w-full rounded-lg shadow">
                <source src="/videos/Dua_Jar_A_Gift_Of_Love.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <video controls className="w-full rounded-lg shadow">
                <source src="/videos/Dua_Jar_Comfort_Amidst_Stress.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <Testimonials />

        <Faq />

        <SocialShare url={typeof window !== 'undefined' ? window.location.href : ''} title="প্রশান্তির দোয়া জার" />

        <section id="buy-now" className="my-12 text-center bg-gray-50 py-10 rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">এখনই অর্ডার করুন!</h2>
          <p className="text-xl text-gray-600 mb-2">এই সুন্দর এবং অর্থবহ উপহারটি আপনার নিজের এবং প্রিয়জনের জন্য।</p>
          <p className="text-2xl font-bold text-brand-primary mb-6">মূল্য: মাত্র ৫০০ টাকা (৳500 BDT)</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => addToCart(product)}
              className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-md"
            >
              Add to Cart
            </button>
            <a
              href="/products/1"
              className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-md"
            >
              বিস্তারিত দেখুন
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            🚚 সারাদেশে ক্যাশ অন ডেলিভারি | ঢাকা সিটি: ৬০ টাকা (২-৩ দিন) | ঢাকার বাইরে: ১২০ টাকা (৪-৫ দিন)
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}