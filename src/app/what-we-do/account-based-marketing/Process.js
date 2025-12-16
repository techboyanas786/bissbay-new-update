import React from "react";
import { Search, Target, LineChart } from "lucide-react";
import Image from "next/image";

const Process = () => {
  return (
    <section id="process">
      <div>
        <div className="text-center">
          <h2 className="section-title !mb-0 fade-in">
            How BISSBAY Drives <span className="text-primary">ABM Success</span>
          </h2>
          <h3 className="my-4 lg:my-6">
            Our proven methodology for turning target accounts into revenue
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative">
          {/* Connecting line for desktop */}

          {/* Step 1 */}
          <div className="card relative z-10 fade-in border-primary border-2 md:!border-white md:hover:!border-primary delay-1">
            <div className="flex flex-row items-center justify-start gap-4">
              <Image
                src="/Icons/IDENTIFY.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0 w-9 h-auto"
                width={36}
                height={36}
              />
              <h5 className="text-2xl font-bold">Identify & Prioritize</h5>
            </div>
            <ul className="space-y-3 mt-4 lg:mt-6">
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">ICP Development:</span>
                  <p className="text-gray-600">
                    Pinpoint the accounts with the highest revenue potential.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">Intent Signals:</span>
                  <p className="text-gray-600">
                    Use AI-driven insights to engage in-market buyers.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">White Space Analysis</span>
                  <p className="text-gray-600">
                    Find upsell and cross-sell opportunities in existing
                    accounts.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="card relative z-10 border-primary border-2 md:!border-white md:hover:!border-primary fade-in delay-2">
            <div className="flex flex-row items-center justify-start gap-4">
              <Image
                src="/Icons/ACTIVATING.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0 w-9 h-auto"
                width={36}
                height={36}
              />
              <h5  >Activate with Precision</h5>
            </div>
            <ul className="space-y-3 mt-4 lg:mt-6">
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">
                    Multi-Channel Execution:
                  </span>
                  <p className="text-gray-600">
                    LinkedIn Ads, Connected TV, email, content syndication.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">
                    Hyper-Personalized Content:
                  </span>
                  <p className="text-gray-600">
                    Custom case studies, interactive tools, and webinars.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">Sales Enablement:</span>
                  <p className="text-gray-600">
                    Equip teams with real-time account insights and battle
                    cards.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="card relative z-10 border-primary border-2 md:!border-white md:hover:!border-primary fade-in delay-3">
            <div className="flex flex-row items-center justify-start gap-4">
              <Image
                src="/Icons/OPTIMIZATION.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0 w-9 h-auto"
                width={36}
                height={36}
              />
              <h5  >Measure & Optimize</h5>
            </div>

            <ul className="space-y-3 mt-4 lg:mt-6">
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">Real-Time Analytics:</span>
                  <p className="text-gray-600">
                    Track engagement, pipeline velocity, and deal acceleration.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">Dynamic Attribution:</span>
                  <p className="text-gray-600">
                    Tie ABM efforts directly to revenue impact.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <span className="font-semibold">Continuous Refinement:</span>
                  <p className="text-gray-600">
                    Optimize campaigns based on live performance data.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
