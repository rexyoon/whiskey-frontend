
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card/Card'
import { Button } from '../components/Button/Button'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export const Products: React.FC = () => {
  const navigate = useNavigate()
  const [cartCount, setCartCount] = useState(0)

  const allProducts: Product[] = [
    { 
      id: 1, 
      title: 'Scotch Whisky', 
      description: '고급 스코치 위스키', 
      price: 120, 
      image: 'https://images.unsplash.com/photo-1608186898635-55fdc47bb7a2?w=400&h=300&fit=crop' 
    },
    { 
      id: 2, 
      title: 'Bourbon', 
      description: '미국 버번 위스키', 
      price: 95, 
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop' 
    },
    { 
      id: 3, 
      title: 'Rye Whiskey', 
      description: '라이 위스키', 
      price: 85, 
      image: 'https://images.unsplash.com/photo-1600788148184-403f7dca7200?w=400&h=300&fit=crop' 
    },
    { 
      id: 4, 
      title: 'Japanese Whisky', 
      description: '일본 위스키', 
      price: 150, 
      image: 'https://images.unsplash.com/photo-1623069551537-f55cf13e3f14?w=400&h=300&fit=crop' 
    },
    { 
      id: 5, 
      title: 'Irish Whiskey', 
      description: '아일랜드 위스키', 
      price: 100, 
      image: 'https://images.unsplash.com/photo-1608186898635-55fdc47bb7a2?w=400&h=300&fit=crop' 
    },
    { 
      id: 6, 
      title: 'Canadian Whisky', 
      description: '캐나다 위스키', 
      price: 80, 
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop' 
    },
  ]

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
    alert('🎉 상품이 장바구니에 추가되었습니다!')
  }

  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      <Header title="🥃 Whiskey Store" cartCount={cartCount} />

      <main className="flex-grow pt-16">
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* 페이지 헤더 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Button 
                  label="← 돌아가기"
                  variant="secondary"
                  onClick={() => navigate('/')}
                />
                <h1 className="text-4xl font-bold text-gray-800">모든 상품</h1>
              </div>
              <p className="text-gray-600 text-lg">
                전 세계의 프리미엄 위스키를 한곳에서 만나보세요
              </p>
            </div>
            
            {/* 상품 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {allProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fadeIn"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <Card
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    className="h-full hover:shadow-2xl transition duration-300"
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
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="flex-1"
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* 장바구니 상태 */}
            {cartCount > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-blue-600">
                <p className="text-3xl font-bold text-gray-800 mb-2">
                  현재 장바구니
                </p>
                <p className="text-4xl font-bold text-blue-600 mb-6">
                  {cartCount}개 상품
                </p>
                <Button 
                  label="🛒 장바구니로 이동"
                  variant="primary"
                  onClick={() => navigate('/cart')}
                  className="px-8 py-3 text-lg"
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// 기본 export
export default Products
