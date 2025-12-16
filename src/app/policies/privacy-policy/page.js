"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function PrivacyPolicy() {
   const EmailLink = ({ email }) => {
    return (
      <a
        href={`mailto:${email}`}
        className="!font-semibold hover:text-primary transition-colors duration-200"
        onClick={(e) => {
          if (window.navigator && window.navigator.msLaunchUri) {
            window.navigator.msLaunchUri(`outlook:mailto:${email}`);
            e.preventDefault();
          }
        }}
      >
        {email}
      </a>
    );
    
  };
  const PolicyRedirect = ({ src, label }) => {
    return (
      <a
        href={`${src}`}
        className="!font-semibold hover:text-primary transition-colors duration-200"
      >
        {label}
      </a>
    );
    
  };
  return (
    <div className="pt-[115px] max-w-5xl mx-auto px-4 md:px-2 pb-4 md:pb-8 min-h-screen">
      <div className="bg-gray-50 rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary px-2 md:px-6 py-4">
        <section className="mb-4 md:mb-6 relative overflow-hidden text-center">
          <div className="inline-block relative">
            <h1 className="relative inline-block md:mb-0 mb-1">Privacy Policy</h1>
            <br />
            
          </div>
        </section>
        <div>
          <section className={`mb-4 md:mb-6 animation-delay-400`}>
            <div className="text-md leading-relaxed">
              <p className="text-sm mb-4 text-bissbay-black/70 !font-medium animate-fade-in">
                Last Updated: June 10, 2025
              </p>

              <p className="text-md leading-relaxed font-medium">
                Bissbay ("us", "we", or "our") operates the <PolicyRedirect label={`https://www.bissbay.com/`} src={'/'}/> website (the
                "Service"). This page informs you of our policies regarding the
                collection, use, and disclosure of personal data when you use our
                Service and the choices you have associated with that data.
              </p>

              <p className="text-md leading-relaxed font-medium">
                We use your data to provide and improve the Service. By using the
                Service, you agree to the collection and use of information in
                accordance with this policy. Unless otherwise defined in this
                Privacy Policy, terms used in this Privacy Policy have the same
                meanings as in our Terms and Conditions, accessible from
                bissbay.com.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-600`}>
            <h3 className="mb-2 !text-[#5c6371]">
              1. Information We Collect
            </h3>
            <div className="leading-relaxed">
              <p className="!mb-2 text-md leading-relaxed !font-semibold">
                We collect different types of information, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>• Personal Information:</strong>{" "}
                    Name, email address, phone number, payment details, etc.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>• Technical Information:</strong>{" "}
                    IP address, device type, browser type, and cookies.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>• Usage Data:</strong> How you
                    interact with our website and services.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>
                      • Cookies & Tracking Technologies:
                    </strong>{" "}
                    See our <PolicyRedirect src={'/policies/cookie-policy'} label={'Cookie Policy'}/> for details.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              2. How We Use Your Information
            </h3>
            <div className="leading-relaxed">
              <p className="text-md leading-relaxed !mb-2 !font-semibold">We use your data for:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                   • Providing and improving our services.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                   • Processing transactions and payments.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                   • Sending updates, newsletters, and marketing communications
                    (with consent).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    • Ensuring security and preventing fraud.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    • Complying with legal obligations.
                  </p>
                </li>
              </ul>
              <p className="mt-4 text-md leading-relaxed font-medium">
                For more details on how we handle your data under different laws,
                refer to our specific policies below.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">
              3. Compliance with Data Protection Laws
            </h3>
            <div className="leading-relaxed">
              <p className="text-md !mb-2 leading-relaxed !font-semibold">
                We comply with various data protection regulations, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <PolicyRedirect src={'/data-compliance/gdpr'} label={'• General Data Protection Regulation (GDPR) '}/>
                    (for EU users). Read our full <PolicyRedirect src={'/data-compliance/gdpr'} label={'gdpr '}/> Policy.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <PolicyRedirect src={'/data-compliance/ccpa'} label={'• California Consumer Privacy Act (CCPA) '}/>
                    Read our full <PolicyRedirect src={'/data-compliance/ccpa'} label={'ccpa-cpra '}/> Policy.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <PolicyRedirect src={'/data-compliance/can-span'} label={'• CAN-SPAM Act '}/> (for
                    email communication compliance). Read our full <PolicyRedirect src={'/data-compliance/can-spam'} label={'CAN-SPAM '}/>
                    Policy.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <PolicyRedirect src={'/data-compliance/casl'} label={`• Canada's Anti-Spam Legislation (casl) `}/>
                    (for Canadian users). Read our full <PolicyRedirect src={'/data-compliance/casl'} label={`casl `}/> Policy.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              4. Sharing and Disclosure of Information
            </h3>
            <div className="leading-relaxed">
              <p className="!mb-2 text-md leading-relaxed !font-semibold">
                We do not sell or rent your personal data. However, we may share
                it with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>• Service Providers: </strong>
                    Payment processors, cloud storage, analytics tools.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>• Legal Authorities: </strong>When
                    required by law or to protect rights.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    <strong>• Marketing Partners: </strong>With
                    your explicit consent.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">
              5. Your Rights & Choices
            </h3>
            <div className="leading-relaxed">
              <p className="!mb-2 text-md leading-relaxed !font-semibold">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    • Access, correct, or delete your personal information.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                   • Opt-out of marketing communications.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    • Restrict or object to data processing.
                  </p>
                </li>
              </ul>
              <p className="mt-2 text-md leading-relaxed font-medium">
                To exercise your rights, contact Us at{" "}
                <EmailLink email={'privacy@bissbay.com'}/>
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">
              6. Cookies & Tracking Technologies
            </h3>
            <p className="text-md leading-relaxed font-medium">
              We use cookies to improve your experience. You can manage your
              preferences through our Cookie Policy.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              7. Data Security
            </h3>
            <p className="text-md leading-relaxed font-medium">
              We implement strong security measures to protect your personal
              data, including encryption and secure access controls.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2000`}>
            <h3 className="mb-2 !text-[#5c6371]">
              8. Updates to This Policy
            </h3>
            <p className="text-md leading-relaxed font-medium">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated effective date.
            </p>
          </section>

          <section className={`animation-delay-2200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              9. Contact Us
            </h3>
            <p className="text-md leading-relaxed !mb-2 !font-semibold">
              For any questions about this Privacy Policy, contact Us at:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <EmailLink email={'privacy@bissbay.com'}/>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919823662453"
                  className="text-md leading-relaxed font-medium"
                >
                  +91 9823662453
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-md leading-relaxed font-medium">Office#602, Clover Hills Plaza, NIBM Rd, 411048, Pune, Maharashtra, India</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
