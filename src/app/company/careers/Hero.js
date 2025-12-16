import Image from "next/image";
import React from "react";
import careerHero from "../../../../public/images/CareerHero.png"
function Hero() {
  return (
    <>
      <div className="flex gap-0 md:gap-8 md:flex-row flex-col items-center justify-between">
        <div className="w-full flex-1 flex items-center justify-center">
          <div className="p-0 md:p-6 mb-4 md:mb-0" >
            <h3>Where Talent Meets Opportunity.</h3>
            <h1 className='my-4 md:my-0'>
              Careers at Bissbay
            </h1>
            <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              Join our dynamic team and unlock your true potential while shaping the future of B2B marketing.
            </h6>
          </div>
        </div>
        <div className="w-full flex-1 flex items-center justify-center">
            <Image
            unoptimized
            src={careerHero}
            className="w-full h-full object-contain"
            width={400}
            height={200}
            alt="Hero"
          />
        </div>

      </div>
    </>
  );
}

export default Hero;
