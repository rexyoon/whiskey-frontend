import React from "react";
import Card from "../../components/Card/Card";

const mockProducts = [
  { name: "Johnnie Walker Black Label", tag: "블렌디드", note: "밸런스/하이볼" },
  { name: "Glenfiddich 12", tag: "싱글몰트", note: "사과/배/꿀" },
  { name: "Jameson", tag: "아이리시", note: "부드러움/가성비" },
];

export default function Products() {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-6">
      <h1 className="text-lg font-bold">Products</h1>
      <p className="mt-1 text-sm text-white/70">
        너가 저장하고, 너 취향으로 진화하는 리스트.
      </p>

      <div className="mt-5 space-y-3">
        {mockProducts.map((p) => (
          <Card key={p.name} className="p-0">
            <div className="flex items-start justify-between p-5">
              <div>
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="mt-1 text-xs text-white/65">{p.note}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                {p.tag}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
