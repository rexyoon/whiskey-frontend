import React, { useEffect, useState } from "react";

type RouteKey = "home" | "recommend" | "favorites";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  route: RouteKey;
  onNavigate: (route: RouteKey) => void;
};

const GOLD = "#caa55a";
const BG = "#2a1f18";
const ANIM_MS = 280;

export default function Sidebar({ isOpen, onClose, route, onNavigate }: Props) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const t = window.setTimeout(() => setShouldRender(false), ANIM_MS);
      return () => window.clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  const Item = ({ label, value }: { label: string; value: RouteKey }) => {
    const active = route === value;
    return (
      <button type="button" onClick={() => onNavigate(value)} className="w-full">
        <div
          className="flex h-[84px] items-center justify-center text-3xl font-semibold tracking-[0.08em]"
          style={{ color: GOLD, opacity: active ? 1 : 0.88 }}
        >
          {label}
        </div>
        <div className="h-px w-full" style={{ backgroundColor: `${GOLD}55` }} />
      </button>
    );
  };

  return (
    <aside
      className={[
        "fixed top-0 left-0 z-[9999] h-screen w-[72%] max-w-[340px]",
        "will-change-transform",
      ].join(" ")}
      style={{
        backgroundColor: BG,
        borderRight: `1px solid ${GOLD}33`,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: `transform ${ANIM_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
      aria-hidden={!isOpen}
    >
      <div className="h-px w-full" style={{ backgroundColor: `${GOLD}55` }} />

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center"
        aria-label="Close sidebar"
        style={{ color: GOLD }}
      >
        <span className="text-3xl leading-none">×</span>
      </button>

      <div className="flex h-full flex-col justify-center">
        <Item label="추천" value="recommend" />
        <Item label="위스키" value="home" />
        <Item label="장소" value="favorites" />
        <button type="button" onClick={() => onNavigate("favorites")} className="w-full">
          <div
            className="flex h-[84px] items-center justify-center text-3xl font-semibold tracking-[0.08em]"
            style={{ color: GOLD, opacity: 0.88 }}
          >
            킵
          </div>
          <div className="h-px w-full" style={{ backgroundColor: `${GOLD}55` }} />
        </button>
      </div>
    </aside>
  );
}
