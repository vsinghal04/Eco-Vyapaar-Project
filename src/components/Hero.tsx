import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Shield, X } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const videos = [
  'https://www.youtube.com/embed/gTdgWQxkJXQ',
  'https://www.youtube.com/embed/v82GIpwlUm0',
  'https://www.youtube.com/embed/_SLKo20Zyz0',
  'https://www.youtube.com/embed/x4CAz9xjwKY',
  'https://www.youtube.com/embed/UgIfDo9e_Jk',
  'https://www.youtube.com/embed/2I2OUirzDYc',
];

const Hero = () => {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-eco-light to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-eco-primary/10 border border-eco-primary/20">
                <span className="text-sm font-medium text-eco-primary">
                  🌱 Sustainable Business Platform
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect Street Food Vendors with{' '}
                <span className="bg-gradient-eco bg-clip-text text-transparent">
                  Wholesale Suppliers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Eco-Vyapaar bridges the gap between street food vendors and wholesale suppliers,
                creating a sustainable marketplace that empowers local businesses and promotes eco-friendly practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-eco-primary/10">
                  <Users className="w-6 h-6 text-eco-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Vendors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-eco-accent/10">
                  <TrendingUp className="w-6 h-6 text-eco-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">₹50L+</div>
                <div className="text-sm text-muted-foreground">Monthly GMV</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-eco-secondary/10">
                  <Shield className="w-6 h-6 text-eco-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Secure</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="eco-outline" size="xl" onClick={() => setShowVideos(!showVideos)}>
                {showVideos ? 'Close' : 'Watch Demo'}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Eco-Vyapaar Platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-primary/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-eco-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-eco-primary rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Video Grid Below */}
        {showVideos && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((src, idx) => (
              <div key={idx} className="aspect-video">
                <iframe
                  src={src}
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Demo Video ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;