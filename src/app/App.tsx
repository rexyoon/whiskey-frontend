import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
import Favorites from "../pages/Favorites";

type RouteKey = "home" | "recommend" | "favorites";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [route, setRoute] = useState<RouteKey>("home");

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navigate = (next: RouteKey) => {
    setRoute(next);
    closeSidebar();
  };

  return (
    <div className="min-h-screen text-white">
      <Header onOpenSidebar={openSidebar} onProfileClick={() => navigate("favorites")} />

      {/* 열려있을 때만 딤 */}
      {isSidebarOpen && <Backdrop onClick={closeSidebar} />}

      {/* Sidebar는 항상 마운트될 수 있게 하고, 내부에서 슬라이드 + 언마운트 처리 */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        route={route}
        onNavigate={navigate}
      />

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-6 md:px-6">
        {route === "home" && <Home onGoRecommend={() => navigate("recommend")} />}
        {route === "recommend" && <Recommend />}
        {route === "favorites" && <Favorites />}
      </main>

      <Footer />
    </div>
  );
}
