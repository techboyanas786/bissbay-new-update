"use client"
import GeoChartClient from "@/components/GeoChartClient";
import { useTranslation } from 'next-i18next';

export default function MapSection() {
  const { t } = useTranslation('translation');
  return (
    <>
      <div className="flex flex-col w-auto items-center z-10 ">
          <h1 className="text-center mb-0 md:mb-6">
            {t('map.tagline')} </h1>
        <GeoChartClient   />
        <h3 className="md:text-center text-left">
          Where global reach meets precise targeting, making every connection count.
        </h3>
        <div className="w-full flex items-center justify-center gap-2 sm:gap-2 pr-0 sm:pr-4 z-20">         
        </div>
      </div>
    </>
  )
}