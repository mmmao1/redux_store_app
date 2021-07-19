import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

// combining reducers just makes life easier
// the keys of input object are up to you
// keys represent different parts of the state

const reducers = combineReducers({
    allProducts: productReducer, 
    product: selectedProductReducer, 
});

export default reducers