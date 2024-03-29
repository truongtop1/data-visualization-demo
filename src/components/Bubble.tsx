import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  labels: ["January"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 5, y: 1, r: 3 },
        { x: 10, y: 40, r: 3 },
        { x: 10, y: 20, r: 5 },
        { x: 15, y: 30, r: 10 },
        { x: 20, y: 40, r: 5 },
      ],
    },
  ],
};

const BubbleChart: React.FC = () => {
  return (
    <div>
      <h2>11. Bubble Example</h2>
      <Bubble data={data} width={400} height={200} />
    </div>
  );
};

export default BubbleChart;
