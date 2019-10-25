// A reducer is basically where our actual state is going to go
import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DEL_ITEM } from '../actions/types';

const initialState = {
    items : [
        { id: uuid(), name: "Milk"},
        { id: uuid(), name: "Eggs"},
        { id: uuid(), name: "Flowers"},
        { id: uuid(), name: "Chicken"}
    ] // actually this data will come from the database
};

export default (state = initialState, action) => {

    switch(action.type){
        case GET_ITEMS:
            return {
                ...state //will return the initial state when action is of type GET_ITEMS
            }

        case DEL_ITEM:
            return {
                ...state,
                items:state.items.filter(item => item.id !== action.extraData)

            }

        case ADD_ITEM:
            return {
                ...state,
                items: [action.extraData, ...state.items]
            }
        default:
            return state;

    }//when an action comes in we want to run a switch case for the type of action we can also use if else

}//takes in two parameters initialstate and the action(its and obj and will have a type) to be performed(i.e get add or delete)