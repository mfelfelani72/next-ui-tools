// components/app/demo/accordion/AccordionPlayground.tsx
"use client";

import { useState } from "react";
import Accordion, { AccordionProps } from "@/components/ui/Accordion";
import CodeBlock from "@/components/app/demo/CodeBlock";

type PlaygroundConfig = {
  title: string;
  icon: string | null;
  open: boolean;
  parentClassName: string;
  className: string;
  circleLocation: string;
  animation: "none" | "slide" | "fade" | "scale";
};

const iconOptions = ["⭐", "❤️", "🔔", "⚡", "🚀", "📧", "🔒", "🔍"];

const animationOptions = [
  { value: "none", label: "No Animation" },
  { value: "slide", label: "Slide" },
  { value: "fade", label: "Fade" },
  { value: "scale", label: "Scale" },
];

const presetExamples: PlaygroundConfig[] = [
  {
    title: "Section 1",
    icon: "⭐",
    open: false,
    parentClassName: "",
    className: "",
    circleLocation: "top-0 left-0",
    animation: "slide",
  },
  {
    title: "Important Section",
    icon: "🚀",
    open: true,
    parentClassName: "",
    className: "bg-blue-50 border-blue-400",
    circleLocation: "top-0 right-0",
    animation: "fade",
  },
];

export default function AccordionPlayground() {
  const [config, setConfig] = useState<PlaygroundConfig>(presetExamples[0]);

  const generateCode = () => {
    const { title, icon, open, parentClassName, className, circleLocation } =
      config;
    return `<Accordion
  title="${title}"
  ${icon ? `icon="${icon}"` : ""}
  open={${open}}
  parentClassName="${parentClassName}"
  className="${className}"
  circleLocation="${circleLocation}"
>
  <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
    Accordion content goes here
  </div>
</Accordion>`;
  };

  return (
    <div className="space-y-8">
      {/* Quick Presets */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          🚀 Quick Presets
        </h3>
        <div className="flex gap-3 flex-wrap">
          {presetExamples.map((preset, i) => (
            <button
              key={i}
              onClick={() => setConfig(preset)}
              className="p-3 border border-blue-200 rounded-lg hover:border-blue-500 hover:bg-blue-100 transition-all"
            >
              {preset.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            ⚙️ Configuration
          </h3>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Accordion Title
            </label>
            <input
              type="text"
              value={config.title}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter accordion title..."
            />
          </div>

          {/* Open state */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Open by default
            </label>
            <select
              value={config.open ? "true" : "false"}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  open: e.target.value === "true",
                }))
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="true">Open</option>
              <option value="false">Closed</option>
            </select>
          </div>

          {/* Icon */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Select Icon
            </label>
            <div className="grid grid-cols-5 gap-2">
              {iconOptions.map((ic) => (
                <button
                  key={ic}
                  onClick={() => setConfig((prev) => ({ ...prev, icon: ic }))}
                  className={`p-2 border rounded-lg text-lg ${
                    config.icon === ic
                      ? "border-blue-500 bg-blue-50 shadow-sm"
                      : "border-slate-300 hover:scale-105"
                  }`}
                  title={ic}
                >
                  {ic}
                </button>
              ))}
            </div>
          </div>

          {/* Parent/ClassName */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Parent Class Name
            </label>
            <input
              type="text"
              value={config.parentClassName}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  parentClassName: e.target.value,
                }))
              }
              placeholder="e.g., bg-gray-50 p-4 rounded-xl"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Accordion Class Name
            </label>
            <input
              type="text"
              value={config.className}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, className: e.target.value }))
              }
              placeholder="e.g., border-2 border-purple-400"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Circle Location */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Circle Location
            </label>
            <input
              type="text"
              value={config.circleLocation}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  circleLocation: e.target.value,
                }))
              }
              placeholder="e.g., top-0 left-0"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Animation */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Open/Close Animation
            </label>
            <select
              value={config.animation}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  animation: e.target.value as PlaygroundConfig["animation"],
                }))
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {animationOptions.map((anim) => (
                <option key={anim.value} value={anim.value}>
                  {anim.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Preview + Code */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              👁️ Live Preview
            </h3>
            <Accordion
              title={config.title}
              icon={config.icon}
              open={config.open}
              parentClassName={config.parentClassName}
              className={`${config.className} ${
                config.animation === "fade"
                  ? "transition-opacity duration-500"
                  : config.animation === "scale"
                  ? "transform transition-transform duration-500"
                  : config.animation === "slide"
                  ? "transition-all duration-500"
                  : ""
              }`}
              circleLocation={config.circleLocation}
            >
              <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                This is the content of {config.title}.
              </div>
            </Accordion>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              💻 Generated Code
            </h3>
            <CodeBlock code={generateCode()} />

            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <span className="mr-2">💡</span>Usage Tips
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Change title and see live preview</li>
                <li>• Change icon and classes</li>
                <li>• Select animation type</li>
                <li>• Circle location works live</li>
                <li>• Generated code reflects your settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
