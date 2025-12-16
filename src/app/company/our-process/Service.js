import {
  Target,
  Calendar,
  Globe,
  BarChart3,
  TrendingUp,
  Zap,
  Mail,
  Users,
  CheckCircle,
  Database,
  Users2,
  DatabaseZap,
} from "lucide-react";
import React from "react";
function Service() {
  const services = [
    {
      icon: Target,
      title: "ABM",
      description: "Targeted marketing for high-value accounts",
    },
    {
      icon: Calendar,
      title: "Appointment Setting",
      description: "Secure meetings with decision-makers",
    },
    {
      icon: Globe,
      title: "Content Syndication",
      description: "Expand your content reach",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Deliver accurate, actionable insights",
    },
    {
      icon: TrendingUp,
      title: "Demand Generation",
      description: "Spark interest & drive leads",
    },
    {
      icon: Zap,
      title: "Digital Advertising",
      description: "High-conversion ad campaigns",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Persuasive email campaigns",
    },
    {
      icon: DatabaseZap,
      title: "Intent Data",
      description: "Find prospects based on buying signals.",
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Deliver high-quality leads",
    },
  ];
  return (
    <section className="p-12">
      <div className="container mx-auto">
        <div className="text-center fade-on-scroll">
          <h2 className="section-title !mb-0">
            What <span className="text-primary">We Offer</span>
          </h2>
          <h3 className="my-4 md:my-6">
            Comprehensive solutions to accelerate your B2B growth through
            targeted omnichannel strategies.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:shadow-2xl rounded-md hover-card transition-all duration-500 border-0 bg-white hover:bg-corporate-gradient cursor-pointer animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 text-center">
                <service.icon className="large-icon mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h5 className="!mb-2">{service.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-6xl mx-auto text-center">
          <div className="fade-on-scroll">
              <h3 className="text-3xl mb-2 font-bold text-black">
                What We Do Together:
              </h3>
              <p className=" mb-8">Collaborative strategy development and alignment</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Go-to-Market Strategy",
                  desc: "Build comprehensive market entry plans",
                },
                {
                  title: "Customer & Buyer Personas",
                  desc: "Define your ideal customers precisely.",
                },
                {
                  title: "Messaging Alignment",
                  desc: "Align messaging with your audience",
                },
                {
                  title: "Analytics Setup",
                  desc: "Set up tracking & optimization systems.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justift-start space-x-4 p-8 card duration-300 rounded-xl"
                >
                  <CheckCircle className="mt-2 small-icon" />
                  <div className="gap-2 flex flex-col items-start">
                    <h5  >{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-[#fce9e3] to-[#E4E3E3] rounded-xl">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">B</span>
                    </div>
                    <span className="text-sm font-medium">Bissbay</span>
                  </div>
                  <div className="flex-1 h-1 mb-6 bg-primary"></div>
                  <svg className="w-12 mb-6 h-12 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div className="flex-1 h-1 mb-6 bg-primary"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">Y</span>
                    </div>
                    <span className="text-sm font-medium">Your Team</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
