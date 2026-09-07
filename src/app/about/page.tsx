import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'আমাদের সম্পর্কে (About Us)',
  description: 'Curious Cart BD-এর গল্প, উদ্দেশ্য এবং মানসিক প্রশান্তির জন্য ইসলামিক গিফট তৈরির পেছনের অনুপ্রেরণা জানুন। ঢাকা, বাংলাদেশ।',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          About Curious Cart BD (আমাদের সম্পর্কে)
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          মানসিক প্রশান্তি ও প্রতিদিনের জীবনে ইতিবাচক পরিবর্তনের জন্য কিউরেটেড ইসলামিক ও মাইন্ডফুলনেস উপহার।
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
          <section className="bg-blue-50 p-6 md:p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">আমাদের গল্প ও অনুপ্রেরণা</h2>
            <p className="mb-4">
              ব্যস্ত শহুরে জীবনে মানসিক চাপ, অস্থিরতা আর একাকীত্ব আমাদের দৈনন্দিন জীবনের নিত্যসঙ্গী। ২০২৫ সালে ঢাকা থেকে যাত্রা শুরু করে <strong>Curious Cart BD</strong>। আমাদের মূল লক্ষ্য হলো এমন অর্থবহ ও স্পর্শকাতর পণ্য মানুষের হাতে তুলে দেওয়া, যা একদিকে ঘরের সৌন্দর্য বাড়াবে এবং অন্যদিকে জীবনের কঠিন মুহূর্তে মনের ভেতর প্রশান্তি এনে দেবে।
            </p>
            <p>
              এই ভাবনা থেকেই তৈরি আমাদের ফ্ল্যাগশিপ পণ্য—<strong>"প্রশান্তির দোয়া জার"</strong>। এটি নিছক কোনো পণ্য নয়; এটি আল্লাহর সাথে বান্দার আত্মিক যোগাযোগের এক দৈনন্দিন মাধ্যম।
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-2">📜 সহীহ রেফারেন্স ও নির্ভরযোগ্যতা</h3>
              <p className="text-gray-600">
                আমাদের প্রতিটি জারের দোয়াগুলো পবিত্র কুরআনুল কারিম এবং নির্ভরযোগ্য হাদিস গ্রন্থ (সহীহ বুখারী, মুসলিম, তিরমিযী, হিসনুল মুসলিম) থেকে অত্যন্ত সতর্কতার সাথে সংকলিত ও বাংলা অর্থসহ যাচাইকৃত।
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🤲 যত্নসহকারে হাতে তৈরি (Handcrafted)</h3>
              <p className="text-gray-600">
                প্রতিটি রঙিন চিরকুট দক্ষ হাতে ভাঁজ ও রোল করা হয় এবং উন্নতমানের কাঁচের জারে সুরক্ষিত রাখা হয়, যাতে এটি প্রিয়জনকে উপহার দেওয়ার জন্য অত্যন্ত আকর্ষণীয় হয়।
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ডেলিভারি ও গ্রাহক সেবা</h2>
            <p className="mb-3">
              আমরা ঢাকা শহরসহ সমগ্র বাংলাদেশের ৬৪ জেলায় নির্ভরযোগ্য কুরিয়ার সার্ভিসের মাধ্যমে হোম ডেলিভারি প্রদান করে থাকি।
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
              <li><strong>ঢাকা সিটির ভেতর:</strong> ডেলিভারি চার্জ ৬০ টাকা (২-৩ কার্যদিবস)।</li>
              <li><strong>ঢাকার বাইরে সমগ্র বাংলাদেশে:</strong> ডেলিভারি চার্জ ১২০ টাকা (৪-৫ কার্যদিবস)।</li>
              <li><strong>পেমেন্ট সুবিধা:</strong> পণ্য হাতে পেয়ে মূল্য পরিশোধ (ক্যাশ অন ডেলিভারি)।</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/products/1"
                className="inline-block bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                প্রশান্তির দোয়া জার অর্ডার করুন
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
