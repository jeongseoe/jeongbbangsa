'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  const [showCartModal, setShowCartModal] = useState(false);
  const router = useRouter();

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowCartModal(true);
  };

  const goToCart = () => {
    router.push('/cart');
  };

  const continueShopping = () => {
    setShowCartModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative group">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg transition-opacity group-hover:opacity-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
          <p
            className="text-white text-center leading-relaxed"
            style={{ whiteSpace: 'pre' }}
          >
            {product.description || '상품 설명이 없습니다.'}
          </p>
        </div>
        <div className="absolute top-4 right-4 group/tooltip z-10">
          <button
            onClick={addToCart}
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

      {/* 장바구니 추가 완료 모달 */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4">
              장바구니에 추가되었습니다
            </h2>
            <p className="text-gray-600 mb-6">장바구니로 이동하시겠습니까?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={continueShopping}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                계속 쇼핑하기
              </button>
              <button
                onClick={goToCart}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                장바구니로 이동
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
