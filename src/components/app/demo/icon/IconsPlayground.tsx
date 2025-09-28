// components/app/demo/IconsPlayground.tsx
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/icon/icon";
import CodeBlock from "@/components/app/demo/CodeBlock"; // your code block component

const iconList = Object.entries(Icons)
  .filter(([name, comp]) => typeof comp === "function" && name.endsWith("Icon"))
  .map(([name, component]) => ({ name, component }));

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

export default function IconsPlayground() {
  const [selectedIcon, setSelectedIcon] = useState(iconList[0].name);
  const [iconSize, setIconSize] = useState<keyof typeof sizeMap>("md");
  const [iconColor, setIconColor] = useState("text-indigo-600");

  const IconComponent =
    iconList.find((i) => i.name === selectedIcon)?.component ||
    iconList[0].component;

  const generateCode = () =>
    `<${selectedIcon} className="${sizeMap[iconSize]} ${iconColor}" />`;

  return (
    <div className="flex flex-col gap-6">
      {/* Selected Icon + Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center p-4 border rounded">
        <div className="p-4 border rounded flex items-center justify-center">
          <IconComponent className={cn(sizeMap[iconSize], iconColor)} />
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            className="p-2 border rounded"
            value={iconSize}
            onChange={(e) =>
              setIconSize(e.target.value as keyof typeof sizeMap)
            }
          >
            {Object.keys(sizeMap).map((size) => (
              <option key={size} value={size}>
                {size.toUpperCase()}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="p-2 border rounded"
            value={iconColor}
            onChange={(e) => setIconColor(e.target.value)}
            placeholder="Tailwind color class"
          />
        </div>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {iconList.map((icon) => {
          const IconComp = icon.component;
          const isSelected = icon.name === selectedIcon;

          return (
            <div
              key={icon.name}
              onClick={() => setSelectedIcon(icon.name)}
              className={cn(
                "cursor-pointer p-2 border rounded flex flex-col items-center justify-center",
                isSelected
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-transparent hover:border-gray-300"
              )}
            >
              <IconComp className={cn("w-6 h-6", iconColor)} />
              <span className="text-xs mt-1 text-center">{icon.name}</span>
            </div>
          );
        })}
      </div>

      {/* Generated Code Panel */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-slate-800">
            💻 Generated Code
          </h3>
          <div className="text-sm text-slate-500">
            Copy and use in your project
          </div>
        </div>
        <CodeBlock code={generateCode()} />

        {/* Tips Section */}
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
            <span className="mr-2">💡</span>
            Usage Tips
          </h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Copy the code and paste into your React component</li>
            <li>• Make sure to import the icon component</li>
            <li>
              • Add props like <code>onClick</code> if needed
            </li>
            <li>• Custom classes will override default styles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
