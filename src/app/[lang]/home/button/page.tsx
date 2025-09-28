"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ButtonExample() {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [isLiked, setIsLiked] = useState(false);

  // State برای Playground
  const [playgroundConfig, setPlaygroundConfig] = useState({
    variant: "primary" as const,
    size: "md" as const,
    text: "Custom Button",
    withIcon: false,
    iconPosition: "left" as const,
    disabled: false,
    loading: false,
    fullWidth: false,
    customClass: "",
  });

  const handleLoadingClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // تابع برای تولید کد بر اساس تنظیمات
  const generatePlaygroundCode = () => {
    const {
      variant,
      size,
      text,
      withIcon,
      iconPosition,
      disabled,
      loading,
      fullWidth,
      customClass,
    } = playgroundConfig;

    let code = `<Button\n`;
    code += `  variant="${variant}"\n`;
    code += `  size="${size}"\n`;

    if (withIcon) {
      code += `  icon="⭐"\n`;
      code += `  iconPosition="${iconPosition}"\n`;
    }

    if (disabled) code += `  disabled={${disabled}}\n`;
    if (loading) code += `  loading={${loading}}\n`;
    if (fullWidth) code += `  fullWidth={${fullWidth}}\n`;
    if (customClass) code += `  className="${customClass}"\n`;

    code += `>\n`;
    code += `  ${text}\n`;
    code += `</Button>`;

    return code;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Button Component
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A highly customizable and flexible button component built with
            React, TypeScript, and Tailwind CSS
          </p>
        </div>

        {/* Playground Section */}
        <Section
          title="🎮 Button Playground"
          description="Experiment with different button configurations in real-time"
          className="mb-12"
          fullWidth
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Configuration
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Variant */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Variant
                  </label>
                  <select
                    value={playgroundConfig.variant}
                    onChange={(e) =>
                      setPlaygroundConfig((prev) => ({
                        ...prev,
                        variant: e.target.value as any,
                      }))
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                {/* Size */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Size
                  </label>
                  <select
                    value={playgroundConfig.size}
                    onChange={(e) =>
                      setPlaygroundConfig((prev) => ({
                        ...prev,
                        size: e.target.value as any,
                      }))
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">XL</option>
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
                  value={playgroundConfig.text}
                  onChange={(e) =>
                    setPlaygroundConfig((prev) => ({
                      ...prev,
                      text: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter button text..."
                />
              </div>

              {/* Icon Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={playgroundConfig.withIcon}
                      onChange={(e) =>
                        setPlaygroundConfig((prev) => ({
                          ...prev,
                          withIcon: e.target.checked,
                        }))
                      }
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      With Icon
                    </span>
                  </label>
                </div>

                {playgroundConfig.withIcon && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Icon Position
                    </label>
                    <select
                      value={playgroundConfig.iconPosition}
                      onChange={(e) =>
                        setPlaygroundConfig((prev) => ({
                          ...prev,
                          iconPosition: e.target.value as any,
                        }))
                      }
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                )}
              </div>

              {/* States */}
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={playgroundConfig.disabled}
                    onChange={(e) =>
                      setPlaygroundConfig((prev) => ({
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
                    checked={playgroundConfig.loading}
                    onChange={(e) =>
                      setPlaygroundConfig((prev) => ({
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
                    checked={playgroundConfig.fullWidth}
                    onChange={(e) =>
                      setPlaygroundConfig((prev) => ({
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

              {/* Custom Class */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Custom CSS Classes
                </label>
                <input
                  type="text"
                  value={playgroundConfig.customClass}
                  onChange={(e) =>
                    setPlaygroundConfig((prev) => ({
                      ...prev,
                      customClass: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., rounded-full shadow-lg"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Add custom Tailwind classes
                </p>
              </div>
            </div>

            {/* Preview & Code */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Live Preview
                </h3>
                <div className="bg-slate-50 rounded-xl p-8 border-2 border-dashed border-slate-200 min-h-[200px] flex items-center justify-center">
                  <Button
                    variant={playgroundConfig.variant}
                    size={playgroundConfig.size}
                    disabled={playgroundConfig.disabled}
                    loading={playgroundConfig.loading}
                    fullWidth={playgroundConfig.fullWidth}
                    icon={playgroundConfig.withIcon ? "⭐" : undefined}
                    iconPosition={playgroundConfig.iconPosition}
                    className={playgroundConfig.customClass}
                  >
                    {playgroundConfig.text}
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Generated Code
                </h3>
                <CodeBlock code={generatePlaygroundCode()} />
              </div>
            </div>
          </div>
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
            </div>
          </Section>
        </div>

        {/* Usage Section */}
        <Section
          title="📚 Complete Usage Guide"
          description="Import and usage examples"
          className="mt-12"
          fullWidth
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Import</h3>
              <CodeBlock
                code={`import Button from '@/components/ui/Button';`}
              />

              <h3 className="text-lg font-semibold text-slate-800 mt-6">
                Basic Props
              </h3>
              <CodeBlock
                code={`type ButtonProps = {
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
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Quick Examples
              </h3>
              <CodeBlock
                code={`{/* Most common usage */}
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
</Button>`}
              />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

// کامپوننت Section
function Section({
  title,
  description,
  children,
  codeExample,
  fullWidth = false,
  className = "",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  codeExample?: string;
  fullWidth?: boolean;
  className?: string;
}) {
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

// کامپوننت CodeBlock
function CodeBlock({ code }: { code: string }) {
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
