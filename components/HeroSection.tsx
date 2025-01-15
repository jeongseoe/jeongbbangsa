import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/banners/newbox.webp"
        alt="메인 배너"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">윈터 컬렉션</h1>
          <p className="text-xl mb-8">겨울 시즌, 슈톨렌!</p>
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
