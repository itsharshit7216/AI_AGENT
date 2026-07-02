"use client";

import { useState } from "react";

type AnalysisResult = {
  company: string;
  ticker?: string;
  sector?: string;
  industry?: string;
  exchange?: string;
  country?: string;
  currency?: string;
  overview: string;
  investmentSummary?: string;
  businessModel?: string;
  marketPosition?: string;
  competitiveAdvantage?: string;
  growthDrivers?: string[];
  futureCatalysts?: string[];
  strengths?: string[];
  weaknesses?: string[];
  opportunities?: string[];
  threats?: string[];
  risks?: string[];
  financialHealth?: string;
  profitability?: string;
  valuation?: string;
  innovation?: string;
  managementQuality?: string;
  industryComparison?: string;
  macroEconomicImpact?: string;
  technicalOutlook?: string;
  shortTermOutlook?: string;
  longTermOutlook?: string;
  bullCase?: string;
  bearCase?: string;
  investmentRecommendation?: string;
  confidence?: number;
  score: number;
};

function Section({ title, children, accent }: { title: string; children: React.ReactNode; accent: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] bg-slate-50/95 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={isOpen}
      >
        <h3 className={`text-[1.15rem] font-black tracking-wide ${accent}`}>{title}</h3>
        <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
          {isOpen ? "Hide details" : "Show details"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-4 max-h-[1600px] opacity-100" : "mt-0 max-h-0 opacity-0"}`}
      >
        <div className="text-[1rem] leading-8 text-slate-800">{children}</div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {(items ?? []).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function AnalysisCard({ result }: { result: AnalysisResult }) {
  return (
    <div className="mt-10 rounded-[28px] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 text-slate-900 shadow-[0_16px_50px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/80">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">AI Investment Research</p>
          <h2 className="mt-2 text-4xl font-black text-slate-900">{result.company}</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-[1rem] text-slate-700">
            {result.ticker ? <span className="rounded-full bg-slate-900 px-3 py-1.5 text-white">{result.ticker}</span> : null}
            {result.sector ? <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-800 ring-1 ring-slate-200">{result.sector}</span> : null}
            {result.industry ? <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-800 ring-1 ring-slate-200">{result.industry}</span> : null}
            {result.exchange ? <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-800 ring-1 ring-slate-200">{result.exchange}</span> : null}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 px-5 py-4 text-center shadow-inner text-white ring-1 ring-slate-800">
          <p className="text-base font-semibold text-cyan-300">Investment Score</p>
          <p className="mt-1 text-4xl font-black text-white">{result.score}/10</p>
          <p className="mt-1 text-sm font-medium text-slate-200">Confidence {result.confidence ?? 0}%</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Section title="Executive Summary" accent="text-sky-700">
          <p>{result.overview}</p>
        </Section>

        <Section title="Investment Summary" accent="text-emerald-700">
          <p>{result.investmentSummary}</p>
        </Section>

        <Section title="Business Model" accent="text-violet-700">
          <p>{result.businessModel}</p>
        </Section>

        <Section title="Market Position" accent="text-amber-700">
          <p>{result.marketPosition}</p>
        </Section>

        <Section title="Competitive Advantage" accent="text-cyan-700">
          <p>{result.competitiveAdvantage}</p>
        </Section>

        <Section title="Growth Drivers" accent="text-emerald-700">
          <BulletList items={result.growthDrivers ?? []} />
        </Section>

        <Section title="Future Catalysts" accent="text-pink-700">
          <BulletList items={result.futureCatalysts ?? []} />
        </Section>

        <Section title="Strengths" accent="text-emerald-700">
          <BulletList items={result.strengths ?? []} />
        </Section>

        <Section title="Weaknesses" accent="text-orange-700">
          <BulletList items={result.weaknesses ?? []} />
        </Section>

        <Section title="Opportunities" accent="text-cyan-700">
          <BulletList items={result.opportunities ?? []} />
        </Section>

        <Section title="Threats" accent="text-rose-700">
          <BulletList items={result.threats ?? []} />
        </Section>

        <Section title="Risk Analysis" accent="text-red-700">
          <BulletList items={result.risks ?? []} />
        </Section>

        <Section title="Financial Health" accent="text-sky-700">
          <p>{result.financialHealth}</p>
        </Section>

        <Section title="Profitability" accent="text-emerald-700">
          <p>{result.profitability}</p>
        </Section>

        <Section title="Valuation" accent="text-amber-700">
          <p>{result.valuation}</p>
        </Section>

        <Section title="Innovation" accent="text-violet-700">
          <p>{result.innovation}</p>
        </Section>

        <Section title="Management Quality" accent="text-cyan-700">
          <p>{result.managementQuality}</p>
        </Section>

        <Section title="Industry Comparison" accent="text-sky-700">
          <p>{result.industryComparison}</p>
        </Section>

        <Section title="Macro Impact" accent="text-slate-700">
          <p>{result.macroEconomicImpact}</p>
        </Section>

        <Section title="Technical Outlook" accent="text-amber-700">
          <p>{result.technicalOutlook}</p>
        </Section>

        <Section title="Short-Term Outlook" accent="text-emerald-700">
          <p>{result.shortTermOutlook}</p>
        </Section>

        <Section title="Long-Term Outlook" accent="text-emerald-700">
          <p>{result.longTermOutlook}</p>
        </Section>

        <Section title="Bull Case" accent="text-emerald-700">
          <p>{result.bullCase}</p>
        </Section>

        <Section title="Bear Case" accent="text-rose-700">
          <p>{result.bearCase}</p>
        </Section>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-900 px-6 py-6 text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Recommendation</p>
            <p className="mt-2 text-3xl font-black text-white">{result.investmentRecommendation}</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-5 py-4 text-base text-slate-100 ring-1 ring-white/10">
            <p>Confidence: <span className="font-semibold text-white">{result.confidence ?? 0}%</span></p>
            <p>Score: <span className="font-semibold text-white">{result.score}/10</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}