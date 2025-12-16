"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";
import CarouselSwiper from "./CarouselSwiper";

export function WorldMap({
    dots = [],
    lineColor = "#ff4200",
    carouselPosition = "bottom-20 left-6"
}) {
    const svgRef = useRef(null);
    const map = new DottedMap({ height: 100, grid: "diagonal" });

    const { theme } = useTheme();

    const svgMap = map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
    });

    const projectPoint = (lat, lng) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (
        start,
        end
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="hidden md:block w-full rounded-xl relative">
                <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                    className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none"
                    alt="world map"
                    height="495"
                    width="1056"
                    draggable={false} />
                <div className={`absolute ${carouselPosition}`}>
                    <div style={{position: 'relative' }}>
                        <CarouselSwiper
                            baseWidth={300}
                            autoplay={true}
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                        />
                    </div>
                </div>
                <svg
                    ref={svgRef}
                    viewBox="0 0 800 400"
                    className="w-full h-full absolute inset-0 pointer-events-none">
                    {dots.map((dot, i) => {
                        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                        return (
                            <g key={`path-group-${i}`}>
                                <motion.path
                                    d={createCurvedPath(startPoint, endPoint)}
                                    fill="none"
                                    stroke="url(#path-gradient)"
                                    strokeWidth="1"
                                    initial={{
                                        pathLength: 0,
                                    }}
                                    animate={{
                                        pathLength: 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5 * i,
                                        ease: "easeOut",
                                    }}
                                    key={`start-upper-${i}`}></motion.path>
                            </g>
                        );
                    })}

                    <defs>
                        <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="white" stopOpacity="0" />
                            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {dots.map((dot, i) => (
                        <g key={`points-group-${i}`}>
                            <g key={`start-${i}`}>
                                <circle
                                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                    r="2"
                                    fill={lineColor} />
                                <circle
                                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                    r="2"
                                    fill={lineColor}
                                    opacity="0.5">
                                    <animate
                                        attributeName="r"
                                        from="2"
                                        to="8"
                                        dur="1.5s"
                                        begin="0s"
                                        repeatCount="indefinite" />
                                    <animate
                                        attributeName="opacity"
                                        from="0.5"
                                        to="0"
                                        dur="1.5s"
                                        begin="0s"
                                        repeatCount="indefinite" />
                                </circle>
                                {dot.start.label && (
                                    <text
                                        x={projectPoint(dot.start.lat, dot.start.lng).x - 10}
                                        y={projectPoint(dot.start.lat, dot.start.lng).y + 15}
                                        fill={theme === "dark" ? "#fff" : "#000"}
                                        fontSize="8"
                                        fontWeight="bold"
                                    >
                                        {dot.start.label}
                                    </text>
                                )}
                            </g>
                            <g key={`end-${i}`}>
                                <circle
                                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                    r="2"
                                    fill={lineColor} />
                                <circle
                                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                    r="2"
                                    fill={lineColor}
                                    opacity="0.5">
                                    <animate
                                        attributeName="r"
                                        from="2"
                                        to="8"
                                        dur="1.5s"
                                        begin="0s"
                                        repeatCount="indefinite" />
                                    <animate
                                        attributeName="opacity"
                                        from="0.5"
                                        to="0"
                                        dur="1.5s"
                                        begin="0s"
                                        repeatCount="indefinite" />
                                </circle>
                                {dot.end.label && (
                                    <text
                                        x={projectPoint(dot.end.lat, dot.end.lng).x - 10}
                                        y={projectPoint(dot.end.lat, dot.end.lng).y + 15}
                                        fill={theme === "dark" ? "#fff" : "#000"}
                                        fontSize="8"
                                        fontWeight="bold"
                                    >
                                        {dot.end.label}
                                    </text>
                                )}
                            </g>
                        </g>
                    ))}
                </svg>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden w-full mt-8 overflow-x-hidden">
                <div className="w-full rounded-xl relative mb-6 scale-125">
                    <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none"
                        alt="world map"
                        height="495"
                        width="1056"
                        draggable={false} />
                    <svg
                        viewBox="0 0 800 400"
                        className="w-full h-full absolute inset-0 pointer-events-none"
                        preserveAspectRatio="xMidYMid meet">
                        {dots.map((dot, i) => {
                            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                            return (
                                <g key={`mobile-path-group-${i}`}>
                                    <motion.path
                                        d={createCurvedPath(startPoint, endPoint)}
                                        fill="none"
                                        stroke="url(#path-gradient-mobile)"
                                        strokeWidth="1"
                                        initial={{
                                            pathLength: 0,
                                        }}
                                        animate={{
                                            pathLength: 1,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.5 * i,
                                            ease: "easeOut",
                                        }}></motion.path>
                                </g>
                            );
                        })}

                        <defs>
                            <linearGradient id="path-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="white" stopOpacity="0" />
                                <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                                <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {dots.map((dot, i) => (
                            <g key={`mobile-points-group-${i}`}>
                                <g key={`mobile-start-${i}`}>
                                    <circle
                                        cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                        cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                        r="2"
                                        fill={lineColor} />
                                    <circle
                                        cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                        cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                        r="2"
                                        fill={lineColor}
                                        opacity="0.5">
                                        <animate
                                            attributeName="r"
                                            from="2"
                                            to="8"
                                            dur="1.5s"
                                            begin="0s"
                                            repeatCount="indefinite" />
                                        <animate
                                            attributeName="opacity"
                                            from="0.5"
                                            to="0"
                                            dur="1.5s"
                                            begin="0s"
                                            repeatCount="indefinite" />
                                    </circle>
                                    {dot.start.label && (
                                        <text
                                            x={projectPoint(dot.start.lat, dot.start.lng).x - 20}
                                            y={projectPoint(dot.start.lat, dot.start.lng).y + 15}
                                            fill={theme === "dark" ? "#fff" : "#000"}
                                            fontSize="20"
                                            fontWeight="bold"
                                        >
                                            {dot.start.label}
                                        </text>
                                    )}
                                </g>
                                <g key={`mobile-end-${i}`}>
                                    <circle
                                        cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                        cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                        r="2"
                                        fill={lineColor} />
                                    <circle
                                        cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                        cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                        r="2"
                                        fill={lineColor}
                                        opacity="0.5">
                                        <animate
                                            attributeName="r"
                                            from="2"
                                            to="8"
                                            dur="1.5s"
                                            begin="0s"
                                            repeatCount="indefinite" />
                                        <animate
                                            attributeName="opacity"
                                            from="0.5"
                                            to="0"
                                            dur="1.5s"
                                            begin="0s"
                                            repeatCount="indefinite" />
                                    </circle>
                                    {dot.end.label && (
                                        <text
                                            x={projectPoint(dot.end.lat, dot.end.lng).x - 20}
                                            y={projectPoint(dot.end.lat, dot.end.lng).y + 15}
                                            fill={theme === "dark" ? "#fff" : "#000"}
                                            fontSize="20"
                                            fontWeight="bold"
                                        >
                                            {dot.end.label}
                                        </text>
                                    )}
                                </g>
                            </g>
                        ))}
                    </svg>
                </div>
                <div className="w-full">
                    <CarouselSwiper
                        baseWidth={300}
                        autoplay={true}
                        autoplayDelay={3000}
                        loop={true}
                        round={false}
                        isMobile={true}
                    />
                </div>
            </div>
        </>
    );
}
