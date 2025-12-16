import { useEffect, useState } from "react";
import IT from '../app/audiences/information-technology/globe3.json';
import { ContactButton } from "@/components/ContactModal";
import { useTranslation } from 'next-i18next';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import LogoLoop from "@/components/LogoLoop";
import TextType from "@/components/typeWriter";

const images = [
    { src: "/logos/AutoDesk.png", alt: "AutoDesk" },
    { src: "/logos/Asker_HCG.png", alt: "Asker HCG" },
    { src: "/logos/BeyondTrust_logo.png", alt: "BeyondTrust" },
    { src: "/logos/Digital_Realty.png", alt: "Digital Realty" },
    { src: "/logos/Iron_Mountain.png", alt: "Iron Mountain" },
    { src: "/logos/NetApp.png", alt: "NetApp" },
    { src: "/logos/pax8-logo.png", alt: "Pax8" },
    { src: "/SVGLogos/8x8.svg", alt: "8x8" },
    { src: "/SVGLogos/acquia.svg", alt: "Adobe" },
    { src: "/logos/Adobe.png", alt: "Alibaba" },
    { src: "/SVGLogos/alibaba.svg", alt: "Atos" },
    { src: "/SVGLogos/amazon.svg", alt: "Aviva" },
    { src: "/SVGLogos/arcticwolf.svg", alt: "Dell" },
    { src: "/SVGLogos/atos.svg", alt: "Equnix" },
    { src: "/logos/Aviva.png", alt: "Amazon" },
    { src: "/SVGLogos/bae-systems-logo.svg", alt: "Acquia" },
    { src: "/SVGLogos/bitdefender.svg", alt: "AWN" },
    { src: "/SVGLogos/bosch.svg", alt: "BAE Systems" },
    { src: "/SVGLogos/box.svg", alt: "Bitdefender" },
    { src: "/SVGLogos/cloudflare.svg", alt: "Box" },
    { src: "/SVGLogos/commvault.svg", alt: "Bosch" },
    { src: "/SVGLogos/criteo.svg", alt: "Cloudflare" },
    { src: "/SVGLogos/dell.svg", alt: "Commvault" },
    { src: "/SVGLogos/telekom.svg", alt: "Criteo" },
    { src: "/SVGLogos/equinix-logo.svg", alt: "Deutsche Telekom" },
    { src: "/SVGLogos/google.svg", alt: "Google" },
    { src: "/SVGLogos/hewlett-packard-enterprise.svg", alt: "Hewlett Packard" },
    { src: "/logos/Hitachi_logo.png", alt: "Hitachi" },
    { src: "/SVGLogos/ibm.svg", alt: "IBM" },
    { src: "/SVGLogos/intel.svg", alt: "Intel" },
    { src: "/SVGLogos/microsoft.svg", alt: "Microsoft" },
    { src: "/SVGLogos/ntt-data.svg", alt: "NTT" },
    { src: "/SVGLogos/oracle.svg", alt: "Oracle" },
    { src: "/SVGLogos/red-hat-logo.svg", alt: "Red Hat" },
    { src: "/SVGLogos/rohde-schwarz.svg", alt: "Rohde" },
    { src: "/SVGLogos/sap.svg", alt: "SAP Signavio" },
    { src: "/logos/Siemens-logo.png", alt: "Siemens" },
    { src: "/SVGLogos/ukg.svg", alt: "UKG" },
    { src: "/SVGLogos/verizon.svg", alt: "Verizon" },
    { src: "/SVGLogos/vmware.svg", alt: "VMware" },
    { src: "/SVGLogos/workday-logo.svg", alt: "Workday" },
    { src: "/SVGLogos/zoho.svg", alt: "ZOHO" },
];

export default function HeroSection({ overlayComplete }) {
    const [taglineAnimationPhase, setTaglineAnimationPhase] = useState(0);
    const [introOverlayActive, setIntroOverlayActive] = useState(true);
    const [showRegularTagline, setShowRegularTagline] = useState(false);
    const [mainContentVisible, setMainContentVisible] = useState(false);
    const [scrollDisabled, setScrollDisabled] = useState(true);
    const [showTypewriter, setShowTypewriter] = useState(false);

    const { t } = useTranslation('translation');

    const NAVBAR_HEIGHT = 80;

    useEffect(() => {
        if (overlayComplete) {
            setShowTypewriter(true);
        }
    }, [overlayComplete]);

    useEffect(() => {
        if (showTypewriter) {
            // Phase 0 -> 1 & 2: Typewriter completes and immediately start moving up
            const typewriterTimer = setTimeout(() => {
                setTaglineAnimationPhase(1);
                // Start moving up immediately
                setTimeout(() => {
                    setTaglineAnimationPhase(2);
                }, 0);
            }, 3500);

            // Phase 2 -> 3: Heading reaches final position, start showing regular tagline
            const showRegularTimer = setTimeout(() => {
                setShowRegularTagline(true);
                setTaglineAnimationPhase(3);
            }, 4700); // Reduced delay for better sync

            // Phase 3 -> 4: Hide overlay and show main content
            const hideOverlayTimer = setTimeout(() => {
                setIntroOverlayActive(false);
                setMainContentVisible(true);
                setTaglineAnimationPhase(4);
            }, 4800); // Slightly delayed after regular tagline appears

            const enableScrollTimer = setTimeout(() => {
                setScrollDisabled(false);
            }, 6000);

            return () => {
                clearTimeout(typewriterTimer);
                clearTimeout(showRegularTimer);
                clearTimeout(hideOverlayTimer);
                clearTimeout(enableScrollTimer);
            };
        } else {
            setTaglineAnimationPhase(0);
            setIntroOverlayActive(true);
            setShowRegularTagline(false);
            setMainContentVisible(false);
        }
    }, [showTypewriter]);

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();

        if (scrollDisabled) {
            window.addEventListener('wheel', preventDefault, { passive: false });
            window.addEventListener('touchmove', preventDefault, { passive: false });
            window.addEventListener('keydown', (e) => {
                if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                    e.preventDefault();
                }
            });
        } else {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        }

        return () => {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        };
    }, [scrollDisabled]);

    return (
        <>
            <style jsx>{`
                .hero-intro-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 20;
                    background-color: white;
                    opacity: 1;
                    transition: opacity 0.6s ease-out;
                    pointer-events: auto;
                }

                .hero-intro-overlay.hide {
                    opacity: 0;
                    pointer-events: none;
                }

                .hero-heading {
                font-size: 3rem;
                font-family: 'Quicksand', sans-serif;
                font-weight: 600;
                color: #1F2937;
                line-height: 1.25;
                }

                .tagline-h1-wrapper {
                    width: 90%;
                    text-align: center;
                    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transform: translateY(0);
                }

                .tagline-h1-wrapper.phase-2 {
                    transform: translateY(calc(-50vh + 139px));
                }
                @media screen and (max-width: 767px) {
                    .hero-heading {
                        font-size: 2rem;
                    }
                    .tagline-h1-wrapper.phase-2 {
                        transform: translateY(calc(-50vh + 149px));
                    }
                }

                .regular-tagline-h1 {
                    position: absolute;
                    top: 20px;
                    left: 49.85%;
                    transform: translateX(-50%);
                    width: 100%;
                    text-align: center;
                    opacity: 0;
                    z-index: 19;
                }

                .regular-tagline-h1.show {
                    opacity: 1;
                }

                .main-content-wrapper {
                    width: 100%;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
                }

                .main-content-wrapper.show {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-intro-overlay.phase-3 {
                    opacity: 0.7;
                }

                .logo-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 2rem;
                }

                .logo-image {
                    object-fit: contain;
                    max-height: 100%;
                    filter: grayscale(100%);
                    transition: all 0.3s ease;
                }

                .logo-image:hover {
                    filter: grayscale(0%);
                    transform: scale(1.1);
                }
            `}</style>

            <section
                className="w-full flex flex-col justify-between relative"
                style={{
                    minHeight:
                        typeof window !== "undefined"
                            ? window.innerWidth >= 1024 // large screen (lg)
                                ? 'calc(100vh - 110px)'
                                : window.innerWidth >= 820 && window.innerWidth < 1024 // iPad Pro
                                    ? 'calc(80vh - 110px)'
                                    : 'auto'
                            : undefined,
                }}
            >
                {introOverlayActive && showTypewriter && (
                    <div className={`hero-intro-overlay
                        ${taglineAnimationPhase >= 2 ? 'phase-2' : ''}
                        ${taglineAnimationPhase >= 3 ? 'phase-3' : ''}
                        ${taglineAnimationPhase >= 4 ? 'hide' : ''}
                    `}>
                        <div className={`tagline-h1-wrapper ${taglineAnimationPhase >= 2 ? 'phase-2' : ''}`}>
                            <TextType
                                text={[`${t('hero.tagline.part1')} ${t('hero.tagline.highlight1')} ${t('hero.tagline.part2')} ${t('hero.tagline.highlight2')}`]}
                                as="h1"
                                typingSpeed={65}
                                initialDelay={0}
                                pauseDuration={1000}
                                deletingSpeed={10}
                                loop={false}
                                className="group !tracking-normal !font-bold lg:!font-semibold !text-black"
                                style={{
                                    fontSize: window.innerWidth < 768 ? '2rem' : '3rem',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 600,
                                    color: '#1F2937',
                                    lineHeight: 1.25
                                }}
                                showCursor={true}
                                cursorCharacter=""
                                cursorClassName="!text-black"
                                cursorBlinkDuration={0.2}
                                textColors={["#000000"]}
                            />
                        </div>
                    </div>
                )}

                {/* First Div - Fixed height for heading */}
                <div className="w-full container mx-auto">
                    <div className="w-full flex items-center justify-center" style={{ minHeight: '80px' }}>
                        <h1 className={`regular-tagline-h1 hero-heading !tracking-normal group !font-bold lg:!font-semibold leading-tight ${showRegularTagline ? 'show' : ''}
                        `}>
                            {t('hero.tagline.part1')}{" "}
                            <span className="relative inline-block">
                                <span className="rounded-xl lg:group-hover:text-primary transition-colors duration-300 ">
                                    {t('hero.tagline.highlight1')}
                                </span>
                            </span>
                            {' '}{t('hero.tagline.part2')}{" "}
                            <span className="relative inline-block">
                                <span className="rounded-xl lg:group-hover:text-primary transition-colors duration-300 ">
                                    {t('hero.tagline.highlight2')}
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Second Div - Main content */}
                <div className="w-full container mx-auto">
                    <div className={`main-content-wrapper mx-auto grid place-content-center ${mainContentVisible ? 'show' : ''}`}>
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center 2xl:h-[500px] gap-4 sm:gap-6 lg:gap-8">
                            <div className="w-full lg:w-1/2 p-0 md:p-5">
                                <h2 className="2xl:!text-[40px]">
                                    {t('hero.description1')}<br />
                                    {t('hero.description2')}<br />
                                    {t('hero.description3')}
                                </h2>

                                <h4 className="!text-[#5C6371] text-sm sm:text-base md:text-lg leading-relaxed max-w-full my-4 sm:my-6 md:my-8">
                                    {t('hero.description4')}
                                </h4>

                                <div className="w-fit">
                                    <ContactButton
                                        label={t('hero.button')}
                                        variant="primary"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex items-center justify-center">
                                <Lottie animationData={IT} className="w-full md:scale-125 h-full max-w-lg" loop={true} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Div - Logo section (Full Width) */}
                <section className="full-bleed">
                    <h6 className="text-xs sm:text-sm text-gray-500 text-center pb-2 sm:pb-4">
                        {t('hero.description5')}
                    </h6>

                    <div className="py-4 overflow-hidden">
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <LogoLoop
logos={images}
speed={60}
direction="left"
logoHeight={35}
gap={60}
hoverSpeed={30}
scaleOnHover
fadeOut
fadeOutColor="#ffffff"
ariaLabel="Technology partners"
/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}