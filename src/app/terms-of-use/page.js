"use client";
import React from "react";
import { Mail } from "lucide-react";

function TrustCentre() {
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
            <h1 className="relative inline-block md:mb-0 mb-1">Terms of Use</h1>
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
            <h3 className="mb-2 !text-[#5c6371]">1. Introduction and Acceptance of Terms</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                These Terms of Use, together with the Bissbay <PolicyRedirect label={'Privacy Policy'} src={'policies/privacy-policy'}/> and any
                supplementary terms, conditions, notices, or disclaimers explicitly
                referenced herein or displayed on the website located at <PolicyRedirect label={`https://www.bissbay.com/`} src={'/'}/> (the "Website"), collectively constitute the legally
                binding agreement (the "Terms") governing your access to and use of
                the Website and its associated services.
              </p>
              <p className="text-md leading-relaxed font-medium">
                By accessing, Browse, or otherwise using the Website, you
                acknowledge that you have read, understood, and agree to be bound by
                these Terms in their entirety. If you do not accept these Terms, you
                are required to cease all use of the Website immediately.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">2. Definitions</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>"We," "Us," "Our," or "Bissbay"</strong> refers to
                  Bissbay Pvt Ltd, a private limited company incorporated under
                  the laws of India (CIN: U74999PN2018PTC178022).
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>"You" or "Your"</strong> refers to any individual or
                  entity accessing or using the Website.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>"Website"</strong> refers to <PolicyRedirect label={`https://www.bissbay.com/`} src={'/'}/> including
                  all its content, features, and services.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>"Terms"</strong> encompasses these Terms of Use, the
                  Bissbay Privacy Policy, and any other applicable policies or
                  guidelines posted on the Website.
                </p>
              </li>
              <li>
                <p className="text-md leading-relaxed font-medium">
                  <strong>"Content"</strong> includes all text, graphics, images,
                  logos, trademarks, software, audio, video, information, and
                  other materials available on or through the Website.
                </p>
              </li>
            </ul>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">3. Modification of Terms</h3>
            <p className="text-md leading-relaxed font-medium">
              Bissbay reserves the right, at its sole discretion, to modify,
              amend, or update these Terms at any time. Any such changes will be
              effective immediately upon posting the revised Terms on the Website.
              Your continued access or use of the Website following the posting of
              any changes constitutes your acceptance of such revised Terms. We
              encourage you to review these Terms periodically. If you object to
              any modification, your sole recourse is to discontinue using the
              Website.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">4. Website Access and Availability</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>4.1.</strong> Bissbay will endeavor to maintain the
                operational availability of the Website. However, access may be
                subject to interruption, suspension, or termination, without
                prior notice, due to maintenance, system failures, technical
                issues, or circumstances beyond our reasonable control.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>4.2.</strong> We do not guarantee that the Website will
                be uninterrupted, secure, or free from errors, viruses, or other
                harmful components.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>4.3.</strong> Bissbay reserves the absolute right to
                modify, suspend, or permanently discontinue any aspect, feature,
                or service of the Website at any time, without liability or
                prior notice.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">5. User Registration and Conduct</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>5.1.</strong> Access to certain features or services on
                the Website may necessitate user registration. You agree to
                provide accurate, complete, and current information during the
                registration process and to update such information as necessary
                to maintain its accuracy.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>5.2.</strong> The collection and use of your personal
                data are governed by our Privacy Policy, which is incorporated
                by reference into these Terms.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>5.3.</strong> You are responsible for maintaining the
                confidentiality of any account credentials and for all
                activities that occur under your account.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>5.4.</strong> You agree not to use the Website for any
                unlawful purpose or in any manner that could damage, disable,
                overburden, or impair the Website or interfere with any other
                party's use and enjoyment of the Website. Prohibited conduct
                includes, but is not limited to, violating applicable laws,
                infringing intellectual property rights, transmitting harmful
                code, or engaging in fraudulent activity.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>5.5.</strong> Bissbay reserves the right to suspend or
                terminate your access to the Website, without notice, if we
                determine, in our sole discretion, that you have violated these
                Terms, misused the Website or its services, or engaged in
                conduct detrimental to Bissbay or other users.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">6. Intellectual Property Rights</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>6.1.</strong> All Content on the Website, including
                text, graphics, logos, icons, images, audio clips, video clips,
                data compilations, and software, is the exclusive property of
                Bissbay or its licensors and is protected by Indian and
                international copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>6.2.</strong> Bissbay grants you a limited,
                non-exclusive, non-transferable, revocable license to access and
                use the Website and its Content solely for your personal,
                non-commercial use, subject to these Terms.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>6.3.</strong> You must not reproduce, distribute,
                modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the
                Content without the prior written consent of Bissbay, except as
                permitted by law or explicitly authorized within these Terms.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>6.4.</strong> All trademarks, service marks, logos, and
                trade names displayed on the Website are the registered or
                unregistered trademarks of Bissbay or respective third parties.
                Use of these trademarks without prior written authorization from
                the owner is strictly prohibited.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>6.5.</strong> The Website may contain intellectual
                property belonging to third parties. No license or right is
                granted to you by implication, estoppel, or otherwise under any
                intellectual property rights owned or controlled by Bissbay or
                any third party, except as expressly provided in these Terms.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-1800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              7. Third-Party Links, Advertisements, and Content
            </h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>7.1.</strong> The Website may contain links to websites
                or resources operated by third parties. These links are provided
                solely for your convenience. Bissbay does not endorse, control,
                or assume any responsibility for the content, privacy policies,
                or practices of any third-party websites or resources. Your
                access and use of such third-party sites are entirely at your
                own risk.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>7.2.</strong> Advertisements or promotions from third
                parties may be displayed on the Website. The display of such
                advertisements does not constitute an endorsement or
                recommendation by Bissbay. All dealings between you and any
                third-party advertiser are solely between you and that
                advertiser, and you agree that Bissbay shall not be responsible
                or liable for any loss or damage incurred as a result of such
                dealings.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>7.3.</strong> Any participation in offline events,
                competitions, or promotions hosted or organized by third
                parties, even if promoted via the Website, is at your own
                discretion and risk.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2000`}>
            <h3 className="mb-2 !text-[#5c6371]">8. Disclaimer of Professional Advice</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>8.1.</strong> The Content provided on the Website is
                intended for general informational purposes only. It does not
                constitute professional, financial, legal, or any other form of
                advice.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>8.2.</strong> Bissbay makes no representations or
                warranties regarding the accuracy, completeness, reliability,
                suitability, or timeliness of the Content. You should not rely
                solely on the information provided on the Website for making
                decisions. If specific services are sought from Bissbay, such
                services will be governed by a separate, mutually agreed-upon
                contract.
              </p>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              9. Disclaimer of Warranties and Limitation of Liability
            </h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>9.1.</strong> YOUR USE OF THE WEBSITE AND ITS CONTENT IS
                AT YOUR SOLE RISK. THE WEBSITE AND CONTENT ARE PROVIDED ON AN
                "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>9.2.</strong> TO THE FULLEST EXTENT PERMITTED BY
                APPLICABLE LAW, BISSBAY HEREBY DISCLAIMS ALL WARRANTIES, EXPRESS
                OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                NON-INFRINGEMENT.
              </p>
              <div>
                <p className="text-md leading-relaxed font-medium">
                  <strong>9.3.</strong> TO THE FULLEST EXTENT PERMITTED BY LAW,
                  BISSBAY, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                  AND LICENSORS SHALL NOT BE LIABLE FOR ANY:
                </p>
                <ul className="space-y-1 mt-2">
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                      PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED
                      TO, DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE,
                      DATA, OR OTHER INTANGIBLE LOSSES;
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • DAMAGES ARISING FROM YOUR ACCESS TO, USE OF, OR INABILITY
                      TO ACCESS OR USE THE WEBSITE;
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • DAMAGES RESULTING FROM ANY ERRORS, OMISSIONS,
                      INTERRUPTIONS, DEFECTS, DELAYS IN OPERATION OR TRANSMISSION,
                      OR ANY FAILURE OF PERFORMANCE OF THE WEBSITE;
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • DAMAGES RESULTING FROM VIRUSES, MALWARE, OR OTHER HARMFUL
                      COMPONENTS OBTAINED THROUGH THE WEBSITE OR FROM ANY CONTENT,
                      INCLUDING CONTENT PROVIDED BY THIRD PARTIES.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-md leading-relaxed font-medium">
                  <strong>9.4.</strong> WHERE LIABILITY CANNOT BE LAWFULLY
                  EXCLUDED OR LIMITED, BISSBAY'S TOTAL AGGREGATE LIABILITY ARISING
                  OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE
                  WEBSITE SHALL BE LIMITED, AT BISSBAY'S SOLE OPTION, TO EITHER:
                </p>
                <ul className="space-y-1 mt-2">
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • THE RE-SUPPLY OF THE SPECIFIC SERVICE AFFECTED; OR
                    </p>
                  </li>
                  <li>
                    <p className="text-md leading-relaxed font-medium">
                      • THE PAYMENT OF THE COST OF HAVING THE SPECIFIC SERVICE RE-SUPPLIED.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2400`}>
            <h3 className="mb-2 !text-[#5c6371]">10. Indemnification</h3>
            <p className="text-md leading-relaxed font-medium">
              You agree to defend, indemnify, and hold harmless Bissbay, its
              affiliates, licensors, and service providers, and its and their
              respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors, and assigns from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees (including reasonable attorneys' fees) arising out
              of or relating to your violation of these Terms or your use of the
              Website, including, but not limited to, any use of the Website's
              Content, services, and products other than as expressly authorized
              in these Terms or your use of any information obtained from the
              Website.
            </p>
          </section>

          <section className={`mb-4 md:mb-6 animation-delay-2600`}>
            <h3 className="mb-2 !text-[#5c6371]">11. General Provisions</h3>
            <div className="space-y-2">
              <p className="text-md leading-relaxed font-medium">
                <strong>11.1. Governing Law and Jurisdiction:</strong> These
                Terms and any dispute or claim arising out of, or related to,
                them, their subject matter, or their formation (in each case,
                including non-contractual disputes or claims) shall be governed
                by and construed in accordance with the laws of India, without
                giving effect to any choice or conflict of law provision or
                rule. Any legal suit, action, or proceeding arising out of, or
                related to, these Terms or the Website shall be instituted
                exclusively in the competent courts located in Pune,
                Maharashtra, India.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>11.2. International Use:</strong> Users accessing the
                Website from outside India do so at their own initiative and are
                solely responsible for compliance with all applicable local
                laws.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>11.3. Severability:</strong> If any provision of these
                Terms is held by a court or other tribunal of competent
                jurisdiction to be invalid, illegal, or unenforceable for any
                reason, such provision shall be eliminated or limited to the
                minimum extent such that the remaining provisions of the Terms
                will continue in full force and effect.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>11.4. No Waiver:</strong> No waiver by Bissbay of any
                term or condition set out in these Terms shall be deemed a
                further or continuing waiver of such term or condition or a
                waiver of any other term or condition, and any failure of
                Bissbay to assert a right or provision under these Terms shall
                not constitute a waiver of such right or provision.
              </p>
              <p className="text-md leading-relaxed font-medium">
                <strong>11.5. Entire Agreement:</strong> These Terms, including
                the Privacy Policy and any other documents incorporated by
                reference, constitute the sole and entire agreement between you
                and Bissbay regarding the Website and supersede all prior and
                contemporaneous understandings, agreements, representations, and
                warranties, both written and oral, regarding the Website.
              </p>
            </div>
          </section>

          <section className={`animation-delay-2800`}>
            <h3 className="mb-2 !text-[#5c6371]">12. Contact Information</h3>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 md:p-6 p-4 w-fit rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-md leading-relaxed font-medium">
                For any questions, concerns, or notices regarding these Terms.
              </p>
              <div className="flex w-fit md:flex-row flex-col space-x-0 md:space-x-3">
                <p className="text-md leading-relaxed font-medium">
                  Please contact Bissbay
                </p>
                
                <p className="flex items-center gap-2 text-md leading-relaxed font-medium">
                  <Mail className="h-5 w-5 text-primary" /><EmailLink email={'contact@bissbay.com'}/>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TrustCentre;
