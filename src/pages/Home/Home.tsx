import React from "react";
import HomeHero from "./HomeHero";
import Card from "../../components/Card";

export default function Home() {
  return (
    <div className="pb-8">
      <HomeHero />

      <div className="mt-6 space-y-4 px-4">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">오늘의 추천</p>
              <p className="mt-1 text-xs text-white/70">달콤한 셰리 계열로 한 잔 뽑아준다.</p>
            </div>
            <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs text-amber-200">
              Top
            </span>
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-sm font-semibold">빠른 선택</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition">
              <p className="text-sm font-semibold">하이볼</p>
              <p className="mt-1 text-xs text-white/65">시원하게</p>
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition">
              <p className="text-sm font-semibold">니트</p>
              <p className="mt-1 text-xs text-white/65">진하게</p>
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition">
              <p className="text-sm font-semibold">달달</p>
              <p className="mt-1 text-xs text-white/65">셰리/바닐라</p>
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition">
              <p className="text-sm font-semibold">피트</p>
              <p className="mt-1 text-xs text-white/65">스모키</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
