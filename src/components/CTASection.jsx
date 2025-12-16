"use client";
import Button from '@/components/Button';
import BookingModal from '@/components/BookingModal';
import RequestProposalPopup from '@/components/RequestProposalPopup';
import React, { useState } from 'react';

const CTASection = ({
  title,
  subtitle,
  primaryButton = {
    label: 'Schedule Your Consultation',
    type: 'modal', // 'modal', 'booking', 'proposal', or 'link'
    modalType: 'booking' // 'booking' or 'proposal' when type is 'modal'
  },
  secondaryButtons = [
    { label: 'LinkedIn', href: '/linkedin', icon: null, disabled: false },
    { label: 'Client Testimonials', href: '/testimonials', icon: null, disabled: false },
    { label: 'Resources', href: '/resources', icon: null, disabled: false }
  ],
  backgroundGradient = 'from-[#fd4100] to-[#d9ee4a]'
}) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  return (
    <section className={`p-4 lg:p-12 bg-gradient-to-r ${backgroundGradient} relative overflow-hidden`}>
      <div className="container relative z-10 mx-auto">
        <div className=" container relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-[2.6rem] font-bold !text-white mb-4 lg:mb-6 animate-on-scroll">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-xl max-w-7xl !text-white mb-6 lg:mb-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </h3>
          )}

          <div className="animate-on-scroll flex justify-center" style={{ animationDelay: '0.3s' }}>
            <Button
              label={primaryButton.label}
              customClass="!text-white group hover:!text-primary hover:!bg-white border-2 border-transparent font-medium border-white/30 hover:!border-transparent rounded-lg !bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.05] transform"
              link={primaryButton.type === 'link' ? primaryButton.href : null}
              target={primaryButton.target || '_self'}
              onClick={primaryButton.type === 'modal' ? () => {
                if (primaryButton.modalType === 'proposal') {
                  setIsProposalModalOpen(true);
                } else {
                  setIsBookingModalOpen(true);
                }
              } : undefined}
            />
          </div>

          {secondaryButtons && secondaryButtons.length > 0 && (
            <div className={`mt-4 lg:mt-8 max-w-4xl mx-auto grid grid-cols-1 ${secondaryButtons.length < 3 ? "md:grid-cols-2 w-fit mx-auto" : "md:grid-cols-3"} gap-4 lg:gap-6 animate-on-scroll`} style={{ animationDelay: '0.4s' }}>
              {secondaryButtons.map((button, index) => (
                <Button
                  key={index}
                  label={button.label}
                  icon={button.icon}
                  disabled={button.disabled}
                  link={!button.disabled && button.type !== 'modal' ? button.href : null}
                  target={button.target || '_self'}
                  onClick={!button.disabled && button.type === 'modal' ? () => {
                    if (button.modalType === 'proposal') {
                      setIsProposalModalOpen(true);
                    } else {
                      setIsBookingModalOpen(true);
                    }
                  } : undefined}
                  customClass={`!text-white group hover:!text-primary hover:!bg-white border-2 border-transparent font-medium border-white/30 hover:!border-transparent rounded-lg !bg-transparent transition-all duration-300 ease-in-out hover:scale-[1.05] transform ${button.disabled ? 'cursor-not-allowed' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <RequestProposalPopup
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;