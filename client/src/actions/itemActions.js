// this is where we make our request to the backend
import { GET_ITEMS, ADD_ITEM, DEL_ITEM } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const deleteItem = id => {
    return {
        type: DEL_ITEM,
        extraData: id
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        extraData: item
    };
};