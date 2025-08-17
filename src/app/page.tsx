'use client';

import Header from '@/components/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

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

export default function Home() {
  return (
    <div>
      <Header />

      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">আপনার অস্থির মনকে শান্ত করতে—প্রতিটি অনুভূতির জন্য একটি দোয়া।</h2>
          <p className="text-xl mb-8">জীবনের প্রতিটি মুহূর্তে আল্লাহর সাথে থাকুন। Curious Cart BD-এর পক্ষ থেকে একটি ভালোবাসার উপহার।</p>
          <a href="#buy-now" className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            অর্ডার করুন
          </a>
        </div>
      </section>

      <main className="container mx-auto px-6 py-8">
        <section id="product-info" className="my-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">কেন এই দোয়া জার আপনার প্রয়োজন?</h1>
            <p className="max-w-3xl mx-auto text-lg">
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
              <ul className="list-disc list-inside text-lg">
                <li><b>৫০+ হাতে রোল করা রঙিন চিরকুট:</b> প্রতিটি চিরকুটে লেখা আছে কুরআন ও হাদিস থেকে নেওয়া নির্দিষ্ট পরিস্থিতির জন্য একটি দোয়া।</li>
                <li><b>অনুভূতি অনুযায়ী রঙের ব্যবহার:</b>
                  <ul className="list-disc list-inside ml-6">
                    <li>গোলাপী: যখন মন উদ্বিগ্ন বা চিন্তিত।</li>
                    <li>সবুজ: যখন মন খারাপ বা একাকী লাগে।</li>
                    <li>হলুদ: যখন আপনি কৃতজ্ঞ বা আনন্দিত।</li>
                    <li>নীল: যখন আপনি ধৈর্য ধরতে চান।</li>
                    <li>কমলা: যখন আপনি আল্লাহর কাছে সাহায্য চান।</li>
                  </ul>
                </li>
                <li><b>একটি সুন্দর ও মজবুত কাঁচের জার:</b> যা আপনার ঘরের সৌন্দর্য বাড়িয়ে তুলবে এবং ভেতরের দোয়াগুলোকে সুরক্ষিত রাখবে।</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src="/images/dua-jar.png" alt="দোয়া জার" className="mx-auto" />
            </div>
          </div>
        </section>

        <section id="videos" className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">ভিডিও দেখুন</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 p-4">
              <video controls className="w-full">
                <source src="/videos/Dua_Jar_A_Gift_Of_Love.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <video controls className="w-full">
                <source src="/videos/Dua_Jar_Comfort_Amidst_Stress.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <Testimonials />

        <Faq />

        <SocialShare url={typeof window !== 'undefined' ? window.location.href : ''} title="প্রশান্তির দোয়া জার" />

        <section id="buy-now" className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-4">এখনই অর্ডার করুন!</h2>
          <p className="text-xl mb-8">এই সুন্দর এবং অর্থবহ উপহারটি আপনার নিজের এবং প্রিয়জনের জন্য।</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Add to Cart
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
}