"use client";
import React from "react";

function SecurityPolicy() {
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
            <h1 className="relative inline-block md:mb-0 mb-1">Information Security Policy</h1>
            <br />
            
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
              This policy establishes security standards to protect Bissbay's
              data, systems, networks, and personnel from internal and external
              threats. It ensures compliance with GDPR, CCPA (if
              applicable), and industry best practices.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Scope</h3>
            <p className="!font-semibold text-md !mb-2 leading-relaxed">
              Applies to:
            </p>
            <div>
              <p className="text-md leading-relaxed font-medium">
                • All employees, contractors, vendors, and third parties with
                access to Bissbay systems.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Company-owned and BYOD devices (if permitted) used for work.
              </p>
              <p className="text-md leading-relaxed font-medium">
                • Physical and cloud-based assets (servers, SaaS tools,
                databases).
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. Security Roles & Responsibilities</h3>
            <div className="space-y-4">
              <div>
                <h4 className="!text-[#5c6371]">Employees</h4>
                <p className="text-md leading-relaxed font-medium">
                  Follow security protocols, report incidents, use strong
                  passwords.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">IT Team</h4>
                <p className="text-md leading-relaxed font-medium">
                  Implement firewalls, encryption, access controls, and monitor
                  threats.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Management</h4>
                <p className="text-md leading-relaxed font-medium">
                  Allocate security budgets, enforce compliance, approve access.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">
                  Data Protection Officer (DPO)
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Oversee GDPR/CCPA compliance (if applicable).
                </p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              4. Data Classification & Handling
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="!text-[#5c6371]">Confidential</h4>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">Examples:</span> PII, trade
                  secrets, financial data
                </p>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">Protection Required:</span>{" "}
                  Encryption, strict access controls
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Internal Use</h4>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">Examples:</span> HR policies,
                  internal reports
                </p>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">Protection Required:</span>{" "}
                  Role-based access
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Public</h4>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">Examples:</span> Marketing
                  materials, press releases
                </p>
                <p className="text-md leading-relaxed font-medium">
                  <span className="font-semibold">Protection Required:</span> No
                  restrictions
                </p>
              </div>

              <div>
                <h4 className="!text-[#5c6371]">Data Retention:</h4>
                <div>
                  <p className="text-md leading-relaxed font-medium">
                    Retain only as long as necessary (e.g., employee records = 7
                    years post-termination).
                  </p>
                  <p className="text-md leading-relaxed font-medium">
                    Securely delete/destroy expired data (e.g., shredding,
                    cryptographic erasure).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">
              5. Access Control
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="!text-[#5c6371]">
                  Principle of Least Privilege (PoLP):
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Grant minimal access needed.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">
                  Multi-Factor Authentication (MFA):
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Required for remote access, admin accounts.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Password Rules:</h4>
                <p className="text-md leading-relaxed font-medium">
                  12+ chars, mix of upper/lowercase, numbers, symbols. Change
                  every 90 days.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Offboarding:</h4>
                <p className="text-md leading-relaxed font-medium">
                  Immediate revocation of access upon exit.
                </p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">
              6. Network & Device Security
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="!text-[#5c6371]">
                  Firewalls & Encryption:
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Mandatory for all networks and sensitive data.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">VPN:</h4>
                <p className="text-md leading-relaxed font-medium">
                  Required for remote work.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Patch Management:</h4>
                <p className="text-md leading-relaxed font-medium">
                  Regular OS/software updates.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">
                  BYOD Policy (if allowed):
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  MDM enrollment, remote wipe capability.
                </p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              7. Incident Response
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="!text-[#5c6371]">
                  Report Immediately:
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Email <EmailLink email={"security@bissbay.com"} /> or call
                  +91 9823662453.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Containment:</h4>
                <p className="text-md leading-relaxed font-medium">Isolate affected systems.</p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Investigation:</h4>
                <p className="text-md leading-relaxed font-medium">
                  Root-cause analysis within 72 hours.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Notification:</h4>
                <p className="text-md leading-relaxed font-medium">
                  Inform affected parties/regulators if legally required (e.g.,
                  GDPR 72-hour rule).
                </p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2000`}>
            <h3 className="mb-2 !text-[#5c6371]">
              8. Physical Security
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="!text-[#5c6371]">
                  Restricted Access:
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Keycards/biometrics for server rooms.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">
                  Clean Desk Policy:
                </h4>
                <p className="text-md leading-relaxed font-medium">
                  Lock away confidential documents.
                </p>
              </div>
              <div>
                <h4 className="!text-[#5c6371]">Secure Disposal:</h4>
                <p className="text-md leading-relaxed font-medium">
                  Shred documents, degauss/destroy old hard drives.
                </p>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              9. Training & Awareness
            </h3>
            <div>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Annual Training:</span> Cybersecurity
                best practices.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Phishing Tests:</span> Quarterly
                simulated attacks.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Acknowledgment:</span> Employees must
                sign compliance forms.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2400`}>
            <h3 className="mb-2 !text-[#5c6371]">
              10. Compliance & Audits
            </h3>
            <div>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Annual Security Audit:</span>{" "}
                Penetration testing, vulnerability scans.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Vendor Assessments:</span> Third
                parties must meet Bissbay's security standards.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Regulatory Fines:</span>{" "}
                Non-compliance may result in penalties under GDPR/CCPA.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2600`}>
            <h3 className="mb-2 !text-[#5c6371]">
              11. Policy Violations
            </h3>
            <div>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Minor Breach:</span> Retraining.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Major Breach:</span>{" "}
                Suspension/termination + legal action.
              </p>
            </div>
          </section>

          <section className={`animation-delay-2800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              12. Exceptions & Revisions
            </h3>
            <div>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Exceptions:</span> Require CISO/DPO
                approval.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <span className="font-bold">Version Control:</span> Document all
                changes (e.g., "v2.0 – June 2025").
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SecurityPolicy;
