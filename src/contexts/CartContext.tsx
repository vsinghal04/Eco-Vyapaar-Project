import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Vendor {
  id: number;
  name: string;
  price: number;
  rating: number;
  location: string;
}

interface Product {
  id: string;
  name: string;
  unit: string;
  vendors: Vendor[];
}

interface CartItem {
  vendor: Vendor;
  product: Product;
  quantity: number;
  id: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (vendor: Vendor, product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (vendor: Vendor, product: Product, quantity: number) => {
    const newItem: CartItem = {
      vendor,
      product,
      quantity,
      id: `${vendor.id}-${product.id}-${Date.now()}`,
    };
    setItems(prev => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.vendor.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice,
      getItemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};