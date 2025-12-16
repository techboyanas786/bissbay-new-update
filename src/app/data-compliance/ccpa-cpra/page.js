"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

function CCPA() {
  const EmailLink = ({ email }) => {
    return (
      <a
        href={`mailto:${email}`}
        className="!font-semibold hover:text-primary transition-colors duration-200"
        onClick={(e) => {
          if (typeof window !== "undefined" && window.navigator?.msLaunchUri) {
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
            <h1 className="relative inline-block md:mb-0 mb-1">CCPA & CPRA</h1>
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
              Bissbay complies with the California Consumer Privacy Act (CCPA) and
              California Privacy Rights Act (CPRA). This policy explains how
              California residents can exercise their privacy rights, including
              opting out of data sales/sharing and managing cookies.
            </p>
            <div className="mt-4">
              <h4 className="mb-2 !text-[#5c6371]">Scope:</h4>
              <ul className="space-y-2">
                <li>
                  <p className="text-md leading-relaxed font-medium">
                    • Applies to California residents (consumers, employees,
                    business contacts)
                  </p>
                </li>
                <li>
                  <p className="text-md leading-relaxed font-medium">
                    • Authorized agents may submit requests with proof of
                    authority
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Your Rights</h3>
            <div className="space-y-2">
              <div>
                <p className="!font-semibold text-bissbay-black">
                  • Know/Access
                </p>
                <p className="text-md leading-relaxed font-medium">
                  Request a report of your personal data collected, used, or sold.
                </p>
              </div>

              <div>
                <p className="!font-semibold text-bissbay-black">
                  • Delete
                </p>
                <p className="text-md leading-relaxed font-medium">
                  Ask us to erase your data (with exceptions).
                </p>
              </div>

              <div>
                <p className="!font-semibold text-bissbay-black">
                  • Opt-Out of Sale/Sharing
                </p>
                <p className="text-md leading-relaxed font-medium">
                  Direct us to stop selling/sharing your data.
                </p>
              </div>

              <div>
                <p className="!font-semibold text-bissbay-black">
                  • Correct
                </p>
                <p className="text-md leading-relaxed font-medium">Fix inaccuracies in your data.</p>
              </div>

              <div>
                <p className="!font-semibold text-bissbay-black">
                  • Limit Sensitive Data
                </p>
                <p className="text-md leading-relaxed font-medium">
                  Restrict use of sensitive info (e.g., SSN, health data).
                </p>
              </div>

              <div>
                <p className="!font-semibold text-bissbay-black">
                  • Non-Discrimination
                </p>
                <p className="text-md leading-relaxed font-medium">No retaliation for exercising rights.</p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. How to Exercise Your Rights</h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 !text-[#5c6371]">
                  A. Submit a Request
                </h4>

                <div className="mb-4">
                  <p className="!text-lg text-gray-900 mb-2">
                    1. Online Form (Preferred):
                  </p>
                  <Link href={'/contact-us'}>
                    <Button
                      label="Privacy Request Form"
                      customClass="cursor-pointer"
                    />
                  </Link>
                  <p className="text-md leading-relaxed font-medium mt-2">
                    Required fields: Name, Email, Company, Zip Code, Phone,
                    Request Type.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 !text-[#5c6371]">4. Email/Phone:</h4>
                  <div className="space-y-2">
                    <div className="flex gap-3 items-center">
                      <Mail className="w-5 h-5 text-primary" />
                      <EmailLink email={"dpo@bissbay.com"} />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a
                        href="tel:+919823662453"
                        className="text-md font-medium underline"
                      >
                        +91-9823662453
                      </a>
                    </div>
                  </div>
                  <p className="!mt-2 text-md leading-relaxed font-medium">
                    <strong>For Authorized Agents:</strong> Provide signed
                    permission or power of attorney.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-2 !text-[#5c6371]">
                  B. Do Not Sell or Share My Personal Information
                </h4>

                <p className="text-md leading-relaxed font-medium">
                  California residents may opt out of the sale or sharing of their
                  data:
                </p>

                <div className="space-y-2 mt-2">
                  <div>
                    <p className="!text-lg text-gray-900 mb-2">
                      1. Immediate Opt-Out:
                    </p>
                    <Link href='/contact-us'>
                      <Button
                        label="Do Not Sell or Share My Info"
                        customClass="cursor-pointer"
                      />
                    </Link>
                  </div>

                  <p className="text-md leading-relaxed font-medium">
                    • <strong>Cookie-Based Opt-Out:</strong> Manage preferences
                    via our Cookie Consent Tool.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              5. Cookie & Tracking Disclosure
            </h3>

            <p className="text-md leading-relaxed !font-semibold !mb-2">
              We use cookies for:
            </p>

            <ul className="mb-2 space-y-2">
              <li className="text-md text-gray-700">
                <strong>• Essential Operations</strong> (required)
              </li>
              <li className="text-md text-gray-700">
                <strong>• Analytics</strong> (optional; opt out via Cookie
                Settings)
              </li>
              <li className="text-md text-gray-700">
                <strong>• Targeted Advertising</strong> (opt out via YourAdChoices
                or our form)
              </li>
            </ul>

            <p className="text-md leading-relaxed font-medium">
              <strong>To Disable Cookies:</strong> Adjust browser settings (e.g.,
              Chrome, Firefox).
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">
              6. Request Processing Timeline
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 !text-[#5c6371]">Response Times:</h4>

                <div className="space-y-2">
                  <div>
                    <p className="!font-semibold text-bissbay-black">
                      • Access/Deletion/Correction
                    </p>
                    <p className="text-md leading-relaxed font-medium">
                      45 days (may extend +45 days with notice)
                    </p>
                  </div>

                  <div>
                    <p className="!font-semibold text-bissbay-black">
                      • Opt-Out of Sale/Sharing
                    </p>
                    <p className="text-md leading-relaxed font-medium">10 business days</p>
                  </div>

                  <div>
                    <p className="!font-semibold text-bissbay-black">
                      • Sensitive Data Limitation
                    </p>
                    <p className="text-md leading-relaxed font-medium">45 days</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 !text-[#5c6371]">Steps:</h4>
                <ol className="text-md text-gray-700 space-y-2">
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • <strong>Verification:</strong> We'll confirm your identity
                      via email/phone.
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • <strong>Resolution:</strong> You'll receive a response or
                      request for more info.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className={`animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">7. Contact Us</h3>

            <h4 className="mb-2 !text-[#5c6371]">Privacy Team</h4>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <EmailLink email={"dpo@bissbay.com"} />
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919823662453"
                  className="text-md leading-relaxed font-medium"
                >
                  +91-9823662453
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="text-md leading-relaxed font-medium">
                    Office#602, Clover Hills Plaza, NIBM Rd, 411048, Pune,
                    Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CCPA;
