import { Target, Heart, Shield, Award } from "lucide-react";

import React from "react";
function Values() {
  const ValueCard = ({ icon: Icon, title, description, delay }) => {
    return (
      <div
        className={`flex flex-col group bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex flex-row gap-3 items-center mb-4 md:mb-6">
          <Icon className="medium-icon" />
          <h3 className="text-2xl font-bold text-bissbay-black group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-4">
          {description}
        </p>

        <div className="mt-auto w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="p-0 md:p-6 !bg-gray-50">
      <div className="text-center">
        <h2>
          Our Core Values
        </h2>
        <h3 className="text-xl my-4 md:my-6 text-gray-600">
          These principles guide everything we do and define who we are as a
          company.
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <ValueCard
          icon={Target}
          title="Growth"
          description="We’re curious learners and active doers. At BISSBAY, we value knowledge-sharing, constructive feedback, and decisive action. Our team avoids delays and long-winded meetings because we believe in moving fast and growing faster."
          delay={0}
        />
        <ValueCard
          icon={Heart}
          title="Honesty"
          description="We lead with transparency and integrity. Trust is the foundation of everything we build internally and with our clients. We own our missteps, learn from them, and turn them into stepping stones for future success. "
          delay={200}
        />
        <ValueCard
          icon={Shield}
          title="Reliability"
          description="Everyone at BISSBAY is accountable. No matter the role, we take ownership of our actions and outcomes. With a passion-fueled can-do attitude, we stay focused, adapt quickly, and deliver consistently even when the stakes are high."
          delay={400}
        />
        <ValueCard
          icon={Award}
          title="Quality"
          description="Excellence is not optional it’s our standard. We set SMART goals, uphold the highest standards, and go the extra mile to deliver results that matter. Through continuous improvement, we ensure that quality never stands still."
          delay={600}
        />
      </div>
    </div>
  );
}

export default Values;
