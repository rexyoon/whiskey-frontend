import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  cartCount?: number; // 필요하면 유지, 지금 UI에선 안 쓰지만 남겨둠
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // 메뉴 열리면 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* ✅ 헤더 바: 3개 나열, 투명 */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 bg-transparent">
          {/* Left: Menu */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
          >
            {/* 햄버거 아이콘 (이미지/이모지 대신 SVG로 깔끔) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Center: Logo (크기 강제 고정) */}
          <button
            type="button"
            aria-label="Go home"
            onClick={() => handleNavigation("/")}
            className="hover:opacity-90 transition"
          >
            {/* ✅ 로고가 아무리 여백 커도 이 박스 안에서만 보이게 강제 */}
            <div className="h-10 w-24 overflow-hidden flex items-center justify-center">
              <img
                src="/images/Logo.png"
                alt="logo"
                className="h-full w-auto object-contain"
                draggable={false}
              />
            </div>
          </button>

          {/* Right: User (원하면 cart로 바꿔도 됨) */}
          <button
            type="button"
            aria-label="Account"
            onClick={() => handleNavigation("/account")}
            className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white transition"
          >
            {/* 유저 아이콘 */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21a8 8 0 10-16 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ✅ 메뉴 오버레이 (선택) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70">
          {/* 바깥 클릭 닫기 */}
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav className="relative z-[61] mx-auto mt-20 w-full max-w-md px-6">
            <div className="rounded-2xl border border-white/10 bg-black/80 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/80 tracking-wide">MENU</span>
                <button
                  type="button"
                  className="text-white/70 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavigation("/")}
                  className={`text-left text-base py-2 px-3 rounded hover:bg-white/10 transition ${
                    isActive("/") ? "text-amber-300" : "text-white"
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNavigation("/products")}
                  className={`text-left text-base py-2 px-3 rounded hover:bg-white/10 transition ${
                    isActive("/products") ? "text-amber-300" : "text-white"
                  }`}
                >
                  Products
                </button>

                <button
                  onClick={() => handleNavigation("/about")}
                  className={`text-left text-base py-2 px-3 rounded hover:bg-white/10 transition ${
                    isActive("/about") ? "text-amber-300" : "text-white"
                  }`}
                >
                  About
                </button>

                <button
                  onClick={() => handleNavigation("/contact")}
                  className={`text-left text-base py-2 px-3 rounded hover:bg-white/10 transition ${
                    isActive("/contact") ? "text-amber-300" : "text-white"
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
