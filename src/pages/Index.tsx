import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
