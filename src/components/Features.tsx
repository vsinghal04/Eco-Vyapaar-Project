import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import feature1 from '@/assets/feature-1.jpg';
import feature2 from '@/assets/feature-2.jpg';
import feature3 from '@/assets/feature-3.jpg';

const Features = () => {
  const features = [
    {
      title: "Smart Marketplace",
      description: "Connect directly with verified wholesale suppliers. Browse thousands of products with real-time pricing and availability.",
      image: feature1,
      badge: "Marketplace",
      benefits: ["Real-time Inventory", "Verified Suppliers", "Competitive Pricing"]
    },
    {
      title: "Vendor-Friendly Platform",
      description: "Designed specifically for street food vendors with simple ordering, flexible payment options, and delivery tracking.",
      image: feature2,
      badge: "For Vendors",
      benefits: ["Easy Ordering", "Flexible Payments", "Order Tracking"]
    },
    {
      title: "Sustainable Supply Chain",
      description: "Promote eco-friendly practices with sustainable packaging options and carbon-neutral delivery solutions.",
      image: feature3,
      badge: "Eco-Friendly",
      benefits: ["Green Packaging", "Carbon Neutral", "Waste Reduction"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-eco-primary text-eco-primary">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Everything You Need for <span className="bg-gradient-eco bg-clip-text text-foreground"> Smart Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features needed to streamline your supply chain and grow your business sustainably.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-eco-primary text-primary-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-eco-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-eco-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-eco-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;