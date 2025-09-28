// components/app/demo/button/ButtonPlayground.tsx
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/app/demo/CodeBlock";

interface PlaygroundConfig {
  variant:
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "success"
    | "warning"
    | "icon";
  size: "sm" | "md" | "lg" | "xl";
  text: string;
  withIcon: boolean;
  iconType: string;
  iconPosition: "left" | "right";
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  customClass: string;
  useCustomStyles: boolean;
  clickAnimation: "none" | "scale" | "bounce" | "pulse" | "press";
}

const iconOptions = [
  { value: "⭐", label: "Star" },
  { value: "❤️", label: "Heart" },
  { value: "🔔", label: "Bell" },
  { value: "⚡", label: "Flash" },
  { value: "🚀", label: "Rocket" },
  { value: "📧", label: "Email" },
  { value: "🔒", label: "Lock" },
  { value: "🔍", label: "Search" },
  { value: "➕", label: "Plus" },
  { value: "➡️", label: "Arrow" },
  { value: "🎨", label: "Paint" },
  { value: "🔧", label: "Tool" },
  { value: "📱", label: "Mobile" },
  { value: "💾", label: "Save" },
  { value: "🚫", label: "Cancel" },
];

const clickAnimations = [
  { value: "none" as const, label: "No Animation" },
  { value: "scale" as const, label: "Scale Down" },
  { value: "bounce" as const, label: "Bounce" },
  { value: "pulse" as const, label: "Pulse" },
  { value: "press" as const, label: "Press Down" },
];

const variantExamples = [
  { name: "Primary", config: { variant: "primary" as const } },
  { name: "Secondary", config: { variant: "secondary" as const } },
  { name: "Outline", config: { variant: "outline" as const } },
  { name: "Danger", config: { variant: "danger" as const } },
  { name: "Success", config: { variant: "success" as const } },
  { name: "Warning", config: { variant: "warning" as const } },
];

const sizeExamples = [
  { name: "Small", config: { size: "sm" as const } },
  { name: "Medium", config: { size: "md" as const } },
  { name: "Large", config: { size: "lg" as const } },
  { name: "XL", config: { size: "xl" as const } },
];

export default function ButtonPlayground() {
  const [config, setConfig] = useState<PlaygroundConfig>({
    variant: "primary",
    size: "md",
    text: "Click me",
    withIcon: false,
    iconType: "⭐",
    iconPosition: "left",
    disabled: false,
    loading: false,
    fullWidth: false,
    customClass: "",
    useCustomStyles: false,
    clickAnimation: "none",
  });

  const [showClickEffect, setShowClickEffect] = useState(false);

  const handlePlaygroundClick = () => {
    // فقط انیمیشن کلیک رو نشون بده، لودینگ نه
    setShowClickEffect(true);
    setTimeout(() => setShowClickEffect(false), 300);
  };

  const generateCode = () => {
    const {
      variant,
      size,
      text,
      withIcon,
      iconType,
      iconPosition,
      disabled,
      loading,
      fullWidth,
      customClass,
      useCustomStyles,
      clickAnimation,
    } = config;

    let code = `<Button\n`;

    if (!useCustomStyles) {
      code += `  variant="${variant}"\n`;
      code += `  size="${size}"\n`;
    }

    if (withIcon) {
      code += `  icon="${iconType}"\n`;
      code += `  iconPosition="${iconPosition}"\n`;
    }

    if (disabled) code += `  disabled={${disabled}}\n`;
    if (loading) code += `  loading={${loading}}\n`;
    if (fullWidth) code += `  fullWidth={${fullWidth}}\n`;
    if (clickAnimation !== "none")
      code += `  clickAnimation="${clickAnimation}"\n`;
    if (customClass) code += `  className="${customClass}"\n`;

    code += `>\n`;
    code += `  ${text}\n`;
    code += `</Button>`;

    return code;
  };

  const presetExamples = [
    {
      name: "Primary Action",
      config: {
        variant: "primary" as const,
        size: "lg" as const,
        text: "Get Started",
        withIcon: true,
        iconType: "🚀",
        iconPosition: "right" as const,
        customClass: "shadow-lg hover:shadow-xl transition-all",
        useCustomStyles: false,
        clickAnimation: "scale" as const,
      },
    },
    {
      name: "Gradient Button",
      config: {
        variant: "primary" as const,
        size: "md" as const,
        text: "Gradient Style",
        withIcon: false,
        iconType: "🎨",
        iconPosition: "left" as const,
        customClass:
          "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:from-purple-600 hover:to-pink-600",
        useCustomStyles: true,
        clickAnimation: "bounce" as const,
      },
    },
    {
      name: "Pill Button",
      config: {
        variant: "outline" as const,
        size: "sm" as const,
        text: "Pill Style",
        withIcon: false,
        iconType: "⭐",
        iconPosition: "left" as const,
        customClass:
          "rounded-full px-8 border-2 border-blue-500 text-blue-600 hover:bg-blue-50",
        useCustomStyles: true,
        clickAnimation: "press" as const,
      },
    },
    {
      name: "Dark Modern",
      config: {
        variant: "primary" as const,
        size: "md" as const,
        text: "Modern Dark",
        withIcon: true,
        iconType: "⚡",
        iconPosition: "left" as const,
        customClass:
          "bg-gray-900 text-white hover:bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl rounded-lg",
        useCustomStyles: true,
        clickAnimation: "scale" as const,
      },
    },
  ];

  const applyPreset = (preset: (typeof presetExamples)[0]) => {
    setConfig((prev) => ({ ...prev, ...preset.config }));
  };

  const applyVariant = (variant: (typeof variantExamples)[0]) => {
    setConfig((prev) => ({ ...prev, ...variant.config }));
  };

  const applySize = (size: (typeof sizeExamples)[0]) => {
    setConfig((prev) => ({ ...prev, ...size.config }));
  };

  const resetToDefault = () => {
    setConfig({
      variant: "primary",
      size: "md",
      text: "Click me",
      withIcon: false,
      iconType: "⭐",
      iconPosition: "left",
      disabled: false,
      loading: false,
      fullWidth: false,
      customClass: "",
      useCustomStyles: false,
      clickAnimation: "none",
    });
  };

  return (
    <div className="space-y-8">
      {/* Quick Presets Section */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          🚀 Quick Start Presets
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {presetExamples.map((preset, index) => (
            <button
              key={index}
              onClick={() => applyPreset(preset)}
              className="p-4 border border-blue-200 rounded-lg hover:border-blue-500 hover:bg-blue-100 transition-all duration-200 text-left group"
            >
              <div className="font-medium text-blue-800 mb-1 group-hover:text-blue-900">
                {preset.name}
              </div>
              <div className="text-xs text-blue-600 capitalize">
                {preset.config.clickAnimation} animation
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls Panel */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-slate-800">
              ⚙️ Configuration
            </h3>
            <button
              onClick={resetToDefault}
              className="px-4 py-2 text-sm bg-slate-100 border border-slate-300 rounded-lg hover:bg-slate-200 transition-colors text-slate-700"
            >
              🔄 Reset
            </button>
          </div>

          {/* Quick Variants */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Quick Variants
            </label>
            <div className="flex flex-wrap gap-2">
              {variantExamples.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => applyVariant(variant)}
                  className={`px-3 py-2 text-xs border rounded-lg transition-colors ${
                    config.variant === variant.config.variant
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-slate-300 hover:border-blue-400 hover:bg-blue-50 text-slate-700"
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Sizes */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Quick Sizes
            </label>
            <div className="flex flex-wrap gap-2">
              {sizeExamples.map((size, index) => (
                <button
                  key={index}
                  onClick={() => applySize(size)}
                  className={`px-3 py-2 text-xs border rounded-lg transition-colors ${
                    config.size === size.config.size
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-slate-300 hover:border-blue-400 hover:bg-blue-50 text-slate-700"
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Styles Toggle */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-orange-800">
                  <span>🎨 Custom Styles Mode</span>
                </label>
                <p className="text-xs text-orange-700 mt-1">
                  Ignore preset styles and use your own Tailwind classes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.useCustomStyles}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      useCustomStyles: e.target.checked,
                    }))
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
              </label>
            </div>
          </div>

          {/* Main Controls Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Variant */}
            {!config.useCustomStyles && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Variant Style
                </label>
                <select
                  value={config.variant}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      variant: e.target.value as any,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="outline">Outline</option>
                  <option value="danger">Danger</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                  <option value="icon">Icon</option>
                </select>
              </div>
            )}

            {/* Size */}
            {!config.useCustomStyles && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Button Size
                </label>
                <select
                  value={config.size}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      size: e.target.value as any,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">XL</option>
                </select>
              </div>
            )}

            {/* Click Animation */}
            <div className={config.useCustomStyles ? "col-span-2" : ""}>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Click Animation
              </label>
              <select
                value={config.clickAnimation}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    clickAnimation: e.target.value as any,
                  }))
                }
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                {clickAnimations.map((animation) => (
                  <option key={animation.value} value={animation.value}>
                    {animation.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Text Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Button Text
            </label>
            <input
              type="text"
              value={config.text}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  text: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your button text..."
            />
          </div>

          {/* Icon Settings */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={config.withIcon}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      withIcon: e.target.checked,
                    }))
                  }
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-700">
                  Add Icon
                </span>
              </label>
            </div>

            {config.withIcon && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Icon Position
                </label>
                <select
                  value={config.iconPosition}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      iconPosition: e.target.value as any,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="left">Left Side</option>
                  <option value="right">Right Side</option>
                </select>
              </div>
            )}
          </div>

          {/* Icon Selection */}
          {config.withIcon && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Choose Icon
              </label>
              <div className="grid grid-cols-5 gap-2">
                {iconOptions.map((icon) => (
                  <button
                    key={icon.value}
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, iconType: icon.value }))
                    }
                    className={`p-3 border rounded-lg text-lg hover:border-blue-500 transition-all duration-200 ${
                      config.iconType === icon.value
                        ? "border-blue-500 bg-blue-50 shadow-sm scale-105"
                        : "border-slate-300 hover:scale-105"
                    }`}
                    title={icon.label}
                  >
                    {icon.value}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* States */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Button States
            </label>
            <div className="grid grid-cols-3 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={config.disabled}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      disabled: e.target.checked,
                    }))
                  }
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-700">
                  Disabled
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={config.loading}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      loading: e.target.checked,
                    }))
                  }
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-700">
                  Loading
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={config.fullWidth}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      fullWidth: e.target.checked,
                    }))
                  }
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-700">
                  Full Width
                </span>
              </label>
            </div>
          </div>

          {/* Custom Class */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Custom Tailwind Classes
            </label>
            <textarea
              value={config.customClass}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  customClass: e.target.value,
                }))
              }
              rows={3}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
              placeholder="Enter your custom Tailwind classes...&#10;Example: bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg"
            />
            <div className="text-xs text-slate-500 mt-2 space-y-1">
              <div>
                <strong>💡 Pro Tips:</strong>
              </div>
              <div>• Use spaces to separate multiple classes</div>
              <div>
                • Try gradients:{" "}
                <code>bg-gradient-to-r from-blue-500 to-purple-500</code>
              </div>
              <div>
                • Add shadows: <code>shadow-lg hover:shadow-xl</code>
              </div>
              <div>
                • Custom borders: <code>border-2 border-red-500</code>
              </div>
            </div>
          </div>
        </div>

        {/* Preview & Code Panel */}
        <div className="space-y-6">
          {/* Live Preview */}
          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              👁️ Live Preview
            </h3>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-lg p-8 border-2 border-dashed border-slate-200 min-h-[200px] flex flex-col items-center justify-center space-y-6">
              <Button
                variant={config.useCustomStyles ? "primary" : config.variant}
                size={config.useCustomStyles ? "md" : config.size}
                disabled={config.disabled}
                loading={config.loading}
                fullWidth={config.fullWidth}
                icon={config.withIcon ? config.iconType : undefined}
                iconPosition={config.iconPosition}
                clickAnimation={config.clickAnimation}
                className={config.customClass}
                onClick={handlePlaygroundClick}
              >
                {config.text}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-slate-600">
                  {!config.disabled && !config.loading
                    ? "Click the button to test the animation!"
                    : config.disabled
                    ? "🔒 Button is currently disabled"
                    : "⏳ Button is in loading state"}
                </p>
                {config.clickAnimation !== "none" &&
                  !config.disabled &&
                  !config.loading && (
                    <p className="text-xs text-blue-600 font-medium">
                      Animation:{" "}
                      <span className="capitalize">
                        {config.clickAnimation}
                      </span>
                    </p>
                  )}
              </div>
            </div>
          </div>

          {/* Generated Code */}
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
                <li>• Make sure to import the Button component</li>
                <li>
                  • Add your click handler to the <code>onClick</code> prop
                </li>
                <li>• Custom classes will override default styles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
