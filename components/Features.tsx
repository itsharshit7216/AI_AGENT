import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-white py-20">

      <h2 className="mb-14 text-center text-4xl font-bold">
        Why Choose AI Invest?
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 px-8 md:grid-cols-3">

        <FeatureCard
          icon="📈"
          title="Stock Analysis"
          description="Analyze company fundamentals and financial performance instantly."
        />

        <FeatureCard
          icon="🤖"
          title="AI Recommendation"
          description="Receive AI-generated Buy, Hold or Sell suggestions."
        />

        <FeatureCard
          icon="📰"
          title="News Summary"
          description="Summarize company news with artificial intelligence."
        />

      </div>

    </section>
  );
}