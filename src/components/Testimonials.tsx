
export default function Testimonials() {
  return (
    <section id="testimonials" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">গ্রাহকদের মতামত</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg mb-4">"এই দোয়া জারটি আমার জীবনে অনেক প্রশান্তি এনে দিয়েছে। যখনই মন খারাপ থাকে, একটি চিরকুট তুলে দোয়া পড়ি, আর মনটা ভালো হয়ে যায়।"</p>
            <p className="text-right font-bold">- সাদিয়া, ঢাকা</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg mb-4">"আমার মায়ের জন্য কিনেছিলাম। তিনি এটা পেয়ে অনেক খুশি হয়েছেন। প্রতিদিন দোয়া পড়েন।"</p>
            <p className="text-right font-bold">- রহমান, চট্টগ্রাম</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg mb-4">"অসাধারণ একটি উদ্যোগ। গিফট হিসেবে দেওয়ার জন্য এর চেয়ে ভালো কিছু আর হয় না।"</p>
            <p className="text-right font-bold">- ফারিয়া, খুলনা</p>
          </div>
        </div>
      </div>
    </section>
  );
}
