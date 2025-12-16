import React from "react";

function Hero() {
  return (
    <section>
        <div animation="fade-in-up" delay={200}>
          <h1 className="text-center">
            About{" "}
            <span className="text-primary relative">
              Us
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-red-600 rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
          </h1>
        </div>

        <div animation="fade-in-up" delay={400}>
          <h2 className="text-center my-4 md:my-6"> Your success is our mission, and we’re here to help you achieve it. </h2>
          <p className="text-xl !text-center lg:text-2xl text-gray-700 mx-auto leading-relaxed">
            At BISSBAY, we’re more than just a group of companies. We’re a
            growth-driven network where ambition meets execution. Since 2017,
            we’ve empowered both talent and clients to transform potential into
            measurable results. Our journey is built on collaboration,
            innovation, and a shared passion for progress. Whether you're a
            business seeking measurable growth or a professional striving to
            make an impact, BISSBAY is where goals take shape and success
            becomes shared.
          </p>
        </div>
    </section>
  );
}

export default Hero;
