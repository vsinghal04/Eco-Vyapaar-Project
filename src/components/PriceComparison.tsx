import React from 'react';
import { Star, MapPin, ShoppingCart, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

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

interface PriceComparisonProps {
  product: Product;
  quantity: number;
}

const PriceComparison: React.FC<PriceComparisonProps> = ({ product, quantity }) => {
  const { toast } = useToast();
  const { addToCart, items } = useCart();
  // Sort vendors by total price (price per unit * quantity)
  const sortedVendors = [...product.vendors].sort((a, b) => {
    const totalA = a.price * quantity;
    const totalB = b.price * quantity;
    return totalA - totalB;
  });

  const handleAddToitems = (vendor: Vendor) => {
    addToCart(vendor, product, quantity);
    
    toast({
      title: "Added to items",
      description: `${quantity} kg ${product.name} from ${vendor.name}`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const calculateSavings = (currentPrice: number, highestPrice: number) => {
    const savings = (highestPrice - currentPrice) * quantity;
    return savings > 0 ? savings : 0;
  };

  const highestPrice = Math.max(...sortedVendors.map(v => v.price));

  if (quantity <= 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Please enter a quantity to see price comparison</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {sortedVendors.map((vendor, index) => {
          const totalPrice = vendor.price * quantity;
          const savings = calculateSavings(vendor.price, highestPrice);
          const isLowestPrice = index === 0;
          
          return (
            <Card key={vendor.id} className={`${isLowestPrice ? 'ring-2 ring-green-500 bg-green-50/50' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {vendor.name}
                      {isLowestPrice && (
                        <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                          Best Price
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">{renderStars(vendor.rating)}</div>
                      <span className="text-sm text-muted-foreground">({vendor.rating})</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {vendor.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      ₹{totalPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ₹{vendor.price}/{product.unit}
                    </div>
                    {savings > 0 && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ₹{savings.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      Free delivery above ₹500
                    </div>
                    <div>
                      Quantity: {quantity} kg
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleAddToitems(vendor)}
                    className={isLowestPrice ? 'bg-green-600 hover:bg-green-700' : ''}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to items
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {items.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              items Summary ({items.length} items)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {items.slice(-3).map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <div>
                    <span className="font-medium">{item.quantity} kg {item.product.name}</span>
                    <span className="text-muted-foreground ml-2">from {item.vendor.name}</span>
                  </div>
                  <span className="font-bold">₹{(item.vendor.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              {items.length > 3 && (
                <div className="text-center text-sm text-muted-foreground py-2">
                  ... and {items.length - 3} more items
                </div>

              )}
            </div>
            <Button className="w-full mt-4" size="lg" asChild>
              <a href="/cart">View Full Cart</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PriceComparison;