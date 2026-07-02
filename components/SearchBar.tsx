"use client";

import { useState } from "react";
import AnalysisCard from "./AnalysisCard";
import StockCard from "./StockCard";

type AnalysisResult = {
  company: string;
  overview: string;
  strengths: string[];
  risks: string[];
  recommendation: string;
  score: number;
};
export default function SearchBar() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!company.trim()) {
      alert("Please enter a company name.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.result);
        setStock(data.stock);
      } else {
        setResult(null);
        setStock(null);
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult(null);
      alert("Error connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-8 text-center text-4xl font-bold">
          Search Any Company
        </h2>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Tesla, Apple, Microsoft..."
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-500"
          />

          <button
            onClick={handleSearch}
            className="rounded-lg bg-blue-600 px-8 py-3 text-white"
          >
            Search
          </button>

        </div>

        {loading && (
          <p className="mt-8 text-center text-blue-600">
            Groq is analyzing...
          </p>
        )}

        {stock && <StockCard stock={stock} />}

        {result && <AnalysisCard result={result} />}

      </div>
    </section>
  );
}