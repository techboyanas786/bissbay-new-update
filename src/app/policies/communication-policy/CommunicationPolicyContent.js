"use client";
import React from "react";

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

function CommunicationPolicyContent() {
  return (
    <div className="pt-[115px] max-w-5xl mx-auto px-4 md:px-2 pb-4 md:pb-8 min-h-screen">
      <div className="bg-gray-50 rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary px-2 md:px-6 py-4">
        <section className="mb-4 md:mb-6 relative overflow-hidden text-center">
          <div className="inline-block relative">
            <h1 className="relative inline-block md:mb-0 mb-1">Communication Policy</h1>
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
                This policy establishes guidelines for internal and external
                communication to ensure transparency, professionalism, and alignment
                with Bissbay's mission and values.
              </p>
            </div>
          </section>

          {/* Section 1: Purpose */}
          <section className={`mb-4 md:mb-6 animation-delay-600`}>
            <h3 className="mb-2 !text-[#5c6371]">1. Purpose</h3>
            <p className="text-md leading-relaxed font-medium">
              This policy establishes guidelines for internal and external
              communication to ensure transparency, professionalism, and alignment
              with Bissbay's mission and values.
            </p>
          </section>

          {/* Section 2: Scope */}
          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Scope</h3>
            <p className="text-md leading-relaxed font-medium">
              Applies to all employees, partners, stakeholders (including
              investors, customers, and community members), and external
              collaborators representing Bissbay.
            </p>
          </section>

          {/* Section 3: Internal Communication */}
          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. Internal Communication</h3>

              <h4 className="mb-2 !text-[#5c6371]">
              3.1 General Principles
            </h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="!font-semibold text-bissbay-black">
                    • Clarity:
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    Messages must be concise and unambiguous.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <p className="!font-semibold text-bissbay-black">
                    • Respect:
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    Maintain a professional and inclusive tone.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <p className="!font-semibold text-bissbay-black">
                    • Accessibility:
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    Ensure all team members can access necessary tools.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="mb-2 !text-[#5c6371]">
              3.2 Approved Channels
            </h4>
          <div className="mb-4 overflow-hidden rounded-md border border-gray-300 w-fit">
            <table className="bg-gradient-to-r from-gray-50 to-orange-50 w-full table-auto">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border-r border-b border-gray-300 px-4 py-2 text-left">
                    Purpose
                  </th>
                  <th className="border-b border-gray-300 px-4 py-2 text-left">
                    Channel
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    Formal announcements
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">Email</td>
                </tr>
                <tr>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    Quick updates & clarifications
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Slack, Microsoft Teams
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    Strategic discussions
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Scheduled meetings (with agenda)
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-gray-300 px-4 py-2">
                    Document storage
                  </td>
                  <td className="px-4 py-2">
                    Google Drive, SharePoint
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

            <h4 className="mb-2 !text-[#5c6371]">3.3 Confidentiality</h4>
            <div className="space-y-2 mb-4">
              <p className="text-md leading-relaxed font-medium">
                • Sensitive information must be shared only with authorized
                personnel.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Use encrypted channels (e.g., encrypted email, company-approved
                encrypted file-sharing services) for confidential discussions.
              </p>
            </div>

            <h4 className="mb-2 !text-[#5c6371]">
              3.4 Conflict Resolution
            </h4>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                • Address conflicts directly and professionally.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Escalate unresolved issues to supervisors.
              </p>
            </div>
          </section>

          {/* Section 4: External Communication */}
          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">4. External Communication</h3>

            <h4 className="mb-2 !text-[#5c6371]">
              4.1 General Principles
            </h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="!font-semibold text-bissbay-black">
                    • Consistency:
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    All messages must reflect Bissbay's branding.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <p className="!font-semibold text-bissbay-black">
                    • Professionalism:
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    Maintain a courteous and polished tone.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <p className="!font-semibold text-bissbay-black">
                    • Responsiveness:
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    Acknowledge inquiries within 24-48 business hours
                    (Monday-Friday, 9 am-5 pm).
                  </p>
                </div>
              </div>
            </div>

            <h4 className="mb-2 !text-[#5c6371]">
              4.2 Authorized Spokespersons
            </h4>
            <div className="space-y-2 mb-4">
              <p className="text-md leading-relaxed font-medium">
                • Only designated representatives may speak to media, clients, or
                partners.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Unauthorized employees must redirect inquiries to PR/Leadership.
              </p>
            </div>

            <h4 className="mb-2 !text-[#5c6371]">
              4.3 Social Media Guidelines
            </h4>
            <div className="space-y-2 mb-4">
              <p className="text-md leading-relaxed font-medium">
                • Bissbay engages on select platforms to connect with clients and the B2B community in a professional manner.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Employees must avoid sharing confidential information and ensure alignment with brand tone and values.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • All official posts or responses require approval from the marketing team.
              </p>
            </div>

            <h4 className="mb-2 !text-[#5c6371]">
              4.4 Marketing & Branding
            </h4>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                • All promotional content must follow branding guidelines.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • No misleading claims in advertisements.
              </p>
            </div>
          </section>

          {/* Section 5: Email Etiquette */}
          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">5. Email Etiquette</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                ✔ Professional email addresses (e.g.,{" "}
                "firstname.lastname@bissbay.com")
              </p>
              <p className="text-md leading-relaxed font-medium">
                ✔ Clear subject lines (e.g., "Action Required: Q3 Budget
                Approval")
              </p>
              <p className="text-md leading-relaxed font-medium">
                ✔ Avoid excessive "Reply All" or unnecessary emails.
              </p>
              <p className="text-md leading-relaxed font-medium">
                ✔ Proofread all emails before sending.
              </p>
              <p className="text-md leading-relaxed font-medium">
                ✔ Use appropriate email signatures.
              </p>
            </div>
          </section>

          {/* Section 6: Crisis Communication */}
          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">6. Crisis Communication</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                • Follow the Bissbay Crisis Management Plan.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Only Crisis Response Team members may issue public statements.
              </p>
            </div>
          </section>

          {/* Section 7: Compliance & Training */}
          <section className={`mb-4 md:mb-6 animation-delay-1800`}>
            <h3 className="mb-2 !text-[#5c6371]">7. Compliance & Training</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                • Mandatory communication training for all employees.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Violations may result in disciplinary action.
              </p>
            </div>
          </section>

          {/* Section 8: Policy Review */}
          <section className={`animation-delay-2000`}>
            <h3 className="mb-2 !text-[#5c6371]">8. Policy Review</h3>
            <p className="text-md leading-relaxed font-medium">
              Annual review for relevance; feedback encouraged via{" "}
              <EmailLink email="contact@bissbay.com" />
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CommunicationPolicyContent;
