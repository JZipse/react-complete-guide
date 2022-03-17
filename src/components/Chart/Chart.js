import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(item => item.value)
    const max = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxVal={max}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
