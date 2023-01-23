import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const data = {
  lables: [
    "Jan 23", "", "Jan 24", "", "Jan 25", "", "Jan 26", "", "Jan 27", "", "Jan 28",],
  datasets: [
    {
      data: [8, 7.5, 6, 8, 7, 5, 6],
      backgroundColor: "auqa",
      borderColor: "black",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.2,
    },
  ],
};

export const options = {
  plugins: {
    legend: true,
  },
  scales: {
    x: {
      grid: {
        displey: true,
      },
    },
    y: {
      min: 2,
      max: 10,
      ticks: {
        stepSize: 2,
        callback: (value) => value + "k",
      },
      grid: {
        borderDash: [10],
      },
    },
  },
};

function LineChart() {
  
  return (
    <div style={{ width: "500px", height: "500px", marginLeft: "20px" }}>
  
      <Line data={data} options={options} ></Line>
    </div>
  );
}

export default LineChart;
