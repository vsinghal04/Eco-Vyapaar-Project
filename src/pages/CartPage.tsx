import React from 'react';
import Header from '@/components/Header';
import Cart from '@/components/CartView'; 

const CartPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-20">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;