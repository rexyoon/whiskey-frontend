import React from "react";

export default function HomeHero() {
  return (
    <div className="w-[280px] max-w-[90vw]">
      <div
        className={[
          "relative overflow-hidden",
          "border border-amber-300/80",
          "bg-[#3b2a20]/85",
          "shadow-[0_30px_120px_rgba(0,0,0,0.65)]",
        ].join(" ")}
        style={{
          borderRadius: 2,
        }}
      >
        {/* Inner content */}
        <div className="px-8 pt-14 pb-16 text-center">
          <p className="text-[11px] tracking-[0.28em] text-white/70">
            THE POUR
          </p>

          {/* spacing like reference */}
          <div className="h-14" />

          {/* fresh */}
          <p className="font-serif text-[34px] italic leading-none text-amber-300">
            fresh
          </p>

          {/* WHISKEY */}
          <p className="mt-2 text-[30px] font-extrabold tracking-[0.18em] text-white">
            WHISKEY
          </p>

          {/* POUR YOUR Day */}
          <p className="mt-6 font-serif text-[12px] italic tracking-[0.22em] text-white/55">
            POUR YOUR
          </p>
          <p className="mt-1 font-serif text-[12px] italic tracking-[0.18em] text-white/55">
            Day
          </p>
        </div>

        {/* Bottom scallop CUTOUT 느낌 (mask로 "뽑아낸" 형태) */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-7">
          {/* gold line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-amber-300/80" />

          {/* scallop strip: card색을 유지하되, 아래쪽을 마스크로 뚫어 배경이 비치게 */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(59,42,32,0.85)",
              WebkitMaskImage:
                "radial-gradient(circle 7px at 7px 0px, transparent 7px, black 7.2px) , linear-gradient(black, black)",
              WebkitMaskSize: "14px 14px, 100% 100%",
              WebkitMaskRepeat: "repeat-x, no-repeat",
              WebkitMaskPosition: "0px 0px, 0px 0px",

              maskImage:
                "radial-gradient(circle 7px at 7px 0px, transparent 7px, black 7.2px) , linear-gradient(black, black)",
              maskSize: "14px 14px, 100% 100%",
              maskRepeat: "repeat-x, no-repeat",
              maskPosition: "0px 0px, 0px 0px",
            }}
          />

          {/* subtle shadow above scallops */}
          <div className="absolute inset-x-0 top-0 h-4 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
