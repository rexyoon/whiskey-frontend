import React from "react";

type Props = {
  onGoRecommend: () => void;
};

export default function Home({ onGoRecommend }: Props) {
  return (
    <section className="flex min-h-[75vh] items-center justify-center">
      <div className="w-full max-w-[360px] border border-[#caa55a]/80 bg-black/25 px-7 py-10 text-center backdrop-blur">
        <div className="mx-auto mb-5 h-px w-24 bg-[#caa55a]/70" />

        <div className="text-[10px] tracking-[0.28em] text-white/80">THE POUR</div>
        <div className="mt-3 font-[cursive] text-3xl leading-none text-[#caa55a]">
          fresh
        </div>
        <div className="mt-1 text-2xl font-semibold tracking-[0.16em]">WHISKEY</div>

        <div className="mx-auto mt-5 h-px w-24 bg-[#caa55a]/70" />

        <div className="mt-4 text-[10px] tracking-[0.22em] text-white/70">POUR YOUR</div>
        <div className="text-[10px] tracking-[0.22em] text-white/70">DAY</div>

        <button
          type="button"
          onClick={onGoRecommend}
          className="mt-7 w-full border border-[#caa55a]/70 bg-black/20 px-4 py-3 text-xs tracking-[0.24em] text-white/85 hover:bg-black/30 active:scale-[0.99]"
        >
          START RECOMMEND →
        </button>
      </div>
    </section>
  );
}
