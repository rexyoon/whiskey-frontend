import React, { useState } from "react";
import { HomeHero } from "./HomeHero"; // HomeHero 위치에 맞게 경로 조정
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

interface Whiskey {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const Home: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const whiskeys: Whiskey[] = [
    {
      id: 1,
      title: "Premium Single Malt",
      description: "스코틀랜드 최고급 싱글 몰트 위스키",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1608186898635-55fdc47bb7a2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Classic Blend",
      description: "클래식하면서도 부드러운 블렌드 위스키",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Limited Edition Reserve",
      description: "한정판 레어 위스키 - 빠르게 매진됩니다!",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1600788148184-403f7dca7200?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Irish Whiskey Gold",
      description: "아일랜드 전통 위스키의 진수",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1623069551537-f55cf13e3f14?w=400&h=300&fit=crop",
    },
  ];

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    alert("🎉 상품이 장바구니에 추가되었습니다!");
  };

  const handleViewProducts = () => {
    navigate("/products");
  };

  return (
    <div className="w-full bg-white">
      {/* ✅ Header / Footer는 AppLayout에서 공통 처리하므로 여기선 렌더링하지 않음 */}

      {/* ✅ Hero */}
      <HomeHero tapeImage="/images/Tape.png" />

      {/* 추천 상품 섹션 */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">✨ 추천 상품</h2>
          <p className="text-gray-600 text-lg">프리미엄 위스키 컬렉션을 만나보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whiskeys.map((whiskey, index) => (
            <div
              key={whiskey.id}
              className="animate-fadeIn"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <Card
                title={whiskey.title}
                description={whiskey.description}
                price={whiskey.price}
                image={whiskey.image}
                className="h-full hover:scale-105 transform transition duration-300"
              >
                <div className="flex gap-2">
                  <Button
                    label="🛒 추가"
                    variant="primary"
                    onClick={handleAddToCart}
                    className="flex-1"
                  />
                  <Button
                    label="상세보기"
                    variant="secondary"
                    onClick={() => navigate(`/products/${whiskey.id}`)}
                    className="flex-1"
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* 모든 상품 보기 버튼 */}
        <div className="text-center mb-16">
          <Button
            label="🛍️ 모든 상품 보기"
            variant="primary"
            onClick={handleViewProducts}
            className="px-8 py-3 text-lg"
          />
        </div>

        {/* 장바구니 상태 */}
        {cartCount > 0 && (
          <div className="text-center bg-blue-50 rounded-lg p-8 border-2 border-blue-200 mt-16">
            <p className="text-2xl font-bold text-blue-600 mb-4">
              🛒 장바구니: {cartCount}개 상품
            </p>
            <Button
              label="💳 결제하기"
              variant="primary"
              onClick={() => navigate("/cart")}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;