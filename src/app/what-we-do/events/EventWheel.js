"use client";
import { useState } from "react";
import DonutChart from "./DonutChart";
import LifecyclePanel from "./RightPanel";
import BissbayLogo from "@/components/bissbayLogo";

const panelData = [
  {
    title: "Planning",
    position: "translate-x-110",
    items: [
      {
        title: "Meeting approval & budgeting",
        description: " We help you coordinate requests, approvals, and budget tracking to keep your organization's events on track and within scope.",
      },
      {
        title: "Event sourcing",
        description: "We streamlines your venue sourcing with expert guidance and access to a vast network to secure the perfect fit for your events",
      },
      {
        title: "Vendor sourcing",
        description: "Access a broad network of experienced service providers to enhance and support your event success.",
      },
      {
        title: "Audience Definition",
        description: "Identify target personas, industries, and segments to invite.",
      },
      {
        title: "Technology Setup",
        description: "We assist in selecting and configuring your preferred event platforms, ensuring seamless registration and system integration ",
      },
    ],
  },
  {
    title: "Promotion",
    position: "translate-x-110",
    items: [
      {
        title: "Registeration",
        description: "We design personalized registration journeys and coordinate with your platform to capture essential attendee information with ease and security ",
      },
      {
        title: "Amplification",
        description: "Drive attendance and engagement with BISSBAY's end-to-end promotional execution.",
      },
      {
        title: "Marketing",
        description: "We craft and execute personalized email sequences to engage your audience, improve response rates, and drive higher attendance. ",
      },
      {
        title: "Speaker management",
        description: "We ensure your speakers are featured across campaigns, content, and communications to maximize reach and event impact.",
      },
      {
        title: "Exhibitor Engagement",
        description: "We help maximize exhibitor visibility and lead capture through targeted promotion and post-event data strategies that drive measurable ROI for physical, virtual, or hybrid events .",
      },
    ],
  },
  {
    title: "Day of Event",
    position: "-translate-x-110",
    items: [
      {
        title: "Data Integration & Lead Routing",
        description: "We unify your event data and seamlessly route qualified leads to sales and marketing for timely follow-up.",
      },
      {
        title: "Audience Segmentation & Targeting",
        subtitle: "Engage with your phone",
        description: "We segment your attendees based on behavior and intent to ensure personalized engagement and messaging.",
      },
      {
        title: "Campaign Execution",
        description: "We manage targeted outreach and real-time communications to maximize attendee engagement and drive last-minute registrations. ",
      },
      {
        title: "Real-Time Lead Qualification",
        description: "We help set up frameworks to identify high value leads during the event for immediate sales outreach. ",
      },
      {
        title: "Post-Event Analysis & Insights",
        description: "We analyze engagement and lead data to optimize your future event strategies and demonstrate ROI.",
      },
    ],
  },
  {
    title: "Post Event",
    position: "-translate-x-110",
    items: [
      {
        title: "Integrations",
        description: "Seamlessly connect your event data to your sales and marketing systems. We help you turn attendee insights into qualified leads and real revenue.",
      },
      {
        title: "Event and attendee insights",
        description: "Track event performance, calculate ROI, and uncover insights that fuel smarter decisions. We stores, structures, and analyzes event data to power marketing and revenue growth.",
      },
      {
        title: "Surveys",
        description: "Every attendee interaction is captured and accounted for. We ensure your event data is preserved to help you refine your strategy and boost results.",
      },
      {
        title: "Lead Management",
        description: "Streamline lead qualification and transfer to sales and marketing. We enable efficient lead management across all data sources for timely follow-up.",
      },
      {
        title: "Engagement Scoring",
        description: "Monitor attendee engagement and gain actionable insights. BISSBAY helps prioritize leads and optimize follow-up. ",
      },
    ],
  },
];

export default function DonutWithPanels() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const centerContent = {
    showLogo: selectedIndex === null,
    title: selectedIndex === null ? null : panelData[selectedIndex].title,
    subtitle:
      selectedIndex === 3
        ? "Quantify success with data"
        : selectedIndex === 2
          ? "Deliver standout attendee experiences"
          : selectedIndex === 1
            ? "Enhance promotional impact"
            : selectedIndex === 0
              ? "Simplify your planning process"
              : {
                  line1: "Event Lifecycle",
                  line2: "Smart event marketing and execution, real results."
                },
  };

  return (
    <section>
      <div className="text-center">
        <h2 className="section-title !mb-0">
          End-to-End Support for Your Entire <span className="text-primary">Event Journey</span>
        </h2>
        <h3 className="my-4 md:my-6">From planning to follow-up, we manage the details so you can lead the strategy.</h3>
      </div>

      <div className="relative flex-col flex justify-center items-center w-full overflow-hidden">
        {/* Donut Chart */}
        <div className="z-10">
          <DonutChart
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            centerContent={centerContent}
            BissbayLogo={BissbayLogo}
          />
        </div>
        <div
          className={`hidden lg:block absolute ${selectedIndex === null ? '!hidden' : panelData[selectedIndex].position}`}
        >
          <LifecyclePanel
            data={selectedIndex === null ? panelData[0] : panelData[selectedIndex]}
            selectedIndex={selectedIndex}
          />
        </div>
        <div
          className={`block ${selectedIndex === null ? 'hidden' : 'mt-0 md:mt-4'} lg:hidden`}
        >
          <LifecyclePanel
            data={selectedIndex === null ? panelData[0] : panelData[selectedIndex]}
            selectedIndex={selectedIndex}
          />
        </div>
      </div>
    </section>
  );
}