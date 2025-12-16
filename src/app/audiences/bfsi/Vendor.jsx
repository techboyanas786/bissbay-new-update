import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";

function Vendor() {
    const stat = {
        icon: (
            <Image
                src="/Icons/SEO.svg"
                alt="Define Goals"
                className="flex-shrink-0"
                width={48}
                height={48}
            />
        ),
        value: "1,400",
        label: "Vendor Insights",
        description: [
            "The finance software landscape is complex and competitive.",
            "Bissbay identifies where and when decision-makers are engaging with vendors,",
            "so you can prioritize the right accounts and win key opportunities.",
        ],
    };
    const logos = [
        {
            src: "/logos/NetSuite-Logo.png",
            name: "Net Suite",
            size: 160,
            top: "10%",
            left: "38%",
        },
        {
            src: "/logos/trintech.png",
            name: "Trintech",
            size: 120,
            top: "50%",
            left: "65%",
        },
        {
            src: "/logos/Unzer_logo.png",
            name: "Unzer",
            size: 80,
            top: "72%",
            left: "30%",
        },
        {
            src: "/logos/Aviva.png",
            name: "Aviva",
            size: 80,
            top: "40%",
            left: "56%",
        },
        {
            src: "/logos/Veripark.png",
            name: "Veripark",
            size: 90,
            top: "25%",
            left: "65%",
        },
        {
            src: "/logos/Sage-logo.png",
            name: "Sage",
            size: 70,
            top: "64%",
            left: "55%",
        },
        {
            src: "/logos/Cloudflare_Logo.png",
            name: "Cloudflare",
            size: 110,
            top: "54%",
            left: "40%",
        },
        {
            src: "/logos/DarkTrace.png",
            name: "Dark Trace",
            size: 70,
            top: "45%",
            left: "32%",
        },
        {
            src: "/logos/Amazon.png",
            name: "Amazon",
            size: 130,
            top: "50%",
            left: "15%",
        },
        {
            src: "/logos/Auth0.png",
            name: "Auth0",
            size: 90,
            top: "50%",
            left: "2%",
        },
        {
            src: "/logos/mimecast.png",
            name: "Mimecast",
            size: 70,
            top: "30%",
            left: "14%",
        },
        {
            src: "/logos/WatchGuard.png",
            name: "Watch Guard",
            size: 100,
            top: "20%",
            left: "24%",
        },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-6`}
        >
            {/* Left Section */}
            <div className={`flex py-0 flex-col items-start flex-[55]`}>
                <div className="flex flex-row items-center gap-2">
                    {stat.icon}
                    <h2 className="text-[28px] sm:text-[36px] !mb-0 !text-primary">
                        {stat.value}
                    </h2>
                </div>
                <h1 className="text-xl sm:text-2xl">{stat.label}</h1>
                <div className="mt-4 sm:mt-6">
                    <p
                        className={`text-start text-sm sm:text-base mb-4 md:mb-8`}
                    >
                        {stat.description.map((line, idx) => (
                            <span key={idx}>{line} </span>
                        ))}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                    <Button
                        variant="primary"
                        onClick={() => setOpen(true)}
                        customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                        label="Schedule Your Consultation"
                    />
                    <BookingModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="relative w-full md:scale-100 max-w-[850px] min-h-[200px] aspect-[2/1] mx-auto flex-[45]">
                {logos.map((logo, index) => {
                    const vwSize = (logo.size / 1920) * 100;
                    const animationDuration = `${6 + (index % 5)}s`;
                    return (
                        <div
                            key={index}
                            className="absolute border-gray-200 border-2 animate-float p-1 hover:scale-105 duration-500 transition-all rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden"
                            style={{
                                top: logo.top,
                                left: logo.left,
                                animationDuration,
                                width: `${vwSize}vw`,
                                height: `${vwSize}vw`,
                                minWidth: `${logo.size * 0.5}px`,
                                minHeight: `${logo.size * 0.5}px`,
                                maxWidth: `${logo.size}px`,
                                maxHeight: `${logo.size}px`,
                            }}
                        >
                            <Image
                                src={logo.src}
                                alt="logo"
                                title={logo.name}
                                width={logo.size * 0.8}
                                height={logo.size * 0.8}
                                className="object-contain"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Vendor;
