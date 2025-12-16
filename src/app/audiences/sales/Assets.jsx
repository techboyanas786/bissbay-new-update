import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";
import WorldCloud from "./WorldCloud";

function Assets() {
    const stat = {
        icon: (
            <Image
                src="/Icons/CULTIVATING.svg"
                alt="Define Goals"
                className="shrink-0"
                width={48}
                height={48}
            />
        ),
        value: "5,000",
        label: "Assets Read",
        suffix: "",
        description: [
            "Sales buyers start educating themselves long before vendor conversations begin.",
            "Bissbay reveals what content they’re engaging with so you can time your outreach and sharpen your go-to-market strategy",
        ],
    };

    const assetsContent = [
        {
            img: "/images/SalesZeeneo.png",
            title: "THE 7 Lies of the Data Catalog Providers",
        },
        {
            img: "/images/SalesOsf.png",
            title: "This is how Connected Commerce Works",
        },
        {
            img: "/images/SalesState.png",
            title: "State of Sales",
        },
        {
            img: "/images/SalesInsideUp.png",
            title: "Aligning Sales and Marketing Over Agreed-Upon Metrics",
        },
        {
            img: "/images/SalesLuxary.png",
            title: "Luxury Retail Reinvention",
        },
    ];

    return (
        <div
            className={`flex flex-col items-center justify-between gap-4 sm:gap-6`}
        >
            {/* top Section */}
            <div className={`flex py-0 flex-col items-center`}>
                <div className="flex flex-row items-center gap-2">
                    {stat.icon}
                    <h2 className="text-[28px] sm:text-[36px] !mb-0 !text-primary">
                        {stat.value}
                    </h2>
                </div>
                <h1 className="text-xl sm:text-2xl">{stat.label}</h1>
                <div className="mt-4 sm:mt-6">
                    <p
                        className={`text-center text-sm sm:text-base`}
                    >
                        {stat.description.map((line, idx) => (
                            <span key={idx}>
                                {line} <br />{" "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-4 md:gap-8 md:grid-cols-5">
                    {assetsContent.map((content, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer w-full bg-[#ff420011] sm:bg-white sm:p-0 p-2 sm:rounded-none rounded-xl aspect-auto flex flex-col gap-4"
                        >
                            <div className="rounded-xl shadow-xl border border-gray-500 overflow-hidden w-full h-80">
                                <img
                                    src={content.img}
                                    alt={content.title}
                                    title={content.name}
                                    className="group-hover:scale-110 duration-1000 transition-all object-cover object-top w-full h-full"
                                />
                            </div>
                            <h4 className="!text-base !text-center">
                                {content.title}
                            </h4>
                        </div>
                    ))}
                </div>
                <p className="!text-center mt-4 md:mt-6 !text-xl hover:scale-105 duration-300 transition-all hover:!text-primary !font-bold">
                    Put your content where your buyers are
                </p>
            </div>
        </div>
    );
}

export default Assets;
