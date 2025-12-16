"use client";
import React from "react";

function GDPR() {
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
            <h1 className="relative inline-block md:mb-0 mb-1">GDPR Compliance</h1>
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
              At Bissbay, we take your privacy seriously. As a B2B lead generation
              company, we are committed to complying with the General Data
              Protection Regulation (GDPR) and ensuring the lawful, fair, and
              transparent processing of personal data. This policy outlines how we
              collect, process, store, and protect personal data.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Data We Collect</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              We collect and process personal data to provide B2B lead generation
              services. The data may include:
            </p>
            <ul className="space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">• Name and job title</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Business email address and phone number</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Company name, industry, and location</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Professional social media profiles (e.g., LinkedIn)</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Business interests and preferences</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Other publicly available business-related information</p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. How We Collect Data</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              We collect personal data through:
            </p>
            <ul className="text-md text-bissbay-black leading-relaxed space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Publicly available sources (e.g., business directories, social
                  media, company websites)
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Direct interactions with prospects, clients, and partners</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Third-party data providers and business networks</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Events, webinars, and online forms</p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">4. Purpose of Data Processing</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              We process personal data for:
            </p>
            <ul className="space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">• B2B marketing and lead generation</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • Outreach and communication with potential business clients
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Providing services, webinars, and marketing insights</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Enhancing and personalizing our marketing strategies</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Compliance with legal and regulatory obligations</p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">5. Legal Basis for Processing</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              We process personal data based on:
            </p>
            <ul className="space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Legitimate Interest:</strong> To conduct B2B marketing
                  activities, specifically providing lead generation services to
                  potential business clients, as long as it does not override
                  individual rights.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Consent:</strong> When required, we obtain explicit
                  consent for specific processing activities.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Contractual Necessity:</strong> When processing is
                  needed to fulfill contractual obligations.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Legal Compliance:</strong> To comply with applicable
                  laws and regulations.
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">6. Data Protection and Security</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              We implement strict security measures to protect personal data from
              unauthorized access, alteration, or disclosure. These include:
            </p>
            <ul className="text-md text-bissbay-black leading-relaxed space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">• Encryption and secure storage of data</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Access controls and authentication mechanisms</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Regular security assessments and audits</p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1800`}>
            <h3 className="mb-2 !text-[#5c6371]">7. Data Retention</h3>
            <p className="text-md leading-relaxed font-medium">
              We retain personal data only for as long as necessary for the
              purposes outlined in this policy. Data is reviewed periodically, and
              unnecessary data is securely deleted.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2000`}>
            <h3 className="mb-2 !text-[#5c6371]">8. Data Subject Rights</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              Under GDPR, individuals have the following rights:
            </p>
            <ul className="space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Right to Access:</strong> Request access to personal
                  data we hold.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Right to Rectification:</strong> Request correction of
                  inaccurate data.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Right to Erasure:</strong> Request deletion of
                  personal data under certain conditions.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Right to Restrict Processing:</strong> Request
                  restriction of data processing.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Right to Data Portability:</strong> Request transfer
                  of personal data to another organization.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  • <strong>Right to Object:</strong> Object to certain types of
                  processing, such as direct marketing.
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2200`}>
            <h3 className="mb-2 !text-[#5c6371]">9. Third-Party Data Sharing</h3>
            <p className="text-md leading-relaxed font-medium">
              We do not sell personal data. We may share data with trusted service
              providers, such as CRM systems, marketing automation platforms, and
              data enrichment services, to facilitate our lead generation and
              marketing activities. All third parties comply with GDPR
              requirements.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2400`}>
            <h3 className="mb-2 !text-[#5c6371]">10. International Data Transfers</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              If data is transferred outside the EU/EEA, we ensure adequate
              protection through:
            </p>
            <ul className="space-y-1">
              <li>
                <p className="text-md leading-relaxed font-medium">• Standard contractual clauses</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Adequacy decisions</p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">• Other GDPR-compliant safeguards</p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2600`}>
            <h3 className="mb-2 !text-[#5c6371]">11. Contact and Complaints</h3>
            <p className="!mb-2 !font-semibold text-md leading-relaxed">
              If you have any questions or concerns regarding your data, you can
              contact our Data Protection Officer (DPO) at:
            </p>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 md:p-6 p-4 w-fit rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-md leading-relaxed font-medium">
                Bissbay Data Protection Officer
                <br />
                <EmailLink email={'dpo@bissbay.com'} />
                <br />
                Office#602, Clover Hills Plaza, NIBM Rd, 411048, Pune, Maharashtra, India
              </p>
            </div>
            <p className="!mt-2 text-md leading-relaxed font-medium">
              You also have the right to file a complaint with a Data Protection
              Authority if you believe your rights have been violated.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2800`}>
            <h3 className="mb-2 !text-[#5c6371]">12. Policy Updates</h3>
            <p className="text-md leading-relaxed font-medium">
              We may update this policy periodically, and at least annually, to
              reflect changes in our practices or legal requirements. We encourage
              you to review this policy regularly.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-3000`}>
            <h3 className="mb-2 !text-[#5c6371]">13. Automated Decision-Making and Profiling</h3>
            <p className="text-md leading-relaxed font-medium">
              Bissbay currently does not engage in automated decision-making or
              profiling that produces legal effects concerning data subjects or
              similarly significantly affects them. If this practice changes in
              the future, this policy will be updated to reflect those changes.
            </p>
          </section>

          <section className={`animation-delay-3200`}>
            <h3 className="mb-2 !text-[#5c6371]">14. Cookie Policy Reference</h3>
            <p className="text-md leading-relaxed font-medium">
              For information regarding the use of cookies on our website, please
              refer to our <PolicyRedirect label={'Cookie Policy'} src={'/policies/cookie-policy'} />
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GDPR;
