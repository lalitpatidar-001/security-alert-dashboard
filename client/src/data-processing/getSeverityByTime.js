import { security_data } from "../data";

export const getSeverityByTime = () => {
    const severityData = [];

    // Determine the starting index based on the length of security_data
    const startIndex = Math.max(0, security_data.length - 20);

    // Iterate through the available data points
    for (let i = startIndex; i < security_data.length; i++) {
        const data = security_data[i];
        const timestamp = data.timestamp;
        const severity = data.alert?.severity;
        const signature = data.alert?.signature;

        // Convert timestamp to date string (e.g., YYYY-MM-DD)
        const date = new Date(timestamp).toISOString().split('T')[0];

        severityData.push({ date, severity, signature });
    }

    return severityData;
};
