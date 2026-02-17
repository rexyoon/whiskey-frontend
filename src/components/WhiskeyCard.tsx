import React from "react";
import type { Whiskey } from "../types/whiskey";

type Props = {
  whiskey: Whiskey;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
};

export default function WhiskeyCard({ whiskey, onToggleFavorite, isFavorite }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">{whiskey.name}</div>
          <div className="mt-1 text-xs text-white/70">
            {whiskey.region} · {whiskey.type} · {whiskey.abv}% ABV
          </div>
        </div>

        {onToggleFavorite && (
          <button
            type="button"
            onClick={() => onToggleFavorite(whiskey.id)}
            className={[
              "rounded-xl border px-3 py-2 text-xs transition active:scale-[0.98]",
              isFavorite
                ? "border-white/20 bg-white/15"
                : "border-white/10 bg-white/5 hover:bg-white/10",
            ].join(" ")}
          >
            {isFavorite ? "★ Saved" : "☆ Save"}
          </button>
        )}
      </div>

      <div className="mt-3 text-xs leading-relaxed text-white/75">
        {whiskey.tastingNotes.join(" · ")}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {whiskey.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
