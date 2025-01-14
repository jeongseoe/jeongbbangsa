import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">고객센터</h3>
            <p>1234-5678</p>
            <p>평일 09:00 - 18:00</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">쇼핑안내</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guide">이용안내</Link>
              </li>
              <li>
                <Link href="/shipping">배송안내</Link>
              </li>
              <li>
                <Link href="/returns">교환/반품</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">회사정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">회사소개</Link>
              </li>
              <li>
                <Link href="/terms">이용약관</Link>
              </li>
              <li>
                <Link href="/privacy">개인정보처리방침</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">소셜미디어</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400">
                <span className="material-icons">facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <span className="material-icons">instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
