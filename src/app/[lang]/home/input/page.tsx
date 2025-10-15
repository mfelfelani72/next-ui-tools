"use client"; // ✅ must be exactly like this

import { useState, ChangeEvent } from "react";
import {
  InputText,
  InputEmail,
  InputMobile,
  InputPassword,
  InputRePassword,
  InputTextArea,
  InputSearch,
  InputRadioButton,
  InputToggle,
  InputDarkLight,
} from "@/components/ui/Input";

type ComponentExample = {
  name: string;
  icon: string;
  description: string;
  component: React.ReactNode;
  code: string;
  props: Record<string, any>;
};

export default function InputPlayground() {
  // State for each input component
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [mobileValue, setMobileValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rePasswordValue, setRePasswordValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [radioValue, setRadioValue] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);
  
  // State for playground controls
  const [selectedComponent, setSelectedComponent] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // State for customization
  const [showLabels, setShowLabels] = useState(true);
  const [showErrors, setShowErrors] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const components: ComponentExample[] = [
    {
      name: "Text Input",
      icon: "📝",
      description: "Basic text input with clear functionality",
      component: (
        <InputText
          id="text-example"
          label={showLabels ? "Username" : undefined}
          placeholder="Enter your username"
          value={textValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value)}
          disabled={disabled}
          onClear={() => setTextValue("")}
        />
      ),
      code: `import { InputText } from "@/components/ui/Input";

const [value, setValue] = useState("");

<InputText
  id="username"
  label="Username"
  placeholder="Enter your username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue("")}
/>`,
      props: {
        value: textValue,
        hasLabel: showLabels,
        isDisabled: disabled,
      },
    },
    {
      name: "Email Input",
      icon: "✉️",
      description: "Email input with validation",
      component: (
        <InputEmail
          id="email-example"
          label={showLabels ? "Email Address" : undefined}
          placeholder="john@example.com"
          value={emailValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
          variant="auth"
          error={showErrors ? "error_invalid_email" : undefined}
          disabled={disabled}
          onClear={() => setEmailValue("")}
        />
      ),
      code: `import { InputEmail } from "@/components/ui/Input";

const [email, setEmail] = useState("");

<InputEmail
  id="email"
  label="Email Address"
  placeholder="john@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  variant="auth"
  error={error}
  onClear={() => setEmail("")}
/>`,
      props: {
        value: emailValue,
        hasLabel: showLabels,
        hasError: showErrors,
        isDisabled: disabled,
      },
    },
    {
      name: "Mobile Input",
      icon: "📱",
      description: "Phone number input with pattern validation",
      component: (
        <InputMobile
          id="mobile-example"
          label={showLabels ? "Phone Number" : undefined}
          placeholder="+1 (555) 000-0000"
          value={mobileValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMobileValue(e.target.value)}
          error={showErrors ? "error_invalid_mobile" : undefined}
          disabled={disabled}
          onClear={() => setMobileValue("")}
        />
      ),
      code: `import { InputMobile } from "@/components/ui/Input";

const [mobile, setMobile] = useState("");

<InputMobile
  id="mobile"
  label="Phone Number"
  placeholder="+1 (555) 000-0000"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  error={error}
  onClear={() => setMobile("")}
/>`,
      props: {
        value: mobileValue,
        hasLabel: showLabels,
        hasError: showErrors,
        isDisabled: disabled,
      },
    },
    {
      name: "Password Input",
      icon: "🔒",
      description: "Secure password input with visibility toggle",
      component: (
        <InputPassword
          id="password-example"
          label={showLabels ? "Password" : undefined}
          placeholder="Enter your password"
          value={passwordValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
          variant="change_password"
          error={showErrors ? "error_min_length_password" : undefined}
          disabled={disabled}
          onClear={() => setPasswordValue("")}
        />
      ),
      code: `import { InputPassword } from "@/components/ui/Input";

const [password, setPassword] = useState("");

<InputPassword
  id="password"
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  variant="change_password"
  error={error}
  onClear={() => setPassword("")}
/>`,
      props: {
        value: passwordValue,
        hasLabel: showLabels,
        hasError: showErrors,
        isDisabled: disabled,
      },
    },
    {
      name: "Confirm Password",
      icon: "🔐",
      description: "Password confirmation with matching validation",
      component: (
        <InputRePassword
          id="repassword-example"
          label={showLabels ? "Confirm Password" : undefined}
          passwordFieldId="password-example"
        />
      ),
      code: `import { InputRePassword } from "@/components/ui/Input";

<InputRePassword
  id="confirm-password"
  label="Confirm Password"
  passwordFieldId="password"
/>`,
      props: {
        hasLabel: showLabels,
      },
    },
    {
      name: "TextArea",
      icon: "📄",
      description: "Multi-line text input for longer content",
      component: (
        <InputTextArea
          id="textarea-example"
          label={showLabels ? "Description" : undefined}
          placeholder="Tell us about yourself..."
          value={textAreaValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextAreaValue(e.target.value)}
          disabled={disabled}
          rows={4}
        />
      ),
      code: `import { InputTextArea } from "@/components/ui/Input";

const [text, setText] = useState("");

<InputTextArea
  id="description"
  label="Description"
  placeholder="Tell us about yourself..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  rows={4}
/>`,
      props: {
        value: textAreaValue,
        hasLabel: showLabels,
        isDisabled: disabled,
      },
    },
    {
      name: "Search",
      icon: "🔍",
      description: "Search input with icon and parameter",
      component: (
        <InputSearch
          id="search-example"
          placeholder="Search products..."
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          param="Products"
          disabled={disabled}
        />
      ),
      code: `import { InputSearch } from "@/components/ui/Input";

const [search, setSearch] = useState("");

<InputSearch
  id="search"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  param="Products"
/>`,
      props: {
        value: searchValue,
        isDisabled: disabled,
      },
    },
    {
      name: "Radio Group",
      icon: "⭕",
      description: "Radio button group for single selection",
      component: (
        <div className="flex gap-6">
          {["Option A", "Option B", "Option C"].map((option, index) => (
            <div key={index} className="flex items-center gap-3">
              <InputRadioButton
                id="radio-example"
                name="options"
                index={index}
                checked={radioValue === index}
                onSortChange={setRadioValue}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
            </div>
          ))}
        </div>
      ),
      code: `import { InputRadioButton } from "@/components/ui/Input";

const [selected, setSelected] = useState(0);

{options.map((option, index) => (
  <InputRadioButton
    key={index}
    id="radio"
    name="options"
    index={index}
    checked={selected === index}
    onSortChange={setSelected}
  />
))}`,
      props: {
        selected: radioValue,
      },
    },
    {
      name: "Toggle Switch",
      icon: "🎚️",
      description: "Toggle switch for boolean states",
      component: (
        <div className="flex items-center gap-4">
          <InputToggle
            id="toggle-example"
            checked={toggleValue}
            onStatusChange={setToggleValue}
            disabled={disabled}
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Notifications are {toggleValue ? "enabled" : "disabled"}
          </span>
        </div>
      ),
      code: `import { InputToggle } from "@/components/ui/Input";

const [isActive, setIsActive] = useState(false);

<InputToggle
  id="toggle"
  checked={isActive}
  onStatusChange={setIsActive}
/>`,
      props: {
        value: toggleValue,
        isDisabled: disabled,
      },
    },
    {
      name: "Theme Toggle",
      icon: "🌓",
      description: "Dark/Light theme switcher",
      component: <InputDarkLight />,
      code: `import { InputDarkLight } from "@/components/ui/Input";

<InputDarkLight />`,
      props: {},
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob dark:bg-purple-600"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 dark:bg-yellow-600"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 dark:bg-pink-600"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-6">
            <span className="text-4xl">🎨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Input Components
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Beautiful, accessible, and fully-featured input components for your next project
          </p>
        </div>

        {/* Controls Panel */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Playground Controls
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <label className="relative flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl cursor-pointer hover:shadow-md transition-all group">
              <input
                type="checkbox"
                checked={showLabels}
                onChange={(e) => setShowLabels(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              />
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                Show Labels
              </span>
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </label>
            
            <label className="relative flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl cursor-pointer hover:shadow-md transition-all group">
              <input
                type="checkbox"
                checked={showErrors}
                onChange={(e) => setShowErrors(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              />
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                Show Errors
              </span>
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </label>
            
            <label className="relative flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl cursor-pointer hover:shadow-md transition-all group">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              />
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                Disable Inputs
              </span>
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
            </label>
          </div>
        </div>

        {/* Component Showcase */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
            {components.map((comp, index) => (
              <button
                key={index}
                onClick={() => setSelectedComponent(index)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 ${
                  selectedComponent === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="mr-2">{comp.icon}</span>
                {comp.name}
              </button>
            ))}
          </div>

          {/* Component Display */}
          <div className="p-8">
            {/* Component Info */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center text-5xl mb-4">
                {components[selectedComponent].icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {components[selectedComponent].name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {components[selectedComponent].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Preview Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    <span className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                    Live Preview
                  </h3>
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      showCode
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                    }`}
                  >
                    {showCode ? "Show Preview" : "Show Code </>"}
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 min-h-[250px] flex items-center justify-center border border-gray-200 dark:border-gray-700">
                  {!showCode ? (
                    <div className="w-full max-w-md">
                      {components[selectedComponent].component}
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="relative">
                        <pre className="bg-gray-900 dark:bg-black text-gray-100 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
                          <code className="language-jsx">{components[selectedComponent].code}</code>
                        </pre>
                        <button
                          onClick={() => handleCopy(components[selectedComponent].code, selectedComponent)}
                          className={`absolute top-4 right-4 px-4 py-2 rounded-lg font-medium text-xs transition-all transform hover:scale-105 ${
                            copiedIndex === selectedComponent
                              ? "bg-green-500 text-white"
                              : "bg-gray-700 hover:bg-gray-600 text-white"
                          }`}
                        >
                          {copiedIndex === selectedComponent ? "✓ Copied!" : "Copy Code"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Props & Info Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                  <span className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Component State
                </h3>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    {Object.entries(components[selectedComponent].props).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {key}
                        </span>
                        <span className="text-sm font-mono">
                          {typeof value === "boolean" ? (
                            <span className={`px-3 py-1.5 rounded-lg font-semibold ${
                              value 
                                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                                : "bg-gradient-to-r from-red-500 to-rose-600 text-white"
                            }`}>
                              {value.toString()}
                            </span>
                          ) : (
                            <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold">
                              {value || '""'}
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl border border-amber-200 dark:border-amber-800">
                  <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
                    <span className="text-xl">💡</span>
                    Pro Tips
                  </h4>
                  <ul className="text-sm text-amber-800 dark:text-amber-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">▸</span>
                      <span>Use controlled components with value and onChange</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">▸</span>
                      <span>Labels and error props are optional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">▸</span>
                      <span>Disable inputs with the disabled prop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">▸</span>
                      <span>onClear provides quick value reset</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: "🎨", 
              title: "Consistent Design", 
              desc: "All components styled with Tailwind CSS",
              gradient: "from-pink-500 to-rose-600"
            },
            { 
              icon: "⚡", 
              title: "High Performance", 
              desc: "Optimized with React hooks and refs",
              gradient: "from-yellow-500 to-orange-600"
            },
            { 
              icon: "📱", 
              title: "Fully Responsive", 
              desc: "Works perfectly on all devices",
              gradient: "from-green-500 to-emerald-600"
            },
            { 
              icon: "🌙", 
              title: "Dark Mode", 
              desc: "Built-in dark mode support",
              gradient: "from-purple-500 to-indigo-600"
            },
            { 
              icon: "✅", 
              title: "Form Validation", 
              desc: "Built-in validation patterns",
              gradient: "from-blue-500 to-cyan-600"
            },
            { 
              icon: "🔧", 
              title: "TypeScript", 
              desc: "100% type-safe with IntelliSense",
              gradient: "from-red-500 to-pink-600"
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 border border-gray-200 dark:border-gray-800"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              <div className="relative">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}