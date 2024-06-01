import { security_data } from "../data";

export const getSignatureByPortData = () => {
    const signatureByPort = {};

    security_data.forEach((data) => {
        const signature = data.alert?.signature;
        const port = data?.dest_port;

        if (!signatureByPort[port]) {
            signatureByPort[port] = {};
        }

        if (!signatureByPort[port][signature]) {
            signatureByPort[port][signature] = 1;
        } else {
            signatureByPort[port][signature]++;
        }
    });

    // Convert data to format suitable for line chart
    const lineChartData = Object.keys(signatureByPort).map((port) => {
        const signatureCounts = signatureByPort[port];
        const signatures = Object.keys(signatureCounts);
        const counts = signatures.map((signature) => signatureCounts[signature]);

        return {
            label: `Port ${port}`,
            data: counts,
            borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
            fill: false,
        };
    });

    return lineChartData;
};
