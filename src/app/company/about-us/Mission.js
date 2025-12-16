import Button from "@/components/Button";
import React from "react";

function Mission() {

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-start">
        <div className="p-4 md:p-6 card h-auto md:h-full card undefined hover:border-b-8 border-b-8 border-t-8 border-white transition-all duration-300 hover:border-t-8 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in delay-1">
          <h2 className="relative text-4xl text-center lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Our Mission
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[45%] md:w-[24%] h-1 bg-primary"></span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="!font-semibold">
              To deliver powerful, results-driven growth solutions that fuel business success and long-term scalability.
            </p>
            <p>
              This isn’t just a statement; it’s our unwavering commitment. At
              BISSBAY, we go beyond conventional strategies to create
              measurable impact that fuels sustainable success. Our
              innovative, results-driven approach empowers businesses not only
              to grow, but to thrive in an ever-evolving marketplace
            </p>
          </div>
        </div>
        <div className="p-4 md:p-6 card h-auto md:h-full card undefined hover:border-b-8 border-b-8 border-t-8 border-white transition-all duration-300 hover:border-t-8 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in delay-1">
          <h2 className="text-4xl relative text-center lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Our Vision
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[45%] md:w-[24%] h-1 bg-primary"></span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="!font-semibold">
              To be internationally recognized as a leading marketing firm, renowned for innovation, dedication, and delivering impactful growth.
            </p>
            <p>
              We envision a world where sustainable business growth is within
              reach for every organization. From startups to global
              enterprises, we believe every company deserves the opportunity
              to scale without limitations. By eliminating common growth
              barriers and delivering data-driven solutions, cutting-edge
              technology, and expert strategies, BISSBAY is committed to
              making scalable, responsible growth a reality.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 md:space-y-6 mt-4 md:mt-6">
        <h2>We’re here to help you grow smarter</h2>
        <h4 className="!text-[#5C6371]">BISSBAY is proud to be a trusted partner, where intelligence meets connections and clients’ ambitions turn into measurable success.</h4>
        <Button label="Let's Connect" link="/contact-us" />
      </div>
    </section>
  );
}

export default Mission;
