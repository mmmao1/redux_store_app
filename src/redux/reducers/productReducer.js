import { ActionTypes } from "../constants/action-types";

// reducers change the store state

// define initial state
const initialState = {
    // list of objects
    products: [], 
};

// this pattern matches "action" to "{type, payload}"
// this only affects "allProducts" of store
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS: 
            // we are mounting the old state, and overwriting it
            return {
                ...state, 
                products: payload
            };
        default: 
            return state;
    }
}

// state = {} will clear the state
// this only affects "product" of store
export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            // clear everything
            return {};
        default:
            return state;
    }
}