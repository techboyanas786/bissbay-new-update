"use client";
import React from "react";
import { CountUpAnimation } from "./animation/CountUpAnimation";
import Image from "next/image";
function WhyABM() {
  return (
    <section id="why-abm">
        <div className="text-center">
          <h2 className="section-title !mb-0 text-button fade-in">
            Why <span className="text-primary">ABM</span> Works
          </h2>
          <h3 className="my-4 lg:my-6">
            Because the Best Opportunities Deserve Precision.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="card border-primary border-2 md:!border-white md:hover:!border-primary fade-in delay-1 bg-white rounded-2xl p-8">
            <div className="mb-2 lg:mb-4 flex items-start">
              <div className="mt-1 mr-4 w-fit">
                <Image
                  src="/Icons/TARGET.svg"
                  alt="Revenue Stagnation"
                  className="flex-shrink-0 w-9 h-auto"
                  width={36}
                  height={36}
                />
              </div>
              <h5>Hyper-Targeted Approach</h5>
            </div>
              <p className="mb-2 md:mb-4">
                Unlike traditional marketing that casts a wide net, ABM
                focuses exclusively on your highest-value prospects and
                accounts.
              </p>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              <div className="text-gray-700">
                <p className="block !font-semibold !text-sm">
                  Traditional Marketing
                </p>
                <p className="block text-sm !font-normal">Conversion Rate</p>
              </div>
              <div className="text-lg font-bold">~1-3%</div>
            </div>
            <div className="flex items-center justify-between bg-primary/5 p-4 rounded-xl mt-3">
              <div className="text-gray-700">
                <p className="block !font-semibold !text-sm">ABM</p>
                <p className="block text-sm !font-normal">Conversion Rate</p>
              </div>
              <div className="text-lg font-bold text-primary">~10-15%</div>
            </div>
          </div>

          <div className="card border-primary border-2 md:!border-white md:hover:!border-primary fade-in delay-2 bg-white rounded-2xl p-8">
            <div className="mb-4 flex items-start">
              <Image
                src="/Icons/ROI.svg"
                alt="ROI"
                className="flex-shrink-0 w-9 h-auto mr-4"
                width={36}
                height={36}
              />
              <h5  >Higher ROI</h5>
            </div>
            <p className="mb-2 md:mb-4">
              ABM delivers significantly higher returns by focusing
              resources where they'll have the greatest impact.
            </p>
            <div className="text-center bg-gray-50 p-4 md:p-6 rounded-xl">
              <p className="!font-medium mb-2">ABM achieves</p>
              <div className="flex items-center justify-center">
                <CountUpAnimation
                  end={97}
                  duration={2}
                  className="text-5xl font-bold text-primary"
                />
                <span className="text-5xl font-bold text-primary">%</span>
              </div>
              <p className="!font-medium mt-4">
                higher ROI than traditional marketing
              </p>
            </div>
          </div>

          <div className="card border-primary border-2 md:!border-white md:hover:!border-primary fade-in delay-2 bg-white rounded-2xl p-8">
            <div className="mb-4 flex items-start">
              <Image
                src="/Icons/Flash.svg"
                alt="Flash"
                className="flex-shrink-0 w-9 h-auto mr-4"
                width={36}
                height={36}
              />
              <h5  >Increased Deal Velocity</h5>
            </div>
            <p className="text-gray-600 mb-2 md:mb-4">
              ABM accelerates the sales cycle by engaging multiple
              stakeholders simultaneously with personalized content.
            </p>
            <div className="relative h-29 bg-gray-50 rounded-xl overflow-hidden">
              <div className="absolute bottom-0 left-0 w-1/3 h-12 bg-gray-300 flex items-end justify-center">
                <p className=" !font-medium !text-white mb-1">Traditional</p>
              </div>
              <div className="absolute bottom-0 left-1/3 w-1/3 h-16 bg-gray-400 flex items-end justify-center">
                <p className="!font-medium !text-white mb-1">Inbound</p>
              </div>
              <div className="absolute bottom-0 left-2/3 w-1/3 h-20 bg-primary flex items-end justify-center">
                <p className="text-xs !font-medium !text-white mb-1">ABM</p>
              </div>
              <div className="absolute text-[#5c6371] top-2 left-0 w-full text-center text-sm ">
                Deal Velocity Comparison
              </div>
            </div>
          </div>

          <div className="card border-primary border-2 md:!border-white md:hover:!border-primary fade-in delay-2 bg-white rounded-2xl p-8">
            <div className="mb-4 flex items-start">
              <Image
                src="/Icons/account.svg"
                alt="account"
                className="flex-shrink-0 w-9 h-auto mr-4"
                width={36}
                height={36}
              />
              <h5  >Better Account Penetration</h5>
            </div>
            <p className="text-gray-600 mb-2 md:mb-4">
              ABM helps you expand within accounts by identifying and
              engaging multiple decision-makers.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-sm !font-medium text-gray-600">
                  Traditional
                </p>
                <div className="font-bold text-lg">1 - 2</div>
                <p className="text-xs !font-medium text-gray-500">
                  contacts per account
                </p>
              </div>
              <div className="bg-primary/5 p-3 rounded-xl text-center">
                <p className="text-sm !font-medium text-gray-600">ABM</p>
                <div className="font-bold text-lg text-primary">5 - 7</div>
                <p className="text-xs !font-medium text-gray-500">
                  contacts per account
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default WhyABM;
