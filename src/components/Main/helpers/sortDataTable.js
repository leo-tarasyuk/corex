export function sortTable(data, isSortTable, column) {
    switch (column) {
        case "Manufacturer": return sortString(data, isSortTable, column);
        case "Price": return sortNumber(data, isSortTable, column);

        default: return data;
    }
}

function sortString(data, isSortTable, column) {
    if (!data) return [];

    if (isSortTable === true) {
        return data.sort((a, b) => {
            return (a[`${column}`] < b[`${column}`]) && -1;
        })
    }
    else if (isSortTable === false) {
        return data.sort((a, b) => {
            return (b[`${column}`] < a[`${column}`]) && -1;
        })
    }
    else return data;
}

function sortNumber(data, sortPrice, column) {
    if (!data) return [];

    if (sortPrice === true) {
        return data.sort((a, b) => {
            return (a[`${column}`].minPrice < b[`${column}`].minPrice) && -1;
        })
    }
    else if (sortPrice === false) {
        return data.sort((a, b) => {
            return (b[`${column}`].maxPrice < a[`${column}`].maxPrice) && -1;
        })
    }
    else return data;
}
