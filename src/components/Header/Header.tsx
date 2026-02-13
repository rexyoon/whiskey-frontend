import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface HeaderProps {
  title?: string
  cartCount?: number
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Whiskey Store',
  cartCount = 0
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 로고 */}
        <div 
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          onClick={() => handleNavigation('/')}
        >
          <span className="text-3xl">🥃</span>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        
        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => handleNavigation('/')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded ${
              isActive('/') ? 'bg-blue-600 text-white' : ''
            }`}
          >
            🏠 Home
          </button>
          <button
            onClick={() => handleNavigation('/products')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded ${
              isActive('/products') ? 'bg-blue-600 text-white' : ''
            }`}
          >
            🛍️ Products
          </button>
          <button
            onClick={() => handleNavigation('/about')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded ${
              isActive('/about') ? 'bg-blue-600 text-white' : ''
            }`}
          >
            ℹ️ About
          </button>
          <button
            onClick={() => handleNavigation('/contact')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded ${
              isActive('/contact') ? 'bg-blue-600 text-white' : ''
            }`}
          >
            📧 Contact
          </button>
        </nav>

        {/* 장바구니 & 모바일 메뉴 */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavigation('/cart')}
            className="text-2xl relative hover:opacity-80 transition"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          {/* 모바일 메뉴 버튼 */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-600 px-4 py-4 flex flex-col gap-3">
          <button
            onClick={() => handleNavigation('/')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded text-left ${
              isActive('/') ? 'bg-blue-700 text-white' : ''
            }`}
          >
            🏠 Home
          </button>
          <button
            onClick={() => handleNavigation('/products')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded text-left ${
              isActive('/products') ? 'bg-blue-700 text-white' : ''
            }`}
          >
            🛍️ Products
          </button>
          <button
            onClick={() => handleNavigation('/about')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded text-left ${
              isActive('/about') ? 'bg-blue-700 text-white' : ''
            }`}
          >
            ℹ️ About
          </button>
          <button
            onClick={() => handleNavigation('/contact')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded text-left ${
              isActive('/contact') ? 'bg-blue-700 text-white' : ''
            }`}
          >
            📧 Contact
          </button>
          <button
            onClick={() => handleNavigation('/cart')}
            className={`hover:text-blue-200 transition py-2 px-3 rounded text-left ${
              isActive('/cart') ? 'bg-blue-700 text-white' : ''
            }`}
          >
            🛒 Cart ({cartCount})
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
