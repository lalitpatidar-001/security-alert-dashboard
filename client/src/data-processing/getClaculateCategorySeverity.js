import { security_data } from "../data";

export const getCalculateCategorySeverity = () => {
    const categories = [];
    const categorySeverities = {};

    // Iterate over the security_data to fill categories and categorySeverities
    security_data.forEach(item => {
        const category = item.alert?.category;
        const severity = item.alert?.severity;

        if (category && severity !== undefined) {
            if (!categories.includes(category)) {
                categories.push(category);
                categorySeverities[category] = [];
            }
            categorySeverities[category].push(severity);
        }
    });

    // Calculate the average severity for each category
    const avgSeverities = categories.map(category => {
        const totalSeverity = categorySeverities[category].reduce((acc, curr) => acc + curr, 0);
        return totalSeverity / categorySeverities[category].length;
    });

    return {
        categories,
        avgSeverities

    }

}