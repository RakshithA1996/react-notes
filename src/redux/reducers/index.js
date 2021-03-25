import darkReducer from "./darkLight";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    dark : darkReducer,
})

export default rootReducer;
