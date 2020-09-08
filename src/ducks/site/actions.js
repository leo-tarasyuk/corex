import apiCurrentRates from '../../api/apiCurrentRates';
import { getChosenProducts } from './helpers/getChosenProducts';

import {
    SET_DATA,
    SET_CHOSEN_PRODUCT,
    SET_STATE_BUTTON,
    SET_PRICE
} from './index';

export const getDataJSON = () => dispatch => {
    apiCurrentRates.getCurrentRates()
        .then(response => {
            const responseData = response.data;

            dispatch({
                type: SET_DATA,
                payload: { responseData },
            });
        })
}

export const countChooseProduct = idProduct => (dispatch, getState) => {
    const { site: { chosenProducts } } = getState();
    const listProducts = getChosenProducts(chosenProducts, idProduct);

    dispatch({
        type: SET_CHOSEN_PRODUCT,
        payload: listProducts,
    })
}

export const setChangeSort = (column) => (dispatch, getState) => {
    const { site: { isSortTable } } = getState();

    dispatch({
        type: SET_STATE_BUTTON,
        payload: { isSortTable: !isSortTable, column },
    })
}

export const setStateButton = (isState, column)=> dispatch => {
    dispatch({
        type: SET_PRICE,
        payload: { isState, column },
    })
}
