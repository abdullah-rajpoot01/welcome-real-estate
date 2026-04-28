// app/icons/page.tsx (or pages/icons.tsx)

"use client";

import { ICONS } from "@/components/icons_map";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function IconsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (name: string) => {
    await navigator.clipboard.writeText(name);
    setCopied(name);

    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Icon Library</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {Object.entries(ICONS).map(([name, Icon]) => (
          <div
            key={name}
            className="border rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition"
          >
            <Icon className="w-6 h-6" />

            <p className="text-sm text-center">{name}</p>

            <button
              onClick={() => handleCopy(name)}
              className="flex items-center gap-1 text-xs px-2 py-1 border rounded-md hover:bg-gray-100"
            >
              <Copy className="w-4 h-4" />
              {copied === name ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}