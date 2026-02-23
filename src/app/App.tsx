import React, { useMemo, useState } from "react";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search"; // ✅ Search 페이지 추가 (없으면 만들어야 함)

type RouteKey = "home" | "recommend" | "search" | "favorites";

export default function App() {
  const [route, setRoute] = useState<RouteKey>("home");

  const activeKey = useMemo(() => route, [route]);

  const navigate = (next: RouteKey) => {
    setRoute(next);
  };

  return (
    <div className="min-h-screen text-white">
      {/* ✅ 헤더/사이드바 제거 */}

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-28 pt-6 md:px-6">
        {route === "home" && <Home onGoRecommend={() => navigate("recommend")} />}
        {route === "recommend" && <Recommend />}
        {route === "search" && <Search />}
        {route === "favorites" && <Favorites />}
      </main>

      <Footer activeKey={activeKey} onNavigate={navigate} />
    </div>
  );
}