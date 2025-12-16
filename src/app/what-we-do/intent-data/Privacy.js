
"use client";
import { Shield, CheckCircle } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section>
      <div className="flex gap-2 w-fit mx-auto lg:gap-0 flex-col lg:flex-row md:flex-row xl:flex-row border-2 border-bissbay-green shadow-xl p-2 md:p-4 lg:p-6 rounded-2xl duration-300 items-center justify-center animate-fade-in">

        <div className="flex-1 flex md:flex-row flex-col items-center text-center justify-center lg:text-left">
          <div className="mx-4 w-16 h-16 bg-bissbay-green rounded-full flex items-center justify-center">
            <Shield className="medium-icon !text-white" />
          </div>
          <div>
            <h2 className="my-2">
              Privacy & Compliance: <span className="text-bissbay-green"> <br className='block md:hidden' /> Ethical Data</span> You Can Trust
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              BISSBAY follows strict GDPR & CCPA compliance to ensure transparency & security.<br />
              All data is collected responsibly, with user consent.
            </p>
          </div>
        </div>

        <div className="mx-4 flex justify-center items-center gap-3">
          <CheckCircle className="small-icon !text-bissbay-green" />
          <h5>GDPR Compliant</h5>
        </div>

        <div className="mx-4 flex justify-center items-center gap-3">
          <CheckCircle className="small-icon !text-bissbay-green" />
          <h5>CCPA Compliant</h5>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
