"use client";
import { AlertTriangle, CheckSquare, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function CASL() {
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

  return (
    <div className="pt-[115px] max-w-5xl mx-auto px-4 md:px-2 pb-4 md:pb-8 min-h-screen">
      <div className="bg-gray-50 rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary px-2 md:px-6 py-4">
        <section className="mb-4 md:mb-6 relative overflow-hidden text-center">
          <div className="inline-block relative">
            <h1 className="relative inline-block md:mb-0 mb-1">CASL</h1>
          </div>
        </section>
        <div>
          <section className={`mb-4 md:mb-6 animation-delay-400`}>
            <div className="text-md leading-relaxed">
              <p className="text-sm mb-4 text-bissbay-black/70 !font-medium animate-fade-in">
                Last Updated: June 10, 2025
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-600`}>
            <h3 className="mb-2 !text-[#5c6371]">1. Introduction</h3>
            <p className="text-md leading-relaxed font-medium">
              Bissbay adheres to Canada's Anti-Spam Legislation (CASL), which
              regulates Commercial Electronic Messages (CEMs) sent to Canadian
              recipients. This policy outlines our compliance with CASL's
              requirements for consent, identification, and unsubscribe
              mechanisms.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Scope and Definitions</h3>

            <div className="mb-4">
              <h4 className="mb-2 !text-[#5c6371]">
                2.1 What is a CEM?
              </h4>
              <p className="!mb-2 text-md leading-relaxed !font-semibold">
                A Commercial Electronic Message (CEM) is any electronic message
                (email, SMS, social media DM) that encourages commercial
                activity, including:
              </p>
              <ul className="text-md text-gray-700 space-y-1">
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Promotions or offers</p>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Business opportunities</p>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Advertising</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 !text-[#5c6371]">
                2.2 Who Must Comply?
              </h4>
              <p className="!mb-2 text-md leading-relaxed !font-semibold">
                This policy applies to all Bissbay employees, contractors, and
                third-party vendors sending CEMs to:
              </p>
              <ul className="text-md text-gray-700 space-y-1">
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Canadian residents</p>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Devices located in Canada</p>
                </li>
              </ul>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. Consent Requirements</h3>

            <div className="mb-4">
              <h4 className="mb-2 !text-[#5c6371]">
                3.1 Express Consent
              </h4>
              <p className="text-md leading-relaxed !mb-2 !font-semibold">
                Obtained through:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <p className="text-md leading-relaxed font-medium">
                    Unchecked checkboxes (e.g., "I agree to receive marketing
                    emails")
                  </p>
                </div>
                <div>
                  <div>
                    <p className="text-md leading-relaxed font-medium">
                      Separate opt-ins for different message types:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-green-600" />
                        <p className="text-gray-700">Email newsletters</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-green-600" />
                        <p className="text-gray-700">SMS promotions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-2 !text-[#5c6371]">
                3.2 Implied Consent
              </h4>
              <p className="!font-semibold !mb-2 text-md leading-relaxed">
                Applies when:
              </p>
              <ul className="text-md text-gray-700 mb-2 space-y-1">
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">
                    • Existing business relationship (e.g., purchase within last
                    2 years)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">
                    • Recipient's contact info is publicly available (B2B
                    exemption)
                  </p>
                </li>
              </ul>
              <div className="bg-orange-50 border-l-4 border-primary p-4 mb-2">
                <p className="text-md leading-relaxed font-medium">
                  For B2B communications, we may send CEMs without express
                  consent if the recipient's contact information is publicly
                  available and the message pertains to their professional role,
                  unless they have indicated they do not wish to receive such
                  messages.
                </p>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <AlertTriangle className="w-5 h-5" />
                <p className="text-md leading-relaxed font-medium">
                  Expiration: Implied consent expires after 24 months.
                </p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">4. Message Requirements</h3>
            <p className="!font-semibold !mb-2 text-md leading-relaxed">
              All CEMs must include:
            </p>
            <ol className="text-md space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <p className="text-md leading-relaxed font-medium">
                  1. Clear sender identification (Bissbay's name/logo)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div>
                  <p className="text-md leading-relaxed font-medium">
                    2. Contact information:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-md leading-relaxed font-medium">Physical address</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <EmailLink email={"dpo@bissbay.com"} />
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-md leading-relaxed font-medium">Phone: +91 9823662453</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <p className="text-md leading-relaxed font-medium">
                    3. Unsubscribe mechanism:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center">
                      <p className="text-md leading-relaxed font-medium">
                        • One-click link (no login required)
                      </p>
                    </li>
                    <li className="flex items-center">
                      <p className="text-md leading-relaxed font-medium">
                        • Processed within 10 business days
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">5. Unsubscribe Process</h3>
            <p className="!font-semibold !mb-2 text-md leading-relaxed">
              Recipients may opt out via:
            </p>
            <ul className="text-md text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <p className="text-md leading-relaxed font-medium">• Clicking "Unsubscribe" in any CEM</p>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-md leading-relaxed font-medium">• Replying "STOP" to SMS</p>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-md leading-relaxed font-medium">
                  • Emailing <EmailLink email={"dpo@bissbay.com"} />
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">6. Policy Enforcement</h3>

            <div className="mb-4">
              <h4 className="mb-2 !text-[#5c6371]">6.1 Training</h4>
              <ul className="text-md text-gray-700">
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Annual CASL training for marketing/sales teams</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 !text-[#5c6371]">6.2 Violations</h4>
              <ul className="text-md text-gray-700 space-y-1">
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• First offense: Retraining</p>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-md leading-relaxed font-medium">• Repeat offenses: Suspension of messaging privileges</p>
                </li>
              </ul>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1800`}>
            <h3 className="mb-2 !text-[#5c6371]">7. Policy Updates</h3>
            <p className="!mb-2 text-md leading-relaxed !font-semibold">
              Material changes will be communicated via:
            </p>
            <ul className="text-md text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <p className="text-md leading-relaxed font-medium">• Email notice (30 days prior)</p>
              </li>
              <li className="flex items-center gap-2">
                <p className="text-md leading-relaxed font-medium">• Website banner (60 days)</p>
              </li>
            </ul>
          </section>

          <section className={`animation-delay-2000`}>
            <h3 className="mb-2 !text-[#5c6371]">8. Contact</h3>
            <div className="text-md text-gray-700 space-y-2">
              <p className="text-md leading-relaxed font-medium">
                Questions? Email <EmailLink email={"dpo@bissbay.com"} />
              </p>
              <p className="text-md leading-relaxed font-medium">
                Office#602, Clover Hills Plaza, NIBM Rd, 411048, Pune,
                Maharashtra, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CASL;
