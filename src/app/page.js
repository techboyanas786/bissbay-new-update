"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState, lazy, Suspense } from "react";
import AnimatedContent from "@/components/scrollAnimate";
import Image from "next/image";
import HeroSection from "@/Home-Page/HeroSection";

gsap.registerPlugin(ScrollTrigger);

const CardSection = lazy(() => import("../Home-Page/CardSection"));
const MapSection = lazy(() => import("../Home-Page/MapSection"));
const VerticalAccordion = lazy(() => import("../Home-Page/whoWeHelp"));
const SolutionSection1 = lazy(() => import("../Home-Page/solutionSection1"));
const SolutionSection2 = lazy(() => import("../Home-Page/solutionSection2"));
const PipelineFunnel = lazy(() => import("../Home-Page/PipelineFunnel"));

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [overlayAnimating, setOverlayAnimating] = useState(false);
  const [overlayComplete, setOverlayComplete] = useState(false);

  useEffect(() => {
    // Force scroll to top immediately on mount
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    const handleLoad = () => {
      const animationTimer = setTimeout(() => {
        setOverlayAnimating(true);
      }, 1000);

      const overlayTimer = setTimeout(() => {
        setShowOverlay(false);
        setOverlayComplete(true);
      }, 2000);

      return () => {
        clearTimeout(animationTimer);
        clearTimeout(overlayTimer);
      };
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <main className="flex flex-col items-center overflow-hidden">
      {showOverlay && (
        <div
          className={`fixed inset-0 z-[9999] pointer-events-auto preloader !flex !items-center !justify-center ${
            overlayAnimating ? "animate-slide-up" : ""
          }`}
          style={{ background: "var(--color-primary)", display: "block" }}
        >

          <Image src="/white-bissbay-logo.svg" width={410} height={120} alt="Bissbay Logo" className="w-[287px] h-[84px] sm:w-[410px] sm:h-[120px]" />

          <div
            className="faster-div"
            style={{
              transform: overlayAnimating
                ? "translate3d(0px, 0px, 0px)"
                : "translate3d(0px, -100vh, 0px)",
              transition:
                "transform 0.7s cubic-bezier(0.77,0,0.175,1)",
            }}
          >
          </div>
          <div
            className="slower-div"
            style={{
              transform: overlayAnimating
                ? "translate3d(0px, 0px, 0px)"
                : "translate3d(0px, -100vh, 0px)",
              transition:
                "transform 1.2s cubic-bezier(0.77,0,0.175,1)",
            }}
          ></div>
        </div>
      )}

      <div className="mt-[90px] px-4 md:px-2 container mx-auto">
        <HeroSection overlayComplete={overlayComplete} />
      </div>

      <div className="px-4 md:px-2 container mx-auto pb-4 md:pb-6">
        {overlayComplete && (
          <Suspense fallback={<p className="text-center py-10 !container mx-auto">Loading content...</p>}>
            <section className="flex flex-col gap-4 md:gap-12">
              <CardSection />
              <span className="bg-primary h-1 w-full"></span>
              <MapSection />
              <span className="bg-primary h-1 w-full"></span>
              <VerticalAccordion />
              <span className="bg-primary h-1 w-full"></span>
              <SolutionSection1 />
              <SolutionSection2 />
              <span className="bg-primary h-1 w-full"></span>
              <PipelineFunnel />
            </section>
          </Suspense>
        )}
      </div>
    </main>
  );
}
