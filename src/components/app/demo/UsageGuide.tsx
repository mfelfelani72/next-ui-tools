import Section from "@/components/app/demo/Section";
import CodeBlock from "@/components/app/demo/CodeBlock";

type UsageGuideProps = {
  importCode: string;
  propsCode: string;
  examplesCode: string;
  className?: string;
  fullWidth?: boolean;
};

export default function UsageGuide({
  importCode,
  propsCode,
  examplesCode,
  className,
  fullWidth = true,
}: UsageGuideProps) {
  return (
    <Section
      title="📚 Complete Usage Guide"
      description="Import and usage examples"
      className={className}
      fullWidth={fullWidth}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-800">Import</h3>
          <CodeBlock code={importCode} />

          <h3 className="text-lg font-semibold text-slate-800 mt-6">
            Basic Props
          </h3>
          <CodeBlock code={propsCode} />
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-800">
            Quick Examples
          </h3>
          <CodeBlock code={examplesCode} />
        </div>
      </div>
    </Section>
  );
}
