import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
    const data = {
        labels: Object.keys(chartData[0].data).map((signature) => `Signature ${signature}`),
        datasets: chartData.map((lineData) => ({
            label: lineData.label,
            data: Object.values(lineData.data),
            borderColor: lineData.borderColor,
            fill: false,
        })),
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="w-full h-full">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
