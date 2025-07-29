import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Cart = () => {
  const { items, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground">Add some products to get started</p>
      </div>
    );
  }

  const handleCheckout = () => {
    // Mock payment - in real app this would integrate with Stripe
    const total = getTotalPrice();
    alert(`Processing payment of ₹${total.toLocaleString()}...\n\nThis is a demo payment. In production, this would redirect to a secure payment gateway.`);
    clearCart();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Shopping Cart ({items.length} items)
        </h2>
        <Button variant="outline" onClick={clearCart} className="text-destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.product.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">{item.vendor.name}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.vendor.location}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Quantity: {item.quantity} {item.product.unit}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Unit Price: ₹{item.vendor.price}/{item.product.unit}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">
                    ₹{(item.vendor.price * item.quantity).toLocaleString()}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 mt-2"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-eco-light/20">
        <CardHeader>
          <CardTitle className="text-xl">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{getTotalPrice().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery:</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>₹{getTotalPrice().toLocaleString()}</span>
            </div>
          </div>
          <Button 
            className="w-full mt-6" 
            size="lg"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;