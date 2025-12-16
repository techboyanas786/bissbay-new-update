"use client";

import Button from "@/components/Button";
import { MdOutlineDownloading, MdOutlineBarChart, MdCampaign } from 'react-icons/md';
import { PiPulseBold } from "react-icons/pi";
import { TbChartDots3 } from "react-icons/tb";
import { FiUserX, FiTarget, FiCheckCircle } from "react-icons/fi";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { RiUserSearchLine } from "react-icons/ri"
import { BsChatSquareQuote } from "react-icons/bs"
import { IoSpeedometerOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BookingCalendar from "@/components/BookingCalendar";
import { useTranslation } from 'next-i18next';

export default function SolutionSection() {

  const { t } = useTranslation('translation');

  const solutions = [
    {
      icon: <PiPulseBold className="text-primary text-2xl" />,
      title: t('solutions.h1-title'),
      description: (
        <>
          {t('solutions.h1-desc')}{" "}
          <strong><br className="hidden md:block" />{t('solutions.h1-bold')}</strong>
        </>
      )

    },
    {
      icon: <MdOutlineDownloading className="text-primary text-2xl" />,
      title: t('solutions.h2-title'),
      description: (
        <>
          {t('solutions.h2-desc')}{" "}
          <strong> <br className="hidden md:block" /> {t('solutions.h2-bold')}</strong>
        </>
      )
    },
    {
      icon: <TbChartDots3 className="text-primary text-2xl" />,
      title: t('solutions.h3-title'),
      description: (
        <>
          {t('solutions.h3-desc')}{" "}
          <strong><br className="hidden md:block" />{t('solutions.h3-bold')}</strong>
        </>
      )
    },
    {
      icon: <MdOutlineBarChart className="text-primary text-2xl" />,
      title: t('solutions.h4-title'),
      description: (
        <>
          {t('solutions.h4-desc')}{" "}
          <strong><br className="hidden md:block" />{t('solutions.h4-bold')}</strong>
        </>
      )
    },
    {
      icon: <FiUserX className="text-primary text-2xl" />,
      title: t('solutions.h5-title'),
      description: (
        <>
          {t('solutions.h5-desc')}{" "}
          <strong><br className="hidden md:block" />{t('solutions.h5-bold')}</strong>
        </>
      )
    },
    {
      icon: <HiOutlineEmojiSad className="text-primary text-2xl" />,
      title: t('solutions.h6-title'),
      description: (
        <>
          {t('solutions.h6-desc')}{" "}
          <strong><br className="hidden md:block" />{t('solutions.h6-bold')}</strong>
        </>
      )
    },
  ];

  const strategies = [
    {
      icon: <FiTarget className="text-primary text-2xl" />,
      title: t('solutions.s1-title'),
      description: t('solutions.s1-desc')
    },
    {
      icon: <RiUserSearchLine className="text-primary text-2xl" />,
      title: "Pinpointing Your Ideal Customers",
      description: "Through data-driven research, we identify your Ideal Customer Profile (ICP) and key-decision makers, so you focus on the right prospects from day one ."
    },
    {
      icon: <BsChatSquareQuote className="text-primary text-2xl" />,
      title: "Sharpening Positioning & Messaging",
      description: "By working closely with your sales team, we uncover real customer pain points and craft compelling, conversion-driven messaging that resonates and builds trust."
    },
    {
      icon: <MdCampaign className="text-primary text-2xl" />,
      title: "Activating the Right Channels",
      description: "Your audience is actively searching for solutions. We position you where it matters most, capturing immediate opportunities and establishing a consistent demand-generation system."
    },
    {
      icon: <FiCheckCircle className="text-primary text-2xl" />,
      title: "Creating Impactful, Lead-Generating Content",
      description: "From thought leadership to sales-driven assets, we develop high-value content that engages, nurtures, and positions you as a trusted industry leader."
    },
    {
      icon: <IoSpeedometerOutline className="text-primary text-2xl" />,
      title: "Testing, Refining & Scaling for Maximum ROI",
      description: "Marketing isn’t static. We continuously test, optimize, and scale campaigns, refining creative, messaging, and targeting to accelerate conversions and revenue growth."
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      {/* Solutions section */}
      <div className="px-4 sm:px-6 md:px-10 py-10 max-w-7xl mx-auto mt-10">
        <p className="text-black mb-5 text-[28px] font-semibold text-center">
          {t('solutions.tagline1')}
          <br className="hidden md:block" /> {t('solutions.tagline2')}
        </p>

        <h3 className="mt-10 text-[30px] sm:text-xl font-semibold text-gray-1000 text-center">
          {t('solutions.description2')}
        </h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-white text-center sm:text-left transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center sm:justify-start">{item.icon}
                <h3 className="ml-4 font-semibold text-lg text-gray-800">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}

        </div>

        <p className="text-black mb-5 mt-10 text-[28px] font-semibold text-center">
          {t('solutions.description3')}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {strategies.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-white text-center sm:text-left transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex justify-center sm:justify-start">{item.icon}
                <h3 className="ml-4 font-semibold text-lg text-gray-800">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-black mb-5 mt-10 text-[28px] font-semibold text-center">
          {t('solutions.description4')}
        </p>

        <BookingCalendar />

        <div className="mt-12 text-center">
          <Button label={t('booking.button')} variant="primary" />
        </div>

      </div>
    </>
  )
}