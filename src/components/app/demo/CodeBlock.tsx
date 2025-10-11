// components/demo/CodeBlock.tsx
"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 bg-slate-700 text-white px-3 py-1 rounded-lg text-sm hover:bg-slate-600 transition-colors"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
      <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono pt-6">
        {code}
      </pre>
    </div>
  );
}
