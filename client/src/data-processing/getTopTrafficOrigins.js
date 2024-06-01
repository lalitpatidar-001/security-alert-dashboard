import { security_data } from "../data";

export const getTopTrafficOrigins = () => {
    const origins = [];
    const severityOfTopOrigins = {};

    // Iterate over the security_data to fill origins and severityOfTopOrigins
    security_data.forEach((item) => {
        const origin = item?.src_ip;
        const severity = item?.alert?.severity;
        
        if (origin && severity !== undefined) {
            if (!origins.includes(origin)) {
                origins.push(origin);
                severityOfTopOrigins[origin] = [];
            }
            severityOfTopOrigins[origin].push(severity);
        }
    });

    // Calculate the average severity for each origin
    const avgSeverities = origins.map(origin => {
        const totalSeverity = severityOfTopOrigins[origin].reduce((acc, curr) => acc + curr, 0);
        return totalSeverity / severityOfTopOrigins[origin].length;
    });

    // Combine origins and avgSeverities into an array of objects for easier sorting
    const combined = origins.map((origin, index) => ({
        origin,
        avgSeverity: avgSeverities[index]
    }));

    // Sort the combined array by avgSeverity in descending order and get the top 10
    const top10 = combined.sort((a, b) => b.avgSeverity - a.avgSeverity).slice(0, 10);

    // Separate the top 10 data into origins and avgSeverities arrays
    const top10Origins = top10.map(item => item.origin);
    const top10AvgSeverities = top10.map(item => item.avgSeverity);

    return {
        origins: top10Origins,
        avgSeverities: top10AvgSeverities
    };
};
