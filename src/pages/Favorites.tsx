import React from "react";

export default function Favorites() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-[520px] border border-white/10 bg-black/30 p-6 text-center backdrop-blur">
        <h2 className="text-lg font-semibold">Favorites</h2>
        <p className="mt-2 text-sm text-white/70">
          즐겨찾기 화면. 다음에 저장 기능 붙이면 된다.
        </p>
      </div>
    </section>
  );
}
