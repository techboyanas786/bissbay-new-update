"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./carousel.css";

const slides = [
  {
    id: 1,
    img: " /images/careerimage1.png",
    heading: "Grow With Us",
    text: "At BISSBAY, we embrace innovation and forward thinking. We encourage our people to explore new ideas, leverage technology, and shape the future of demand generation while growing their own careers.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
    heading: "A Place to Belong",
    text: "We value diversity, collaboration, and individuality. At BISSBAY, every perspective matters, and together we create an environment where teamwork drives success and everyone feels they belong.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
    heading: "Make an Impact",
    text: "We believe in turning passion into meaningful results. At BISSBAY, you’ll contribute to impactful projects that empower businesses globally, while building your own career path as a leader in innovation and growth.",
  },
];

export default function CompanyCarousel() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full bg-gray-50 !pb-8 md:!pb-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-8">
              <div className="relative h-[200px] md:h-[400px] order-1 md:order-1">
                <img
                  src={slide.img}
                  alt={slide.heading}
                  className="w-full h-full object-cover rounded-2xl"
                  width={400}
                  height={200}
                />
              </div>
              <div className="space-y-4 p-2 md:p-6 order-2 md:order-2">
                <h2 className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-primary mb-4">
                  {slide.heading}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
