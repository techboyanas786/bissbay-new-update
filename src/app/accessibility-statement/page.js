"use client";
import {
  Mail,
  Type,
  Palette,
  Link,
  MousePointer,
  Eye,
  Volume2,
  Mic,
  PauseCircle,
} from "lucide-react";
import React from "react";
function page() {
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
  const features = [
    {
      icon: Type,
      title: "Text Size Control",
      desc: "Increase or decrease text size",
    },
    {
      icon: Palette,
      title: "Color Adjustments",
      desc: "Invert colors and enable grey hues",
    },
    {
      icon: Link,
      title: "Link Enhancement",
      desc: "Underline all links for clarity",
    },
    {
      icon: MousePointer,
      title: "Cursor Enhancement",
      desc: "Enable a big cursor for better visibility",
    },
    {
      icon: Eye,
      title: "Reading Guide",
      desc: "Activate a reading guide for focus",
    },
    {
      icon: Volume2,
      title: "Text-to-Speech",
      desc: "Listen to content with speech synthesis",
    },
    {
      icon: Mic,
      title: "Speech-to-Text",
      desc: "Voice input for hands-free interaction",
    },
    {
      icon: PauseCircle,
      title: "Animation Control",
      desc: "Disable animations for comfort",
    },
  ];
  return (
    <div className="pt-[115px] max-w-5xl mx-auto px-4 md:px-2 pb-4 md:pb-8 min-h-screen">
      <div className="bg-gray-50 rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary px-2 md:px-6 py-4">
        <section className="mb-4 md:mb-6 relative overflow-hidden text-center">
          <div className="inline-block relative">
            <h1 className="relative inline-block md:mb-0 mb-1">Accessibility Statement</h1>
            
          </div>
        </section>
        <div>
          <section className={`mb-4 md:mb-6 animation-delay-400`}>
            <div className="text-md leading-relaxed">
              <p className="text-sm mb-4 text-bissbay-black/70 !font-medium animate-fade-in">
                Last Updated: June 10, 2025
              </p>

              <p className="text-md leading-relaxed font-medium">
                At Bissbay, we are committed to ensuring digital accessibility for people with
                disabilities. We are continually improving the user experience for
                everyone and applying relevant accessibility standards to guarantee
                inclusive and barrier-free access to all users.
              </p>
            </div>
          </section>

          {/* Our Commitment */}
          <section className={`mb-4 md:mb-6 animation-delay-600`}>
            <h3 className="mb-2 !text-[#5c6371]">
              Our Commitment to Accessibility
            </h3>
            <div className="space-y-2 leading-relaxed">
              <p className="text-md leading-relaxed font-medium">
                We believe that digital access is a right, not a privilege. To
                that end, we are continuously working to improve the accessibility
                of our website by adopting the best practices and standards as
                defined by the{" "}
                <span className="font-semibold text-black">
                  Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
                </span>
                .
              </p>
              <p className="text-md leading-relaxed font-medium">
                We've designed our platform to support assistive technologies and
                provide equal access for users with visual, auditory, cognitive,
                or motor impairments.
              </p>
            </div>
          </section>

          {/* How Accessibility Works */}
          <section className={`mb-4 md:mb-6 animation-delay-800`}>
            <h3 className="mb-2 !text-[#5c6371]">
              How Accessibility Works on Bissbay
            </h3>
            <p className="text-md leading-relaxed font-medium">
              To support users with disabilities, Bissbay includes an{" "}
              <span className="font-semibold text-black">
                Accessibility Widget
              </span>
              , powered by an accessibility server. This tool allows users to
              customize their experience on our website, making it more accessible
              according to their individual needs and preferences.
            </p>
          </section>

          {/* Accessibility Features */}
          <section className={`mb-4 md:mb-6 animation-delay-1000`}>
            <h3 className="mb-2 !text-[#5c6371]">
              Accessibility Features on Bissbay
            </h3>
            <div className="space-y-2 leading-relaxed mb-4">
              <p className="text-md leading-relaxed font-medium">
                To ensure ease of access for all, we've integrated the{" "}
                <span className="font-semibold text-black">
                  Bissbay Accessibility Widget
                </span>
                , powered by an advanced accessibility server. This tool allows
                users to customize their browsing experience in a way that meets
                their specific needs.
              </p>
              <p className="text-md leading-relaxed font-medium">
                You can activate the Accessibility Menu by clicking the
                accessibility icon located in the bottom-right corner of any page.
                Once clicked, please allow a moment for the menu to fully load.
              </p>
            </div>

            <h4 className="mb-2 !text-[#5c6371]">
              The Accessibility Menu Offers the Following Features:
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-2 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row min-h-16 items-center gap-3 mb-2 justify-start">
                    <feature.icon className="text-primary md:w-8 w-6 md:h-8 h-6 flex-shrink-0" />
                    <h4 className="!text-[#5c6371] !text-base md:!text-left !text-center">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-md leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-md pt-2 leading-relaxed font-medium">
              These tools support a wide range of user needs and help make our
              content more readable, navigable, and interactive.
            </p>
          </section>

          {/* Continuous Improvement */}
          <section className={`mb-4 md:mb-6 animation-delay-1200`}>
            <h3 className="mb-2 !text-[#5c6371]">
              Continuous Improvement
            </h3>
            <div className="space-y-2 leading-relaxed">
              <p className="text-md leading-relaxed font-medium">
                While many areas of the Bissbay website are already fully
                accessible, we recognize that accessibility is an ongoing journey.
                Some content and functionality are still being enhanced to meet
                full compliance, and we are actively working to close any
                remaining gaps.
              </p>
              <p className="text-md leading-relaxed font-medium">
                We conduct regular audits, updates, and usability reviews to
                ensure we meet evolving accessibility standards and provide the
                best possible user experience for all visitors.
              </p>
            </div>
          </section>

          {/* Third-Party Integrations */}
          <section className={`mb-4 md:mb-6 animation-delay-1400`}>
            <h3 className="mb-2 !text-[#5c6371]">
              Third-Party Integrations
            </h3>
            <p className="text-md leading-relaxed font-medium">
              While we strive to ensure accessibility across all elements, content provided by third-party vendors may not always meet the same standards of accessibility, and we encourage you to contact us if you encounter any barriers.
            </p>
          </section>

          {/* Contact Support */}
          <section className={`animation-delay-1600`}>
            <h3 className="mb-2 !text-[#5c6371]">
              Need Assistance?
            </h3>
            <div className="space-y-2 leading-relaxed mb-4">
              <p className="text-md leading-relaxed font-medium">
                If you are experiencing difficulty accessing any part of our site,
                or if you have suggestions on how we can improve accessibility, we
                want to hear from you.
              </p>
              <p className="text-md leading-relaxed font-medium">
                We're here to help.
              </p>
              <p className="text-md leading-relaxed font-medium">
                Please contact our support team during business hours, and we'll
                respond promptly to resolve any issues.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href="mailto:contact@bissbay.com" className="flex space-x-2 hover:text-primary transition-colors duration-200 group">
                <Mail className="group-hover:text-primary transition-colors duration-200" />
                <span className="!font-semibold">contact@bissbay.com</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
