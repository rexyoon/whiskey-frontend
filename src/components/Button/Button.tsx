import React from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-amber-300 text-black hover:bg-amber-200 shadow-[0_12px_40px_rgba(251,191,36,0.18)]",
    ghost: "bg-white/10 text-white hover:bg-white/15",
  };

  return (
    <button
      className={[
        base,
        styles[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
