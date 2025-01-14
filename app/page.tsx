import HeroSection from '@/components/HeroSection';
import BestProducts from '@/app/products/BestProducts';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <BestProducts />
      </main>
    </div>
  );
}
