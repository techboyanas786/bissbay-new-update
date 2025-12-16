"use client";
import React, { useMemo, useState } from "react";
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Info } from "lucide-react";
import MultiSelectField from "../request-proposal/MultiSelectField";

// ---------- helpers ----------
const CURRENCIES = [
  { code: "USD", label: "United States Dollar" },
  { code: "EUR", label: "Euro" },
  { code: "INR", label: "Indian Rupee" },
  { code: "GBP", label: "British Pound" },
  { code: "AUD", label: "Australian Dollar" },
];

function formatCurrency(n, code) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: code,
      maximumFractionDigits: 0,
    }).format(isFinite(n) ? n : 0);
  } catch (e) {
    return new Intl.NumberFormat().format(Math.round(n));
  }
}

function formatMMDDYYYY(d) {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function diffDays(a, b) {
  const MS = 1000 * 60 * 60 * 24;
  return Math.floor((b.getTime() - a.getTime()) / MS);
}

// ---------- main component ----------
export default function LeadCalculator({ sharedEndDate, setSharedEndDate, sharedConversionMetrics, setSharedConversionMetrics }) {
  // inputs (defaults from shared metrics or fallbacks)
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]); // Current date
  const [endDate, setEndDate] = useState(sharedEndDate || "2026-01-09");
  const [currency, setCurrency] = useState("United States Dollar");
  const [revenueGoal, setRevenueGoal] = useState(1_000_000);
  const [avgDealSize, setAvgDealSize] = useState(sharedConversionMetrics?.avgDealSize || 10_000);
  const [ntdToMql, setNtdToMql] = useState(sharedConversionMetrics?.ntdToMql || 75); // %
  const [mqlToClosed, setMqlToClosed] = useState(sharedConversionMetrics?.mqlToClosed || 10); // %
  const [avgDaysToConvert, setAvgDaysToConvert] = useState(sharedConversionMetrics?.avgDaysToConvert || 30);
  const [avgDaysToClose, setAvgDaysToClose] = useState(sharedConversionMetrics?.avgDaysToClose || 30);
  const [info1, showInfo1] = useState(false);
  const [info2, showInfo2] = useState(false);
  const [info3, showInfo3] = useState(false);
  const [info4, showInfo4] = useState(false);
  const [info5, showInfo5] = useState(false);
  const [info6, showInfo6] = useState(false);
  const [info7, showInfo7] = useState(false);
  const [info8, showInfo8] = useState(false);
  const [info9, showInfo9] = useState(false);
  const [info10, showInfo10] = useState(false);
  const [info11, showInfo11] = useState(false);
  const [info12, showInfo12] = useState(false);
  const [info13, showInfo13] = useState(false);
  const [info14, showInfo14] = useState(false);

  // Sync local endDate with shared prop
  React.useEffect(() => {
    if (sharedEndDate && sharedEndDate !== endDate) {
      setEndDate(sharedEndDate);
    }
  }, [sharedEndDate]);

  // Sync local metrics with shared metrics only on initial load
  React.useEffect(() => {
    if (sharedConversionMetrics && !avgDealSize && !ntdToMql && !mqlToClosed) {
      setAvgDealSize(sharedConversionMetrics.avgDealSize || 10000);
      setNtdToMql(sharedConversionMetrics.ntdToMql || 75);
      setMqlToClosed(sharedConversionMetrics.mqlToClosed || 10);
      setAvgDaysToConvert(sharedConversionMetrics.avgDaysToConvert || 30);
      setAvgDaysToClose(sharedConversionMetrics.avgDaysToClose || 30);
    }
  }, []); // Empty dependency array - only run once on mount
  
  // Function to update shared metrics when local values change
  const updateSharedMetrics = (key, value) => {
    if (setSharedConversionMetrics) {
      setSharedConversionMetrics(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  // derived values using comprehensive forecasting logic
  const {
    totalDays,
    bufferDays,
    effectiveDays,
    dealsNeeded,
    mqlsNeeded,
    leadsNeeded,
    leadsPerDayRounded,
    lastLeadDate,
    chartData,
    leadValue,
    overallConversionRate,
  } = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const total = diffDays(start, end);
    
    // Step 1: Calculate needed closed deals
    const deals = Math.ceil(revenueGoal / (avgDealSize || 1));
    
    // Step 2: Work backward through conversion rates
    // Convert percentages to decimals for calculations
    const mqlToClosedRate = (mqlToClosed / 100) || 0.01;
    const ntdToMqlRate = (ntdToMql / 100) || 0.01;
    
    // Calculate MQLs needed
    const mqls = Math.ceil(deals / mqlToClosedRate);
    
    // Calculate total leads (NTD) needed
    const leads = Math.ceil(mqls / ntdToMqlRate);
    
    // Step 3: Define timeline with intelligent planning
    const buffer = avgDaysToConvert + avgDaysToClose;
    const effective = Math.max(total - buffer, 0);
    
    // Last day to generate leads (revenue deadline minus conversion cycles)
    const lastLeadDate = new Date(end);
    lastLeadDate.setDate(lastLeadDate.getDate() - buffer);
    
    // Step 4: Calculate daily lead generation rate
    const leadsPerDay = effective > 0 ? leads / effective : 0;
    const leadsPerDayRounded = Math.max(Math.round(leadsPerDay), 0);
    
    // Step 5: Calculate lead value and overall conversion
    const overallConversion = ntdToMqlRate * mqlToClosedRate;
    const leadValue = avgDealSize * overallConversion;

    // Step 6: Build monthly chart data with intelligent distribution
    const months = [];
    let cursor = new Date(start);
    let leadsRemaining = leads;
    let revenueCum = 0;

    while (cursor <= end) {
      const mStart = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
      const mEnd = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
      
      // Account for lead generation cutoff date
      const monthEndForLeads = new Date(Math.min(mEnd.getTime(), lastLeadDate.getTime()));
      const monthStartForLeads = new Date(Math.max(mStart.getTime(), start.getTime()));
      
      let daysInMonth = 0;
      if (monthEndForLeads >= monthStartForLeads) {
        daysInMonth = diffDays(monthStartForLeads, monthEndForLeads) + 1;
      }
      
      // Calculate leads for this month (only during active generation period)
      const leadsThisMonth = Math.min(
        leadsRemaining,
        Math.max(0, leadsPerDayRounded * daysInMonth)
      );
      leadsRemaining -= leadsThisMonth;
      
      // Revenue accumulates based on lead value (comprehensive conversion)
      revenueCum += leadsThisMonth * leadValue;
      
      months.push({
        name: `${mStart.toLocaleString("default", {
          month: "short",
        })} '${String(mStart.getFullYear()).slice(-2)}`,
        leads: leadsThisMonth,
        revenue: revenueCum,
        leadValue: leadValue,
        conversionRate: overallConversion * 100
      });
      cursor.setMonth(cursor.getMonth() + 1);
    }

    return {
      totalDays: total,
      bufferDays: buffer,
      effectiveDays: effective,
      dealsNeeded: deals,
      mqlsNeeded: mqls,
      leadsNeeded: leads,
      leadsPerDayRounded,
      leadsPerDay,
      lastLeadDate,
      chartData: months,
      leadValue,
      overallConversionRate: overallConversion,
    };
  }, [
    startDate,
    endDate,
    currency,
    revenueGoal,
    avgDealSize,
    ntdToMql,
    mqlToClosed,
    avgDaysToConvert,
    avgDaysToClose,
  ]);

  return (
    <div className="pt-[115px] px-12 pb-12">
      <div className="container mx-auto ">
        <div className="max-w-4xl flex flex-col items-start">
          <div className="p-2 mb-6 rounded-lg bg-primary">
            <h5 className="!text-white">Pipeline Projection Calculator</h5>
          </div>
          <h1  >Stop relying on guesswork.</h1>
          <h4 className="my-6">
            The Pipeline Projection Calculator gives you an accurate,
            data-driven forecast of exactly
            <br /> how many leads you’ll need to consistently achieve your
            revenue targets with confidence.
            <br /> Try it today and plan your growth with certainty.
          </h4>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT PANEL (Inputs) */}
          <div
            className="flex flex-col gap-6 items-start p-4 sm:p-6 rounded-xl bg-white shadow-xl w-full md:w-1/3"
            style={{ maxWidth: "100%" }}
          >
            <h5 className="!font-bold text-center pt-2.5 pb-5">
              Pipeline Projection Calculator
            </h5>
            <div className="flex flex-row gap-4 w-full">
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  First Day for Leads
                  <Info
                    onMouseEnter={() => showInfo1(true)}
                    onMouseLeave={() => showInfo1(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute px-2 opacity-100 py-1 mb-16 bg-gray-200 !text-sm rounded-lg ${
                      info1 ? "visible" : "hidden"
                    }`}
                  >
                    Select the date you want to start generating leads.
                  </p>
                </div>
                <input
                  type="date"
                  value={startDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  Last Day for Revenue
                  <Info
                    onMouseEnter={() => showInfo2(true)}
                    onMouseLeave={() => showInfo2(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute max-w-[16rem] px-2 py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal
    ${info2 ? "block" : "hidden"}`}
                  >
                    Set the final date by which you expect to achieve your
                    revenue goal.
                  </p>
                </div>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    if (setSharedEndDate) {
                      setSharedEndDate(e.target.value);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="font-semibold text-sm">
                Currency
                <MultiSelectField
                  name={"currency"}
                  className="mt-2 w-full"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  options={CURRENCIES.map((c) => c.label)}
                  isMulti={false}
                  disabled={false}
                />
              </label>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  Revenue Goal
                  <Info
                    onMouseEnter={() => showInfo3(true)}
                    onMouseLeave={() => showInfo3(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute max-w-[17rem] px-2 py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal
    ${info3 ? "block" : "hidden"}`}
                  >
                    Enter the total revenue target you aim to achieve over the
                    specified period.
                  </p>
                </div>
                <input
                  type="number"
                  value={revenueGoal}
                  min="0"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    if (value === '' || parseInt(value) >= 0) {
                      setRevenueGoal(Number(value) || 0);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  Avg Deal Size
                  <Info
                    onMouseEnter={() => showInfo4(true)}
                    onMouseLeave={() => showInfo4(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute max-w-[16rem] px-2 py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal
    ${info4 ? "block" : "hidden"}`}
                  >
                    Input the average revenue generated per closed deal.
                  </p>
                </div>
                <input
                  type="number"
                  value={avgDealSize}
                  min="0"
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, '');
                    if (numericValue === '' || parseInt(numericValue) >= 0) {
                      const value = Number(numericValue) || 0;
                      setAvgDealSize(value);
                      updateSharedMetrics('avgDealSize', value);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  NTD → MQL %
                  <Info
                    onMouseEnter={() => showInfo5(true)}
                    onMouseLeave={() => showInfo5(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute px-2 max-w-[24rem] py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md  text-center leading-tight z-50 whitespace-normal
    ${info5 ? "block" : "hidden"}`}
                  >
                    Specify the percentage of New to Demand (NTD) leads that
                    convert to Marketing Qualified Leads (MQL).
                  </p>
                </div>
                <input
                  type="number"
                  value={ntdToMql}
                  min="0"
                  max="100"
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, '');
                    if (numericValue === '' || (parseInt(numericValue) >= 0 && parseInt(numericValue) <= 100)) {
                      const value = Number(numericValue) || 0;
                      setNtdToMql(value);
                      updateSharedMetrics('ntdToMql', value);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  MQL → Closed %
                  <Info
                    onMouseEnter={() => showInfo6(true)}
                    onMouseLeave={() => showInfo6(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute px-2 max-w-[16rem] py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md  text-center leading-tight z-50 whitespace-normal
    ${info6 ? "block" : "hidden"}`}
                  >
                    Indicate the percentage of MQLs that successfully close as
                    won deals.
                  </p>
                </div>
                <input
                  type="number"
                  value={mqlToClosed}
                  min="0"
                  max="100"
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, '');
                    if (numericValue === '' || (parseInt(numericValue) >= 0 && parseInt(numericValue) <= 100)) {
                      const value = Number(numericValue) || 0;
                      setMqlToClosed(value);
                      updateSharedMetrics('mqlToClosed', value);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  Avg Days to Convert Lead
                  <Info
                    onMouseEnter={() => showInfo7(true)}
                    onMouseLeave={() => showInfo7(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute max-w-[16rem] px-2 py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md  text-center leading-tight z-50 whitespace-normal
    ${info7 ? "block" : "hidden"}`}
                  >
                    Enter the average number of days it takes to convert a lead
                    into an MQL.
                  </p>
                </div>
                <input
                  type="number"
                  value={avgDaysToConvert}
                  min="0"
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, '');
                    if (numericValue === '' || parseInt(numericValue) >= 0) {
                      setAvgDaysToConvert(Number(numericValue) || 0);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block font-semibold text-sm w-1/2">
                <div className="flex items-center justify-between">
                  Avg Days to Close Deal
                  <Info
                    onMouseEnter={() => showInfo8(true)}
                    onMouseLeave={() => showInfo8(false)}
                    className="small-icon"
                  />
                  <p
                    className={`absolute max-w-[20rem] px-2 py-1 mb-16 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal
    ${info8 ? "block" : "hidden"}`}
                  >
                    Input the average number of days required to close a deal
                    after it becomes an MQL.
                  </p>
                </div>
                <input
                  type="number"
                  value={avgDaysToClose}
                  min="0"
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, '');
                    if (numericValue === '' || parseInt(numericValue) >= 0) {
                      setAvgDaysToClose(Number(numericValue) || 0);
                    }
                  }}
                  className="w-full border mt-2 border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                />
              </label>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 space-y-6">
            {/* CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="flex text-center flex-col rounded-lg justify-evenly p-4 items-center shadow-xl relative">
                <Info
                  onMouseEnter={() => showInfo9(true)}
                  onMouseLeave={() => showInfo9(false)}
                  className="small-icon self-end"
                />
                <h5 className="!font-bold">{leadsNeeded}</h5>
                <p  >NTD Leads</p>
                <p
                  className={`absolute  px-2 py-1 -top-25 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal ${
                    info9 ? "block" : "hidden"
                  }`}
                >
                  Total New to Database (NTD) leads required using reverse-engineering from your revenue goal through conversion rates.
                </p>
              </div>
              <div className="flex text-center flex-col rounded-lg justify-evenly p-4 items-center shadow-xl relative">
                <Info
                  onMouseEnter={() => showInfo14(true)}
                  onMouseLeave={() => showInfo14(false)}
                  className="small-icon self-end"
                />
                <h5 className="!font-bold">{mqlsNeeded}</h5>
                <p>MQLs</p>
                <p
                  className={`absolute  px-2 py-1 -top-25 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal ${
                    info14 ? "block" : "hidden"
                  }`}
                >
                  Marketing Qualified Leads needed, calculated by dividing deals needed by MQL to Closed Won conversion rate.
                </p>
              </div>
              <div className="flex text-center flex-col rounded-lg justify-evenly p-4 items-center shadow-xl relative">
                <Info
                  onMouseEnter={() => showInfo10(true)}
                  onMouseLeave={() => showInfo10(false)}
                  className="small-icon self-end"
                />
                <h5 className="!font-bold">{dealsNeeded}</h5>
                <p>Won Deals</p>
                <p
                  className={`absolute  px-2 py-1 -top-25 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal ${
                    info10 ? "block" : "hidden"
                  }`}
                >
                  Number of Won Deals calculated by dividing revenue goal by average deal size.
                </p>
              </div>
              <div className="flex text-center flex-col rounded-lg justify-evenly p-4 items-center shadow-xl relative">
                <Info
                  onMouseEnter={() => showInfo11(true)}
                  onMouseLeave={() => showInfo11(false)}
                  className="small-icon self-end"
                />
                <h5 className="!font-bold">{leadsPerDayRounded}</h5>
                <p>Avg Leads/Day</p>
                <p
                  className={`absolute  px-2 py-1 -top-25 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal ${
                    info11 ? "block" : "hidden"
                  }`}
                >
                  Average leads per day is calculated by the total Leads divided
                  by the total days between the Start and End Dates.
                </p>
              </div>
              <div className="flex text-center flex-col rounded-lg justify-evenly p-4 items-center shadow-xl relative">
                <Info
                  onMouseEnter={() => showInfo12(true)}
                  onMouseLeave={() => showInfo12(false)}
                  className="small-icon self-end"
                />
                <h5 className="!font-bold">
                  {effectiveDays}{" "}
                  <span className="!text-xs !font-normal">Days to</span>
                </h5>
                <p>Generate Leads</p>
                <p
                  className={`absolute  px-2 py-1 -top-40 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal ${
                    info12 ? "block" : "hidden"
                  }`}
                >
                  Days to generate leads is defined by your End Date minus your
                  Avg Days to Convert Lead and Avg Days to Close Deal. Your
                  Start Date to that date produces the total days to generate
                  leads.{" "}
                </p>
              </div>
              <div className="flex text-center flex-col rounded-lg justify-evenly p-4 items-center shadow-xl relative">
                <Info
                  onMouseEnter={() => showInfo13(true)}
                  onMouseLeave={() => showInfo13(false)}
                  className="small-icon self-end"
                />
                <h5 className="!font-bold">
                  {lastLeadDate.toLocaleDateString()}
                </h5>
                <p>Last Day</p>
                <p
                  className={`absolute  px-2 py-1 -top-28 bg-gray-200 !text-sm rounded-lg shadow-md text-center leading-tight z-50 whitespace-normal ${
                    info13 ? "block" : "hidden"
                  }`}
                >
                  Last day to generate leads is calculated by the End Date minus
                  the Avg Days to Close Deal and Avg Days to Convert Lead.
                </p>
              </div>
            </div>

            {/* CHART */}
            <div className="rounded-2xl bg-white/95 border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-5">
              <ResponsiveContainer width="100%" height={420}>
                <ComposedChart
                  data={chartData}
                  margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-30}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(v) => formatCurrency(v, currency)}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value, name) =>
                      name.toLowerCase().includes("revenue")
                        ? [formatCurrency(Number(value), currency), "Revenue"]
                        : [Number(value).toLocaleString(), "Leads per Month"]
                    }
                  />
                  <Legend wrapperStyle={{ paddingTop: 10 }} />
                  <defs>
                    <linearGradient
                      id="leadsGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ff4200" stopOpacity={1} />
                      <stop
                        offset="100%"
                        stopColor="#DFE648"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                  <Bar
                    yAxisId="left"
                    dataKey="leads"
                    name="Leads per Month"
                    fill="url(#leadsGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Area
                    yAxisId="right"
                    dataKey="revenue"
                    name="Revenue"
                    type="monotone"
                    stroke="#72BF45"
                    fill="#72BF45"
                    fillOpacity={0.35}
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
