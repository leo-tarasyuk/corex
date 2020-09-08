export function formatDataTable(data) {
    if (!data) return [];

    const { nameColumn, dataTable } = data.reduce((acc, item) => {
        const { name, ...data } = item;
        acc.nameColumn.push(name);
        acc.dataTable.push(data);
        return acc;
    }, {
        nameColumn: [],
        dataTable: [],
    })

    return {
        nameColumn,
        dataTable,
    };
}
export function getDataHeaderTable(data) {
    if (!data) return [];

    const { name, ...changeData } = data.products[0];
    const dataHeader = Object.keys(changeData);

    return dataHeader;

}