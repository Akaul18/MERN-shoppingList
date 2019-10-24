// we need this just to bring together all our other reducers(in this app items is the only resource or reducer we have)

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    allitems: itemReducer
}) //pass in object with different reducers