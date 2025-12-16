import React from "react";

const columns = [
  {
    key: "omni",
    title: "BISSBAY's Omnichannel",
    accent: "from-orange-100 to-orange-50",
    text: "text-orange-700",
    badge: "Industry-leading",
  },
  {
    key: "multi",
    title: "Multichannel",
    accent: "from-blue-50 to-blue-25",
    text: "text-slate-700",
    badge: "Partial",
  },
  {
    key: "single",
    title: "Single-Channel",
    accent: "from-slate-50 to-white",
    text: "text-slate-700",
    badge: "Limited",
  },
];

const data = [
  {
    feature: "Channel coverage",
    omni:
      "Unified orchestration across email, LinkedIn, content, and outbound so marketing and sales move together.",
    multi:
      "Channels run independently with light coordination; impact varies by team.",
    single: "One channel at a time (e.g., only email or LinkedIn outreach).",
  },
  {
    feature: "Customer experience",
    omni:
      "Consistent, personalized engagement across touchpoints; +25% response and retention lift.",
    multi:
      "Better reach but inconsistent journeys and messaging across channels.",
    single: "Fragmented and inconsistent communication for buyers.",
  },
  {
    feature: "Qualified yearly opportunities",
    omni: "100–400 decision-maker meetings and marketing-qualified leads.",
    multi: "60–100 leads, often mid‑funnel and slower to advance.",
    single: "Fewer than 60 qualified leads, typically early stage.",
  },
  {
    feature: "Pipeline growth",
    omni: "50%–200% lift driven by unified targeting and nurture workflows.",
    multi: "Up to 50% lift depending on coordination quality.",
    single: "Little to no measurable pipeline impact.",
  },
  {
    feature: "Sales cycle length",
    omni: "Up to 25% shorter from cohesive nurturing and higher-quality intent.",
    multi: "5%–10% shorter with uneven execution.",
    single: "No noticeable change to cycle length.",
  },
  {
    feature: "Customer acquisition cost",
    omni: "20% lower through smarter targeting and integrated, data-driven plays.",
    multi: "About 10% lower with moderate efficiency gains.",
    single: "Higher acquisition costs per deal.",
  },
  {
    feature: "Conversion rates",
    omni: "Highest close rates; +25% conversions from qualified opportunities.",
    multi: "Moderate uplift, typically 5%–10%.",
    single: "Low lift, up to 5%.",
  },
  {
    feature: "Return on investment (ROI)",
    omni: "200%+ ROI powered by full-funnel omnichannel strategies.",
    multi: "Up to 150% ROI with partial cohesion.",
    single: "50%–100% ROI; results plateau quickly.",
  },
];

export default function OmniChannel() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-orange-50/20 to-white rounded-3xl border border-orange-100 shadow-lg shadow-orange-100/70 p-6 md:p-10">
      <div className="flex flex-col gap-6 md:gap-8 text-center">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center gap-2 self-center rounded-full border border-orange-200 bg-white/60 px-4 py-1 text-sm font-semibold text-orange-700 shadow-sm">
            Omnichannel vs. Multichannel vs. Single-Channel
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
            Why Omnichannel Outperforms Every Other Approach
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto">
            Your buyers touch 62+ interactions across 3+ channels. We align every
            touchpoint so marketing and sales move in lockstep and growth stays
            measurable.
          </p>
        </div>

        {/* Legend / headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((col) => (
            <div
              key={col.key}
              className={`rounded-2xl border border-orange-100 bg-gradient-to-br ${col.accent} px-4 py-3 text-left shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <p className={`text-sm font-semibold ${col.text}`}>
                  {col.title}
                </p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-orange-700 border border-orange-100">
                  {col.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison rows */}
        <div className="space-y-4">
          {data.map((row, idx) => (
            <div
              key={row.feature}
              className="rounded-2xl border border-orange-100/70 bg-white/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 md:p-5 border-b border-orange-100/80 bg-orange-50/40 rounded-t-2xl">
                <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">
                  {row.feature}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className={`p-4 md:p-5 border-t md:border-t-0 md:border-l border-orange-100/60 bg-gradient-to-br ${
                      col.key === "omni"
                        ? "from-orange-50 to-orange-50/40"
                        : col.key === "multi"
                        ? "from-blue-50/50 to-white"
                        : "from-slate-50/60 to-white"
                    }`}
                  >
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                      {row[col.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
