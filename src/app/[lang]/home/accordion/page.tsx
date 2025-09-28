// app/accordion-demo/page.tsx
"use client";

import { useState } from "react";
import Accordion from "@/components/ui/Accordion";
import Section from "@/components/app/demo/Section";
import AccordionPlayground from "@/components/app/demo/accordion/AccordionPlayground";
import CodeBlock from "@/components/app/demo/CodeBlock";
import DemoHeader from "@/components/app/demo/Header";
import FeaturesItem from "@/components/app/demo/FeaturesItem";
import UsageGuide from "@/components/app/demo/UsageGuide"

export default function AccordionDemoPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <DemoHeader
          title="Accordion Component"
          description="A highly flexible and accessible Accordion component built with React, TypeScript, and Tailwind CSS"
        />

        {/* Playground Section */}
        <Section
          title="🎮 Accordion Playground"
          description="Experiment with different accordion configurations in real-time"
          className="mb-12"
          fullWidth
        >
          <AccordionPlayground />
        </Section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Section 1: Basic Accordion */}
          <Section
            title="🎨 Basic Accordion"
            description="Default accordion usage"
            codeExample={`<Accordion title="Section 1">
  Content of section 1
</Accordion>

<Accordion title="Section 2">
  Content of section 2
</Accordion>`}
          >
            <div className="flex flex-col gap-3">
              <Accordion
                title="Section 1"
                open={expanded === "sec1"}
                onToggle={() => toggleAccordion("sec1")}
              >
                <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                  This is the content of section 1
                </div>
              </Accordion>

              <Accordion
                title="Section 2"
                open={expanded === "sec2"}
                onToggle={() => toggleAccordion("sec2")}
              >
                <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                  This is the content of section 2
                </div>
              </Accordion>
            </div>
          </Section>

          {/* Section 2: Accordion with Icons */}
          <Section
            title="⭐ Accordion with Icons"
            description="Add icons to accordion titles"
            codeExample={`<Accordion title="Profile" icon="👤" />
<Accordion title="Settings" icon="⚙️" />`}
          >
            <div className="flex flex-col gap-3">
              <Accordion
                title="Profile"
                icon="👤"
                open={expanded === "profile"}
                onToggle={() => toggleAccordion("profile")}
              >
                <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                  Profile content goes here
                </div>
              </Accordion>

              <Accordion
                title="Settings"
                icon="⚙️"
                open={expanded === "settings"}
                onToggle={() => toggleAccordion("settings")}
              >
                <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                  Settings content goes here
                </div>
              </Accordion>
            </div>
          </Section>

          {/* Section 3: Multiple Open */}
          <Section
            title="📂 Multiple Open Accordions"
            description="Allow multiple sections to be expanded at once"
            codeExample={`<Accordion title="Section A" open />
<Accordion title="Section B" open />`}
          >
            <div className="flex flex-col gap-3">
              <Accordion title="Section A" open>
                <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                  Content for Section A
                </div>
              </Accordion>
              <Accordion title="Section B" open>
                <div className="p-4 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                  Content for Section B
                </div>
              </Accordion>
            </div>
          </Section>
        </div>

        <UsageGuide
  className="mt-12"
  importCode={`import Accordion from '@/components/ui/Accordion';`}
  propsCode={`type AccordionProps = {
  title: string;
  children?: React.ReactNode;
  open?: boolean; // controlled open state
  defaultOpen?: boolean; // initial open state
  className?: string;
};`}
  examplesCode={`{/* Simple Accordion */} 
<Accordion title="Section 1">
  <p>Content for section 1</p>
</Accordion>

{/* Controlled Accordion */} 
<Accordion title="Section 2" open={isOpen}>
  <p>Content for section 2</p>
</Accordion>

{/* Default Open */} 
<Accordion title="Section 3" defaultOpen>
  <p>Content for section 3</p>
</Accordion>

{/* Custom Styled Accordion */} 
<Accordion title="Section 4" className="bg-gray-100 rounded-lg shadow-md p-4">
  <p>Custom styled content</p>
</Accordion>`}
/>


        {/* Features Section */}
        <FeaturesItem
          title="✨ Features"
          description="What makes this accordion component special"
          className="mt-8"
          features={[
            {
              icon: "🎨",
              title: "Fully Customizable",
              description:
                "Control open state, icons, animations, and content styling",
            },
            {
              icon: "⚡",
              title: "TypeScript Ready",
              description:
                "Fully typed with TypeScript for better development experience",
            },
            {
              icon: "🎯",
              title: "Accessible",
              description:
                "Built with accessibility in mind, supports keyboard navigation",
            },
          ]}
        />
      </div>
    </div>
  );
}
