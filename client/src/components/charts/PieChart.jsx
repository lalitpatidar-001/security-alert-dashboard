import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useCalculateCategorySeverity } from '../../data-processing/getClaculateCategorySeverity';
import { useTopTrafficOrigins } from '../../data-processing/getTopTrafficOrigins';
import { getTop10AffectedPorts } from '../../data-processing/getTop10AffectedPorts';
import { getSeverityByTime } from '../../data-processing/getSeverityByTime';

const PieChart = ({ chartData }) => {
    const result = getSeverityByTime();
    console.log("result",result)
  const data = {
    labels: chartData.label,
    datasets: [
      {
        label: 'My Dataset',
        data: chartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-full ">
      <Pie className="cursor-pointer"  data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default PieChart;
