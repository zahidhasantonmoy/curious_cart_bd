import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://curiouscart.vercel.app'),
  title: {
    default: 'প্রশান্তির দোয়া জার - Curious Cart BD | Islamic Gifts Bangladesh',
    template: '%s | Curious Cart BD',
  },
  description: 'আপনার অস্থির মনকে শান্ত করতে প্রতিটি অনুভূতির জন্য একটি দোয়া। ৫০+ রঙিন চিরকুটে সাজানো প্রশান্তির দোয়া জার। Curious Cart BD-এর পক্ষ থেকে অনন্য উপহার। সমগ্র বাংলাদেশে ক্যাশ অন ডেলিভারি।',
  keywords: [
    'প্রশান্তির দোয়া জার',
    'Dua Jar Bangladesh',
    'Curious Cart BD',
    'Islamic Gift items BD',
    'Dua jar price in BD',
    'মানসিক শান্তির দোয়া',
    'দুশ্চিন্তা মুক্তির দোয়া',
    'ইসলামিক উপহার',
    'Prashanti Dua Jar',
  ],
  authors: [{ name: 'Curious Cart BD' }],
  creator: 'Curious Cart BD',
  publisher: 'Curious Cart BD',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: 'https://curiouscart.vercel.app',
    siteName: 'Curious Cart BD',
    title: 'প্রশান্তির দোয়া জার - Curious Cart BD | Islamic Gifts Bangladesh',
    description: 'আপনার অস্থির মনকে শান্ত করতে প্রতিটি অনুভূতির জন্য কুরআন-হাদিসের নির্বাচিত দোয়া। ৫০+ রঙিন চিরকুট সম্বলিত কাঁচের জার।',
    images: [
      {
        url: '/images/dua-jar.png',
        width: 800,
        height: 800,
        alt: 'প্রশান্তির দোয়া জার - Curious Cart BD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'প্রশান্তির দোয়া জার - Curious Cart BD',
    description: 'জীবনের প্রতিটি মুহূর্তে আল্লাহর সান্নিধ্য। ৫০+ রঙিন চিরকুটে কুরআন-হাদিসের নির্বাচিত দোয়া।',
    images: ['/images/dua-jar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Q66Qc1pT14J1UbqURZIWDOwyEmlJnwY7IFSCS2RBBT8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
        <StructuredData />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
