'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative group">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute top-4 right-4 group/tooltip">
          <button
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 rounded-full bg-white shadow-md text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100"
            aria-label="장바구니에 담기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
          <div className="absolute right-0 top-12 bg-black text-white text-sm py-1 px-2 rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 whitespace-nowrap">
            장바구니에 담기
            <div className="absolute -top-1 right-4 w-2 h-2 bg-black transform rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600">₩{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
