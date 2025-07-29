/*import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PriceComparison from './PriceComparison';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('');

  // Sample product data with multiple vendors
  const products = [
    {
      id: 'potato',
      name: 'Potato',
      category: 'Vegetables',
      unit: 'kg',
      image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 25, rating: 4.5, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 28, rating: 4.2, location: 'Sector 22' },
        { id: 3, name: 'Eco Produce Hub', price: 22, rating: 4.8, location: 'Sector 18' },
        { id: 4, name: 'Wholesale Mart', price: 30, rating: 4.0, location: 'Sector 12' },
        { id: 5, name: 'Nature\'s Best', price: 24, rating: 4.6, location: 'Sector 20' }
      ]
    },
    {
      id: 'onion',
      name: 'Onion',
      category: 'Vegetables',
      unit: 'kg',
      image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 35, rating: 4.5, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 32, rating: 4.2, location: 'Sector 22' },
        { id: 3, name: 'Eco Produce Hub', price: 38, rating: 4.8, location: 'Sector 18' },
        { id: 4, name: 'Wholesale Mart', price: 30, rating: 4.0, location: 'Sector 12' }
      ]
    },
    {
      id: 'tomato',
      name: 'Tomato',
      category: 'Vegetables',
      unit: 'kg',
      image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 45, rating: 4.5, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 42, rating: 4.2, location: 'Sector 22' },
        { id: 3, name: 'Eco Produce Hub', price: 48, rating: 4.8, location: 'Sector 18' },
        { id: 5, name: 'Nature\'s Best', price: 40, rating: 4.6, location: 'Sector 20' }
      ]
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
  };

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Find Wholesale Products</h1>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products (e.g., potato, onion, tomato...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!selectedProduct ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🥔</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-muted-foreground">{product.category}</p>
                      <p className="text-sm text-primary">
                        {product.vendors.length} vendors available
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Starting from ₹{Math.min(...product.vendors.map(v => v.price))}/{product.unit}
                      </p>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    onClick={() => handleProductSelect(product.id)}
                  >
                    Compare Prices
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button 
              variant="outline" 
              onClick={() => setSelectedProduct(null)}
              className="mb-6"
            >
              ← Back to Products
            </Button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Price Comparison for {selectedProductData?.name}</h2>
              <div className="flex gap-4 items-center">
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="max-w-48"
                />
                <span className="text-muted-foreground">kg</span>
              </div>
            </div>

            {selectedProductData && (
              <PriceComparison 
                product={selectedProductData} 
                quantity={parseFloat(quantity) || 0}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;*/

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PriceComparison from './PriceComparison';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('');

  const products = [
    {
      id: 'potato', name: 'Potato', category: 'Vegetables', unit: 'kg', emoji: '🥔', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 25, rating: 4.5, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 28, rating: 4.2, location: 'Sector 22' },
        { id: 3, name: 'Eco Produce Hub', price: 22, rating: 4.8, location: 'Sector 18' }
      ]
    },
    {
      id: 'onion', name: 'Onion', category: 'Vegetables', unit: 'kg', emoji: '🧅', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 35, rating: 4.5, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 32, rating: 4.2, location: 'Sector 22' }
      ]
    },
    {
      id: 'tomato', name: 'Tomato', category: 'Vegetables', unit: 'kg', emoji: '🍅', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 45, rating: 4.5, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 42, rating: 4.2, location: 'Sector 22' }
      ]
    },
    {
      id: 'carrot', name: 'Carrot', category: 'Vegetables', unit: 'kg', emoji: '🥕', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 38, rating: 4.4, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 36, rating: 4.3, location: 'Sector 22' }
      ]
    },
    {
      id: 'cabbage', name: 'Cabbage', category: 'Vegetables', unit: 'kg', emoji: '🥬', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 20, rating: 4.2, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 22, rating: 4.1, location: 'Sector 22' }
      ]
    },
    {
      id: 'brinjal', name: 'Brinjal', category: 'Vegetables', unit: 'kg', emoji: '🍆', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 28, rating: 4.0, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 30, rating: 4.2, location: 'Sector 22' }
      ]
    },
    {
      id: 'cauliflower', name: 'Cauliflower', category: 'Vegetables', unit: 'kg', emoji: '🥦', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Valley Wholesale', price: 32, rating: 4.3, location: 'Sector 15' },
        { id: 2, name: 'Fresh Farm Suppliers', price: 30, rating: 4.4, location: 'Sector 22' }
      ]
    },
    { id: 'ginger', name: 'Ginger', category: 'Vegetables', unit: 'kg', emoji: '🫚', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Nature Roots', price: 60, rating: 4.3, location: 'Sector 17' },
        { id: 2, name: 'Local Agro Hub', price: 55, rating: 4.6, location: 'Sector 23' }
      ]
    },
    { id: 'garlic', name: 'Garlic', category: 'Vegetables', unit: 'kg', emoji: '🧄', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Nature Roots', price: 70, rating: 4.4, location: 'Sector 17' },
        { id: 2, name: 'Local Agro Hub', price: 68, rating: 4.5, location: 'Sector 23' }
      ]
    },
    { id: 'chilli', name: 'Green Chilli', category: 'Vegetables', unit: 'kg', emoji: '🌶️', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Spicy Greens', price: 40, rating: 4.2, location: 'Sector 16' },
        { id: 2, name: 'Eco Veg Mart', price: 38, rating: 4.3, location: 'Sector 21' }
      ]
    },
    { id: 'spinach', name: 'Spinach', category: 'Leafy Greens', unit: 'bunch', emoji: '🥗', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Leafy Basket', price: 20, rating: 4.5, location: 'Sector 11' },
        { id: 2, name: 'Green Farms', price: 18, rating: 4.6, location: 'Sector 10' }
      ]
    },
    { id: 'radish', name: 'Radish', category: 'Vegetables', unit: 'kg', emoji: '🫛', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Winter Crops', price: 25, rating: 4.3, location: 'Sector 25' },
        { id: 2, name: 'Eco Roots', price: 22, rating: 4.4, location: 'Sector 19' }
      ]
    },
    { id: 'peas', name: 'Green Peas', category: 'Vegetables', unit: 'kg', emoji: '🟢', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Eco Veg Mart', price: 50, rating: 4.5, location: 'Sector 21' },
        { id: 2, name: 'Organic Hub', price: 48, rating: 4.7, location: 'Sector 27' }
      ]
    },
    { id: 'pumpkin', name: 'Pumpkin', category: 'Vegetables', unit: 'kg', emoji: '🎃', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Harvest Lane', price: 28, rating: 4.1, location: 'Sector 13' },
        { id: 2, name: 'Fresh Crop', price: 26, rating: 4.2, location: 'Sector 14' }
      ]
    },
    { id: 'bottle-gourd', name: 'Bottle Gourd', category: 'Vegetables', unit: 'kg', emoji: '🥒', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Organic Lane', price: 24, rating: 4.3, location: 'Sector 30' },
        { id: 2, name: 'Healthy Basket', price: 22, rating: 4.4, location: 'Sector 29' }
      ]
    },
    { id: 'okra', name: 'Okra', category: 'Vegetables', unit: 'kg', emoji: '🧃', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Green Pods', price: 34, rating: 4.2, location: 'Sector 8' },
        { id: 2, name: 'FarmFresh', price: 32, rating: 4.1, location: 'Sector 9' }
      ]
    },
    { id: 'beetroot', name: 'Beetroot', category: 'Vegetables', unit: 'kg', emoji: '🧃', image: '/placeholder.svg',
      vendors: [
        { id: 1, name: 'Root Basket', price: 36, rating: 4.3, location: 'Sector 33' },
        { id: 2, name: 'Nature Basket', price: 34, rating: 4.4, location: 'Sector 34' }
      ]
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Find Wholesale Products</h1>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products (e.g., potato, onion, tomato...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!selectedProduct ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{product.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-muted-foreground">{product.category}</p>
                      <p className="text-sm text-primary">
                        {product.vendors.length} vendors available
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Starting from ₹{Math.min(...product.vendors.map(v => v.price))}/{product.unit}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full mt-4" onClick={() => setSelectedProduct(product.id)}>
                    Compare Prices
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button variant="outline" onClick={() => setSelectedProduct(null)} className="mb-6">
              ← Back to Products
            </Button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Price Comparison for {selectedProductData?.name}</h2>
              <div className="flex gap-4 items-center">
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="max-w-48"
                />
                <span className="text-muted-foreground">{selectedProductData?.unit}</span>
              </div>
            </div>

            {selectedProductData && (
              <PriceComparison
                product={selectedProductData}
                quantity={parseFloat(quantity) || 0}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
