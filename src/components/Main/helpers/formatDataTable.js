export function formatDataTable(data) {
    if (!data) return [];

    const { nameColumn, dataTable } = data.reduce((acc, item) => {
        const { name, ...data } = item;
        acc.dataTable.push(data);
        const { id, Hash, Price } = data;
        acc.nameColumn.push({ name, id, Hash, Price });

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