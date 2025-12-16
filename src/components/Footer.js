"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";

import { FaCookie } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import BissbayLogo from "./bissbayLogo";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (window.A11yWidget && window.A11yWidgetInitialized) {
      return;
    }

    const existingScript = document.querySelector('script[src="https://microzenaman.github.io/Accessibility-Menu/dist/a11y-widget.umd.js"]');
    if (existingScript) {
      if (window.A11yWidget && !window.A11yWidgetInitialized) {
        window.A11yWidget.init({
          customButton: ".accessibility-btn"
        });
        window.A11yWidgetInitialized = true;
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://microzenaman.github.io/Accessibility-Menu/dist/a11y-widget.umd.js';
    script.async = true;
    script.onload = () => {
      if (window.A11yWidget && !window.A11yWidgetInitialized) {
        window.A11yWidget.init({
          customButton: ".accessibility-btn"
        });
        window.A11yWidgetInitialized = true;
      }
    };
    document.head.appendChild(script);

    // Add custom CSS to fix positioning - only if not already added
    const existingStyle = document.querySelector('style[data-a11y="custom"]');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.setAttribute('data-a11y', 'custom');
      style.textContent = `
        .a11y-widget-panel {
          z-index: 9999 !important;
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          bottom: auto !important;
          right: auto !important;
          max-height: 80vh !important;
          max-width: 90vw !important;
          overflow-y: auto !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        .a11y-widget-overlay {
          z-index: 9998 !important;
        }
        @media (max-width: 768px) {
          .a11y-widget-panel {
            max-width: 95vw !important;
            max-height: 85vh !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      window.A11yWidgetInitialized = false;
    };
  }, []);

  const footerLinks = {
    "Contact Us": [
      { label: <FaSquarePhone size={36} />, href: "tel:+1234567890" },
      { label: <MdEmail size={36} />, href: "mailto:contact@bissbay.com" },
      { label: <IoChatboxEllipses size={36} />, href: "/contact-us" },
      { label: <FaWhatsappSquare size={36} />, href: "/whatsapp" },
    ],
    "Policies": [
      { label: "Cookie", href: "/policies/cookie-policy" },
      { label: "Communication", href: "/policies/communication-policy" },
      { label: "Copyright", href: "/policies/copyright-policy" },
      { label: "Privacy", href: "/policies/privacy-policy" },
    ],
    "Data Compliance": [
      { label: "CAN-SPAM", href: "/data-compliance/can-spam" },
      { label: "CASL", href: "/data-compliance/casl" },
      { label: "CCPA & CPRA", href: "/data-compliance/ccpa-cpra" },
      { label: "GDPR", href: "/data-compliance/gdpr-compliance" },
    ],
    "Follow Us": [
      { label: <FaLinkedin size={36} />, href: "https://www.linkedin.com/company/bissbay" },
      { label: <FaFacebookSquare size={36} />, href: "https://www.facebook.com/bissbay" },
      { label: <FaSquareXTwitter size={36} />, href: "https://twitter.com/bissbay" },
      { label: <IoLogoYoutube size={36} />, href: "https://www.youtube.com/channel/bissbay" },
    ],
  };

  const mobileFooterLinks = {
    "Contact Us": footerLinks["Contact Us"],
    "Policies": footerLinks["Policies"],
    "Compliance": footerLinks["Data Compliance"],
    "Follow Us": footerLinks["Follow Us"],
  };

  const accessibilityButtons = [
    {
      icon: <FaCookie size={0} className="hidden" />,
      label: "",
      action: () => {
        console.log("Cookie settings clicked");
      }
    },
    {
      icon: <FaCookie size={24} />,
      label: "Cookie Settings",
      action: () => {
        console.log("Cookie settings clicked");
      }
    },
    {
      icon: <IoChatbubbleEllipses size={24} />,
      label: "Live Chat",
      action: () => {
        console.log("Chat clicked");
      }
    },
    {
      icon: <MdAccessibility size={26} />,
      label: "Accessibility",
      action: () => {
      }
    }
  ];

  return (
    <footer className="w-full footer !bg-[#F9FAFB] absolute">
        <div className="container mx-auto md:px-2 px-4">
          <div className="svg-footer-container">
            <div className="flex flex-col items-center gap-2.5 py-4 lg:py-8">
              <form
                className="flex items-center gap-2 w-full max-w-md"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="relative p-0 rounded-lg border-primary border-2 w-full">
                  <div className="flex bg-white rounded-lg">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-10 px-3 sm:px-4 bg-transparent min-w-0 border-none outline-none text-gray-700 placeholder-gray-400 rounded-l-lg text-sm sm:text-base"
                    />
                    <button
                      type="submit"
                      className="px-4 sm:px-6 py-2 font-semibold rounded-r-md transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                      style={{
                        background: '#ff4200',
                        color: '#ffffff'
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mb-6 lg:mb-4">
              <div className="flex-1 w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex flex-col items-start col-span-2 sm:col-span-3 lg:col-span-1 w-full lg:w-1/5">
                    <BissbayLogo className="h-auto" />
                    <p className="text-[#4D5360] text-left my-3 text-sm lg:text-md ">
                      At Bissbay, we help companies build powerful connections.
                    </p>
                    <p className="!text-[#4b5563] !font-semibold text-center lg:text-left group cursor-pointer">
                      Where <span className="group-hover:text-primary transition-colors duration-300">Intelligence</span> Meets <span className="group-hover:text-primary transition-colors duration-300">Connections</span>
                    </p>
                  </div>

                  {/* Desktop Version */}
                  <div className="hidden lg:grid grid-cols-4 gap-0 lg:gap-6 w-full lg:w-3/6 lg:mt-0 mt-16">
                    {Object.entries(footerLinks).map(([section, links]) => (
                      <div key={section} className="flex flex-col items-center">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 !text-[#4b5563] text-center sm:text-left">
                          {section}
                        </h4>
                        <ul className={`flex flex-col gap-2 sm:gap-3 w-full ${section === "Follow Us" || section === "Contact Us"
                          ? "items-center"
                          : "items-center"
                          }`}>
                          {links.map((link, index) => (
                            <li
                              key={index}
                              className="h-9 flex items-center justify-center w-full"
                            >
                              <a
                                href={link.href}
                                className={`${typeof link.label === "string"
                                  ? " text-[#1f2937] lg:text-[#9CA3AF] hover:text-primary text-sm sm:text-base font-medium transition-all duration-300 lg:hover:scale-110 origin-center"
                                  : "text-primary hover:opacity-80 transition-all duration-300 lg:hover:scale-110 origin-center"
                                  } transform flex items-center justify-center`}
                              >
                                {typeof link.label === "string" ? (
                                  <span className="block text-center sm:text-left">
                                    {link.label}
                                  </span>
                                ) : (
                                  <span className="flex justify-center sm:justify-start">
                                    {link.label}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Version */}
                  <div className="lg:hidden grid grid-cols-4 gap-0 lg:gap-6 w-full lg:w-3/6 lg:mt-0 mt-6">
                    {Object.entries(mobileFooterLinks).map(([section, links]) => (
                      <div key={section} className="flex flex-col items-center">
                        <h4 className="!text-base font-semibold mb-3 sm:mb-4 !text-[#4b5563] text-center sm:text-left">
                          {section}
                        </h4>
                        <ul className={`flex flex-col gap-2 sm:gap-3 w-full ${section === "Follow Us" || section === "Contact Us"
                          ? "items-center"
                          : "items-center"
                          }`}>
                          {links.map((link, index) => (
                            <li
                              key={index}
                              className="h-9 flex items-center justify-center w-full"
                            >
                              <a
                                href={link.href}
                                className={`${typeof link.label === "string"
                                  ? " text-[#1f2937] lg:text-[#9CA3AF] hover:text-primary text-sm sm:text-base font-medium transition-all duration-300 lg:hover:scale-110 origin-center"
                                  : "text-primary hover:opacity-80 transition-all duration-300 lg:hover:scale-110 origin-center"
                                  } transform flex items-center justify-center`}
                              >
                                {typeof link.label === "string" ? (
                                  <span className="block text-center sm:text-left">
                                    {link.label}
                                  </span>
                                ) : (
                                  <span className="flex justify-center sm:justify-start">
                                    {link.label}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* 
                    Accessibility / Utility Buttons Section in the Footer

                    - This section displays a set of accessibility and utility buttons (like Cookie Settings, Live Chat, Accessibility tools).
                    - The `accessibilityButtons` array determines which buttons to render.
                    - Buttons are styled responsively for both horizontal row (on mobile) and vertical stack (on larger screens).
                  */}
                  <div className="flex flex-col items-center lg:items-end col-span-2 sm:col-span-3 lg:col-span-1 w-full lg:w-1/5">
                    <div className="flex items-center justify-center flex-row pt-6 lg:pt-0 lg:flex-col lg:justify-end gap-3">
                      {/* Map through each accessibility button and render a styled button */}
                      {accessibilityButtons.map((button, index) => (
                        <button
                          key={index}
                          // Only assign the action handler if the button is NOT Accessibility
                          onClick={button.label === 'Accessibility' ? undefined : button.action}
                          // Responsive and thematic button styling
                          className={`w-9 h-8.5 ${
                            index === 0
                              ? 'bg-transparent !shadow-none hover:!shadow-none hidden lg:block'      // Hidden on mobile; alignment on desktop
                              : button.label === 'Accessibility' ? 'bg-primary accessibility-btn'      // Special class for main Accessibility button
                              : 'bg-primary'                                                           // Other utility buttons
                          } text-white rounded-[.5rem] shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center group relative`}
                          aria-label={button.label}
                        >
                          {/* Render the icon */}
                          {button.icon}
                          {/* Tooltip label shown on hover */}
                          <span className={`${
                            index === 0 ? 'bg-transparent' : ''
                          } absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none`}>
                            {button.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 sm:pt-4">
            <div className="flex flex-wrap items-center justify-center text-xs sm:text-sm">
              {[
                { label: "Accessibility Statement", href: "/accessibility-statement" },
                { label: "Cookie Setting", href: "#", isButton: true },
                { label: "Media Kit", href: "/resources/media-kit" },
                { label: "Security", href: "/policies/security-policy" },
                { label: "Terms Of Use", href: "/terms-of-use" },
                { label: "Trust Centre", href: "/trust-centre" },
                { label: "Unsubscribe", href: "/unsubscribe" }
              ].map((item, index, array) => (
                <div key={index} className="flex items-center">
                  {item.isButton ? (
                    <button className="text-[#9CA3AF] hover:text-primary font-medium transition-colors duration-200 px-1">
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-[#9CA3AF] hover:text-primary font-medium transition-colors duration-200 px-1"
                    >
                      {item.label}
                    </a>
                  )}
                  {index < array.length - 1 && (
                    <span className="text-gray-400 mx-1 inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="pb-4 sm:pb-1 px-4">
        <p className="text-center text-xs sm:text-sm text-[#4D5360] !font-bold !text-[.8rem]">
          © <span className="relative group hover:cursor-pointer">
            B<span className="group-hover:text-primary transition-colors duration-200">i</span>ssbay
          </span> {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;