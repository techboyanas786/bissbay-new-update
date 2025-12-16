import Image from 'next/image'
import React from 'react'
import CareerIllustration from "../../../../public/images/CareerIllustration.jpeg"

function CareersIntro() {
  return (
    <div   >
      <div className="w-full bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 items-center">
        <div className="relative h-[200px] md:h-[400px]">
          <Image unoptimized src={CareerIllustration} className="w-full h-full object-cover rounded-2xl" width={400} height={200} alt="Hero" />
        </div>
        <div className="space-y-4 md:space-y-6 p-2 md:p-6">
          <div className="space-y-4">
            <p className='!font-semibold'>
              At BISSBAY, we’re passionate about driving meaningful connections between businesses, their audiences, and the data that powers growth. Our marketing strategies are inspired by the relationships our diverse team builds every day. These connections make BISSBAY an exceptional place to grow your career while shaping the future of B2B marketing
            </p>
          </div>

          <div className="space-y-4">
            <p className='!font-semibold'>
              If you share our passion for teamwork, problem-solving, and innovation, it’s time to connect with BISSBAY. <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">Explore our current opportunities</a> and discover where you can make an impact in shaping the future of B2B marketing.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CareersIntro