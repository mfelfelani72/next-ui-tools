// app/button-demo/page.tsx
"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/app/demo/Section";
import ButtonPlayground from "@/components/app/demo/button/ButtonPlayground";
import CodeBlock from "@/components/app/demo/CodeBlock";
import { useState } from "react";
import DemoHeader from "@/components/app/demo/Header";
import FeaturesItem from "@/components/app/demo/FeaturesItem";
import UsageGuide from "@/components/app/demo/UsageGuide";

export default function ButtonDemoPage() {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [isLiked, setIsLiked] = useState(false);

  const handleLoadingClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Header */}
        <DemoHeader
          title="Button Component"
          description="A highly customizable and flexible button component built with React, TypeScript, and Tailwind CSS"
        />

        {/* Playground Section */}
        <Section
          title="🎮 Button Playground"
          description="Experiment with different button configurations in real-time"
          className="mb-12"
          fullWidth
        >
          <ButtonPlayground />
        </Section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Section 1: Basic Variants */}
          <Section
            title="🎨 Basic Variants"
            description="All available button styles"
            codeExample={`{/* Primary Button */}
<Button variant="primary">
  Primary Button
</Button>

{/* Secondary Button */}
<Button variant="secondary">
  Secondary Button
</Button>

{/* Outline Button */}
<Button variant="outline">
  Outline Button
</Button>

{/* Danger Button */}
<Button variant="danger">
  Danger Button
</Button>`}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
            </div>
          </Section>

          {/* Section 2: Sizes */}
          <Section
            title="📏 Sizes"
            description="Different button sizes"
            codeExample={`{/* Small Button */}
<Button size="sm" variant="primary">
  Small
</Button>

{/* Medium Button */}
<Button size="md" variant="primary">
  Medium
</Button>

{/* Large Button */}
<Button size="lg" variant="primary">
  Large
</Button>

{/* Extra Large Button */}
<Button size="xl" variant="primary">
  XL
</Button>`}
          >
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Button size="sm" variant="primary">
                Small
              </Button>
              <Button size="md" variant="primary">
                Medium
              </Button>
              <Button size="lg" variant="primary">
                Large
              </Button>
              <Button size="xl" variant="primary">
                XL
              </Button>
            </div>
          </Section>

          {/* Section 3: With Icons */}
          <Section
            title="⭐ With Icons"
            description="Buttons with icon positioning"
            codeExample={`{/* Icon on left */}
<Button 
  icon="⭐" 
  iconPosition="left"
  variant="primary"
>
  Star Project
</Button>

{/* Icon on right */}
<Button 
  icon="➡️" 
  iconPosition="right"
  variant="outline"
>
  Continue
</Button>`}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <Button icon="⭐" iconPosition="left" variant="primary">
                Star
              </Button>
              <Button icon="➡️" iconPosition="right" variant="outline">
                Continue
              </Button>
              <Button icon="📧" iconPosition="left" variant="success">
                Send Email
              </Button>
              <Button icon="🔒" iconPosition="right" variant="danger">
                Secure Login
              </Button>
            </div>
          </Section>

          {/* Section 4: Icon Only Buttons */}
          <Section
            title="🎯 Icon Only"
            description="Buttons with only icons - perfect for actions"
            codeExample={`{/* Basic icon button */}
<Button 
  icon="🔔"
  title="Notifications"
  variant="outline"
/>

{/* Heart icon with custom variant */}
<Button 
  icon={isLiked ? "❤️" : "🤍"}
  title="Like"
  variant="icon"
  onClick={toggleLike}
/>

{/* Settings icon */}
<Button 
  icon="⚙️"
  title="Settings"
  variant="secondary"
/>`}
          >
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <Button icon="🔔" title="Notifications" variant="outline" />
              <Button
                icon={isLiked ? "❤️" : "🤍"}
                title="Like"
                variant="icon"
                onClick={toggleLike}
              />
              <Button icon="⚙️" title="Settings" variant="secondary" />
              <Button icon="🔍" title="Search" size="sm" variant="outline" />
              <Button icon="📱" title="Mobile" variant="primary" />
              <Button icon="💬" title="Chat" variant="success" />
            </div>
          </Section>

          {/* Section 5: States */}
          <Section
            title="⚡ States"
            description="Different button states"
            codeExample={`{/* Disabled state */}
<Button disabled variant="primary">
  Disabled
</Button>

{/* Loading state */}
<Button 
  loading={isLoading}
  onClick={handleClick}
  variant="primary"
>
  {isLoading ? 'Processing...' : 'Click Me'}
</Button>

{/* Loading with success */}
<Button 
  loading={isSaving}
  variant="success"
>
  {isSaving ? 'Saving...' : 'Save'}
</Button>`}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <Button disabled variant="primary">
                Disabled
              </Button>
              <Button
                loading={loadingStates.loading1}
                onClick={() => handleLoadingClick("loading1")}
                variant="primary"
              >
                {loadingStates.loading1 ? "Processing..." : "Click to Load"}
              </Button>
              <Button
                loading={loadingStates.loading2}
                onClick={() => handleLoadingClick("loading2")}
                variant="success"
              >
                {loadingStates.loading2 ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                loading={loadingStates.loading3}
                onClick={() => handleLoadingClick("loading3")}
                variant="danger"
              >
                {loadingStates.loading3 ? "Deleting..." : "Delete Item"}
              </Button>
            </div>
          </Section>

          {/* Section 6: Full Width */}
          <Section
            title="📱 Full Width"
            description="Full width button variations"
            codeExample={`{/* Basic full width */}
<Button fullWidth variant="primary">
  Full Width Button
</Button>

{/* Full width with icon */}
<Button 
  fullWidth 
  icon="🛒"
  variant="success"
>
  Add to Cart
</Button>

{/* Full width outline */}
<Button 
  fullWidth 
  variant="outline"
>
  Cancel
</Button>`}
            fullWidth
          >
            <div className="space-y-4">
              <Button fullWidth variant="primary">
                Full Width Button
              </Button>
              <Button fullWidth icon="🛒" variant="success">
                Add to Cart
              </Button>
              <Button fullWidth variant="outline">
                Cancel Order
              </Button>
              <Button fullWidth icon="🚀" variant="warning">
                Launch Project
              </Button>
            </div>
          </Section>

          {/* Section 7: Combined Examples */}
          <Section
            title="🎪 Combined Examples"
            description="Real-world button combinations"
            codeExample={`{/* Form actions */}
<div className="flex gap-3">
  <Button variant="outline">
    Cancel
  </Button>
  <Button 
    variant="primary" 
    loading={isSubmitting}
    icon="✅"
  >
    Submit Form
  </Button>
</div>

{/* Card actions */}
<div className="flex gap-2">
  <Button 
    icon="👁️" 
    variant="outline" 
    size="sm"
  >
    View
  </Button>
  <Button 
    icon="✏️" 
    variant="secondary" 
    size="sm"
  >
    Edit
  </Button>
  <Button 
    icon="🗑️" 
    variant="danger" 
    size="sm"
  >
    Delete
  </Button>
</div>`}
            fullWidth
          >
            <div className="space-y-6">
              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" fullWidth className="sm:flex-1">
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  loading={loadingStates.formSubmit}
                  onClick={() => handleLoadingClick("formSubmit")}
                  icon="✅"
                  fullWidth
                  className="sm:flex-1"
                >
                  Submit Form
                </Button>
              </div>

              {/* Card Actions */}
              <div className="flex gap-2 justify-center">
                <Button icon="👁️" variant="outline" size="sm">
                  View
                </Button>
                <Button icon="✏️" variant="secondary" size="sm">
                  Edit
                </Button>
                <Button icon="🗑️" variant="danger" size="sm">
                  Delete
                </Button>
              </div>

              {/* Social Actions */}
              <div className="flex gap-2 justify-center">
                <Button icon="👍" variant="outline" size="sm">
                  Like
                </Button>
                <Button icon="🔄" variant="outline" size="sm">
                  Share
                </Button>
                <Button icon="❤️" variant="outline" size="sm">
                  Save
                </Button>
              </div>
            </div>
          </Section>
        </div>

        {/* Usage Section */}
        <UsageGuide
          className="mt-12"
          importCode={`import Button from '@/components/ui/Button';`}
          propsCode={`type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | 
           "danger" | "success" | "warning" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  title?: string;
};`}
          examplesCode={`{/* Most common usage */} 
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

{/* Form submission */}
<Button type="submit" variant="success">
  Submit Form
</Button>

{/* Icon button */}
<Button 
  icon="❤️" 
  variant="icon"
  title="Add to favorites"
/>

{/* Loading state */}
<Button 
  loading={isLoading}
  variant="primary"
>
  {isLoading ? 'Loading...' : 'Save'}
</Button>

{/* Full width mobile button */}
<Button 
  fullWidth 
  icon="📱"
  variant="primary"
  size="lg"
>
  Download App
</Button>

{/* Button with custom styles */}
<Button 
  variant="primary"
  className="rounded-full shadow-lg hover:scale-105 transition-transform"
>
  Animated Button
</Button>`}
        />

        {/* Features Section */}

        <FeaturesItem
          title="✨ Features"
          description="What makes this button component special"
          className={"mt-8"}
          features={[
            {
              icon: "🎨",
              title: "Fully Customizable",
              description: "7 variants, 4 sizes, and full Tailwind CSS support",
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
                "Built with accessibility in mind, supporting keyboard navigation",
            },
          ]}
        />
      </div>
    </div>
  );
}
