"use client";
import React from "react";
import { Mail } from "lucide-react";

function CopyrightPolicy() {
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
  const sections = [
    {
      id: "ownership",
      title: "1. Ownership of Content",
      content: `All content available on the Bissbay platform, including but not limited to text, graphics, logos, images, videos, software, and designs (collectively, "Content"), is the property of BISSBAY or its licensors and is protected by copyright laws and international treaties. Unauthorized use of our Content is strictly prohibited.`,
    },
    {
      id: "user-content",
      title: "2. User-Generated Content",
      content: `If you upload, submit, or share any content on the Bissbay platform, you confirm that you own the rights to that content or have obtained all necessary permissions and licenses to use it. By sharing your content, you grant BISSBAY a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, distribute, and display the content for the purpose of operating and promoting the platform.`,
    },
    {
      id: "prohibited",
      title: "3. Prohibited Actions",
      content: `Users are strictly prohibited from:`,
      list: [
        "Copying, reproducing, distributing, or creating derivative works from Bissbay's Content without prior written consent.",
        "Uploading or sharing any content that infringes on the copyright or intellectual property rights of others.",
        "Circumventing any security measures or technological protections on the platform.",
      ],
    },
    {
      id: "reporting",
      title: "4. Reporting Copyright Infringements",
      content: `If you believe that your copyrighted work has been used on the Bissbay platform without authorization, you may submit a notice of alleged infringement. To file a claim, please provide the following information:`,
      list: [
        "A description of the copyrighted work you believe has been infringed where the alleged infringement occurred.",
        "Your contact information, including your name, email address, and phone number.",
        "A statement that you have a good faith belief that the use of the copyrighted material is unauthorized.",
        "A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.",
        "Your physical or electronic signature.",
      ],
      contact: true,
    },
    {
      id: "counter",
      title: "5. Counter-Notification",
      content: `You may submit a counter-notification if you believe that the content you posted on Bissbay was removed in error due to a copyright claim. Your counter-notification must include:`,
      list: [
        "Identification of the material that was removed and its original location.",
        "A statement under penalty of perjury that you have a good faith belief the material was removed due to a mistake or misidentification.",
        "Your contact information, including name, address, and email address.",
        "A statement that you consent to the jurisdiction of the courts in [Pune, Maharashtra, India] and agree to accept service of process from the original copyright claimant.",
        "Your physical or electronic signature.",
      ],
    },
    {
      id: "repeat",
      title: "6. Repeat Infringers",
      content: `Bissbay reserves the right to terminate the accounts of users who are found to repeatedly infringe on others' copyrights.`,
    },
    {
      id: "modifications",
      title: "7. Modifications to Policy",
      content: `We may update this Copyright Policy from time to time. Changes will be effective immediately upon posting, and continued use of the platform constitutes acceptance of the updated policy.`,
    },
  ];
  return (
    <div className="pt-[115px] max-w-5xl mx-auto px-4 md:px-2 pb-4 md:pb-8 min-h-screen">
      <div className="bg-gray-50 rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary px-2 md:px-6 py-4">
        <section className="mb-4 md:mb-6 relative overflow-hidden text-center">
          <div className="inline-block relative">
            <h1 className="relative inline-block md:mb-0 mb-1">Copyright Policy</h1>
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
                At Bissbay, we respect the intellectual property rights of others
                and expect our users to do the same. This Copyright Policy outlines
                our practices regarding copyright protection and provides
                information about how to report alleged infringements.
              </p>
            </div>
          </section>
          <div>
            {sections.map((section, index) => {
              return (
                <section
                  key={section.id}
                  id={section.id}
                  data-section
                  className={`mb-4 md:mb-6 transition-all duration-800 transform`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="mb-2 !text-[#5c6371]">{section.title}</h3>

                  <div>
                    <p
                      className={`text-md leading-relaxed font-medium ${
                        section.content.trim().endsWith(":")
                          ? "!font-semibold"
                          : ""
                      }`}
                    >
                      {section.content}
                    </p>

                    {section.list && (
                      <ul className=" mb-2">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <p className="text-md leading-relaxed  font-medium">
                              • {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contact && (
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 w-fit rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <p className="text-md leading-relaxed  font-medium">
                          Please send your notice to:
                        </p>
                        <div  >
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <p className="text-md leading-relaxed  font-medium">
                              Email: <EmailLink email={"contact@bissbay.com"} />
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <p className="text-md leading-relaxed  font-medium">
                              <strong>Address:</strong> Office#602, Clover Hills
                              Plaza, NIBM Rd, 411048, Pune, Maharashtra, India
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
            </div>
          </div>
        </div>
      </div>
  );
}

export default CopyrightPolicy;
