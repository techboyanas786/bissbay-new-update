import Head from "next/head";
import Image from "next/image";

export default function Process() {
  return (
    <>
      <Head>
        <h2>Our Process</h2>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section id="processSection">
        <h2 className="text-center section-title !mb-0 text-button fade-in">
          Our Process:{" "}
          <span className="text-primary">Science, Not Guesswork</span>
        </h2>
        <h3 className="my-4 lg:my-6  text-center">
          How BISSBAY powers your syndication strategy with a data-driven
          approach
        </h3>

        {/* Desktop Layout */}
        <div className="relative w-[90%] max-w-[1200px] mx-auto hidden md:block">
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-1 h-[calc(100%-30px)] bg-gray-200">
            <div className="absolute top-0 left-0 w-full h-full bg-[#ff5c33] transition-[height] duration-300 ease-out" />
          </div>
          {/* Step 1 */}
          <div className="relative flex justify-between items-center my-6 flex-col md:flex-row ">
            <div className="w-full md:w-5/12 p-6 rounded-lg order-2 md:order-1 text-right">
              <h5 className="text-2xl font-semibold mb-2">Identify & Target</h5>
              <p  >
                We surface high-intent accounts based on verified behavioral
                signals and deeply researched account connections.
              </p>
              <ul className="font-medium mb-5 space-y-1 text-base md:text-lg">
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    AI-Driven Audience Discovery
                  </p>
                </li>
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    First-Party Insights
                  </p>
                </li>
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    Smart Prioritization
                  </p>
                </li>
              </ul>
            </div>

            {/* Progress Bar Icon (Search) */}
            <div className="w-13 h-13 bg-[#ff5c33] text-white rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 md:static md:translate-x-0 md:top-auto md:flex-shrink-0 z-10 order-1 md:order-2">
              <Image
                src="/Icons/Fingerprint.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            </div>

            {/* Pinpoint Section (Right Side) */}
            <div className="w-full md:w-5/12 metric-card bg-white rounded-xl p-6 hover-card card-hover order-3 md:order-3 text-left">
              <strong className="block text-[#ff5c33] font-semibold text-lg mb-2">
                Pinpoint
              </strong>
              <p  >
                AI analyzes multiple global intent signals to identify
                high-intent accounts ready to engage with your content.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex justify-between items-center my-6 flex-col md:flex-row">
            {/* Activate at Scale Section (Left Side) */}
            <div className="w-full md:w-5/12 p-6 rounded-lg order-2 md:order-1 text-right">
              <h5 className="text-2xl font-semibold mb-2">Activate at Scale</h5>
              <p  >
                We progressively engage relevant audiences through multichannel
                campaigns.
              </p>
              <ul className="font-medium mb-5 space-y-1 text-base md:text-lg">
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    Multi-Stage Campaigns
                  </p>
                </li>
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    Personalized Messaging
                  </p>
                </li>
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    Strategic Delivery
                  </p>
                </li>
              </ul>
            </div>

            {/* Progress Bar Icon (Lightning Bolt) */}
            <div className="w-13 h-13 bg-[#ff5c33] text-white rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 md:static md:translate-x-0 md:top-auto md:flex-shrink-0 z-10 order-1 md:order-2">
             <Image
                src="/Icons/flashwhite.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            </div>

            {/* Activate Section (Right Side) */}
            <div className="w-full md:w-5/12 metric-card bg-white rounded-xl p-6 hover-card card-hover order-3 md:order-3 text-left">
              <strong className="block text-[#ff5c33] font-semibold text-lg mb-2">
                Activate
              </strong>
              <p  >
                Launch multi-stage campaigns (webinars → case studies → demos)
                with A/B-tested messaging that engages buyers at every
                touchpoint.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex justify-between items-center my-6 flex-col md:flex-row">
            {/* Optimize for Results Section (Left Side) */}
            <div className="w-full md:w-5/12 p-6 rounded-lg order-2 md:order-1 text-right">
              <h5 className="text-2xl font-semibold mb-2">
                Optimize for Results
              </h5>
              <p  >
                We track from MQL to close with deep data integration and
                conversion-based optimization.
              </p>
              <ul className="font-medium mb-5 space-y-1 text-base md:text-lg">
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    CRM-Enriched Reporting
                  </p>
                </li>
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    Campaign Refinement
                  </p>
                </li>
                <li>
                  <p className="!text-[#1f2937] !font-medium">
                    Attribution Heat Mapping
                  </p>
                </li>
              </ul>
            </div>
            {/* Progress Bar Icon (Bar Graph) */}
            <div className="w-13 h-13 bg-[#ff5c33] text-white rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 md:static md:translate-x-0 md:top-auto md:flex-shrink-0 z-10 order-1 md:order-2">
              <Image
                src="/Icons/gearwhite.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            </div>
            {/* Optimize Section (Right Side) */}
            <div className="w-full md:w-5/12 metric-card bg-white rounded-xl p-6 hover-card card-hoverorder-3 md:order-3 text-left">
              <strong className="block text-[#ff5c33] font-semibold text-lg mb-2">
                Optimize
              </strong>
              <p  >
                Use CRM-enriched insights to track MQL-to-close rates and
                fine-tune campaigns for maximum ROI and revenue impact.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden lg:space-y-8 space-y-4">
          {/* Step 1 - Mobile */}
          <div className="border-l-4 border-[#ff5c33] pl-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#ff5c33] text-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h5 className="text-xl font-semibold">Identify & Target</h5>
            </div>
            <p className="mb-2">
              We surface high-intent accounts based on verified behavioral
              signals and deeply researched account connections.
            </p>

            <ul className="space-y-2 text-sm mb-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">
                  AI-Driven Audience Discovery
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">First-Party Insights</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">Smart Prioritization</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <strong className="block text-[#ff5c33] font-semibold text-lg mb-2">
                Pinpoint
              </strong>
              <p className="text-sm">
                AI analyzes multiple global intent signals to identify
                high-intent accounts ready to engage with your content.
              </p>
            </div>
          </div>

          {/* Step 2 - Mobile */}
          <div className="border-l-4 border-[#ff5c33] pl-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#ff5c33] text-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h5 className="text-xl font-semibold">Activate at Scale</h5>
            </div>
            <p className="mb-2">
              We progressively engage relevant audiences through multichannel
              campaigns.
            </p>
            <ul className="space-y-2 text-sm mb-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">Multi-Stage Campaigns</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">Personalized Messaging</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">Strategic Delivery</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
              <strong className="block text-[#ff5c33] font-semibold text-lg mb-2">
                Activate
              </strong>
              <p className="text-sm">
                Launch multi-stage campaigns (webinars → case studies → demos)
                with A/B-tested messaging that engages buyers at every
                touchpoint.
              </p>
            </div>
          </div>

          {/* Step 3 - Mobile */}
          <div className="border-l-4 border-[#ff5c33] pl-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#ff5c33] text-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h5 className="text-xl font-semibold">Optimize for Results</h5>
            </div>
            <p className="mb-2">
              We track from MQL to close with deep data integration and
              conversion-based optimization.
            </p>
            <ul className="space-y-2 text-sm mb-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">CRM-Enriched Reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">Campaign Refinement</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff5c33] rounded-full"></div>
                <span className="font-medium">Attribution Heat Mapping</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <strong className="block text-[#ff5c33] font-semibold text-lg mb-2">
                Optimize
              </strong>
              <p className="text-sm">
                Use CRM-enriched insights to track MQL-to-close rates and
                fine-tune campaigns for maximum ROI and revenue impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
