'use client';

import { useState } from 'react';
import ProductCard from '@/app/products/ProductCard';
import ProductFilter from '@/app/products/ProductFilter';
import ProductSort from '@/app/products/ProductSort';
import { Product } from '@/types/product';

export default function ProductsPage() {
  const products: Product[] = [
    {
      id: 1,
      name: '시오사토',
      price: 3500,
      image: '/images/products/siosato.webp',
      category: '스콘',
      description: '기본 스콘으로 \n고소한 버터향이 일품입니다!',
    },
    {
      id: 2,
      name: '에그마니',
      price: 3800,
      image: '/images/products/eggmani.webp',
      category: '스콘',
      description:
        '클래식한 디자인의 데님 팬츠입니다. 편안한 착용감과 세련된 실루엣을 제공합니다.',
    },
    {
      id: 3,
      name: '캔버스 스니커즈',
      price: 49000,
      image: '/images/products/product-3.jpg',
      category: '스콘',
      description:
        '캔버스 소재로 제작된 스니커즈입니다. 가벼운 착용감과 편안한 착화감을 제공합니다.',
    },
    {
      id: 4,
      name: '후드 집업',
      price: 69000,
      image: '/images/products/product-4.jpg',
      category: '스콘',
      description:
        '후드 집업은 겨울철에 편안하게 입을 수 있는 아이템입니다. 따뜻한 소재와 따뜻한 디자인을 제공합니다.',
    },
    {
      id: 5,
      name: '가죽 백팩',
      price: 89000,
      image: '/images/products/product-5.jpg',
      category: '스콘',
      description:
        '가죽 소재로 제작된 백팩입니다. 넉넉한 수납공간과 멋진 디자인을 제공합니다.',
    },
    {
      id: 6,
      name: '니트 스웨터',
      price: 45000,
      image: '/images/products/product-6.jpg',
      category: '스콘',
      description:
        '니트 소재로 제작된 스웨터입니다. 따뜻한 소재와 따뜻한 디자인을 제공합니다.',
    },
    {
      id: 7,
      name: '운동화',
      price: 79000,
      image: '/images/products/product-7.jpg',
      category: '스콘',
      description:
        '운동화는 운동 시 편안하게 입을 수 있는 아이템입니다. 미끄럼 방지 기능과 편안한 착화감을 제공합니다.',
    },
    {
      id: 8,
      name: '크로스백',
      price: 39000,
      image: '/images/products/product-8.jpg',
      category: '스콘',
      description:
        '크로스백은 다양한 용도로 활용할 수 있는 가방입니다. 넉넉한 수납공간과 멋진 디자인을 제공합니다.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [sortBy, setSortBy] = useState<string>('신상품순');

  const categories = ['전체', '의류', '신발', '가방'];
  const sortOptions = ['신상품순', '가격 낮은순', '가격 높은순'];

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

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === '전체'
        ? true
        : product.category === selectedCategory,
    )
    .sort((a, b) => {
      switch (sortBy) {
        case '가격 낮은순':
          return a.price - b.price;
        case '가격 높은순':
          return b.price - a.price;
        default:
          return a.id - b.id;
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">상품 목록</h1>

      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProductSort
          sortOptions={sortOptions}
          currentSort={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
