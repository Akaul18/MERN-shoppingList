// this is where we make our request to the backend
import { GET_ITEMS, ADD_ITEM, DEL_ITEMS } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};