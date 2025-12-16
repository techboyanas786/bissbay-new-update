"use client";
import React from "react";
import { Mail } from "lucide-react";

function Unsubscribe() {
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
            <h1 className="relative inline-block md:mb-0 mb-1">Subscribe & Unsubscribe Policy</h1>
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
                At Bissbay Pvt Ltd (
                <span className="font-semibold text-black">
                  "Bissbay," "we," "us," "our"
                </span>
                ), we value clear communication and respect your choices regarding
                the messages you receive from us. This policy outlines how you can
                subscribe to our communications (such as newsletters, promotional
                offers, and updates) and how you can easily unsubscribe at any time.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-600`}>
            <h3 className="mb-2 !text-[#5c6371]">1. Subscribing to Our Communications</h3>
            <p className="text-md leading-relaxed !font-semibold !mb-2">
              You can choose to receive communications from Bissbay through
              various methods, including:
            </p>
            <ul className="space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">• Website Forms:</span>{" "}
                  Voluntarily providing your email address and potentially other
                  contact details through specific sign-up forms on our website
                  (www.bissbay.com).
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">• Account Registration:</span>{" "}
                  Opting-in to receive communications during the process of
                  creating an account with Bissbay (if applicable).
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">• Checkboxes:</span> Ticking an
                  explicit consent checkbox when interacting with certain features
                  or services on our website.
                </p>
              </li>
            </ul>
            <p className="text-md leading-relaxed font-medium mt-2">
              By subscribing, you consent to receive emails and potentially other
              electronic communications from Bissbay related to our services,
              news, special offers, and relevant information. We primarily use
              your email address for these communications.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              2. Managing Your Preferences & Unsubscribing
            </h3>
            <p className="text-md leading-relaxed !font-semibold !mb-2">
              We believe unsubscribing should be as easy as subscribing. You have
              the right to withdraw your consent and stop receiving our
              communications at any time using any of the following methods:
            </p>
            <ul className="space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">
                    • Email Footer Link (Recommended):
                  </span>{" "}
                  Every promotional or newsletter email we send contains a clear
                  and prominent "Unsubscribe" link, usually located in the footer.
                  Clicking this link is the quickest way to opt-out from that
                  specific type of communication.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">
                    • Account Settings (If Applicable):
                  </span>{" "}
                  If you have a registered account with Bissbay, you may be able to manage your communication preferences directly within your account settings or profile section.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">
                    • Contacting Us:
                  </span>{" "}
                  You can request to be unsubscribed by contacting our support team directly. Please email us at [Insert Bissbay Support/Contact Email Address Here] with the subject line "Unsubscribe Request" and clearly state the email address you wish to remove.
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. Processing Your Unsubscribe Request</h3>
            <p className="text-md leading-relaxed !font-semibold !mb-2">
              We aim to process unsubscribe requests promptly:
            </p>
            <ul className="space-y-1 mb-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Unsubscribing via the email link is typically effective within a maximum of 48 hours.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Requests made via account settings (if applicable) should also take effect quickly.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Requests sent via email to our support team may take slightly longer, generally up to 10 business days, to allow for manual processing.
                </p>
              </li>
            </ul>
            <p className="text-md leading-relaxed font-medium mt-2">
              Please note that even after unsubscribing from marketing or
              promotional communications, you may still receive essential
              transactional or service-related emails necessary for the provision
              of any ongoing services you have with us (e.g., account
              notifications, password resets, purchase confirmations, important
              service updates if you are a direct client).
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">4. Data Privacy</h3>
            <p className="text-md leading-relaxed font-medium">
              When you subscribe, we collect and manage your contact information
              in accordance with our main{" "}
              <PolicyRedirect label={'Privacy Policy'} src={'/policies/privacy-policy'}/>
              . When you unsubscribe, we will retain your email address on a
              suppression list to ensure we honor your request and do not
              inadvertently re-subscribe or email you marketing content in the
              future, unless you explicitly opt-in again. For more details on how
              we handle your personal data, please review our full Privacy Policy.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">5. Changes to This Policy</h3>
            <p className="text-md leading-relaxed font-medium">
              We may update this Policy from time to time. Any changes will be
              posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className={`animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">6. Contact Us</h3>
            <p className="text-md leading-relaxed font-medium flex md:flex-row flex-col gap-1 w-fit">
              If you have any questions about this policy or your communication
              preferences, please contact us at:{" "}
              <span className="inline-flex items-center gap-1">
                <Mail className="h-5 w-5 text-primary" />
                <EmailLink email={'contact@bissbay.com'}/>
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Unsubscribe;
