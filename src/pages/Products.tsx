import Header from '@/components/Header';
import ProductSearch from '@/components/ProductSearch';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductSearch />
      <Footer />
    </div>
  );
};

export default Products;