import Button from "@/components/Button";
import RequestProposalPopup from "@/components/RequestProposalPopup";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

function PipelineFunnel() {
  const [activeStep, setActiveStep] = useState(0); // No step selected by default
  const [isOpen, setIsOpen] = useState(false);
  const [showRequestProposal, setShowRequestProposal] = useState(false);
  const journeySteps = [
    {
      title: "Multichannel Engagement",
      index: 1,
      description:
        "We craft a strategic outreach plan that seamlessly integrates email and cold calling; ensuring you connect with the right prospects at the right time, on the right platform.",
    },
    {
      title: "Implementation",
      index: 2,
      description:
        "Prospects engage through various touchpoints such as replying to emails, subscribing to newsletters, clicking on ads, connecting on LinkedIn, attending webinars, and more.",
    },
    {
      title: "Conversion",
      index: 3,
      description:
        "Through personalized appointment setting and consistent follow-ups, we ensure your prospects attend demo calls & meetings, whether online or in-person with your sales team.",
    },
  ];

  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <section className="hero-gradient overflow-hidden">
          <div>
            <h1 className="relative text-center !mx-auto font-bold mt-0">Pipeline Transformation with BISSBAY</h1>
            <h3 className="text-4xl lg:text-4xl font-bold my-4 lg:my-6 text-center leading-normal">
              With Bissbay, our clients close{" "}
              <span className="text-primary">30%</span> more deals with their ideal accounts,
              <span> driving measurable growth and long-term success.</span>
            </h3>
          </div>
          <div className="max-w-full lg:mx-auto md:mx-2 p-2 lg:p-6 rounded-xl bg-[#1F1F1F]">
            <h3 className="text-2xl !text-white font-medium text-center mb-6 md:mb-4">
              See how your pipeline transforms with Bissbay More qualified leads, higher conversions, and accelerated revenue growth.
            </h3>
            <h4 className="!font-medium !text-white mb-6 md:mb-4 text-center ">
              Focus on scaling your business while Bissbay delivers sales-ready B2B
              leads that drive growth and revenue.
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center items-start">
              <div className="flex flex-col gap-3">
                <div className="border border-dashed border-[#3D3D3D] w-full p-2 md:p-5 rounded-xl">
                  <p className="!font-semibold !text-[#b8b8b8] mb-5 md:mb-4 text-left">
                    We take care of the entire user journey
                  </p>
                  <div className="flex flex-col gap-3">
                    {journeySteps.map((step, index) => (
                      <div
                        key={index}
                        onClick={() => handleToggle(index)}
                        onMouseEnter={() => setActiveStep(index)}
                        onMouseLeave={() => setActiveStep(null)}
                        className={`flex ${activeStep === index ? "bg-[#3D3D3D]" : "bg-[#292929]"
                          } items-start space-x-4 p-4 rounded-xl transition-all duration-300 group cursor-pointer`}
                        style={{pointerEvents: "auto"}}
                      >
                        <div className="w-full">
                          <div className="flex flex-row items-center justify-between">
                            <h4 className="!font-semibold text-md !text-white mb-1 duration-300">
                              {step.title}
                            </h4>
                            <ChevronRight
                              className={`text-primary transition-transform duration-300 ${activeStep === index
                                ? "rotate-90"
                                : "rotate-0"
                                }`}
                            />
                          </div>
                          <div className={`grid transition-all duration-500 ease-in-out ${
                              activeStep === index
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div
                              className={`overflow-hidden`}
                            >
                              <p className="!text-gray-300 text-md leading-relaxed pt-2">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-dashed border-[#3D3D3D] w-full p-2 md:p-5 rounded-xl">
                  <p className="text-md !text-gray-300 text-left mb-4 lg:mb-5">
                    Your role in the process
                  </p>
                  <div
                    className={`flex items-start ${isOpen ? "bg-[#3D3D3D]" : "bg-[#292929]"
                      } p-4 rounded-xl transition-all duration-300 group cursor-pointer`}
                    onMouseEnter={() => {
                      setIsOpen(true);
                      setActiveStep(null);
                    }}
                    onMouseLeave={() => setIsOpen(false)}
                    style={{pointerEvents: "auto"}}
                  >
                    <div
                      className="w-full"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setActiveStep(null);
                      }}
                    >
                      <div className="flex flex-row items-center justify-between">
                        <h4 className="!font-semibold text-md !text-white mb-1 duration-300">
                          Sealing the Deal
                        </h4>
                        <ChevronRight
                          className={`text-primary transition-transform duration-300 ${isOpen === true
                            ? "rotate-90"
                            : "rotate-0"
                            }`} />
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="!text-[#b8b8b8] text-md leading-relaxed pt-2">
                          All that’s left for you is to attend scheduled
                          appointments, lead in sales negotiations, and close new
                          deals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-fit">
              <p className="!text-[#666] text-xs font-bold leading-4 text-center mb-4 pt-4 lg:mb-10">
                  *Average Annual Outcomes Results are influenced by a variety of factors.
                </p>
                <div className="z-1 top-0 left-0 right-0 flex flex-col lg:gap-[10px] gap-1 items-center mx-auto">
                  <div
                    id="funnel-panel-1"
                    className="relative"
                    role="tabpanel"
                    aria-labelledby="funnel-tab-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 461 116"
                      fill="none"
                      onClick={() => {
                        activeStep === 0 ? setActiveStep(0) : setActiveStep(0);
                        setIsOpen(false);
                      }}
                      height="116"
                      className={`funnel-container1 cursor-pointer !w-[340px] md:!w-[461px] transition-colors  ${activeStep === 0 ? "text-primary" : "text-[#D9D9D9]"
                        }  duration-300 ease-out relative z-2`}
                    >
                      <path
                        d="M0.277911 14.6245C-1.4031 7.12465 4.30143 0 11.9874 0H449.013C456.699 0 462.403 7.12466 460.722 14.6245L440.101 106.625C438.873 112.105 434.008 116 428.392 116H32.6081C26.9919 116 22.1269 112.105 20.8986 106.625L0.277911 14.6245Z"
                        fill="currentColor"
                      ></path>
                      <foreignObject x="0" y="0" width="461" height="116">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <div
                            className={`text-center font-semibold ${activeStep === 0 ? "text-white" : "text-black"
                              }`}
                          >
                            <span className="text-lg">
                              Up to 18,000* prospects
                            </span>
                            <br />
                            <span className="text-lg">
                              within your client profile
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="136"
                      height="46"
                      viewBox="0 0 136 46"
                      fill="none"
                      сlass="arrow"
                      className="absolute z-2 top-[5px] w-[100px] h-[30px] sm:w-[136px] sm:h-[46px] sm:-top-[24px] left-1/2 -translate-x-1/2"
                      data-v-6acae544=""
                    >
                      <path
                        d="M70.6621 44.8168C69.006 45.7277 66.994 45.7277 65.3379 44.8168L3.33906 10.7157C-1.612 7.99248 0.323319 0.500011 6.00113 0.500011L129.999 0.5C135.677 0.499999 137.612 7.99247 132.661 10.7157L70.6621 44.8168Z"
                        fill="currentColor"
                        stroke="url(#paint0_linear_42038_18639)"
                        data-v-6acae544=""
                      ></path>
                      <defs data-v-6acae544="">
                        <linearGradient
                          id="paint0_linear_42038_18639"
                          x1="67.9994"
                          y1="-15.6172"
                          x2="74.9005"
                          y2="59.2515"
                          gradientUnits="userSpaceOnUse"
                          data-v-6acae544=""
                        ></linearGradient>
                      </defs>
                      <foreignObject
                        x="0"
                        y="-6"
                        width="137"
                        height="47"
                        data-v-6acae544=""
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center font-semibold justify-center text-white body-xs-medium"
                          data-v-6acae544=""
                        >
                          Leads
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                  <div
                    id="funnel-panel-2"
                    className="relative -top-12 sm:top-0"
                    role="tabpanel"
                    aria-labelledby="funnel-tab-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 402 116"
                      fill="none"
                      width="402"
                      height="116"
                      onClick={() => {
                        activeStep === 1 ? setActiveStep(1) : setActiveStep(1);
                        setIsOpen(false);
                      }}
                      className={`funnel-container2 text-gray-1200 w-[250px] sm:w-[402px] ${activeStep === 1 ? "text-primary" : "text-[#D9D9D9]"
                        } transition-colors duration-300 ease-out relative z-2`}
                    >
                      <path
                        d="M0.785564 14.2951C-0.65816 6.88615 5.01568 0 12.564 0H389.436C396.984 0 402.658 6.88616 401.214 14.2952L383.287 106.295C382.189 111.932 377.251 116 371.509 116H30.4912C24.7487 116 19.8111 111.932 18.7128 106.295L0.785564 14.2951Z"
                        fill="currentColor"
                      ></path>
                      <foreignObject x="0" y="0" width="402" height="116">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center justify-center cursor-pointer"
                        >
                          <div
                            className={`text-center font-semibold ${activeStep === 1 ? "text-white" : "text-black"
                              }`}
                          >
                            <span  className="text-lg">
                              Up to 9,000*
                            </span>
                            <br />
                            <span className="text-lg">
                              marketing-qualified leads
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="136"
                      height="46"
                      viewBox="0 0 136 46"
                      fill="none"
                      сlass="arrow"
                      className="absolute z-2 top-[5px] sm:-top-[26px] w-[100px] h-[30px] sm:w-[136px] sm:h-[46px] left-1/2 -translate-x-1/2"
                      data-v-6acae544=""
                    >
                      <path
                        d="M70.6621 44.8168C69.006 45.7277 66.994 45.7277 65.3379 44.8168L3.33906 10.7157C-1.612 7.99248 0.323319 0.500011 6.00113 0.500011L129.999 0.5C135.677 0.499999 137.612 7.99247 132.661 10.7157L70.6621 44.8168Z"
                        fill="currentColor"
                        stroke="url(#paint0_linear_42038_18639)"
                        data-v-6acae544=""
                      ></path>
                      <defs data-v-6acae544="">
                        <linearGradient
                          id="paint0_linear_42038_18639"
                          x1="67.9994"
                          y1="-15.6172"
                          x2="74.9005"
                          y2="59.2515"
                          gradientUnits="userSpaceOnUse"
                          data-v-6acae544=""
                        ></linearGradient>
                      </defs>
                      <foreignObject
                        x="0"
                        y="-6"
                        width="137"
                        height="47"
                        data-v-6acae544=""
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center justify-center !font-semibold text-white body-xs-medium"
                          data-v-6acae544=""
                        >
                          MQLs
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                  <div
                    id="funnel-panel-3"
                    className="relative -top-[100px] sm:top-0"
                    role="tabpanel"
                    onClick={() => {
                      activeStep === 2 ? setActiveStep(2) : setActiveStep(2);
                      setIsOpen(false);
                    }}
                    aria-labelledby="funnel-tab-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 342 112"
                      fill="none"
                      width="342"
                      height="112"
                      className={`funnel-container3 text-gray-1200 w-[210px] sm:w-[342px] ${activeStep === 2 ? "text-primary" : "text-[#D9D9D9]"
                        } transition-colors duration-300 ease-out relative z-2`}
                    >
                      <path
                        d="M0.413782 14.0341C-0.847417 6.70128 4.79968 0 12.2401 0H329.76C337.2 0 342.847 6.70128 341.586 14.0341L326.451 102.034C325.46 107.792 320.467 112 314.624 112H27.3757C21.5331 112 16.5396 107.792 15.5493 102.034L0.413782 14.0341Z"
                        fill="currentColor"
                      ></path>
                      <foreignObject x="0" y="0" width="342" height="112">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center justify-center cursor-pointer"
                        >
                          <div
                            className={`text-center font-semibold ${activeStep === 2 ? "text-white" : "text-black"
                              }`}
                          >
                            <span className="text-lg">
                              200* sales-qualified meetings
                            </span>
                            <br />
                            <span className="text-lg">
                              with decision-makers
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="136"
                      height="46"
                      viewBox="0 0 136 46"
                      fill="none"
                      сlass="arrow"
                      className="absolute z-2 top-[5px] sm:-top-[26px] w-[100px] h-[30px] sm:w-[136px] sm:h-[46px] left-1/2 -translate-x-1/2"
                      data-v-6acae544=""
                    >
                      <path
                        d="M70.6621 44.8168C69.006 45.7277 66.994 45.7277 65.3379 44.8168L3.33906 10.7157C-1.612 7.99248 0.323319 0.500011 6.00113 0.500011L129.999 0.5C135.677 0.499999 137.612 7.99247 132.661 10.7157L70.6621 44.8168Z"
                        fill="currentColor"
                        stroke="url(#paint0_linear_42038_18639)"
                        data-v-6acae544=""
                      ></path>
                      <defs data-v-6acae544="">
                        <linearGradient
                          id="paint0_linear_42038_18639"
                          x1="67.9994"
                          y1="-15.6172"
                          x2="74.9005"
                          y2="59.2515"
                          gradientUnits="userSpaceOnUse"
                          data-v-6acae544=""
                        ></linearGradient>
                      </defs>
                      <foreignObject
                        x="0"
                        y="-6"
                        width="137"
                        height="47"
                        data-v-6acae544=""
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center justify-center !font-semibold text-white body-xs-medium"
                          data-v-6acae544=""
                        >
                          SQLs
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                  <div
                    id="funnel-panel-4"
                    className="relative sm:top-0 -top-[145px]"
                    role="tabpanel"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setActiveStep(null);
                    }}
                    aria-labelledby="funnel-tab-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 282 89"
                      fill="none"
                      width="282"
                      height="89"
                      className={`funnel-container4 text-gray-1200 w-[175px] sm:w-[282px] transition-colors ${isOpen ? "text-primary" : "text-[#D9D9D9]"
                        } duration-300 ease-out relative z-2`}
                    >
                      <path
                        d="M0.52501 14.1134C-0.791101 6.75705 4.86433 0 12.3374 0H269.663C277.136 0 282.791 6.75704 281.475 14.1134L269.846 79.1133C268.822 84.8347 263.846 89 258.033 89H23.9665C18.1543 89 13.1777 84.8347 12.1541 79.1133L0.52501 14.1134Z"
                        fill="currentColor"
                      ></path>
                      <foreignObject x="0" y="0" width="282" height="89">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center text-white justify-center cursor-pointer"
                        >
                          <div
                            className={`text-center font-semibold ${isOpen ? "text-white" : "text-black"
                              }`}
                          >
                            <span className="text-lg">
                              10-30* closed deals
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="136"
                      height="46"
                      viewBox="0 0 136 46"
                      fill="none"
                      сlass="arrow"
                      className="absolute z-2 top-[2px] sm:-top-[26px] w-[100px] h-[30px] sm:w-[136px] sm:h-[46px] left-1/2 -translate-x-1/2"
                      data-v-6acae544=""
                    >
                      <path
                        d="M70.6621 44.8168C69.006 45.7277 66.994 45.7277 65.3379 44.8168L3.33906 10.7157C-1.612 7.99248 0.323319 0.500011 6.00113 0.500011L129.999 0.5C135.677 0.499999 137.612 7.99247 132.661 10.7157L70.6621 44.8168Z"
                        fill="currentcolor"
                        stroke="url(#paint0_linear_42038_18639)"
                        data-v-6acae544=""
                      ></path>
                      <defs data-v-6acae544="">
                        <linearGradient
                          id="paint0_linear_42038_18639"
                          x1="67.9994"
                          y1="-15.6172"
                          x2="74.9005"
                          y2="59.2515"
                          gradientUnits="userSpaceOnUse"
                          data-v-6acae544=""
                        ></linearGradient>
                      </defs>
                      <foreignObject
                        x="0"
                        y="-6"
                        width="137"
                        height="47"
                        data-v-6acae544=""
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          className="w-full h-full flex items-center justify-center !font-semibold text-xs text-white body-xs-medium"
                          data-v-6acae544=""
                        >
                          <span style={{ fontSize: "large" }}>
                            Deals
                          </span>
                        </div>
                      </foreignObject>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <center className="lg:mt-6 mt-4 flex justify-center gap-4 w-fit mx-auto">
            <Button target="_blank" link={"/resources/roi-calculator"} label="ROI Calculator" customClass="!px-3" variant="primary" />
            <Button label="Request Proposal" customClass="!px-3" variant="outline" onClick={() => setShowRequestProposal(true)}></Button>
          </center>
        </section>
      </div>
      <RequestProposalPopup
        isOpen={showRequestProposal}
        onClose={() => setShowRequestProposal(false)}
      />
    </>
  );
}

export default PipelineFunnel;
