import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/35 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 text-xs text-white/70 md:px-6">
        <span>© {new Date().getFullYear()} Whiskey AI Recommender</span>
        <span className="hidden sm:inline">Drink responsibly. 19+ only.</span>
      </div>
    </footer>
  );
}
