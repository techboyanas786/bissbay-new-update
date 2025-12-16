"use client";
import BookingModal from '@/components/BookingModal';
import Button from '@/components/Button';
import { Mail, Calendar, Zap, Repeat, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
const Solutions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const SolutionCard = ({
    icon,
    title,
    description
  }) => (
    <div className="metric-card hover-card transition-all duration-300 ">
      <div className="flex items-start">
        {/* <div className="mt-2 text-primary mr-4">
          {icon}
        </div> */}
        <div>
          <h5 className="flex items-center gap-2 mb-2"><span className='text-primary'>{icon}</span>{title}</h5>
          <p  >{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="solutions">
        <div className="text-center animate-on-scroll">
          <h2 className="section-title !mb-0">BISSBAY <span className='text-primary'>Email Marketing </span>Solutions</h2>
          <h3 className="my-4 md:my-6">
            Our comprehensive suite of email marketing services designed to engage your audience and drive conversions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <SolutionCard
            icon={<Mail className="medium-icon" />}
            title="Exclusive Promotional Emails"
            description="100% share of voice drives high-intent traffic to your landing pages."
          />

          <SolutionCard
            icon={<Newspaper className="medium-icon" />}
            title="Newsletter Sponsorships"
            description="Zero competition in premium industry newsletters targeting decision-makers."
          />

          <SolutionCard
            icon={(
              <Image
                src="/Icons/Artificial-Intelligence.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            )}
            title="AI-Optimized Drip Campaigns"
            description="Automated email sequences that engage leads at the right time."
          />

          <SolutionCard
            icon={<Calendar className="medium-icon" />}
            title="Event & Webinar Promotions"
            description="Increase registrations with precision-targeted email campaigns."
          />

          <SolutionCard
            icon={<Repeat className="medium-icon" />}
            title="Re-Engagement Campaigns"
            description="Win back inactive leads with tailored, high-converting messaging."
          />

          <div className="metric-card hover-card duration-300 shadow-xl flex flex-col justify-center items-center text-center">
            <h5 className="mb-4 text-center w-full">Ready to boost your email marketing?</h5>
            <p className="mb-4 text-center w-full">Let's design your next high-performing email campaign.</p>
            <Button
              customClass="transform transition-all duration-300 ease-in-out mx-auto"
              variant="primary"
              label="Schedule Your Consultation"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </section>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Solutions;
