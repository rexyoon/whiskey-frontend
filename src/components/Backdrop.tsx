import React from "react";

type Props = {
  onClick: () => void;
};

export default function Backdrop({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed inset-0 z-40 bg-black/55"
      aria-label="Close sidebar backdrop"
    />
  );
}
