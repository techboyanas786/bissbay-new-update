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



function CookiePolicy() {
  return (
    <>
      <div className="pt-[115px] max-w-5xl mx-auto px-4 md:px-2 pb-4 md:pb-8 min-h-screen">
        <div className="bg-gray-50 rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary px-2 md:px-6 py-4">
          <section className="mb-4 md:mb-6 relative overflow-hidden text-center">
            <div className="inline-block relative">
              <h1 className="relative inline-block md:mb-0 mb-1">Cookie Policy</h1>
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
                  This policy outlines the types of cookies and local storage
                  principles used by{" "}
                  Bissbay. We
                  encourage you to review our Privacy Policy for more details on
                  how we process visitor data.
                </p>

                <p className="text-md leading-relaxed font-medium">
                  By continuing to use the Bissbay website after reading this
                  page, you signify your acceptance of this policy. Please note
                  that this policy is subject to change, so we recommend reviewing
                  it periodically. By using the Bissbay site, you agree to our use
                  of cookies (and local storage). You can manage cookies through
                  your browser settings.
                </p>
              </div>
            </section>

            {/* Section 1: What are Cookies */}
            <section className={`mb-4 md:mb-6 animation-delay-600`}>
              <h3 className="mb-2 !text-[#5c6371]">1. What are Cookies?</h3>
              <p className="text-md leading-relaxed font-medium">
                Cookies are small text files containing bits of data downloaded to
                your browsing device (such as a PC or mobile device) during each
                visit. Cookies enable websites to recognize new visitors and
                returning users, enhancing the browsing experience.
              </p>
            </section>

            {/* Section 2: Why Do We Use Cookies */}
            <section className={`mb-4 md:mb-6 animation-delay-800`}>
              <h3 className="mb-2 !text-[#5c6371]">
                2. Why Do We Use Cookies?
              </h3>
              <p className="text-md leading-relaxed !font-semibold mb-2">
                Cookies helps us:
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Enhanced User Experience:
                    </p>
                    <p className=" ">
                      Understand visitor behavior on the Bissbay website.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Navigation:
                    </p>
                    <p className=" ">
                      Facilitate smooth navigation between pages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Personalization:
                    </p>
                    <p className=" ">Remember your preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Performance:
                    </p>
                    <p className=" ">
                      Improve your overall browsing experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Relevance:
                    </p>
                    <p className=" ">
                      Provide features and content relevant to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Types of Cookies */}
            <section className={`mb-4 md:mb-6 animation-delay-1000`}>
              <h3 className="mb-2 !text-[#5c6371]">
                <span className="text--primary">
                  3. What Types of Cookies Do We Use?
                </span>
              </h3>
              <div className="space-y-2  ">
                <p className="text-md leading-relaxed !font-semibold mb-2">
                  We use the following five types of cookies to deliver the best
                  browsing experience:
                </p>
              </div>

              <h4 className="mb-2 !text-[#5c6371]">
                3.1 Strictly Necessary Cookies
              </h4>
              <div className="space-y-2  ">
                <p className="  text-md mb-4">
                  These cookies are essential for the operation of the Bissbay
                  site, enabling you to access secure areas and use key features.
                  Without them, certain services may be unavailable.
                </p>
              </div>

              <h4 className="mb-2 !text-[#5c6371]">
                3.2 Performance Cookies
              </h4>
              <div className="space-y-2  ">
                <p className="  text-md mb-4">
                  Performance cookies collect anonymous data about how you use the
                  Bissbay site, such as which features you use most frequently or
                  if you encounter error messages. This data helps us improve site
                  performance.
                </p>
              </div>

              <h4 className="mb-2 !text-[#5c6371]">
                3.3 Functionality Cookies
              </h4>
              <div className="space-y-2  ">
                <p className="  text-md mb-4">
                  These cookies remember your actions and preferences, such as
                  text size, accessibility options, and other customizations. They
                  also support features like calendar usage or personalized
                  settings. They do not track activity on other websites or
                  collect personal data.
                </p>
              </div>

              <h4 className="mb-2 !text-[#5c6371]">
                3.4 Tailored Content Cookies
              </h4>
              <div className="space-y-2  ">
                <p className="  text-md mb-4">
                  Tailored content cookies enhance your experience by delivering
                  personalized features and displaying content based on your
                  previous interactions with the Bissbay site. They do not track
                  your browsing activity on other websites.
                </p>
              </div>

              <h4 className="mb-2 !text-[#5c6371]">
                3.5 Targeting Cookies
              </h4>
              <div className="space-y-2  ">
                <p className="  text-md mb-4">
                  These cookies are used for advertising purposes. With your consent, they ensure ads are relevant to you, track the number of times ads are shown, and measure their effectiveness. These cookies may also share site visit data with advertising networks, which is why you might see Bissbay ads on other websites.
                </p>
              </div>
            </section>

            {/* Section 4: Cookie Duration */}
            <section className={`mb-4 md:mb-6 animation-delay-1200`}>
              <h3 className="mb-2 !text-[#5c6371]">
                4. How Long Do Cookies Stay on My Device?
              </h3>
              <p className="text-md leading-relaxed !font-semibold mb-2">
                The duration of cookies depends on their type:
              </p>
              <div className="space-y-2  ">
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Session Cookies:
                    </p>
                    <p className=" ">
                      These are deleted when your browsing session ends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Persistent Cookies:
                    </p>
                    <p className=" ">
                      These remain on your device until they expire or are
                      manually deleted.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: First-Party and Third-Party Cookies */}
            <section className={`mb-4 md:mb-6 animation-delay-1400`}>
              <h3 className="mb-2 !text-[#5c6371]">
                5. First-Party and Third-Party Cookies
              </h3>
              <div className="space-y-2  ">
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • First-Party Cookies:
                    </p>
                    <p className=" ">These are set by Bissbay.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <p className="  !font-semibold text-bissbay-black">
                      • Third-Party Cookies:
                    </p>
                    <p className=" ">
                      These are set by third-party services through the Bissbay
                      site, such as analytics or advertising providers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Cookie Management */}
            <section className={`mb-4 md:mb-6 animation-delay-1600`}>
              <h3 className="mb-2 !text-[#5c6371]">
                6. How to Control and Delete Cookies
              </h3>
              <p className="text-md leading-relaxed font-medium">
                You can manage, enable, or disable cookies through your browser's
                settings (usually found under "Help," "Edit," or "Tools").
                However, please note that disabling cookies may limit the
                functionality of the Bissbay site and reduce your access to
                certain features.
              </p>
            </section>

            {/* Section 7: Contact Information */}
            <section className={`animation-delay-1800`}>
              <h3 className="mb-2 !text-[#5c6371]">
                7. Contact Us
              </h3>
              <p className="text-md leading-relaxed font-medium">
                If you have any questions or concerns, please contact us at{" "}
                <EmailLink email="contact@bissbay.com" />
              </p>
            </section>
          </div>
        </div>

      </div>
    </>
  );
}

export default CookiePolicy;
