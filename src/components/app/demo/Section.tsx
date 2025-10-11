// components/demo/Section.tsx
"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  codeExample?: string;
  fullWidth?: boolean;
  className?: string;
}

export default function Section({
  title,
  description,
  children,
  codeExample,
  fullWidth = false,
  className = "",
}: SectionProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/60 p-6 ${className}`}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-600 mb-4">{description}</p>

        {codeExample && (
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showCode ? "🙈 Hide Code" : "👁️ Show Code"}
          </button>
        )}
      </div>

      {codeExample && showCode && (
        <div className="mb-6">
          <CodeBlock code={codeExample} />
        </div>
      )}

      <div className={fullWidth ? "w-full" : ""}>{children}</div>
    </div>
  );
}
