import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const bgUrl = "/images/Whiskey.png";

  return (
    <div className="relative min-h-dvh overflow-hidden text-white bg-black">
      {/* ✅ 강제 확인용: 이 빨간 tint가 안 보이면 AppLayout 미적용 */}
      <div className="fixed inset-0 -z-20 bg-red-500/20" />

      {/* ✅ Fixed Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${bgUrl}")` }}
      />

      {/* overlay */}
      <div className="fixed inset-0 -z-10 bg-black/55" />

      {/* ✅ Debug: 화면에 경로를 박아둠 */}
      <div className="fixed bottom-3 left-3 z-50 rounded-xl bg-black/60 px-3 py-2 text-[11px] text-white/80">
        AppLayout ON · BG: {bgUrl}
      </div>

      <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
