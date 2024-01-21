import {
  ADD_ONE,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
  SUB_ONE,
} from "../actionTypes";

const initialState = {
  products: [],
  loading: true,
  counter: 0,
};
export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ONE: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case SUB_ONE: {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    }
    case GET_PRODUCT_FAILURE: {
      return {
        ...state,
        products: [],
        loading: action.payload,
      };
    }
    case GET_PRODUCT_PENDING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};
