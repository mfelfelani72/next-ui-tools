// app/icons-demo/page.tsx
"use client";

import React, { useState } from "react";
import DemoHeader from "@/components/app/demo/Header";
import Section from "@/components/app/demo/Section";
import FeaturesItem from "@/components/app/demo/FeaturesItem";
import UsageGuide from "@/components/app/demo/UsageGuide";
import { cn } from "@/lib/utils";

// Import example icons
import {
  DangerSquareIcon,
  CloseSquareIcon,
  ShowIcon,
  HideIcon,
} from "@/components/icon/icon";
import IconsPlayground from "@/components/app/demo/icon/IconsPlayground";

const iconList = [
  { name: "ArrowRight", component: DangerSquareIcon },

  { name: "CloseSquare", component: CloseSquareIcon },
  { name: "Show", component: ShowIcon },
  { name: "Hide", component: HideIcon },
];

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

export default function IconsDemoPage() {
  const [selectedIcon, setSelectedIcon] = useState(iconList[0].name);
  const [iconSize, setIconSize] = useState<keyof typeof sizeMap>("md");
  const [iconColor, setIconColor] = useState("text-indigo-600");

  const IconComponent =
    iconList.find((i) => i.name === selectedIcon)?.component || DangerSquareIcon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <DemoHeader
          title="Icons Library"
          description="A collection of flexible, customizable icons built with React, TypeScript, and Tailwind CSS"
        />

        {/* Playground */}
        <Section
          title="🎮 Icons Playground"
          description="Live preview of icons"
          className="mb-12"
          fullWidth
        >
          <IconsPlayground />
        </Section>

        {/* Main Grid Examples */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Section 1: Sizes */}
          <Section
            title="📏 Different Sizes"
            description="See how an icon scales with Tailwind classes"
          >
            <div className="flex gap-4 items-center">
              {Object.entries(sizeMap).map(([size, className]) => (
                <div key={size} className="flex flex-col items-center">
                  <DangerSquareIcon className={cn(className, "text-blue-600")} />
                  <span className="text-sm mt-1">{size.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Section 2: Colors */}
          <Section
            title="🎨 Color Variations"
            description="Icons can easily change color using Tailwind classes"
          >
            <div className="flex gap-4 items-center">
              <DangerSquareIcon className="w-6 h-6 text-red-500" />
              <DangerSquareIcon className="w-6 h-6 text-green-500" />
              <DangerSquareIcon className="w-6 h-6 text-yellow-500" />
              <DangerSquareIcon className="w-6 h-6 text-indigo-600" />
            </div>
          </Section>

          {/* Section 3: Real Use Cases */}
          <Section title="⭐ Usage Examples" description="Icons in context">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CloseSquareIcon className="w-6 h-6 text-red-500" />
                <span>Close button</span>
              </div>
              <div className="flex items-center gap-2">
                <ShowIcon className="w-6 h-6 text-green-500" />
                <span>Show/Reveal</span>
              </div>
              <div className="flex items-center gap-2">
                <HideIcon className="w-6 h-6 text-gray-600" />
                <span>Hide/Collapse</span>
              </div>
            </div>
          </Section>
        </div>

        {/* Usage Guide */}
        <UsageGuide
          className="mt-12"
          importCode={`import { DangerSquareIcon, CloseSquareIcon } from '@/components/ui/icons';`}
          propsCode={`type IconProps = {
  className?: string; // Tailwind classes for size & color
};`}
          examplesCode={`<DangerSquareIcon className="w-6 h-6 text-indigo-600" />
<CloseSquareIcon className="w-8 h-8 text-red-500" />`}
        />

        {/* Features */}
        <FeaturesItem
          title="✨ Features"
          description="What makes these icons special"
          className="mt-8"
          features={[
            {
              icon: "🎨",
              title: "Customizable",
              description:
                "Easily change size, color, and stroke via Tailwind classes",
            },
            {
              icon: "⚡",
              title: "Lightweight",
              description: "Pure SVG icons without any external dependencies",
            },
            {
              icon: "🌙",
              title: "Dark Mode Ready",
              description: "Works seamlessly with dark themes",
            },
          ]}
        />
      </div>
    </div>
  );
}
