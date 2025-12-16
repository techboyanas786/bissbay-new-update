"use client"
import GeoChartClient from "@/components/GeoChartClient";
import { useTranslation } from 'next-i18next';

export default function MapSection() {
  const { t } = useTranslation('translation');
  return (
    <>
    <div className="px-0 min-h-[100%]">
      <div className="flex flex-col w-auto items-center max-w-[90vw] lg:max-w-[100vw] container mx-auto !bg-white z-10 ">
        <div className=" text-center">
          <h1 className="mb-4 md:mb-6">
            {t('map.tagline')} </h1>
        </div>
        <GeoChartClient   />
        <h3 className="text-center">
          {t('map.description2')}
        </h3>
        <div className="w-full flex items-center justify-center gap-2 sm:gap-2 pr-0 sm:pr-4 z-20">
        </div>
      </div>
      </div>
    </>
  )
}