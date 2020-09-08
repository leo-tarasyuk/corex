export function getChosenProducts(chosenProducts, idProduct) {

    if (!chosenProducts) return [];

    if (chosenProducts.length > 0) {
        if (chosenProducts.includes(idProduct)) {
            return chosenProducts.filter(item => item !== idProduct);
        } else {
            chosenProducts.push(idProduct)
        }
    }
    else chosenProducts.push(idProduct);

    return [...chosenProducts];
}