"use client";
import React, { useEffect } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/card";
import { FunnelStage } from "@/components/FunnelComponent/FunnelStage";
import { FunnelVisual } from "@/components/FunnelComponent/FunnelVisual";
import { Benefits } from "@/components/FunnelComponent/Benefits";
import { UnifiedFunnel } from "@/components/FunnelComponent/UnifiedFunnel";
import { FunnelProvider } from "@/components/FunnelComponent/FunnelContext";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Button from "@/components/Button";
import RotatingText from "@/components/RotatingText";
import Link from "next/link";

function page() {
  const [expandedService, setExpandedService] = React.useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  const services = [
    {
      id: 0,
      title: "Strategy, Planning & Insights",
      description:
        "We use data intelligence to uncover market opportunities and shape smarter, more effective marketing decisions.",
    },
    {
      id: 1,
      title: "Public Relations & Analyst Relations",
      description:
        "We help brands earn credibility and authority through data-backed communication strategies that reach industry analysts, media, and buyers.",
    },
    {
      id: 2,
      title: "Content Marketing & Development",
      description:
        "We turn complex ideas into clear, compelling stories that attract and convert niche B2B audiences.",
    },
    {
      id: 3,
      title: "Lead Generation & Media Buying",
      description:
        "We connect you to the right decision-makers through multi-channel demand generation, performance marketing, and intent data.",
    },
    {
      id: 4,
      title: "Advertising & Creative Services",
      description:
        "Our creative team blends storytelling and analytics to deliver campaigns that drive brand growth and measurable results.",
    },
    {
      id: 5,
      title: "Community Marketing & Social Media",
      description:
        "We help brands build meaningful relationships with buyers, influencers, and communities across digital platforms.",
    },
    {
      id: 6,
      title: "Data Analytics & Market Research",
      description:
        "Our proprietary data platform and analytics solutions empower smarter targeting, segmentation, and performance tracking.",
    },
  ];

  
const serviceCardsData = [
  {
    id: 1,
    title: "Account-Based Marketing (ABM)",
    description:
      "We create precision-driven ABM programs that align marketing and sales to engage, convert, and expand high-value accounts.",
    points: [
      "Account Identification & Prioritization",
      "Buyer Persona & Decision-Maker Mapping",
      "Campaign Strategy & Customization",
      "Account Intelligence & Insights",
      "Personalized Messaging Frameworks",
    ],
    link: "/what-we-do/account-based-marketing",
  },
  {
    id: 2,
    title: "Appointment Setting",
    description:
      "Our expert SDR and BDR teams connect your sales reps with the right decision-makers to drive meaningful conversations.",
    points: [
      "Target Account Research & Profiling",
      "Contact Discovery & Verification",
      "Personalized Outreach Campaigns",
      "Call, Email & LinkedIn Sequencing",
      "Qualified Meeting Scheduling",
    ],
    link: "/what-we-do/appointment-setting",
  },
  {
    id: 3,
    title: "Demand Generation",
    description:
      "We create and execute multi-channel campaigns that capture attention, nurture interest, and convert demand into pipeline.",
    points: [
      "Go-To-Market Strategy Design",
      "Target Audience Definition",
      "Integrated Campaign Planning",
      "Content & Offer Development",
      "Lead Capture & Nurture Workflows",
    ],
    link: "/what-we-do/demand-generation",
  },
  {
    id: 4,
    title: "Content Syndication",
    description:
      "We distribute your thought leadership and gated assets to the right audiences across trusted global platforms.",
    points: [
      "Audience Targeting & Segmentation",
      "Publisher Network Selection",
      "Content Distribution Planning",
      "Intent-Based Syndication Programs",
      "Lead Capture & Validation",
    ],
    link: "/what-we-do/content-syndication",
  },
  {
    id: 5,
    title: "Email Marketing",
    description:
      "We craft personalized, data-driven email campaigns that educate, engage, and convert prospects into customers.",
    points: [
      "Email Campaign Strategy & Planning",
      "List Segmentation & Targeting",
      "Drip & Nurture Campaign Design",
      "Template Design & Copywriting",
      "Automation Setup & Integration",
    ],
    link: "/what-we-do/email-marketing",
  },
  {
    id: 6,
    title: "Events (Seminars & Webinars)",
    description:
      "We plan and execute impactful virtual and in-person events that drive awareness, engagement, and qualified leads.",
    points: [
      "Event Concept & Strategy Development",
      "Topic & Speaker Coordination",
      "Target Audience Promotion",
      "Registration & Attendance Management",
      "Content & Presentation Support",
    ],
    link: "/what-we-do/events",
  },
  {
    id: 7,
    title: "Intelligent Data Enrichment",
    description:
      "We turn raw contact data into actionable intelligence that fuels precision targeting and campaign success.",
    points: [
      "Data Cleansing & Normalization",
      "Firmographic, Technographic & Demographic Enrichment",
      "Contact Validation & Verification",
      "Account Hierarchy Mapping",
      "CRM Data Integration",
    ],
    link: "/what-we-do/intelligent-data-enrichment",
  },
  {
    id: 8,
    title: "Intent Data",
    description:
      "We identify in-market accounts through behavioural and intent signals to prioritize and accelerate conversions.",
    points: [
      "First & Third-Party Intent Data Integration",
      "Buying Signal Identification",
      "Surge Topic Tracking",
      "Account Scoring & Prioritization",
      "Persona-Level Intent Mapping",
    ],
    link: "/what-we-do/intent-data",
  },
  {
    id: 9,
    title: "Lead Generation",
    description:
      "We build predictable, scalable lead pipelines that fuel your sales team with verified, high-intent prospects.",
    points: [
      "Lead Generation Strategy & Planning",
      "ICP & Buyer Persona Development",
      "Multi-Channel Campaign Execution",
      "Content & Offer Design",
      "Lead Qualification & Scoring",
    ],
    link: "/what-we-do/lead-generation",
  },
  {
    id: 10,
    title: "Digital Advertising (SEO & SEM)",
    description:
      "We combine performance marketing and organic visibility strategies to drive measurable digital growth.",
    points: [
      "Paid Search (PPC) Campaigns",
      "Display & Retargeting Strategy",
      "Keyword & Competitor Analysis",
      "Landing Page Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
    link: "/what-we-do/digital-advertising",
  },
];
  return (
    <>
      <main className="container px-4 lg:px-2 mx-auto pt-115px flex flex-col gap-4 ">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h3
              className="!text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Our B2B Services
            </h3>
            <h1 className="flex gap-2 mt-6 md:!mt-8 my-4 lg:my-6">
              <span>
                We{" "}
              </span>
              <RotatingText
                texts={["Build Awareness", "Generate Demand"]}
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.0005}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                className="!text-primary"
              />
            </h1>
            <h6 className="mb-4 lg:mb-6 lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              From strategy to execution, we deliver end-to-end B2B marketing services that drive measurable business growth.
            </h6>
            <h6 className="mb-6 lg:mb-8 lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              Bissbay helps businesses turn data-driven insights into measurable marketing impact. Our integrated B2B marketing solutions combine strategy, creativity, and technology to build awareness, generate demand, and drive revenue growth.
            </h6>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <Button
                variant="primary"
                customClass=" transform transition-all duration-300 ease-in-out"
                label="Browse Services"
                onClick={() => {
                  document.getElementById('service-cards')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-100 h-[400px] md:h-[500px]">
          </div>
        </div>

        {/* Services Section */}
        <section className="bg-white rounded-lg p-0 md:p-4 max-w-[760px] mx-auto">
          <div className="space-y-4">
            {services.map((service,idx) => (
              <div key={service.id} className={`group pb-4 ${idx !== services.length - 1 ? "border-b border-gray-200" : ""}`}>
                {/* Header */}
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => toggleService(service.id)}
                >
                  {/* Plus Icon */}
                  <div
                  className={`text-[#5C6371] md:group-hover:text-primary transition-all duration-300 md:group-hover:rotate-45 ${
                    expandedService === service.id ? "rotate-45 !text-primary" : ""
                  } h-[24px] w-[24px] relative`}
                >
                  <div
                    className={`absolute w-[3px] h-full bg-[#5C6371] group-hover:bg-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                      expandedService === service.id && "!bg-primary"
                    }`}
                  ></div>
                  <div
                    className={`absolute w-full h-[3px] bg-[#5C6371] group-hover:bg-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                      expandedService === service.id && "!bg-primary"
                    }`}
                  ></div>
                </div>

                  {/* Title */}
                  <h2
                    className={`!text-[#5C6371] md:group-hover:!text-primary transition-colors duration-300 flex-1 ${
                      expandedService === service.id ? "!text-primary" : ""
                    }`}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    expandedService === service.id
                      ? "!grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  } md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]`}
                >
                  <div className="overflow-hidden">
                    <h6 className="ml-9 mt-2 lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
                      {service.description}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <span className="bg-primary h-1 w-full"></span>

        {/* Service Cards Section */}
        <section id="service-cards" style={{ scrollMarginTop: "130px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCardsData.map((card, idx) => (
              <div
                key={card.id}
                className={"card group flex flex-col hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary " 
                  + (idx==9 ? "md:hidden" : "")}
              >
                {/* Title */}
                <h3 className="mb-2 md:!mb-4 !text-[#1f2937]">{card.title}</h3>

                {/* Description */}
                <p className="mb-4">{card.description}</p>

                {/* Points */}
                <ul className="space-y-2 mb-4">
                  {card.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <p className="!text-primary font-bold mr-2">✔</p>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className="mt-auto">
                  <Link href={card.link}>
                    <span className="font-semibold text-base underline-offset-2 underline text-primary inline-flex items-center gap-1">
                      Learn more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>

                  {/* Hover Progress Bar */}
                  <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>

        <span className="bg-primary h-1 w-full"></span>

        <section className="relative overflow-hidden ">
          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-[#1f2937] md:!font-semibold tracking-tight">
              Convert High-Value Prospects into Loyal Customers with Precision
              Funnel Strategies Built on Data
            </h1>
          </div>
          <Benefits />
        </section>
        <section>
          <h2 className="section-title !mb-0 text-center">
            The Sales Funnel: Your Path to{" "}
            <span className="text-primary">Conversions</span>
          </h2>

          <h3 className="text-center my-4 md:my-6">
            At BISSBAY, we believe in guiding potential customers through a
            clear and effective journey toward making a purchase.
          </h3>
          <h4 className="mb-4 md:mb-6 text-center">
            Our sales funnel is designed to simplify the process, ensuring
            that each prospect gets the right attention at every stage.
          </h4>
          <FunnelProvider>
            <div className="flex-col md:flex-row flex gap-6 justify-center items-center">
              <div className="md:space-y-8 md:w-[50%]">
                <FunnelStage
                  number="1"
                  title="Top of the Funnel (TOFU)"
                  description="This is where your potential customers first discover your brand and offerings. It's the broadest stage, capturing a wide audience and sparking interest."
                />

                <FunnelStage
                  number="2"
                  title="Middle of the Funnel (MOFU)"
                  description="Now that prospects know who you are, they start evaluating how your solution meets their needs. At this stage, your audience begins to narrow as they actively engage with your content and offerings."
                />

                <FunnelStage
                  number="3"
                  title="Bottom of the Funnel (BOFU)"
                  description="This is the final stretch, where prospects are ready to make their decision. It's time to convert them into loyal customers by providing exactly what they need to take the leap."
                />

                <FunnelStage
                  number="4"
                  title="Post-Purchase"
                  description="Our commitment doesn't stop at the sale. We nurture relationships post-purchase to keep customers coming back, building loyalty and repeat business."
                />
              </div>
              <div className="md:block hidden">
                <FunnelVisual />
              </div>
            </div>
          </FunnelProvider>
        </section>
        <section>
          <h2 className="section-title text-center">
            How Your<span className="text-primary"> Funnel </span>Looks with
            BISSBAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Awareness",
                description:
                  "The stage where potential customers first discover your product or service.",
                icon: (
                  <Image
                    src="/Icons/DATA_ANALYSIS.svg"
                    alt="Revenue Stagnation"
                    className="flex-shrink-0"
                    width={36}
                    height={36}
                  />
                ),
                color: "from-red-500 to-orange-400",
              },
              {
                title: "Consideration",
                description:
                  "Building interest and nurturing prospects as they evaluate your offerings.",
                icon: <Image
                  src="/Icons/DEFINE.svg"
                  alt="Revenue Stagnation"
                  className="flex-shrink-0"
                  width={36}
                  height={36}
                />,
                color: "from-orange-400 to-yellow-300",
              },
              {
                title: "Conversion",
                description:
                  "Guiding prospects toward taking meaningful actions, such as making a purchase or scheduling a demo.",
                icon: <Image
                  src="/Icons/SUSTAINABLE.svg"
                  alt="Revenue Stagnation"
                  className="flex-shrink-0"
                  width={36}
                  height={36}
                />,
                color: "from-yellow-300 to-green-400",
              },
              {
                title: "Loyalty",
                description:
                  "Turning customers into repeat buyers and passionate brand advocates.",
                icon: <Image
                  src="/Icons/LOYALTY.svg"
                  alt="Revenue Stagnation"
                  className="flex-shrink-0"
                  width={36}
                  height={36}
                />,
                color: "from-green-400 to-blue-500",
              },
            ].map((stage, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className={`h-1.5 bg-gradient-to-r ${stage.color}`}
                ></div>
                <CardContent className="md:p-6 p-4">
                  <div className="flex items-center justify-start gap-3 mb-4">
                    {stage.icon}
                    <h5  >{stage.title}</h5>
                  </div>
                  <p className="text-gray-600">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="shadow-lg w-fit mx-auto hover-card bg-white border-primary border-2 md:!border-gray-200 md:hover:!border-primary rounded-xl p-2 lg:p-6">
          <h2 className="!mb-0 text-center section-title">
            How <span className="text-primary">Marketing & Sales </span>Work Together
          </h2>
          <div className="p-4 md:p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <p className="!text-primary font-bold mr-2">✔</p>
                <p  >
                  The marketing funnel fills the sales funnel by attracting
                  and qualifying potential leads.
                </p>
              </div>
              <div className="flex items-center">
                <p className="!text-primary font-bold mr-2">✔</p>
                <p  >
                  The sales funnel picks up where marketing leaves off,
                  converting engaged leads into customers.
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-6 text-lg">
              <p className="!font-semibold">
                At BISSBAY, we integrate both funnels seamlessly to ensure a
                steady flow of high-quality leads and efficient conversions,
                maximizing revenue growth.
              </p>
            </div>
          </div>
        </section>
        <UnifiedFunnel />
      </main>
      <CTASection
        title="Ready to Transform?"
        subtitle="Let BISSBAY help you build a powerful, conversion-focused funnel that turns prospects into loyal customers."
        primaryButton={{
          label: "Schedule Your Consultation",
          type: "modal",
        }}
        secondaryButtons={[
          {
            label: "Request Proposal",
            type: "modal",
            modalType: "proposal",
          },
          {
            label: "Your ROI Calculator",
            href: "/resources/roi-calculator",
            target: "_blank",
            icon: (
              <Calculator className="small-icon group-hover:!text-primary !text-white" />
            ),
          },
        ]}
      />
    </>
  );
}

export default page;
