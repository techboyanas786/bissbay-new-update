import React from "react";
import { Card, CardContent } from "@/components/FunnelComponent/card";
import { CheckCircle } from "lucide-react";
export const Benefits = () => {
  const benefits = [
    {
      title: "Aligns with the Buyer's Journey",
      description: "Tailors your approach to match the natural progression of your prospects."
    },
    {
      title: "Optimizes Your Marketing Strategy",
      description: "Ensures resources are focused on the most effective channels and tactics."
    },
    {
      title: "Increases Conversion Rates",
      description: "Streamlines the process to convert prospects into loyal customers."
    }
  ];

  return (
    <section className="animate-on-scroll container mx-auto p-4 lg:p-6 px-0 md:px-6">
      <h2 className="section-title text-center">
        Key Benefits of the<span className="text-primary"> Marketing </span>and Sales Funnel
      </h2>
      
      <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
        {benefits.map((benefit, index) => (
          <Card 
            key={index}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="!h-1.5 bg-[rgb(255,66,0)]"></div>
            <CardContent className="!p-4 md:!p-6">
              <div className="flex gap-3 items-center mb-2">
                <CheckCircle className="medium-icon" />
                <h5 className="!text-[#1F2937]">{benefit.title}</h5>
              </div>
              <p className="text-left">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
