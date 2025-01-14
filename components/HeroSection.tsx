import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/banners/hero-banner.jpg"
        alt="메인 배너"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">신상품 컬렉션</h1>
          <p className="text-xl mb-8">새로운 시즌, 새로운 스타일</p>
          <Link
            href="/new-arrivals"
            className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100"
          >
            구경하기
          </Link>
        </div>
      </div>
    </section>
  );
}
