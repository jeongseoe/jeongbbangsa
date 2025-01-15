'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  useEffect(() => {
    // 로컬 스토리지에서 장바구니 데이터 로드
    const loadCart = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // 수량 정보 추가
        const cartWithQuantities = parsedCart.reduce(
          (acc: CartItem[], item: Product) => {
            const existingItem = acc.find((i) => i.id === item.id);
            if (existingItem) {
              existingItem.quantity += 1;
              return acc;
            }
            return [...acc, { ...item, quantity: 1 }];
          },
          [],
        );
        setCartItems(cartWithQuantities);
      }
      setIsLoading(false);
    };

    loadCart();
  }, []);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (itemId: number) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleDeleteClick = (itemId: number) => {
    setItemToDelete(itemId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      removeItem(itemToDelete);
    }
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">장바구니</h1>
        <div className="text-center py-16">
          <p className="text-gray-600 mb-4">장바구니가 비어있습니다.</p>
          <Link
            href="/products"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">장바구니</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 장바구니 상품 목록 */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border-b">
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₩{item.price.toLocaleString()}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  -
                </button>
                <span className="w-12 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  +
                </button>
              </div>

              <div className="text-right min-w-[100px]">
                <p className="font-semibold">
                  ₩{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => handleDeleteClick(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <span className="material-icons">delete</span>
              </button>
            </div>
          ))}
        </div>

        {/* 주문 요약 */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">주문 요약</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>상품 수량</span>
                <span>
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}개
                </span>
              </div>
              <div className="flex justify-between font-bold">
                <span>총 금액</span>
                <span>₩{totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
              onClick={() => alert('주문 기능은 준비 중입니다.')}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>

      {/* 삭제 확인 모달 추가 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4">삭제 확인</h2>
            <p className="text-gray-600 mb-6">
              정말 이 상품을 장바구니에서 삭제하시겠습니까?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                취소
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
