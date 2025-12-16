"use client";
import dynamic from "next/dynamic";

const GeoChart = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export default function GeoChartClient() {
  return <GeoChart />;
}