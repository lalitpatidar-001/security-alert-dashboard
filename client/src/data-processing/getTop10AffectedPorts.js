import { security_data } from "../data";

export const getTop10AffectedPorts = () => {
    const ports = [];
    const severityOfPorts = {};

    security_data.forEach((item) => {
        const port = item?.dest_port;
        const severity = item?.alert?.severity;

        if (port && severity !== undefined) {
            if (!ports.includes(port)) {
                ports.push(port);
                severityOfPorts[port] = [];
            }
            severityOfPorts[port].push(severity);
        }
    });

    const avgSeverities = ports.map(port => {
        const totalSeverity = severityOfPorts[port].reduce((acc, curr) => acc + curr, 0);
        return totalSeverity / severityOfPorts[port].length;
    });

    const combined = ports.map((port, index) => ({
        port,
        avgSeverity: avgSeverities[index]
    }));

    const top10 = combined.sort((a, b) => b.avgSeverity - a.avgSeverity).slice(0, 10);

    const top10Ports = top10.map(item => item.port);
    const top10AvgSeverities = top10.map(item => item.avgSeverity);

    return { ports: top10Ports, avgSeverities: top10AvgSeverities }
}
