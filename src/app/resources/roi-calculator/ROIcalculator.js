"use client";
import { CreditCardIcon, DollarSign, PercentCircle } from "lucide-react";
import React, { useState, useMemo } from "react";

function ROIcalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(0);
  const [leadToSql, setLeadToSql] = useState(0);
  const [sqlToClose, setSqlToClose] = useState(0);
  const [acv, setAcv] = useState(0);
  const [yearlyInvestment, setYearlyInvestment] = useState(0);
  const [cpl, setCpl] = useState(0);

  const safeNum = (v) => (isFinite(Number(v)) ? Number(v) : 0);
  const currency = (n) =>
    n.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  const annualCustomers =
    monthlyLeads * (leadToSql / 100) * (sqlToClose / 100) * 12;
  const annualRevenue = annualCustomers * acv;
  const netProfit = annualRevenue - yearlyInvestment;
  const roi =
    yearlyInvestment === 0
      ? netProfit > 0
        ? Infinity
        : 0
      : (netProfit / yearlyInvestment) * 100;

  const monthlyContribution =
    monthlyLeads * (leadToSql / 100) * (sqlToClose / 100) * acv;
  const paybackMonths =
    monthlyContribution <= 0
      ? Infinity
      : yearlyInvestment / monthlyContribution;

  const cplCostAnnual = cpl > 0 ? cpl * monthlyLeads * 12 : 0;

  return (
    <div className="p-12">
      <div className="container mx-auto bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-full p-6">
            <h1 className="text-center">
              Bissbay ROI<span className="text-primary"> Calculator</span>
            </h1>
          </div>
          <h4 className="text-center my-6">
            Discover how much income and ROI you could achieve with Bissbay?
            <br /> Use our calculator to see the real results we can drive for
            your business.
          </h4>
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Card */}
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-sm text-gray-500 mb-6">
                Estimate yearly revenue, net profit, ROI and payback period from
                BISSBAY leads.
              </p>

              <div className="space-y-4">
                <InputWithSlider
                  label="Monthly leads"
                  value={monthlyLeads}
                  onChange={setMonthlyLeads}
                  min={0}
                  max={1000}
                  step={10}
                />

                <InputWithSlider
                  label="Lead to Qualified (SQL) %"
                  value={leadToSql}
                  onChange={setLeadToSql}
                  min={0}
                  max={100}
                  step={5}
                />

                <InputWithSlider
                  label="Qualified to Closed (Win Rate) %"
                  value={sqlToClose}
                  onChange={setSqlToClose}
                  min={0}
                  max={100}
                  step={5}
                />

                <InputWithSlider
                  label="Average Contract Value (ACV) $"
                  value={acv}
                  onChange={setAcv}
                  min={0}
                  max={100000}
                  step={1000}
                />

                <InputWithSlider
                  label="Yearly investment with BISSBAY $"
                  value={yearlyInvestment}
                  onChange={setYearlyInvestment}
                  min={0}
                  max={500000}
                  step={5000}
                />

                <InputWithSlider
                  label="Cost per lead (optional) $"
                  value={cpl}
                  onChange={setCpl}
                  min={0}
                  max={500}
                  step={5}
                />
                <p className="text-xs text-gray-400 mt-1">
                  If provided, CPL × monthly leads × 12 will be shown as an
                  alternative cost.
                </p>
              </div>
            </div>

            {/* Results Card */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h1 className="text-xl font-semibold mb-4">Results</h1>

              <div className="space-y-4">
                <ResultTile
                  label="Estimated annual customers from BISSBAY leads"
                  value={Math.round(annualCustomers)}
                />

                <ResultTile
                  label="Estimated annual revenue from those customers"
                  value={currency(annualRevenue)}
                />

                <ResultTile
                  label="Net profit (Revenue minus investment)"
                  value={currency(netProfit)}
                />

                <ResultTile
                  label="Return on investment (ROI)"
                  value={roi === Infinity ? "∞" : `${Math.round(roi)}%`}
                />

                <ResultTile
                  label="Payback period (months) — how long to recover the investment"
                  value={
                    paybackMonths === Infinity
                      ? "—"
                      : `${Math.round(paybackMonths * 10) / 10} months`
                  }
                />

                <ResultTile
                  label="Alternative investment from CPL (if CPL provided)"
                  value={cplCostAnnual ? currency(cplCostAnnual) : "—"}
                />
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Tip: Adjust conversion rates to model different lead quality or sales
                process improvements.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center p-6">
          <div className="flex flex-col items-center justify-center gap-12">
            <div  >
              <h5 className="mb-2 !font-bold">How it Works</h5>
              <p className="!font-semibold !max-w-2xl">
                Our ROI calculator helps you estimate the potential return on
                investment from partnering with Bissbay. It considers multiple
                factors including your industry, target businesses, monthly
                B2B lead volume, average deal size, and close ratio.
              </p>
            </div>
          </div>
          <div className="flex border-1 bg-white border-gray-200 w-lg rounded-2xl flex-col items-center justify-center">
            <div className="flex px-16 py-8 items-center justify-center gap-2">
              <PercentCircle className="medium-icon" />
              <h4 className="!text-primary">Return on Investment (ROI)</h4>
            </div>
            <div className="flex w-full px-16 py-8 items-center justify-evenly ">
              <div className="flex flex-col items-center">
                <div className="flex py-2 items-center gap-2">
                  <DollarSign className="small-icon" />
                  <p className="!font-semibold">Net Profit</p>
                </div>
                <div className="flex border-t-1 border-gray-300 py-2 items-center gap-2">
                  <CreditCardIcon className="small-icon" />
                  <p className="!font-semibold">Cost of Investment</p>
                </div>
              </div>
              <div className="flex p-5 border-gray-200 border rounded-lg bg-white items-center justify-center">
                <p className="!font-semibold">x 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWithSlider({ label, value, onChange, min, max, step }) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <div className="flex items-center gap-3 mt-1">
        <input
          type="range"
          value={value}
          onChange={(e) => onChange(safeNum(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #ff4200 0%, #ff4200 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
        />
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(safeNum(e.target.value))}
          className="w-24 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          min={min}
          max={max}
          step={step}
        />
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff4200;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff4200;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}

function ResultTile({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}

const safeNum = (v) => (isFinite(Number(v)) ? Number(v) : 0);

export default ROIcalculator;