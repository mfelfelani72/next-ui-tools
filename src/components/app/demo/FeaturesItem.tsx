import Section from "@/components/app/demo/Section";

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type FeaturesItemProps = {
  title: string;
  description: string;
  features: FeatureItem[];
  className?: string;
  fullWidth?: boolean;
};

export default function FeaturesItem({
  title,
  description,
  features,
  className,
  fullWidth = true,
}: FeaturesItemProps) {
  return (
    <Section
      title={title}
      description={description}
      className={className}
      fullWidth={fullWidth}
    >
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div className="text-2xl mb-2">{feature.icon}</div>
            <h4 className="font-semibold text-slate-800 mb-2">
              {feature.title}
            </h4>
            <p className="text-slate-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
