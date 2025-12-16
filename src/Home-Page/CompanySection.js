"use client";

export default function CompanySection() {
  return (
    <>
      {/* Companies section */}
      <section className="bg-white py-6 mb-80 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg sm:text-[20px] md:text-[40px] font-semibold text-center text-gray-800 leading-snug">
            With <span className="font-bold">BISSBAY</span>, our clients close{" "}
            <span className="text-primary font-bold">30%</span> more deals with
            their ideal accounts, driving measurable growth and long-term success.
          </h2>

          <div className="bg-[#1F1F1F] rounded-xl mt-16 p-8 md:p-12">
            <div className="flex-1 mt-10 mb-10 space-y-6">
              <h3 className=" text-center leading-tight">
                See how your pipeline transforms with BISSBAY  <br className="hidden md:block" />
                More qualified leads, higher conversions, and accelerated revenue growth.
              </h3>
              <p className="text-[#FFFFFF] mt-15 text-[18px]">
                Focus on scaling your business while BISSBAY delivers sales-ready B2B leads that drive growth and revenue.
              </p>


              <div className="flex flex-col md:flex-row items-start md:items-start gap-[64px] text-left text-white mt-20 pr-20 pl-20">

                <div className="flex-1 space-y-4">
                  <div className="border-2 border-dotted border-[#3D3D3D] rounded-xl p-8">
                    <p className="text-sm text-[16px] text-[#B8B8B8] mb-4">We take care of the entire user journey</p>

                    <div className="bg-[#3D3D3D] rounded-xl p-4">
                      <h3 className="font-semibold text-white">Multichannel Engagement</h3>
                      <p className="text-[#B8B8B8] text-sm text-[16px] mt-1">
                        We craft a strategic outreach plan that seamlessly integrates email and cold calling ;
                        ensuring you connect with the right prospects at the right time, on the right platform.
                      </p>
                    </div>

                    <div className="bg-[#292929] rounded-xl p-4 mt-2">
                      <h3 className="font-semibold text-white">Implementation</h3>
                    </div>

                    <div className="bg-[#292929] rounded-xl p-4 mt-2">
                      <h3 className="font-semibold text-white">Conversion</h3>
                    </div>
                  </div>

                  <div className="border-2 border-dotted border-[#3D3D3D] rounded-xl p-8 mt-2">
                    <p className="text-sm text-[16px] text-gray-400 mb-4">Your role in the process</p>
                    <div className="bg-[#292929] rounded-xl p-4">
                      <h3 className="font-semibold text-white">Sealing the Deal</h3>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-4 items-center justify-center w-full">
                  
                  <p className="text-[#666666] text-[12px] text-center mt-2">
                    * Average Annual Outcomes
                    <br className="hidden md:block" />
                    Results are influenced by a variety of factors.
                  </p>

                 
                  <div className="wt-72 wbh-16 bg-gray-300 rounded-xl"></div>

                  
                  <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#2c2c2c]"></div>

                  
                  <div className="w-64 h-16 bg-gray-300 rounded-xl"></div>

                  
                  <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#2c2c2c]"></div>

                  
                  <div className="w-56 h-16 bg-gray-300 rounded-xl"></div>

                  
                  <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#2c2c2c]"></div>

                  
                  <div className="w-44 h-16 bg-gray-300 rounded-xl"></div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
