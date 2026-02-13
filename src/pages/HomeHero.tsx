import React, { useEffect, useState } from "react";

interface HomeHeroProps {
  tapeImage?: string;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  tapeImage = "/images/Tape.png",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        minHeight: "100vh",
        backgroundImage: `url('/images/Whiskey.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* 메인 콘텐츠 */}
      <div className="relative z-[10] w-full h-full flex flex-col items-center justify-center">
        {/* Tape 리본 */}
        <div className="-mb-4">
          {tapeImage && (
            <img
              src={tapeImage}
              alt="tape ribbon"
              className="w-72 h-auto object-contain drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>

        {/* 메인 라벨 박스 */}
        <div
          className="relative w-80 border-4 border-yellow-500 px-8 py-16 text-center shadow-2xl"
          style={{
            backgroundColor: "#3d2817",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
          }}
        >
          <p className="text-yellow-500 text-lg tracking-widest font-semibold mb-6 drop-shadow-lg">
            THE POUR
          </p>

          <p className="text-amber-400 text-3xl italic font-light mb-2 tracking-wide drop-shadow-lg">
            fresh
          </p>

          <h1 className="text-white text-5xl font-bold tracking-widest mb-4 drop-shadow-lg">
            WHISKEY
          </h1>

          <p className="text-amber-300 text-sm italic font-light tracking-widest drop-shadow-lg">
            POUR YOUR DAY
          </p>

          {/* 하단 물결 장식 */}
          <svg
            viewBox="0 0 320 30"
            className="absolute bottom-0 left-0 right-0 w-full"
            style={{ height: "20px" }}
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
      </div>

      {/* 하단 장식 라인 */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center z-[20]">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>

      {/* 스크롤 인디케이터 */}
      {!isScrolled && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-[20]">
          <div className="text-amber-500 text-3xl">↓</div>
        </div>
      )}
    </section>
  );
};

export default HomeHero;