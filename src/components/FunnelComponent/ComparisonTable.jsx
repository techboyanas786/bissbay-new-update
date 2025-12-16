
import React from "react";

export const ComparisonTable = () => {
  return (
    <section className="mb-24 animate-on-scroll">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "rgb(255,66,0)" }}>
        Marketing Funnel vs. Sales Funnel: Key Differences
      </h2>
      
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-xl shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[rgb(255,66,0)] text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Aspect
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Marketing Funnel
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Sales Funnel
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    aspect: "Purpose",
                    marketing: "Attracts and nurtures leads",
                    sales: "Converts leads into paying customers"
                  },
                  {
                    aspect: "Focus",
                    marketing: "Brand awareness, education, and engagement",
                    sales: "Lead qualification, decision-making, and closing deals"
                  },
                  {
                    aspect: "Stages",
                    marketing: "Awareness → Interest → Consideration",
                    sales: "Consideration → Intent → Purchase → Retention"
                  },
                  {
                    aspect: "Activities",
                    marketing: "Content marketing, SEO, paid ads, webinars, social media",
                    sales: "Lead nurturing, follow-ups, demos, proposals, negotiations"
                  },
                  {
                    aspect: "Goal",
                    marketing: "Generate demand and educate prospects",
                    sales: "Turn prospects into loyal customers"
                  },
                  {
                    aspect: "Metrics",
                    marketing: "Website traffic, engagement, lead generation",
                    sales: "Conversion rates, sales closed, revenue growth"
                  }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                      {row.aspect}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {row.marketing}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {row.sales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
