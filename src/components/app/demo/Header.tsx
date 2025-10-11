type DemoHeaderProps = {
  title: string;
  description: string;
};

export default function DemoHeader({ title, description }: DemoHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
