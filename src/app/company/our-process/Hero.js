import Button from "@/components/Button";
import LogoLoop from "@/components/LogoLoop";
import RequestProposalPopup from "@/components/RequestProposalPopup";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

import React, { useState } from "react";


function Hero() {
  const { t } = useTranslation('translation');
  const [showRequestProposal, setShowRequestProposal] = useState(false);

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

  return (
    <>
      <section>
          <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-6 lg:gap-8">
            <div className="w-full md:w-1/2 mb-0">
              <h1 className="group">
                Bissbay's
                <span className="group-hover:!text-primary transition-colors duration-300 relative">
                  {" "}
                  Omnichannel{" "}
                </span>
                Excellence
              </h1>
              <h3
                className="my-6 !text-primary"
                style={{ animationDelay: "0.2s" }}
              >
                Multi-touch B2B buyers outpace traditional marketing.
              </h3>
              <p className="mb-8"  >
                At Bissbay, we combine smart strategies with advanced technology
                to help your business grow. Our omnichannel approach ensures
                your message reaches the right audience at the right time,
                boosting engagement, leads, and sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Button
                  variant="primary"
                  customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                  label="Scale Your Growth"
                  onClick={() => setShowRequestProposal(true)}
                />
              </div>
            </div>
              <div className="w-full md:w-1/2 rounded-md overflow-hidden">
                <img
                  className="relative h-[400px] object-cover md:h-[500px] animate-on-scroll"
                  src={"/images/OmniHero.png"}
                />
              </div>
          </div>
        <div className="w-full">
        <section className="pt-0 sm:pt-6 lg:pt-12 full-bleed">
            <h6 className="text-xs sm:text-sm text-gray-500 text-center pt-0 pb-2 px-2">
              {t('hero.description5')}
            </h6>

            <div className="bg-[#f3f4f6] py-4 overflow-hidden">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={images}
                  speed={60}
                  direction="left"
                  logoHeight={35}
                  gap={60}
                  pauseOnHover
                  ariaLabel="Technology partners"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <RequestProposalPopup
        isOpen={showRequestProposal}
        onClose={() => setShowRequestProposal(false)}
      />
    </>
  );
}

export default Hero;
