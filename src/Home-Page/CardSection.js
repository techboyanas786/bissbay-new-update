"use client"
import ServiceCard from "@/components/ServiceCard";
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

export default function CardSection() {
    const { t } = useTranslation('translation');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const services = [
        {
            title: t('card.card1-title'),
            description: t('card.card1-description'),
            image: "/images/Card1.jpg",
            link: '/what-we-do/account-based-marketing',
        },
        {
            title: t('card.card2-title'),
            description: t('card.card2-description'),
            image: "/images/Card2.jpg",
            link: '/what-we-do/appointment-setting',
        },
        {
            title: t('card.card3-title'),
            description: t('card.card3-description'),
            image: "/images/Card3.jpg",
            link: '/what-we-do/content-syndication',
        },
        {
            title: t('card.card4-title'),
            description: t('card.card4-description'),
            image: "/images/Card4.jpg",
            link: '/what-we-do/intelligent-data-enrichment',
        },
        {
            title: t('card.card5-title'),
            description: t('card.card5-description'),
            image: "/images/Card5.jpg",
            link: '/what-we-do/demand-generation',
        },
        {
            title: t('card.card6-title'),
            description: t('card.card6-description'),
            image: "/images/Card6.jpg",
            link: '/what-we-do/email-marketing',
        },
        {
            title: t('card.card7-title'),
            description: t('card.card7-description'),
            image: "/images/Card7.jpg",
            link: '/what-we-do/lead-generation',
        },
        {
            title: t('card.card8-title'),
            description: t('card.card8-description'),
            image: "/images/Card8.jpg",
            link: '/what-we-do/events',
        },
        {
            title: t('card.card9-title'),
            description: t('card.card9-description'),
            image: "/images/Card9.jpg",
            link: '/what-we-do/intent-data',
        },
    ];

    return (
        <>
            <style jsx>{`
                @media screen and (max-width: 767px) {
                .mobile-heading{
                    font-size: 1.5rem !important;
                }    
                .mobile-description {
                    font-size: 1.3rem !important;
                }
                }
            `}</style>
            <section className="mt-4 md:mt-12">
                <div className="flex flex-col items-center mb-4 md:mb-6 justify-center" >
                    <h1 className="text-center mobile-heading mb-4 md:mb-6">{t('card.tagline')}</h1>
                    <div>
                        <h3 className="text-center mobile-description">
                            {t('card.description-part1')}
                        </h3>
                        <h3 className="text-center mobile-description">
                            {t('card.description-part2')}
                        </h3>
                    </div>
                </div >
                <div className="mx-auto flex w-fit" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
                        {services.map((service, index) => (
                            <div key={index}>
                                <ServiceCard
                                    {...service}
                                    imageFirst={isMobile ? false : index % 2 !== 0}
                                />
                            </div>
                        ))}
                    </div>
                </div >
            </section>
        </>
    );
}