"use client";
import { ExternalLink } from "lucide-react";
import React from "react";
import { WorldMap } from "@/components/ContactMap";
function Inspired() {
  const LinkCard = ({ url, title, description, delay }) => {
    return (
      <a
        href={`https://${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-primary animate-fade-in-up`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex-col flex gap-4 md:gap-8 items-start justify-center mb-0 md:mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-bissbay-black group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110" />
          </div>

          <p className="text-sm text-gray-600 mb-0 md:mb-3 group-hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>

          <div className="flex items-start text-base text-primary">
            <span className="group-hover:underline">{url}</span>
          </div>
        </div>
      </a>
    );
  };
  return (
    <>
      <div className="p-0 md:p-6 !bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-bissbay-black">
            Get Inspired with <span className="text-primary">BISSBAY</span>
          </h2>
          <h4 className="my-4 md:my-6 !text-[#5C6371]">
            Explore our network of innovative platforms and services
          </h4>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <LinkCard
            url="blog.bissbay.com"
            title="BISSBAY Blog"
            description="Insights, trends, and thought leadership from our team"
            delay={0}
          />
          <LinkCard
            url="accessvisibility.com"
            title="Access Visibility"
            description="Accessibility redefined: secure, scalable, and efficient solutions."
            delay={200}
          />
          <LinkCard
            url="translation.services"
            title="Translation Services"
            description="Seamless communication across borders."
            delay={600}
          />
          <LinkCard
            url="microzentechnologies.com"
            title="Microzen Technologies"
            description="Technology solutions for agility and scale."
            delay={400}
          />
        </div>
        <div className="text-center mt-4 md:mt-8">
          <h2>BISSBAY Worldwide</h2>
          <h4 className="my-4 md:my-6 !text-[#5C6371]">
            We embrace a global presence and agile operations, enabling us to support clients across regions and deliver
            results wherever they grow
          </h4>
        </div>

        <WorldMap
          dots={[
            {
              start: { lat: 5.5204, lng: 80.8567, label: "India" },
              end: { lat: 8.2963, lng: 58.2963, label: "UAE" },
            },
            {
              start: { lat: 8.2963, lng: 58.2963, label: "UAE" },
              end: { lat: 14.0, lng: 45.0, label: "Saudi" },
            },
            {
              start: { lat: 14.0, lng: 45.0, label: "Saudi" },
              end: { lat: 51.4871, lng: -2.4049, label: "UK" },
            },
            {
              start: { lat: 51.4871, lng: -2.4049, label: "UK" },
              end: { lat: 25.7045, lng: -103.9115, label: "USA" },
            },
            {
              start: { lat: 25.7045, lng: -103.9115, label: "USA" },
              end: { lat: 5.5204, lng: 80.8567, label: "India" },
            },
          ]}
          carouselPosition="bottom-[10%] left-6"
        />
      </div>
    </>
  );
}

export default Inspired;
