import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower street food vendors by providing seamless access to quality wholesale supplies while promoting sustainable business practices."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive ecosystem where vendors and suppliers can thrive together, fostering long-term partnerships and mutual growth."
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "Committed to reducing environmental impact through eco-friendly packaging, efficient logistics, and green business practices."
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified Platform",
    "Partnership with 500+ Verified Suppliers",
    "24/7 Customer Support in Multiple Languages",
    "99.9% Platform Uptime Guarantee",
    "Zero-waste Packaging Initiative",
    "Carbon Neutral Delivery Network"
  ];

  return (
    <section id="about" className="py-20 bg-eco-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                About <span className="bg-gradient-eco bg-clip-text text-transparent">Eco-Vyapaar</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Eco-Vyapaar is more than just a marketplace - we're a movement towards sustainable business practices in the street food industry. Our platform connects vendors with reliable suppliers while prioritizing environmental responsibility.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What Makes Us Different</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-eco-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="eco" size="lg">
                Learn More About Us
              </Button>
              <Button variant="eco-outline" size="lg">
                View Success Stories
              </Button>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-eco-primary/10">
                        <Icon className="w-6 h-6 text-eco-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;