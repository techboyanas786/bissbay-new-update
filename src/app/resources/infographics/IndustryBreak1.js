"use client";
import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function IndustryBreak1() {
  useLayoutEffect(() => {
    // Create root
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    );

    // Add cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // X Axis
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: false,
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fontFamily:"Quicksand"
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    // Y Axis
    let yRenderer = am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

    // Series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "country",
        sequencedInterpolation: true,
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });

    series.columns.template.adapters.add("fill", (fill, target) =>
      chart.get("colors").getIndex(series.columns.indexOf(target))
    );
    series.columns.template.adapters.add("stroke", (stroke, target) =>
      chart.get("colors").getIndex(series.columns.indexOf(target))
    );

    // ✅ Industry data
    let data = [
      { country: "Information Technology", value: 30560000 },
      { country: "BFSI", value: 20360000 },
      { country: "Healthcare & Life Sciences", value: 12200000 },
      { country: " Industrial & Manufacturing", value: 10150000 },
      { country: "Consumer Goods & Retail", value: 8160000 },
      { country: "Hospitality & Travel", value: 7120000 },
      { country: "Media & Marketing", value: 6120000 },
      { country: "Energy & Utilities", value: 5080000 },
      { country: "Government & Public Sector", value: 4080000 },
      { country: "Professional Services", value: 3040000 },
      { country: "Transportation & Logistics", value: 2540000 },
      { country: "Construction & Engineering", value: 2040000 },
      { country: "Agriculture & Environmental", value: 1540000 },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Animations
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose(); // Cleanup on unmount
    };
  }, []);

  return (
      <section>
        <div className="text-center">
          <h2 className="section-title !mb-0">Industry Distribution</h2>
          <h3 className="text-center my-4 md:my-6">
            Technology and finance sectors lead our audience composition with
            strong representation across diverse industries.
          </h3>
        </div>
        {/* Chart container */}
        <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>
      </section>
  );
}

export default IndustryBreak1;
