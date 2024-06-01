import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { getSeverityByTime } from '../../data-processing/getSeverityByTime';


const BarChart = ({ }) => {
    // Get severity data by time
    const severityByYear = getSeverityByTime();

    // Extract time, severity, and signature arrays
    const timeArray = severityByYear?.map((item) => item.date);
    const severityArray = severityByYear?.map((item) => item.severity);
    const signatureArray = severityByYear?.map((item) => item.signature);

    // Create bar chart data
    const data = {
        labels: timeArray,
        datasets: [
            {
                label: 'Severity',
                data: severityArray,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="w-full h-full">
            <Bar data={data} options={{ maintainAspectRatio: false }} />
        </div>
    );
};

export default BarChart;
