export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Curious Cart BD',
    alternateName: ['কিউরিয়াস কার্ট বিডি', 'Curious Cart'],
    url: 'https://curiouscart.vercel.app',
    logo: 'https://curiouscart.vercel.app/images/logo.jpg',
    description: 'Curious Cart BD is your trusted online destination for unique Islamic gifts, emotional wellness collections, and mindful lifestyle products in Bangladesh.',
    telephone: '+8801234567890',
    email: 'info@curiouscartbd.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka Division',
      addressCountry: 'BD',
    },
    priceRange: '৳৳',
    sameAs: [
      'https://facebook.com/curiouscartbd',
      'https://instagram.com/curiouscartbd',
      'https://twitter.com/curiouscartbd',
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'প্রশান্তির দোয়া জার (Prashanti Dua Jar)',
    image: 'https://curiouscart.vercel.app/images/dua-jar.png',
    description: '৫০+ রঙিন চিরকুটে কুরআন ও হাদিসের সহীহ দোয়া সম্বলিত একটি মার্জিত কাঁচের জার। জীবনের প্রতিটি মানসিক অবস্থা ও অনুভূতির জন্য নির্ভরযোগ্য দোয়ার অনন্য সংকলন।',
    sku: 'CCBD-DJ-01',
    category: 'Islamic Gifts / Emotional Wellness',
    brand: {
      '@type': 'Brand',
      name: 'Curious Cart BD',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://curiouscart.vercel.app/products/1',
      priceCurrency: 'BDT',
      price: '500.00',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Curious Cart BD',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '60.00',
          currency: 'BDT',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'BD',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'd',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 5,
            unitCode: 'd',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'BD',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '38',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'এই দোয়া জারে মোট কতটি দোয়া আছে?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'এতে মোট ৫০টিরও বেশি দোয়া রয়েছে, যা নির্দিষ্ট আবেগ ও অনুভূতির জন্য (উদ্বেগ, একাকীত্ব, শোকর, ধৈর্য, আল্লাহর সাহায্য) রঙ অনুযায়ী সাজানো।',
        },
      },
      {
        '@type': 'Question',
        name: 'চিরকুটগুলোর কাগজ ও জার কি টেকসই?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'হ্যাঁ, প্রতিটি চিরকুট উন্নত মানের প্রিমিয়াম পেপারে স্পষ্ট ফন্টে মুদ্রিত এবং হাতে নিখুঁতভাবে রোল করা। জারটি একটি মজবুত কাঁচের তৈরি।',
        },
      },
      {
        '@type': 'Question',
        name: 'ডেলিভারি চার্জ কত এবং কত দিনের মধ্যে পাওয়া যায়?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ঢাকা শহরের ভেতরে ডেলিভারি চার্জ ৬০ টাকা (২-৩ কার্যদিবস) এবং ঢাকার বাইরে ১২০ টাকা (৪-৫ কার্যদিবস)। সারাদেশে ক্যাশ অন ডেলিভারি (COD) সুবিধা রয়েছে।',
        },
      },
      {
        '@type': 'Question',
        name: 'দোয়াগুলো কি সহীহ হাদিস ও কুরআন থেকে নেওয়া?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'হ্যাঁ, জারের প্রতিটি দোয়া কুরআনুল কারিম এবং নির্ভরযোগ্য সহীহ হাদিস গ্রন্থ (যেমন সহীহ বুখারী, সহীহ মুসলিম, তিরমিযী, আবু দাউদ ও হিসনুল মুসলিম) থেকে সংকলিত।',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
