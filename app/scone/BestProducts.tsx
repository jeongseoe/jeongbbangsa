'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function BestProducts() {
  const products: Product[] = [
    {
      id: 1,
      name: '시오사토',
      price: 3500,
      image: '/images/products/siosato.webp',
    },
    {
      id: 2,
      name: '베리스콘',
      price: 4500,
      image: '/images/products/berry.webp',
    },
    {
      id: 3,
      name: '에그마니',
      price: 3800,
      image: '/images/products/eggmani.webp',
    },
    {
      id: 4,
      name: '초코사토',
      price: 4000,
      image: '/images/products/choco.webp',
    },
  ];

  const addToCart = async (product: Product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('장바구니에 추가되었습니다!');
    } catch (error) {
      alert('장바구니 추가 실패');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">베스트 상품</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 group/tooltip">
                  <button
                    onClick={() => addToCart(product)}
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
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">
                  ₩{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
