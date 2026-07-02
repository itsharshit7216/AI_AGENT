export default function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center bg-gray-100 px-10">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          AI Investment Research Agent
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Analyze stocks, understand company fundamentals, summarize financial
          reports, and receive AI-powered investment insights—all in one place.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}