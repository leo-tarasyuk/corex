import { Record } from 'immutable';
import {
    SET_DATA,
    SET_CHOSEN_PRODUCT,
    SET_STATE_BUTTON,
    SET_PRICE
} from './index';

const initialStore = Record({
    tableData: '',
    chosenProducts: [],
    isSortTable: null,
    columnSort: '',
})

export default function reducer(state = new initialStore(), action) {
    const { type, payload } = action;
    switch (type) {
        case SET_DATA:
            return state.merge({
                'tableData': payload.responseData,
            })
        case SET_CHOSEN_PRODUCT:
            return state.merge({
                'chosenProducts': payload,
            })
        case SET_STATE_BUTTON:
            return state.merge({
                'isSortTable': payload.isSortTable,
                'columnSort': payload.column,
            })
        case SET_PRICE:
            return state.merge({
                'isSortTable': payload.isState,
                'columnSort': payload.column
            })
        default: return state;
    }
}
