import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AppLayout() {
  const [cartCount] = useState(0); // 나중에 전역상태(컨텍스트/리덕스/zustand)로 빼면 됨

  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      <Header cartCount={cartCount} />

      {/* Header가 fixed면 pt-24 필요 / absolute면 필요 없음 */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}