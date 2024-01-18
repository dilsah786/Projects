import {
  ADD_ONE,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
  SUB_ONE,
} from "./actionTypes";

export const ADD = (payload) => {
  return { type: ADD_ONE, payload: 1 };
};

export const SUB = (payload) => {
  return { type: SUB_ONE, payload: 1 };
};

export const getProductsRequest = () =>{
    return {type: GET_PRODUCT_PENDING}
}

export const getProductsSuccess = (payload) =>{
    return {type: GET_PRODUCT_SUCCESS,payload}
}

export const getProductsFailure = () =>{
    return {type: GET_PRODUCT_FAILURE}
}