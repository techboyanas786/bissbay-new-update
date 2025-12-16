import React from "react";
import { CheckCircle } from "lucide-react";

const Scalable = () => {
  const benefits = [
    "Full-Funnel Strategy: From awareness to conversion, we create seamless buyer journeys that guide prospects through every stage.",
    "Expert Execution: Proven growth strategies tailored to your enterprise needs with dedicated specialists.",
    "Sales & Marketing Alignment: Data-driven insights that drive real revenue impact and perfect team coordination",
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
      <div className="order-1 lg:order-2 transition-all duration-1000 delay-300">
        <div className="text-center lg:text-left transition-all duration-1000">
          <h2 className="sm:text-left text-center !section-title !mb-0">
            A Scalable, Predictable
            <span className="text-primary"> Demand Engine</span>
          </h2>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-semibold text-black my-4 md:my-6 font-quicksand">
            Bissbay functions as an extension of your marketing team,
            delivering expert strategies that increase pipeline velocity.
          </h3>
          <p className="text-xl max-w-3xl text-gray-700 mb-4 md:mb-6 font-quicksand leading-relaxed">
            We challenge norms, drive innovation, and align with your
            leadership.
            <br className="hidden sm:block" /> We deliver more than ideas.
            We provide strategies and execution that maximize ROI
          </p>
        </div>
        <div className="space-y-4">
          {benefits.map((benefit, index) => {
            const [beforeDash, afterDash] = benefit.split(":");
            return (
              <div
                key={index}
                className={`flex items-start hover:scale-102 card space-x-4 transition-all duration-300 delay-${index * 100
                  }`}
              >
                <CheckCircle className="medium-icon" />
                <p className="text-gray-700 font-quicksand">
                  <strong>{beforeDash} </strong>- <br className="sm:hidden block" /> {afterDash}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="group flex items-center justify-center order-2 md:order-1">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
          <img
            className="w-full h-full"
            src="/images/EnterprisesScalable.jpeg"
            alt="Enterprise Scalable"
          />
        </div>
      </div>
    </section>
  );
};

export default Scalable;
