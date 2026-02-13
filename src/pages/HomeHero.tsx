import React, { useState } from 'react'

interface HomeHeroProps {
  backgroundImage?: string
  logoImage?: string
  tapeImage?: string
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  backgroundImage = '/images/Whiskey.png',
  logoImage = '/images/Logo.png',
  tapeImage = '/images/Tape.png'
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100vh', minHeight: '100vh' }}
    >
      {/* 배경 이미지 */}
      <img
        src={backgroundImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/40"
        style={{ zIndex: 1 }}
      />

      {/* 헤더 */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-8 z-50">
        {/* 좌측 메뉴 버튼 */}
        <button className="text-amber-600 text-4xl hover:opacity-80 transition duration-300">
          ☰
        </button>

        {/* 중앙 장식 아이콘 */}
        <div className="text-amber-600 text-2xl">
          🕯️
        </div>

        {/* 우측 사용자 아이콘 */}
        <button className="text-amber-600 text-3xl hover:opacity-80 transition duration-300">
          ⭕
        </button>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* 상단 리본 (Tape) */}
        <div className="mb-8 animate-fadeIn">
          {tapeImage && (
            <img 
              src={tapeImage}
              alt="tape ribbon"
              className="w-80 h-auto object-contain drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
        </div>

        {/* 메인 라벨 박스 */}
        <div className="relative w-80 bg-amber-900 border-4 border-yellow-500 px-8 py-12 text-center shadow-2xl rounded-lg"
          style={{
            backgroundColor: '#3d2817',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
          }}>
          
          {/* "THE POUR" 텍스트 */}
          <p className="text-yellow-500 text-lg tracking-widest font-semibold mb-6 drop-shadow-lg">
            THE POUR
          </p>

          {/* "fresh" 텍스트 */}
          <p className="text-amber-400 text-3xl italic font-light mb-2 tracking-wide drop-shadow-lg">
            fresh
          </p>

          {/* "WHISKEY" 텍스트 */}
          <h1 className="text-white text-5xl font-bold tracking-widest mb-4 drop-shadow-lg">
            WHISKEY
          </h1>

          {/* "POUR YOUR DAY" 텍스트 */}
          <p className="text-amber-300 text-sm italic font-light tracking-widest drop-shadow-lg">
            POUR YOUR DAY
          </p>

          {/* 하단 물결 장식 */}
          <svg
            viewBox="0 0 320 30"
            className="absolute bottom-0 left-0 right-0 w-full"
            style={{ height: '20px' }}
          >
            <path
              d="M 0 10 Q 40 0, 80 10 T 160 10 T 240 10 T 320 10 L 320 30 L 0 30 Z"
              fill="#3d2817"
            />
            <path
              d="M 0 12 Q 40 5, 80 12 T 160 12 T 240 12 T 320 12"
              stroke="#fbbf24"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* 하단 장식 라인 */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center">
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* 스크롤 인디케이터 */}
        {!isScrolled && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <div className="text-amber-500 text-3xl">↓</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeHero
