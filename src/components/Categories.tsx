import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Apple, 
  Coffee, 
  Wheat, 
  Fish, 
  Milk, 
  Utensils,
  Package,
  Flame
} from 'lucide-react';


const Categories = () => {
  const categories = [
    {
      icon: Apple,
      name: "Fresh Vegetables & Fruits",
      description: "Farm-fresh produce delivered daily",
      items: "2000+ items",
      color: "eco-primary"
    },
    {
      icon: Wheat,
      name: "Grains & Cereals",
      description: "Quality grains and cereals in bulk",
      items: "500+ items",
      color: "eco-accent"
    },
    {
      icon: Coffee,
      name: "Spices & Condiments",
      description: "Authentic spices and cooking essentials",
      items: "800+ items",
      color: "eco-secondary"
    },
    {
      icon: Fish,
      name: "Protein & Meat",
      description: "Fresh and frozen protein options",
      items: "300+ items",
      color: "eco-primary"
    },
    {
      icon: Milk,
      name: "Dairy Products",
      description: "Fresh dairy and dairy alternatives",
      items: "200+ items",
      color: "eco-accent"
    },
    {
      icon: Utensils,
      name: "Kitchen Equipment",
      description: "Professional kitchen tools and equipment",
      items: "1000+ items",
      color: "eco-secondary"
    },
    {
      icon: Package,
      name: "Packaging Supplies",
      description: "Eco-friendly packaging solutions",
      items: "400+ items",
      color: "eco-primary"
    },
    {
      icon: Flame,
      name: "Cooking Fuel & Gas",
      description: "Reliable fuel and gas supply",
      items: "50+ items",
      color: "eco-accent"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-eco-primary text-eco-primary">
            Product Categories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground ">
            Everything Your Business
            <span className="bg-gradient-eco bg-clip-text text-foreground"> Needs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our comprehensive categories of wholesale products, specially curated for street food vendors and small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-card cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${category.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-eco-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {category.items}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="eco" size="lg" className="px-8" onClick={() => window.location.href = '/products'}>
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;