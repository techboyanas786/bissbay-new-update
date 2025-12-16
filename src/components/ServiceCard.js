import Image from "next/image";
import Button from "@/components/Button";
import { useTranslation } from 'next-i18next';

export default function ServiceCard({ title, description, image, link, imageFirst = true }) {

 const { t } = useTranslation('translation');

  // Common card content elements
  const imageSection = (
    <div className="relative w-full h-80 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
    </div>
  );

  const contentSection = (
    <div className="p-4 flex flex-col justify-between flex-1">
      <h3 className="!text-[#1f2937] mb-0">{title}</h3>
      <p className="text-lg pt-4 pb-4">{description}</p>
      <div className={imageFirst ? "md:w-fit" : "md:w-fit"}>
        <Button
          variant="outlinegray" 
          label={t('card.button')}
          link={link}
          customClass="mb-0 ml-0 lg:px-8 lg:py-3 text-white !bg-[#1F2937] hover:text-[#1F2937] hover:!bg-transparent hover:no-underline hover:border-2 hover:border-[#1F2937] hover:transition-all hover:duration-300 hover:ease-in-out"/>
      </div>
    </div>
  );

  return (
    <div className="relative w-fit group">
      <div className="service-card lg:w-fit lg:h-[528] relative !bg-[#fdfdfd] rounded-xl shadow-md overflow-hidden flex flex-col z-10 border-[#FF4200] border-2 md:border-white md:hover:border-[#FF4200]">
        {imageFirst ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    </div>
  );
}
