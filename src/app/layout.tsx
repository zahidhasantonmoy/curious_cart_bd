import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'প্রশান্তির দোয়া জার - Curious Cart BD',
  description: 'আপনার অস্থির মনকে শান্ত করতে—প্রতিটি অনুভূতির জন্য একটি দোয়া। Curious Cart BD-এর পক্ষ থেকে একটি ভালোবাসার উপহার।',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

