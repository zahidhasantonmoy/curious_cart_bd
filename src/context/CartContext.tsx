'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  variants?: Variant[]; // Added variants field
  stock: number; // Added stock field
}

interface Variant {
  type: string;
  value: string;
  price_modifier: number;
}

interface CartItem extends Product {
  quantity: number;
  selectedVariant?: Variant; // Added selectedVariant field
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedVariant?: Variant) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, selectedVariant?: Variant) => {
    setCart(prevCart => {
      // Find if an item with the same product ID and selected variant already exists
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedVariant?.value === selectedVariant?.value
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedVariant?.value === selectedVariant?.value
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, selectedVariant }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
