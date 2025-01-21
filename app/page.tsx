import HeroSection from '@/components/HeroSection';
import BestProducts from '@/app/scone/BestProducts';

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
