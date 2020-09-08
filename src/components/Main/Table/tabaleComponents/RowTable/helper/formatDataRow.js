export function formatDataRow(data) {
    if (!data) return {};

    const property = Object.keys(data);

    const listDataCell = property.reduce((acc, item) => {
        acc.push([item, data[item]]);

        return acc;
    }, [])

    return listDataCell;
}

