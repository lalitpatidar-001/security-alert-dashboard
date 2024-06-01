import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';

const PolarAreaChart = ({ chartData }) => {

    const data = {
        labels: chartData.label,
        datasets: [
            {
                label: 'Average Severity',
                data: chartData.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)',
                    'rgba(0, 123, 255, 0.2)',
                    'rgba(255, 205, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(0, 123, 255, 1)',
                    'rgba(255, 205, 86, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="w-full h-full">
            <PolarArea data={data} options={{ maintainAspectRatio: true }} />
        </div>
    );
};

export default PolarAreaChart;
