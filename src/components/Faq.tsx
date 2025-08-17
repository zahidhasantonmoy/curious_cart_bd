
'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'এই দোয়া জারে মোট কতটি দোয়া আছে?',
    answer: 'এতে মোট ৫০টিরও বেশি দোয়া রয়েছে, যা বিভিন্ন পরিস্থিতির জন্য নির্দিষ্ট।'
  },
  {
    question: 'চিরকুটগুলোর কাগজ কি টেকসই?',
    answer: 'হ্যাঁ, চিরকুটগুলো উন্নত মানের কাগজে ছাপানো এবং হাতে রোল করা, তাই সহজে ছিঁড়ে যাবে না।'
  },
  {
    question: 'ডেলিভারি চার্জ কত?',
    answer: 'ঢাকা শহরের ভেতরে ডেলিভারি চার্জ ৬০ টাকা এবং ঢাকার বাইরে ১২০ টাকা।'
  },
  {
    question: 'অর্ডার করার কত দিনের মধ্যে পাবো?',
    answer: 'ঢাকার ভেতরে ২-৩ দিন এবং ঢাকার বাইরে ৪-৫ দিনের মধ্যে ডেলিভারি দেওয়া হয়।'
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">সাধারণ জিজ্ঞাসা</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-left"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
