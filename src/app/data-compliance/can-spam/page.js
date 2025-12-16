"use client";
import React from "react";

function CANSPAM() {
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
            <h1 className="relative inline-block md:mb-0 mb-1">CAN-SPAM</h1>
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
            <h3 className="mb-2 !text-[#5c6371]">1. Purpose</h3>
            <p className="text-md leading-relaxed font-medium">
              Bissbay is committed to complying with the CAN-SPAM Act (2003), a
              U.S. law regulating commercial electronic messages (CEMs). This
              policy outlines our practices to ensure transparency, consent, and
              accountability in email communications.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Scope</h3>
            <p className="text-md leading-relaxed !mb-2 !font-semibold">
              This policy applies to all commercial emails sent by Bissbay to
              recipients in the United States, including:
            </p>
            <ul className="mb-2 space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Promotional emails.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Marketing newsletters.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Partner or affiliate communications.
                </p>
              </li>
            </ul>
            <p className="text-md leading-relaxed font-medium">
              <span className="font-semibold">Exemptions:</span> Transactional
              emails (e.g., order confirmations, shipping notices, customer
              service responses) are exempt from CAN-SPAM requirements.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">
              3. Key Requirements & Bissbay's Compliance Measures
            </h3>

            <div className="space-y-4">
              {/* Subsection A */}
              <div>
                <h4 className="mb-2 !text-[#5c6371]">
                  A. Accurate and Transparent Content
                </h4>
                <ul className="space-y-2">
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      <strong>Subject Lines:</strong> Must truthfully
                      reflect email content (no deception).
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      <strong>
                        Sender Identification Clearly state:
                      </strong>
                    </p>
                    <ul className="space-y-1 mt-1">
                      <li>
                        <p className="text-md leading-relaxed font-medium">
                          • The message is an advertisement (if applicable).
                        </p>
                      </li>
                      <li>
                        <p className="text-md leading-relaxed font-medium">
                          • "Bissbay" as the sender.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      <strong>Physical Address:</strong> Include a
                      valid postal address (e.g., Bissbay's headquarters or
                      registered agent).
                    </p>
                  </li>
                </ul>
              </div>

              {/* Subsection B */}
              <div>
                <h4 className="mb-2 !text-[#5c6371]">
                  B. Opt-Out Mechanism
                </h4>
                <ul className="space-y-2">
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      <strong>Unsubscribe Link:</strong> Every CEM
                      must include a clear, working unsubscribe link.
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      <strong>Opt-Out Processing:</strong>
                    </p>
                    <ul className="space-y-1 mt-1">
                      <li>
                        <p className="text-md leading-relaxed font-medium">
                          • Honor requests within 10 business days.
                        </p>
                      </li>
                      <li>
                        <p className="text-md leading-relaxed font-medium">
                          • No further marketing emails after opt-out.
                        </p>
                      </li>
                      <li>
                        <p className="text-md leading-relaxed font-medium">
                          • Suppress unsubscribed emails from future campaigns.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Subsection C */}
              <div>
                <h4 className="mb-2 !text-[#5c6371]">C. Record-Keeping</h4>
                <p className="text-md leading-relaxed font-medium">
                  <strong>Maintain logs of:</strong>
                </p>
                <ul className="space-y-1 mt-1">
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • Unsubscribe requests and timestamps.
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • Actions taken to comply.
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • Email content audits for accuracy.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">4. Responsibilities</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>Marketing Team:</strong> Ensure all CEMs
                  meet CAN-SPAM standards before sending.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>IT/Operations:</strong> Maintain opt-out
                  lists and suppress unsubscribed addresses.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>Legal/Compliance:</strong> Conduct
                  quarterly audits and update policies as needed.
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">5. Violations & Penalties</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  Non-compliance may result in fines as per violation.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  Employees or partners violating this policy will face corrective
                  action.
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">6. Contact Us</h3>
            <p className="text-md leading-relaxed !font-semibold !mb-2">
              For questions about this policy or to report concerns:
            </p>
            <ul className="space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>Email:</strong> <EmailLink email={"dpo@bissbay.com"} />
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>Postal Address: </strong>
                  Office#602, Clover Hills Plaza, NIBM Rd, 411048, Pune,
                  Maharashtra, India
                </p>
              </li>
            </ul>
          </section>

          {/* Footer */}
          <section className={`animation-delay-1800`}>
            <p className="text-md leading-relaxed font-medium">
              <span className="font-semibold text-bissbay-orange">
                Policy Updates:
              </span>{" "}
              Bissbay reserves the right to amend this policy to reflect legal
              changes. Users will be notified of significant updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CANSPAM;
