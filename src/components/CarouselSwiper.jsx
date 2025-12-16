'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DEFAULT_ITEMS = [
  {
    title: 'Global Presence',
    description: 'With five offices around the world, we build flexible teams with exceptional expertise, allowing us to provide top-quality services.',
    id: 1
  },
  {
    title: 'North America Hub',
    description: 'Our North American operations center provides 24/7 support and cutting-edge technology solutions to clients across the continent.',
    id: 2
  },
  {
    title: 'European Center',
    description: 'Based in the heart of Europe, our team delivers innovative solutions while maintaining the highest standards of data privacy and compliance.',
    id: 3
  },
  {
    title: 'Asia Pacific Office',
    description: 'Our APAC headquarters combines local market expertise with global best practices to serve the rapidly growing Asian market.',
    id: 4
  },
  {
    title: 'Innovation Lab',
    description: 'Our research and development center focuses on emerging technologies and next-generation solutions for tomorrows challenges.',
    id: 5
  }
];

export default function CarouselSwiper({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  isMobile = false
}) {
  const containerPadding = 16;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`relative overflow-hidden ${
        round ? 'rounded-full border border-white' : isMobile ? 'w-full' : 'rounded-[24px] bg-gray-50'
      }`}
      style={{
        ...(round && { width: `${baseWidth}px`, height: `${baseWidth}px` }),
        ...(!round && !isMobile && { width: `${baseWidth}px` }),
        ...(isMobile && !round && { width: '100%' })
      }}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        loop={loop}
        autoplay={autoplay ? {
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: pauseOnHover
        } : false}
        pagination={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{
          width: round ? `${baseWidth - containerPadding * 2}px` : isMobile ? '100%' : `${baseWidth - containerPadding * 2}px`,
          height: round ? `${baseWidth - containerPadding * 2}px` : 'auto'
        }}
        className="carousel-swiper">
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <div
              className={`relative flex flex-col ${
                round
                  ? 'items-center justify-center text-center bg-[#F9FAFB] border-0'
                  : isMobile
                    ? 'items-start justify-between bg-[#F9FAFB]'
                    : 'items-start justify-between'
              } overflow-hidden`}
              style={{
                width: '100%',
                height: round ? `${baseWidth - containerPadding * 2}px` : 'auto',
                ...(round && { borderRadius: '50%' })
              }}>
              <div className={isMobile ? 'p-4' : 'p-4'}>
                <div className="mb-1 font-black text-lg text-primary">{item.title}</div>
                <p className="text-sm text-primary">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div
        className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mb-2 md:my-3 my-0 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-150 ${
                activeIndex === index
                  ? round
                    ? 'bg-primary scale-[1.2]'
                    : 'bg-primary scale-[1.2]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              onClick={() => {
                const swiperEl = document.querySelector('.carousel-swiper .swiper');
                if (swiperEl && swiperEl.swiper) {
                  swiperEl.swiper.slideToLoop(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
