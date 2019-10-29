// this is where we make our request to the backend
import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DEL_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            extraData: res.data
        })).catch(err => console.log(err));
    };
    
export const addItem = item => dispatch => {
    axios.post('/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            extraData: res.data
        }))
};

export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: DEL_ITEM,
            extraData: id
        }))
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}