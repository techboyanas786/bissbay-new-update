import React from 'react'

function Future() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
      <div className="order-1 lg:order-2 transition-all duration-1000 delay-300">
        <h2 className="section-title !text-center sm:!text-left !mb-4 md:!mb-6">
          Building for the Future:<br />
          <span className="text-primary"> Strategic Investments and ROI</span>
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            When you make a strategic investment in B2B marketing, you're setting the foundation for long-term growth and future returns.
          </p>
          <p className="font-semibold text-bissbay-black">
            By focusing on the right market insights, audience targeting, and brand positioning, you’ll build consistent revenue streams, foster long-lasting relationships, and unlock opportunities for sustainable success.
          </p>
          <p>
            This approach leads to increased customer loyalty, stronger market position, and a higher return on investment for your business.
          </p>
        </div>
      </div>
      <div className="group flex items-center justify-center order-2 md:order-1">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
          <img
            className="w-full h-full"
            src="/images/FounderScaling.jpg"
            alt="Founder Scaling"
          />
        </div>
      </div>
    </section>
  )
}

export default Future