import React from "react";

type Props = {
  onOpenSidebar: () => void;
  onProfileClick: () => void;
};

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 20a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header({ onOpenSidebar, onProfileClick }: Props) {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* ✅ 햄버거 누르면 onOpenSidebar 실행 */}
        <button
          type="button"
          onClick={onOpenSidebar}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/20 text-white/90 backdrop-blur hover:bg-black/30 active:scale-[0.98]"
          aria-label="Open menu"
        >
          <IconMenu />
        </button>

        <button
          type="button"
          onClick={onProfileClick}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/20 text-white/90 backdrop-blur hover:bg-black/30 active:scale-[0.98]"
          aria-label="Profile"
        >
          <IconUser />
        </button>
      </div>
    </header>
  );
}
