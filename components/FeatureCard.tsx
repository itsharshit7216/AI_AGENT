type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}