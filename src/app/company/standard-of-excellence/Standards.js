import { Award, Shield, Star } from "lucide-react";
import React from "react";

function Standards() {
  const CertificationCard = ({ title, code, description, delay = 0 }) => {
    const getIcon = () => {
      if (code.includes("ISO")) return <Award className="medium-icon" />;
      if (code.includes("CMMI")) return <Award className="medium-icon" />;
      return <Shield className="medium-icon" />;
    };

    return (
      <div
        className="group relative overflow-hidden bg-white hover-card border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-4 gap-3">
          <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
            {getIcon()}
          </div>
          <h5  >
            {title}
          </h5>
          </div>
          <p className="!font-semibold mb-2">{code}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="p-12">
      <div className="container mx-auto">
        <div className="text-center fade-on-scroll">
          <h2 className="section-title !mb-0">
            Delivering Across{" "}
            <span className="text-primary">Global Standards</span>
          </h2>
          <h3 className="my-4 md:my-6">
            Our commitment to global standards – and to the well-being of our
            planet – gives us a competitive edge,<br/> ensuring high levels of
            customer satisfaction and continuous improvement.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div animation="zoom" delay={200}>
            <CertificationCard
              title="Information Security Management"
              code="ISO 27001:2013"
              description="Comprehensive information security management ensuring data protection and confidentiality."
              delay={200}
            />
          </div>

          <div animation="zoom" delay={400}>
            <CertificationCard
              title="Quality Management System"
              code="ISO 9001:2015"
              description="Dedicated to quality excellence and continuous improvement in all service delivery."
              delay={400}
            />
          </div>

          <div animation="zoom" delay={600}>
            <CertificationCard
              title="Cloud Services Security"
              code="ISO 27017:2015"
              description="Specialized security controls for cloud services ensuring secure cloud computing environments."
              delay={600}
            />
          </div>

          <div animation="zoom" delay={800}>
            <CertificationCard
              title="Privacy Protection"
              code="ISO 27018:2014"
              description="Protection of personally identifiable information in public cloud computing environments."
              delay={800}
            />
          </div>

          <div animation="zoom" delay={1000}>
            <CertificationCard
              title="Occupational Health & Safety"
              code="ISO 45001"
              description="Ensuring workplace safety and health management for all employees and stakeholders."
              delay={1000}
            />
          </div>

          <div
            animation="zoom"
            delay={1200}
            className="md:col-span-2 lg:col-span-1"
          >
            <CertificationCard
              title="Capability Maturity Model"
              code="CMMI-SVC Level 2"
              description="Process improvement framework ensuring consistent, quality service delivery and operational excellence."
              delay={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Standards;
