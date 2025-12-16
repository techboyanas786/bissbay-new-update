"use client";
import { CountUpAnimation } from "@/app/what-we-do/account-based-marketing/animation/CountUpAnimation";
import { motion } from "framer-motion";
import { Briefcase, Building, Building2, Globe, Users, Mail } from "lucide-react";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
function Hero2() {
  const router = useRouter();

  const stats = [
    {
      icon: Globe,
      label: "Global Regions",
      value: 4,
      color: "text-primary",
    },
    {
      icon: Building2,
      label: "Industries",
      value: 13,
      suffix: "+",
      color: "text-foreground",
    },
    {
      icon: Users,
      label: "Company Sizes",
      value: 7,
      color: "text-primary",
    },
    {
      icon: Briefcase,
      label: "Departments",
      value: 10,
      suffix:"+",
      color: "text-foreground",
    },
    {
      icon: Building,
      label: "Verified Companies",
      value: 5,
      suffix:"M+",
      color: "text-foreground",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2 className="text-center">
          Audience Analytics
          <span className="text-primary"> Dashboard</span>
        </h2>
        <h3 className="md:text-center text-left my-4 md:my-6">
          Visual insights into 113M+ global audience segments, industry trends, and organizational dynamics.
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 md:p-6 hover-card h-full card border-1 border-gray-300 duration-300 transition-all hover:scale-103  hover:border-white rounded-2xl text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="medium-icon " />
                  </div>
                  <CountUpAnimation start={0} className="text-4xl font-bold !text-primary" end={stat.value} suffix={stat.suffix}/>
                  <p className="font-semibold text-primary my-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Contact Us Card - Mobile Only */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stats.length * 0.1 }}
          >
            <div className="!p-2 hover-card h-full card border-1 !border-primary rounded-2xl text-center flex flex-col justify-center items-center">
              <div className="flex justify-center mb-2">
                <Mail className="medium-icon" />
              </div>
              <h5 className="text-4xl font-bold text-black mb-1">Get in Touch</h5>
              <p className="font-semibold text-primary my-1 mb-2">
                Have question about data?
              </p>
              <div className="flex justify-center">
                <Button
                  customClass="transform transition-all duration-300 ease-in-out"
                  variant="primary"
                  label="Contact Us"
                  onClick={() => router.push("/contact-us")}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero2;
