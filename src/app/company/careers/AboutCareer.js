import Image from "next/image";
import React from "react";

function AboutCareer() {
  return (
    <div   >
      <div className="w-full bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 items-center">
          <div className="space-y-4 md:space-y-6 p-2 md:p-6">
            <h2>Hello!</h2>
            <p  >
              This is more than a careers page. It is a glimpse into the
              culture, people, and possibilities that define who we are. At
              BISSBAY, we believe great work happens when passionate minds come
              together to learn, create, and grow.
              <span className="mt-4">
                {" "}Here, you will find opportunities that challenge you, a team
                that supports you, and a space where your ideas can truly make a
                difference. We are excited for you to explore what is ahead and
                discover how your journey can begin with us.{" "}
              </span>
            </p>
          </div>
          <div className="relative h-[200px] md:h-[400px]">
            <div className="absolute -translate-y-2 md:-translate-y-0 -translate-x-2 md:-translate-x-10 w-20 h-20 rounded-full bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center"></div>
            </div>
            <Image
              unoptimized
              src="https://images.pexels.com/photos/4439454/pexels-photo-4439454.jpeg"
              className="w-full h-full object-cover rounded-2xl"
              width={400}
              height={200}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCareer;
