import GeoChartClient from "@/components/GeoChartClient";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export default function MapSection() {

  const { t } = useTranslation('translation');

  return (
    <>
      <div className="flex flex-col items-center z-10">
        <div className="text-center">
          <h1>
            {t('map.tagline')} </h1>
          <h3 className="text-center mt-4 md:mt-6">
            {t('map.description1')}</h3>
        </div>
        <GeoChartClient   />
        <h3 className="text-center mb-4 md:mb-6">
          {t('map.description2')}
        </h3>
        <div className="flex items-center w-fit mx-auto justify-center gap-2 sm:gap-2 z-20">
          <Link
            href="/audience"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white border-primary rounded-lg text-primary px-6 py-2 border-2 transition-all duration-300 ease-in-out cursor-pointer no-underline hover:bg-primary hover:!text-white !font-bold"
          >
            <span className="transition-colors duration-300">{t('map.button')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" className="arrow-icon transition-all duration-300" height="auto" viewBox="0 0 33.484 33.485">
              <g id="Icon_feather-arrow-up-right" data-name="Icon feather-arrow-up-right" transform="translate(-6.258 -6.257)">
                <path id="Caminho_1321" data-name="Caminho 1321" d="M10.5,35.5l25-25" fill="none" stroke="#ff4200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" className="group-hover:stroke-white transition-all duration-300"></path>
                <path id="Caminho_1322" data-name="Caminho 1322" d="M10.5,10.5H32.658V32.658" transform="translate(2.842)" fill="none" stroke="#ff4200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" className="group-hover:stroke-white transition-all duration-300"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}