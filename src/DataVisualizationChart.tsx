// DataVisualizationChart.tsx

import React from "react";
import { Bar } from "react-chartjs-2";

interface DataVisualizationChartProps {
  data: number[];
  labels: string[];
}

const DataVisualizationChart: React.FC<DataVisualizationChartProps> = ({
  data,
  labels,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Data Visualization",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: data,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default DataVisualizationChart;
