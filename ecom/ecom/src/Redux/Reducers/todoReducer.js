import { GET_PRODUCT_FAILURE, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, GET_TODO_FAILURE, GET_TODO_PENDING, GET_TODO_SUCCESS } from "../actionTypes";

const todoData = {
    todos :[],
    loading:true,
}


export const todoReducer = (state=todoData, {type,payload}) => {
  switch (type) {
    case GET_TODO_PENDING:{
        return{
           ...state,
           loading:payload
        }
    }
    case GET_TODO_SUCCESS:{
        return{
            ...state,
            loading:false,
            todos:payload
        }
    }
    case GET_TODO_FAILURE:{
        return{
         ...state,
         loading:payload
        }
    }
    default:{
      return state;
    }
  }
};










