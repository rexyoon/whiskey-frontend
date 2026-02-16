import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function HomeHero() {
  return (
    <section className="px-6 pt-10">
      <div className="mx-auto max-w-[320px]">
        <Card className="px-6 py-10">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.25em] text-white/70">THE POUR</p>

            <p className="mt-4 text-2xl font-semibold italic text-amber-200">fresh</p>
            <p className="mt-1 text-3xl font-extrabold tracking-[0.12em] text-white">
              WHISKEY
            </p>

            <p className="mt-6 text-[10px] tracking-[0.22em] text-white/65">POUR YOUR</p>
            <p className="mt-1 text-[10px] tracking-[0.22em] text-white/65">DAY</p>

            <div className="mt-10 space-y-3">
              <Button fullWidth>AI 추천 시작</Button>
              <Button fullWidth variant="ghost">
                위스키 둘러보기
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
