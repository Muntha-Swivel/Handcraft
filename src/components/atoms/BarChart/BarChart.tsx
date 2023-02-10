import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { IBarChart } from "./BarChart.interface";

const BarChart = ({ data }: IBarChart) => {
  const dataSet = {
    labels: data.map((data) => data.title),
    datasets: [
      {
        label: "Item Sales",
        data: data.map((data) => data.sold),
        backgroundColor: "#b58479",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return <Bar data={dataSet} />;
};

export { BarChart };
