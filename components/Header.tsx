import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            SHOP
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="hover:text-gray-600">
              상품
            </Link>
            <Link href="/new-arrivals" className="hover:text-gray-600">
              신상품
            </Link>
            <Link href="/best" className="hover:text-gray-600">
              베스트
            </Link>
            <Link href="/sale" className="hover:text-gray-600">
              세일
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/search" className="hover:text-gray-600">
              <span className="material-icons">search</span>
            </Link>
            <Link href="/cart" className="hover:text-gray-600">
              <span className="material-icons">shopping_cart</span>
            </Link>
            <Link href="/login" className="hover:text-gray-600">
              <span className="material-icons">person</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
