import React from "react";

export type NavKey = "home" | "recommend" | "search" | "favorites";

type Item = {
  key: NavKey;
  label: string;
};

type Props = {
  activeKey: NavKey;
  onNavigate: (key: NavKey) => void;
  className?: string;
};

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const items: Item[] = [
  { key: "home", label: "Home" },
  { key: "recommend", label: "Recommend" },
  { key: "search", label: "Search" },
  { key: "favorites", label: "Favorites" },
];

export default function Footer({ activeKey, onNavigate, className }: Props) {
  return (
    <nav
      className={cx(
        "fixed bottom-0 left-0 right-0 z-50",
        "pb-[env(safe-area-inset-bottom)]",
        className
      )}
      aria-label="Bottom Navigation"
    >
      <div className="mx-auto w-full max-w-3xl px-4 py-3">
        <div
          className={cx(
            "rounded-2xl px-3 py-2",
            "bg-[#22160f]/90 backdrop-blur",
            "shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
          )}
        >
          <ul className="grid grid-cols-4 gap-2">
            {items.map((item) => {
              const isActive = item.key === activeKey;

              return (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.key)}
                    className={cx(
                      "w-full rounded-xl px-2 py-2",
                      "transition-all duration-200",
                      "text-[12px] font-medium",
                      isActive
                        ? "bg-[#3a2a20] text-[#f3e7db] shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
                        : "text-[#bcaea3] hover:bg-white/5"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}