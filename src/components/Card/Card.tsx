import React from "react";

type CardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ title, subtitle, children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-black/35 backdrop-blur-sm shadow-[0_30px_120px_rgba(0,0,0,0.65)]",
        className,
      ].join(" ")}
    >
      {(title || subtitle) && (
        <div className="px-5 pt-5">
          {title && <h3 className="text-base font-semibold text-white">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
