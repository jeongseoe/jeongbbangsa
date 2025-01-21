import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['의류', '신발', '액세서리'].map((category) => (
            <Link
              href={`/category/${category}`}
              key={category}
              className="relative h-64 group"
            >
              <Image
                src={`/images/${category}.jpg`}
                alt={category}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
