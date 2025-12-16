import { Card, CardContent } from "@/components/card";
import { CheckCircle } from "lucide-react";
import React from "react";

function Process() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title !mb-0">
            Our <span className="text-primary">Omnichannel</span> Marketing
            Process
          </h2>
          <h3 className="my-4 md:my-6">
            A systematic approach to maximize your marketing ROI and drive
            sustainable growth
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {[
            {
              icon: (
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ),
              title: "Strategy Development",
              subtitle: "We create a custom plan to maximize leads and sales.",
              items: [
                "Consultation: Align with your goals",
                "Audience Profiling: Identify your ideal customers",
                "Messaging Strategy: Craft targeted messaging",
                "Market Insights: Discover growth opportunities",
                "TAM Analysis: Estimate your market size",
                "Channel Review: Find gaps & opportunities",
                "Collaboration: Ensure seamless sales & marketing alignment",
              ],
            },
            {
              icon: (
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
              title: "Multi-Channel Execution",
              subtitle:
                "We implement strategies across the best-performing channels.",
              items: [
                "ABM: Target key accounts with precision",
                "Lead & Demand Generation: Build interest & momentum",
                "Content Syndication: Expand your content's reach",
                "Digital Ads: High-impact, targeted advertising",
                "Email Marketing: Personalized campaigns that convert",
              ],
            },
            {
              icon: (
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              title: "Audience Engagement",
              subtitle:
                "We nurture leads with relevant messaging to move them through the funnel.",
              items: [
                "Intent Data: Identify prospects ready to buy",
                "Retargeting & Follow-Ups: Keep leads engaged",
                "Sales Enablement: Equip your team with conversion tools",
              ],
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ),
              title: "Conversion & Growth",
              subtitle: "We turn leads into sales opportunities.",
              items: [
                "Appointment Setting: Book meetings with decision-makers",
                "Multi-Touch Follow-Ups: Engage prospects across calls, emails, and LinkedIn",
                "Sales Assets: Provide case studies, white papers, and sales decks to close deals",
              ],
            },
          ].map((process, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-500 border-2 border-primary animate-fade-in-up group hover:border-primary/30"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl font-bold text-white">
                    {process.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{process.title}</h3>
                    <p className="!font-semibold text-primary">
                      {process.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {process.items.map((item, itemIndex) => {
                    const [beforeColon, afterColon] = item.split(/:(.+)/);
                    return (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong>{beforeColon}:</strong> {afterColon?.trim()}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
