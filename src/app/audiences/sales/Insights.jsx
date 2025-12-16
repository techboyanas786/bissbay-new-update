import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";
import WorldCloud from "./WorldCloud";

function Vendor() {
    const stat = {
        icon: (
            <Image
                src="/Icons/Insights_Analyzed.svg"
                alt="Define Goals"
                className="shrink-0"
                width={48}
                height={48}
            />
        ),
        value: "18,700",
        label: "Insights Analyzed",
        suffix: "",
        description: [
            "Sales priorities are shifting rapidly.",
            "Bissbay reveals new signals behind their changing needs, giving you the clarity to engage smarter and move faster in competitive markets.",
        ],
    };
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`flex flex-col md:flex-row items-start justify-between gap-5 sm:gap-6`}
        >
            {/* Left Section */}
            <div className={`flex py-0 flex-col items-start flex-[55] `}>
                <div className="flex flex-row items-center gap-2 ">
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
                            <span key={idx}>{line}<br /></span>
                        ))}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                    <Button
                        variant="primary"
                        onClick={() => setOpen(true)}
                        customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                        label="Book a call"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex-[45]">
                <WorldCloud />
            </div>
        </div>
    );
}

export default Vendor;
