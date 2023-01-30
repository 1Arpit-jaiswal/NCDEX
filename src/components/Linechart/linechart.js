import { React, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart = () => {
  const [res, setres] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5000/products?productId=9"
      );
      const data = await response.json();
      setres(data);
    }
    fetchData();
  }, []);

  const data = {
    labels: res?.map((x) => x.time),
    datasets: [
      {
        label: "price",
        data: res?.map((x) => x?.price),
        fill: false,
        borderColor: ["#e76d67"],
        backgroundColor: ["#e76d67"],
        pointRadius: 1,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    //switch chart axis on basis of media screen size
    indexAxis: "x",
    interaction: {
      mode: "index",
      intersect: false,
    },
    responsive: true,

    maintainAspectRation: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },

    legend: {
      labels: {
        fontSize: 26,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div>
      <span> Line Chart</span>
      <Line
        data={data}
        width={800}
        height={300}
        options={options}
        plugins={[
          {
            afterDraw: (chart) => {
              if (chart.tooltip?._active?.length) {
                let x = chart.tooltip._active[0].element.x;
                let yAxis = chart.scales.y;
                let ctx = chart.ctx;
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 7]);
                ctx.moveTo(x, yAxis.top);
                ctx.lineTo(x, yAxis.bottom);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "grey";
                ctx.stroke();
                ctx.restore();
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
