import { ADD_ONE, GET_PRODUCT_FAILURE, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, SUB_ONE } from "./actionTypes";

export const reducer = (state, action) => {
    console.log(state, action.payload);
  switch (action.type) {
    case ADD_ONE:{
        return{
           
            ...state,
            counter:state.counter + action.payload
        }
    }
    case SUB_ONE:{
        return{
            
            ...state,
            counter:state.counter - action.payload
        }
    }

    case GET_PRODUCT_SUCCESS:{
        return{         
            ...state,
            loading:false,
            products:action.payload
        }
    }
    case GET_PRODUCT_FAILURE:{
        return{         
            ...state,
            products:[],
            loading:false,
        }
    }
    case GET_PRODUCT_PENDING:{
        return{         
            ...state,
            loading:true,
        }
    }
 
    default:
      return state;
  }
};
