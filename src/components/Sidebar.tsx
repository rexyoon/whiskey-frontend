import React, { useEffect } from "react";

type RouteKey = "home" | "recommend" | "favorites";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  route: RouteKey;
  onNavigate: (route: RouteKey) => void;
};

const GOLD = "#caa55a";
const BG = "#2a1f18";

export default function Sidebar({ isOpen, onClose, route, onNavigate }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
        "fixed top-0 left-0 z-50 h-screen",
        "w-[72%] max-w-[340px]",
        "transform transition-transform duration-300 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
      style={{
        backgroundColor: BG,
        borderRight: `1px solid ${GOLD}33`,
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
