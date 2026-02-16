import React from "react";

type HeaderProps = {
  onMenuClick?: () => void;
  onProfileClick?: () => void;
};

export default function Header({ onMenuClick, onProfileClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-14 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/10 backdrop-blur-[2px]" />
      <div className="relative mx-auto flex h-14 w-full max-w-md items-center justify-between px-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/0 hover:bg-white/10 active:scale-[0.98] transition"
        >
          <div className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 rounded bg-white/90" />
            <span className="block h-[2px] w-5 rounded bg-white/90" />
            <span className="block h-[2px] w-5 rounded bg-white/90" />
          </div>
        </button>

        <button
          type="button"
          onClick={onProfileClick}
          aria-label="Open profile"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/0 hover:bg-white/10 active:scale-[0.98] transition"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-90"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21a8 8 0 10-16 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 13a4 4 0 100-8 4 4 0 000 8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
