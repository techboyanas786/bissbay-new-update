"use client";
import { useState } from 'react';

const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const comparisonData = [
    {
      feature: 'Format',
      webinar: 'Online, <br class="md:hidden"/>digital events',
      seminar: 'Face-to-face, <br class="md:hidden"/>physical events',
    },
    {
      feature: 'Audience <br class="md:hidden"/>Reach',
      webinar: 'Global, no <br class="md:hidden"/>travel required',
      seminar: 'Local/regional, <br class="md:hidden"/>high-value networking',
    },
    {
      feature: 'Engagement <br class="md:hidden"/>Tools',
      webinar: 'Polls, Q&As, <br class="md:hidden"/>live chat, demos',
      seminar: 'Live discussions, <br class="md:hidden"/>breakout sessions',
    },
    {
      feature: 'Lead <br class="md:hidden"/>Generation',
      webinar: 'Automated <br class="md:hidden"/>registration & <br class="md:hidden"/>follow-ups',
      seminar: 'Relationship-driven, <br class="md:hidden"/>direct nurturing',
    },
    {
      feature: 'Speaker <br class="md:hidden"/>Access',
      webinar: 'Remote experts, <br class="md:hidden"/>global thought <br class="md:hidden"/>leaders',
      seminar: 'Keynote speakers, <br class="md:hidden"/>live panels',
    },
    {
      feature: 'Cost-<br class="md:hidden"/>Effectiveness',
      webinar: 'Lower cost, <br class="md:hidden"/>no venue expenses',
      seminar: 'Higher cost, <br class="md:hidden"/>includes logistics',
    },
    {
      feature: 'Technology <br class="md:hidden"/>Used',
      webinar: 'Live streaming, <br class="md:hidden"/>on-demand content',
      seminar: 'AV setup, <br class="md:hidden"/>presentation tech',
    },
    {
      feature: 'Best For',
      webinar: 'Thought leadership, <br class="md:hidden"/>demand gen',
      seminar: 'Executive networking, <br class="md:hidden"/>trust-building',
    },
    {
      feature: 'Post-Event <br class="md:hidden"/>Analytics',
      webinar: 'Attendee insights, <br class="md:hidden"/>engagement tracking',
      seminar: 'Direct participant <br class="md:hidden"/>feedback',
    },
    {
      feature: 'Flexibility',
      webinar: 'Live or pre-recorded, <br class="md:hidden"/>available anytime',
      seminar: 'Fixed schedule, <br class="md:hidden"/>real-time interactions',
    },
    {
      feature: 'Hybrid <br class="md:hidden"/>Option',
      webinar: 'Yes – Can integrate <br class="md:hidden"/>with live events',
      seminar: 'Yes – Can include <br class="md:hidden"/>live streaming',
    }
  ];

  return (
    <section>

      {/* Table Header */}
      <div className="text-center">
        <h2 className="section-title !mb-0">
          Compare <span className="text-primary">Webinars vs. Seminars</span>
        </h2>
        <h3 className="my-4 md:my-6">Find the perfect event format for your business goals</h3>
      </div>

      {/* Responsive Table */}
      <div className="bg-gray-50 w-fit mx-auto rounded-xl overflow-hidden shadow-xl">
        <div  >
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-2 lg:p-4 text-center text-xs md:text-sm lg:text-lg font-bold w-1/4">Feature</th>
                <th className="p-2 lg:p-4 text-center text-xs md:text-sm lg:text-lg font-bold w-2/5">
                  <span>Webinars (Virtual)</span>
                </th>
                <th className="p-2 lg:p-4 text-center text-xs md:text-sm lg:text-lg font-bold w-2/5">
                  <span>Seminars <br className="md:hidden block" />(In-Person)</span>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer ${hoveredRow === index ? 'bg-white shadow-lg lg:scale-[1.02]' : 'bg-gray-50'
                    }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="p-1 lg:p-4 text-center font-semibold text-bissbay-black border-b border-gray-200 text-xs md:text-sm lg:text-base">
                    <div className="flex justify-center w-full">
                      <p className="!text-center !font-semibold text-xs md:text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: row.feature }} ></p>
                    </div>
                  </td>

                  {/* Webinar column */}
                  <td className="p-1 lg:p-4 border-b border-gray-200">
                    <div className="flex justify-center w-full">
                      <p className="!text-left text-xs md:text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: row.webinar }} />
                    </div>
                  </td>

                  {/* Seminar column */}
                  <td className="p-1 lg:p-4 border-b border-gray-200">
                    <div className="flex justify-center w-full">
                      <p className="!text-left text-xs md:text-sm lg:text-base break-words" dangerouslySetInnerHTML={{ __html: row.seminar }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
